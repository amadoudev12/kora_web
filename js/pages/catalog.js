/* Page Produits : recherche, filtre par catégorie et par prix, tri et pagination.
   Tous les filtres sont lus dans l'URL,
   ce qui permet de partager ou d'ajouter en favori une recherche. */

const PRODUCTS_PER_PAGE = 12;

const SORT_FUNCTIONS = {
  recent: null, // ordre du catalogue
  prix_asc: (a, b) => a.price - b.price,
  prix_desc: (a, b) => b.price - a.price,
  nom_asc: (a, b) => a.name.localeCompare(b.name, 'fr'),
};

function toPositiveNumber(value) {
  const number = parseFloat(value);
  return Number.isFinite(number) && number >= 0 ? number : null;
}

// Minuscules et sans accents, pour que "ecran" trouve "Écrans"
function normalizeText(text) {
  return text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function readFiltersFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const categorie = params.get('categorie') || '';
  const tri = params.get('tri') || 'recent';

  return {
    search: (params.get('search') || '').trim(),
    categorie: getCategory(categorie) ? categorie : '',
    prixMin: toPositiveNumber(params.get('prix_min')),
    prixMax: toPositiveNumber(params.get('prix_max')),
    tri: tri in SORT_FUNCTIONS ? tri : 'recent',
    page: Math.max(1, parseInt(params.get('page'), 10) || 1),
  };
}

function buildCatalogUrl(filters) {
  const params = new URLSearchParams();
  if (filters.search) params.set('search', filters.search);
  if (filters.categorie) params.set('categorie', filters.categorie);
  if (filters.prixMin !== null) params.set('prix_min', filters.prixMin);
  if (filters.prixMax !== null) params.set('prix_max', filters.prixMax);
  if (filters.tri !== 'recent') params.set('tri', filters.tri);
  if (filters.page > 1) params.set('page', filters.page);

  const query = params.toString();
  return 'produits.html' + (query ? '?' + query : '');
}

function filterProducts(filters) {
  const searchWords = normalizeText(filters.search).split(/\s+/).filter(Boolean);

  const results = PRODUCTS.filter((product) => {
    if (filters.categorie && product.category !== filters.categorie) return false;
    if (filters.prixMin !== null && product.price < filters.prixMin) return false;
    if (filters.prixMax !== null && product.price > filters.prixMax) return false;

    const category = getCategory(product.category);
    const searchableText = normalizeText(product.name + ' ' + (category ? category.name : ''));
    return searchWords.every((word) => searchableText.includes(word));
  });

  const sortFunction = SORT_FUNCTIONS[filters.tri];
  return sortFunction ? results.sort(sortFunction) : results;
}

function getCatalogTitle(filters) {
  if (filters.search) return 'Résultats pour « ' + filters.search + ' »';
  if (filters.categorie) return getCategory(filters.categorie).name;
  return 'Tous nos produits';
}

function renderCategoryFilter(filters) {
  const allLink = `
    <li>
      <a href="${buildCatalogUrl({ ...filters, categorie: '', page: 1 })}" ${filters.categorie ? '' : 'aria-current="true"'}>
        Toutes <span class="count">${PRODUCTS.length}</span>
      </a>
    </li>`;

  const categoryLink = (category) => {
    const isActive = category.slug === filters.categorie;
    return `
      <li>
        <a href="${buildCatalogUrl({ ...filters, categorie: category.slug, page: 1 })}" ${isActive ? 'aria-current="true"' : ''}>
          ${escapeHtml(category.name)} <span class="count">${getProductsInCategory(category.slug).length}</span>
        </a>
      </li>`;
  };

  // Catégories rangées par univers, avec le nom de l'univers en intertitre
  const groups = UNIVERSES.map((universe) =>
    `<li class="filter-universe" aria-hidden="true">${escapeHtml(universe.name)}</li>` +
    universe.categories.map((slug) => categoryLink(getCategory(slug))).join('')
  );

  document.getElementById('category-filter').innerHTML = allLink + groups.join('');
}

function renderActiveFilters(filters) {
  const chips = [];

  if (filters.search) {
    chips.push(['Recherche : ' + filters.search, { ...filters, search: '' }]);
  }
  if (filters.categorie) {
    chips.push(['Catégorie : ' + getCategory(filters.categorie).name, { ...filters, categorie: '' }]);
  }
  if (filters.prixMin !== null) {
    chips.push(['Prix min : ' + formatPrice(filters.prixMin), { ...filters, prixMin: null }]);
  }
  if (filters.prixMax !== null) {
    chips.push(['Prix max : ' + formatPrice(filters.prixMax), { ...filters, prixMax: null }]);
  }

  const container = document.getElementById('active-filters');
  container.hidden = chips.length === 0;
  if (!chips.length) return;

  container.innerHTML = chips.map(([label, newFilters]) => `
    <li>
      <a class="chip" href="${buildCatalogUrl({ ...newFilters, page: 1 })}" aria-label="Retirer le filtre ${escapeHtml(label)}">
        ${escapeHtml(label)}
        <svg class="icon" aria-hidden="true"><use href="#icon-xmark"></use></svg>
      </a>
    </li>`).join('') + '<li><a class="chips-clear" href="produits.html">Tout effacer</a></li>';
}

