/*
 * Catalogue Kora
 * Données reprises du site actuel. Pour ajouter un produit, copiez un bloc existant :
 *   id          identifiant de la base de données (utilisé par le formulaire de devis)
 *   slug        identifiant dans l'URL : pages/produit.html?slug=...
 *   category    slug d'une catégorie de CATEGORIES
 *   price       prix en FCFA (pour les variantes : prix le plus bas)
 *   oldPrice    (optionnel) ancien prix barré, affiche le badge « Promo »
 *   images      fichiers dans images/products/ (la première est l'image principale)
 *   variants    (optionnel) déclinaisons avec leur propre prix et stock
 * L'ordre du tableau PRODUCTS correspond au tri « Plus récents ».
 */

const CATEGORIES = [
  {
    slug: "accessoires-informatique",
    name: "Accessoires",
    description: "Claviers, souris, webcams et SSD portables pour compléter votre poste de travail."
  },
  {
    slug: "autocoms",
    name: "Autocoms",
    description: "Standards téléphoniques pour gérer les appels de toute l'entreprise."
  },
  {
    slug: "consommables",
    name: "Encres et toners",
    description: "Cartouches d'encre et toners HP pour vos imprimantes."
  },
  {
    slug: "controleur-wifi",
    name: "Contrôleurs Wi-Fi",
    description: "Pilotez tous vos points d'accès UniFi ou Omada depuis une seule interface."
  },
  {
    slug: "ecrans",
    name: "Écrans",
    description: "Moniteurs HP et Lenovo pour le bureau."
  },
  {
    slug: "imprimantes",
    name: "Imprimantes",
    description: "Jet d'encre à réservoirs, laser et multifonctions, de la maison à l'entreprise."
  },
  {
    slug: "onduleurs",
    name: "Onduleurs et stabilisateurs",
    description: "Protégez vos équipements des coupures et des variations de tension."
  },
  {
    slug: "ordinateurs-de-bureau",
    name: "Ordinateurs de bureau",
    description: "PC de bureau HP et Dell pour le travail au quotidien."
  },
  {
    slug: "ordinateurs-portables",
    name: "Ordinateurs portables",
    description: "Portables professionnels et gaming, HP et Lenovo."
  },
  {
    slug: "point-d-acces",
    name: "Points d'accès Wi-Fi",
    description: "Wi-Fi professionnel intérieur et extérieur : UniFi, TP-Link Omada, Grandstream, Ubiquiti, MikroTik."
  },
  {
    slug: "projecteurs",
    name: "Vidéoprojecteurs",
    description: "Vidéoprojecteurs Epson pour vos réunions et présentations."
  },
  {
    slug: "repeteurs-wi-fi",
    name: "Répéteurs Wi-Fi",
    description: "Étendez la couverture Wi-Fi de la maison ou des bureaux."
  },
  {
    slug: "routeurs",
    name: "Routeurs et Internet",
    description: "Routeurs Wi-Fi et kit Internet par satellite Starlink."
  },
  {
    slug: "scanners",
    name: "Scanners",
    description: "Numérisez vos documents rapidement."
  },
  {
    slug: "serveurs",
    name: "Serveurs",
    description: "Serveurs Dell pour héberger vos applications et vos données."
  },
  {
    slug: "switchs",
    name: "Switchs réseau",
    description: "Switchs Gigabit et PoE pour connecter et alimenter téléphones IP et points d'accès."
  },
  {
    slug: "telephonie-ip-analogique",
    name: "Téléphonie",
    description: "Téléphones IP Yealink, Grandstream et Fanvil, et téléphones fixes Panasonic."
  }
];

// Les catégories regroupées en grands univers (accueil, catalogue et page Catégories).
// « image » (optionnel) : image affichée sur l'accueil, sinon celle de la première catégorie.
const UNIVERSES = [
  {
    name: "Réseau et Wi-Fi",
    description: "Points d'accès, switchs, routeurs et contrôleurs pour un réseau fiable.",
    image: "grandstream-gwn7664elr-ax6000.webp",
    categories: ["point-d-acces", "switchs", "routeurs", "controleur-wifi", "repeteurs-wi-fi"]
  },
  {
    name: "Téléphonie",
    description: "Téléphones IP, téléphones fixes et autocoms pour l'entreprise.",
    categories: ["telephonie-ip-analogique", "autocoms"]
  },
  {
    name: "Informatique",
    description: "Ordinateurs, écrans, serveurs et accessoires.",
    categories: ["ordinateurs-portables", "ordinateurs-de-bureau", "ecrans", "serveurs", "projecteurs", "accessoires-informatique"]
  },
  {
    name: "Impression et énergie",
    description: "Imprimantes, scanners, consommables et protection électrique.",
    categories: ["imprimantes", "consommables", "scanners", "onduleurs"]
  }
];

