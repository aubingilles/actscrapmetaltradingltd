'use client';
import Link from 'next/link';

export default function FairPricingPage() {
  const pricingPrinciples = [
    {
      title: 'Market-Based Rates',
      description: 'Prices based on real-time commodity market data',
      details: ['London Metal Exchange (LME) rates', 'Daily price updates', 'Regional market adjustments', 'Quality-based premiums'],
      icon: 'ri-line-chart-line'
    },
    {
      title: 'Transparent Assessment',
      description: 'Clear, honest evaluation of your materials',
      details: ['Professional material testing', 'Detailed grade analysis', 'Written assessment reports', 'No hidden deductions'],
      icon: 'ri-search-eye-line'
    },
    {
      title: 'Competitive Pricing',
      description: 'Industry-leading rates for all material types',
      details: ['Regular competitor analysis', 'Price match guarantees', 'Volume-based bonuses', 'Loyalty rewards'],
      icon: 'ri-trophy-line'
    },
    {
      title: 'No Hidden Fees',
      description: 'Complete transparency in all transactions',
      details: ['No processing fees', 'No handling charges', 'Clear payment terms', 'Detailed invoicing'],
      icon: 'ri-shield-check-line'
    }
  ];

  const currentPrices = [
    { material: 'Copper Wire #1', price: '£7,450', unit: 'per tonne', trend: 'up', change: '+2.3%' },
    { material: 'Aluminium Sheet', price: '£1,680', unit: 'per tonne', trend: 'up', change: '+1.8%' },
    { material: 'Steel HMS 1&2', price: '£285', unit: 'per tonne', trend: 'stable', change: '0.0%' },
    { material: 'Brass (Yellow)', price: '£5,120', unit: 'per tonne', trend: 'up', change: '+1.5%' },
    { material: 'Stainless Steel 316', price: '£3,240', unit: 'per tonne', trend: 'down', change: '-0.8%' },
    { material: 'Lead Batteries', price: '£980', unit: 'per tonne', trend: 'up', change: '+0.5%' }
  ];

  const pricingProcess = [
    {
      step: 1,
      title: 'Material Inspection',
      description: 'Professional assessment of material type, grade, and quality',
      icon: 'ri-search-line'
    },
    {
      step: 2,
      title: 'Market Rate Check',
      description: 'Real-time verification against current commodity prices',
      icon: 'ri-refresh-line'
    },
    {
      step: 3,
      title: 'Quote Generation',
      description: 'Transparent quote with detailed breakdown and terms',
      icon: 'ri-file-text-line'
    },
    {
      step: 4,
      title: 'Price Guarantee',
      description: 'Locked-in pricing valid for agreed collection period',
      icon: 'ri-shield-check-line'
    }
  ];

  return (
    <>
      <div className="bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-purple-600 cursor-pointer">Home</Link>
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-right-s-line"></i>
              </div>
              <Link href="/services" className="hover:text-purple-600 cursor-pointer">Services</Link>
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-right-s-line"></i>
              </div>
              <span className="text-gray-900">Fair Pricing</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Fair & Transparent Pricing</h1>
                <p className="text-xl text-blue-100 mb-8">
                  Competitive rates based on current market values with complete transparency and no hidden fees
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/live-prices"
                    className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap text-center"
                  >
                    View Live Prices
                  </Link>
                  <Link
                    href="/get-quote"
                    className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap text-center"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
              <div className="lg:pl-8">
                <img
                  src="https://readdy.ai/api/search-image?query=fair%20pricing%20transparency%20financial%20documents%20calculator%20money%20pounds%20sterling%20UK%20currency%20market%20rates%20professional%20business%20office%20modern%20desk%20charts%20graphs%20clean%20background&width=600&height=400&seq=pricing-hero&orientation=landscape"
                  alt="Fair Pricing"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Principles */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Pricing Principles</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Built on transparency, fairness, and market-leading rates
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pricingPrinciples.map((principle, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mb-4">
                    <i className={`${principle.icon} text-2xl text-green-600`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-gray-600 mb-4">{principle.description}</p>
                  <ul className="space-y-2">
                    {principle.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-check-line text-green-500"></i>
                        </div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Prices */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Market Prices</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Live pricing updated daily based on London Metal Exchange rates
              </p>
              <p className="text-sm text-gray-500 mt-2" suppressHydrationWarning={true}>
                Last updated: {new Date().toLocaleDateString('en-GB')} at {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 divide-y divide-gray-200">
                {currentPrices.map((item, index) => (
                  <div key={index} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{item.material}</h3>
                      <p className="text-sm text-gray-600">{item.unit}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{item.price}</div>
                        <div className={`flex items-center text-sm ${
                          item.trend === 'up' ? 'text-green-600' : 
                          item.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                        }`}>
                          <div className="w-4 h-4 flex items-center justify-center mr-1">
                            <i className={`${
                              item.trend === 'up' ? 'ri-arrow-up-line' : 
                              item.trend === 'down' ? 'ri-arrow-down-line' : 'ri-minus-line'
                            }`}></i>
                          </div>
                          {item.change}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/live-prices"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                View All Live Prices
              </Link>
            </div>
          </div>
        </div>

        {/* Pricing Process */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Price Your Materials</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our transparent pricing process ensures you get the best value
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-purple-600 text-white rounded-full mx-auto mb-4">
                      <i className={`${step.icon} text-2xl`}></i>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-blue-900 text-white rounded-full text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="bg-blue-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 flex items-center justify-center bg-blue-800 rounded-full mx-auto mb-6">
              <i className="ri-shield-check-line text-4xl"></i>
            </div>
            <h2 className="text-3xl font-bold mb-6">Our Price Match Guarantee</h2>
            <p className="text-xl text-blue-100 mb-8">
              If you find a higher legitimate offer for the same materials, we'll match it or beat it by 2%
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-blue-800 rounded-lg mx-auto mb-3">
                  <i className="ri-time-line text-2xl"></i>
                </div>
                <h3 className="font-semibold mb-1">Valid for 48 Hours</h3>
                <p className="text-sm text-blue-100">From quote acceptance</p>
              </div>
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-blue-800 rounded-lg mx-auto mb-3">
                  <i className="ri-file-text-line text-2xl"></i>
                </div>
                <h3 className="font-semibold mb-1">Written Proof Required</h3>
                <p className="text-sm text-blue-100">Official competitor quote</p>
              </div>
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-blue-800 rounded-lg mx-auto mb-3">
                  <i className="ri-checkbox-circle-line text-2xl"></i>
                </div>
                <h3 className="font-semibold mb-1">Same Material Grade</h3>
                <p className="text-sm text-blue-100">Equivalent quality & quantity</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready for Fair Pricing?
            </h2>
            <p className="text-lg text-purple-100 mb-8">
              Get a transparent quote today and experience our commitment to fair, competitive pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-quote"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                Get Your Quote
              </Link>
              <a
                href="tel:+447367067827"
                className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap"
              >
                Call +44 7367067827
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}