'use client';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import { useLanguage } from '../../components/LanguageContext';
import { translateProductData } from '../../lib/translator';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function ProductContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [product, setProduct] = useState<any>(null);
  const [translatedProduct, setTranslatedProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { language, t } = useLanguage();

  useEffect(() => {
    if (!id) {
      setError(true);
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          console.error('Error fetching product:', error);
          // Fallback to mock data
          const mockProduct = getMockProduct(id);
          if (mockProduct) {
            setProduct(mockProduct);
          } else {
            setError(true);
          }
        } else {
          setProduct(data);
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Translate product when language changes
  useEffect(() => {
    if (product && language) {
      const run = async () => {
        try {
          const translated = await translateProductData(product, language);
          setTranslatedProduct(translated);
        } catch (error) {
          console.error('Translation error:', error);
          setTranslatedProduct(product);
        }
      };

      run();
    }
  }, [product, language]);

  const getMockProduct = (productId: string) => {
    const mockProducts = [
      {
        id: 1,
        name: 'HMS Scrap Auction by Factory',
        category: 'ferrous',
        description:
          'Heavy melting steel scrap grade 1, minimum 6mm thickness, ideal for steel mills and industrial recycling. This high-quality HMS scrap comes directly from factory operations, ensuring consistent quality and composition. Perfect for steel manufacturing and heavy industry applications.',
        image_url:
          'https://readdy.ai/api/search-image?query=heavy%20melting%20steel%20HMS%20scrap%20grade%201%20thick%20steel%20plates%20industrial%20metal%20recycling%20facility%20clean%20rusty%20steel%20materials%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture%20metallic%20surface&width=600&height=400&seq=hms-scrap-detail&orientation=landscape',
        rating: 4.8,
        location: 'Birmingham, UK',
        seller: 'Midlands Steel Recovery',
        verified: true,
        min_order: '10 tonnes',
        specifications: 'Grade 1 HMS, Min thickness 6mm, Low phosphorus content',
        composition: 'Iron: 95-98%, Carbon: 0.1-0.3%, Manganese: 0.3-0.8%',
        price: '£450/tonne',
      },
      {
        id: 2,
        name: 'Factory Metal MS Scrap for Sale',
        category: 'ferrous',
        description:
          'High-grade mild steel scrap from factory operations, perfect for re-rolling and steel manufacturing. Sourced from reliable industrial suppliers with consistent quality standards.',
        image_url:
          'https://readdy.ai/api/search-image?query=mild%20steel%20MS%20scrap%20factory%20operations%20industrial%20metal%20recycling%20clean%20steel%20materials%20manufacturing%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=600&height=400&seq=ms-scrap-detail&orientation=landscape',
        rating: 4.7,
        location: 'Sheffield, UK',
        seller: 'Sheffield Steel Works',
        verified: true,
        min_order: '8 tonnes',
        specifications: 'MS Grade, Low carbon content, Clean material',
        composition: 'Iron: 98-99%, Carbon: 0.05-0.25%',
        price: '£420/tonne',
      },
      {
        id: 3,
        name: 'Copper Millberry Wire Scrap Pure',
        category: 'non-ferrous',
        description:
          'Bright copper wire scrap, 99.9% pure, perfect for electrical industry applications and high conductivity needs. Clean, bright copper wire with no attachments.',
        image_url:
          'https://readdy.ai/api/search-image?query=bright%20copper%20wire%20millberry%20scrap%20pure%20copper%20electrical%20cables%20shiny%20copper%20materials%20high%20conductivity%20metal%20recycling%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=600&height=400&seq=copper-wire-detail&orientation=landscape',
        rating: 4.9,
        location: 'London, UK',
        seller: 'London Metal Traders',
        verified: true,
        min_order: '100 kg',
        specifications: 'Millberry Grade, 99.9% purity, No attachments',
        composition: 'Copper: 99.9%, Trace elements: 0.1%',
        price: '£7,200/tonne',
      },
    ];

    return mockProducts.find(p => p.id.toString() === productId);
  };

  if (!id) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('missingProductId')}</h1>
          <p className="text-gray-600 mb-6">{t('missingProductIdDesc')}</p>
          <Link
            href="/products"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
          >
            {t('browseProducts')}
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 flex items-center justify-center mx-auto mb-4">
            <i className="ri-loader-4-line animate-spin text-3xl text-blue-600"></i>
          </div>
          <p className="text-gray-600">{t('loadingProduct')}</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
            <i className="ri-error-warning-line text-2xl text-gray-400"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('productNotFound')}</h1>
          <p className="text-gray-600 mb-6">{t('productNotFoundDesc')}</p>
          <Link
            href="/products"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
          >
            {t('browseAllProducts')}
          </Link>
        </div>
      </div>
    );
  }

  // Use translated product if available, otherwise use original
  const displayProduct = translatedProduct || product;

  // Make this a string-indexed map so TS allows dynamic indexing.
  const categories: Record<string, string> = {
    'ferrous': t('ferrous'),
    'non-ferrous': t('nonFerrous'),
    'automotive': t('automotive'),
    'electronics': t('electronics'),
    'industrial': t('industrial'),
    'cables': t('cables'),
    'paper': t('paper'),
    'fabric': t('fabric'),
    'machinery': t('machinery'),
    'wood': t('wood'),
    'plastic': t('plastic'),
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600 cursor-pointer">
            {t('home')}
          </Link>
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-arrow-right-s-line"></i>
          </div>
          <Link href="/products" className="hover:text-blue-600 cursor-pointer">
            {t('products')}
          </Link>
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-arrow-right-s-line"></i>
          </div>
          <span className="text-gray-900">{displayProduct.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              {displayProduct.image_url ? (
                <img
                  src={displayProduct.image_url}
                  alt={displayProduct.name}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-full">
                    <i className="ri-image-line text-4xl text-gray-400"></i>
                  </div>
                </div>
              )}
            </div>

            {/* Category and Verification Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {categories[displayProduct.category as string] || displayProduct.category}
              </span>
              {displayProduct.verified && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-1">
                    <i className="ri-check-line"></i>
                  </div>
                  {t('verifiedSeller')}
                </span>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{displayProduct.name}</h1>
              {displayProduct.rating && (
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <div key={star} className="w-5 h-5 flex items-center justify-center">
                        <i
                          className={`ri-star-${
                            star <= Math.floor(displayProduct.rating) ? 'fill' : 'line'
                          } text-yellow-400`}
                        ></i>
                      </div>
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">
                    {displayProduct.rating} {t('outOf5')}
                  </span>
                </div>
              )}
            </div>

            {displayProduct.price && (
              <div className="text-2xl font-bold text-blue-900">{displayProduct.price}</div>
            )}

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">{displayProduct.description}</p>
            </div>

            {/* Product Information */}
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">{t('productInformation')}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {displayProduct.location && (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 flex items-center justify-center text-gray-500">
                      <i className="ri-map-pin-line"></i>
                    </div>
                    <span className="text-gray-600">{t('location')}:</span>
                    <span className="font-medium">{displayProduct.location}</span>
                  </div>
                )}

                {displayProduct.seller && (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 flex items-center justify-center text-gray-500">
                      <i className="ri-store-line"></i>
                    </div>
                    <span className="text-gray-600">{t('seller')}:</span>
                    <span className="font-medium">{displayProduct.seller}</span>
                  </div>
                )}

                {displayProduct.min_order && (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 flex items-center justify-center text-gray-500">
                      <i className="ri-package-line"></i>
                    </div>
                    <span className="text-gray-600">{t('minOrder')}:</span>
                    <span className="font-medium">{displayProduct.min_order}</span>
                  </div>
                )}

                {displayProduct.specifications && (
                  <div className="flex items-start space-x-2 sm:col-span-2">
                    <div className="w-5 h-5 flex items-center justify-center text-gray-500 mt-0.5">
                      <i className="ri-file-list-line"></i>
                    </div>
                    <span className="text-gray-600">{t('specifications')}:</span>
                    <span className="font-medium">{displayProduct.specifications}</span>
                  </div>
                )}

                {displayProduct.composition && (
                  <div className="flex items-start space-x-2 sm:col-span-2">
                    <div className="w-5 h-5 flex items-center justify-center text-gray-500 mt-0.5">
                      <i className="ri-flask-line"></i>
                    </div>
                    <span className="text-gray-600">{t('composition')}:</span>
                    <span className="font-medium">{displayProduct.composition}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors text-center whitespace-nowrap cursor-pointer"
              >
                {t('requestQuote')}
              </Link>
              <Link
                href="/contact"
                className="border border-blue-900 text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors text-center whitespace-nowrap cursor-pointer"
              >
                {t('contactSeller')}
              </Link>
            </div>

            {/* Additional Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex items-center justify-center text-blue-600 mt-0.5">
                  <i className="ri-information-line"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">{t('needHelp')}</h4>
                  <p className="text-blue-800 text-sm">{t('needHelpDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default function ProductPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-lg">Loading product...</div>
        </div>
      }
    >
      <ProductContent />
    </Suspense>
  );
}
