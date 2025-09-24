'use client';
import Link from 'next/link';

export default function RecyclingPage() {
  const recyclingServices = [
    {
      title: 'Environmental Compliance',
      description: 'Full compliance with UK environmental regulations and standards',
      certifications: ['ISO 14001 Certified', 'Environment Agency Licensed', 'WEEE Compliance', 'Hazardous Waste Permits'],
      icon: 'ri-shield-check-line'
    },
    {
      title: 'Sustainable Processing',
      description: 'Eco-friendly processing methods that minimize environmental impact',
      methods: ['Energy-efficient processing', 'Water recycling systems', 'Emission controls', 'Waste reduction protocols'],
      icon: 'ri-leaf-line'
    },
    {
      title: 'Circular Economy',
      description: 'Contributing to the circular economy through responsible recycling',
      benefits: ['Resource conservation', 'Energy savings', 'CO2 reduction', 'Landfill diversion'],
      icon: 'ri-recycle-line'
    },
    {
      title: 'Reporting & Documentation',
      description: 'Comprehensive sustainability reporting and certification',
      documents: ['Recycling certificates', 'Environmental impact reports', 'Carbon footprint analysis', 'Audit documentation'],
      icon: 'ri-file-text-line'
    }
  ];

  const environmentalImpact = [
    {
      metric: '25,000 tonnes',
      description: 'Materials Recycled Annually',
      icon: 'ri-recycle-line',
      color: 'green'
    },
    {
      metric: '98.5%',
      description: 'Landfill Diversion Rate',
      icon: 'ri-leaf-line',
      color: 'emerald'
    },
    {
      metric: '15,000 tonnes',
      description: 'CO2 Emissions Prevented',
      icon: 'ri-cloud-line',
      color: 'blue'
    },
    {
      metric: '40%',
      description: 'Energy Savings vs New Production',
      icon: 'ri-flashlight-line',
      color: 'yellow'
    }
  ];

  const recyclingProcess = [
    {
      step: 1,
      title: 'Collection & Transportation',
      description: 'Efficient collection using eco-friendly transport methods',
      icon: 'ri-truck-line'
    },
    {
      step: 2,
      title: 'Sorting & Separation',
      description: 'Advanced sorting to maximize material recovery rates',
      icon: 'ri-filter-2-line'
    },
    {
      step: 3,
      title: 'Processing & Cleaning',
      description: 'Environmentally responsible processing and contamination removal',
      icon: 'ri-water-flash-line'
    },
    {
      step: 4,
      title: 'Quality Control',
      description: 'Rigorous testing to ensure material quality and purity',
      icon: 'ri-checkbox-circle-line'
    },
    {
      step: 5,
      title: 'Market Distribution',
      description: 'Supply to manufacturers for new product creation',
      icon: 'ri-shopping-bag-line'
    }
  ];

  const sustainabilityInitiatives = [
    {
      initiative: 'Carbon Neutral Operations',
      description: 'Committed to achieving carbon neutrality by 2030',
      actions: ['Renewable energy use', 'Electric vehicle fleet', 'Carbon offset programs'],
      progress: '65% Complete',
      icon: 'ri-plant-line'
    },
    {
      initiative: 'Water Conservation',
      description: 'Advanced water recycling and conservation systems',
      actions: ['Closed-loop water systems', 'Rainwater harvesting', 'Wastewater treatment'],
      progress: '85% Complete',
      icon: 'ri-drop-line'
    },
    {
      initiative: 'Community Education',
      description: 'Promoting recycling awareness and education programs',
      actions: ['School programs', 'Community workshops', 'Online resources'],
      progress: 'Ongoing',
      icon: 'ri-graduation-cap-line'
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
              <span className="text-gray-900">Recycling</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-800 to-emerald-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Sustainable Recycling Solutions</h1>
                <p className="text-xl text-green-100 mb-8">
                  Leading the way in environmentally responsible scrap metal recycling with comprehensive sustainability programs
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/get-quote"
                    className="bg-white text-green-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap text-center"
                  >
                    Get Recycling Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap text-center"
                  >
                    Learn About Impact
                  </Link>
                </div>
              </div>
              <div className="lg:pl-8">
                <img
                  src="https://readdy.ai/api/search-image?query=recycling%20facility%20environmental%20sustainability%20green%20technology%20metal%20recycling%20circular%20economy%20modern%20industrial%20facility%20clean%20processing%20equipment%20solar%20panels%20workers%20in%20safety%20gear%20background%20white%20clean%20photography&width=600&height=400&seq=recycling-hero&orientation=landscape"
                  alt="Sustainable Recycling"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Environmental Impact</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Making a positive difference for the environment through responsible recycling practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {environmentalImpact.map((impact, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className={`w-16 h-16 flex items-center justify-center bg-${impact.color}-100 rounded-full mx-auto mb-4`}>
                    <i className={`${impact.icon} text-3xl text-${impact.color}-600`}></i>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{impact.metric}</div>
                  <p className="text-sm text-gray-600">{impact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recycling Services */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Recycling Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive recycling solutions supporting environmental sustainability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recyclingServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mb-4">
                    <i className={`${service.icon} text-2xl text-green-600`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {(service.certifications || service.methods || service.benefits || service.documents).map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-check-line text-green-500"></i>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recycling Process */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Recycling Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From collection to redistribution, every step prioritizes environmental responsibility
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {recyclingProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-green-600 text-white rounded-full mx-auto mb-4">
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

        {/* Sustainability Initiatives */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sustainability Initiatives</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ongoing commitment to environmental stewardship and community engagement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sustainabilityInitiatives.map((initiative, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mb-4">
                    <i className={`${initiative.icon} text-2xl text-green-600`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{initiative.initiative}</h3>
                  <p className="text-gray-600 mb-4">{initiative.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm font-medium text-green-600">{initiative.progress}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: initiative.progress.includes('%') ? initiative.progress : '100%' }}
                      ></div>
                    </div>
                  </div>
                  
                  <ul className="space-y-1">
                    {initiative.actions.map((action, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-3 h-3 flex items-center justify-center mr-2">
                          <i className="ri-arrow-right-s-line text-green-500 text-xs"></i>
                        </div>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Partners */}
        <div className="bg-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Certifications & Partnerships</h2>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                Recognized by leading environmental organizations and regulatory bodies
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { name: 'ISO 14001', description: 'Environmental Management', icon: 'ri-shield-check-line' },
                { name: 'Environment Agency', description: 'Licensed Operator', icon: 'ri-government-line' },
                { name: 'WEEE Approved', description: 'Electronic Waste Treatment', icon: 'ri-computer-line' },
                { name: 'Carbon Trust', description: 'Carbon Reduction Partner', icon: 'ri-leaf-line' }
              ].map((cert, index) => (
                <div key={index}>
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-800 rounded-full mx-auto mb-4">
                    <i className={`${cert.icon} text-3xl`}></i>
                  </div>
                  <h3 className="font-bold mb-1">{cert.name}</h3>
                  <p className="text-sm text-blue-200">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Our Sustainability Mission
            </h2>
            <p className="text-lg text-green-100 mb-8">
              Partner with us for environmentally responsible scrap metal recycling that makes a positive impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-quote"
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                Start Recycling
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