const PRODUCTS = [
  {
    id: 135,
    slug: "tp-link-omada-es228gmp",
    name: "TP-Link Omada ES228GMP",
    category: "switchs",
    price: 260000,
    inStock: true,
    images: [
      "tp-link-omada-es228gmp.webp"
    ],
    description: "Le TP-Link Omada ES228GMP est un switch Gigabit Easy Managed avec 24 ports PoE+ et 2 ports SFP Gigabit. Il convient aux reseaux professionnels, cameras IP, telephones IP et points d acces Wi-Fi.",
    specs: [
      {
        label: "Type",
        value: "Switch Gigabit Easy Managed"
      },
      {
        label: "Gamme",
        value: "Omada"
      },
      {
        label: "Usage",
        value: [
          "Reseau professionnel",
          "Videosurveillance IP",
          "Telephonie IP",
          "Wi-Fi"
        ]
      },
      {
        label: "Marque",
        value: "TP-Link"
      },
      {
        label: "Modele",
        value: "ES228GMP"
      },
      {
        label: "Gestion",
        value: "Interface Web et Omada Cloud"
      },
      {
        label: "Ports SFP",
        value: "2 x Gigabit SFP"
      },
      {
        label: "Budget PoE",
        value: "384 W"
      },
      {
        label: "Ports PoE+",
        value: "24"
      },
      {
        label: "Ports RJ45",
        value: "26 x Gigabit Ethernet"
      },
      {
        label: "Installation",
        value: "Rack 19 pouces"
      },
      {
        label: "Capacite de commutation",
        value: "56 Gbps"
      }
    ]
  },
  {
    id: 134,
    slug: "d-link-dgs-f1210-18ps-e",
    name: "D-Link DGS-F1210-18PS-E",
    category: "switchs",
    price: 160000,
    inStock: true,
    images: [
      "d-link-dgs-f1210-18ps-e.webp"
    ],
    description: "Le D-Link DGS-F1210-18PS-E est un switch Gigabit Smart Managed avec 16 ports PoE et 2 ports SFP Gigabit. Il convient aux reseaux professionnels, cameras IP et telephones IP.",
    specs: [
      {
        label: "Type",
        value: "Switch Smart Managed Gigabit PoE"
      },
      {
        label: "Usage",
        value: [
          "Reseau professionnel",
          "Videosurveillance IP",
          "Telephonie IP"
        ]
      },
      {
        label: "Marque",
        value: "D-Link"
      },
      {
        label: "Modele",
        value: "DGS-F1210-18PS-E"
      },
      {
        label: "Gestion",
        value: [
          "Interface Web",
          "CLI"
        ]
      },
      {
        label: "Norme PoE",
        value: "IEEE 802.3af/at"
      },
      {
        label: "Ports SFP",
        value: "2 x Gigabit SFP"
      },
      {
        label: "Budget PoE",
        value: "150 W"
      },
      {
        label: "Mode Extend",
        value: "Jusqu a 250 metres"
      },
      {
        label: "Ports Ethernet",
        value: "16 x Gigabit PoE"
      },
      {
        label: "Protection surtension",
        value: "6 kV"
      }
    ]
  },
  {
    id: 133,
    slug: "unifi-u7-pro-max",
    name: "UniFi U7 Pro Max",
    category: "point-d-acces",
    price: 240000,
    inStock: true,
    images: [
      "unifi-u7-pro-max.webp"
    ],
    description: "Le UniFi U7 Pro Max est un point d acces Wi-Fi 7 professionnel concu pour les entreprises, hotels et reseaux exigeants. Il prend en charge plusieurs bandes Wi-Fi et permet une gestion centralisee via UniFi Network.",
    specs: [
      {
        label: "Type",
        value: "Point d acces Wi-Fi professionnel"
      },
      {
        label: "Gamme",
        value: "UniFi"
      },
      {
        label: "Usage",
        value: "Entreprises, hotels et reseaux professionnels"
      },
      {
        label: "Bandes",
        value: [
          "2.4 GHz",
          "5 GHz",
          "6 GHz"
        ]
      },
      {
        label: "Marque",
        value: "Ubiquiti"
      },
      {
        label: "Modele",
        value: "U7 Pro Max"
      },
      {
        label: "Clients",
        value: "500+"
      },
      {
        label: "Gestion",
        value: "UniFi Network"
      },
      {
        label: "Norme Wi-Fi",
        value: "Wi-Fi 7 (802.11be)"
      },
      {
        label: "Port reseau",
        value: "1 x RJ45 2.5 GbE"
      },
      {
        label: "Alimentation",
        value: "PoE+"
      },
      {
        label: "Installation",
        value: [
          "Plafond",
          "Mur"
        ]
      },
      {
        label: "Flux spatiaux",
        value: "8"
      },
      {
        label: "Consommation maximale",
        value: "25 W"
      }
    ]
  },
  {
    id: 132,
    slug: "unifi-cloudkey",
    name: "UniFi CloudKey+",
    category: "controleur-wifi",
    price: 280000,
    inStock: true,
    images: [
      "unifi-cloudkey.webp"
    ],
    description: "Le UniFi CloudKey+ est un controleur compact permettant de gerer centralement les equipements UniFi. Il integre un stockage interne pour les fonctions UniFi Protect et convient aux installations reseau professionnelles.",
    specs: [
      {
        label: "Type",
        value: "Controleur UniFi avec stockage"
      },
      {
        label: "Usage",
        value: "Gestion reseau et videosurveillance UniFi"
      },
      {
        label: "Marque",
        value: "Ubiquiti"
      },
      {
        label: "Modele",
        value: "UCK-G2-PLUS"
      },
      {
        label: "Reseau",
        value: "1 x Gigabit Ethernet"
      },
      {
        label: "Stockage",
        value: "Disque dur 1 To inclus"
      },
      {
        label: "Processeur",
        value: "Octa-core ARM Cortex-A53"
      },
      {
        label: "Alimentation",
        value: "USB-C ou PoE"
      },
      {
        label: "Installation",
        value: "Bureau ou rack avec accessoire compatible"
      },
      {
        label: "Memoire vive",
        value: "3 Go"
      },
      {
        label: "Gestion reseau",
        value: "UniFi Network"
      },
      {
        label: "Video surveillance",
        value: "UniFi Protect"
      }
    ]
  },
  {
    id: 131,
    slug: "unifi-u7-pro-wall",
    name: "UniFi U7 Pro Wall",
    category: "point-d-acces",
    price: 190000,
    inStock: true,
    images: [
      "unifi-u7-pro-wall.webp"
    ],
    description: "UniFi U7 Pro Wall est un point d acces Wi-Fi 7 mural concu pour les hotels, bureaux et entreprises. Il offre une connectivite sans fil performante, un port 2.5 GbE et une gestion centralisee via UniFi Network.",
    specs: [
      {
        label: "Type",
        value: "Point d acces Wi-Fi mural"
      },
      {
        label: "Gamme",
        value: "UniFi"
      },
      {
        label: "Usage",
        value: "Hotels, bureaux et entreprises"
      },
      {
        label: "Bandes",
        value: [
          "2.4 GHz",
          "5 GHz",
          "6 GHz"
        ]
      },
      {
        label: "Marque",
        value: "Ubiquiti"
      },
      {
        label: "Modele",
        value: "U7 Pro Wall"
      },
      {
        label: "Gestion",
        value: "UniFi Network"
      },
      {
        label: "Norme Wi-Fi",
        value: "Wi-Fi 7 (802.11be)"
      },
      {
        label: "Port reseau",
        value: "1 x RJ45 2.5 GbE"
      },
      {
        label: "Alimentation",
        value: "PoE+"
      },
      {
        label: "Installation",
        value: "Murale"
      },
      {
        label: "Flux spatiaux",
        value: "6"
      }
    ]
  },
  {
    id: 130,
    slug: "unifi-u7-lite",
    name: "UniFi U7 Lite",
    category: "point-d-acces",
    price: 105000,
    inStock: true,
    images: [
      "unifi-u7-lite.webp"
    ],
    description: "Le UniFi U7 Lite est un point d acces Wi-Fi 7 compact pour les bureaux, commerces et entreprises. Il offre une connexion sans fil performante, un port 2.5 GbE et une gestion centralisee via UniFi Network.",
    specs: [
      {
        label: "Type",
        value: "Point d acces Wi-Fi"
      },
      {
        label: "Gamme",
        value: "UniFi"
      },
      {
        label: "Bandes",
        value: [
          "2.4 GHz",
          "5 GHz"
        ]
      },
      {
        label: "Marque",
        value: "Ubiquiti"
      },
      {
        label: "Modele",
        value: "U7 Lite"
      },
      {
        label: "Clients",
        value: "200+"
      },
      {
        label: "Gestion",
        value: "UniFi Network"
      },
      {
        label: "Norme Wi-Fi",
        value: "Wi-Fi 7 (802.11be)"
      },
      {
        label: "Port reseau",
        value: "1 x RJ45 2.5 GbE"
      },
      {
        label: "Alimentation",
        value: "PoE"
      },
      {
        label: "Installation",
        value: [
          "Plafond",
          "Mur"
        ]
      },
      {
        label: "Flux spatiaux",
        value: "4"
      },
      {
        label: "Couverture annoncee",
        value: "115 m2"
      },
      {
        label: "Debit maximal 5 GHz",
        value: "4.3 Gbps"
      },
      {
        label: "Consommation maximale",
        value: "13 W"
      },
      {
        label: "Debit maximal 2.4 GHz",
        value: "688 Mbps"
      }
    ]
  },
  {
    id: 128,
    slug: "unifi-u7-lr",
    name: "UniFi U7-LR",
    category: "point-d-acces",
    price: 155000,
    inStock: true,
    images: [
      "unifi-u7-lr.webp"
    ],
    description: "Le UniFi U7-LR est un point d acces Wi-Fi 7 longue portee pour les entreprises, bureaux, hotels et installations professionnelles. Il offre une couverture etendue et une gestion centralisee via UniFi Network.",
    specs: [
      {
        label: "Type",
        value: "Point d acces Wi-Fi longue portee"
      },
      {
        label: "Gamme",
        value: "UniFi"
      },
      {
        label: "Bandes",
        value: [
          "2.4 GHz",
          "5 GHz"
        ]
      },
      {
        label: "Marque",
        value: "Ubiquiti"
      },
      {
        label: "Modele",
        value: "U7-LR"
      },
      {
        label: "Clients",
        value: "300+"
      },
      {
        label: "Gestion",
        value: "UniFi Network"
      },
      {
        label: "Norme Wi-Fi",
        value: "Wi-Fi 7 (802.11be)"
      },
      {
        label: "Port reseau",
        value: "1 x RJ45 2.5 GbE"
      },
      {
        label: "Alimentation",
        value: "PoE"
      },
      {
        label: "Installation",
        value: [
          "Plafond",
          "Mur"
        ]
      },
      {
        label: "Flux spatiaux",
        value: "5"
      },
      {
        label: "Couverture annoncee",
        value: "160 m2"
      },
      {
        label: "Debit maximal 5 GHz",
        value: "4.3 Gbps"
      },
      {
        label: "Consommation maximale",
        value: "14 W"
      },
      {
        label: "Debit maximal 2.4 GHz",
        value: "688 Mbps"
      }
    ]
  },
  {
    id: 127,
    slug: "unifi-u7-pro",
    name: "UniFi U7 Pro",
    category: "point-d-acces",
    price: 165000,
    inStock: true,
    images: [
      "unifi-u7-pro.webp"
    ],
    description: "Le UniFi U7 Pro est un point d acces Wi-Fi 7 professionnel tri-bande, adapte aux entreprises, bureaux et reseaux exigeants. Il offre une connectivite 2.5 GbE, une alimentation PoE+ et une gestion centralisee via UniFi Network.",
    specs: [
      {
        label: "Type",
        value: "Point d acces Wi-Fi professionnel"
      },
      {
        label: "Gamme",
        value: "UniFi"
      },
      {
        label: "Bandes",
        value: [
          "2.4 GHz",
          "5 GHz",
          "6 GHz"
        ]
      },
      {
        label: "Marque",
        value: "Ubiquiti"
      },
      {
        label: "Modele",
        value: "U7 Pro"
      },
      {
        label: "Clients",
        value: "300+"
      },
      {
        label: "Gestion",
        value: "UniFi Network"
      },
      {
        label: "Norme Wi-Fi",
        value: "Wi-Fi 7 (802.11be)"
      },
      {
        label: "Port reseau",
        value: "1 x RJ45 2.5 GbE"
      },
      {
        label: "Alimentation",
        value: "PoE+"
      },
      {
        label: "Installation",
        value: [
          "Plafond",
          "Mur"
        ]
      },
      {
        label: "Debit maximal",
        value: "Jusqu a 5.8 Gbps sur la bande 6 GHz"
      },
      {
        label: "Flux spatiaux",
        value: "6"
      },
      {
        label: "Couverture annoncee",
        value: "140 m2"
      },
      {
        label: "Consommation maximale",
        value: "21 W"
      }
    ]
  },
  {
    id: 126,
    slug: "grandstream-gwn7664elr-ax6000",
    name: "Grandstream GWN7664ELR AX6000",
    category: "point-d-acces",
    price: 140000,
    inStock: true,
    images: [
      "grandstream-gwn7664elr-ax6000.webp"
    ],
    description: "Le Grandstream GWN7664ELR est un point d acces Wi-Fi 6 exterieur AX6000 concu pour les entreprises et les grandes installations. Il offre un debit sans fil jusqu a 6 Gbps, une couverture longue portee, une protection contre les intemperies et une gestion centralisee du reseau.",
    specs: [
      {
        label: "MIMO",
        value: "4x4:4 MU-MIMO"
      },
      {
        label: "Type",
        value: "Point d acces Wi-Fi 6 exterieur"
      },
      {
        label: "Usage",
        value: "Reseaux exterieurs, entreprises, campus et entrepots"
      },
      {
        label: "Classe",
        value: "AX6000"
      },
      {
        label: "Marque",
        value: "Grandstream"
      },
      {
        label: "Modele",
        value: "GWN7664ELR"
      },
      {
        label: "Gestion",
        value: [
          "Controleur integre",
          "GWN.Cloud",
          "GWN Manager"
        ]
      },
      {
        label: "Protection",
        value: "IP67"
      },
      {
        label: "Norme Wi-Fi",
        value: "Wi-Fi 6 (802.11ax)"
      },
      {
        label: "Technologie",
        value: "OFDMA"
      },
      {
        label: "Alimentation",
        value: "PoE / PoE+"
      },
      {
        label: "Installation",
        value: [
          "Murale",
          "Sur poteau"
        ]
      },
      {
        label: "Ports reseau",
        value: [
          "1 x RJ45 2.5 Gigabit PoE",
          "1 x SFP 2.5 Gigabit"
        ]
      },
      {
        label: "Debit sans fil",
        value: "Jusqu a 6 Gbps"
      },
      {
        label: "Portee annoncee",
        value: "Jusqu a 300 metres"
      },
      {
        label: "Clients simultanes",
        value: "Jusqu a 512"
      }
    ]
  },
  {
    id: 125,
    slug: "yealink-t48u",
    name: "Yealink T48U",
    category: "telephonie-ip-analogique",
    price: 180000,
    inStock: true,
    images: [
      "yealink-t48u.webp"
    ],
    description: "Telephone IP professionnel avec grand ecran tactile couleur, audio HD, ports Gigabit Ethernet et fonctions avancees de gestion des appels.",
    specs: [
      {
        label: "PoE",
        value: "IEEE 802.3af"
      },
      {
        label: "USB",
        value: "USB 2.0"
      },
      {
        label: "Type",
        value: "Telephone IP professionnel"
      },
      {
        label: "WiFi",
        value: "Via adaptateur USB compatible"
      },
      {
        label: "Audio",
        value: "HD Voice"
      },
      {
        label: "Ecran",
        value: "7 pouces tactile couleur"
      },
      {
        label: "Marque",
        value: "Yealink"
      },
      {
        label: "Modele",
        value: "SIP-T48U"
      },
      {
        label: "Bluetooth",
        value: "Via adaptateur USB compatible"
      },
      {
        label: "Conference",
        value: "5 participants"
      },
      {
        label: "Resolution",
        value: "800 x 480 pixels"
      },
      {
        label: "Comptes SIP",
        value: "16"
      },
      {
        label: "Installation",
        value: "Bureau / Murale"
      },
      {
        label: "Ports reseau",
        value: "2 x Gigabit Ethernet"
      }
    ]
  },
  {
    id: 124,
    slug: "yealink-t46u",
    name: "Yealink T46U",
    category: "telephonie-ip-analogique",
    price: 150000,
    inStock: true,
    images: [
      "yealink-t46u.webp"
    ],
    description: "Telephone IP professionnel avec ecran couleur, audio HD, deux ports Gigabit Ethernet et alimentation PoE. Adapte aux bureaux et entreprises.",
    specs: [
      {
        label: "PoE",
        value: "IEEE 802.3af"
      },
      {
        label: "USB",
        value: "USB 2.0"
      },
      {
        label: "Type",
        value: "Telephone IP professionnel"
      },
      {
        label: "Audio",
        value: "HD Voice"
      },
      {
        label: "Ecran",
        value: "4.3 pouces couleur"
      },
      {
        label: "Marque",
        value: "Yealink"
      },
      {
        label: "Modele",
        value: "SIP-T46U"
      },
      {
        label: "Conference",
        value: "5 participants"
      },
      {
        label: "Resolution",
        value: "480 x 272 pixels"
      },
      {
        label: "Comptes SIP",
        value: "16"
      },
      {
        label: "Installation",
        value: "Bureau / Murale"
      },
      {
        label: "Ports reseau",
        value: "2 x Gigabit Ethernet"
      }
    ]
  },
  {
    id: 123,
    slug: "yealink-t58-pro",
    name: "Yealink T58 Pro",
    category: "telephonie-ip-analogique",
    price: 230000,
    inStock: true,
    images: [
      "yealink-t58-pro.webp"
    ],
    description: "Le Yealink T58 Pro est un telephone IP professionnel haut de gamme avec ecran tactile couleur de 7 pouces, audio HD et prise en charge de plusieurs comptes SIP. Il integre une camera pour les communications video et convient aux bureaux, entreprises et salles de reunion.",
    specs: [
      {
        label: "PoE",
        value: "IEEE 802.3af"
      },
      {
        label: "USB",
        value: "1 x USB 2.0"
      },
      {
        label: "Type",
        value: "Telephone IP professionnel"
      },
      {
        label: "WiFi",
        value: "Wi-Fi integre"
      },
      {
        label: "Audio",
        value: "HD Voice"
      },
      {
        label: "Ecran",
        value: "7 pouces tactile couleur"
      },
      {
        label: "Usage",
        value: "Entreprise, bureau et visioconference"
      },
      {
        label: "Video",
        value: "Communication video"
      },
      {
        label: "Camera",
        value: "Camera HD integree"
      },
      {
        label: "Marque",
        value: "Yealink"
      },
      {
        label: "Modele",
        value: "T58 Pro"
      },
      {
        label: "Montage",
        value: "Bureau / Murale"
      },
      {
        label: "Bluetooth",
        value: "Bluetooth 4.2"
      },
      {
        label: "Conference",
        value: "Conference audio et video"
      },
      {
        label: "Resolution",
        value: "1024 x 600 pixels"
      },
      {
        label: "Comptes SIP",
        value: "16"
      },
      {
        label: "Ports reseau",
        value: "2 x Gigabit Ethernet"
      }
    ]
  },
  {
    id: 122,
    slug: "epson-eb-w51",
    name: "Epson EB-W51",
    category: "projecteurs",
    price: 480000,
    inStock: true,
    images: [
      "epson-eb-w51.webp"
    ],
    description: "Le Epson EB-W51 est un projecteur WXGA professionnel équipé de la technologie 3LCD. Il offre une luminosité de 4000 lumens, une résolution de 1280 x 800 pixels et un contraste de 16000:1. Il convient aux presentations, bureaux, formations et utilisations multimedia.",
    specs: [
      {
        label: "Type",
        value: "Projecteur WXGA"
      },
      {
        label: "Zoom",
        value: "Optique manuel 1 - 1,2"
      },
      {
        label: "Lampe",
        value: "UHE 210 W"
      },
      {
        label: "Poids",
        value: "2,5 kg"
      },
      {
        label: "Format",
        value: "16:10"
      },
      {
        label: "Marque",
        value: "Epson"
      },
      {
        label: "Modele",
        value: "EB-W51"
      },
      {
        label: "Contraste",
        value: "16000:1"
      },
      {
        label: "Dimensions",
        value: "302 x 237 x 82 mm"
      },
      {
        label: "Luminosite",
        value: "4000 lumens"
      },
      {
        label: "Resolution",
        value: "1280 x 800 WXGA"
      },
      {
        label: "Duree lampe",
        value: "6000 heures / 12000 heures Eco"
      },
      {
        label: "Technologie",
        value: "3LCD"
      },
      {
        label: "Connectivite",
        value: [
          "HDMI",
          "VGA",
          "USB",
          "RCA"
        ]
      },
      {
        label: "Haut parleur",
        value: "2 W"
      },
      {
        label: "Taille image",
        value: "33 a 320 pouces"
      }
    ]
  },
  {
    id: 121,
    slug: "unifi-u6-pro",
    name: "UniFi U6 Pro",
    category: "point-d-acces",
    price: 150000,
    inStock: true,
    images: [
      "unifi-u6-pro.webp"
    ],
    description: "Le UniFi U6 Pro est un point d'acces Wi-Fi 6 professionnel concu pour les entreprises, bureaux et installations reseau exigeantes. Il offre des performances Wi-Fi elevees, une gestion centralisee via UniFi et une alimentation PoE+.",
    specs: [
      {
        label: "Type",
        value: "Point d'acces Wi-Fi 6"
      },
      {
        label: "Debit",
        value: "Jusqu'a 5,3 Gbps"
      },
      {
        label: "Gamme",
        value: "UniFi"
      },
      {
        label: "Ports",
        value: "1 x Gigabit Ethernet"
      },
      {
        label: "Usage",
        value: "Entreprise, bureau, hotel et reseau professionnel"
      },
      {
        label: "Bandes",
        value: "2,4 GHz et 5 GHz"
      },
      {
        label: "Marque",
        value: "Ubiquiti"
      },
      {
        label: "Modele",
        value: "U6 Pro"
      },
      {
        label: "Gestion",
        value: "UniFi Network"
      },
      {
        label: "Norme Wi-Fi",
        value: "Wi-Fi 6 (802.11ax)"
      },
      {
        label: "Alimentation",
        value: "PoE+ 802.3at"
      },
      {
        label: "Installation",
        value: "Plafond / Murale"
      }
    ]
  },
  {
    id: 120,
    slug: "yealink-sip-t33g",
    name: "Yealink SIP-T33G",
    category: "telephonie-ip-analogique",
    price: 55000,
    inStock: true,
    images: [
      "yealink-sip-t33g.webp"
    ],
    description: "Le Yealink SIP-T33G est un telephone IP professionnel avec voix HD et ecran couleur 2,4 pouces. Il prend en charge jusqu'a 4 comptes SIP, la conference a 5 participants, deux ports Gigabit Ethernet et le PoE. Il convient aux bureaux et aux entreprises.",
    specs: [
      {
        label: "PoE",
        value: "IEEE 802.3af"
      },
      {
        label: "Type",
        value: "Telephone IP professionnel"
      },
      {
        label: "Audio",
        value: "HD Voice"
      },
      {
        label: "Ecran",
        value: "2,4 pouces couleur"
      },
      {
        label: "Ports",
        value: "1 x RJ9 combiné, 1 x RJ9 casque"
      },
      {
        label: "Marque",
        value: "Yealink"
      },
      {
        label: "Modele",
        value: "SIP-T33G"
      },
      {
        label: "Couleur",
        value: "Gris classique"
      },
      {
        label: "Montage",
        value: "Bureau / Murale"
      },
      {
        label: "Conference",
        value: "5 participants"
      },
      {
        label: "Resolution",
        value: "320 x 240 pixels"
      },
      {
        label: "Comptes SIP",
        value: "4"
      },
      {
        label: "Ports reseau",
        value: "2 x Gigabit Ethernet"
      }
    ]
  },
  {
    id: 119,
    slug: "tp-link-omada-oc300",
    name: "TP-Link Omada OC300",
    category: "controleur-wifi",
    price: 180000,
    inStock: true,
    images: [
      "tp-link-omada-oc300.webp"
    ],
    description: "Le TP-Link Omada OC300 est un contrôleur matériel Omada conçu pour gérer de manière centralisée les points d'accès Wi-Fi, switches et routeurs Omada. Il permet une administration professionnelle du réseau depuis une interface unique.",
    specs: [
      {
        label: "PoE",
        value: "PoE In sur ETH1"
      },
      {
        label: "USB",
        value: "1 x USB"
      },
      {
        label: "Type",
        value: "Contrôleur matériel Omada"
      },
      {
        label: "Gamme",
        value: "Omada"
      },
      {
        label: "Ports",
        value: "2 x Gigabit Ethernet"
      },
      {
        label: "Usage",
        value: "Entreprise, bureaux, hôtels et réseaux professionnels"
      },
      {
        label: "Marque",
        value: "TP-Link"
      },
      {
        label: "Gestion",
        value: "Gestion centralisée du réseau"
      },
      {
        label: "Modèle",
        value: "OC300"
      },
      {
        label: "Réseaux",
        value: "Wi-Fi, Switches et Routeurs Omada"
      },
      {
        label: "Installation",
        value: "Bureau / Rack"
      }
    ]
  },
  {
    id: 118,
    slug: "grandstream-grp2602p",
    name: "Grandstream GRP2602P",
    category: "telephonie-ip-analogique",
    price: 40000,
    inStock: true,
    images: [
      "grandstream-grp2602p.webp"
    ],
    description: "Le Grandstream GRP2602P est un telephone IP professionnel a 2 lignes et 4 comptes SIP. Il offre une qualite audio HD, une conference a 5 participants et le PoE integre.",
    specs: [
      {
        label: "PoE",
        value: "IEEE 802.3af"
      },
      {
        label: "Type",
        value: "Telephone IP professionnel"
      },
      {
        label: "Audio",
        value: "HD"
      },
      {
        label: "Ecran",
        value: "2.21 pouces LCD"
      },
      {
        label: "Lignes",
        value: "2"
      },
      {
        label: "Marque",
        value: "Grandstream"
      },
      {
        label: "Modele",
        value: "GRP2602P"
      },
      {
        label: "Gestion",
        value: "GDMS"
      },
      {
        label: "Conference",
        value: "5 participants"
      },
      {
        label: "Comptes SIP",
        value: "4"
      },
      {
        label: "Installation",
        value: "Bureau / Murale"
      },
      {
        label: "Ports reseau",
        value: "2 x Ethernet 10/100 Mbps"
      }
    ]
  },
  {
    id: 116,
    slug: "fanvil-x303p",
    name: "Fanvil X303P",
    category: "telephonie-ip-analogique",
    price: 40000,
    inStock: true,
    images: [
      "fanvil-x303p.webp"
    ],
    description: "Le Fanvil X303P est un téléphone IP professionnel avec écran couleur 2,4 pouces, 4 lignes SIP, audio HD et conférence audio jusqu'à 6 participants. Il dispose de deux ports Ethernet 10/100 Mbps et prend en charge le PoE pour une installation simple en entreprise.",
    specs: [
      {
        label: "PoE",
        value: "IEEE 802.3af"
      },
      {
        label: "Type",
        value: "Téléphone IP professionnel"
      },
      {
        label: "Audio",
        value: "HD Voice"
      },
      {
        label: "Marque",
        value: "Fanvil"
      },
      {
        label: "Écran",
        value: "2,4 pouces couleur"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Modèle",
        value: "X303P"
      },
      {
        label: "Ports RJ9",
        value: "2"
      },
      {
        label: "Lignes SIP",
        value: "4"
      },
      {
        label: "Conférence",
        value: "6 participants"
      },
      {
        label: "Répertoire",
        value: "1000 contacts"
      },
      {
        label: "Résolution",
        value: "320 x 240 pixels"
      },
      {
        label: "Installation",
        value: "Bureau / Murale"
      },
      {
        label: "Ports réseau",
        value: "2 x RJ45 10/100 Mbps"
      },
      {
        label: "Journal des appels",
        value: "600 entrées"
      }
    ]
  },
  {
    id: 115,
    slug: "yealink-sip-t31p",
    name: "Yealink SIP-T31P",
    category: "telephonie-ip-analogique",
    price: 45000,
    inStock: true,
    images: [
      "yealink-sip-t31p.webp"
    ],
    description: "Le Yealink SIP-T31P est un téléphone IP professionnel avec voix HD, écran LCD rétroéclairé de 2,3 pouces et prise en charge de 2 comptes SIP. Il dispose de deux ports Ethernet 10/100M avec PoE, d'une conférence locale à 5 participants et de nombreuses fonctions de gestion des appels. Il convient aux bureaux, entreprises et installations VoIP.",
    specs: [
      {
        label: "PoE",
        value: "IEEE 802.3af"
      },
      {
        label: "Type",
        value: "Téléphone IP professionnel"
      },
      {
        label: "Audio",
        value: "Voix HD"
      },
      {
        label: "Casque",
        value: "1 x RJ9"
      },
      {
        label: "Marque",
        value: "Yealink"
      },
      {
        label: "Écran",
        value: "2,3 pouces LCD 132 x 64 pixels rétroéclairé"
      },
      {
        label: "Couleur",
        value: "Gris classique"
      },
      {
        label: "Modèle",
        value: "SIP-T31P"
      },
      {
        label: "Montage",
        value: "Bureau / Murale"
      },
      {
        label: "Combiné",
        value: "1 x RJ9"
      },
      {
        label: "Comptes SIP",
        value: "2"
      },
      {
        label: "Conférence",
        value: "5 participants"
      },
      {
        label: "Répertoire",
        value: "Jusqu'à 1000 contacts"
      },
      {
        label: "Ports réseau",
        value: "2 x RJ45 10/100M"
      }
    ]
  },
  {
    id: 114,
    slug: "ubiquiti-rocket-m2",
    name: "Ubiquiti Rocket M2",
    category: "point-d-acces",
    price: 90000,
    inStock: true,
    images: [
      "ubiquiti-rocket-m2.webp"
    ],
    description: "Le Ubiquiti Rocket M2 est un point d'accès radio extérieur 2,4 GHz conçu pour les réseaux sans fil longue portée. Il offre un débit allant jusqu'à 150 Mbps et dispose de deux connecteurs pour antenne externe. Il convient aux installations Wi-Fi professionnelles, aux liaisons sans fil et aux réseaux extérieurs.",
    specs: [
      {
        label: "Type",
        value: "Point d'accès radio extérieur"
      },
      {
        label: "Gamme",
        value: "airMAX"
      },
      {
        label: "Ports",
        value: "1 x Ethernet"
      },
      {
        label: "Usage",
        value: "Wi-Fi extérieur, liaison sans fil, réseau professionnel"
      },
      {
        label: "Débit",
        value: "Jusqu'à 150 Mbps"
      },
      {
        label: "Marque",
        value: "Ubiquiti"
      },
      {
        label: "Modèle",
        value: "Rocket M2"
      },
      {
        label: "Antennes",
        value: "2 connecteurs pour antenne externe"
      },
      {
        label: "Fréquence",
        value: "2,4 GHz"
      },
      {
        label: "Technologie",
        value: "802.11n"
      }
    ]
  },
  {
    id: 113,
    slug: "hp-17a-toner-laserjet-noir",
    name: "Toner HP 17A noir",
    category: "consommables",
    price: 40000,
    inStock: true,
    images: [
      "hp-17a-toner-laserjet-noir.webp"
    ],
    description: "La cartouche HP 17A (CF217A) est un toner laser noir original HP avec la technologie JetIntelligence. Elle offre un rendement d'environ 1 600 pages et convient aux imprimantes HP LaserJet Pro M102 et HP LaserJet Pro MFP M130 compatibles.",
    specs: [
      {
        label: "Type",
        value: "Cartouche de toner laser"
      },
      {
        label: "Marque",
        value: "HP"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Modèle",
        value: "17A"
      },
      {
        label: "Capacité",
        value: "Standard"
      },
      {
        label: "Rendement",
        value: "Environ 1 600 pages"
      },
      {
        label: "Référence",
        value: "CF217A"
      },
      {
        label: "Technologie",
        value: "JetIntelligence"
      },
      {
        label: "Compatibilité",
        value: [
          "HP LaserJet Pro M102a",
          "HP LaserJet Pro M102w",
          "HP LaserJet Pro MFP M130a",
          "HP LaserJet Pro MFP M130fn",
          "HP LaserJet Pro MFP M130fw",
          "HP LaserJet Pro MFP M130nw"
        ]
      }
    ]
  },
  {
    id: 112,
    slug: "grandstream-gxp1630",
    name: "Grandstream GXP1630",
    category: "telephonie-ip-analogique",
    price: 50000,
    inStock: true,
    images: [
      "grandstream-gxp1630.webp"
    ],
    description: "Le Grandstream GXP1630 est un téléphone IP Gigabit HD conçu pour les petites entreprises et les environnements professionnels. Il offre une communication VoIP de qualité HD, des ports réseau Gigabit et plusieurs touches programmables pour faciliter la gestion des appels.",
    specs: [
      {
        label: "Type",
        value: "Téléphone IP Gigabit HD"
      },
      {
        label: "Audio",
        value: "HD Voice"
      },
      {
        label: "Usage",
        value: "Petites entreprises, bureaux, professionnels"
      },
      {
        label: "Marque",
        value: "Grandstream"
      },
      {
        label: "Écran",
        value: "LCD rétroéclairé"
      },
      {
        label: "Modèle",
        value: "GXP1630"
      },
      {
        label: "Réseau",
        value: "Gigabit Ethernet"
      },
      {
        label: "Fonctions",
        value: "Mise en attente, transfert, conférence, rappel"
      },
      {
        label: "Technologie",
        value: "VoIP"
      },
      {
        label: "Touches programmables",
        value: "8 touches BLF"
      }
    ]
  },
  {
    id: 111,
    slug: "tp-link-omada-eap650-wall-ax3000",
    name: "TP-Link Omada EAP650-Wall AX3000",
    category: "point-d-acces",
    price: 65000,
    inStock: true,
    images: [
      "tp-link-omada-eap650-wall-ax3000.webp"
    ],
    description: "Le TP-Link Omada EAP650-Wall est un point d'accès Wi-Fi 6 AX3000 mural conçu pour les hôtels, bureaux, résidences et entreprises. Il offre jusqu'à 2402 Mbps sur 5 GHz et 574 Mbps sur 2,4 GHz, avec 3 ports Gigabit Ethernet dont un compatible PoE In. Il prend également en charge Omada Mesh, le Seamless Roaming et la gestion centralisée via Omada.",
    specs: [
      {
        label: "Type",
        value: "Point d'accès Wi-Fi 6 mural"
      },
      {
        label: "Gamme",
        value: "Omada"
      },
      {
        label: "Ports",
        value: "3 x Gigabit Ethernet"
      },
      {
        label: "Classe",
        value: "AX3000"
      },
      {
        label: "Marque",
        value: "TP-Link"
      },
      {
        label: "Gestion",
        value: "Omada Cloud / Contrôleur Omada"
      },
      {
        label: "Modèle",
        value: "EAP650-Wall"
      },
      {
        label: "Dimensions",
        value: "86 x 86 x 42,2 mm"
      },
      {
        label: "Norme Wi-Fi",
        value: "Wi-Fi 6"
      },
      {
        label: "Alimentation",
        value: "PoE In"
      },
      {
        label: "Débit 5 GHz",
        value: "2402 Mbps"
      },
      {
        label: "Technologies",
        value: "Omada Mesh, Seamless Roaming"
      },
      {
        label: "Débit 2,4 GHz",
        value: "574 Mbps"
      }
    ]
  },
  {
    id: 110,
    slug: "hp-250-g9-celeron",
    name: "HP 250 G9 Celeron",
    category: "ordinateurs-portables",
    price: 220000,
    inStock: true,
    images: [
      "hp-250-g9-celeron.webp",
      "hp-250-g9-celeron-2.webp"
    ],
    description: "Le HP 250 G9 est un ordinateur portable professionnel équipé d'un processeur Intel Celeron, de 4 Go de RAM et d'un SSD de 256 Go. Son écran de 15,6 pouces offre un confort adapté à la bureautique, aux études, à Internet et aux tâches quotidiennes.",
    specs: [
      {
        label: "RAM",
        value: "4 Go"
      },
      {
        label: "Type",
        value: "Ordinateur portable"
      },
      {
        label: "Usage",
        value: "Bureautique, Études, Internet, Multimédia"
      },
      {
        label: "Marque",
        value: "HP"
      },
      {
        label: "Écran",
        value: "15.6 pouces"
      },
      {
        label: "Modèle",
        value: "250 G9"
      },
      {
        label: "Stockage",
        value: "SSD 256 Go"
      },
      {
        label: "Processeur",
        value: "Intel Celeron"
      }
    ]
  },
  {
    id: 108,
    slug: "panasonic-kx-ts500fx",
    name: "Panasonic KX-TS500FX",
    category: "telephonie-ip-analogique",
    price: 15000,
    inStock: true,
    images: [
      "panasonic-kx-ts500fx.webp"
    ],
    description: "Le Panasonic KX-TS500FX est un téléphone fixe filaire compact et fiable, idéal pour la maison, les bureaux et les entreprises. Il dispose d'un réglage de tonalité ou impulsion, de la fonction rappel du dernier numéro et peut être installé au mur.",
    specs: [
      {
        label: "Type",
        value: "Téléphone fixe filaire"
      },
      {
        label: "Usage",
        value: "Maison, Bureau, Entreprise"
      },
      {
        label: "Marque",
        value: "Panasonic"
      },
      {
        label: "Modèle",
        value: "KX-TS500FX"
      },
      {
        label: "Fonction",
        value: "Rappel du dernier numéro"
      },
      {
        label: "Installation",
        value: "Bureau / Murale"
      },
      {
        label: "Numérotation",
        value: "Tonalité / Impulsion"
      },
      {
        label: "Couleurs disponibles",
        value: "Noir, Gris, Rouge, Bleu"
      }
    ]
  },
  {
    id: 107,
    slug: "sandisk-extreme-portable-ssd-2to",
    name: "SanDisk Extreme Portable SSD 2 To",
    category: "accessoires-informatique",
    price: 200000,
    inStock: true,
    images: [
      "sandisk-extreme-portable-ssd-2to.webp"
    ],
    description: "Le SanDisk Extreme Portable SSD 2To est un SSD externe portable haute performance conçu pour le stockage, la sauvegarde et le transfert rapide de fichiers. Avec sa capacité de 2 To, son interface USB 3.2 Gen 2 et son format compact et robuste, il convient aussi bien aux professionnels qu’aux particuliers.",
    specs: [
      {
        label: "Type",
        value: "SSD externe portable"
      },
      {
        label: "Format",
        value: "Portable"
      },
      {
        label: "Capacite",
        value: "2 To"
      },
      {
        label: "Interface",
        value: "USB 3.2 Gen 2"
      },
      {
        label: "Connecteur",
        value: "USB-C"
      },
      {
        label: "Resistance",
        value: "Résistant à l’eau et à la poussière IP65"
      },
      {
        label: "Utilisation",
        value: "Stockage, sauvegarde, transfert de fichiers, photos et vidéos"
      },
      {
        label: "Compatibilite",
        value: "Windows, macOS et appareils compatibles USB-C"
      },
      {
        label: "Vitesse lecture",
        value: "Jusqu’à 1050 Mo/s"
      },
      {
        label: "Resistance chute",
        value: "Résistance aux chutes jusqu’à 3 mètres"
      },
      {
        label: "Vitesse ecriture",
        value: "Jusqu’à 1000 Mo/s"
      },
      {
        label: "Capacite stockage",
        value: "2 To"
      }
    ]
  },
  {
    id: 106,
    slug: "lenovo-legion-core-i7-rtx-5060-8-go",
    name: "Lenovo Legion Core i7 RTX 5060 8 Go",
    category: "ordinateurs-portables",
    price: 1500000,
    inStock: true,
    images: [
      "lenovo-legion-core-i7-rtx-5060-8-go.webp"
    ],
    description: "Le Lenovo Legion est un ordinateur portable gaming équipé d'un processeur Intel Core I7, de 32 Go de RAM, d'un SSD de 1 To et d'une carte graphique NVIDIA GeForce RTX 5060 avec 8 Go de mémoire dédiée. Il est conçu pour le gaming, la création graphique, le montage vidéo et les applications exigeantes.",
    specs: [
      {
        label: "RAM",
        value: "32 Go"
      },
      {
        label: "Type",
        value: "Ordinateur portable gaming"
      },
      {
        label: "Gamme",
        value: "Legion"
      },
      {
        label: "Usage",
        value: "Gaming, Création graphique, Montage vidéo, Multimédia"
      },
      {
        label: "Marque",
        value: "Lenovo"
      },
      {
        label: "Écran",
        value: "15.6 pouces Full HD"
      },
      {
        label: "Stockage",
        value: "SSD 1 To"
      },
      {
        label: "Processeur",
        value: "Intel Core I7"
      },
      {
        label: "Carte graphique",
        value: "NVIDIA GeForce RTX 5060"
      },
      {
        label: "Mémoire graphique",
        value: "8 Go"
      }
    ]
  },
  {
    id: 104,
    slug: "encre-hp-953xl",
    name: "Encre HP 953XL",
    category: "consommables",
    price: 25000,
    inStock: true,
    images: [
      "encre-hp-953xl.webp"
    ],
    description: "Cartouche d’encre HP 953XL conçue pour offrir des impressions professionnelles, nettes et fiables. Disponible en noir, cyan, magenta et jaune. Compatible avec les imprimantes multifonctions HP OfficeJet Pro 7720, 7730, 7740, 8210, 8710, 8720, 8730 et 8740. La gamme 953XL offre un rendement supérieur à la version standard HP 953 et convient particulièrement aux utilisateurs ayant un volume d’impression important.",
    variantLabel: "Couleur",
    variants: [
      {
        name: "Noir",
        price: 38000,
        stock: 10
      },
      {
        name: "Cyan",
        price: 25000,
        stock: 10
      },
      {
        name: "Magenta",
        price: 25000,
        stock: 10
      },
      {
        name: "Jaune",
        price: 25000,
        stock: 10
      }
    ],
    specs: [
      {
        label: "Type",
        value: "Cartouche d’encre"
      },
      {
        label: "Marque",
        value: "HP"
      },
      {
        label: "Modèle",
        value: "953XL"
      },
      {
        label: "Technologie",
        value: "Jet d’encre"
      },
      {
        label: "Utilisation",
        value: "Documents, textes, graphiques et images"
      },
      {
        label: "Compatibilité",
        value: "HP OfficeJet Pro 7720, HP OfficeJet Pro 7730, HP OfficeJet Pro 7740, HP OfficeJet Pro 8210, HP OfficeJet Pro 8710, HP OfficeJet Pro 8720, HP OfficeJet Pro 8730, HP OfficeJet Pro 8740"
      },
      {
        label: "Rendement Noir",
        value: "Jusqu’à environ 2 000 pages"
      },
      {
        label: "Conditionnement",
        value: "Individuel"
      },
      {
        label: "Rendement Couleur",
        value: "Jusqu’à environ 1 600 pages par cartouche"
      },
      {
        label: "Type de consommable",
        value: "Cartouche d’encre haute capacité XL"
      },
      {
        label: "Couleurs disponibles",
        value: "Noir, Cyan, Magenta, Jaune"
      }
    ]
  },
  {
    id: 103,
    slug: "encre-hp-305",
    name: "Encre HP 305",
    category: "consommables",
    price: 12000,
    inStock: true,
    images: [
      "encre-hp-305.webp"
    ],
    description: "Cartouche d’encre HP 305 conçue pour offrir des impressions nettes et de qualité. Disponible en noir et en tricolore. Compatible avec plusieurs imprimantes HP DeskJet des séries 2700, 2710, 2720, 2730, 2755, 4100, 4110, 4120 et 4130. Idéale pour l’impression de documents, textes, graphiques et images à domicile ou au bureau.",
    variantLabel: "Couleur",
    variants: [
      {
        name: "Noir",
        price: 12000,
        stock: 10
      },
      {
        name: "Tricolore",
        price: 12000,
        stock: 10
      }
    ],
    specs: [
      {
        label: "Type",
        value: "Cartouche d’encre"
      },
      {
        label: "Marque",
        value: "HP"
      },
      {
        label: "Modèle",
        value: "305"
      },
      {
        label: "Technologie",
        value: "Jet d’encre thermique HP"
      },
      {
        label: "Utilisation",
        value: "Documents, textes, graphiques et images"
      },
      {
        label: "Compatibilité",
        value: "HP DeskJet 2700, HP DeskJet 2710, HP DeskJet 2720, HP DeskJet 2730, HP DeskJet 2755, HP DeskJet 4100, HP DeskJet 4110, HP DeskJet 4120, HP DeskJet 4130"
      },
      {
        label: "Conditionnement",
        value: "Individuel"
      },
      {
        label: "Type de consommable",
        value: "Cartouche d’encre"
      },
      {
        label: "Couleurs disponibles",
        value: "Noir, Tricolore"
      }
    ]
  },
  {
    id: 101,
    slug: "encre-hp-653",
    name: "Encre HP 653",
    category: "consommables",
    price: 12000,
    inStock: true,
    images: [
      "encre-hp-653.webp"
    ],
    description: "Cartouche d’encre HP 653 conçue pour offrir des impressions nettes, précises et de qualité. Disponible en noir et en tricolore, elle est adaptée à l’impression de documents, textes, graphiques et images. Idéale pour une utilisation à domicile, au bureau ou en petite entreprise.",
    variantLabel: "Couleur",
    variants: [
      {
        name: "Noir",
        price: 12000,
        stock: 20
      },
      {
        name: "Tricolore",
        price: 12000,
        stock: 20
      }
    ],
    specs: [
      {
        label: "Type",
        value: "Cartouche d’encre"
      },
      {
        label: "Marque",
        value: "HP"
      },
      {
        label: "Modèle",
        value: "653"
      },
      {
        label: "Technologie",
        value: "Jet d’encre thermique HP"
      },
      {
        label: "Utilisation",
        value: "Documents, textes, graphiques et images"
      },
      {
        label: "Compatibilité",
        value: "Imprimantes HP compatibles avec HP 653"
      },
      {
        label: "Conditionnement",
        value: "Individuel"
      },
      {
        label: "Type de consommable",
        value: "Cartouche d’encre"
      },
      {
        label: "Couleurs disponibles",
        value: "Noir, Tricolore"
      }
    ]
  },
  {
    id: 100,
    slug: "encre-hp-652",
    name: "Encre HP 652",
    category: "consommables",
    price: 12000,
    inStock: true,
    images: [
      "encre-hp-652.webp"
    ],
    description: "Cartouche d’encre HP 652 conçue pour offrir des impressions nettes, fiables et de qualité. Disponible en noir et en tricolore, elle convient aux impressions de documents, textes, graphiques et images. Idéale pour une utilisation à domicile, au bureau ou en petite entreprise.",
    variantLabel: "Couleur",
    variants: [
      {
        name: "Noir",
        price: 12000,
        stock: 20
      },
      {
        name: "Tricolore",
        price: 12000,
        stock: 20
      }
    ],
    specs: [
      {
        label: "Type",
        value: "Cartouche d’encre"
      },
      {
        label: "Marque",
        value: "HP"
      },
      {
        label: "Modèle",
        value: "652"
      },
      {
        label: "Technologie",
        value: "Jet d’encre thermique HP"
      },
      {
        label: "Utilisation",
        value: "Documents, textes, graphiques et images"
      },
      {
        label: "Compatibilité",
        value: "Imprimantes HP compatibles avec HP 652"
      },
      {
        label: "Conditionnement",
        value: "Individuel"
      },
      {
        label: "Type de consommable",
        value: "Cartouche d’encre"
      },
      {
        label: "Couleurs disponibles",
        value: "Noir, Tricolore"
      }
    ]
  },
  {
    id: 99,
    slug: "toner-hp-230a",
    name: "Toner HP 230A",
    category: "consommables",
    price: 65000,
    inStock: true,
    images: [
      "toner-hp-230a.webp"
    ],
    description: "Cartouche de toner originale HP 230A, conçue pour les imprimantes HP Color LaserJet Pro. Cette cartouche utilise la technologie HP TerraJet pour offrir des impressions de qualité professionnelle, des couleurs vives et une efficacité énergétique optimisée. Disponible en quatre couleurs : Noir, Cyan, Magenta et Jaune.",
    variantLabel: "Couleur",
    variants: [
      {
        name: "Noir",
        price: 65000,
        stock: 10
      },
      {
        name: "Cyan",
        price: 65000,
        stock: 8
      },
      {
        name: "Magenta",
        price: 65000,
        stock: 8
      },
      {
        name: "Jaune",
        price: 65000,
        stock: 8
      }
    ],
    specs: [
      {
        label: "Type",
        value: "Toner"
      },
      {
        label: "Marque",
        value: "HP"
      },
      {
        label: "Modèle",
        value: "230A"
      },
      {
        label: "Technologie",
        value: "Laser / HP TerraJet"
      },
      {
        label: "Compatibilité",
        value: "HP Color LaserJet Pro 4203, 4303"
      },
      {
        label: "Rendement Noir",
        value: "~2 000 pages"
      },
      {
        label: "Conditionnement",
        value: "Individuel"
      },
      {
        label: "Rendement Couleur",
        value: "~1 800 pages"
      },
      {
        label: "Type de consommable",
        value: "Toner original"
      }
    ]
  },
  {
    id: 98,
    slug: "encre-hp-938",
    name: "Encre HP 938",
    category: "consommables",
    price: 20000,
    inStock: true,
    images: [
      "encre-hp-938.webp"
    ],
    description: "La cartouche d'encre originale HP 938 offre des impressions de qualité professionnelle avec des couleurs vives et un texte net. Conçue pour les imprimantes HP OfficeJet Pro, elle garantit une excellente fiabilité et une durée de vie prolongée. Disponible en plusieurs couleurs : Noir, Cyan, Magenta et Jaune. Idéale pour les bureaux, les entreprises et un usage quotidien intensif.",
    variantLabel: "Couleur",
    variants: [
      {
        name: "Noir",
        price: 30000,
        stock: 10
      },
      {
        name: "Cyan",
        price: 20000,
        stock: 8
      },
      {
        name: "Magenta",
        price: 20000,
        stock: 8
      },
      {
        name: "Jaune",
        price: 20000,
        stock: 8
      }
    ],
    specs: [
      {
        label: "Type",
        value: "Cartouche d'encre"
      },
      {
        label: "Marque",
        value: "HP"
      },
      {
        label: "Modèle",
        value: "938"
      },
      {
        label: "Qualité",
        value: "Originale HP"
      },
      {
        label: "Rendement",
        value: "Environ 800 pages"
      },
      {
        label: "Compatible",
        value: "HP OfficeJet Pro"
      },
      {
        label: "Technologie",
        value: "Jet d'encre"
      },
      {
        label: "Conditionnement",
        value: "Individuel"
      },
      {
        label: "Type de consommable",
        value: "Encre"
      }
    ]
  },
  {
    id: 96,
    slug: "toner-hp-150a",
    name: "Toner HP 150A",
    category: "consommables",
    price: 40000,
    inStock: true,
    images: [
      "toner-hp-150a.webp"
    ],
    description: "Le HP 150A (W1500A) est une cartouche de toner laser noir originale HP, de capacité standard. Elle est conçue pour fournir des impressions nettes et régulières dans les imprimantes et multifonctions HP LaserJet compatibles. Son rendement est d’environ 975 pages, selon la norme ISO/IEC 19752.",
    specs: [
      {
        label: "Type",
        value: "Cartouche de toner laser"
      },
      {
        label: "Contenu",
        value: [
          "Cartouche de toner",
          "Guide de recyclage"
        ]
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Capacite",
        value: "Standard"
      },
      {
        label: "Reference",
        value: "W1500A"
      },
      {
        label: "Rendement",
        value: "Environ 975 pages"
      },
      {
        label: "Technologie",
        value: "Laser"
      },
      {
        label: "Compatibilite",
        value: [
          "HP LaserJet M111",
          "HP LaserJet M111cw",
          "HP LaserJet M111ca",
          "HP LaserJet MFP M141a",
          "HP LaserJet MFP M141ca",
          "HP LaserJet MFP M141cw"
        ]
      },
      {
        label: "Poids cartouche",
        value: "Environ 0,51 kg"
      },
      {
        label: "Dimensions emballage",
        value: "375 x 108 x 125 mm"
      }
    ]
  },
  {
    id: 95,
    slug: "lenovo-v15-g5-core-i5",
    name: "Lenovo V15 G5 Core i5",
    category: "ordinateurs-portables",
    price: 400000,
    inStock: true,
    images: [
      "lenovo-v15-g5-core-i5.webp"
    ],
    description: "Le Lenovo V15 G5 IRL est un ordinateur portable de 15,6 pouces destiné à la bureautique et à l’usage professionnel. Dans la configuration correspondant à ton appareil, il est équipé d’un Intel Core i5-13420H de 13ᵉ génération, de 8 Go de mémoire DDR4 et d’un SSD de 512 Go NVMe. Il intègre une Intel UHD Graphics, un écran Full HD 15,6 pouces et une webcam HD avec cache de confidentialité.",
    specs: [
      {
        label: "Ram",
        value: "8 Go DDR4"
      },
      {
        label: "Type",
        value: "Ordinateur portable professionnel"
      },
      {
        label: "Audio",
        value: "Haut-parleurs stéréo 2 x 1.5 W"
      },
      {
        label: "Cache",
        value: "12 Mo"
      },
      {
        label: "Ecran",
        value: "15.6 pouces"
      },
      {
        label: "Poids",
        value: "À partir de 1.61 kg"
      },
      {
        label: "Usage",
        value: [
          "Bureautique",
          "Professionnel",
          "Études",
          "Internet",
          "Multimédia"
        ]
      },
      {
        label: "Coeurs",
        value: "8"
      },
      {
        label: "Webcam",
        value: "HD 720p avec cache de confidentialité"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Systeme",
        value: "Windows 11"
      },
      {
        label: "Threads",
        value: "12"
      },
      {
        label: "Batterie",
        value: "47 Wh"
      },
      {
        label: "Stockage",
        value: "SSD 512 Go NVMe PCIe 4.0"
      },
      {
        label: "Generation",
        value: "13e génération"
      },
      {
        label: "Luminosite",
        value: "250 nits"
      },
      {
        label: "Processeur",
        value: "Intel Core i5-13420H"
      },
      {
        label: "Resolution",
        value: "1920 x 1080 Full HD"
      },
      {
        label: "Type ecran",
        value: "TN antireflet"
      },
      {
        label: "Connectivite",
        value: [
          "Wi-Fi",
          "Bluetooth",
          "USB",
          "USB-C",
          "HDMI",
          "RJ-45"
        ]
      },
      {
        label: "Carte graphique",
        value: "Intel UHD Graphics intégrée"
      },
      {
        label: "Frequence maximale",
        value: "4.6 GHz"
      }
    ]
  },
  {
    id: 94,
    slug: "panasonic-kx-tg2713",
    name: "Panasonic KX-TG2713",
    category: "telephonie-ip-analogique",
    price: 100000,
    inStock: true,
    images: [
      "panasonic-kx-tg2713.webp"
    ],
    description: "Le Panasonic KX-TG2713 est un pack de 3 téléphones fixes sans fil DECT, idéal pour la maison, les bureaux et les petites entreprises. Il offre une bonne qualité sonore, un mode mains libres sur les combinés, un répertoire de 50 contacts, l’identification de l’appelant et un mode ECO permettant de réduire la consommation d’énergie.",
    specs: [
      {
        label: "Type",
        value: "Téléphone fixe sans fil DECT"
      },
      {
        label: "Ecran",
        value: "LCD monochrome 1,4 pouces"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Montage",
        value: [
          "Bureau",
          "Mural"
        ]
      },
      {
        label: "Batterie",
        value: "2 x AAA Ni-MH rechargeables par combiné"
      },
      {
        label: "Mode eco",
        value: "Oui"
      },
      {
        label: "Frequence",
        value: "1,9 GHz"
      },
      {
        label: "Conference",
        value: "3 participants"
      },
      {
        label: "Interphone",
        value: "Oui"
      },
      {
        label: "Repertoire",
        value: "50 noms et numéros"
      },
      {
        label: "Technologie",
        value: "DECT"
      },
      {
        label: "Mains libres",
        value: "Oui"
      },
      {
        label: "Temps recharge",
        value: "Environ 7 heures"
      },
      {
        label: "Autonomie veille",
        value: "Jusqu'à 170 heures"
      },
      {
        label: "Nombre de combinés",
        value: "3"
      },
      {
        label: "Memoire recomposition",
        value: "10 numéros"
      },
      {
        label: "Autonomie conversation",
        value: "Jusqu'à 20 heures"
      },
      {
        label: "Identification appelant",
        value: "Oui"
      }
    ]
  },
  {
    id: 93,
    slug: "hp-victus-gaming-laptop-15-fa2013dx",
    name: "HP Victus Gaming Laptop 15-fa2013dx",
    category: "ordinateurs-portables",
    price: 450000,
    inStock: true,
    images: [
      "hp-victus-gaming-laptop-15-fa2013dx.webp"
    ],
    description: "Le HP Victus Gaming Laptop 15-fa2013dx est un ordinateur portable gaming performant équipé d’un Intel Core i5-13420H, de 8 Go de RAM DDR4 et d’un SSD de 512 Go. Il dispose d’une carte graphique NVIDIA GeForce RTX 3050 avec 6 Go de mémoire dédiée, adaptée au gaming et aux applications graphiques. Son écran 15,6 pouces Full HD IPS 144 Hz offre une image fluide et réactive.",
    specs: [
      {
        label: "Ram",
        value: "8 Go DDR4"
      },
      {
        label: "Type",
        value: "Ordinateur portable gaming"
      },
      {
        label: "Audio",
        value: "DTS:X Ultra"
      },
      {
        label: "Ecran",
        value: "15,6 pouces"
      },
      {
        label: "Gamme",
        value: "Victus"
      },
      {
        label: "Usage",
        value: [
          "Gaming",
          "Bureautique",
          "Multimédia",
          "Création graphique"
        ]
      },
      {
        label: "Coeurs",
        value: "8"
      },
      {
        label: "Systeme",
        value: "Windows 11"
      },
      {
        label: "Threads",
        value: "12"
      },
      {
        label: "Batterie",
        value: "3 cellules, 52,5 Wh"
      },
      {
        label: "Stockage",
        value: "SSD NVMe 512 Go"
      },
      {
        label: "Frequence",
        value: "144 Hz"
      },
      {
        label: "Generation",
        value: "13e génération"
      },
      {
        label: "Luminosite",
        value: "300 nits"
      },
      {
        label: "Processeur",
        value: "Intel Core i5-13420H"
      },
      {
        label: "Resolution",
        value: "1920 x 1080 Full HD"
      },
      {
        label: "Type ecran",
        value: "IPS"
      },
      {
        label: "Carte graphique",
        value: "NVIDIA GeForce RTX 3050"
      },
      {
        label: "Memoire graphique",
        value: "6 Go GDDR6"
      }
    ]
  },
  {
    id: 91,
    slug: "starlink",
    name: "Kit Starlink",
    category: "routeurs",
    price: 400000,
    inStock: true,
    images: [
      "starlink.webp"
    ],
    description: "Le Starlink est une solution d’accès Internet par satellite comprenant une antenne à réseau phasé électroniquement, un support, un routeur, les câbles et l’alimentation. Il permet de fournir une connexion Internet haut débit dans les zones où les connexions terrestres sont limitées. L’antenne est conçue pour s’orienter automatiquement et résiste aux conditions extérieures.",
    specs: [
      {
        label: "Type",
        value: "Kit Internet satellite"
      },
      {
        label: "Antenne",
        value: "Réseau phasé électroniquement"
      },
      {
        label: "Protection",
        value: "IP67"
      },
      {
        label: "Orientation",
        value: "Auto-orientable"
      },
      {
        label: "Wifi routeur",
        value: "Wi-Fi 6"
      },
      {
        label: "Securite wifi",
        value: "WPA2"
      },
      {
        label: "Contenu du kit",
        value: [
          "Antenne Starlink",
          "Support",
          "Routeur Gen 3",
          "Câble Starlink 15 m",
          "Câble secteur",
          "Bloc d'alimentation"
        ]
      },
      {
        label: "Ports ethernet",
        value: "2 x Ethernet"
      },
      {
        label: "Champ de vision",
        value: "110°"
      },
      {
        label: "Consommation moyenne",
        value: "Environ 62 W"
      },
      {
        label: "Temperature fonctionnement",
        value: "-30°C à 50°C"
      }
    ]
  },
  {
    id: 90,
    slug: "tp-link-omada-eap650-outdoor-ax3000",
    name: "TP-Link Omada EAP650-Outdoor AX3000",
    category: "point-d-acces",
    price: 120000,
    inStock: true,
    images: [
      "tp-link-omada-eap650-outdoor-ax3000.webp"
    ],
    description: "Le TP-Link Omada EAP650-Outdoor est un point d’accès Wi-Fi 6 AX3000 conçu pour une utilisation intérieure et extérieure. Il offre jusqu’à 2402 Mbps en 5 GHz + 574 Mbps en 2,4 GHz, avec une couverture longue portée. Son boîtier IP67 résiste à l’eau et à la poussière. Il prend en charge le PoE+ 802.3at, la technologie Omada Mesh et la gestion centralisée via Omada.",
    specs: [
      {
        label: "Type",
        value: "Point d'accès Wi-Fi 6 intérieur/extérieur"
      },
      {
        label: "Gamme",
        value: "Omada"
      },
      {
        label: "Ports",
        value: [
          "1 x Gigabit Ethernet RJ45"
        ]
      },
      {
        label: "Classe",
        value: "AX3000"
      },
      {
        label: "Gestion",
        value: [
          "Omada Software Controller",
          "Omada Hardware Controller",
          "Omada Cloud",
          "Omada App"
        ]
      },
      {
        label: "Antennes",
        value: [
          "2 x 5 dBi",
          "2 x 4 dBi"
        ]
      },
      {
        label: "Debit 5ghz",
        value: "2402 Mbps"
      },
      {
        label: "Dimensions",
        value: "280.4 x 106.5 x 56.8 mm"
      },
      {
        label: "Norme wifi",
        value: "Wi-Fi 6 (802.11ax)"
      },
      {
        label: "Protection",
        value: "IP67"
      },
      {
        label: "Alimentation",
        value: [
          "PoE+ 802.3at",
          "PoE passif 48 V"
        ]
      },
      {
        label: "Debit 2 4ghz",
        value: "574 Mbps"
      },
      {
        label: "Installation",
        value: [
          "Murale",
          "Sur poteau"
        ]
      },
      {
        label: "Technologies",
        value: [
          "OFDMA",
          "MU-MIMO",
          "Omada Mesh",
          "Seamless Roaming",
          "Beamforming",
          "Band Steering"
        ]
      },
      {
        label: "Clients concurrents",
        value: "250+"
      }
    ]
  },
  {
    id: 89,
    slug: "stabilisateur-akai-2000va",
    name: "Stabilisateur Akai 2000 VA",
    category: "onduleurs",
    price: 30000,
    inStock: true,
    images: [
      "stabilisateur-akai-2000va.webp"
    ],
    description: "Le AKAI AVR003A-2000VA est un régulateur automatique de tension de 2000 VA conçu pour protéger les équipements électriques contre les variations de tension. Il dispose de deux voltmètres analogiques permettant de surveiller la tension d’entrée et de sortie, ainsi que de plusieurs protections contre les surtensions, courts-circuits et surcharges. Il intègre également une fonction de délai de sortie et une assistance 110 V",
    specs: [
      {
        label: "Type",
        value: "Régulateur automatique de tension"
      },
      {
        label: "Usage",
        value: [
          "Ordinateurs",
          "Téléviseurs",
          "Équipements de bureau",
          "Appareils électriques"
        ]
      },
      {
        label: "Couleur",
        value: "Noir / Gris"
      },
      {
        label: "Affichage",
        value: "Double voltmètre analogique"
      },
      {
        label: "Frequence",
        value: "50/60 Hz"
      },
      {
        label: "Puissance",
        value: "2000 VA"
      },
      {
        label: "Indicateurs",
        value: [
          "Working",
          "Delaying",
          "Unusual",
          "Overload"
        ]
      },
      {
        label: "Protections",
        value: [
          "Haute tension",
          "Court-circuit",
          "Surcharge",
          "Délai de sortie"
        ]
      },
      {
        label: "Tension entree",
        value: "100-260 V AC"
      },
      {
        label: "Tension sortie",
        value: "220 V ±10 V"
      },
      {
        label: "Assistance 110v",
        value: "Oui"
      }
    ]
  },
  {
    id: 88,
    slug: "tp-link-omada-10-port-gigabit-poe",
    name: "TP-Link Omada 10 ports Gigabit PoE",
    category: "switchs",
    price: 120000,
    inStock: true,
    images: [
      "tp-link-omada-10-port-gigabit-poe.webp"
    ],
    description: "Le TP-Link Omada ES210GP est un switch Gigabit Easy Managed à 10 ports, conçu pour les réseaux professionnels, la vidéosurveillance et les installations Wi-Fi. Il dispose de 8 ports Gigabit PoE+ permettant d’alimenter directement des équipements compatibles tels que les caméras IP, points d’accès Wi-Fi et téléphones IP. Il offre également 1 port Gigabit RJ45 et 1 port Combo SFP/RJ45, avec un budget PoE total de 63 W. Son boîtier métallique fanless assure un fonctionnement silencieux et il peut être installé sur un bureau ou fixé au mur.",
    specs: [
      {
        label: "Type",
        value: "Switch Gigabit Easy Managed"
      },
      {
        label: "Gamme",
        value: "Omada"
      },
      {
        label: "Ports",
        value: "10 ports Gigabit"
      },
      {
        label: "Gestion",
        value: "Omada Cloud / Omada App"
      },
      {
        label: "Fonctions",
        value: [
          "VLAN",
          "QoS",
          "IGMP Snooping",
          "Port Isolation",
          "Loop Prevention"
        ]
      },
      {
        label: "Ports poe",
        value: "8 x Gigabit PoE+"
      },
      {
        label: "Budget poe",
        value: "63 W"
      },
      {
        label: "Dimensions",
        value: "209 x 126 x 26 mm"
      },
      {
        label: "Ventilation",
        value: "Fanless"
      },
      {
        label: "Installation",
        value: [
          "Bureau",
          "Murale"
        ]
      },
      {
        label: "Standard poe",
        value: "IEEE 802.3af/at"
      },
      {
        label: "Ports non poe",
        value: [
          "1 x Gigabit RJ45",
          "1 x Gigabit SFP/RJ45 Combo"
        ]
      },
      {
        label: "Debit transfert",
        value: "14.88 Mpps"
      },
      {
        label: "Puissance par port",
        value: "Jusqu'à 30 W"
      },
      {
        label: "Capacite commutation",
        value: "20 Gbps"
      }
    ]
  },
  {
    id: null,
    slug: "toner-hp-222a",
    name: "Toner HP 222A",
    category: "consommables",
    price: 50000,
    inStock: true,
    images: [
      "toner-hp-222a.webp",
      "toner-hp-222a-2.webp",
      "toner-hp-222a-3.webp",
      "toner-hp-222a-4.webp",
      "toner-hp-222a-5.webp"
    ],
    description: "Toner HP 222A compatible avec les imprimantes HP Color LaserJet Pro MFP 3303. Disponible en plusieurs couleurs : Noir, Cyan, Magenta, Jaune.",
    variantLabel: "Couleur",
    variants: [
      {
        name: "Noir",
        price: 50000,
        stock: 15
      },
      {
        name: "Cyan",
        price: 50000,
        stock: 10
      },
      {
        name: "Magenta",
        price: 50000,
        stock: 10
      },
      {
        name: "Jaune",
        price: 50000,
        stock: 12
      }
    ],
    specs: [
      {
        label: "Type",
        value: "Toner"
      },
      {
        label: "Rendement",
        value: "Environ 1200 pages"
      },
      {
        label: "Compatibilité",
        value: "HP Color LaserJet Pro MFP 3303"
      }
    ]
  },
  {
    id: 85,
    slug: "toplink-2000va",
    name: "TopLink 2000 VA",
    category: "onduleurs",
    price: 80000,
    inStock: true,
    images: [
      "toplink-2000va.webp"
    ],
    description: "Le TopLink 2000VA/1200W est un onduleur conçu pour protéger les équipements informatiques et électroniques contre les coupures, surtensions et variations de tension. Grâce à son stabilisateur de tension intégré, il assure une alimentation plus stable pour les ordinateurs, imprimantes, équipements réseau et caméras de surveillance. Il dispose également d’une fonction démarrage à froid et de chargement hors ligne, pour une utilisation fiable au quotidien.",
    specs: [
      {
        label: "Type",
        value: "Onduleur Line-Interactive"
      },
      {
        label: "Prises",
        value: "3 prises universelles"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Fonction",
        value: [
          "Démarrage à froid",
          "Chargement hors ligne"
        ]
      },
      {
        label: "Frequence",
        value: "50/60 Hz"
      },
      {
        label: "Puissance",
        value: "2000 VA / 1200 W"
      },
      {
        label: "Forme onde",
        value: "Sinusoïde simulée"
      },
      {
        label: "Protection",
        value: [
          "Surtension",
          "Surcharge",
          "Court-circuit"
        ]
      },
      {
        label: "Technologie",
        value: "AVR"
      }
    ]
  },
  {
    id: 83,
    slug: "canon-i-sensys-mf657cdw",
    name: "Canon i-SENSYS MF657Cdw",
    category: "imprimantes",
    price: 370000,
    inStock: true,
    images: [
      "canon-i-sensys-mf657cdw.webp"
    ],
    description: "La Canon i-SENSYS MF657Cdw est une imprimante multifonction laser couleur conçue pour les bureaux et petites entreprises. Elle combine impression, numérisation, copie et fax, avec une connexion réseau et Wi-Fi pour faciliter l’utilisation depuis plusieurs appareils. Son écran tactile couleur et son chargeur automatique de documents permettent une utilisation simple et efficace au quotidien.",
    specs: [
      {
        label: "ADF",
        value: "50 feuilles"
      },
      {
        label: "Type",
        value: "Multifonction laser couleur"
      },
      {
        label: "Ecran",
        value: "Tactile couleur 12,7 cm"
      },
      {
        label: "Toner",
        value: "Canon 067 / 067H"
      },
      {
        label: "Format",
        value: "A4"
      },
      {
        label: "Scanner",
        value: "600 x 600 dpi"
      },
      {
        label: "Vitesse",
        value: "21 ppm"
      },
      {
        label: "Fonctions",
        value: [
          "Impression",
          "Copie",
          "Numérisation",
          "Fax"
        ]
      },
      {
        label: "Recto verso",
        value: "Automatique"
      },
      {
        label: "Connectivite",
        value: [
          "Wi-Fi",
          "USB",
          "Ethernet"
        ]
      },
      {
        label: "Resolution impression",
        value: "1200 x 1200 dpi"
      }
    ]
  },
  {
    id: 75,
    slug: "hp-290-g9-i5",
    name: "HP 290 G9 i5",
    category: "ordinateurs-de-bureau",
    price: 520000,
    inStock: true,
    images: [
      "hp-290-g9-i5.webp"
    ],
    description: "Le HP 290 G9 est un ordinateur de bureau professionnel équipé d’un processeur Intel Core i5 de 13ᵉ génération, offrant de bonnes performances pour les tâches bureautiques, professionnelles et multitâches. Il dispose de 8 Go de mémoire RAM et d’un SSD de 512 Go pour un démarrage rapide du système et un accès rapide aux fichiers. Son format compact permet une installation facile dans différents espaces de travail. Il est idéal pour les entreprises, bureaux, administrations et utilisateurs recherchant un ordinateur fiable et performant.",
    specs: [
      {
        label: "Ram",
        value: "8 Go"
      },
      {
        label: "Usage",
        value: "Bureautique, gestion et professionnel"
      },
      {
        label: "Format",
        value: "Desktop"
      },
      {
        label: "Systeme",
        value: "Windows 11"
      },
      {
        label: "Stockage",
        value: "SSD 512 Go"
      },
      {
        label: "Processeur",
        value: "Intel Core i5 13e génération"
      },
      {
        label: "Type stockage",
        value: "SSD"
      }
    ]
  },
  {
    id: 74,
    slug: "canon-pixma-g3430",
    name: "Canon Pixma G3430",
    category: "imprimantes",
    price: 150000,
    inStock: true,
    images: [
      "canon-pixma-g3430.webp"
    ],
    description: "La Canon PIXMA G3430 est une imprimante multifonction à réservoirs d’encre rechargeables, conçue pour l’impression, la copie et la numérisation. Grâce à sa connectivité Wi-Fi, elle permet d’imprimer facilement depuis un ordinateur, un smartphone ou une tablette. Son système MegaTank offre un rendement élevé avec un coût d’impression réduit, ce qui la rend adaptée aux particuliers, bureaux et petites entreprises. Elle prend en charge l’impression couleur et monochrome au format A4 et offre une utilisation simple et pratique au quotidien.",
    specs: [
      {
        label: "Type",
        value: "Multifonction jet d'encre"
      },
      {
        label: "Encre",
        value: "Canon GI-41"
      },
      {
        label: "Format",
        value: "A4"
      },
      {
        label: "Couleur",
        value: "Couleur"
      },
      {
        label: "Fonctions",
        value: [
          "Impression",
          "Copie",
          "Numérisation"
        ]
      },
      {
        label: "Resolution",
        value: "4800 x 1200 dpi"
      },
      {
        label: "Recto verso",
        value: "Manuel"
      },
      {
        label: "Connectivite",
        value: [
          "Wi-Fi",
          "USB"
        ]
      },
      {
        label: "Vitesse noir",
        value: "11 ipm"
      },
      {
        label: "Vitesse couleur",
        value: "6 ipm"
      }
    ]
  },
  {
    id: 73,
    slug: "hp-laser-mpf-137fnw",
    name: "HP Laser MFP 137fnw",
    category: "imprimantes",
    price: 190000,
    inStock: true,
    images: [
      "hp-laser-mpf-137fnw.webp"
    ],
    description: "La HP Laser MFP 137fnw est une imprimante multifonction laser monochrome 4-en-1 conçue pour les bureaux et petites entreprises. Elle offre les fonctions d’impression, de numérisation, de copie et de fax. Grâce à sa connectivité Wi-Fi et réseau, elle permet une impression pratique depuis plusieurs ordinateurs et appareils mobiles. Son format compact, son chargeur automatique de documents et son utilisation avec le toner HP 106A en font une solution pratique et efficace pour les besoins professionnels quotidiens",
    specs: [
      {
        label: "Type",
        value: "Imprimante multifonction laser monochrome"
      },
      {
        label: "Ecran",
        value: "Écran LCD"
      },
      {
        label: "Toner",
        value: "HP 106A"
      },
      {
        label: "Usage",
        value: "Bureau et petite entreprise"
      },
      {
        label: "Format",
        value: "A4"
      },
      {
        label: "Scanner",
        value: [
          "Scanner à plat avec chargeur automatique de documents",
          "Jusqu'à 600 x 600 dpi"
        ]
      },
      {
        label: "Fonctions",
        value: [
          "Impression",
          "Numérisation",
          "Copie",
          "Fax"
        ]
      },
      {
        label: "Impression",
        value: [
          "Monochrome",
          "Jusqu'à 20 pages/min",
          "Jusqu'à 1200 x 1200 dpi",
          "Laser",
          "A4"
        ]
      },
      {
        label: "Connectivite",
        value: [
          "USB",
          "Wi-Fi",
          "Réseau Ethernet"
        ]
      },
      {
        label: "Chargeur documents",
        value: "ADF"
      },
      {
        label: "Compatibilite mobile",
        value: [
          "HP Smart",
          "Impression mobile"
        ]
      }
    ]
  },
  {
    id: 72,
    slug: "tp-link-re605x-ax1800-repeteur-wi-fi-6",
    name: "TP-Link RE605X AX1800 Wi-Fi 6",
    category: "repeteurs-wi-fi",
    price: 60000,
    inStock: true,
    images: [
      "tp-link-re605x-ax1800-repeteur-wi-fi-6.webp"
    ],
    description: "TP-Link RE605X est un répéteur Wi-Fi 6 AX1800 conçu pour étendre la couverture de votre réseau Wi-Fi et éliminer les zones mortes. Il offre une connexion rapide et stable grâce au Wi-Fi 6 Dual Band, idéal pour le streaming, le télétravail, les jeux en ligne et la connexion de plusieurs appareils. Compatible EasyMesh, il permet de créer un réseau Wi-Fi étendu et homogène.",
    specs: [
      {
        label: "Type",
        value: "Répéteur Wi-Fi 6"
      },
      {
        label: "Fonction",
        value: "Extension de couverture Wi-Fi"
      },
      {
        label: "Norme wifi",
        value: "Wi-Fi 6"
      },
      {
        label: "Bandes wifi",
        value: "2,4 GHz + 5 GHz"
      },
      {
        label: "Classe wifi",
        value: "AX1800"
      },
      {
        label: "Installation",
        value: "Configuration facile"
      },
      {
        label: "Vitesse 5ghz",
        value: "1201 Mbps"
      },
      {
        label: "Port ethernet",
        value: "1 x Gigabit Ethernet"
      },
      {
        label: "Compatibilité",
        value: "Compatible avec les routeurs Wi-Fi"
      },
      {
        label: "Vitesse 2 4ghz",
        value: "574 Mbps"
      },
      {
        label: "Technologie mesh",
        value: "EasyMesh"
      }
    ]
  },
  {
    id: 71,
    slug: "tp-link-re700x-ax3000-repeteur-wi-fi-6",
    name: "TP-Link RE700X AX3000 Wi-Fi 6",
    category: "repeteurs-wi-fi",
    price: 80000,
    inStock: true,
    images: [
      "tp-link-re700x-ax3000-repeteur-wi-fi-6.webp"
    ],
    description: "Le TP-Link RE700X est un répéteur Wi-Fi 6 AX3000 conçu pour étendre la couverture Wi-Fi et éliminer les zones mortes. Il offre une connexion rapide et stable dans toute la maison ou le bureau. Grâce à la technologie OneMesh, il permet de créer un réseau Wi-Fi homogène avec une couverture étendue. Son port Gigabit Ethernet permet également de connecter des appareils filaires.",
    specs: [
      {
        label: "Type",
        value: "Répéteur Wi-Fi 6"
      },
      {
        label: "Norme wifi",
        value: "Wi-Fi 6"
      },
      {
        label: "Bandes wifi",
        value: "2,4 GHz + 5 GHz"
      },
      {
        label: "Classe wifi",
        value: "AX3000"
      },
      {
        label: "Installation",
        value: "Configuration facile"
      },
      {
        label: "Vitesse 5ghz",
        value: "2402 Mbps"
      },
      {
        label: "Compatibilite",
        value: "Compatible avec les routeurs Wi-Fi"
      },
      {
        label: "Port ethernet",
        value: "1 x Gigabit Ethernet"
      },
      {
        label: "Vitesse 2 4ghz",
        value: "574 Mbps"
      },
      {
        label: "Largeur de canal",
        value: "160 MHz"
      },
      {
        label: "Technologie mesh",
        value: "OneMesh"
      }
    ]
  },
  {
    id: 70,
    slug: "panasonic-kx-tes824ce",
    name: "Panasonic KX-TES824CE",
    category: "autocoms",
    price: 260000,
    inStock: true,
    images: [
      "panasonic-kx-tes824ce.webp"
    ],
    description: "Le Panasonic KX-TES824CE est un système téléphonique hybride professionnel conçu pour la gestion des communications téléphoniques des petites et moyennes entreprises. Il permet de connecter plusieurs lignes téléphoniques et postes internes, avec des fonctions telles que le transfert d’appels, la mise en attente, la conférence, la messagerie vocale, le DISA et la distribution automatique des appels (UCD). Sa capacité peut être étendue jusqu’à 8 lignes extérieures et 24 extensions avec les cartes d’extension appropriées.",
    specs: [
      {
        label: "Type",
        value: "Central téléphonique hybride / PABX"
      },
      {
        label: "Marque",
        value: "Panasonic"
      },
      {
        label: "Modèle",
        value: "KX-TES824CE"
      },
      {
        label: "Fonctions",
        value: [
          "Transfert d'appels",
          "Mise en attente",
          "Conférence téléphonique",
          "DISA",
          "UCD - Distribution automatique des appels",
          "Messagerie vocale",
          "Identification de l'appelant",
          "Numérotation abrégée",
          "Appel d'urgence",
          "Gestion des postes internes"
        ]
      },
      {
        label: "Interfaces",
        value: [
          "USB 1.1",
          "RS-232C",
          "Interface batterie",
          "Doorphone / ouverture de porte",
          "Musique d'attente",
          "Pager"
        ]
      },
      {
        label: "Utilisation",
        value: "Entreprises, bureaux, hôtels, commerces et installations téléphoniques professionnelles"
      },
      {
        label: "Capacité maximale",
        value: [
          "24",
          "8"
        ]
      },
      {
        label: "Configuration de base",
        value: [
          "8",
          "3"
        ]
      }
    ]
  },
  {
    id: 69,
    slug: "tp-link-3000va-pro",
    name: "TP-Link 3000 VA Pro",
    category: "onduleurs",
    price: 120000,
    inStock: true,
    images: [
      "tp-link-3000va-pro.webp"
    ],
    description: "Le TopLink TL-3000VA PRO est un onduleur puissant conçu pour assurer la continuité de l’alimentation électrique et protéger vos équipements contre les coupures, surtensions et variations de tension. Avec une capacité de 3000VA et une puissance de 1800W, il convient parfaitement aux ordinateurs, serveurs, équipements réseau, systèmes de vidéosurveillance et installations professionnelles. Il dispose d’un écran LCD pour visualiser facilement les informations de fonctionnement et intègre la technologie AVR pour stabiliser automatiquement la tension.",
    specs: [
      {
        label: "Type",
        value: "Onduleur UPS"
      },
      {
        label: "Marque",
        value: "TopLink"
      },
      {
        label: "Modèle",
        value: "TL-3000VA PRO"
      },
      {
        label: "Affichage",
        value: "Écran LCD"
      },
      {
        label: "Capacité",
        value: "3000VA"
      },
      {
        label: "Puissance",
        value: "1800W"
      },
      {
        label: "Fréquence",
        value: "50/60 Hz"
      },
      {
        label: "Protection",
        value: "Coupures de courant, surtensions, variations de tension et surcharges"
      },
      {
        label: "Technologie",
        value: "AVR"
      },
      {
        label: "Utilisation",
        value: "Ordinateurs, serveurs, équipements réseau, vidéosurveillance et équipements professionnels"
      }
    ]
  },
  {
    id: 68,
    slug: "hp-laser-108w",
    name: "HP Laser 108w",
    category: "imprimantes",
    price: 90000,
    inStock: true,
    images: [
      "hp-laser-108w.webp"
    ],
    description: "La HP Laser 108w est une imprimante laser monochrome compacte conçue pour l’impression de documents professionnels et personnels. Elle offre une vitesse d’impression pouvant atteindre 20 pages/minute en noir et une résolution jusqu’à 1 200 × 1 200 dpi. Son format compact la rend adaptée aux bureaux et espaces de travail où l’on recherche une imprimante simple et efficace.",
    specs: [
      {
        label: "Nom",
        value: "HP Laser 108w"
      },
      {
        label: "Format",
        value: "A4"
      },
      {
        label: "Couleur",
        value: "Monochrome"
      },
      {
        label: "Cartouche",
        value: "1 cartouche noire"
      },
      {
        label: "Resolution",
        value: "Jusqu'à 1200 x 1200 dpi"
      },
      {
        label: "Technologie",
        value: "Laser"
      },
      {
        label: "Utilisation",
        value: [
          "Documents professionnels",
          "Bureaux",
          "Impression de documents",
          "Usage personnel"
        ]
      },
      {
        label: "Vitesse impression",
        value: "Jusqu'à 20 ppm"
      }
    ]
  },
  {
    id: 67,
    slug: "toplink-1000va",
    name: "TopLink 1000 VA",
    category: "onduleurs",
    price: 30000,
    inStock: true,
    images: [
      "toplink-1000va.webp"
    ],
    description: "Le TopLink 1000VA est un onduleur conçu pour protéger les équipements informatiques contre les coupures et variations de tension. Il intègre notamment la technologie AVR, la protection contre les surtensions et la surcharge, ainsi qu’un système de gestion de l’alimentation. Il convient aux ordinateurs, équipements réseau, imprimantes et autres appareils électroniques compatibles",
    specs: [
      {
        label: "Nom",
        value: "TopLink 1000VA"
      },
      {
        label: "Type",
        value: "Alimentation sans interruption"
      },
      {
        label: "Frequence",
        value: "50/60 Hz"
      },
      {
        label: "Puissance",
        value: "1000 VA"
      },
      {
        label: "Technologie",
        value: [
          "AVR",
          "Protection contre les surtensions",
          "Protection contre les surcharges",
          "Gestion avancée de l'alimentation"
        ]
      },
      {
        label: "Utilisation",
        value: [
          "Ordinateurs",
          "Équipements réseau",
          "Imprimantes",
          "Équipements électroniques"
        ]
      }
    ]
  },
  {
    id: 66,
    slug: "tp-link-eap610-outdoor-ax1800",
    name: "TP-Link EAP610-Outdoor AX1800",
    category: "point-d-acces",
    price: 100000,
    inStock: true,
    images: [
      "tp-link-eap610-outdoor-ax1800.webp"
    ],
    description: "Le TP-Link Omada EAP610-Outdoor est un point d’accès Wi-Fi 6 conçu pour les environnements intérieurs et extérieurs. Il offre jusqu’à 1,8 Gbit/s, dispose d’un boîtier IP67, d’une protection contre la foudre 6 kV et les décharges électrostatiques 15 kV. Il prend également en charge Omada Mesh, le roaming rapide et la gestion Cloud.",
    specs: [
      {
        label: "Nom",
        value: "TP-Link Omada EAP610-Outdoor"
      },
      {
        label: "Type",
        value: "Double bande"
      },
      {
        label: "Norme",
        value: "Wi-Fi 6"
      },
      {
        label: "Classe",
        value: "AX1800"
      },
      {
        label: "Gestion",
        value: [
          "Omada Cloud",
          "Omada App",
          "Omada SDN"
        ]
      },
      {
        label: "Ethernet",
        value: "Gigabit Ethernet"
      },
      {
        label: "Debit 5GHz",
        value: "1201 Mbps"
      },
      {
        label: "Protection",
        value: "IP67"
      },
      {
        label: "Debit total",
        value: "Jusqu'à 1,8 Gbit/s"
      },
      {
        label: "Alimentation",
        value: [
          "PoE+ 802.3at",
          "PoE passif"
        ]
      },
      {
        label: "Debit 2 4GHz",
        value: "574 Mbps"
      },
      {
        label: "Technologies",
        value: [
          "Wi-Fi 6",
          "OFDMA",
          "MU-MIMO",
          "Omada Mesh",
          "Fast Roaming"
        ]
      },
      {
        label: "Protection esd",
        value: "15 kV"
      },
      {
        label: "Protection foudre",
        value: "6 kV"
      }
    ]
  },
  {
    id: 65,
    slug: "hp-serie-5-527sf",
    name: "HP Série 5 527sf",
    category: "ecrans",
    price: 160000,
    inStock: true,
    images: [
      "hp-serie-5-527sf.webp"
    ],
    description: "Le HP Série 5 527sf est un écran 27 pouces Full HD équipé d’une dalle IPS offrant des couleurs précises et de larges angles de vision. Il propose une fréquence de rafraîchissement de 100 Hz, une luminosité de 300 nits, une couverture de 99 % sRGB et des connexions HDMI et VGA. Il convient aussi bien au travail qu’au divertissement.",
    specs: [
      {
        label: "Nom",
        value: "HP Série 5 527sf"
      },
      {
        label: "Format",
        value: "16:9"
      },
      {
        label: "Taille",
        value: "27 pouces"
      },
      {
        label: "Contraste",
        value: "1500:1"
      },
      {
        label: "Diagonale",
        value: "68,6 cm"
      },
      {
        label: "Frequence",
        value: "100 Hz"
      },
      {
        label: "Reference",
        value: "94F44AA"
      },
      {
        label: "Luminosite",
        value: "300 nits"
      },
      {
        label: "Resolution",
        value: "1920 x 1080"
      },
      {
        label: "Type dalle",
        value: "IPS"
      },
      {
        label: "Connectique",
        value: [
          "2 x HDMI 1.4",
          "1 x VGA"
        ]
      },
      {
        label: "Angle vision",
        value: "178°"
      },
      {
        label: "Technologies",
        value: [
          "HP Eye Ease",
          "Eyesafe",
          "Anti-scintillement",
          "Anti-reflet"
        ]
      },
      {
        label: "Compatibilite",
        value: "Chromebook"
      },
      {
        label: "Temps reponse",
        value: "5 ms GtG"
      },
      {
        label: "Couverture couleur",
        value: "99% sRGB"
      }
    ]
  },
  {
    id: 64,
    slug: "ubiquiti-nanostation-m2",
    name: "Ubiquiti NanoStation M2",
    category: "point-d-acces",
    price: 75000,
    inStock: true,
    images: [
      "ubiquiti-nanostation-m2.webp"
    ],
    description: "La Ubiquiti NanoStation M2 est une solution Wi-Fi extérieure fonctionnant sur la bande 2,4 GHz, adaptée aux liaisons réseau point à point et point à multipoint. Elle offre un débit radio annoncé jusqu’à environ 150 Mbps et dispose d’une antenne directionnelle intégrée. Elle convient notamment aux liaisons entre bâtiments et aux installations réseau extérieures.",
    specs: [
      {
        label: "Nom",
        value: "Ubiquiti NanoStation M2"
      },
      {
        label: "Debit",
        value: "Jusqu'à 150 Mbps"
      },
      {
        label: "Modes",
        value: [
          "Point à point",
          "Point à multipoint",
          "Point d'accès",
          "Client"
        ]
      },
      {
        label: "Antenne",
        value: "Antenne directionnelle intégrée"
      },
      {
        label: "Gestion",
        value: "AirOS"
      },
      {
        label: "Frequence",
        value: "2,4 GHz"
      },
      {
        label: "Technologie",
        value: "802.11n"
      },
      {
        label: "Utilisation",
        value: [
          "Liaison entre bâtiments",
          "Réseau extérieur",
          "Point à point",
          "Point à multipoint"
        ]
      },
      {
        label: "Gain antenne",
        value: "Environ 11 dBi"
      }
    ]
  },
  {
    id: 63,
    slug: "tp-link-deco-ac1200",
    name: "TP-Link Deco AC1200",
    category: "point-d-acces",
    price: 120000,
    inStock: true,
    images: [
      "tp-link-deco-ac1200.webp"
    ],
    description: "Le TP-Link Deco M4 AC1200 est un système Wi-Fi Mesh conçu pour offrir une couverture Wi-Fi stable et homogène dans toute la maison. Grâce à la technologie Mesh, plusieurs unités Deco fonctionnent ensemble pour créer un seul réseau Wi-Fi avec une couverture sans interruption. Le Deco M4 offre des vitesses AC1200 double bande, prend en charge jusqu’à 100 appareils et dispose de ports Ethernet Gigabit pour les connexions filaires. Il intègre également le roaming transparent, le contrôle parental, la sélection adaptative du chemin réseau et une installation simplifiée via l’application Deco.",
    specs: [
      {
        label: "Nom",
        value: "TP-Link Deco M4"
      },
      {
        label: "Type",
        value: "Système Wi-Fi Mesh"
      },
      {
        label: "Gamme",
        value: "Deco"
      },
      {
        label: "Bandes",
        value: [
          "2,4 GHz",
          "5 GHz"
        ]
      },
      {
        label: "Modèle",
        value: "Deco M4"
      },
      {
        label: "Roaming",
        value: "Seamless Roaming"
      },
      {
        label: "Couverture",
        value: "Jusqu'à 370 m²"
      },
      {
        label: "Norme WiFi",
        value: "Wi-Fi 5 (802.11ac)"
      },
      {
        label: "Débit 5GHz",
        value: "867 Mbps"
      },
      {
        label: "Débit WiFi",
        value: "AC1200"
      },
      {
        label: "Technologie",
        value: [
          "Wi-Fi Mesh",
          "Dual-Band",
          "Seamless Roaming",
          "Adaptive Path Selection"
        ]
      },
      {
        label: "Installation",
        value: "Configuration facile via l'application Deco"
      },
      {
        label: "Débit 2 4GHz",
        value: "300 Mbps"
      },
      {
        label: "Ports Ethernet",
        value: "Ports Gigabit Ethernet"
      },
      {
        label: "Assistant vocal",
        value: "Compatible Amazon Alexa"
      },
      {
        label: "Technologie Mesh",
        value: "Oui"
      },
      {
        label: "Controle Parental",
        value: "Oui"
      },
      {
        label: "Nombre d appareils",
        value: "Jusqu'à 100 appareils"
      },
      {
        label: "Selection adaptative du chemin",
        value: "Oui"
      }
    ]
  },
  {
    id: 62,
    slug: "tp-link-omada-eap772",
    name: "TP-Link Omada EAP772",
    category: "point-d-acces",
    price: 140000,
    inStock: true,
    images: [
      "tp-link-omada-eap772.webp"
    ],
    description: "Le TP-Link Omada EAP772 (BE9300) est un point d’accès Wi-Fi 7 professionnel tri-bande conçu pour offrir des performances très élevées et une couverture réseau fiable. Il atteint jusqu’à 9 335 Mbps et dispose de 6 flux spatiaux, avec prise en charge de la technologie Multi-Link Operation (MLO) pour améliorer les performances et la stabilité du réseau. Grâce à son port 2,5 Gbps PoE+, à la gestion centralisée via Omada Cloud, à l’Omada App et à l’Omada Controller, l’EAP772 est parfaitement adapté aux entreprises, bureaux, hôtels, écoles et installations réseau professionnelles. Il prend également en charge le roaming transparent, Omada Mesh, le Bluetooth et la technologie 4K-QAM.",
    specs: [
      {
        label: "Nom",
        value: "TP-Link Omada EAP772"
      },
      {
        label: "Type",
        value: "Point d'accès Wi-Fi 7 tri-bande"
      },
      {
        label: "Gamme",
        value: "Omada"
      },
      {
        label: "Gestion",
        value: [
          "Omada Cloud",
          "Omada App",
          "Omada Controller"
        ]
      },
      {
        label: "Modèle",
        value: "EAP772"
      },
      {
        label: "Roaming",
        value: "Seamless Roaming"
      },
      {
        label: "Bluetooth",
        value: "Oui"
      },
      {
        label: "Catégorie",
        value: "Point d'accès Wi-Fi professionnel"
      },
      {
        label: "Dimensions",
        value: "Ø 220 × 32,5 mm"
      },
      {
        label: "Norme WiFi",
        value: "Wi-Fi 7 (802.11be)"
      },
      {
        label: "Omada Mesh",
        value: "Oui"
      },
      {
        label: "Débit WiFi",
        value: "Jusqu'à 9 335 Mbps"
      },
      {
        label: "Port reseau",
        value: "2,5 Gbps PoE+"
      },
      {
        label: "Technologie",
        value: [
          "Wi-Fi 7",
          "Multi-Link Operation (MLO)",
          "4K-QAM",
          "Omada Mesh",
          "Seamless Roaming"
        ]
      },
      {
        label: "Alimentation",
        value: "PoE+"
      },
      {
        label: "Installation",
        value: "Montage au plafond"
      },
      {
        label: "Flux spatiaux",
        value: "6+"
      },
      {
        label: "Technologie MLO",
        value: "Oui"
      },
      {
        label: "Bandes de fréquence",
        value: [
          "2,4 GHz",
          "5 GHz",
          "6 GHz"
        ]
      }
    ]
  },
  {
    id: 61,
    slug: "tp-link-5-port-gigabit-poe",
    name: "TP-Link 5 ports Gigabit PoE",
    category: "switchs",
    price: 45000,
    inStock: true,
    images: [
      "tp-link-5-port-gigabit-poe.webp"
    ],
    description: "Le TP-Link TL-SG1005P est un switch réseau 5 ports Gigabit, dont 4 ports PoE+ permettent d’alimenter directement des équipements compatibles tels que des caméras IP, points d’accès Wi-Fi et téléphones IP via le câble réseau. Avec un budget PoE de 65 W, il constitue une solution pratique pour les petits réseaux professionnels et domestiques. Il intègre également la récupération automatique PoE, l’optimisation du trafic multicast et une fonction Plug & Play ne nécessitant aucune configuration complexe",
    specs: [
      {
        label: "Type",
        value: "SSD externe portable"
      },
      {
        label: "Gamme",
        value: "Extreme"
      },
      {
        label: "Format",
        value: "Portable et compact"
      },
      {
        label: "Marque",
        value: "SanDisk"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Capacité",
        value: "1 To"
      },
      {
        label: "Performance",
        value: "Haute vitesse"
      },
      {
        label: "Technologie",
        value: "SSD"
      },
      {
        label: "Utilisation",
        value: "Stockage, sauvegarde et transfert de fichiers"
      },
      {
        label: "Compatibilité",
        value: "Ordinateurs et appareils compatibles USB"
      },
      {
        label: "Vitesse de lecture",
        value: "Jusqu'à 1050 Mo/s"
      },
      {
        label: "Vitesse d'écriture",
        value: "Jusqu'à 1000 Mo/s"
      },
      {
        label: "Résistance à l'eau",
        value: "Oui"
      }
    ]
  },
  {
    id: 60,
    slug: "sandisk-portable-ssd-1-to",
    name: "SanDisk Portable SSD 1 To",
    category: "accessoires-informatique",
    price: 95000,
    inStock: true,
    images: [
      "sandisk-portable-ssd-1-to.webp"
    ],
    description: "Le SanDisk Portable SSD 1 To est un SSD externe compact et léger, conçu pour stocker, sauvegarder et transférer facilement vos fichiers. Avec des vitesses de lecture allant jusqu’à 800 Mo/s, il permet un accès rapide aux documents, photos, vidéos et autres fichiers volumineux. Son format portable facilite son transport, tandis que sa technologie SSD offre une solution de stockage fiable pour une utilisation professionnelle ou personnelle.",
    specs: [
      {
        label: "Type",
        value: "SSD externe portable"
      },
      {
        label: "Format",
        value: "Portable et compact"
      },
      {
        label: "Marque",
        value: "SanDisk"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Modèle",
        value: "Portable SSD"
      },
      {
        label: "Avantage",
        value: "Rapide, compact et facile à transporter"
      },
      {
        label: "Capacité",
        value: "1 To"
      },
      {
        label: "Interface",
        value: "Type-C"
      },
      {
        label: "Technologie",
        value: "SSD"
      },
      {
        label: "Utilisation",
        value: "Stockage, sauvegarde et transfert de fichiers"
      },
      {
        label: "Compatibilité",
        value: "PC, Mac et appareils compatibles USB"
      },
      {
        label: "Vitesse de lecture",
        value: "Jusqu'à 800 Mo/s"
      }
    ]
  },
  {
    id: 59,
    slug: "sandisk-extreme-portable-ssd-1to",
    name: "SanDisk Extreme Portable SSD 1 To",
    category: "accessoires-informatique",
    price: 110000,
    inStock: true,
    images: [
      "sandisk-extreme-portable-ssd-1to.webp"
    ],
    description: "Le SanDisk Extreme Portable SSD 1 To est un SSD externe haute performance conçu pour stocker, sauvegarder et transférer rapidement vos fichiers. Avec une vitesse de lecture pouvant atteindre 1 050 Mo/s et une vitesse d’écriture jusqu’à 1 000 Mo/s, il est particulièrement adapté aux fichiers volumineux, aux photos, vidéos et contenus professionnels. Compact et facile à transporter, il est conçu pour vous accompagner partout et offre une résistance à l’eau pour une meilleure protection lors des déplacements.",
    specs: [
      {
        label: "Type",
        value: "SSD externe"
      },
      {
        label: "Format",
        value: "Portable"
      },
      {
        label: "Marque",
        value: "SanDisk"
      },
      {
        label: "Avantage",
        value: "Transferts rapides et stockage portable"
      },
      {
        label: "Capacité",
        value: "1 To"
      },
      {
        label: "Interface",
        value: "Type-C"
      },
      {
        label: "Résistance",
        value: "Conçu pour résister aux chocs et aux vibrations"
      },
      {
        label: "Technologie",
        value: "SSD"
      },
      {
        label: "Utilisation",
        value: "Stockage, sauvegarde et transfert de fichiers"
      },
      {
        label: "Compatibilité",
        value: "PC, Mac et appareils compatibles USB"
      }
    ]
  },
  {
    id: 58,
    slug: "tp-link-cpe220",
    name: "TP-Link CPE220",
    category: "point-d-acces",
    price: 40000,
    inStock: true,
    images: [
      "tp-link-cpe220.webp"
    ],
    description: "Le TP-Link CPE220 est un point d’accès extérieur conçu pour fournir une connexion Wi-Fi stable sur de longues distances. Fonctionnant sur la bande 2,4 GHz avec la technologie Pharos MAXtream, il est particulièrement adapté aux liaisons sans fil point à point, à la connexion de bâtiments distants et à la couverture Wi-Fi extérieure. Son antenne directionnelle haute puissance et son boîtier résistant aux conditions extérieures en font une solution idéale pour les installations professionnelles.",
    specs: [
      {
        label: "Type",
        value: "Point d'accès extérieur"
      },
      {
        label: "Gamme",
        value: "Pharos"
      },
      {
        label: "Marque",
        value: "TP-Link"
      },
      {
        label: "Antenne",
        value: "Antenne directionnelle intégrée 12 dBi"
      },
      {
        label: "Gestion",
        value: "Pharos Control"
      },
      {
        label: "Modèle",
        value: "CPE220"
      },
      {
        label: "Fréquence",
        value: "2,4 GHz"
      },
      {
        label: "Sécurité",
        value: "WPA/WPA2"
      },
      {
        label: "Norme Wi-Fi",
        value: "IEEE 802.11b/g/n"
      },
      {
        label: "Résistance",
        value: "Boîtier conçu pour une utilisation extérieure"
      },
      {
        label: "Technologie",
        value: "Pharos MAXtream TDMA"
      },
      {
        label: "Utilisation",
        value: "Liaison point à point, point à multipoint et couverture Wi-Fi extérieure"
      },
      {
        label: "Alimentation",
        value: "PoE passif"
      },
      {
        label: "Installation",
        value: "Mât ou poteau"
      },
      {
        label: "Port réseau",
        value: "1 × Ethernet 10/100 Mbps"
      },
      {
        label: "Débit sans fil",
        value: "Jusqu'à 300 Mbps"
      },
      {
        label: "Mode de fonctionnement",
        value: "Point d'accès, client, répéteur et pont"
      }
    ]
  },
  {
    id: 57,
    slug: "tp-link-omada-eap773-be9300",
    name: "TP-Link Omada EAP773 BE9300",
    category: "point-d-acces",
    price: 150000,
    inStock: true,
    images: [
      "tp-link-omada-eap773-be9300.webp"
    ],
    description: "Le TP-Link Omada EAP773 BE9300 est un point d’accès Wi-Fi 7 professionnel conçu pour offrir des connexions ultra-rapides, stables et performantes dans les entreprises, bureaux, hôtels, établissements scolaires et environnements à forte densité d’utilisateurs. Grâce à la technologie Wi-Fi 7, il permet de connecter de nombreux appareils simultanément avec une excellente qualité de service. Il prend en charge les bandes 2,4 GHz, 5 GHz et 6 GHz et offre une vitesse Wi-Fi combinée pouvant atteindre 9,3 Gbit/s. Compatible avec la plateforme Omada SDN, il permet une gestion centralisée et simplifiée du réseau.",
    specs: [
      {
        label: "Type",
        value: "Point d'accès Wi-Fi professionnel"
      },
      {
        label: "Marque",
        value: "TP-Link"
      },
      {
        label: "Gestion",
        value: "Omada SDN"
      },
      {
        label: "Modèle",
        value: "Omada EAP773"
      },
      {
        label: "Sécurité",
        value: "WPA3"
      },
      {
        label: "Norme Wi-Fi",
        value: "Wi-Fi 7 (802.11be)"
      },
      {
        label: "Technologie",
        value: "Wi-Fi 7"
      },
      {
        label: "Utilisation",
        value: "Entreprise, bureau, hôtel, école et réseau professionnel"
      },
      {
        label: "Alimentation",
        value: "PoE+"
      },
      {
        label: "Bandes Wi-Fi",
        value: "2,4 GHz / 5 GHz / 6 GHz"
      },
      {
        label: "Classe Wi-Fi",
        value: "BE9300"
      },
      {
        label: "Débit Wi-Fi",
        value: "Jusqu'à 9,3 Gbit/s"
      },
      {
        label: "Installation",
        value: "Plafond ou mur"
      },
      {
        label: "Port réseau",
        value: "1 × Ethernet 10 Gbit/s"
      },
      {
        label: "Gestion centralisée",
        value: "Oui"
      }
    ]
  },
  {
    id: 56,
    slug: "tp-link-ac1750",
    name: "TP-Link AC1750",
    category: "repeteurs-wi-fi",
    price: 50000,
    inStock: true,
    images: [
      "tp-link-ac1750.webp"
    ],
    description: "Répéteur Wi-Fi double bande AC1750 Améliorez et étendez facilement la couverture de votre réseau Wi-Fi avec ce répéteur Wi-Fi double bande AC1750. Offrant une vitesse allant jusqu’à 1300 Mbps, il utilise simultanément les bandes 2,4 GHz et 5 GHz pour fournir une connexion rapide, stable et adaptée à la navigation Internet, au streaming, aux jeux en ligne et aux appareils connectés.",
    specs: [
      {
        label: "Type",
        value: "Répéteur Wi-Fi"
      },
      {
        label: "Fonction",
        value: "Extension de la couverture Wi-Fi"
      },
      {
        label: "Bande 5 GHz",
        value: "Jusqu'à 1300 Mbps"
      },
      {
        label: "Norme Wi-Fi",
        value: "Wi-Fi 5 (802.11ac)"
      },
      {
        label: "Technologie",
        value: "Double bande"
      },
      {
        label: "Utilisation",
        value: "Maison, bureau, magasin et locaux professionnels"
      },
      {
        label: "Installation",
        value: "Configuration simple"
      },
      {
        label: "Bande 2,4 GHz",
        value: "Jusqu'à 450 Mbps"
      },
      {
        label: "Vitesse Wi-Fi",
        value: "Jusqu'à 1300 Mbps"
      },
      {
        label: "Compatibilité",
        value: "Compatible avec la plupart des routeurs et box Wi-Fi"
      },
      {
        label: "Sécurité Wi-Fi",
        value: "WPA/WPA2"
      }
    ]
  },
  {
    id: 55,
    slug: "toner-hp-151a",
    name: "Toner HP 151A",
    category: "consommables",
    price: 65000,
    inStock: true,
    images: [
      "toner-hp-151a.webp"
    ],
    description: "Toner HP 151A noir d’origine, conçu pour offrir des impressions nettes, précises et professionnelles. Idéal pour les documents administratifs, factures, rapports et impressions quotidiennes. Facile à installer et offrant une excellente qualité d’impression, il garantit des résultats fiables pour votre imprimante HP.",
    specs: [
      {
        label: "Type",
        value: "Cartouche de toner"
      },
      {
        label: "Marque",
        value: "HP"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Produit",
        value: "Original HP"
      },
      {
        label: "Rendement",
        value: "Environ 975 pages"
      },
      {
        label: "Référence",
        value: "151A (W1510A)"
      },
      {
        label: "Utilisation",
        value: "Documents, factures, rapports et impressions professionnelles"
      },
      {
        label: "Installation",
        value: "Facile à installer"
      },
      {
        label: "Type de consommable",
        value: "Toner"
      },
      {
        label: "Qualité d'impression",
        value: "Impressions nettes et précises"
      },
      {
        label: "Technologie d'impression",
        value: "Laser"
      }
    ]
  },
  {
    id: 53,
    slug: "souris-logitech-m170",
    name: "Souris Logitech M170",
    category: "accessoires-informatique",
    price: 10000,
    inStock: true,
    images: [
      "souris-logitech-m170.webp"
    ],
    description: "Logitech M170 est une souris sans fil compacte offrant une connexion fiable, un suivi optique précis et une prise en main confortable. Facile à installer grâce à son nano-récepteur USB, elle est idéale pour le travail, les études et une utilisation quotidienne.",
    specs: [
      {
        label: "Type",
        value: "Souris sans fil"
      },
      {
        label: "Poids",
        value: "70,5 g"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Portée",
        value: "Jusqu'à 10 mètres"
      },
      {
        label: "Autonomie",
        value: "Jusqu'à 12 mois"
      },
      {
        label: "Connexion",
        value: "Sans fil 2,4 GHz"
      },
      {
        label: "Dimensions",
        value: "97,7 × 61,5 × 35,2 mm"
      },
      {
        label: "Récepteur",
        value: "Nano récepteur USB"
      },
      {
        label: "Résolution",
        value: "1000 DPI"
      },
      {
        label: "Technologie",
        value: "Optique"
      },
      {
        label: "Alimentation",
        value: "1 pile AA"
      },
      {
        label: "Installation",
        value: "Plug & Play"
      },
      {
        label: "Compatibilité",
        value: "Windows, macOS, Linux, ChromeOS"
      },
      {
        label: "Nombre de boutons",
        value: "3"
      },
      {
        label: "Molette de défilement",
        value: "Oui"
      }
    ]
  },
  {
    id: 52,
    slug: "souris-logitech-m185",
    name: "Souris Logitech M185",
    category: "accessoires-informatique",
    price: 15000,
    inStock: true,
    images: [
      "souris-logitech-m185.webp"
    ],
    description: "Logitech M185 est une souris sans fil compacte et fiable, idéale pour le bureau, les études et une utilisation quotidienne. Grâce à sa connexion 2,4 GHz, son suivi optique précis et sa longue autonomie, elle offre une navigation fluide et un grand confort d'utilisation.",
    specs: [
      {
        label: "Type",
        value: "Souris sans fil"
      },
      {
        label: "Poids",
        value: "75,2 g"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Portée",
        value: "Jusqu'à 10 mètres"
      },
      {
        label: "Autonomie",
        value: "Jusqu'à 12 mois"
      },
      {
        label: "Connexion",
        value: "Sans fil 2,4 GHz"
      },
      {
        label: "Dimensions",
        value: "99 × 60 × 39 mm"
      },
      {
        label: "Récepteur",
        value: "Nano récepteur USB"
      },
      {
        label: "Résolution",
        value: "1000 DPI"
      },
      {
        label: "Technologie",
        value: "Optique"
      },
      {
        label: "Alimentation",
        value: "1 pile AA"
      },
      {
        label: "Installation",
        value: "Plug & Play"
      },
      {
        label: "Compatibilité",
        value: "Windows, macOS, Linux, ChromeOS"
      },
      {
        label: "Nombre de boutons",
        value: "3"
      },
      {
        label: "Molette de défilement",
        value: "Oui"
      }
    ]
  },
  {
    id: 51,
    slug: "webcam-c920-pro-hd",
    name: "Webcam Logitech C920 Pro HD",
    category: "accessoires-informatique",
    price: 70000,
    inStock: true,
    images: [
      "webcam-c920-pro-hd.webp"
    ],
    description: "Logitech C920 Pro HD est une webcam Full HD conçue pour les visioconférences, le télétravail, les cours en ligne et le streaming. Grâce à sa vidéo 1080p, ses deux microphones stéréo intégrés et son autofocus, elle offre une image nette et un son clair pour une communication professionnelle.",
    specs: [
      {
        label: "Type",
        value: "Webcam Full HD"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Fixation",
        value: "Clip universel pour écran ou trépied"
      },
      {
        label: "Objectif",
        value: "Verre Full HD avec autofocus"
      },
      {
        label: "Connexion",
        value: "USB 2.0"
      },
      {
        label: "Microphones",
        value: "2 microphones stéréo intégrés"
      },
      {
        label: "Mise au point",
        value: "Autofocus"
      },
      {
        label: "Compatibilité",
        value: "Windows, macOS, ChromeOS"
      },
      {
        label: "Champ de vision",
        value: "78°"
      },
      {
        label: "Fréquence d'image",
        value: "30 images par seconde"
      },
      {
        label: "Longueur du câble",
        value: "1,5 m"
      },
      {
        label: "Résolution vidéo",
        value: "1920 × 1080 (1080p)"
      },
      {
        label: "Correction d'éclairage",
        value: "RightLight 2"
      },
      {
        label: "Applications compatibles",
        value: "Zoom, Microsoft Teams, Google Meet, Skype"
      }
    ]
  },
  {
    id: 50,
    slug: "tp-link-acher-ax23",
    name: "TP-Link Archer AX23",
    category: "routeurs",
    price: 60000,
    inStock: true,
    images: [
      "tp-link-acher-ax23.webp"
    ],
    description: "TP-Link Archer AX23 est un routeur Wi-Fi 6 conçu pour offrir une connexion rapide, stable et sécurisée. Grâce à sa technologie AX1800, ses quatre antennes haute performance et ses fonctions avancées de sécurité, il est idéal pour les maisons, les bureaux et les petites entreprises nécessitant une couverture Wi-Fi performante.",
    specs: [
      {
        label: "VPN",
        value: "OpenVPN, PPTP, L2TP"
      },
      {
        label: "Type",
        value: "Routeur Wi-Fi 6"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Gestion",
        value: "Application TP-Link Tether"
      },
      {
        label: "Antennes",
        value: "4 antennes externes haute performance"
      },
      {
        label: "Ports LAN",
        value: "4 × Gigabit Ethernet"
      },
      {
        label: "Ports WAN",
        value: "1 × Gigabit Ethernet"
      },
      {
        label: "Norme Wi-Fi",
        value: "IEEE 802.11ax (Wi-Fi 6)"
      },
      {
        label: "Technologie",
        value: "OFDMA, MU-MIMO, Beamforming"
      },
      {
        label: "Débit Wi-Fi",
        value: "AX1800 (Jusqu'à 1801 Mbps)"
      },
      {
        label: "Compatibilité",
        value: "Amazon Alexa"
      },
      {
        label: "Réseau invité",
        value: "Oui"
      },
      {
        label: "Sécurité Wi-Fi",
        value: "WPA3"
      },
      {
        label: "Contrôle parental",
        value: "Oui"
      },
      {
        label: "Bandes de fréquence",
        value: "2,4 GHz et 5 GHz"
      },
      {
        label: "Mode de fonctionnement",
        value: "Routeur, Point d'accès"
      }
    ]
  },
  {
    id: 49,
    slug: "tp-link-omada-24-port-gigabit-poe-plus",
    name: "TP-Link Omada 24 ports Gigabit PoE+",
    category: "switchs",
    price: 220000,
    inStock: true,
    images: [
      "tp-link-omada-24-port-gigabit-poe-plus.webp"
    ],
    description: "TP-LINK OMADA 24-PORT GIGABIT PoE+ est un switch Smart Managed conçu pour les réseaux professionnels nécessitant une alimentation PoE performante et une gestion avancée. Avec ses 24 ports Gigabit PoE+, ses 4 ports SFP dédiés à la fibre optique et son intégration à la plateforme Omada SDN, il constitue une solution idéale pour les caméras IP, points d'accès Wi-Fi, téléphones IP et autres équipements réseau.",
    specs: [
      {
        label: "QoS",
        value: "Oui"
      },
      {
        label: "STP",
        value: "STP, RSTP, MSTP"
      },
      {
        label: "Type",
        value: "Switch Smart Managed PoE+"
      },
      {
        label: "VLAN",
        value: "Oui"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Gestion",
        value: "Omada SDN, Interface Web, CLI, SNMP"
      },
      {
        label: "Montage",
        value: "Rack 19 pouces"
      },
      {
        label: "Boîtier",
        value: "Métallique"
      },
      {
        label: "Norme PoE",
        value: "IEEE 802.3af/at"
      },
      {
        label: "Ports SFP",
        value: "4 ports SFP Gigabit"
      },
      {
        label: "Budget PoE",
        value: "250 W"
      },
      {
        label: "Sécurité",
        value: "ACL, 802.1X, Port Security"
      },
      {
        label: "Alimentation",
        value: "100 à 240 V AC"
      },
      {
        label: "IGMP Snooping",
        value: "Oui"
      },
      {
        label: "Nombre de ports",
        value: "24 ports Gigabit PoE+"
      },
      {
        label: "Agrégation de liens",
        value: "LACP"
      },
      {
        label: "Débit de commutation",
        value: "56 Gbit/s"
      },
      {
        label: "Capacité de transfert",
        value: "41,7 Mpps"
      }
    ]
  },
  {
    id: 48,
    slug: "tp-link-omada-eap723-be3600",
    name: "TP-Link Omada EAP723 BE3600",
    category: "point-d-acces",
    price: 80000,
    inStock: true,
    images: [
      "tp-link-omada-eap723-be3600.webp"
    ],
    description: "TP-Link Omada EAP723 BE3600 Le TP-Link Omada EAP723 BE3600 est un point d’accès professionnel Wi-Fi 7 conçu pour fournir une connexion rapide, stable et performante dans les bureaux, entreprises, hôtels, commerces et autres environnements professionnels. Il prend en charge les bandes 2,4 GHz et 5 GHz et offre des performances adaptées aux réseaux avec plusieurs utilisateurs et appareils connectés. Compatible avec la solution Omada SDN, il permet une gestion centralisée et simplifiée du réseau. Sa conception professionnelle et son alimentation PoE facilitent son installation et son déploiement.",
    specs: [
      {
        label: "Type",
        value: "Point d'accès Wi-Fi professionnel"
      },
      {
        label: "Gamme",
        value: "Omada"
      },
      {
        label: "Marque",
        value: "TP-Link"
      },
      {
        label: "Gestion",
        value: "Omada SDN"
      },
      {
        label: "Modèle",
        value: "EAP723"
      },
      {
        label: "Sécurité",
        value: "WPA3"
      },
      {
        label: "Norme Wi-Fi",
        value: "Wi-Fi 7 (802.11be)"
      },
      {
        label: "Technologie",
        value: "Wi-Fi 7"
      },
      {
        label: "Utilisation",
        value: "Entreprise, bureau, hôtel, commerce et réseau professionnel"
      },
      {
        label: "Alimentation",
        value: "PoE"
      },
      {
        label: "Bandes Wi-Fi",
        value: "2,4 GHz / 5 GHz"
      },
      {
        label: "Classe Wi-Fi",
        value: "BE3600"
      },
      {
        label: "Débit Wi-Fi",
        value: "Jusqu'à 3,6 Gbit/s"
      },
      {
        label: "Installation",
        value: "Plafond ou mur"
      },
      {
        label: "Gestion centralisée",
        value: "Oui"
      }
    ]
  },
  {
    id: 47,
    slug: "yeastar-s20",
    name: "Yeastar S20",
    category: "autocoms",
    price: 195000,
    inStock: true,
    images: [
      "yeastar-s20.webp"
    ],
    description: "Yeastar S20 est un IPBX (standard téléphonique IP) compact conçu pour les petites entreprises. Il permet de centraliser les communications téléphoniques, de gérer les appels VoIP et les lignes traditionnelles, tout en offrant des fonctionnalités avancées comme les files d'attente, les conférences, les messageries vocales et les applications mobiles.",
    specs: [
      {
        label: "Type",
        value: "IPBX professionnel"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Gestion",
        value: "Interface Web"
      },
      {
        label: "Montage",
        value: "Bureau ou mural"
      },
      {
        label: "Ports FXO",
        value: "2"
      },
      {
        label: "Ports FXS",
        value: "2"
      },
      {
        label: "Sécurité",
        value: "TLS, SRTP, Pare-feu intégré"
      },
      {
        label: "Conférence",
        value: "Jusqu'à 3 salles de conférence"
      },
      {
        label: "Alimentation",
        value: "Adaptateur secteur"
      },
      {
        label: "Ports réseau",
        value: "2 × Gigabit Ethernet"
      },
      {
        label: "Accès distant",
        value: "Oui"
      },
      {
        label: "Files d'attente",
        value: "Oui"
      },
      {
        label: "Ports GSM/3G/4G",
        value: "Jusqu'à 1 module optionnel"
      },
      {
        label: "Protocoles VoIP",
        value: "SIP, IAX2"
      },
      {
        label: "Messagerie vocale",
        value: "Oui"
      },
      {
        label: "Appels simultanés",
        value: "10"
      },
      {
        label: "Extensions maximum",
        value: "20"
      },
      {
        label: "Applications mobiles",
        value: "Oui"
      },
      {
        label: "Standard automatique",
        value: "Oui (IVR)"
      },
      {
        label: "Utilisateurs maximum",
        value: "20"
      },
      {
        label: "Enregistrement des appels",
        value: "Oui"
      }
    ]
  },
  {
    id: 46,
    slug: "fanvil-v67",
    name: "Fanvil V67",
    category: "telephonie-ip-analogique",
    price: 265000,
    inStock: true,
    images: [
      "fanvil-v67.webp"
    ],
    description: "Fanvil V67 est un téléphone IP professionnel haut de gamme équipé d'un écran tactile couleur. Conçu pour les dirigeants et les utilisateurs exigeants, il offre une qualité audio HD exceptionnelle, des appels vidéo, le Wi-Fi et le Bluetooth intégrés, ainsi que des performances optimales pour les environnements professionnels modernes.",
    specs: [
      {
        label: "PoE",
        value: "Oui"
      },
      {
        label: "Wi-Fi",
        value: "Double bande 2,4 GHz / 5 GHz intégré"
      },
      {
        label: "Écran",
        value: "Tactile couleur IPS 7 pouces"
      },
      {
        label: "Caméra",
        value: "Intégrée 5 MP avec obturateur de confidentialité"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Montage",
        value: "Bureau"
      },
      {
        label: "Port USB",
        value: "USB 2.0"
      },
      {
        label: "Bluetooth",
        value: "Bluetooth 5.0 intégré"
      },
      {
        label: "Lignes SIP",
        value: "20"
      },
      {
        label: "Sécurité",
        value: "TLS, SRTP, HTTPS"
      },
      {
        label: "Comptes SIP",
        value: "20"
      },
      {
        label: "Port casque",
        value: "RJ9 avec support EHS"
      },
      {
        label: "Répertoire",
        value: "Jusqu'à 2000 contacts"
      },
      {
        label: "Appels vidéo",
        value: "Oui"
      },
      {
        label: "Ports réseau",
        value: "2 × Gigabit Ethernet"
      },
      {
        label: "Qualité audio",
        value: "HD avec réduction intelligente du bruit"
      },
      {
        label: "Conférence audio",
        value: "Jusqu'à 10 participants"
      },
      {
        label: "Résolution de l'écran",
        value: "1024 × 600 pixels"
      }
    ]
  },
  {
    id: 45,
    slug: "fanvil-x6u",
    name: "Fanvil X6U",
    category: "telephonie-ip-analogique",
    price: 140000,
    inStock: true,
    images: [
      "fanvil-x6u.webp"
    ],
    description: "Fanvil X6U est un téléphone IP professionnel haut de gamme conçu pour les entreprises, les cadres et les centres d'appels. Il offre une excellente qualité audio HD, un grand écran couleur, deux écrans latéraux pour les touches DSS et des ports Gigabit avec alimentation PoE, garantissant une communication efficace et une productivité accrue.",
    specs: [
      {
        label: "PoE",
        value: "Oui"
      },
      {
        label: "Wi-Fi",
        value: "Via clé USB optionnelle"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Montage",
        value: "Bureau ou mural"
      },
      {
        label: "Port USB",
        value: "USB 2.0"
      },
      {
        label: "Bluetooth",
        value: "Via clé USB optionnelle"
      },
      {
        label: "Lignes SIP",
        value: "20"
      },
      {
        label: "Sécurité",
        value: "TLS, SRTP, HTTPS"
      },
      {
        label: "Comptes SIP",
        value: "20"
      },
      {
        label: "Conférence",
        value: "Jusqu'à 6 participants"
      },
      {
        label: "Port casque",
        value: "RJ9 avec support EHS"
      },
      {
        label: "Répertoire",
        value: "Jusqu'à 2000 contacts"
      },
      {
        label: "Touches DSS",
        value: "60 touches intelligentes (30 physiques avec 2 pages)"
      },
      {
        label: "Écrans DSS",
        value: "2 écrans couleur de 2,4 pouces"
      },
      {
        label: "Ports réseau",
        value: "2 × Gigabit Ethernet"
      },
      {
        label: "Qualité audio",
        value: "HD avec codec G.722 et réduction du bruit"
      },
      {
        label: "Journal d'appels",
        value: "Jusqu'à 1000 enregistrements"
      },
      {
        label: "Écran principal",
        value: "Couleur 4,3 pouces"
      },
      {
        label: "Résolution de l'écran",
        value: "480 × 272 pixels"
      }
    ]
  },
  {
    id: 44,
    slug: "grandstream-gsc3516",
    name: "Grandstream GSC3516",
    category: "accessoires-informatique",
    price: 140000,
    inStock: true,
    images: [
      "grandstream-gsc3516.webp"
    ],
    description: "Grandstream GSC3516 est un haut-parleur SIP professionnel conçu pour les systèmes de sonorisation, les annonces vocales et les communications en entreprise. Grâce à sa qualité audio HD, son microphone intégré et sa prise en charge du PoE, il est idéal pour les bureaux, écoles, hôpitaux, commerces et autres espaces publics.",
    specs: [
      {
        label: "PoE",
        value: "Oui (IEEE 802.3af)"
      },
      {
        label: "Type",
        value: "Haut-parleur SIP professionnel"
      },
      {
        label: "Couleur",
        value: "Blanc"
      },
      {
        label: "Gestion",
        value: "Interface Web, GDMS"
      },
      {
        label: "Montage",
        value: "Plafond ou mural"
      },
      {
        label: "Multicast",
        value: "Oui"
      },
      {
        label: "Sécurité",
        value: "TLS, SRTP, HTTPS"
      },
      {
        label: "Conférence",
        value: "Communication bidirectionnelle"
      },
      {
        label: "Microphones",
        value: "3 microphones MEMS intégrés"
      },
      {
        label: "Alimentation",
        value: "PoE ou adaptateur secteur"
      },
      {
        label: "Haut-parleur",
        value: "Puissance 15 W HD"
      },
      {
        label: "Ports réseau",
        value: "1 × Gigabit Ethernet"
      },
      {
        label: "Protocoles SIP",
        value: "2 comptes SIP"
      },
      {
        label: "Qualité audio",
        value: "HD avec réduction de l'écho et du bruit"
      }
    ]
  },
  {
    id: 43,
    slug: "grandstream-grp2670",
    name: "Grandstream GRP2670",
    category: "telephonie-ip-analogique",
    price: 140000,
    inStock: true,
    images: [
      "grandstream-grp2670.webp"
    ],
    description: "Grandstream GRP2670 est un téléphone IP haut de gamme conçu pour les entreprises recherchant des performances élevées et une qualité de communication exceptionnelle. Grâce à son écran couleur tactile, au Wi-Fi et au Bluetooth intégrés, ainsi qu'à ses ports Gigabit avec PoE, il offre une solution complète pour les environnements professionnels exigeants.",
    specs: [
      {
        label: "PoE",
        value: "Oui"
      },
      {
        label: "Wi-Fi",
        value: "Double bande 2,4 GHz / 5 GHz intégré"
      },
      {
        label: "Écran",
        value: "Tactile couleur 7 pouces"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Gestion",
        value: "Provisionnement automatique, GDMS"
      },
      {
        label: "Montage",
        value: "Bureau ou mural"
      },
      {
        label: "Port USB",
        value: "USB Type-A"
      },
      {
        label: "Bluetooth",
        value: "Bluetooth 5.0"
      },
      {
        label: "Lignes SIP",
        value: "12"
      },
      {
        label: "Sécurité",
        value: "TLS, SRTP, HTTPS"
      },
      {
        label: "Comptes SIP",
        value: "12"
      },
      {
        label: "Conférence",
        value: "Jusqu'à 7 participants"
      },
      {
        label: "Port casque",
        value: "RJ9 avec support EHS"
      },
      {
        label: "Répertoire",
        value: "Jusqu'à 2000 contacts"
      },
      {
        label: "Ports réseau",
        value: "2 × Gigabit Ethernet"
      },
      {
        label: "Qualité audio",
        value: "HD avec réduction avancée du bruit"
      },
      {
        label: "Journal d'appels",
        value: "Jusqu'à 800 enregistrements"
      },
      {
        label: "Touches programmables",
        value: "48 touches virtuelles (VPK)"
      },
      {
        label: "Résolution de l'écran",
        value: "1024 × 600 pixels"
      }
    ]
  },
  {
    id: 42,
    slug: "grandstream-grp2650",
    name: "Grandstream GRP2650",
    category: "telephonie-ip-analogique",
    price: 125000,
    inStock: true,
    images: [
      "grandstream-grp2650.webp"
    ],
    description: "Grandstream GRP2650 est un téléphone IP professionnel haut de gamme conçu pour les entreprises exigeant une communication rapide, sécurisée et performante. Doté d'un écran couleur, du Wi-Fi et du Bluetooth intégrés, ainsi que de ports Gigabit, il répond parfaitement aux besoins des bureaux modernes, des cadres et des centres d'appels.",
    specs: [
      {
        label: "PoE",
        value: "Oui"
      },
      {
        label: "Wi-Fi",
        value: "Double bande 2,4 GHz / 5 GHz intégré"
      },
      {
        label: "Écran",
        value: "Couleur TFT 5 pouces"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Gestion",
        value: "Provisionnement automatique, GDMS"
      },
      {
        label: "Montage",
        value: "Bureau ou mural"
      },
      {
        label: "Port USB",
        value: "USB Type-A"
      },
      {
        label: "Bluetooth",
        value: "Oui"
      },
      {
        label: "Lignes SIP",
        value: "14"
      },
      {
        label: "Sécurité",
        value: "TLS, SRTP, HTTPS"
      },
      {
        label: "Comptes SIP",
        value: "14"
      },
      {
        label: "Conférence",
        value: "Jusqu'à 5 participants"
      },
      {
        label: "Répertoire",
        value: "Jusqu'à 2000 contacts"
      },
      {
        label: "Ports réseau",
        value: "2 × Gigabit Ethernet"
      },
      {
        label: "Qualité audio",
        value: "HD avec réduction avancée du bruit"
      },
      {
        label: "Journal d'appels",
        value: "Jusqu'à 800 enregistrements"
      },
      {
        label: "Touches programmables",
        value: "56 touches virtuelles (VPK)"
      },
      {
        label: "Résolution de l'écran",
        value: "1280 × 720 pixels"
      }
    ]
  },
  {
    id: 41,
    slug: "grandstream-grp2636",
    name: "Grandstream GRP2636",
    category: "telephonie-ip-analogique",
    price: 105000,
    inStock: true,
    images: [
      "grandstream-grp2636.webp"
    ],
    description: "Grandstream GRP2636 est un téléphone IP professionnel haut de gamme conçu pour les entreprises et les cadres. Il offre une qualité audio HD exceptionnelle, un écran couleur, des ports Gigabit, ainsi que le Wi-Fi et le Bluetooth intégrés pour une communication fluide, sécurisée et performante.",
    specs: [
      {
        label: "PoE",
        value: "Oui"
      },
      {
        label: "Wi-Fi",
        value: "Double bande 2,4 GHz / 5 GHz intégré"
      },
      {
        label: "Écran",
        value: "Couleur TFT 4,3 pouces"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Gestion",
        value: "Provisionnement automatique, GDMS"
      },
      {
        label: "Montage",
        value: "Bureau ou mural"
      },
      {
        label: "Port USB",
        value: "USB Type-C"
      },
      {
        label: "Bluetooth",
        value: "Oui"
      },
      {
        label: "Lignes SIP",
        value: "12"
      },
      {
        label: "Sécurité",
        value: "TLS, SRTP, HTTPS"
      },
      {
        label: "Comptes SIP",
        value: "12"
      },
      {
        label: "Conférence",
        value: "Jusqu'à 5 participants"
      },
      {
        label: "Répertoire",
        value: "Jusqu'à 2000 contacts"
      },
      {
        label: "Ports réseau",
        value: "2 × Gigabit Ethernet"
      },
      {
        label: "Qualité audio",
        value: "HD avec réduction avancée du bruit"
      },
      {
        label: "Journal d'appels",
        value: "Jusqu'à 800 enregistrements"
      },
      {
        label: "Touches programmables",
        value: "48 touches virtuelles (VPK)"
      },
      {
        label: "Résolution de l'écran",
        value: "480 × 272 pixels"
      }
    ]
  },
  {
    id: 40,
    slug: "grandstream-grp2613w",
    name: "Grandstream GRP2613W",
    category: "telephonie-ip-analogique",
    price: 45000,
    inStock: true,
    images: [
      "grandstream-grp2613w.webp"
    ],
    description: "Grandstream GRP2613W est un téléphone IP professionnel conçu pour les entreprises souhaitant bénéficier d'une communication performante et d'une connectivité sans fil. Grâce à son Wi-Fi bi-bande intégré, sa qualité audio HD et ses ports réseau Gigabit, il constitue une solution idéale pour les bureaux modernes et les environnements professionnels.",
    specs: []
  },
  {
    id: 39,
    slug: "grandstream-grp2602g",
    name: "Grandstream GRP2602G",
    category: "telephonie-ip-analogique",
    price: 40000,
    inStock: true,
    images: [
      "grandstream-grp2602g.webp"
    ],
    description: "Grandstream GRP2602G est un téléphone IP professionnel conçu pour les entreprises recherchant une communication fiable et de haute qualité. Équipé de ports réseau Gigabit, d'un écran LCD et d'une qualité audio HD, il offre une expérience de communication fluide tout en facilitant le déploiement et la gestion des postes téléphoniques.",
    specs: [
      {
        label: "PoE",
        value: "Oui"
      },
      {
        label: "Écran",
        value: "LCD graphique 2,21 pouces"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Gestion",
        value: "Provisionnement automatique, GDMS"
      },
      {
        label: "Montage",
        value: "Bureau ou mural"
      },
      {
        label: "Lignes SIP",
        value: "2"
      },
      {
        label: "Sécurité",
        value: "TLS, SRTP, HTTPS"
      },
      {
        label: "Comptes SIP",
        value: "4"
      },
      {
        label: "Conférence",
        value: "Jusqu'à 5 participants"
      },
      {
        label: "Répertoire",
        value: "Jusqu'à 2000 contacts"
      },
      {
        label: "Ports réseau",
        value: "2 × Gigabit Ethernet"
      },
      {
        label: "Qualité audio",
        value: "HD avec réduction du bruit"
      },
      {
        label: "Journal d'appels",
        value: "Jusqu'à 800 enregistrements"
      },
      {
        label: "Résolution de l'écran",
        value: "132 × 48 pixels"
      }
    ]
  },
  {
    id: 38,
    slug: "grandstream-grp2601w",
    name: "Grandstream GRP2601W",
    category: "telephonie-ip-analogique",
    price: 40000,
    inStock: true,
    images: [
      "grandstream-grp2601w.webp"
    ],
    description: "Grandstream GRP2601W est un téléphone IP sans fil conçu pour les petites entreprises, les bureaux et le télétravail. Grâce à sa connectivité Wi-Fi intégrée, sa qualité audio HD et sa configuration simplifiée, il offre une solution de communication fiable, pratique et économique.",
    specs: [
      {
        label: "PoE",
        value: "Non"
      },
      {
        label: "Wi-Fi",
        value: "Double bande 2,4 GHz / 5 GHz intégré"
      },
      {
        label: "Écran",
        value: "LCD graphique 2,41 pouces"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Gestion",
        value: "Provisionnement automatique, GDMS"
      },
      {
        label: "Montage",
        value: "Bureau ou mural"
      },
      {
        label: "Lignes SIP",
        value: "2"
      },
      {
        label: "Sécurité",
        value: "TLS, SRTP, HTTPS"
      },
      {
        label: "Comptes SIP",
        value: "2"
      },
      {
        label: "Conférence",
        value: "Jusqu'à 5 participants"
      },
      {
        label: "Répertoire",
        value: "Jusqu'à 2000 contacts"
      },
      {
        label: "Ports réseau",
        value: "1 × Fast Ethernet (10/100 Mbps)"
      },
      {
        label: "Qualité audio",
        value: "HD avec réduction du bruit"
      },
      {
        label: "Journal d'appels",
        value: "Jusqu'à 800 enregistrements"
      },
      {
        label: "Résolution de l'écran",
        value: "132 × 48 pixels"
      }
    ]
  },
  {
    id: 37,
    slug: "grandstream-gxp2140",
    name: "Grandstream GXP2140",
    category: "telephonie-ip-analogique",
    price: 90000,
    inStock: true,
    images: [
      "grandstream-gxp2140.webp"
    ],
    description: "Grandstream GXP2140 est un téléphone IP professionnel conçu pour les entreprises recherchant une communication performante et fiable. Doté d'un écran couleur, de ports Gigabit et de la technologie Bluetooth intégrée, il facilite la gestion des appels et améliore la productivité dans les environnements professionnels.",
    specs: [
      {
        label: "PoE",
        value: "Oui"
      },
      {
        label: "USB",
        value: "1 × USB 2.0"
      },
      {
        label: "Écran",
        value: "Couleur TFT 4,3 pouces"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Montage",
        value: "Bureau ou mural"
      },
      {
        label: "Bluetooth",
        value: "Oui"
      },
      {
        label: "Lignes SIP",
        value: "4"
      },
      {
        label: "Sécurité",
        value: "TLS, SRTP, HTTPS"
      },
      {
        label: "Comptes SIP",
        value: "4"
      },
      {
        label: "Conférence",
        value: "Jusqu'à 5 participants"
      },
      {
        label: "Répertoire",
        value: "Jusqu'à 2000 contacts"
      },
      {
        label: "Touches BLF",
        value: "Jusqu'à 40 via module d'extension"
      },
      {
        label: "Ports réseau",
        value: "2 × Gigabit Ethernet"
      },
      {
        label: "Qualité audio",
        value: "HD avec réduction de l'écho"
      },
      {
        label: "Journal d'appels",
        value: "Jusqu'à 500 enregistrements"
      },
      {
        label: "Touches programmables",
        value: "4 touches XML programmables"
      },
      {
        label: "Résolution de l'écran",
        value: "480 × 272 pixels"
      }
    ]
  },
  {
    id: 36,
    slug: "grandstream-gxp2160",
    name: "Grandstream GXP2160",
    category: "telephonie-ip-analogique",
    price: 110000,
    inStock: true,
    images: [
      "grandstream-gxp2160.webp"
    ],
    description: "Grandstream GXP2160 est un téléphone IP professionnel haut de gamme conçu pour les entreprises et les centres d'appels. Il offre une qualité audio HD exceptionnelle, une gestion avancée des appels et une connectivité Gigabit avec Bluetooth intégré pour améliorer la productivité au quotidien.",
    specs: [
      {
        label: "PoE",
        value: "Oui"
      },
      {
        label: "USB",
        value: "1 × USB 2.0"
      },
      {
        label: "Écran",
        value: "Couleur TFT 4,3 pouces"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Montage",
        value: "Bureau ou mural"
      },
      {
        label: "Bluetooth",
        value: "Oui"
      },
      {
        label: "Lignes SIP",
        value: "6"
      },
      {
        label: "Sécurité",
        value: "TLS, SRTP, HTTPS"
      },
      {
        label: "Comptes SIP",
        value: "6"
      },
      {
        label: "Conférence",
        value: "Jusqu'à 5 participants"
      },
      {
        label: "Répertoire",
        value: "Jusqu'à 2000 contacts"
      },
      {
        label: "Touches BLF",
        value: "24 touches programmables"
      },
      {
        label: "Ports réseau",
        value: "2 × Gigabit Ethernet"
      },
      {
        label: "Qualité audio",
        value: "HD avec suppression de l'écho"
      },
      {
        label: "Journal d'appels",
        value: "Jusqu'à 2000 contacts"
      },
      {
        label: "Résolution de l'écran",
        value: "480 × 272 pixels"
      }
    ]
  },
  {
    id: 35,
    slug: "epson-ecotank-l3251",
    name: "Epson EcoTank L3251",
    category: "imprimantes",
    price: 130000,
    inStock: true,
    images: [
      "epson-ecotank-l3251.webp"
    ],
    description: "Epson EcoTank L3251 est une imprimante multifonction à réservoirs d'encre conçue pour les particuliers, les étudiants et les petites entreprises. Elle offre une impression économique, une excellente qualité d'image et une connectivité sans fil, idéale pour imprimer, copier et numériser facilement au quotidien.",
    specs: [
      {
        label: "Écran",
        value: "Voyants LED"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Scanner",
        value: "Scanner à plat CIS"
      },
      {
        label: "Garantie",
        value: "3 mois"
      },
      {
        label: "Fonctions",
        value: "Impression, Copie, Numérisation"
      },
      {
        label: "Recto verso",
        value: "Manuel"
      },
      {
        label: "Technologie",
        value: "Jet d'encre EcoTank"
      },
      {
        label: "Connectivité",
        value: "Wi-Fi, Wi-Fi Direct, USB 2.0"
      },
      {
        label: "Compatibilité",
        value: "Windows, macOS"
      },
      {
        label: "Formats papier",
        value: "A4, A5, A6, B5, Letter, Legal, Enveloppes"
      },
      {
        label: "Capacité papier",
        value: "100 feuilles"
      },
      {
        label: "Impression mobile",
        value: "Epson Smart Panel, Epson iPrint, Apple AirPrint, Mopria"
      },
      {
        label: "Rendement d'encre",
        value: "Jusqu'à 4500 pages noir / 7500 pages couleur"
      },
      {
        label: "Type d'impression",
        value: "Couleur"
      },
      {
        label: "Vitesse d'impression",
        value: "10 ipm (noir) / 5 ipm (couleur)"
      },
      {
        label: "Résolution du scanner",
        value: "1200 × 2400 dpi"
      },
      {
        label: "Résolution d'impression",
        value: "5760 × 1440 dpi"
      }
    ]
  },
  {
    id: 34,
    slug: "canon-mixify-gx1040",
    name: "Canon MAXIFY GX1040",
    category: "imprimantes",
    price: 170000,
    inStock: true,
    images: [
      "canon-mixify-gx1040.webp"
    ],
    description: "Canon MAXIFY GX1040 est une imprimante multifonction à réservoirs d'encre conçue pour les petites entreprises et les professionnels. Elle offre des impressions rapides, une excellente qualité d'impression et un coût par page réduit, tout en prenant en charge l'impression recto verso automatique et la connectivité sans fil.",
    specs: [
      {
        label: "Écran",
        value: "LCD couleur 2,7 pouces"
      },
      {
        label: "Couleur",
        value: "Blanc"
      },
      {
        label: "Scanner",
        value: "Scanner à plat CIS"
      },
      {
        label: "Garantie",
        value: "3 mois"
      },
      {
        label: "Fonctions",
        value: "Impression, Copie, Numérisation"
      },
      {
        label: "Recto verso",
        value: "Automatique"
      },
      {
        label: "Technologie",
        value: "Jet d'encre MegaTank"
      },
      {
        label: "Connectivité",
        value: "Wi-Fi, Wi-Fi Direct, Ethernet, USB 2.0"
      },
      {
        label: "Compatibilité",
        value: "Windows, macOS, ChromeOS"
      },
      {
        label: "Formats papier",
        value: "A4, A5, B5, Letter, Legal, Enveloppes"
      },
      {
        label: "Capacité papier",
        value: "250 feuilles"
      },
      {
        label: "Impression mobile",
        value: "Canon PRINT, Apple AirPrint, Mopria"
      },
      {
        label: "Rendement d'encre",
        value: "Jusqu'à 6000 pages noir / 14000 pages couleur (mode économique)"
      },
      {
        label: "Type d'impression",
        value: "Couleur"
      },
      {
        label: "Vitesse d'impression",
        value: "15 ipm (noir) / 10 ipm (couleur)"
      },
      {
        label: "Résolution du scanner",
        value: "1200 × 2400 dpi"
      },
      {
        label: "Résolution d'impression",
        value: "600 × 1200 dpi"
      }
    ]
  },
  {
    id: null,
    slug: "epson-ecotank-l18050",
    name: "Epson EcoTank L18050",
    category: "imprimantes",
    price: 450000,
    inStock: true,
    images: [
      "epson-ecotank-l18050.webp"
    ],
    description: "Epson EcoTank L18050 est une imprimante photo A3+ à réservoirs d'encre conçue pour produire des impressions de qualité professionnelle. Grâce à son système à 6 couleurs, elle offre des photos éclatantes, des détails précis et un coût d'impression réduit, idéale pour les photographes, studios et entreprises.",
    specs: [
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Garantie",
        value: "3 mois"
      },
      {
        label: "Fonctions",
        value: "Impression"
      },
      {
        label: "Recto verso",
        value: "Manuel"
      },
      {
        label: "Technologie",
        value: "Jet d'encre EcoTank"
      },
      {
        label: "Connectivité",
        value: "Wi-Fi, Wi-Fi Direct, USB 2.0"
      },
      {
        label: "Format maximal",
        value: "A3+"
      },
      {
        label: "Formats papier",
        value: "A3+, A3, A4, A5, A6, B5, Letter, Legal, Enveloppes, Papier photo"
      },
      {
        label: "Capacité papier",
        value: "100 feuilles"
      },
      {
        label: "Système d'encre",
        value: "Réservoirs EcoTank 6 couleurs"
      },
      {
        label: "Impression mobile",
        value: "Epson Smart Panel, Epson iPrint"
      },
      {
        label: "Rendement d'encre",
        value: "Jusqu'à 2100 photos (10 × 15 cm)"
      },
      {
        label: "Type d'impression",
        value: "Couleur (6 couleurs)"
      },
      {
        label: "Types de supports",
        value: "Papier ordinaire, Papier photo brillant, Papier mat, CD/DVD imprimables"
      },
      {
        label: "Vitesse d'impression",
        value: "Jusqu'à 22 ppm (noir/couleur)"
      },
      {
        label: "Résolution d'impression",
        value: "5760 × 1440 dpi"
      }
    ]
  },
  {
    id: 32,
    slug: "epson-ecotank-l14150",
    name: "Epson EcoTank L14150",
    category: "imprimantes",
    price: 450000,
    inStock: true,
    images: [
      "epson-ecotank-l14150.webp"
    ],
    description: "Epson EcoTank L14150 est une imprimante multifonction professionnelle A3+ à réservoirs d'encre, conçue pour les entreprises et les bureaux exigeant des impressions de haute qualité à faible coût. Grâce à ses fonctions d'impression, de copie, de numérisation et de fax, ainsi qu'à sa connectivité complète, elle répond parfaitement aux besoins des environnements de travail modernes.",
    specs: [
      {
        label: "Écran",
        value: "LCD couleur 2,7 pouces"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Scanner",
        value: "Scanner couleur à plat avec ADF"
      },
      {
        label: "Garantie",
        value: "3 mois"
      },
      {
        label: "Fonctions",
        value: "Impression, Copie, Numérisation, Fax"
      },
      {
        label: "Recto verso",
        value: "Automatique (A4)"
      },
      {
        label: "Technologie",
        value: "Jet d'encre EcoTank"
      },
      {
        label: "Connectivité",
        value: "Wi-Fi, Wi-Fi Direct, Ethernet, USB 2.0"
      },
      {
        label: "Format maximal",
        value: "A3+"
      },
      {
        label: "Formats papier",
        value: "A3+, A3, A4, A5, A6, B5, Letter, Legal, Enveloppes"
      },
      {
        label: "Capacité papier",
        value: "250 feuilles"
      },
      {
        label: "Impression mobile",
        value: "Epson Smart Panel, Apple AirPrint, Mopria"
      },
      {
        label: "Rendement d'encre",
        value: "Jusqu'à 7500 pages noir / 6000 pages couleur"
      },
      {
        label: "Type d'impression",
        value: "Couleur"
      },
      {
        label: "Chargeur automatique",
        value: "ADF 35 feuilles"
      },
      {
        label: "Vitesse d'impression",
        value: "17 ipm (noir) / 9 ipm (couleur)"
      },
      {
        label: "Résolution du scanner",
        value: "1200 × 2400 dpi"
      },
      {
        label: "Résolution d'impression",
        value: "4800 × 1200 dpi"
      }
    ]
  },
  {
    id: 31,
    slug: "canon-pixma-g2410",
    name: "Canon Pixma G2410",
    category: "imprimantes",
    price: 110000,
    inStock: true,
    images: [
      "canon-pixma-g2410.webp"
    ],
    description: "Canon PIXMA G2410 est une imprimante multifonction à réservoirs d'encre conçue pour offrir une impression économique et de haute qualité. Idéale pour les particuliers, les bureaux et les petites entreprises, elle permet d'imprimer, copier et numériser facilement tout en réduisant les coûts d'impression.",
    specs: [
      {
        label: "Écran",
        value: "LCD monochrome 1,2 pouces"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Scanner",
        value: "Scanner à plat CIS"
      },
      {
        label: "Fonctions",
        value: "Impression, Copie, Numérisation"
      },
      {
        label: "Recto verso",
        value: "Manuel"
      },
      {
        label: "Technologie",
        value: "Jet d'encre MegaTank"
      },
      {
        label: "Connectivité",
        value: "USB 2.0"
      },
      {
        label: "Compatibilité",
        value: "Windows, macOS"
      },
      {
        label: "Formats papier",
        value: "A4, A5, B5, Letter, Legal, Enveloppes"
      },
      {
        label: "Capacité papier",
        value: "100 feuilles"
      },
      {
        label: "Rendement d'encre",
        value: "Jusqu'à 6000 pages noir / 7000 pages couleur"
      },
      {
        label: "Type d'impression",
        value: "Couleur"
      },
      {
        label: "Vitesse d'impression",
        value: "8,8 ipm (noir) / 5 ipm (couleur)"
      },
      {
        label: "Résolution du scanner",
        value: "600 × 1200 dpi"
      },
      {
        label: "Résolution d'impression",
        value: "4800 × 1200 dpi"
      }
    ]
  },
  {
    id: 30,
    slug: "hp-laserjet-pro-mfp-4103dw",
    name: "HP LaserJet Pro MFP 4103dw",
    category: "imprimantes",
    price: 280000,
    inStock: true,
    images: [
      "hp-laserjet-pro-mfp-4103dw.webp"
    ],
    description: "HP LaserJet Pro MFP 4103dw est une imprimante laser monochrome multifonction conçue pour les entreprises et les groupes de travail exigeant rapidité, sécurité et fiabilité. Elle permet d'imprimer, copier et numériser efficacement grâce à son impression recto verso automatique, sa connectivité réseau et ses performances élevées.",
    specs: [
      {
        label: "Écran",
        value: "LCD 2 lignes avec clavier"
      },
      {
        label: "Couleur",
        value: "Blanc"
      },
      {
        label: "Scanner",
        value: "Scanner couleur à plat avec ADF"
      },
      {
        label: "Mémoire",
        value: "512 Mo"
      },
      {
        label: "Fonctions",
        value: "Impression, Copie, Numérisation"
      },
      {
        label: "Processeur",
        value: "1200 MHz"
      },
      {
        label: "Recto verso",
        value: "Automatique"
      },
      {
        label: "Technologie",
        value: "Laser monochrome"
      },
      {
        label: "Connectivité",
        value: "Wi-Fi double bande, Wi-Fi Direct, Ethernet Gigabit, USB 2.0"
      },
      {
        label: "Cycle mensuel",
        value: "Jusqu'à 80 000 pages"
      },
      {
        label: "Formats papier",
        value: "A4, A5, A6, B5, Letter, Legal, Enveloppes"
      },
      {
        label: "Capacité papier",
        value: "350 feuilles (100 + 250)"
      },
      {
        label: "Impression mobile",
        value: "HP Smart, Apple AirPrint, Mopria"
      },
      {
        label: "Type d'impression",
        value: "Noir et blanc"
      },
      {
        label: "Chargeur automatique",
        value: "ADF 50 feuilles"
      },
      {
        label: "Vitesse d'impression",
        value: "Jusqu'à 40 ppm"
      },
      {
        label: "Résolution du scanner",
        value: "Jusqu'à 1200 dpi"
      },
      {
        label: "Résolution d'impression",
        value: "Jusqu'à 1200 × 1200 dpi"
      }
    ]
  },
  {
    id: 29,
    slug: "hp-color-laserjet-mfp-3303fdw",
    name: "HP Color LaserJet MFP 3303fdw",
    category: "imprimantes",
    price: 370000,
    inStock: true,
    images: [
      "hp-color-laserjet-mfp-3303fdw.webp"
    ],
    description: "HP Color LaserJet Pro MFP 3303fdw est une imprimante laser couleur multifonction conçue pour les entreprises et les bureaux à la recherche d'une impression rapide, de haute qualité et d'une productivité optimale. Elle offre les fonctions d'impression, de copie, de numérisation et de fax, avec une connectivité complète et l'impression recto verso automatique",
    specs: [
      {
        label: "Écran",
        value: "Écran tactile couleur 4,3 pouces"
      },
      {
        label: "Couleur",
        value: "Blanc"
      },
      {
        label: "Scanner",
        value: "Scanner couleur à plat avec ADF"
      },
      {
        label: "Mémoire",
        value: "512 Mo"
      },
      {
        label: "Fonctions",
        value: "Impression, Copie, Numérisation, Fax"
      },
      {
        label: "Processeur",
        value: "1200 MHz"
      },
      {
        label: "Recto verso",
        value: "Automatique"
      },
      {
        label: "Technologie",
        value: "Laser couleur"
      },
      {
        label: "Connectivité",
        value: "Wi-Fi, Wi-Fi Direct, Ethernet Gigabit, USB 2.0"
      },
      {
        label: "Formats papier",
        value: "A4, A5, A6, B5, Letter, Legal, Enveloppes"
      },
      {
        label: "Capacité papier",
        value: "250 feuilles"
      },
      {
        label: "Impression mobile",
        value: "HP Smart, Apple AirPrint, Mopria"
      },
      {
        label: "Type d'impression",
        value: "Couleur"
      },
      {
        label: "Chargeur automatique",
        value: "ADF 50 feuilles"
      },
      {
        label: "Vitesse d'impression",
        value: "Jusqu'à 25 ppm"
      },
      {
        label: "Résolution du scanner",
        value: "Jusqu'à 1200 dpi"
      },
      {
        label: "Résolution d'impression",
        value: "600 × 600 dpi"
      }
    ]
  },
  {
    id: 28,
    slug: "tp-link-amoda-eap110",
    name: "TP-Link Omada EAP110",
    category: "point-d-acces",
    price: 35000,
    inStock: true,
    images: [
      "tp-link-amoda-eap110.webp"
    ],
    description: "TP-Link Omada EAP110-Outdoor est un point d'accès Wi-Fi extérieur conçu pour fournir une connexion sans fil fiable et performante dans les espaces extérieurs. Résistant aux intempéries et alimenté par PoE passif, il est idéal pour les hôtels, écoles, entreprises, entrepôts et zones publiques.",
    specs: [
      {
        label: "Type",
        value: "Point d'accès Wi-Fi extérieur"
      },
      {
        label: "Couleur",
        value: "Blanc"
      },
      {
        label: "Gestion",
        value: "Plateforme Omada SDN"
      },
      {
        label: "Montage",
        value: "Mural ou sur mât"
      },
      {
        label: "Antennes",
        value: "2 × Antennes omnidirectionnelles 3 dBi"
      },
      {
        label: "Dimensions",
        value: "216 × 46 × 27 mm"
      },
      {
        label: "Sécurité",
        value: "WPA/WPA2-Enterprise, WPA/WPA2-Personal"
      },
      {
        label: "Norme Wi-Fi",
        value: "IEEE 802.11b/g/n"
      },
      {
        label: "Alimentation",
        value: "PoE passif 24 V"
      },
      {
        label: "Débit Wi-Fi",
        value: "Jusqu'à 300 Mbps"
      },
      {
        label: "Port Ethernet",
        value: "1 × Fast Ethernet (10/100 Mbps)"
      },
      {
        label: "Bande de fréquence",
        value: "2,4 GHz"
      },
      {
        label: "Indice de protection",
        value: "IP65"
      },
      {
        label: "Mode de fonctionnement",
        value: "Point d'accès"
      },
      {
        label: "Utilisateurs recommandés",
        value: "Jusqu'à 100"
      }
    ]
  },
  {
    id: 27,
    slug: "tp-link-omada-oc220",
    name: "TP-Link Omada OC220",
    category: "controleur-wifi",
    price: 85000,
    inStock: true,
    images: [
      "tp-link-omada-oc220.webp"
    ],
    description: "TP-Link Omada OC220 est un contrôleur matériel dédié permettant de gérer de manière centralisée les points d'accès, switches et routeurs Omada. Il offre une administration simplifiée, un accès à distance sécurisé et une surveillance en temps réel, ce qui en fait une solution idéale pour les entreprises, hôtels, écoles et réseaux professionnels.",
    specs: [
      {
        label: "Type",
        value: "Contrôleur matériel Omada"
      },
      {
        label: "Couleur",
        value: "Blanc"
      },
      {
        label: "Gestion",
        value: "Centralisée des équipements Omada"
      },
      {
        label: "Montage",
        value: "Bureau ou mural"
      },
      {
        label: "Stockage",
        value: "Carte MicroSD pour sauvegardes automatiques"
      },
      {
        label: "Fonctions",
        value: "Surveillance, Configuration, Gestion multi-sites"
      },
      {
        label: "Dimensions",
        value: "100 × 98 × 25 mm"
      },
      {
        label: "Protocoles",
        value: "DHCP, VLAN, HTTPS, SNMP"
      },
      {
        label: "Alimentation",
        value: "PoE (802.3af/at) ou adaptateur secteur USB-C 5 V"
      },
      {
        label: "Ports Ethernet",
        value: "2 × Gigabit RJ45"
      },
      {
        label: "Accès à distance",
        value: "Cloud Omada"
      },
      {
        label: "Interface de gestion",
        value: "Web, Application Omada"
      },
      {
        label: "Équipements compatibles",
        value: "Points d'accès, Switches et Routeurs Omada"
      }
    ]
  },
  {
    id: 26,
    slug: "mikrotik-rb951ui",
    name: "MikroTik RB951Ui",
    category: "point-d-acces",
    price: 45000,
    inStock: true,
    images: [
      "mikrotik-rb951ui.webp"
    ],
    description: "MikroTik RB951Ui-2HnD est un routeur Wi-Fi puissant conçu pour les petites entreprises, les bureaux et les particuliers. Il offre une connexion stable, des fonctionnalités réseau avancées et une gestion complète grâce à RouterOS. Avec son point d'accès Wi-Fi intégré et son port PoE, il constitue une solution idéale pour les réseaux professionnels.",
    specs: [
      {
        label: "PoE",
        value: "PoE-Out sur le port 5"
      },
      {
        label: "Type",
        value: "Routeur Wi-Fi"
      },
      {
        label: "Wi-Fi",
        value: "2,4 GHz IEEE 802.11b/g/n"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Antennes",
        value: "2 antennes intégrées 2,5 dBi"
      },
      {
        label: "Stockage",
        value: "128 Mo NAND"
      },
      {
        label: "Ports USB",
        value: "1 × USB 2.0"
      },
      {
        label: "Dimensions",
        value: "113 × 138 × 29 mm"
      },
      {
        label: "Processeur",
        value: "Atheros AR9344 600 MHz"
      },
      {
        label: "Alimentation",
        value: "8 à 30 V DC"
      },
      {
        label: "Consommation",
        value: "Jusqu'à 7 W"
      },
      {
        label: "Débit Wi-Fi",
        value: "Jusqu'à 300 Mbps"
      },
      {
        label: "Mémoire RAM",
        value: "128 Mo"
      },
      {
        label: "Ports Ethernet",
        value: "5 × Fast Ethernet (10/100 Mbps)"
      },
      {
        label: "Puissance Wi-Fi",
        value: "1000 mW"
      },
      {
        label: "Système d'exploitation",
        value: "MikroTik RouterOS (Licence Level 4)"
      }
    ]
  },
  {
    id: 25,
    slug: "epson-ecotank-l15150",
    name: "Epson EcoTank L15150",
    category: "imprimantes",
    price: 650000,
    inStock: true,
    images: [
      "epson-ecotank-l15150.webp"
    ],
    description: "Epson EcoTank L15150 est une imprimante multifonction professionnelle A3+ conçue pour les entreprises exigeant rapidité, qualité et faible coût d'impression. Grâce à ses réservoirs d'encre haute capacité, son impression recto verso automatique et sa connectivité réseau, elle est idéale pour les bureaux, les administrations et les PME.",
    specs: [
      {
        label: "Fax",
        value: "Oui"
      },
      {
        label: "Écran",
        value: "LCD couleur tactile 2,7 pouces"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Scanner",
        value: "Scanner couleur à plat avec ADF"
      },
      {
        label: "Garantie",
        value: "1 an"
      },
      {
        label: "Fonctions",
        value: "Impression, Copie, Numérisation, Fax"
      },
      {
        label: "Recto verso",
        value: "Automatique"
      },
      {
        label: "Technologie",
        value: "Jet d'encre EcoTank"
      },
      {
        label: "Connectivité",
        value: "Wi-Fi, Wi-Fi Direct, Ethernet, USB 2.0"
      },
      {
        label: "Format maximal",
        value: "A3+"
      },
      {
        label: "Formats papier",
        value: "A3+, A3, A4, A5, A6, B5, Letter, Legal, Enveloppes"
      },
      {
        label: "Capacité papier",
        value: "250 feuilles"
      },
      {
        label: "Impression mobile",
        value: "Epson Smart Panel, Apple AirPrint, Mopria"
      },
      {
        label: "Rendement d'encre",
        value: "Jusqu'à 7500 pages noir / 6000 pages couleur"
      },
      {
        label: "Type d'impression",
        value: "Couleur"
      },
      {
        label: "Chargeur automatique",
        value: "ADF 50 feuilles"
      },
      {
        label: "Vitesse d'impression",
        value: "25 ipm (noir) / 12 ipm (couleur)"
      },
      {
        label: "Résolution d'impression",
        value: "4800 × 2400 dpi"
      }
    ]
  },
  {
    id: 24,
    slug: "dell-poweredge-t150",
    name: "Dell PowerEdge T150",
    category: "serveurs",
    price: 750000,
    inStock: true,
    images: [
      "dell-poweredge-t150.webp"
    ],
    description: "Dell PowerEdge T150 est un serveur tour fiable et évolutif, conçu pour répondre aux besoins des petites et moyennes entreprises. Équipé d'un processeur Intel Xeon E-2324G, de 16 Go de mémoire ECC et d'un disque dur de 2 To, il offre des performances stables pour le partage de fichiers, les applications métier, la virtualisation légère et la gestion des données.",
    specs: [
      {
        label: "Ports",
        value: "USB 3.2, USB 2.0, VGA, RJ-45"
      },
      {
        label: "Format",
        value: "Tour (Tower)"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Gestion",
        value: "Dell iDRAC9 Basic"
      },
      {
        label: "Stockage",
        value: "2 To HDD SATA"
      },
      {
        label: "Fréquence",
        value: "3,1 GHz (jusqu'à 4,6 GHz Turbo)"
      },
      {
        label: "Processeur",
        value: "Intel Xeon E-2324G (4 cœurs, 4 threads)"
      },
      {
        label: "Alimentation",
        value: "300 W"
      },
      {
        label: "Mémoire RAM",
        value: "16 Go DDR4 ECC"
      },
      {
        label: "Carte réseau",
        value: "2 × Gigabit Ethernet"
      },
      {
        label: "Carte graphique",
        value: "Intel UHD Graphics P750"
      },
      {
        label: "Nombre de baies",
        value: "Jusqu'à 4 baies 3,5 pouces"
      },
      {
        label: "Contrôleur RAID",
        value: "PERC S150"
      },
      {
        label: "Système d'exploitation",
        value: "Compatible Windows Server, Ubuntu Server, Red Hat Enterprise Linux et VMware ESXi"
      }
    ]
  },
  {
    id: 23,
    slug: "clavier-hp-cs10-french",
    name: "Clavier HP CS10 (français)",
    category: "accessoires-informatique",
    price: 20000,
    inStock: true,
    images: [
      "clavier-hp-cs10-french.webp"
    ],
    description: "HP CS10 French Wireless est un clavier sans fil conçu pour offrir une frappe fluide, silencieuse et confortable. Grâce à sa connexion sans fil 2,4 GHz, son format complet avec pavé numérique et son design élégant, il est idéal pour le bureau, le télétravail et un usage quotidien.",
    specs: [
      {
        label: "Type",
        value: "Clavier sans fil"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Connexion",
        value: "Sans fil 2,4 GHz"
      },
      {
        label: "Récepteur",
        value: "Nano récepteur USB"
      },
      {
        label: "Disposition",
        value: "AZERTY Français"
      },
      {
        label: "Alimentation",
        value: "Piles AAA"
      },
      {
        label: "Installation",
        value: "Plug & Play"
      },
      {
        label: "Compatibilité",
        value: "Windows, macOS, Linux"
      },
      {
        label: "Type de touches",
        value: "Membrane"
      },
      {
        label: "Pavé numérique",
        value: "Oui"
      },
      {
        label: "Portée sans fil",
        value: "Jusqu'à 10 mètres"
      },
      {
        label: "Touches multimédias",
        value: "Oui"
      }
    ]
  },
  {
    id: 22,
    slug: "dlink-24-port-poe-gigabit-smart-managed",
    name: "D-Link 24 ports PoE Gigabit Smart Managed",
    category: "switchs",
    price: 230000,
    inStock: true,
    images: [
      "dlink-24-port-poe-gigabit-smart-managed.webp"
    ],
    description: "D-Link 24-Port PoE Gigabit Smart Managed est un switch réseau professionnel conçu pour les entreprises souhaitant déployer facilement des caméras IP, téléphones VoIP et points d'accès Wi-Fi. Grâce à ses ports Gigabit avec alimentation PoE et à ses fonctions de gestion avancées, il garantit des performances fiables, une administration simplifiée et une excellente évolutivité du réseau.",
    specs: [
      {
        label: "ACL",
        value: "Oui"
      },
      {
        label: "QoS",
        value: "Oui"
      },
      {
        label: "VLAN",
        value: "Oui"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Gestion",
        value: "Interface Web, SNMP, RMON"
      },
      {
        label: "Montage",
        value: "Rack 19 pouces"
      },
      {
        label: "Routage",
        value: "Layer 2+ (Routage statique)"
      },
      {
        label: "Ports SFP",
        value: "4 ports combo SFP/RJ45"
      },
      {
        label: "Table MAC",
        value: "8K adresses"
      },
      {
        label: "Budget PoE",
        value: "193 W"
      },
      {
        label: "Dimensions",
        value: "440 × 140 × 44 mm"
      },
      {
        label: "Normes PoE",
        value: "IEEE 802.3af / IEEE 802.3at"
      },
      {
        label: "Spanning Tree",
        value: "STP, RSTP, MSTP"
      },
      {
        label: "Nombre de ports",
        value: "24 ports Gigabit Ethernet PoE+"
      },
      {
        label: "Débit de transfert",
        value: "41,7 Mpps"
      },
      {
        label: "Agrégation de liens",
        value: "LACP (802.3ad)"
      },
      {
        label: "Capacité de commutation",
        value: "56 Gbps"
      }
    ]
  },
  {
    id: 21,
    slug: "lenovo-l24e-40",
    name: "Lenovo L24e-40",
    category: "ecrans",
    price: 95000,
    inStock: true,
    images: [
      "lenovo-l24e-40.webp"
    ],
    description: "Lenovo L24e-40 est un écran Full HD de 23,8 pouces conçu pour offrir une excellente qualité d'image et un confort visuel optimal. Son design moderne à bords fins, son taux de rafraîchissement de 100 Hz et ses technologies de protection des yeux en font un choix idéal pour le travail, les études et le divertissement.",
    specs: [
      {
        label: "Poids",
        value: "3,8 kg"
      },
      {
        label: "Format",
        value: "16:9"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Garantie",
        value: "1 an"
      },
      {
        label: "Contraste",
        value: "3000:1"
      },
      {
        label: "Dimensions",
        value: "539,4 × 434,5 × 178,6 mm (avec support)"
      },
      {
        label: "Inclinaison",
        value: "-5° à +22°"
      },
      {
        label: "Luminosité",
        value: "250 cd/m²"
      },
      {
        label: "Résolution",
        value: "Full HD (1920 × 1080)"
      },
      {
        label: "Technologie",
        value: "AMD FreeSync"
      },
      {
        label: "Connectivité",
        value: "HDMI 1.4, VGA, Sortie audio 3,5 mm"
      },
      {
        label: "Type de dalle",
        value: "VA"
      },
      {
        label: "Angles de vision",
        value: "178° / 178°"
      },
      {
        label: "Temps de réponse",
        value: "4 ms (Extreme) / 6 ms (Normal)"
      },
      {
        label: "Taille de l'écran",
        value: "23,8 pouces"
      },
      {
        label: "Compatibilité VESA",
        value: "100 × 100 mm"
      },
      {
        label: "Protection des yeux",
        value: "Low Blue Light et Flicker Free"
      },
      {
        label: "Taux de rafraîchissement",
        value: "100 Hz"
      }
    ]
  },
  {
    id: 20,
    slug: "epson-co-w01",
    name: "Epson CO-W01",
    category: "projecteurs",
    price: 270000,
    inStock: true,
    images: [
      "epson-co-w01.webp"
    ],
    description: "Epson CO-W01 est un vidéoprojecteur performant conçu pour les présentations professionnelles, les salles de classe et le divertissement à domicile. Grâce à sa technologie 3LCD, sa résolution WXGA et sa luminosité de 3 000 lumens, il offre des images lumineuses, nettes et des couleurs éclatantes, même dans les pièces éclairées.",
    specs: [
      {
        label: "Poids",
        value: "2,4 kg"
      },
      {
        label: "Couleur",
        value: "Blanc"
      },
      {
        label: "Garantie",
        value: "1 an"
      },
      {
        label: "Contraste",
        value: "16000:1"
      },
      {
        label: "Dimensions",
        value: "295 × 211 × 87 mm"
      },
      {
        label: "Luminosité",
        value: "3000 lumens"
      },
      {
        label: "Résolution",
        value: "WXGA (1280 × 800)"
      },
      {
        label: "Technologie",
        value: "3LCD"
      },
      {
        label: "Haut-parleur",
        value: "5 W intégré"
      },
      {
        label: "Connectivité",
        value: "HDMI, USB Type-A, USB Type-B"
      },
      {
        label: "Niveau sonore",
        value: "38 dB (Normal) / 29 dB (Éco)"
      },
      {
        label: "Format d'image",
        value: "16:10"
      },
      {
        label: "Source lumineuse",
        value: "Lampe UHE 188 W"
      },
      {
        label: "Taille de projection",
        value: "25 à 378 pouces"
      },
      {
        label: "Correction trapézoïdale",
        value: "Verticale ±30° / Horizontale ±30°"
      },
      {
        label: "Durée de vie de la lampe",
        value: "6000 h (Normal) / 12000 h (Éco)"
      }
    ]
  },
  {
    id: null,
    slug: "hp-scanjet-pro-3600-f1",
    name: "HP ScanJet Pro 3600 f1",
    category: "scanners",
    price: 250000,
    inStock: true,
    images: [
      "hp-scanjet-pro-3600-f1.webp"
    ],
    description: "HP ScanJet Pro 3600 f1 est un scanner professionnel rapide et performant, conçu pour numériser facilement vos documents, cartes et photos avec une excellente qualité. Grâce à son chargeur automatique de documents et à sa connectivité USB, il est idéal pour les bureaux, entreprises et services administratifs recherchant une solution fiable pour la gestion documentaire",
    specs: [
      {
        label: "Type",
        value: "Scanner à plat avec chargeur automatique (ADF)"
      },
      {
        label: "Poids",
        value: "5,4 kg"
      },
      {
        label: "Couleur",
        value: "Blanc et gris"
      },
      {
        label: "Garantie",
        value: "3 mois"
      },
      {
        label: "Dimensions",
        value: "491 × 325 × 133 mm"
      },
      {
        label: "Technologie",
        value: "CIS"
      },
      {
        label: "Connectivité",
        value: "USB 3.0"
      },
      {
        label: "Compatibilité",
        value: "Windows et macOS"
      },
      {
        label: "Formats de sortie",
        value: "PDF, PDF recherchable, JPEG, TIFF, PNG"
      },
      {
        label: "Cycle d'utilisation",
        value: "Jusqu'à 3000 pages par jour"
      },
      {
        label: "Résolution optique",
        value: "1200 dpi"
      },
      {
        label: "Chargeur automatique",
        value: "60 feuilles"
      },
      {
        label: "Profondeur de couleur",
        value: "24 bits"
      },
      {
        label: "Formats pris en charge",
        value: "A4, A5, A6, Cartes de visite, Documents longs"
      },
      {
        label: "Vitesse de numérisation",
        value: "Jusqu'à 30 ppm / 60 ipm"
      },
      {
        label: "Numérisation recto verso",
        value: "Oui (automatique)"
      }
    ]
  },
  {
    id: 18,
    slug: "granstream-grp2634",
    name: "Grandstream GRP2634",
    category: "telephonie-ip-analogique",
    price: 85000,
    inStock: true,
    images: [
      "granstream-grp2634.webp"
    ],
    description: "Grandstream GRP2634 est un téléphone IP professionnel conçu pour les entreprises recherchant une communication fiable et performante. Doté de plusieurs comptes SIP, d'un écran couleur et d'une qualité audio HD, il est idéal pour les bureaux, centres d'appels et environnements professionnels exigeants.",
    specs: [
      {
        label: "PoE",
        value: "Oui"
      },
      {
        label: "Audio",
        value: "HD"
      },
      {
        label: "Wi-Fi",
        value: "Via adaptateur USB"
      },
      {
        label: "Lignes",
        value: "4"
      },
      {
        label: "Écran",
        value: "Couleur TFT 2,8 pouces"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Montage",
        value: "Bureau ou mural"
      },
      {
        label: "Bluetooth",
        value: "Oui"
      },
      {
        label: "Sécurité",
        value: "TLS et SRTP"
      },
      {
        label: "Comptes SIP",
        value: "8"
      },
      {
        label: "Conférence",
        value: "Jusqu'à 5 participants"
      },
      {
        label: "Ports réseau",
        value: "2 x Gigabit Ethernet"
      }
    ]
  },
  {
    id: 17,
    slug: "dell-vostro-3030",
    name: "Dell Vostro 3030",
    category: "ordinateurs-de-bureau",
    price: 430000,
    inStock: true,
    images: [
      "dell-vostro-3030.webp"
    ],
    description: "Dell Vostro Core i3 est un ordinateur de bureau conçu pour offrir rapidité, fiabilité et efficacité au quotidien. Grâce à son SSD de 512 Go et ses 8 Go de mémoire RAM, il assure un démarrage rapide, un multitâche fluide et d'excellentes performances pour les tâches professionnelles, administratives et éducatives.",
    specs: [
      {
        label: "Audio",
        value: "Audio HD intégré"
      },
      {
        label: "Ports",
        value: "USB 3.2, USB 2.0, HDMI, DisplayPort, RJ-45, Jack 3,5 mm"
      },
      {
        label: "Format",
        value: "Mini Tour"
      },
      {
        label: "Souris",
        value: "USB optique"
      },
      {
        label: "Clavier",
        value: "AZERTY USB"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Garantie",
        value: "3 mois"
      },
      {
        label: "Stockage",
        value: "512 Go SSD NVMe"
      },
      {
        label: "Processeur",
        value: "Intel Core i3"
      },
      {
        label: "Alimentation",
        value: "180 W"
      },
      {
        label: "Mémoire RAM",
        value: "8 Go DDR4"
      },
      {
        label: "Connectivité",
        value: "Wi-Fi, Bluetooth, Ethernet Gigabit"
      },
      {
        label: "Carte graphique",
        value: "Intel UHD Graphics"
      },
      {
        label: "Système d'exploitation",
        value: "Windows 11 Pro"
      }
    ]
  },
  {
    id: 16,
    slug: "lenovo-thinkbook-e14-g7",
    name: "Lenovo ThinkBook E14 G7",
    category: "ordinateurs-portables",
    price: 560000,
    inStock: true,
    images: [
      "lenovo-thinkbook-e14-g7.webp"
    ],
    description: "Lenovo ThinkBook E14 G7 est un ordinateur portable professionnel alliant performance, sécurité et élégance. Équipé d'un processeur Intel Core Ultra 7, d'un SSD rapide de 512 Go et de 8 Go de mémoire RAM, il offre une excellente fluidité pour le travail, les études et le multitâche. Son écran Full HD de 14 pouces garantit un affichage net et confortable au quotidien.",
    specs: [
      {
        label: "Poids",
        value: "Environ 1,4 kg"
      },
      {
        label: "Ports",
        value: "USB-C, USB-A, HDMI, RJ-45, Jack 3,5 mm"
      },
      {
        label: "Webcam",
        value: "Full HD avec obturateur de confidentialité"
      },
      {
        label: "Écran",
        value: "14 pouces Full HD IPS antireflet"
      },
      {
        label: "Clavier",
        value: "Rétroéclairé"
      },
      {
        label: "Couleur",
        value: "Gris"
      },
      {
        label: "Batterie",
        value: "Jusqu'à 10 heures d'autonomie"
      },
      {
        label: "Garantie",
        value: "3 mois"
      },
      {
        label: "Stockage",
        value: "512 Go SSD NVMe"
      },
      {
        label: "Processeur",
        value: "Intel Core Ultra 7"
      },
      {
        label: "Résolution",
        value: "1920 × 1080"
      },
      {
        label: "Mémoire RAM",
        value: "8 Go DDR5"
      },
      {
        label: "Connectivité",
        value: "Wi-Fi 6E, Bluetooth 5.3"
      },
      {
        label: "Carte graphique",
        value: "Intel Graphics intégrée"
      },
      {
        label: "Lecteur d'empreintes",
        value: "Oui"
      },
      {
        label: "Système d'exploitation",
        value: "Windows 11 Pro"
      }
    ]
  },
  {
    id: 15,
    slug: "canon-pixma-g3410",
    name: "Canon Pixma G3410",
    category: "imprimantes",
    price: 160000,
    inStock: true,
    images: [
      "canon-pixma-g3410.webp"
    ],
    description: "La Canon PIXMA G3410 est une imprimante multifonction conçue pour les particuliers et les professionnels recherchant une impression économique et fiable. Grâce à ses réservoirs d'encre haute capacité, sa connexion Wi-Fi et ses fonctions d'impression, de copie et de numérisation, elle offre une excellente qualité tout en réduisant le coût par page. Idéale pour les bureaux, les écoles et un usage quotidien.",
    specs: [
      {
        label: "Poids",
        value: "6,3 kg"
      },
      {
        label: "Écran",
        value: "LCD monochrome 1,2 pouces"
      },
      {
        label: "Couleur",
        value: "Noir"
      },
      {
        label: "Scanner",
        value: "À plat CIS"
      },
      {
        label: "Fonctions",
        value: "Impression, Copie, Numérisation"
      },
      {
        label: "Technologie",
        value: "Jet d'encre MegaTank"
      },
      {
        label: "Connectivité",
        value: "Wi-Fi, USB 2.0"
      },
      {
        label: "Formats papier",
        value: "A4, A5, B5, Letter, Legal, Enveloppes"
      },
      {
        label: "Capacité du bac",
        value: "100 feuilles"
      },
      {
        label: "Impression mobile",
        value: "Canon PRINT, AirPrint, Mopria"
      },
      {
        label: "Rendement d'encre",
        value: "6000 pages noir / 7000 pages couleur"
      },
      {
        label: "Résolution du scanner",
        value: "600 × 1200 dpi"
      },
      {
        label: "Résolution d'impression",
        value: "4800 × 1200 dpi"
      },
      {
        label: "Vitesse d'impression noir",
        value: "8,8 ipm"
      },
      {
        label: "Vitesse d'impression couleur",
        value: "5 ipm"
      }
    ]
  }
];
