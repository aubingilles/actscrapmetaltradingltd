
'use client';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Scrap Collection',
      description: 'Professional scrap metal collection services across the UK with efficient logistics and competitive rates.',
      icon: 'ri-truck-line',
      features: ['Free collection quotes', 'Flexible scheduling', 'Professional handling', 'UK-wide coverage'],
      image: 'https://readdy.ai/api/search-image?query=scrap%20metal%20collection%20truck%20loading%20industrial%20materials%20professional%20service%20UK%20recycling%20facility%20workers%20loading%20metal%20waste%20modern%20logistics%20equipment%20background%20white%20clean%20professional%20photography&width=400&height=300&seq=collection-service&orientation=landscape',
      link: '/services/scrap-collection'
    },
    {
      id: 2,
      title: 'Metal Processing',
      description: 'Advanced metal processing and sorting services to maximize value from your scrap materials.',
      icon: 'ri-hammer-line',
      features: ['Material sorting', 'Quality grading', 'Processing optimization', 'Value maximization'],
      image: 'https://readdy.ai/api/search-image?query=metal%20processing%20facility%20industrial%20sorting%20machinery%20scrap%20metal%20processing%20equipment%20modern%20factory%20workers%20sorting%20different%20metal%20types%20professional%20clean%20industrial%20background%20white%20photography&width=400&height=300&seq=processing-service&orientation=landscape',
      link: '/services/metal-processing'
    },
    {
      id: 3,
      title: 'Fair Pricing',
      description: 'Transparent and competitive pricing based on current market rates with no hidden fees.',
      icon: 'ri-money-pound-circle-line',
      features: ['Market-based pricing', 'Transparent rates', 'No hidden fees', 'Regular price updates'],
      image: 'https://readdy.ai/api/search-image?query=fair%20pricing%20transparency%20financial%20documents%20calculator%20money%20pounds%20sterling%20UK%20currency%20market%20rates%20professional%20business%20office%20clean%20modern%20background%20white%20photography&width=400&height=300&seq=pricing-service&orientation=landscape',
      link: '/services/fair-pricing'
    },
    {
      id: 4,
      title: 'Logistics',
      description: 'Complete logistics solutions for scrap metal transportation and delivery across the UK.',
      icon: 'ri-roadster-line',
      features: ['Transportation planning', 'Route optimization', 'Timely delivery', 'Tracking services'],
      image: 'https://readdy.ai/api/search-image?query=logistics%20transportation%20trucks%20fleet%20management%20UK%20roads%20delivery%20services%20professional%20transport%20vehicles%20modern%20fleet%20scrap%20metal%20logistics%20clean%20background%20white%20photography&width=400&height=300&seq=logistics-service&orientation=landscape',
      link: '/services/logistics'
    },
    {
      id: 5,
      title: 'Consulting',
      description: 'Expert consulting services to optimize your scrap metal operations and maximize profitability.',
      icon: 'ri-user-settings-line',
      features: ['Operation analysis', 'Efficiency improvement', 'Market insights', 'Strategic planning'],
      image: 'https://readdy.ai/api/search-image?query=business%20consulting%20meeting%20professional%20advisors%20scrap%20metal%20industry%20experts%20office%20consultation%20documents%20charts%20analysis%20modern%20office%20clean%20background%20white%20photography&width=400&height=300&seq=consulting-service&orientation=landscape',
      link: '/services/consulting'
    },
    {
      id: 6,
      title: 'Recycling',
      description: 'Comprehensive recycling solutions supporting environmental sustainability and circular economy.',
      icon: 'ri-recycle-line',
      features: ['Environmental compliance', 'Sustainability reports', 'Circular economy', 'Green certifications'],
      image: 'https://readdy.ai/api/search-image?query=recycling%20facility%20environmental%20sustainability%20green%20technology%20metal%20recycling%20circular%20economy%20modern%20industrial%20facility%20clean%20processing%20equipment%20background%20white%20photography&width=400&height=300&seq=recycling-service&orientation=landscape',
      link: '/services/recycling'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive scrap metal trading services designed to maximize value and ensure environmental responsibility
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg mr-4">
                    <i className={`${service.icon} text-2xl text-purple-600`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-check-line text-green-500"></i>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={service.link}
                  className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap text-center block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss your scrap metal requirements and receive a competitive quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="border border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-blue-800 rounded-lg mx-auto mb-4">
                <i className="ri-phone-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
              <p className="text-blue-100">+44 7367067827</p>
            </div>
            
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-blue-800 rounded-lg mx-auto mb-4">
                <i className="ri-whatsapp-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
              <p className="text-blue-100">+44 7367067827</p>
            </div>
            
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-blue-800 rounded-lg mx-auto mb-4">
                <i className="ri-time-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Response Time</h3>
              <p className="text-blue-100">Within 2 hours</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}