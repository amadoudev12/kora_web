# Kora — site web

Site vitrine et catalogue de Kora, en HTML, CSS et JavaScript (sans framework ni bibliothèque).
Parcours d'achat : **produit → prix → « Je suis intéressé » → WhatsApp** (pas de panier).
Aucune étape de compilation : il suffit d'envoyer les fichiers sur l'hébergement.

## Structure

```
index.html              Accueil
pages/
  produits.html         Catalogue : recherche, catégories, prix, tri, pagination
  produit.html          Fiche produit (produit.html?slug=…)
  categories.html       Liste des catégories
  devis.html            Demande de devis
  contact.html          Formulaire et coordonnées
  a-propos.html         Présentation de l'entreprise
css/
  base.css              Identité Kora : couleurs, polices (Fraunces + Manrope), boutons, formulaires
  components.css        En-tête, pied de page, cartes produits/catégories, badges, pagination
  pages.css             Styles propres à une page (accueil, catalogue, fiche, devis…)
js/
  icons.js              Sprite d'icônes SVG (chargé en haut du <body>)
  config.js             Numéro WhatsApp, script du chat, chemin racine
  data/catalogue.js     CATEGORIES, UNIVERSES (groupes de catégories) et PRODUCTS
  main.js               Menu mobile, recherche, animations, bouton WhatsApp flottant, chat Tawk.to
  products.js           Fonctions communes : prix, liens, carte produit
  voice-search.js       Recherche vocale et dictionnaire de corrections
  forms.js              Envoi des formulaires (serveur ou WhatsApp)
  pages/*.js            Un script par page (home, catalog, product, categories, quote, contact)
images/
  products/             Photos produits (WebP, 800 px max)
  logo-kora.svg         Logo (fond clair) ; logo-kora-light.svg pour fond sombre
  favicon-32.png, apple-touch-icon.png, og-image.jpg
.htaccess               Cache navigateur et compression (hébergement Apache)
```

Chaque page charge seulement les scripts dont elle a besoin, dans cet ordre :
`config.js` → `data/catalogue.js` → `main.js` → `products.js` → `voice-search.js` → `forms.js` → script de la page.

## Tâches courantes

**Ajouter ou modifier un produit** : éditer `js/data/catalogue.js` (copier un bloc existant) et
déposer l'image dans `images/products/`. Le premier produit du tableau apparaît en premier dans « Plus récents »
et sur l'accueil. Les compteurs par catégorie sont calculés automatiquement.

**Changer le numéro WhatsApp** (actuellement +225 07 15 68 72 90) : `js/config.js` pour les liens générés
par le JavaScript, puis rechercher/remplacer `2250715687290` et `07 15 68 72 90` dans les fichiers HTML.

**Message WhatsApp des produits** : fonction `interestMessage()` dans `js/products.js`.

**Univers** : le tableau `UNIVERSES` de `js/data/catalogue.js` regroupe les catégories (accueil, filtres du
catalogue, page Catégories). Une nouvelle catégorie doit y être ajoutée pour apparaître.

**Couleurs et typographie** : variables en haut de `css/base.css` (encre, papier, cuivre ; le vert est réservé à WhatsApp).

## Formulaires

Les formulaires de contact, de devis et d'avis n'ont pas d'attribut `action` :
leur contenu est mis en forme et ouvert dans WhatsApp.
Pour les relier à un script serveur, il suffit d'ajouter
`action="…" method="post"` sur la balise `<form>` : le formulaire est alors envoyé normalement.
Noms des champs envoyés : `nom`, `email`, `telephone`, `produits[]`, `quantites[]`, `produit_id`…

## Tester en local

Ouvrir `index.html` directement fonctionne. La recherche vocale demande une page en HTTPS ou `localhost`
(par exemple avec l'extension « Live Server » de VS Code) ; sinon le bouton micro est masqué.

## Avant la mise en ligne

Le site n'a pas encore de nom de domaine. Une fois le domaine choisi, ajouter dans chaque page
`<link rel="canonical" href="https://votre-domaine/…">` et `<meta property="og:url">`,
mettre l'image de partage (`og:image`) en adresse complète et créer un `sitemap.xml`.
