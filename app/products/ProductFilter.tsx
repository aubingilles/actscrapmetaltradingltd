
'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

interface ProductFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
}

export default function ProductFilter({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  priceRange,
  setPriceRange
}: ProductFilterProps) {
  const [categoryCounts, setCategoryCounts] = useState<{[key: string]: number}>({});
  const [totalCount, setTotalCount] = useState(0);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'ferrous', name: 'Ferrous Metals' },
    { id: 'non-ferrous', name: 'Non-Ferrous Metals' },
    { id: 'automotive', name: 'Automotive Scrap' },
    { id: 'electronics', name: 'Electronic Waste' },
    { id: 'industrial', name: 'Industrial Scrap' },
    { id: 'cables', name: 'Cable & Wire Scrap' },
    { id: 'paper', name: 'Paper & Cardboard' },
    { id: 'fabric', name: 'Fabric & Textile' },
    { id: 'machinery', name: 'Machinery & Equipment' },
    { id: 'wood', name: 'Wood & Timber' },
    { id: 'plastic', name: 'Plastic Scrap' }
  ];

  const locations = [
    'London',
    'Birmingham', 
    'Manchester',
    'Leeds',
    'Glasgow',
    'Cardiff',
    'Liverpool',
    'Sheffield'
  ];

  useEffect(() => {
    fetchCategoryCounts();
  }, []);

  const fetchCategoryCounts = async () => {
    try {
      // Get total count
      const { count: total, error: totalError } = await supabase
        .from('products')
        .select('*', { count: 'exact', head: true });

      if (totalError) throw totalError;
      setTotalCount(total || 0);

      // Get counts by category
      const counts: {[key: string]: number} = {};
      
      for (const category of categories) {
        if (category.id === 'all') continue;
        
        const { count, error } = await supabase
          .from('products')
          .select('*', { count: 'exact', head: true })
          .eq('category', category.id);

        if (error) throw error;
        counts[category.id] = count || 0;
      }

      setCategoryCounts(counts);
    } catch (error) {
      console.error('Error fetching category counts:', error);
      // Fallback to mock data if database fails
      const mockCounts = {
        'ferrous': 3,
        'non-ferrous': 3,
        'automotive': 2,
        'electronics': 2,
        'industrial': 1,
        'cables': 2,
        'paper': 2,
        'fabric': 2,
        'machinery': 2,
        'wood': 2,
        'plastic': 3
      };
      setCategoryCounts(mockCounts);
      setTotalCount(24);
    }
  };

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return totalCount;
    return categoryCounts[categoryId] || 0;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Products</h3>
      
      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-purple-50 text-purple-700 border border-purple-200'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex justify-between items-center">
                <span>{category.name}</span>
                <span className="text-xs text-gray-500">({getCategoryCount(category.id)})</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Sort By</h4>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm cursor-pointer pr-8"
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest First</option>
          <option value="rating">Highest Rated</option>
          <option value="alphabetical">A-Z</option>
        </select>
      </div>

      {/* Location */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Location</h4>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {locations.map((location) => (
            <label key={location} className="flex items-center cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-purple-600 mr-2 cursor-pointer" />
              <span className="text-sm text-gray-600">{location}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset Filters */}
      <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer">
        Reset All Filters
      </button>
    </div>
  );
}
