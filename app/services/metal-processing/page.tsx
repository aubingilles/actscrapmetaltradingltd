
'use client';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function MetalProcessingPage() {
  const processingTypes = [
    {
      title: 'Ferrous Metal Processing',
      description: 'Specialized processing of iron and steel materials',
      processes: ['Magnetic separation', 'Size grading', 'Quality assessment', 'Contamination removal'],
      icon: 'ri-magnet-line'
    },
    {
      title: 'Non-Ferrous Processing',
      description: 'Advanced sorting of copper, aluminum, and precious metals',
      processes: ['Density separation', 'Eddy current sorting', 'Manual sorting', 'Purity testing'],
      icon: 'ri-copper-coin-line'
    },
    {
      title: 'Shredding Services',
      description: 'Industrial shredding for size reduction and preparation',
      processes: ['Heavy duty shredding', 'Size standardization', 'Debris removal', 'Quality control'],
      icon: 'ri-scissors-line'
    },
    {
      title: 'Baling & Compaction',
      description: 'Efficient compression for transport optimization',
      processes: ['High-pressure baling', 'Density optimization', 'Transport preparation', 'Weight certification'],
      icon: 'ri-archive-line'
    }
  ];

  const benefits = [
    {
      title: 'Higher Material Value',
      description: 'Professional processing increases the value of your scrap materials',
      icon: 'ri-money-pound-circle-line',
      color: 'green'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control ensures maximum market value',
      icon: 'ri-shield-check-line',
      color: 'blue'
    },
    {
      title: 'Efficient Processing',
      description: 'State-of-the-art equipment for fast, reliable processing',
      icon: 'ri-speed-line',
      color: 'purple'
    },
    {
      title: 'Environmental Compliance',
      description: 'All processing meets UK environmental regulations',
      icon: 'ri-leaf-line',
      color: 'emerald'
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
            <span className="text-gray-900">Metal Processing</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Advanced Metal Processing Services</h1>
              <p className="text-xl text-blue-100 mb-8">
                State-of-the-art metal processing and sorting services to maximize the value of your scrap materials
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-quote"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap text-center"
                >
                  Get Processing Quote
                </Link>
                <Link
                  href="/contact"
                  className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="lg:pl-8">
              <img
                src="https://readdy.ai/api/search-image?query=advanced%20metal%20processing%20facility%20industrial%20sorting%20machinery%20scrap%20metal%20processing%20equipment%20modern%20factory%20workers%20sorting%20different%20metal%20types%20automated%20systems%20professional%20clean%20industrial%20background&width=600&height=400&seq=processing-hero&orientation=landscape"
                alt="Metal Processing Facility"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Processing Types */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Processing Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive metal processing solutions using advanced technology and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processingTypes.map((type, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg mb-4">
                  <i className={`${type.icon} text-2xl text-purple-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.processes.map((process, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      {process}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Processing Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Why professional metal processing makes a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className={`w-16 h-16 flex items-center justify-center bg-${benefit.color}-100 rounded-full mx-auto mb-4`}>
                  <i className={`${benefit.icon} text-3xl text-${benefit.color}-600`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Equipment & Technology */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://readdy.ai/api/search-image?query=modern%20metal%20processing%20equipment%20industrial%20machinery%20sorting%20systems%20automated%20conveyor%20belts%20magnetic%20separators%20eddy%20current%20technology%20professional%20factory%20clean%20industrial%20environment&width=600&height=400&seq=processing-equipment&orientation=landscape"
                alt="Processing Equipment"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Processing Technology</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mr-4 flex-shrink-0">
                    <i className="ri-settings-3-line text-2xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated Sorting Systems</h3>
                    <p className="text-gray-600">AI-powered sorting technology for precise material identification and separation</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mr-4 flex-shrink-0">
                    <i className="ri-scales-3-line text-2xl text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Precision Grading</h3>
                    <p className="text-gray-600">Accurate material grading ensures optimal pricing and market placement</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg mr-4 flex-shrink-0">
                    <i className="ri-microscope-line text-2xl text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Testing</h3>
                    <p className="text-gray-600">Comprehensive testing to verify material composition and purity levels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Process Your Materials?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Contact us today to discuss your metal processing requirements and maximize your material value
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Processing Quote
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
