'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function SellScrapPage() {
  const benefits = [
    {
      icon: 'ri-money-pound-circle-line',
      title: 'Competitive Prices',
      description: 'We offer market-leading prices for all types of scrap materials based on current LME rates'
    },
    {
      icon: 'ri-truck-line',
      title: 'Free Collection',
      description: 'No transport costs - we collect from your location anywhere in the UK at no extra charge'
    },
    {
      icon: 'ri-time-line',
      title: 'Fast Payment',
      description: 'Get paid immediately upon collection and weighing - no waiting for bank transfers'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Licensed & Insured',
      description: 'Fully licensed waste carrier with comprehensive insurance coverage for your peace of mind'
    },
    {
      icon: 'ri-scales-3-line',
      title: 'Accurate Weighing',
      description: 'Certified weighbridge systems ensure fair and accurate measurement of your materials'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: '24/7 Support',
      description: 'Professional customer service team available round the clock for any queries or assistance'
    }
  ];

  const materials = [
    { name: 'Copper Wire', price: '£6,500/tonne', trend: 'up' },
    { name: 'Aluminum Scrap', price: '£1,200/tonne', trend: 'stable' },
    { name: 'Steel HMS 1&2', price: '£280/tonne', trend: 'up' },
    { name: 'Brass Scrap', price: '£4,800/tonne', trend: 'down' },
    { name: 'Lead Scrap', price: '£1,800/tonne', trend: 'up' },
    { name: 'Stainless Steel', price: '£1,500/tonne', trend: 'stable' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 via-blue-800 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Sell Your Scrap Materials for Top Prices
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Turn your unwanted materials into cash. We buy all types of scrap metals, electronics, and recyclable materials at competitive market rates with immediate payment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/get-quote" 
                  className="bg-gray-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-400 transition-colors text-center whitespace-nowrap cursor-pointer"
                >
                  Get Instant Quote
                </Link>
                <a 
                  href="tel:+447367067827" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors text-center whitespace-nowrap cursor-pointer"
                >
                  Call Now: +44 7367067827
                </a>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Today's Scrap Prices</h3>
              <div className="space-y-4">
                {materials.map((material, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">{material.name}</span>
                      <div className="flex items-center mt-1">
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          material.trend === 'up' ? 'bg-green-400' :
                          material.trend === 'down' ? 'bg-red-400' : 'bg-yellow-400'
                        }`}></div>
                        <span className="text-xs text-gray-300">
                          {material.trend === 'up' ? 'Rising' :
                           material.trend === 'down' ? 'Falling' : 'Stable'}
                        </span>
                      </div>
                    </div>
                    <span className="font-bold">{material.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-300 mt-4">*Prices updated daily based on LME rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Sell to ACT Scrap Metal Trading?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the difference with UK's most trusted scrap metal buyer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                    <i className={`${benefit.icon} text-xl`}></i>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple process from quote to payment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600">Call, email, or use our online form to describe your materials</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Quote</h3>
              <p className="text-gray-600">Receive competitive pricing based on current market rates</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">We Collect</h3>
              <p className="text-gray-600">Free collection from your location at your convenient time</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Paid</h3>
              <p className="text-gray-600">Immediate payment upon weighing and quality verification</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Earning from Your Scrap Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who trust us with their scrap materials
          </p>
          <Link 
            href="/get-quote" 
            className="bg-gray-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-400 transition-colors whitespace-nowrap cursor-pointer"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}