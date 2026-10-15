/* Demande de devis : lignes de produits dynamiques et préparation du message. */

// Valeur envoyée au serveur : l'identifiant du produit (ou son slug s'il n'en a pas)
function quoteOptionValue(product) {
  return String(product.id ?? product.slug);
}

function buildProductOptions() {
  return CATEGORIES.map((category) => {
    const products = getProductsInCategory(category.slug);
    if (!products.length) return '';

    const options = products.map((product) => {
      const price = (product.variants ? 'à partir de ' : '') + formatPrice(product.price);
      return `<option value="${quoteOptionValue(product)}">${escapeHtml(product.name)} – ${price}</option>`;
    });
    return `<optgroup label="${escapeHtml(category.name)}">${options.join('')}</optgroup>`;
  }).join('');
}

// Il faut toujours garder au moins une ligne
function updateRemoveButtons(container) {
  const lines = container.querySelectorAll('.quote-line');
  lines.forEach((line) => {
    line.querySelector('.quote-line-remove').disabled = lines.length === 1;
  });
}

function initQuoteLines() {
  const container = document.getElementById('quote-lines');
  const firstSelect = container.querySelector('select');
  firstSelect.insertAdjacentHTML('beforeend', buildProductOptions());

  // Produit présélectionné depuis une fiche produit : devis.html?produit=slug
  const preselected = getProduct(new URLSearchParams(window.location.search).get('produit'));
  if (preselected) {
    firstSelect.value = quoteOptionValue(preselected);
  }

  document.getElementById('quote-add').addEventListener('click', () => {
    const newLine = container.querySelector('.quote-line').cloneNode(true);
    newLine.querySelector('select').value = '';
    newLine.querySelector('input').value = 1;
    container.appendChild(newLine);
    updateRemoveButtons(container);
    newLine.querySelector('select').focus();
  });

  container.addEventListener('click', (event) => {
    const button = event.target.closest('.quote-line-remove');
    if (!button || button.disabled) return;

    button.closest('.quote-line').remove();
    updateRemoveButtons(container);
    container.querySelector('select').focus();
  });

  updateRemoveButtons(container);
}

function buildQuoteMessage(data) {
  const quantities = data.getAll('quantites[]');
  const productLines = data.getAll('produits[]')
    .map((value, index) => {
      const product = PRODUCTS.find((item) => quoteOptionValue(item) === value);
      return product ? '- ' + (quantities[index] || 1) + ' × ' + product.name : '';
    })
    .filter(Boolean);

  let message = 'Demande de devis\n' + formatFields([
    ['Nom', data.get('nom')],
    ['Email', data.get('email')],
    ['Téléphone', data.get('telephone')],
    ['Entreprise', data.get('entreprise')],
    ['Adresse', data.get('adresse')],
  ]);

  if (productLines.length) {
    message += '\n\nProduits souhaités :\n' + productLines.join('\n');
  }
  if (data.get('message').trim()) {
    message += '\n\nMessage : ' + data.get('message').trim();
  }
  return message;
}

initQuoteLines();
handleFormSubmit(document.getElementById('quote-form'), buildQuoteMessage);
