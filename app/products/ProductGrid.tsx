'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase, normalizeCategory, errorMessage, PUBLIC_PRODUCT_COLUMNS } from '../../lib/supabase';
import { handleImageError } from '../../lib/images';

interface Product {
  id: string | number;
  name: string;
  slug?: string;
  category: string;
  description?: string;
  image_url?: string;
  rating?: number;
  location?: string;
  seller?: string;
  verified?: boolean;
  min_order?: string;
  created_at?: string;
}

interface ProductGridProps {
  category: string;
  sortBy: 'newest' | 'rating' | 'alphabetical' | string;
  priceRange: number[];
}

export default function ProductGrid({ category, sortBy, priceRange }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  const categories: Record<string, string> = {
    'ferrous': 'Ferrous',
    'non-ferrous': 'Non-Ferrous',
    'automotive': 'Automotive',
    'electronics': 'Electronics',
    'industrial': 'Industrial',
    'cables': 'Cables',
    'paper': 'Paper',
    'fabric': 'Fabric & Textile',
    'machinery': 'Machinery',
    'wood': 'Wood & Timber',
    'plastic': 'Plastic',
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sortBy, JSON.stringify(priceRange)]); // include priceRange so it refetches when changed

  const fetchProducts = async () => {
    setIsLoading(true);
    setLoadError('');
    try {
      const { data, error } = await supabase
        .from('products')
        .select(PUBLIC_PRODUCT_COLUMNS)
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Filter on the client so stored values like "Ferrous" or "non ferrous" still match.
      const all = (data as Product[]) ?? [];
      setProducts(
        category === 'all' ? all : all.filter(p => normalizeCategory(p.category) === category)
      );
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
      setLoadError(errorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  const nameToSlug = (name: string) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return (b.rating ?? 0) - (a.rating ?? 0);
      case 'newest':
        return (
          new Date(b.created_at ?? b.id as number).getTime() -
          new Date(a.created_at ?? a.id as number).getTime()
        );
      case 'alphabetical':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="w-8 h-8 flex items-center justify-center mx-auto mb-4">
          <i className="ri-loader-4-line animate-spin text-2xl text-purple-600"></i>
        </div>
        <p className="text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-red-50 rounded-full">
          <i className="ri-error-warning-line text-2xl text-red-500"></i>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Products could not be loaded</h3>
        <p className="text-gray-500 mb-4">{loadError}</p>
        <button
          onClick={fetchProducts}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 cursor-pointer"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          Showing {sortedProducts.length} products
          {category !== 'all' && <span> in {categories[category] || 'this category'}</span>}
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-grid-line"></i>
          </div>
          <span>Grid View</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {sortedProducts.map((product: Product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            data-product-shop
          >
            <div className="relative h-48 overflow-hidden">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                  alt={product.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full">
                    <i className="ri-image-line text-2xl text-gray-400"></i>
                  </div>
                </div>
              )}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-700">
                {categories[normalizeCategory(product.category)] || product.category}
              </div>
              {product.verified && (
                <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center">
                  <div className="w-3 h-3 flex items-center justify-center mr-1">
                    <i className="ri-check-line text-xs"></i>
                  </div>
                  Verified
                </div>
              )}
              {product.min_order && (
                <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  Min: {product.min_order}
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-2 line-clamp-1">
                  {product.name}
                </h3>
                {product.rating && (
                  <div className="flex items-center space-x-1 text-sm">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-yellow-400"></i>
                    </div>
                    <span className="text-gray-600 font-medium">{product.rating}</span>
                  </div>
                )}
              </div>

              {product.description && (
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              )}

              <div className="flex items-center text-sm text-gray-500 mb-4">
                {product.location && (
                  <>
                    <div className="w-4 h-4 flex items-center justify-center mr-1">
                      <i className="ri-map-pin-line"></i>
                    </div>
                    <span className="mr-3">{product.location}</span>
                  </>
                )}
                {product.seller && (
                  <>
                    <div className="w-4 h-4 flex items-center justify-center mr-1">
                      <i className="ri-store-line"></i>
                    </div>
                    <span>{product.seller}</span>
                  </>
                )}
              </div>

              <div className="flex justify-between items-center">
                <Link
                  href={{ pathname: '/product', query: { id: product.id } }}
                  className="text-purple-600 hover:text-purple-800 text-sm font-medium cursor-pointer"
                >
                  View Details
                </Link>
                <Link
                  href="/get-quote"
                  className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
            <i className="ri-search-line text-2xl text-gray-400"></i>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your filters or search criteria.</p>
        </div>
      )}
    </div>
  );
}
