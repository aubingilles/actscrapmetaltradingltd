
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from './LanguageContext';

export default function FeaturedProducts() {
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      name: 'Brown PP Granules <5% Filler',
      category: t('plastic'),
      description: 'High-quality brown polypropylene granules with less than 5% filler content, perfect for manufacturing new plastic products.',
      image: 'https://readdy.ai/api/search-image?query=brown%20polypropylene%20plastic%20granules%20PP%20pellets%20manufacturing%20grade%20clean%20sorted%20plastic%20recycling%20materials%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=pp-granules-main&orientation=landscape',
      fallback: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop',
      features: [t('highGradeQuality'), t('cleanSorted'), t('bulkAvailable'), t('fastDelivery')],
      popular: true,
      rating: 4.8,
      location: 'Gujarat, UK'
    },
    {
      id: 2,
      name: 'HMS Scrap Auction by Factory',
      category: t('ferrous'),
      description: 'Heavy melting steel scrap grade 1, minimum 6mm thickness, ideal for steel mills and industrial recycling.',
      image: 'https://readdy.ai/api/search-image?query=heavy%20melting%20steel%20HMS%20scrap%20grade%201%20thick%20steel%20plates%20industrial%20metal%20recycling%20facility%20clean%20rusty%20steel%20materials%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=hms-scrap-main&orientation=landscape',
      fallback: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop',
      features: [t('grade12'), t('industrialGrade'), t('bulkOrders'), t('certifiedQuality')],
      popular: false,
      rating: 4.9,
      location: 'Birmingham, UK'
    },
    {
      id: 3,
      name: 'Copper Millberry Wire Scrap Pure',
      category: t('nonFerrous'),
      description: 'Bright copper wire scrap, 99.9% pure, perfect for electrical industry applications and high conductivity needs.',
      image: 'https://readdy.ai/api/search-image?query=bright%20copper%20wire%20millberry%20scrap%20pure%20copper%20electrical%20cables%20shiny%20copper%20materials%20high%20conductivity%20metal%20recycling%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=copper-wire-main&orientation=landscape',
      fallback: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop',
      features: [t('pureCopper'), t('insulationFree'), t('premiumGrade'), t('instantQuote')],
      popular: false,
      rating: 4.7,
      location: 'London, UK'
    },
    {
      id: 4,
      name: 'HDPE Next to Virgin Grade',
      category: t('plastic'),
      description: 'Premium HDPE plastic material with near-virgin quality, excellent for high-grade manufacturing applications.',
      image: 'https://readdy.ai/api/search-image?query=HDPE%20plastic%20pellets%20virgin%20grade%20white%20plastic%20granules%20high%20density%20polyethylene%20recycling%20materials%20clean%20sorted%20plastic%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=hdpe-virgin-main&orientation=landscape',
      fallback: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      features: [t('cleanSorted'), t('virginGrade'), t('compressedBales'), t('regularSupply')],
      popular: true,
      rating: 4.6,
      location: 'Manchester, UK'
    },
    {
      id: 5,
      name: 'Silicon Coated Paper Rolls',
      category: t('paper'),
      description: 'High-quality silicon coated paper rolls from industrial printing operations, excellent for recycling applications.',
      image: 'https://readdy.ai/api/search-image?query=silicon%20coated%20paper%20rolls%20industrial%20printing%20paper%20white%20glossy%20paper%20materials%20recycling%20facility%20clean%20paper%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=paper-rolls-main&orientation=landscape',
      fallback: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop',
      features: [t('mixedGrade'), t('dryCondition'), t('bulkAvailable'), t('regularSupply')],
      popular: false,
      rating: 4.5,
      location: 'London, UK'
    },
    {
      id: 6,
      name: 'Plastic Granules Mixer Machine',
      category: t('machinery'),
      description: 'Industrial plastic granules mixing machine in working condition, suitable for plastic manufacturing operations.',
      image: 'https://readdy.ai/api/search-image?query=industrial%20plastic%20granules%20mixer%20machine%20manufacturing%20equipment%20plastic%20processing%20machinery%20factory%20equipment%20clean%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=mixer-machine-main&orientation=landscape',
      fallback: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      features: [t('workingCondition'), t('serviceAvailable'), t('installationHelp'), t('warrantyOptions')],
      popular: false,
      rating: 4.8,
      location: 'Sheffield, UK'
    }
  ];

  const handleImageError = (productId: number) => {
    setImageErrors(prev => ({ ...prev, [productId]: true }));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('featuredProducts')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('featuredSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group" data-product-shop>
              {product.popular && (
                <div className="bg-gradient-to-r from-blue-900 to-gray-600 text-white text-center py-2 text-sm font-semibold">
                  {t('mostPopular')}
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <img 
                  src={imageErrors[product.id] ? product.fallback : product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  onError={() => handleImageError(product.id)}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                  {product.category}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center bg-black/70 text-white px-2 py-1 rounded text-xs">
                  <div className="w-3 h-3 flex items-center justify-center mr-1">
                    <i className="ri-map-pin-line text-xs"></i>
                  </div>
                  {product.location}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 flex-1 pr-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-sm">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-yellow-400"></i>
                    </div>
                    <span className="text-gray-600 font-medium">{product.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="bg-purple-50 text-purple-600 px-2 py-1 rounded-md text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 2 && (
                      <span className="bg-gray-50 text-gray-500 px-2 py-1 rounded-md text-xs font-medium">
                        +{product.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-center">
                  <Link 
                    href={{ pathname: '/product', query: { id: product.id } }}
                    className="bg-blue-900 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors whitespace-nowrap cursor-pointer mr-4"
                  >
                    {t('viewDetails')}
                  </Link>
                  <Link 
                    href="/get-quote" 
                    className="border border-blue-900 text-blue-900 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {t('getQuote')}
                  </Link>
                </div>
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
