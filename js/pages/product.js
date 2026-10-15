/* Fiche produit : le produit est choisi avec le paramètre ?slug= de l'URL. */

const RELATED_PRODUCT_COUNT = 4;

function updateOffer(product, variant) {
  const price = variant ? variant.price : product.price;
  const inStock = variant ? variant.stock > 0 : product.inStock;
  const oldPrice = !variant && product.oldPrice
    ? '<span class="price-old">' + formatPrice(product.oldPrice) + '</span>'
    : '';

  document.getElementById('product-price').innerHTML = formatPrice(price) + oldPrice;

  const stock = document.getElementById('product-stock');
  stock.classList.toggle('is-out', !inStock);
  if (!inStock) {
    stock.textContent = 'Rupture de stock';
  } else {
    stock.textContent = variant ? 'En stock (' + variant.stock + ')' : 'En stock';
  }

  // Le bouton principal et celui de la barre mobile ouvrent le même message
  const interestUrl = whatsappUrl(interestMessage(product.name, variant ? variant.name : ''));
  document.getElementById('product-whatsapp').href = interestUrl;
  document.getElementById('sticky-whatsapp').href = interestUrl;
  document.getElementById('sticky-price').textContent = formatPrice(price);
}

// Sur mobile, la barre « prix + Je suis intéressé » apparaît dès que le bouton principal sort de l'écran
function initStickyBar(product) {
  const bar = document.getElementById('product-sticky-bar');
  const mainButton = document.getElementById('product-whatsapp');
  document.getElementById('sticky-name').textContent = product.name;
  bar.hidden = false;

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(([entry]) => {
    const buttonIsAbove = entry.boundingClientRect.top < 0;
    bar.classList.toggle('is-visible', !entry.isIntersecting && buttonIsAbove);
  });
  observer.observe(mainButton);
}

function renderBreadcrumb(product, category) {
  let html = '';
  if (category) {
    html += `<li><a href="${categoryUrl(category)}">${escapeHtml(category.name)}</a></li>`;
  }
  html += `<li aria-current="page">${escapeHtml(product.name)}</li>`;
  document.getElementById('product-breadcrumb').insertAdjacentHTML('beforeend', html);
}

function renderGallery(product) {
  const mainImage = document.getElementById('product-image');
  mainImage.src = productImageUrl(product.images[0]);
  mainImage.alt = product.name;

  if (product.images.length < 2) return;

  const thumbs = document.getElementById('product-thumbs');
  thumbs.innerHTML = product.images.map((image, index) => `
    <li>
      <button class="gallery-thumb" type="button" data-image="${productImageUrl(image)}"
              aria-pressed="${index === 0}" aria-label="Afficher l'image ${index + 1}">
        <img src="${productImageUrl(image)}" alt="" width="60" height="60">
      </button>
    </li>`).join('');
  thumbs.hidden = false;

  thumbs.addEventListener('click', (event) => {
    const button = event.target.closest('.gallery-thumb');
    if (!button) return;

    mainImage.src = button.dataset.image;
    thumbs.querySelectorAll('.gallery-thumb').forEach((thumb) => {
      thumb.setAttribute('aria-pressed', String(thumb === button));
    });
  });
}

function renderVariants(product) {
  const group = document.getElementById('product-variants');
  const options = document.getElementById('variant-options');
  const currentName = document.getElementById('variant-current');

  document.getElementById('variant-label').textContent = product.variantLabel + ' :';
  options.innerHTML = product.variants.map((variant, index) => `
    <button class="variant-btn" type="button" data-index="${index}" aria-pressed="${index === 0}">
      ${escapeHtml(variant.name)}
    </button>`).join('');
  group.hidden = false;

  function selectVariant(index) {
    const variant = product.variants[index];
    currentName.textContent = variant.name;
    options.querySelectorAll('.variant-btn').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.index === String(index)));
    });
    updateOffer(product, variant);
  }

  options.addEventListener('click', (event) => {
    const button = event.target.closest('.variant-btn');
    if (button) selectVariant(Number(button.dataset.index));
  });

  selectVariant(0);
}

function renderSpecs(product) {
  if (!product.specs.length) return;

  document.getElementById('product-specs-body').innerHTML = product.specs.map((spec) => {
    const value = Array.isArray(spec.value)
      ? '<ul>' + spec.value.map((item) => '<li>' + escapeHtml(item) + '</li>').join('') + '</ul>'
      : escapeHtml(spec.value);
    return `<tr><th scope="row">${escapeHtml(spec.label)}</th><td>${value}</td></tr>`;
  }).join('');

  document.getElementById('product-specs').hidden = false;
}

function renderRelatedProducts(product) {
  const related = getProductsInCategory(product.category)
    .filter((item) => item.slug !== product.slug)
    .slice(0, RELATED_PRODUCT_COUNT);
  if (!related.length) return;

  renderProductGrid(document.getElementById('related-grid'), related);
  document.getElementById('related').hidden = false;
}

// Données structurées : aident les moteurs de recherche à comprendre la fiche
function addStructuredData(product) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: new URL(productImageUrl(product.images[0]), window.location.href).href,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'XOF',
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      url: window.location.href,
    },
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

function initReviewForm(product) {
  const toggle = document.getElementById('review-toggle');
  const form = document.getElementById('review-form');
  form.elements.produit_id.value = product.id ?? '';

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(isOpen));
    form.hidden = !isOpen;
    if (isOpen) form.elements.nom.focus();
  });

  handleFormSubmit(form, (data) => 'Avis sur le produit : ' + product.name + '\n' + formatFields([
    ['Note', data.get('note') + '/5'],
    ['Nom', data.get('nom')],
    ['Email', data.get('email')],
    ['Téléphone', data.get('telephone')],
    ['Commentaire', data.get('commentaire')],
  ]));
}

function showProductNotFound() {
  document.title = 'Produit introuvable | Kora';
  document.getElementById('product-breadcrumb').insertAdjacentHTML('beforeend', '<li aria-current="page">Produit introuvable</li>');
  document.getElementById('product-not-found').hidden = false;
}

function renderProductPage() {
  const slug = new URLSearchParams(window.location.search).get('slug');
  const product = getProduct(slug);
  if (!product) {
    showProductNotFound();
    return;
  }

  const category = getCategory(product.category);
  document.title = product.name + ' | Kora';
  document.querySelector('meta[name="description"]').content = product.description.slice(0, 155);

  renderBreadcrumb(product, category);
  renderGallery(product);

  const categoryLink = document.getElementById('product-category');
  if (category) {
    categoryLink.textContent = category.name;
    categoryLink.href = categoryUrl(category);
  } else {
    categoryLink.hidden = true;
  }

  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-quote').href = 'devis.html?produit=' + encodeURIComponent(product.slug);

  if (product.variants) {
    renderVariants(product);
  } else {
    updateOffer(product, null);
  }

  renderSpecs(product);
  renderRelatedProducts(product);
  initReviewForm(product);
  initStickyBar(product);
  addStructuredData(product);

  document.getElementById('product').hidden = false;
}

renderProductPage();
