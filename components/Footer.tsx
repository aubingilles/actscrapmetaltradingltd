
'use client';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="https://static.readdy.ai/image/08885e5b09c86781257f7ab705ba4b0d/cd3d2d5d8c1a99c6e3cea67d0ae06622.png" 
                alt="ACT Scrap Metal Trading" 
                className="h-8 w-auto brightness-0 invert opacity-70"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {t('footerDescription')}
            </p>
            <div className="mb-4">
              <div className="flex items-center mb-2 text-sm text-gray-300">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span>44 F S ACCOUNTANTS LTD YORK STREET, CLITHEROE, ENGLAND BB7 2DL</span>
              </div>
              <div className="flex items-center mb-2 text-sm text-gray-300">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-phone-line"></i>
                </div>
                <span>{t('phone')}: +44 7367067827</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-whatsapp-line"></i>
                </div>
                <span>WhatsApp: +44 7367067827</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-facebook-fill text-xl"></i>
                </div>
              </a>
              <a href="#" className="text-gray-300 hover:text-white cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-twitter-fill text-xl"></i>
                </div>
              </a>
              <a href="#" className="text-gray-300 hover:text-white cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-linkedin-fill text-xl"></i>
                </div>
              </a>
              <a href="#" className="text-gray-300 hover:text-white cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-instagram-line text-xl"></i>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              <li><Link href="/services/scrap-collection" className="text-gray-400 hover:text-white cursor-pointer">{t('scrapCollection')}</Link></li>
              <li><Link href="/services/metal-processing" className="text-gray-400 hover:text-white cursor-pointer">{t('metalProcessing')}</Link></li>
              <li><Link href="/services/fair-pricing" className="text-gray-400 hover:text-white cursor-pointer">{t('fairPricing')}</Link></li>
              <li><Link href="/services/logistics" className="text-gray-400 hover:text-white cursor-pointer">{t('logistics')}</Link></li>
              <li><Link href="/services/consulting" className="text-gray-400 hover:text-white cursor-pointer">{t('consulting')}</Link></li>
              <li><Link href="/services/recycling" className="text-gray-400 hover:text-white cursor-pointer">{t('recycling')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white cursor-pointer">{t('about')}</Link></li>
              <li><Link href="/buy" className="text-gray-400 hover:text-white cursor-pointer">{t('buy')}</Link></li>
              <li><Link href="/sell" className="text-gray-400 hover:text-white cursor-pointer">{t('sell')}</Link></li>
              <li><Link href="/live-prices" className="text-gray-400 hover:text-white cursor-pointer">{t('livePrices')}</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-white cursor-pointer">{t('news')}</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white cursor-pointer">{t('contact')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                {t('turkeyOperations')}
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-300 hover:text-white text-sm cursor-pointer">{t('privacyPolicy')}</Link>
              <Link href="/terms-conditions" className="text-gray-300 hover:text-white text-sm cursor-pointer">{t('termsConditions')}</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white text-sm cursor-pointer">{t('support')}</Link>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-300 text-sm">
              {t('copyrightText')} {t('rightsReserved')} {t('copyrightSuffix')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
