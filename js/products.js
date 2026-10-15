/* Fonctions partagées pour lire le catalogue et afficher les produits. */

function formatPrice(amount) {
  // Espaces insécables : le prix ne se coupe jamais sur deux lignes
  return amount.toLocaleString('fr-FR').replace(/\s/g, ' ') + ' FCFA';
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function getProduct(slug) {
  return PRODUCTS.find((product) => product.slug === slug);
}

function getCategory(slug) {
  return CATEGORIES.find((category) => category.slug === slug);
}

function getProductsInCategory(categorySlug) {
  return PRODUCTS.filter((product) => product.category === categorySlug);
}

// La première image de la catégorie sert d'illustration
function categoryImageUrl(category) {
  const firstProduct = PRODUCTS.find((product) => product.category === category.slug);
  return firstProduct ? productImageUrl(firstProduct.images[0]) : '';
}

function countProductsInUniverse(universe) {
  return universe.categories.reduce((total, slug) => total + getProductsInCategory(slug).length, 0);
}

function productCountLabel(count) {
  return count + ' produit' + (count > 1 ? 's' : '');
}

function productUrl(product) {
  return ROOT + 'pages/produit.html?slug=' + encodeURIComponent(product.slug);
}

function categoryUrl(category) {
  return ROOT + 'pages/produits.html?categorie=' + encodeURIComponent(category.slug);
}

function productImageUrl(fileName) {
  return ROOT + 'images/products/' + fileName;
}

// Message pré-rempli envoyé sur WhatsApp quand on clique sur « Je suis intéressé »
function interestMessage(productName, variantName) {
  const fullName = variantName ? productName + ' (' + variantName + ')' : productName;
  return 'Bonjour, je suis intéressé par le produit ' + fullName + '. Pouvez-vous me donner plus d\'informations ?';
}

function priceHtml(product) {
  let html = '';
  if (product.variants) {
    html += '<span class="price-from">À partir de</span>';
  }
  html += '<span>' + formatPrice(product.price) + '</span>';
  if (product.oldPrice) {
    html += '<span class="price-old">' + formatPrice(product.oldPrice) + '</span>';
  }
  return html;
}

function createProductCard(product) {
  const category = getCategory(product.category);
  const name = escapeHtml(product.name);

  return `
    <li>
      <article class="product-card">
        <div class="product-card-media">
          <img src="${productImageUrl(product.images[0])}" alt="" loading="lazy" decoding="async" width="400" height="400">
          ${product.oldPrice ? '<span class="badge badge-promo">Promo</span>' : ''}
        </div>
        <div class="product-card-body">
          <span class="product-card-category">${category ? escapeHtml(category.name) : ''}</span>
          <h3 class="product-card-title"><a href="${productUrl(product)}">${name}</a></h3>
          <p class="product-card-price">${priceHtml(product)}</p>
          <span class="stock ${product.inStock ? '' : 'is-out'}">${product.inStock ? 'En stock' : 'Rupture de stock'}</span>
          <a class="btn btn-outline btn-sm btn-block" href="${whatsappUrl(interestMessage(product.name))}" target="_blank" rel="noopener">
            <svg class="icon icon-whatsapp" aria-hidden="true"><use href="#icon-whatsapp"></use></svg>
            Je suis intéressé<span class="visually-hidden"> par ${name} (WhatsApp)</span>
          </a>
        </div>
      </article>
    </li>`;
}

function renderProductGrid(container, products) {
  container.innerHTML = products.map(createProductCard).join('');
}
