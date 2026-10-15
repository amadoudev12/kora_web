/* Fonctionnalités communes à toutes les pages : menu mobile, recherche,
   animations d'apparition, notifications et chat en ligne. */

function whatsappUrl(message) {
  const text = message ? '?text=' + encodeURIComponent(message) : '';
  return 'https://wa.me/' + SITE.whatsappNumber + text;
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('is-visible');

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('is-visible'), 4000);
}

function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  function setMenuOpen(isOpen) {
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    nav.classList.toggle('is-open', isOpen);
  }

  toggle.addEventListener('click', () => {
    setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  // Referme le menu si l'écran passe en version bureau
  window.matchMedia('(min-width: 68.75em)').addEventListener('change', () => setMenuOpen(false));
}

function initSearchField() {
  const input = document.getElementById('search-input');
  const currentSearch = new URLSearchParams(window.location.search).get('search');
  if (input && currentSearch) {
    input.value = currentSearch;
  }
}

// Les sections marquées data-reveal apparaissent en douceur lors du défilement.
// Seules celles situées sous l'écran sont masquées, pour éviter tout clignotement.
function initRevealOnScroll() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-hidden');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('[data-reveal]').forEach((element) => {
    if (element.getBoundingClientRect().top > window.innerHeight) {
      element.classList.add('is-hidden');
      observer.observe(element);
    }
  });
}

function initFooterYear() {
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
}

// Bouton WhatsApp toujours visible : le contact principal
function addFloatingWhatsapp() {
  const link = document.createElement('a');
  link.className = 'whatsapp-float';
  link.href = whatsappUrl('Bonjour, je vous contacte depuis le site Kora.');
  link.target = '_blank';
  link.rel = 'noopener';
  link.setAttribute('aria-label', 'Écrire à Kora sur WhatsApp');
  link.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#icon-whatsapp"></use></svg>'
    + '<span class="whatsapp-float-label">WhatsApp</span>';
  document.body.appendChild(link);
}

// Chat Tawk.to, chargé après la page pour ne pas ralentir l'affichage.
// Il est placé en bas à gauche pour laisser la droite au bouton WhatsApp.
function loadChatWidget() {
  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();
  window.Tawk_API.customStyle = {
    visibility: {
      desktop: { position: 'bl' },
      mobile: { position: 'bl' },
    },
  };
  window.Tawk_API.onLoad = () => {
    if (window.Tawk_API.isChatHidden()) {
      window.Tawk_API.showWidget();
    }
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = SITE.tawkScript;
  script.charset = 'UTF-8';
  script.setAttribute('crossorigin', '*');
  document.body.appendChild(script);
}

initMobileMenu();
initSearchField();
initRevealOnScroll();
initFooterYear();
addFloatingWhatsapp();

if (document.readyState === 'complete') {
  loadChatWidget();
} else {
  window.addEventListener('load', loadChatWidget);
}
