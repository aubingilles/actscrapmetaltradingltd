
'use client';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          {t('ctaTitle')}
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          {t('ctaSubtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/get-quote" 
            className="bg-gray-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-400 transition-colors whitespace-nowrap cursor-pointer"
          >
            {t('ctaButton')}
          </Link>
          <Link 
            href="/products" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors whitespace-nowrap cursor-pointer"
          >
            {t('viewAll')}
          </Link>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-blue-200">
          <div className="flex items-center">
            <div className="w-4 h-4 flex items-center justify-center mr-2">
              <i className="ri-check-line text-green-400"></i>
            </div>
            <span>{t('freeQuotes')}</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 flex items-center justify-center mr-2">
              <i className="ri-check-line text-green-400"></i>
            </div>
            <span>{t('verifiedBuyers')}</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 flex items-center justify-center mr-2">
              <i className="ri-check-line text-green-400"></i>
            </div>
            <span>{t('secureTransactions')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