function renderPagination(filters, totalPages) {
  const container = document.getElementById('catalog-pagination');
  container.hidden = totalPages <= 1;
  if (totalPages <= 1) return;

  const current = filters.page;
  const pageUrl = (page) => buildCatalogUrl({ ...filters, page });
  let html = '<ul>';

  html += current > 1
    ? `<li><a href="${pageUrl(current - 1)}" aria-label="Page précédente"><svg class="icon" aria-hidden="true"><use href="#icon-chevron-left"></use></svg></a></li>`
    : '<li><span class="is-disabled" aria-hidden="true"><svg class="icon"><use href="#icon-chevron-left"></use></svg></span></li>';

  for (let page = 1; page <= totalPages; page++) {
    html += `<li><a href="${pageUrl(page)}" aria-label="Page ${page}" ${page === current ? 'aria-current="page"' : ''}>${page}</a></li>`;
  }

  html += current < totalPages
    ? `<li><a href="${pageUrl(current + 1)}" aria-label="Page suivante"><svg class="icon" aria-hidden="true"><use href="#icon-chevron-right"></use></svg></a></li>`
    : '<li><span class="is-disabled" aria-hidden="true"><svg class="icon"><use href="#icon-chevron-right"></use></svg></span></li>';

  container.innerHTML = html + '</ul>';
}

function renderCatalog() {
  const filters = readFiltersFromUrl();
  const results = filterProducts(filters);
  const totalPages = Math.max(1, Math.ceil(results.length / PRODUCTS_PER_PAGE));
  filters.page = Math.min(filters.page, totalPages);

  const title = getCatalogTitle(filters);
  document.getElementById('catalog-title').textContent = title;
  document.title = title + ' | Kora';

  document.getElementById('catalog-count').innerHTML =
    `<strong>${results.length}</strong> produit${results.length > 1 ? 's' : ''}` +
    (totalPages > 1 ? ` · page ${filters.page} sur ${totalPages}` : '');

  const start = (filters.page - 1) * PRODUCTS_PER_PAGE;
  renderProductGrid(document.getElementById('catalog-grid'), results.slice(start, start + PRODUCTS_PER_PAGE));
  document.getElementById('catalog-empty').hidden = results.length > 0;

  renderCategoryFilter(filters);
  renderActiveFilters(filters);
  renderPagination(filters, totalPages);
  fillFilterForm(filters);
}

function fillFilterForm(filters) {
  const form = document.getElementById('catalog-form');
  form.elements.prix_min.value = filters.prixMin ?? '';
  form.elements.prix_max.value = filters.prixMax ?? '';
  form.elements.tri.value = filters.tri;
}

function initFilterForm() {
  const form = document.getElementById('catalog-form');

  // Le prix et le tri sont combinés avec la recherche et la catégorie en cours
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = buildCatalogUrl({
      ...readFiltersFromUrl(),
      prixMin: toPositiveNumber(form.elements.prix_min.value),
      prixMax: toPositiveNumber(form.elements.prix_max.value),
      tri: form.elements.tri.value,
      page: 1,
    });
  });

  form.elements.tri.addEventListener('change', () => form.requestSubmit());
}

// Sur mobile, les filtres s'ouvrent dans un panneau latéral
function initFiltersDrawer() {
  const drawer = document.getElementById('filters');
  const openButton = document.querySelector('.filters-toggle');
  const closeButton = drawer.querySelector('.filters-close');
  const backdrop = document.querySelector('.filters-backdrop');

  function setDrawerOpen(isOpen) {
    drawer.classList.toggle('is-open', isOpen);
    backdrop.classList.toggle('is-visible', isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
    openButton.setAttribute('aria-expanded', String(isOpen));
    (isOpen ? closeButton : openButton).focus();
  }

  openButton.addEventListener('click', () => setDrawerOpen(true));
  closeButton.addEventListener('click', () => setDrawerOpen(false));
  backdrop.addEventListener('click', () => setDrawerOpen(false));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && drawer.classList.contains('is-open')) {
      setDrawerOpen(false);
    }
  });

  window.matchMedia('(min-width: 62em)').addEventListener('change', () => {
    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-visible');
    document.body.classList.remove('no-scroll');
    openButton.setAttribute('aria-expanded', 'false');
  });
}

renderCatalog();
initFilterForm();
initFiltersDrawer();
