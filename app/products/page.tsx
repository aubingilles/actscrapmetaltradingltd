
'use client';
import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductFilter from './ProductFilter';
import ProductGrid from './ProductGrid';

function ProductsContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Materials & Equipment</h1>
          <p className="text-gray-600">Discover quality scrap materials and machinery from verified sellers across the UK</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <ProductFilter 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              sortBy={sortBy}
              setSortBy={setSortBy}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </aside>
          
          <main className="flex-1">
            <ProductGrid 
              category={selectedCategory}
              sortBy={sortBy}
              priceRange={priceRange}
            />
          </main>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><div className="text-lg">Loading products...</div></div>}>
      <ProductsContent />
    </Suspense>
  );
}