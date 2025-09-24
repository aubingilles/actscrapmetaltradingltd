
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer">
              <img 
                src="https://static.readdy.ai/image/08885e5b09c86781257f7ab705ba4b0d/cd3d2d5d8c1a99c6e3cea67d0ae06622.png" 
                alt="ACT Scrap Metal Trading" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium cursor-pointer">
              {t('home')}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 font-medium cursor-pointer">
              {t('about')}
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-purple-600 font-medium cursor-pointer">
              {t('services')}
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-purple-600 font-medium cursor-pointer">
              {t('products')}
            </Link>
            <Link href="/live-prices" className="text-gray-700 hover:text-purple-600 font-medium cursor-pointer">
              {t('livePrices')}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 font-medium cursor-pointer">
              {t('contact')}
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Link href="/get-quote" className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 whitespace-nowrap cursor-pointer">
              {t('getQuote')}
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-900 p-2 cursor-pointer"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={isMenuOpen ? 'ri-close-line text-xl' : 'ri-menu-line text-xl'}></i>
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium cursor-pointer">
                {t('home')}
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium cursor-pointer">
                {t('about')}
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium cursor-pointer">
                {t('services')}
              </Link>
              <Link href="/live-prices" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium cursor-pointer">
                {t('livePrices')}
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium cursor-pointer">
                {t('products')}
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium cursor-pointer">
                {t('contact')}
              </Link>
              <div className="border-t border-gray-200 pt-2 mt-2 flex flex-col space-y-2">
                <div className="px-3">
                  <LanguageSelector />
                </div>
                <Link href="/get-quote" className="w-full bg-blue-900 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 mt-2 cursor-pointer block text-center">
                  {t('getQuote')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
