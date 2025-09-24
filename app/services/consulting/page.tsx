'use client';
import Link from 'next/link';

export default function ConsultingPage() {
  const consultingServices = [
    {
      title: 'Operation Analysis',
      description: 'Comprehensive evaluation of your current scrap metal operations',
      services: ['Process efficiency review', 'Cost analysis', 'Workflow optimization', 'Resource utilization'],
      icon: 'ri-bar-chart-box-line'
    },
    {
      title: 'Market Strategy',
      description: 'Strategic guidance for maximizing profits in the scrap metal market',
      services: ['Market trend analysis', 'Pricing strategies', 'Supplier relationships', 'Customer development'],
      icon: 'ri-line-chart-line'
    },
    {
      title: 'Compliance & Regulations',
      description: 'Ensure full compliance with UK scrap metal regulations',
      services: ['License requirements', 'Environmental compliance', 'Safety protocols', 'Documentation systems'],
      icon: 'ri-shield-check-line'
    },
    {
      title: 'Technology Integration',
      description: 'Modernize operations with the latest scrap metal technologies',
      services: ['Digital solutions', 'Automation opportunities', 'Software recommendations', 'System integration'],
      icon: 'ri-computer-line'
    }
  ];

  const consultingProcess = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'Comprehensive review of your current operations and challenges',
      icon: 'ri-search-eye-line',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Analysis & Planning',
      description: 'Detailed analysis and strategic plan development',
      icon: 'ri-file-text-line',
      duration: '2-3 weeks'
    },
    {
      step: 3,
      title: 'Implementation Strategy',
      description: 'Customized roadmap with actionable recommendations',
      icon: 'ri-roadster-line',
      duration: '1 week'
    },
    {
      step: 4,
      title: 'Ongoing Support',
      description: 'Continuous monitoring and adjustment support',
      icon: 'ri-customer-service-2-line',
      duration: 'Ongoing'
    }
  ];

  const expertiseAreas = [
    {
      area: 'Operational Efficiency',
      description: 'Streamline processes to reduce costs and increase productivity',
      benefits: ['25% average cost reduction', 'Improved processing times', 'Better resource allocation'],
      icon: 'ri-speed-line'
    },
    {
      area: 'Market Intelligence',
      description: 'Stay ahead with comprehensive market insights and trends',
      benefits: ['Real-time market data', 'Competitive analysis', 'Price forecasting'],
      icon: 'ri-lightbulb-line'
    },
    {
      area: 'Risk Management',
      description: 'Identify and mitigate operational and financial risks',
      benefits: ['Risk assessment', 'Mitigation strategies', 'Insurance optimization'],
      icon: 'ri-shield-line'
    },
    {
      area: 'Growth Strategy',
      description: 'Develop sustainable growth plans for your business',
      benefits: ['Market expansion', 'New revenue streams', 'Partnership opportunities'],
      icon: 'ri-rocket-line'
    }
  ];

  const successMetrics = [
    { metric: '150+', description: 'Businesses Consulted', icon: 'ri-building-line' },
    { metric: '£2.5M+', description: 'Additional Revenue Generated', icon: 'ri-money-pound-circle-line' },
    { metric: '35%', description: 'Average Efficiency Improvement', icon: 'ri-arrow-up-line' },
    { metric: '98%', description: 'Client Satisfaction Rate', icon: 'ri-thumb-up-line' }
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
              <span className="text-gray-900">Consulting</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Scrap Metal Consulting</h1>
                <p className="text-xl text-blue-100 mb-8">
                  Strategic guidance to optimize your scrap metal operations and maximize profitability
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/get-quote"
                    className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap text-center"
                  >
                    Book Consultation
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
                  src="https://readdy.ai/api/search-image?query=business%20consulting%20meeting%20professional%20advisors%20scrap%20metal%20industry%20experts%20office%20consultation%20documents%20charts%20analysis%20modern%20office%20desk%20laptop%20graphs%20clean%20professional%20background&width=600&height=400&seq=consulting-hero&orientation=landscape"
                  alt="Scrap Metal Consulting"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {successMetrics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg mx-auto mb-3">
                    <i className={`${stat.icon} text-2xl text-purple-600`}></i>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.metric}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Consulting Services */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Consulting Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive consulting solutions tailored for the scrap metal industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultingServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                    <i className={`${service.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.services.map((item, idx) => (
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

        {/* Consulting Process */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Consulting Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Structured approach to delivering actionable insights and results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultingProcess.map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-purple-600 text-white rounded-full mx-auto mb-4">
                      <i className={`${step.icon} text-2xl`}></i>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-blue-900 text-white rounded-full text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                  <span className="inline-block bg-purple-100 text-purple-600 text-xs font-medium px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Deep industry knowledge across all aspects of scrap metal operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mr-4 flex-shrink-0">
                      <i className={`${area.icon} text-2xl text-green-600`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{area.area}</h3>
                      <p className="text-gray-600 mb-4">{area.description}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {area.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-3 h-3 flex items-center justify-center mr-2">
                            <i className="ri-arrow-right-s-line text-green-500 text-xs"></i>
                          </div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-blue-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-800 rounded-full mx-auto mb-6">
              <i className="ri-double-quotes-l text-3xl"></i>
            </div>
            <blockquote className="text-2xl font-light mb-6">
              "ACT's consulting services transformed our operations. We increased efficiency by 40% and reduced costs by £180,000 annually. Their expertise in the UK scrap metal market is unmatched."
            </blockquote>
            <div>
              <div className="font-semibold text-lg">Sarah Mitchell</div>
              <div className="text-blue-200">Operations Director, Northern Metals Ltd</div>
            </div>
          </div>
        </div>

        {/* Industries Served */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized consulting for various sectors of the scrap metal industry
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: 'Automotive', icon: 'ri-car-line' },
                { name: 'Construction', icon: 'ri-building-2-line' },
                { name: 'Manufacturing', icon: 'ri-settings-3-line' },
                { name: 'Electronics', icon: 'ri-computer-line' },
                { name: 'Demolition', icon: 'ri-hammer-line' },
                { name: 'Utilities', icon: 'ri-flashlight-line' }
              ].map((industry, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg mx-auto mb-3">
                    <i className={`${industry.icon} text-2xl text-purple-600`}></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-lg text-purple-100 mb-8">
              Book a consultation today and discover how our expertise can transform your scrap metal business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-quote"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                Book Free Consultation
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