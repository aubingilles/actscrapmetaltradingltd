'use client';
import { useState, useEffect } from 'react';

export default function LivePricesPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const now = new Date();
    setLastUpdated(now.toLocaleString('en-GB', {
      day: '2-digit',
      month: 'long', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }));
  }, []);

  const metalPrices = [
    { material: 'Copper Wire Scrap #1', price: '£6.80-7.20', unit: 'kg', trend: 'up', change: '+2.5%' },
    { material: 'Copper Cable Scrap', price: '£6.20-6.60', unit: 'kg', trend: 'up', change: '+1.8%' },
    { material: 'Aluminium Extrusion', price: '£1.40-1.60', unit: 'kg', trend: 'stable', change: '0%' },
    { material: 'Aluminium Cans', price: '£0.85-1.05', unit: 'kg', trend: 'down', change: '-0.5%' },
    { material: 'Steel HMS 1', price: '£280-320', unit: 'tonne', trend: 'up', change: '+3.2%' },
    { material: 'Steel HMS 2', price: '£240-280', unit: 'tonne', trend: 'up', change: '+2.8%' },
    { material: 'Stainless Steel 316', price: '£3.20-3.60', unit: 'kg', trend: 'stable', change: '+0.2%' },
    { material: 'Brass Yellow', price: '£4.20-4.60', unit: 'kg', trend: 'up', change: '+1.5%' },
    { material: 'Lead Battery Scrap', price: '£1.80-2.10', unit: 'kg', trend: 'down', change: '-1.2%' },
    { material: 'Zinc Die Cast', price: '£2.40-2.70', unit: 'kg', trend: 'stable', change: '+0.3%' }
  ];

  const regionalPrices = [
    { region: 'London', copper: '£7.20', aluminium: '£1.60', steel: '£320', updated: '2 hours ago' },
    { region: 'Birmingham', copper: '£7.10', aluminium: '£1.55', steel: '£315', updated: '3 hours ago' },
    { region: 'Manchester', copper: '£7.05', aluminium: '£1.50', steel: '£310', updated: '1 hour ago' },
    { region: 'Leeds', copper: '£6.95', aluminium: '£1.45', steel: '£305', updated: '4 hours ago' },
    { region: 'Glasgow', copper: '£6.90', aluminium: '£1.40', steel: '£300', updated: '2 hours ago' },
    { region: 'Cardiff', copper: '£7.00', aluminium: '£1.50', steel: '£310', updated: '5 hours ago' }
  ];

  const getTrendIcon = (trend: string) => {
    switch(trend) {
      case 'up': return 'ri-arrow-up-line text-green-500';
      case 'down': return 'ri-arrow-down-line text-red-500';
      default: return 'ri-subtract-line text-gray-500';
    }
  };

  const getTrendColor = (trend: string) => {
    switch(trend) {
      case 'up': return 'text-green-600 bg-green-50';
      case 'down': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Live Scrap Metal Prices
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Real-time pricing updates for UK scrap metal markets
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-time-line"></i>
              </div>
              <span>Last updated: {lastUpdated}</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Market Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-4">
                <i className="ri-copper-coin-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Copper</h3>
              <div className="text-2xl font-bold text-orange-600">£7.00</div>
              <div className="text-sm text-green-600 flex items-center justify-center mt-1">
                <div className="w-4 h-4 flex items-center justify-center mr-1">
                  <i className="ri-arrow-up-line"></i>
                </div>
                +2.1%
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
                <i className="ri-subtract-line text-2xl text-gray-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Aluminium</h3>
              <div className="text-2xl font-bold text-gray-600">£1.55</div>
              <div className="text-sm text-gray-500 flex items-center justify-center mt-1">
                <div className="w-4 h-4 flex items-center justify-center mr-1">
                  <i className="ri-subtract-line"></i>
                </div>
                0%
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className="ri-tools-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Steel</h3>
              <div className="text-2xl font-bold text-blue-600">£310</div>
              <div className="text-sm text-green-600 flex items-center justify-center mt-1">
                <div className="w-4 h-4 flex items-center justify-center mr-1">
                  <i className="ri-arrow-up-line"></i>
                </div>
                +3.0%
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full mx-auto mb-4">
                <i className="ri-medal-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Brass</h3>
              <div className="text-2xl font-bold text-yellow-600">£4.40</div>
              <div className="text-sm text-green-600 flex items-center justify-center mt-1">
                <div className="w-4 h-4 flex items-center justify-center mr-1">
                  <i className="ri-arrow-up-line"></i>
                </div>
                +1.5%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Detailed Price Table */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Market Prices</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Material</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price Range</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Unit</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">24h Change</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Trend</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {metalPrices.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.material}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-semibold">{item.price}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">per {item.unit}</td>
                        <td className="px-6 py-4 text-sm">
                          <span className={`px-2 py-1 rounded-md text-xs font-medium ${getTrendColor(item.trend)}`}>
                            {item.change}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="w-5 h-5 flex items-center justify-center">
                            <i className={`${getTrendIcon(item.trend)} text-lg`}></i>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Regional Prices */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Regional Price Comparison</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionalPrices.map((region, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{region.region}</h3>
                    <span className="text-xs text-gray-500">{region.updated}</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Copper (kg)</span>
                      <span className="text-sm font-semibold text-orange-600">{region.copper}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Aluminium (kg)</span>
                      <span className="text-sm font-semibold text-gray-600">{region.aluminium}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Steel (tonne)</span>
                      <span className="text-sm font-semibold text-blue-600">{region.steel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Insights */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Market Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg mb-4">
                  <i className="ri-line-chart-line text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Rising Copper Demand</h3>
                <p className="text-sm text-white/80">Electric vehicle production driving copper prices up 15% this quarter.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg mb-4">
                  <i className="ri-recycle-line text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Steel Recycling Boom</h3>
                <p className="text-sm text-white/80">Construction sector recovery boosting steel scrap demand across UK.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg mb-4">
                  <i className="ri-global-line text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Export Opportunities</h3>
                <p className="text-sm text-white/80">Strong European demand creating premium pricing for quality grades.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Trade?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get competitive quotes for your scrap metal today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors text-center whitespace-nowrap cursor-pointer"
              >
                Get Quote Now
              </a>
              <a 
                href="tel:+447367067827" 
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors text-center whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-phone-line"></i>
                </div>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}