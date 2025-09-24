
'use client';
import Link from 'next/link';

export default function ScrapCollectionPage() {
  const collectionTypes = [
    {
      title: 'Ferrous Metals',
      description: 'Steel, iron, and other magnetic metals',
      materials: ['HMS (Heavy Melting Scrap)', 'Steel turnings', 'Cast iron', 'Structural steel'],
      icon: 'ri-magnet-line'
    },
    {
      title: 'Non-Ferrous Metals',
      description: 'Copper, aluminium, brass, and precious metals',
      materials: ['Copper wire', 'Aluminium sheets', 'Brass fittings', 'Lead batteries'],
      icon: 'ri-copper-coin-line'
    },
    {
      title: 'Industrial Scrap',
      description: 'Large-scale industrial equipment and machinery',
      materials: ['Factory equipment', 'Industrial pipes', 'Machinery parts', 'Processing equipment'],
      icon: 'ri-settings-3-line'
    },
    {
      title: 'Electronic Waste',
      description: 'Circuit boards, computers, and electronic components',
      materials: ['Computer boards', 'Cable assemblies', 'Electronic components', 'Hard drives'],
      icon: 'ri-computer-line'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Request Quote',
      description: 'Contact us with details about your scrap materials and location',
      icon: 'ri-phone-line'
    },
    {
      step: 2,
      title: 'Material Assessment',
      description: 'Our experts evaluate your materials and provide competitive pricing',
      icon: 'ri-search-line'
    },
    {
      step: 3,
      title: 'Schedule Collection',
      description: 'We arrange convenient pickup times that work with your schedule',
      icon: 'ri-calendar-line'
    },
    {
      step: 4,
      title: 'Professional Collection',
      description: 'Our trained team safely collects and transports your materials',
      icon: 'ri-truck-line'
    },
    {
      step: 5,
      title: 'Payment Processing',
      description: 'Receive prompt payment after material processing and verification',
      icon: 'ri-money-pound-circle-line'
    }
  ];

  return (
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
            <span className="text-gray-900">Scrap Collection</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Scrap Collection Services</h1>
              <p className="text-xl text-blue-100 mb-8">
                Efficient, reliable scrap metal collection across the UK with competitive rates and professional handling
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-quote"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap text-center"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="/contact"
                  className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="lg:pl-8">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20scrap%20metal%20collection%20truck%20loading%20industrial%20materials%20UK%20recycling%20facility%20workers%20modern%20logistics%20equipment%20safety%20gear%20professional%20service%20clean%20industrial%20background&width=600&height=400&seq=collection-hero&orientation=landscape"
                alt="Scrap Collection Service"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Collection Types */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Collect</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We handle all types of scrap metals and materials with professional equipment and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collectionTypes.map((type, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg mb-4">
                  <i className={`${type.icon} text-2xl text-purple-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-1">
                  {type.materials.map((material, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-3 h-3 flex items-center justify-center mr-2">
                        <i className="ri-check-line text-green-500 text-xs"></i>
                      </div>
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Collection Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple, transparent process from quote to payment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
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

      {/* Benefits Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Collection Service?</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mr-4 flex-shrink-0">
                    <i className="ri-truck-line text-2xl text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Equipment</h3>
                    <p className="text-gray-600">Modern trucks and handling equipment for safe, efficient collection</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mr-4 flex-shrink-0">
                    <i className="ri-shield-check-line text-2xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Licensed & Insured</h3>
                    <p className="text-gray-600">Complete compliance with UK regulations and comprehensive insurance coverage</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg mr-4 flex-shrink-0">
                    <i className="ri-time-line text-2xl text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-600">Collection times that work around your business operations</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-lg mr-4 flex-shrink-0">
                    <i className="ri-money-pound-circle-line text-2xl text-yellow-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Rates</h3>
                    <p className="text-gray-600">Market-leading prices based on current commodity rates</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://readdy.ai/api/search-image?query=scrap%20metal%20collection%20benefits%20professional%20service%20UK%20industrial%20recycling%20facility%20modern%20equipment%20safety%20protocols%20workers%20loading%20truck%20competitive%20pricing%20clean%20professional%20background&width=600&height=400&seq=collection-benefits&orientation=landscape"
                alt="Collection Benefits"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Schedule Your Collection?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Get a free quote today and see why businesses across the UK trust us with their scrap collection needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Free Quote
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
  );
}
