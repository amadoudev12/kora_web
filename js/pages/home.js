/* Page d'accueil : produit à la une, univers et derniers produits. */

const HOME_PRODUCT_COUNT = 8;

// Étiquette de prix du produit mis en avant (le slug est indiqué dans le HTML)
function renderFeaturedProduct() {
  const tag = document.getElementById('hero-product');
  const product = getProduct(tag.dataset.slug);
  if (!product) return;

  tag.href = productUrl(product);
  tag.querySelector('strong').textContent = product.name;
  tag.querySelector('.hero-tag-price').textContent = formatPrice(product.price);
}

function createUniverseCard(universe) {
  const categories = universe.categories.map(getCategory);
  const links = categories.map((category) => `
    <li>
      <a href="${categoryUrl(category)}">
        ${escapeHtml(category.name)} <span>${getProductsInCategory(category.slug).length}</span>
      </a>
    </li>`).join('');

  return `
    <li class="universe-card">
      <div>
        <h3>${escapeHtml(universe.name)}</h3>
        <p class="universe-count">${productCountLabel(countProductsInUniverse(universe))} · ${escapeHtml(universe.description)}</p>
        <ul class="universe-links">${links}</ul>
      </div>
      <div class="universe-visual">
        <img src="${universe.image ? productImageUrl(universe.image) : categoryImageUrl(categories[0])}" alt="" loading="lazy" decoding="async" width="170" height="170">
      </div>
    </li>`;
}

// Le produit le plus récent de chaque rayon, pour une sélection variée
function getLatestProductPerCategory(count) {
  const seenCategories = new Set();
  return PRODUCTS.filter((product) => {
    if (seenCategories.has(product.category)) return false;
    seenCategories.add(product.category);
    return true;
  }).slice(0, count);
}

renderFeaturedProduct();
document.getElementById('home-universes').innerHTML = UNIVERSES.map(createUniverseCard).join('');
renderProductGrid(document.getElementById('latest-products'), getLatestProductPerCategory(HOME_PRODUCT_COUNT));
