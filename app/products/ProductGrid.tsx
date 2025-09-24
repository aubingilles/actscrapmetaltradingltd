'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';

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
    try {
      let query = supabase.from('products').select('*');

      if (category !== 'all') {
        query = query.eq('category', category);
      }

      switch (sortBy) {
        case 'newest':
          query = query.order('created_at', { ascending: false });
          break;
        case 'rating':
          query = query.order('rating', { ascending: false });
          break;
        case 'alphabetical':
          query = query.order('name', { ascending: true });
          break;
        default:
          query = query.order('created_at', { ascending: false });
      }

      const { data, error } = await query;

      if (error) throw error;

      // Optional client-side price filter if you decide to use priceRange later
      const typed = (data as Product[]) ?? [];
      setProducts(typed);
    } catch (error) {
      console.error('Error fetching products:', error);
      const mockProducts = getMockProducts();
      const filteredMockProducts =
        category === 'all' ? mockProducts : mockProducts.filter(p => p.category === category);
      setProducts(filteredMockProducts);
    } finally {
      setIsLoading(false);
    }
  };

  const getMockProducts = (): Product[] => {
    return [
      {
        id: 1,
        name: 'HMS Scrap Auction by Factory',
        slug: 'hms-scrap-auction-by-factory',
        category: 'ferrous',
        description:
          'Heavy melting steel scrap grade 1, minimum 6mm thickness, ideal for steel mills and industrial recycling.',
        image_url:
          'https://readdy.ai/api/search-image?query=heavy%20melting%20steel%20HMS%20scrap%20grade%201%20thick%20steel%20plates%20industrial%20metal%20recycling%20facility%20clean%20rusty%20steel%20materials%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=hms-scrap-grid&orientation=landscape',
        rating: 4.8,
        location: 'Birmingham, UK',
        seller: 'Midlands Steel Recovery',
        verified: true,
        min_order: '10 tonnes',
      },
      {
        id: 2,
        name: 'Factory Metal MS Scrap for Sale',
        slug: 'factory-metal-ms-scrap-for-sale',
        category: 'ferrous',
        description:
          'High-grade mild steel scrap from factory operations, perfect for re-rolling and steel manufacturing.',
        image_url:
          'https://readdy.ai/api/search-image?query=mild%20steel%20MS%20scrap%20factory%20operations%20industrial%20metal%20recycling%20clean%20steel%20materials%20manufacturing%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=ms-scrap-grid&orientation=landscape',
        rating: 4.7,
        location: 'Sheffield, UK',
        seller: 'Sheffield Steel Works',
        verified: true,
        min_order: '8 tonnes',
      },
      {
        id: 3,
        name: 'Stainless Steel 316 Industrial Grade',
        slug: 'stainless-steel-316-industrial-grade',
        category: 'ferrous',
        description:
          'High-grade stainless steel 316 scrap from food processing and chemical industries with excellent corrosion resistance.',
        image_url:
          'https://readdy.ai/api/search-image?query=stainless%20steel%20316%20scrap%20food%20processing%20chemical%20industry%20shiny%20silver%20metal%20industrial%20recycling%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=stainless-steel-316&orientation=landscape',
        rating: 4.9,
        location: 'London, UK',
        seller: 'Premium Steel Traders',
        verified: true,
        min_order: '250 kg',
      },
      {
        id: 4,
        name: 'Copper Millberry Wire Scrap Pure',
        slug: 'copper-millberry-wire-scrap-pure',
        category: 'non-ferrous',
        description:
          'Bright copper wire scrap, 99.9% pure, perfect for electrical industry applications and high conductivity needs.',
        image_url:
          'https://readdy.ai/api/search-image?query=bright%20copper%20wire%20millberry%20scrap%20pure%20copper%20electrical%20cables%20shiny%20copper%20materials%20high%20conductivity%20metal%20recycling%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=copper-millberry-grid&orientation=landscape',
        rating: 4.9,
        location: 'London, UK',
        seller: 'London Metal Traders',
        verified: true,
        min_order: '100 kg',
      },
      // ... (remaining mock items unchanged)
    ];
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
                {categories[product.category] || product.category}
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
