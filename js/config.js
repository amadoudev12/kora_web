/* Informations de l'entreprise utilisées par les scripts (liens WhatsApp, chat…). */
const SITE = {
  name: 'Kora',
  whatsappNumber: '2250715687290', // +225 07 15 68 72 90
  tawkScript: 'https://embed.tawk.to/6abe3cd1108e9a34426a2f5b/1k3rhr59s',
};

// Chemin vers la racine du site, défini sur chaque page : <body data-root="../">
const ROOT = document.body.dataset.root || '';
