/* Page Catégories : les catégories regroupées par univers. */

function createCategoryCard(category) {
  return `
    <li>
      <a class="category-card" href="${categoryUrl(category)}">
        <img src="${categoryImageUrl(category)}" alt="" loading="lazy" decoding="async" width="300" height="225">
        <span class="category-card-text">
          <span class="category-card-name">${escapeHtml(category.name)}</span>
          <span class="category-card-count">${productCountLabel(getProductsInCategory(category.slug).length)}</span>
          <span class="category-card-desc">${escapeHtml(category.description)}</span>
        </span>
      </a>
    </li>`;
}

function createUniverseSection(universe) {
  return `
    <section class="universe-section">
      <div class="section-header">
        <div>
          <h2>${escapeHtml(universe.name)}</h2>
          <p>${escapeHtml(universe.description)}</p>
        </div>
      </div>
      <ul class="category-grid">${universe.categories.map((slug) => createCategoryCard(getCategory(slug))).join('')}</ul>
    </section>`;
}

document.getElementById('category-list').innerHTML = UNIVERSES.map(createUniverseSection).join('');
