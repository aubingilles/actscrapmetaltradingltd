'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function BuyScrapPage() {
  const materialTypes = [
    {
      id: 1,
      name: 'Ferrous Metals',
      description: 'Steel, iron, HMS scrap - high demand materials',
      icon: 'ri-tools-line',
      priceRange: '£150-300/tonne'
    },
    {
      id: 2,
      name: 'Non-Ferrous Metals',
      description: 'Copper, aluminum, brass - premium prices',
      icon: 'ri-copper-coin-line',
      priceRange: '£4,000-8,000/tonne'
    },
    {
      id: 3,
      name: 'Electronic Waste',
      description: 'Circuit boards, cables, precious metals',
      icon: 'ri-computer-line',
      priceRange: '£500-2,000/tonne'
    },
    {
      id: 4,
      name: 'Automotive Scrap',
      description: 'Car parts, catalytic converters, batteries',
      icon: 'ri-car-line',
      priceRange: '£100-500/tonne'
    },
    {
      id: 5,
      name: 'Cable & Wire',
      description: 'Insulated cables, copper wires',
      icon: 'ri-plug-line',
      priceRange: '£2,000-5,000/tonne'
    },
    {
      id: 6,
      name: 'Industrial Scrap',
      description: 'Heavy machinery, structural steel',
      icon: 'ri-factory-line',
      priceRange: '£200-800/tonne'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              We Buy All Types of Scrap Materials
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get the best prices for your scrap materials. We offer competitive rates, fast collection, and reliable payment for all types of recyclable materials across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/get-quote" 
                className="bg-gray-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-400 transition-colors whitespace-nowrap cursor-pointer"
              >
                Get Instant Quote
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors whitespace-nowrap cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Material Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Materials We Purchase
            </h2>
            <p className="text-xl text-gray-600">
              Competitive pricing for all types of scrap materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materialTypes.map((material) => (
              <div key={material.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                      <i className={`${material.icon} text-xl`}></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{material.name}</h3>
                    <p className="text-gray-600 text-sm">{material.description}</p>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Current Price Range:</span>
                    <span className="font-bold text-green-600">{material.priceRange}</span>
                  </div>
                </div>
                <Link 
                  href="/get-quote" 
                  className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              Easy and hassle-free way to sell your scrap materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 flex items-center justify-center text-blue-600">
                  <i className="ri-phone-line text-xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Contact Us</h3>
              <p className="text-gray-600">Call or submit online quote request with material details</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 flex items-center justify-center text-blue-600">
                  <i className="ri-calculator-line text-xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Get Quote</h3>
              <p className="text-gray-600">Receive competitive pricing based on current market rates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 flex items-center justify-center text-blue-600">
                  <i className="ri-truck-line text-xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Collection</h3>
              <p className="text-gray-600">We arrange pickup at your convenient time and location</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 flex items-center justify-center text-blue-600">
                  <i className="ri-money-pound-circle-line text-xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Get Paid</h3>
              <p className="text-gray-600">Fast payment upon collection and weighing verification</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Sell Your Scrap?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the best prices for your materials. Contact us today for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-quote" 
              className="bg-gray-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-400 transition-colors whitespace-nowrap cursor-pointer"
            >
              Get Quote Now
            </Link>
            <a 
              href="tel:+447367067827" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors whitespace-nowrap cursor-pointer"
            >
              Call: +44 7367067827
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}