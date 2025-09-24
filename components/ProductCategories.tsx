
'use client';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function ProductCategories() {
  const { t } = useLanguage();

  const categories = [
    {
      id: 1,
      title: t('ferrous'),
      description: t('ferrousDesc'),
      icon: 'ri-tools-line',
      image: 'https://readdy.ai/api/search-image?query=ferrous%20steel%20metal%20scrap%20industrial%20recycling%20facility%20heavy%20melting%20steel%20HMS%20grade%20materials%20processing%20yard%20clean%20background%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=ferrous-category&orientation=landscape',
      products: 3,
      color: 'blue',
      link: '/products?category=ferrous'
    },
    {
      id: 2,
      title: t('nonFerrous'),
      description: t('nonFerrousDesc'),
      icon: 'ri-copper-coin-line',
      image: 'https://readdy.ai/api/search-image?query=copper%20wire%20aluminum%20non-ferrous%20metal%20scrap%20bright%20shiny%20copper%20cables%20electrical%20recycling%20materials%20clean%20industrial%20background%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=nonferrous-category&orientation=landscape',
      products: 3,
      color: 'orange',
      link: '/products?category=non-ferrous'
    },
    {
      id: 3,
      title: t('automotive'),
      description: t('automotiveDesc'),
      icon: 'ri-car-line',
      image: 'https://readdy.ai/api/search-image?query=automotive%20car%20scrap%20metal%20parts%20recycling%20junkyard%20vehicle%20dismantling%20steel%20aluminum%20components%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=automotive-scrap-cat&orientation=landscape',
      products: 2,
      color: 'red',
      link: '/products?category=automotive'
    },
    {
      id: 4,
      title: t('electronics'),
      description: t('electronicsDesc'),
      icon: 'ri-computer-line',
      image: 'https://readdy.ai/api/search-image?query=electronic%20waste%20e-waste%20circuit%20boards%20computer%20parts%20cables%20precious%20metals%20recovery%20recycling%20technology%20scrap%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=electronic-waste-cat&orientation=landscape',
      products: 2,
      color: 'green',
      link: '/products?category=electronics'
    },
    {
      id: 5,
      title: t('industrial'),
      description: t('industrialDesc'),
      icon: 'ri-factory-line',
      image: 'https://readdy.ai/api/search-image?query=industrial%20scrap%20heavy%20machinery%20equipment%20structural%20steel%20manufacturing%20waste%20metal%20recycling%20factory%20components%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=industrial-scrap-cat&orientation=landscape',
      products: 1,
      color: 'indigo',
      link: '/products?category=industrial'
    },
    {
      id: 6,
      title: t('cables'),
      description: t('cablesDesc'),
      icon: 'ri-plug-line',
      image: 'https://readdy.ai/api/search-image?query=copper%20cable%20insulated%20scrap%20electrical%20wires%20stripping%20copper%20recovery%20orange%20insulation%20cables%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=cable-wire-category&orientation=landscape',
      products: 2,
      color: 'yellow',
      link: '/products?category=cables'
    },
    {
      id: 7,
      title: t('paper'),
      description: t('paperDesc'),
      icon: 'ri-file-paper-line',
      image: 'https://readdy.ai/api/search-image?query=recycled%20paper%20cardboard%20rolls%20industrial%20paper%20mill%20recycling%20facility%20clean%20white%20paper%20materials%20sustainable%20processing%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=paper-category&orientation=landscape',
      products: 2,
      color: 'teal',
      link: '/products?category=paper'
    },
    {
      id: 8,
      title: t('fabric'),
      description: t('fabricDesc'),
      icon: 'ri-shirt-line',
      image: 'https://readdy.ai/api/search-image?query=textile%20fabric%20materials%20cotton%20polyester%20recycling%20industrial%20fabric%20processing%20colorful%20fabric%20rolls%20textile%20waste%20sorting%20clean%20background%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=textile-category&orientation=landscape',
      products: 2,
      color: 'pink',
      link: '/products?category=fabric'
    },
    {
      id: 9,
      title: t('machinery'),
      description: t('machineryDesc'),
      icon: 'ri-settings-3-line',
      image: 'https://readdy.ai/api/search-image?query=industrial%20machinery%20equipment%20manufacturing%20heavy%20machinery%20factory%20equipment%20resale%20scrap%20metal%20processing%20equipment%20clean%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=machinery-category&orientation=landscape',
      products: 2,
      color: 'gray',
      link: '/products?category=machinery'
    },
    {
      id: 10,
      title: t('wood'),
      description: t('woodDesc'),
      icon: 'ri-tree-line',
      image: 'https://readdy.ai/api/search-image?query=waste%20wood%20timber%20scraps%20wooden%20pallets%20construction%20wood%20materials%20recycling%20biomass%20fuel%20production%20clean%20wood%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=wood-category&orientation=landscape',
      products: 2,
      color: 'amber',
      link: '/products?category=wood'
    },
    {
      id: 11,
      title: t('plastic'),
      description: t('plasticDesc'),
      icon: 'ri-recycle-line',
      image: 'https://readdy.ai/api/search-image?query=plastic%20scrap%20HDPE%20PP%20PET%20PVC%20granulation%20recycling%20colorful%20plastic%20materials%20sorted%20plastic%20waste%20clean%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=plastic-category&orientation=landscape',
      products: 3,
      color: 'green',
      link: '/products?category=plastic'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-900 bg-blue-50 border-blue-200',
      orange: 'text-gray-600 bg-gray-50 border-gray-200',
      red: 'text-gray-600 bg-gray-50 border-gray-200',
      green: 'text-gray-600 bg-gray-50 border-gray-200',
      indigo: 'text-blue-900 bg-blue-50 border-blue-200',
      yellow: 'text-gray-600 bg-gray-50 border-gray-200',
      teal: 'text-gray-600 bg-gray-50 border-gray-200',
      pink: 'text-gray-600 bg-gray-50 border-gray-200',
      gray: 'text-gray-600 bg-gray-50 border-gray-200',
      amber: 'text-gray-600 bg-gray-50 border-gray-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('categoriesTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('categoriesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer" data-product-shop>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 p-3 rounded-lg border-2 ${getColorClasses(category.color)}`}>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className={`${category.icon} text-xl`}></i>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                  {category.products} {t('items')}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {category.description}
                </p>
                <Link 
                  href={category.link}
                  className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors cursor-pointer"
                >
                  {t('viewMaterials')}
                  <div className="w-4 h-4 flex items-center justify-center ml-1">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/products" 
            className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            {t('viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}
