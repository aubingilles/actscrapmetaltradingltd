
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Initialise with an empty object to avoid type errors
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const { t } = useLanguage();

  const slides = [
    {
      image:
        'https://readdy.ai/api/search-image?query=ferrous%20steel%20metal%20scrap%20industrial%20recycling%20facility%20heavy%20melting%20steel%20HMS%20grade%20materials%20processing%20yard%20clean%20background%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=1200&height=800&seq=hero-ferrous-main&orientation=landscape',
      fallback:
        'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&h=800&fit=crop',
      title: t('ferrous'),
      subtitle: t('steelIronHms'),
    },
    {
      image:
        'https://readdy.ai/api/search-image?query=copper%20wire%20aluminum%20non-ferrous%20metal%20scrap%20bright%20shiny%20copper%20cables%20electrical%20recycling%20materials%20clean%20industrial%20background%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=1200&height=800&seq=hero-nonferrous-main&orientation=landscape',
      fallback:
        'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&h=800&fit=crop',
      title: t('nonFerrous'),
      subtitle: t('copperAluminum'),
    },
    {
      image:
        'https://readdy.ai/api/search-image?query=recycled%20paper%20cardboard%20rolls%20industrial%20paper%20mill%20recycling%20facility%20clean%20white%20paper%20materials%20sustainable%20processing%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=1200&height=800&seq=hero-paper-main&orientation=landscape',
      fallback:
        'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1200&h=800&fit=crop',
      title: t('paper'),
      subtitle: t('sustainableRecycling'),
    },
    {
      image:
        'https://readdy.ai/api/search-image?query=textile%20fabric%20materials%20cotton%20polyester%20recycling%20industrial%20fabric%20processing%20colorful%20fabric%20rolls%20textile%20waste%20sorting%20clean%20background%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=1200&height=800&seq=hero-textile-main&orientation=landscape',
      fallback:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
      title: t('fabric'),
      subtitle: t('fabricRecycling'),
    },
  ];

  // Automatic slide rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Mark an image as failed so its fallback is used
  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Sliding Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={imageErrors[index] ? slide.fallback : slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              onError={() => handleImageError(index)}
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="mb-6">
                <div className="text-lg font-semibold text-blue-200 mb-2 uppercase tracking-wide">
                  {slides[currentSlide].subtitle}
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {t('heroTitle')}
                </h1>
                <h2 className="text-4xl lg:text-5xl font-bold text-blue-300 mb-6">
                  {slides[currentSlide].title}
                </h2>
              </div>

              <p className="text-xl text-gray-200 mb-8 max-w-2xl">
                {t('heroSubtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/get-quote"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors text-center whitespace-nowrap cursor-pointer"
                >
                  {t('heroButton')}
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center whitespace-nowrap cursor-pointer"
                >
                  {t('heroSecondary')}
                </Link>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-200">{t('competitivePricing')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-200">{t('fastCollection')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-200">{t('licensedInsured')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-200">{t('ukTurkeyOps')}</span>
                </div>
              </div>
            </div>

            {/* Right Content - Material Categories */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {t('categoriesTitle')}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/products?category=ferrous"
                  className="group flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors mb-2">
                    <i className="ri-tools-line text-xl"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 text-center">
                    {t('ferrous')}
                  </span>
                </Link>

                <Link
                  href="/products?category=non-ferrous"
                  className="group flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors mb-2">
                    <i className="ri-copper-coin-line text-xl"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 text-center">
                    {t('nonFerrous')}
                  </span>
                </Link>

                <Link
                  href="/products?category=automotive"
                  className="group flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors mb-2">
                    <i className="ri-car-line text-xl"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 text-center">
                    {t('automotive')}
                  </span>
                </Link>

                <Link
                  href="/products?category=electronics"
                  className="group flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors mb-2">
                    <i className="ri-computer-line text-xl"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 text-center">
                    {t('electronics')}
                  </span>
                </Link>

                <Link
                  href="/products?category=paper"
                  className="group flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors mb-2">
                    <i className="ri-file-paper-line text-xl"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 text-center">
                    {t('paper')}
                  </span>
                </Link>

                <Link
                  href="/products?category=fabric"
                  className="group flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors mb-2">
                    <i className="ri-shirt-line text-xl"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 text-center">
                    {t('fabric')}
                  </span>
                </Link>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/products"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer inline-block"
                >
                  {t('viewAll')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer"
      >
        <i className="ri-arrow-left-line text-xl"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer"
      >
        <i className="ri-arrow-right-line text-xl"></i>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
