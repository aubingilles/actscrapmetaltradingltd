// /lib/i18n.ts

export const languages = {
  en: { code: 'en', name: 'English', flag: '🇬🇧' },
  fr: { code: 'fr', name: 'Français', flag: '🇫🇷' },
  es: { code: 'es', name: 'Español', flag: '🇪🇸' },
  tr: { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
} as const;

export const translations = {
  en: {
    // Header / Nav
    home: 'Home',
    about: 'About',
    services: 'Services',
    products: 'Products',
    livePrices: 'Live Prices',
    contact: 'Contact',
    getQuote: 'Get Quote',

    // Hero
    heroTitle: 'Professional Scrap Metal Trading',
    heroSubtitle:
      'Your trusted partner for buying, selling and processing scrap metals with competitive pricing across UK and Turkey',
    heroButton: 'Get Started',
    heroSecondary: 'View Products',

    // Stats
    statsExperience: 'Years Experience',
    statsClients: 'Happy Clients',
    statsCountries: 'UK Wide',
    statsVolume: 'Monthly Volume',
    trustedByThousands: 'Trusted by Thousands',
    trustedSubtitle:
      "Join UK's largest scrap trading marketplace where businesses connect to buy and sell materials efficiently.",
    dailyDeals: 'Daily Deals',
    dailyDealsDesc: 'Successful deals completed every day',
    monthlyVolumeDesc: 'Materials worth millions traded monthly',
    successRate: 'Success Rate',
    support24: '24/7',
    supportText: 'Support',
    coverageText: 'Coverage',
    experienceYears: '5+ Years',
    experienceText: 'Experience',

    // Services section
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive scrap metal trading solutions',
    scrapCollection: 'Scrap Collection',
    metalProcessing: 'Metal Processing',
    fairPricing: 'Fair Pricing',
    logistics: 'Logistics',
    consulting: 'Consulting',
    recycling: 'Recycling',

    // Products home
    featuredProducts: 'Featured Products',
    featuredSubtitle: 'High-quality scrap metals from verified suppliers',
    viewAll: 'View All Products',
    viewDetails: 'View Details',
    mostPopular: 'Most Popular',
    items: 'Items',
    viewMaterials: 'View Materials',

    // Categories listing section
    categoriesTitle: 'Product Categories',
    categoriesSubtitle: 'Browse our comprehensive range of scrap metal categories',

    // CTA
    ctaTitle: 'Ready to Start Trading?',
    ctaSubtitle: 'Get competitive quotes for your scrap metal requirements',
    ctaButton: 'Get Quote Now',
    ctaSecondary: 'Call Us',
    freeQuotes: 'Free quotes',
    verifiedBuyers: 'Verified buyers & sellers',
    secureTransactions: 'Secure transactions',

    // Footer (use distinct keys to avoid duplicates)
    footerDescription:
      'Professional scrap metal trading services with competitive pricing and reliable logistics across UK and Turkey.',
    quickLinks: 'Quick Links',
    servicesFooter: 'Services',
    legal: 'Legal',
    news: 'News',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    buy: 'Buy Scrap',
    sell: 'Sell Scrap',
    followUs: 'Follow Us',
    rightsReserved: 'All rights reserved.',
    phone: 'Phone',
    turkeyOperations:
      'Turkey Operations: WE TRADE GENERAL DIS TİCARET LIMITED ŞİRKETİ - 5219/1 Sok: No:8 İzmir Turkey',
    copyrightText: '2024 ACT SCRAP METAL TRADING LTD.',
    copyrightSuffix: 'Professional scrap metal trading services.',
    support: 'Support',

    // Product detail page
    missingProductId: 'Missing Product ID',
    missingProductIdDesc: 'Please provide a valid product ID to view details.',
    browseProducts: 'Browse Products',
    loadingProduct: 'Loading product details...',
    productNotFound: 'Product Not Found',
    productNotFoundDesc:
      "The product you're looking for doesn't exist or has been removed.",
    browseAllProducts: 'Browse All Products',
    verifiedSeller: 'Verified Seller',
    outOf5: 'out of 5',
    productInformation: 'Product Information',
    location: 'Location',
    seller: 'Seller',
    minOrder: 'Min Order',
    specifications: 'Specifications',
    composition: 'Composition',
    requestQuote: 'Request Quote',
    contactSeller: 'Contact Seller',
    needHelp: 'Need Help?',
    needHelpDesc:
      'Our team can help you with pricing, logistics, and quality verification. Get a free quote or speak with our specialists.',

    // Category labels
    ferrous: 'Ferrous Metals',
    nonFerrous: 'Non-Ferrous Metals',
    automotive: 'Automotive Scrap',
    electronics: 'Electronic Waste',
    industrial: 'Industrial Scrap',
    cables: 'Cable & Wire Scrap',
    paper: 'Paper & Cardboard',
    fabric: 'Fabric & Textile',
    machinery: 'Machinery & Equipment',
    wood: 'Wood & Timber',
    plastic: 'Plastic Scrap',

    // Category descriptions
    ferrousDesc:
      'Steel, iron, HMS scrap and other ferrous materials for construction and manufacturing industries.',
    nonFerrousDesc:
      'Copper, aluminum, brass, lead and other non-ferrous metals with high recycling value.',
    automotiveDesc:
      'End-of-life vehicles, auto parts, catalytic converters and automotive metal components.',
    electronicsDesc:
      'Circuit boards, cables, computer parts and precious metal recovery from electronic equipment.',
    industrialDesc:
      'Heavy machinery, industrial equipment, structural steel and manufacturing waste materials.',
    cablesDesc:
      'Copper cables, aluminum wires, fiber optic cables and electrical conductor materials.',
    paperDesc:
      'Waste paper, cardboard, newspapers, magazines and office paper for pulp manufacturing.',
    fabricDesc:
      'Cotton rags, textile waste, clothing scraps and fabric materials for recycling industries.',
    machineryDesc:
      'Used industrial machinery, manufacturing equipment and heavy machinery for resale or scrap.',
    woodDesc:
      'Waste wood, timber scraps, wooden pallets and construction wood materials for recycling.',
    plasticDesc:
      'HDPE, PP, PET, PVC and other plastic materials for granulation and recycling applications.',

    // Hero slide subtitles
    steelIronHms: 'Steel, Iron & HMS Scrap Materials',
    copperAluminum: 'Copper, Aluminum & Brass Processing',
    sustainableRecycling: 'Sustainable Recycling Solutions',
    fabricRecycling: 'Complete Fabric Recycling Services',

    // Extra feature labels
    highGradeQuality: 'High Grade Quality',
    cleanSorted: 'Clean & Sorted',
    bulkAvailable: 'Bulk Available',
    fastDelivery: 'Fast Delivery',
    grade12: 'Grade 1 & 2',
    industrialGrade: 'Industrial Grade',
    bulkOrders: 'Bulk Orders',
    certifiedQuality: 'Certified Quality',
    pureCopper: '99% Pure Copper',
    insulationFree: 'Insulation Free',
    premiumGrade: 'Premium Grade',
    instantQuote: 'Instant Quote',
    virginGrade: 'Virgin Grade',
    compressedBales: 'Compressed Bales',
    regularSupply: 'Regular Supply',
    mixedGrade: 'Mixed Grade',
    dryCondition: 'Dry Condition',
    workingCondition: 'Working Condition',
    serviceAvailable: 'Service Available',
    installationHelp: 'Installation Help',
    warrantyOptions: 'Warranty Options',

    // Stats descriptions
    verifiedBuyersDesc: 'Verified buyers and sellers trading materials daily',
    materialTypesDesc: 'Plastic, Metal, Paper, Fabric, Wood & Machinery',
  },

  fr: {
    // Header / Nav
    home: 'Accueil',
    about: 'À Propos',
    services: 'Services',
    products: 'Produits',
    livePrices: 'Prix en Direct',
    contact: 'Contact',
    getQuote: 'Obtenir un Devis',

    // Hero
    heroTitle: 'Commerce Professionnel de Métaux de Récupération',
    heroSubtitle:
      'Votre partenaire de confiance pour acheter, vendre et traiter les métaux de récupération avec des prix compétitifs au Royaume-Uni et en Turquie',
    heroButton: 'Commencer',
    heroSecondary: 'Voir les Produits',

    // Stats
    statsExperience: "Années d'Expérience",
    statsClients: 'Clients Satisfaits',
    statsCountries: 'Tout le Royaume-Uni',
    statsVolume: 'Volume Mensuel',
    trustedByThousands: 'Approuvé par des Milliers',
    trustedSubtitle:
      'Rejoignez la plus grande place de marché de ferraille du Royaume-Uni où les entreprises se connectent pour acheter et vendre efficacement.',
    dailyDeals: 'Transactions Quotidiennes',
    dailyDealsDesc: 'Transactions réussies effectuées chaque jour',
    monthlyVolumeDesc: "Matériaux d'une valeur de millions échangés mensuellement",
    successRate: 'Taux de Réussite',
    support24: '24/7',
    supportText: 'Support',
    coverageText: 'Couverture',
    experienceYears: '5+ Ans',
    experienceText: 'Expérience',

    // Services section
    servicesTitle: 'Nos Services',
    servicesSubtitle: 'Solutions complètes de commerce de métaux de récupération',
    scrapCollection: 'Collecte de Ferraille',
    metalProcessing: 'Traitement des Métaux',
    fairPricing: 'Prix Équitables',
    logistics: 'Logistique',
    consulting: 'Conseil',
    recycling: 'Recyclage',

    // Products home
    featuredProducts: 'Produits en Vedette',
    featuredSubtitle:
      'Métaux de récupération de haute qualité de fournisseurs vérifiés',
    viewAll: 'Voir Tous les Produits',
    viewDetails: 'Voir les Détails',
    mostPopular: 'Le Plus Populaire',
    items: 'Articles',
    viewMaterials: 'Voir les Matériaux',

    // Categories listing section
    categoriesTitle: 'Catégories de Produits',
    categoriesSubtitle:
      'Parcourez notre gamme complète de catégories de métaux de récupération',

    // CTA
    ctaTitle: 'Prêt à Commencer le Commerce ?',
    ctaSubtitle:
      'Obtenez des devis compétitifs pour vos besoins en métaux de récupération',
    ctaButton: 'Obtenir un Devis',
    ctaSecondary: 'Appelez-Nous',
    freeQuotes: 'Devis gratuits',
    verifiedBuyers: 'Acheteurs et vendeurs vérifiés',
    secureTransactions: 'Transactions sécurisées',

    // Footer
    footerDescription:
      'Services professionnels de commerce de métaux de récupération avec des prix compétitifs et une logistique fiable au Royaume-Uni et en Turquie.',
    quickLinks: 'Liens Rapides',
    servicesFooter: 'Services',
    legal: 'Légal',
    news: 'Actualités',
    privacyPolicy: 'Politique de Confidentialité',
    termsConditions: 'Conditions Générales',
    buy: 'Acheter Ferraille',
    sell: 'Vendre Ferraille',
    followUs: 'Suivez-Nous',
    rightsReserved: 'Tous droits réservés.',
    phone: 'Téléphone',
    turkeyOperations:
      'Opérations en Turquie : WE TRADE GENERAL DIS TİCARET LIMITED ŞİRKETİ - 5219/1 Sok: No:8 İzmir Turkey',
    copyrightText: '2024 ACT SCRAP METAL TRADING LTD.',
    copyrightSuffix:
      'Services professionnels de commerce de métaux de récupération.',
    support: 'Support',

    // Product detail page
    missingProductId: 'ID de produit manquant',
    missingProductIdDesc:
      'Veuillez fournir un ID de produit valide pour voir les détails.',
    browseProducts: 'Parcourir les produits',
    loadingProduct: 'Chargement des détails du produit...',
    productNotFound: 'Produit introuvable',
    productNotFoundDesc:
      "Le produit que vous recherchez n'existe pas ou a été supprimé.",
    browseAllProducts: 'Parcourir tous les produits',
    verifiedSeller: 'Vendeur vérifié',
    outOf5: 'sur 5',
    productInformation: 'Informations produit',
    location: 'Emplacement',
    seller: 'Vendeur',
    minOrder: 'Commande min',
    specifications: 'Spécifications',
    composition: 'Composition',
    requestQuote: 'Demander un devis',
    contactSeller: 'Contacter le vendeur',
    needHelp: "Besoin d'aide?",
    needHelpDesc:
      'Notre équipe peut vous aider avec les prix, la logistique et la vérification de qualité.',

    // Category labels
    ferrous: 'Métaux Ferreux',
    nonFerrous: 'Métaux Non-Ferreux',
    automotive: 'Ferraille Automobile',
    electronics: 'Déchets Électroniques',
    industrial: 'Ferraille Industrielle',
    cables: 'Ferraille de Câbles',
    paper: 'Papier et Carton',
    fabric: 'Tissus et Textile',
    machinery: 'Machines et Équipements',
    wood: 'Bois et Timber',
    plastic: 'Ferraille Plastique',

    // Category descriptions
    ferrousDesc:
      "Acier, fer, ferraille HMS et autres matériaux ferreux pour les industries de construction et de fabrication.",
    nonFerrousDesc:
      'Cuivre, aluminium, laiton, plomb et autres métaux non ferreux à haute valeur de recyclage.',
    automotiveDesc:
      'Véhicules en fin de vie, pièces automobiles, convertisseurs catalytiques et composants métalliques automobiles.',
    electronicsDesc:
      'Cartes de circuits, câbles, pièces informatiques et récupération de métaux précieux des équipements électroniques.',
    industrialDesc:
      "Machines lourdes, équipements industriels, acier structural et matériaux de déchets de fabrication.",
    cablesDesc:
      "Câbles en cuivre, fils d'aluminium, câbles à fibre optique et matériaux conducteurs électriques.",
    paperDesc:
      'Papier de rebut, carton, journaux, magazines et papier de bureau pour la fabrication de pâte.',
    fabricDesc:
      'Chiffons de coton, déchets textiles, chutes de vêtements et matériaux de tissu pour les industries de recyclage.',
    machineryDesc:
      "Machines industrielles d'occasion, équipements de fabrication et machines lourdes pour la revente ou la ferraille.",
    woodDesc:
      'Bois de rebut, chutes de bois, palettes en bois et matériaux de bois de construction pour le recyclage.',
    plasticDesc:
      'HDPE, PP, PET, PVC et autres matériaux plastiques pour les applications de granulation et de recyclage.',

    // Hero slide subtitles
    steelIronHms: "Matériaux de Ferraille d'Acier, Fer et HMS",
    copperAluminum: 'Traitement du Cuivre, Aluminium et Laiton',
    sustainableRecycling: 'Solutions de Recyclage Durable',
    fabricRecycling: 'Services Complets de Recyclage de Tissus',

    // Extra feature labels
    highGradeQuality: 'Qualité de Haute Qualité',
    cleanSorted: 'Propre et Trié',
    bulkAvailable: 'Disponible en Vrac',
    fastDelivery: 'Livraison Rapide',
    grade12: 'Grade 1 et 2',
    industrialGrade: 'Grade Industriel',
    bulkOrders: 'Commandes en Vrac',
    certifiedQuality: 'Qualité Certifiée',
    pureCopper: '99% de Cuivre Pur',
    insulationFree: 'Sans Isolation',
    premiumGrade: 'Grade Premium',
    instantQuote: 'Devis Instantané',
    virginGrade: 'Grade Vierge',
    compressedBales: 'Balles Compressées',
    regularSupply: 'Approvisionnement Régulier',
    mixedGrade: 'Grade Mixte',
    dryCondition: 'Condition Sèche',
    workingCondition: 'Condition de Travail',
    serviceAvailable: 'Service Disponible',
    installationHelp: "Aide à l'Installation",
    warrantyOptions: 'Options de Garantie',

    // Stats descriptions
    verifiedBuyersDesc:
      'Acheteurs et vendeurs vérifiés échangeant des matériaux quotidiennement',
    materialTypesDesc: 'Plastique, Métal, Papier, Tissu, Bois et Machines',
  },

  es: {
    // Header / Nav
    home: 'Inicio',
    about: 'Acerca de',
    services: 'Servicios',
    products: 'Productos',
    livePrices: 'Precios en Vivo',
    contact: 'Contacto',
    getQuote: 'Obtener Cotización',

    // Hero
    heroTitle: 'Comercio Profesional de Metales de Desecho',
    heroSubtitle:
      'Su socio de confianza para comprar, vender y procesar metales de desecho con precios competitivos en Reino Unido y Turquía',
    heroButton: 'Comenzar',
    heroSecondary: 'Ver Productos',

    // Stats
    statsExperience: 'Años de Experiencia',
    statsClients: 'Clientes Satisfechos',
    statsCountries: 'Todo el Reino Unido',
    statsVolume: 'Volumen Mensual',
    trustedByThousands: 'Confiado por Miles',
    trustedSubtitle:
      'Únase al mercado de comercio de chatarra más grande del Reino Unido donde las empresas se conectan para comprar y vender materiales de manera eficiente.',
    dailyDeals: 'Ofertas Diarias',
    dailyDealsDesc: 'Ofertas exitosas completadas todos los días',
    monthlyVolumeDesc:
      'Materiales por valor de millones comercializados mensualmente',
    successRate: 'Tasa de Éxito',
    support24: '24/7',
    supportText: 'Soporte',
    coverageText: 'Cobertura',
    experienceYears: '5+ Años',
    experienceText: 'Experiencia',

    // Services section
    servicesTitle: 'Nuestros Servicios',
    servicesSubtitle:
      'Soluciones integrales de comercio de metales de desecho',
    scrapCollection: 'Recolección de Chatarra',
    metalProcessing: 'Procesamiento de Metales',
    fairPricing: 'Precios Justos',
    logistics: 'Logística',
    consulting: 'Consultoría',
    recycling: 'Reciclaje',

    // Products home
    featuredProducts: 'Productos Destacados',
    featuredSubtitle:
      'Metales de desecho de alta calidad de proveedores verificados',
    viewAll: 'Ver Todos los Productos',
    viewDetails: 'Ver Detalles',
    mostPopular: 'Más Popular',
    items: 'Artículos',
    viewMaterials: 'Ver Materiales',

    // Categories listing section
    categoriesTitle: 'Categorías de Productos',
    categoriesSubtitle:
      'Explore nuestra gama completa de categorías de metales de desecho',

    // CTA
    ctaTitle: '¿Listo para Comenzar a Comerciar?',
    ctaSubtitle:
      'Obtenga cotizaciones competitivas para sus requisitos de metales de desecho',
    ctaButton: 'Obtener Cotización',
    ctaSecondary: 'Llámanos',
    freeQuotes: 'Cotizaciones gratuitas',
    verifiedBuyers: 'Compradores y vendedores verificados',
    secureTransactions: 'Transacciones seguras',

    // Footer
    footerDescription:
      'Servicios profesionales de comercio de metales de desecho con precios competitivos y logística confiable en Reino Unido y Turquía.',
    quickLinks: 'Enlaces Rápidos',
    servicesFooter: 'Servicios',
    legal: 'Legal',
    news: 'Noticias',
    privacyPolicy: 'Política de Privacidad',
    termsConditions: 'Términos y Condiciones',
    buy: 'Comprar Chatarra',
    sell: 'Vender Chatarra',
    followUs: 'Síguenos',
    rightsReserved: 'Todos los derechos reservados.',
    phone: 'Teléfono',
    turkeyOperations:
      'Operaciones en Turquía: WE TRADE GENERAL DIS TİCARET LIMITED ŞİRKETİ - 5219/1 Sok: No:8 İzmir Turkey',
    copyrightText: '2024 ACT SCRAP METAL TRADING LTD.',
    copyrightSuffix:
      'Servicios profesionales de comercio de metales de desecho.',
    support: 'Soporte',

    // Product detail page
    missingProductId: 'ID de producto faltante',
    missingProductIdDesc:
      'Proporcione un ID de producto válido para ver los detalles.',
    browseProducts: 'Explorar productos',
    loadingProduct: 'Cargando detalles del producto...',
    productNotFound: 'Producto no encontrado',
    productNotFoundDesc:
      'El producto que busca no existe o ha sido eliminado.',
    browseAllProducts: 'Explorar todos los productos',
    verifiedSeller: 'Vendedor verificado',
    outOf5: 'de 5',
    productInformation: 'Información del producto',
    location: 'Ubicación',
    seller: 'Vendedor',
    minOrder: 'Pedido mín',
    specifications: 'Especificaciones',
    composition: 'Composición',
    requestQuote: 'Solicitar cotización',
    contactSeller: 'Contactar vendedor',
    needHelp: '¿Necesita ayuda?',
    needHelpDesc:
      'Nuestro equipo puede ayudarle con precios, logística y verificación de calidad.',

    // Category labels
    ferrous: 'Metales Ferrosos',
    nonFerrous: 'Metales No Ferrosos',
    automotive: 'Chatarra Automotriz',
    electronics: 'Desechos Electrónicos',
    industrial: 'Chatarra Industrial',
    cables: 'Chatarra de Cables',
    paper: 'Papel y Cartón',
    fabric: 'Tela y Textil',
    machinery: 'Maquinaria y Equipos',
    wood: 'Madera',
    plastic: 'Chatarra Plástica',

    // Category descriptions
    ferrousDesc:
      'Acero, hierro, chatarra HMS y otros materiales ferrosos para industrias de construcción y fabricación.',
    nonFerrousDesc:
      'Cobre, aluminio, latón, plomo y otros metales no ferrosos con alto valor de reciclaje.',
    automotiveDesc:
      'Vehículos al final de su vida útil, autopartes, convertidores catalíticos y componentes metálicos automotrices.',
    electronicsDesc:
      'Placas de circuitos, cables, partes de computadora y recuperación de metales preciosos de equipos electrónicos.',
    industrialDesc:
      'Maquinaria pesada, equipo industrial, acero estructural y materiales de desecho de fabricación.',
    cablesDesc:
      'Cables de cobre, alambres de aluminio, cables de fibra óptica y materiales conductores eléctricos.',
    paperDesc:
      'Papel de desecho, cartón, periódicos, revistas y papel de oficina para fabricación de pulpa.',
    fabricDesc:
      'Trapos de algodón, desechos textiles, recortes de ropa y materiales de tela para industrias de reciclaje.',
    machineryDesc:
      'Maquinaria industrial usada, equipo de fabricación y maquinaria pesada para reventa o chatarra.',
    woodDesc:
      'Madera de desecho, recortes de madera, paletas de madera y materiales de madera de construcción para reciclaje.',
    plasticDesc:
      'HDPE, PP, PET, PVC y otros materiales plásticos para aplicaciones de granulación y reciclaje.',

    // Hero slide subtitles
    steelIronHms: 'Materiales de Chatarra de Acero, Hierro y HMS',
    copperAluminum: 'Procesamiento de Cobre, Aluminio y Latón',
    sustainableRecycling: 'Soluciones de Reciclaje Sostenible',
    fabricRecycling: 'Servicios Completos de Reciclaje de Telas',

    // Extra feature labels
    highGradeQuality: 'Calidad de Alto Grado',
    cleanSorted: 'Limpio y Clasificado',
    bulkAvailable: 'Disponible a Granel',
    fastDelivery: 'Entrega Rápida',
    grade12: 'Grado 1 y 2',
    industrialGrade: 'Grado Industrial',
    bulkOrders: 'Pedidos a Granel',
    certifiedQuality: 'Calidad Certificada',
    pureCopper: '99% Cobre Puro',
    insulationFree: 'Libre de Aislamiento',
    premiumGrade: 'Grado Premium',
    instantQuote: 'Cotización Instantánea',
    virginGrade: 'Grado Virgen',
    compressedBales: 'Pacas Comprimidas',
    regularSupply: 'Suministro Regular',
    mixedGrade: 'Grado Mixto',
    dryCondition: 'Condición Seca',
    workingCondition: 'Condición de Trabajo',
    serviceAvailable: 'Servicio Disponible',
    installationHelp: 'Ayuda de Instalación',
    warrantyOptions: 'Opciones de Garantía',

    // Stats descriptions
    verifiedBuyersDesc:
      'Compradores y vendedores verificados comercializando materiales diariamente',
    materialTypesDesc: 'Plástico, Metal, Papel, Tela, Madera y Maquinaria',
  },

  tr: {
    // Header / Nav
    home: 'Ana Sayfa',
    about: 'Hakkımızda',
    services: 'Hizmetler',
    products: 'Ürünler',
    livePrices: 'Canlı Fiyatlar',
    contact: 'İletişim',
    getQuote: 'Teklif Al',

    // Hero
    heroTitle: 'Profesyonel Hurda Metal Ticareti',
    heroSubtitle:
      "İngiltere ve Türkiye'de rekabetçi fiyatlarla hurda metal alım, satım ve işleme konusunda güvenilir ortağınız",
    heroButton: 'Başlayın',
    heroSecondary: 'Ürünleri Görüntüle',

    // Stats
    statsExperience: 'Yıl Deneyim',
    statsClients: 'Mutlu Müşteri',
    statsCountries: 'Tüm İngiltere',
    statsVolume: 'Aylık Hacim',
    trustedByThousands: 'Binlerce Kişi Tarafından Güvenilir',
    trustedSubtitle:
      "İşletmelerin malzemeleri verimli bir şekilde alıp satmak için bağlandığı İngiltere'nin en büyük hurda ticaret pazarına katılın.",
    dailyDeals: 'Günlük Anlaşmalar',
    dailyDealsDesc: 'Her gün tamamlanan başarılı anlaşmalar',
    monthlyVolumeDesc: 'Aylık milyonlarca değerde malzeme ticareti',
    successRate: 'Başarı Oranı',
    support24: '24/7',
    supportText: 'Destek',
    coverageText: 'Kapsama',
    experienceYears: '5+ Yıl',
    experienceText: 'Deneyim',

    // Services section
    servicesTitle: 'Hizmetlerimiz',
    servicesSubtitle: 'Kapsamlı hurda metal ticaret çözümleri',
    scrapCollection: 'Hurda Toplama',
    metalProcessing: 'Metal İşleme',
    fairPricing: 'Adil Fiyatlandırma',
    logistics: 'Lojistik',
    consulting: 'Danışmanlık',
    recycling: 'Geri Dönüşüm',

    // Products home
    featuredProducts: 'Öne Çıkan Ürünler',
    featuredSubtitle:
      'Doğrulanmış tedarikçilerden yüksek kaliteli hurda metaller',
    viewAll: 'Tüm Ürünleri Görüntüle',
    viewDetails: 'Detayları Görüntüle',
    mostPopular: 'En Popüler',
    items: 'Öğeler',
    viewMaterials: 'Malzemeleri Görüntüle',

    // Categories listing section
    categoriesTitle: 'Ürün Kategorileri',
    categoriesSubtitle: 'Kapsamlı hurda metal kategorilerimize göz atın',

    // CTA
    ctaTitle: 'Ticarete Başlamaya Hazır mısınız?',
    ctaSubtitle: 'Hurda metal gereksinimleriniz için rekabetçi teklifler alın',
    ctaButton: 'Şimdi Teklif Al',
    ctaSecondary: 'Bizi Arayın',
    freeQuotes: 'Ücretsiz teklifler',
    verifiedBuyers: 'Doğrulanmış alıcılar ve satıcılar',
    secureTransactions: 'Güvenli işlemler',

    // Footer
    footerDescription:
      "İngiltere ve Türkiye'de rekabetçi fiyatlar ve güvenilir lojistik ile profesyonel hurda metal ticaret hizmetleri.",
    quickLinks: 'Hızlı Bağlantılar',
    servicesFooter: 'Hizmetler',
    legal: 'Yasal',
    news: 'Haberler',
    privacyPolicy: 'Gizlilik Politikası',
    termsConditions: 'Şartlar ve Koşullar',
    buy: 'Hurda Satın Al',
    sell: 'Hurda Sat',
    followUs: 'Bizi Takip Edin',
    rightsReserved: 'Tüm hakları saklıdır.',
    phone: 'Telefon',
    turkeyOperations:
      'Türkiye Operasyonları: WE TRADE GENERAL DIS TİCARET LIMITED ŞİRKETİ - 5219/1 Sok: No:8 İzmir Turkey',
    copyrightText: '2024 ACT SCRAP METAL TRADING LTD.',
    copyrightSuffix: 'Profesyonel hurda metal ticaret hizmetleri.',
    support: 'Destek',

    // Product detail page
    missingProductId: "Ürün ID'si eksik",
    missingProductIdDesc:
      "Detayları görmek için geçerli bir ürün ID'si sağlayın.",
    browseProducts: 'Ürünleri gözat',
    loadingProduct: 'Ürün detayları yükleniyor...',
    productNotFound: 'Ürün bulunamadı',
    productNotFoundDesc: 'Aradığınız ürün mevcut değil veya kaldırılmış.',
    browseAllProducts: 'Tüm ürünleri gözat',
    verifiedSeller: 'Doğrulanmış satıcı',
    outOf5: '5 üzerinden',
    productInformation: 'Ürün bilgileri',
    location: 'Konum',
    seller: 'Satıcı',
    minOrder: 'Min sipariş',
    specifications: 'Özellikler',
    composition: 'Kompozisyon',
    requestQuote: 'Teklif iste',
    contactSeller: 'Satıcıyla iletişim',
    needHelp: 'Yardıma mı ihtiyacınız var?',
    needHelpDesc:
      'Ekibimiz fiyatlandırma, lojistik ve kalite doğrulama konusunda yardımcı olabilir.',

    // Category labels
    ferrous: 'Demir Metaller',
    nonFerrous: 'Demir Dışı Metaller',
    automotive: 'Otomotiv Hurdası',
    electronics: 'Elektronik Atık',
    industrial: 'Endüstriyel Hurda',
    cables: 'Kablo Hurdası',
    paper: 'Kağıt ve Karton',
    fabric: 'Kumaş ve Tekstil',
    machinery: 'Makine ve Ekipman',
    wood: 'Ahşap',
    plastic: 'Plastik Hurda',

    // Category descriptions
    ferrousDesc:
      'İnşaat ve imalat endüstrileri için çelik, demir, HMS hurda ve diğer demirli malzemeler.',
    nonFerrousDesc:
      'Yüksek geri dönüşüm değerine sahip bakır, alüminyum, pirinç, kurşun ve diğer demir dışı metaller.',
    automotiveDesc:
      'Hurdaya ayrılan araçlar, otomotiv parçaları, katalitik konvertörler ve otomotiv metal bileşenleri.',
    electronicsDesc:
      'Elektronik ekipmanlardan devre kartları, kablolar, bilgisayar parçaları ve değerli metal geri kazanımı.',
    industrialDesc:
      'Ağır makineler, endüstriyel ekipman, yapısal çelik ve imalat atık malzemeleri.',
    cablesDesc:
      'Bakır kablolar, alüminyum teller, fiber optik kablolar ve elektriksel iletken malzemeler.',
    paperDesc:
      'Hamur imalatı için atık kağıt, karton, gazete, dergi ve ofis kağıdı.',
    fabricDesc:
      'Geri dönüşüm endüstrileri için pamuklu bez parçaları, tekstil atıkları, giysi artıkları ve kumaş malzemeleri.',
    machineryDesc:
      'Yeniden satış veya hurda için kullanılmış endüstriyel makineler, imalat ekipmanları ve ağır makineler.',
    woodDesc:
      'Geri dönüşüm için atık ahşap, ahşap parçaları, ahşap paletler ve inşaat ahşap malzemeleri.',
    plasticDesc:
      'Granülasyon ve geri dönüşüm uygulamaları için HDPE, PP, PET, PVC ve diğer plastik malzemeler.',

    // Hero slide subtitles
    steelIronHms: 'Çelik, Demir ve HMS Hurda Malzemeler',
    copperAluminum: 'Bakır, Alüminyum ve Pirinç İşleme',
    sustainableRecycling: 'Sürdürülebilir Geri Dönüşüm Çözümleri',
    fabricRecycling: 'Kapsamlı Kumaş Geri Dönüşüm Hizmetleri',

    // Extra feature labels
    highGradeQuality: 'Yüksek Kalite',
    cleanSorted: 'Temiz ve Sınıflandırılmış',
    bulkAvailable: 'Toplu Mevcut',
    fastDelivery: 'Hızlı Teslimat',
    grade12: 'Sınıf 1 ve 2',
    industrialGrade: 'Endüstriyel Sınıf',
    bulkOrders: 'Toplu Siparişler',
    certifiedQuality: 'Sertifikalı Kalite',
    pureCopper: '%99 Saf Bakır',
    insulationFree: 'İzolasyonsuz',
    premiumGrade: 'Premium Sınıf',
    instantQuote: 'Anında Teklif',
    virginGrade: 'Bakir Sınıf',
    compressedBales: 'Sıkıştırılmış Balyalar',
    regularSupply: 'Düzenli Tedarik',
    mixedGrade: 'Karışık Sınıf',
    dryCondition: 'Kuru Durum',
    workingCondition: 'Çalışır Durumda',
    serviceAvailable: 'Servis Mevcut',
    installationHelp: 'Kurulum Yardımı',
    warrantyOptions: 'Garanti Seçenekleri',

    // Stats descriptions
    verifiedBuyersDesc:
      'Günlük malzeme ticareti yapan doğrulanmış alıcılar ve satıcılar',
    materialTypesDesc: 'Plastik, Metal, Kağıt, Kumaş, Ahşap ve Makine',
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
