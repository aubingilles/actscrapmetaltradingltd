'use client';
import Link from 'next/link';

export default function LogisticsPage() {
  const logisticsServices = [
    {
      title: 'Collection & Transportation',
      description: 'Comprehensive pickup and transport services across the UK',
      features: ['Nationwide coverage', 'Flexible scheduling', 'Professional drivers', 'Insured transportation'],
      icon: 'ri-truck-line'
    },
    {
      title: 'Route Optimization',
      description: 'Efficient route planning for cost-effective logistics',
      features: ['GPS tracking', 'Traffic optimization', 'Fuel efficiency', 'Time management'],
      icon: 'ri-route-line'
    },
    {
      title: 'Delivery Services',
      description: 'Reliable delivery to processing facilities and customers',
      features: ['Scheduled deliveries', 'Real-time tracking', 'Proof of delivery', 'Customer notifications'],
      icon: 'ri-roadster-line'
    },
    {
      title: 'Fleet Management',
      description: 'Modern fleet with specialized equipment for different materials',
      features: ['Specialized vehicles', 'Regular maintenance', 'Safety compliance', 'Environmental standards'],
      icon: 'ri-settings-4-line'
    }
  ];

  const fleetTypes = [
    {
      vehicle: 'Flatbed Trucks',
      capacity: 'Up to 20 tonnes',
      suitableFor: ['Steel structures', 'Heavy machinery', 'Large equipment'],
      image: 'https://readdy.ai/api/search-image?query=flatbed%20truck%20loading%20heavy%20metal%20equipment%20steel%20structures%20industrial%20transport%20UK%20roads%20professional%20logistics%20vehicle%20modern%20fleet%20clean%20background&width=400&height=300&seq=flatbed-truck&orientation=landscape'
    },
    {
      vehicle: 'Skip Lorries',
      capacity: 'Various skip sizes',
      suitableFor: ['Mixed scrap metal', 'Construction waste', 'Industrial debris'],
      image: 'https://readdy.ai/api/search-image?query=skip%20lorry%20truck%20waste%20collection%20metal%20recycling%20UK%20streets%20industrial%20vehicle%20professional%20service%20clean%20modern%20background&width=400&height=300&seq=skip-lorry&orientation=landscape'
    },
    {
      vehicle: 'Articulated Lorries',
      capacity: 'Up to 44 tonnes',
      suitableFor: ['Bulk materials', 'Long-distance transport', 'Large volumes'],
      image: 'https://readdy.ai/api/search-image?query=articulated%20lorry%20truck%20long%20distance%20transport%20bulk%20materials%20UK%20motorway%20professional%20logistics%20fleet%20modern%20vehicle%20clean%20background&width=400&height=300&seq=articulated-lorry&orientation=landscape'
    }
  ];

  const trackingFeatures = [
    {
      title: 'Real-Time GPS Tracking',
      description: 'Monitor your shipment location in real-time',
      icon: 'ri-map-pin-line'
    },
    {
      title: 'Delivery Updates',
      description: 'Automated SMS and email notifications',
      icon: 'ri-notification-3-line'
    },
    {
      title: 'Digital Proof of Delivery',
      description: 'Electronic signatures and photo confirmation',
      icon: 'ri-camera-line'
    },
    {
      title: 'Customer Portal',
      description: 'Online access to all logistics information',
      icon: 'ri-computer-line'
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
              <span className="text-gray-900">Logistics</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Logistics Solutions</h1>
                <p className="text-xl text-blue-100 mb-8">
                  Comprehensive transportation and delivery services for scrap metal across the UK with real-time tracking
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/get-quote"
                    className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap text-center"
                  >
                    Get Logistics Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap text-center"
                  >
                    Track Shipment
                  </Link>
                </div>
              </div>
              <div className="lg:pl-8">
                <img
                  src="https://readdy.ai/api/search-image?query=logistics%20transportation%20trucks%20fleet%20management%20UK%20roads%20delivery%20services%20professional%20transport%20vehicles%20modern%20fleet%20scrap%20metal%20logistics%20GPS%20tracking%20technology%20clean%20background&width=600&height=400&seq=logistics-hero&orientation=landscape"
                  alt="Logistics Solutions"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Logistics Services */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Logistics Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                End-to-end logistics solutions tailored for the scrap metal industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {logisticsServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                    <i className={`${service.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-check-line text-green-500"></i>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fleet Types */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Fleet</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized vehicles for different types of scrap metal transportation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fleetTypes.map((fleet, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={fleet.image}
                      alt={fleet.vehicle}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{fleet.vehicle}</h3>
                    <p className="text-purple-600 font-semibold mb-3">{fleet.capacity}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Suitable For:</h4>
                      <ul className="space-y-1">
                        {fleet.suitableFor.map((use, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-4 h-4 flex items-center justify-center mr-2">
                              <i className="ri-check-line text-green-500"></i>
                            </div>
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tracking Features */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Tracking Technology</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Stay informed every step of the way with our comprehensive tracking system
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trackingFeatures.map((feature, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                    <i className={`${feature.icon} text-3xl text-purple-600`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coverage Map */}
        <div className="bg-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">UK-Wide Coverage</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Comprehensive logistics network covering all regions of the United Kingdom
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-800 rounded mr-3 flex-shrink-0">
                      <i className="ri-map-pin-line"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Regional Hubs</h3>
                      <p className="text-sm text-blue-100">Strategic locations for efficient coverage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-800 rounded mr-3 flex-shrink-0">
                      <i className="ri-time-line"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Same-Day Service</h3>
                      <p className="text-sm text-blue-100">Available in major metropolitan areas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-800 rounded mr-3 flex-shrink-0">
                      <i className="ri-shield-check-line"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Fully Licensed</h3>
                      <p className="text-sm text-blue-100">All permits and insurance in place</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-800 rounded mr-3 flex-shrink-0">
                      <i className="ri-leaf-line"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Eco-Friendly</h3>
                      <p className="text-sm text-blue-100">Low-emission vehicles where possible</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370543.8218089943!2d-4.5!3d54.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Logistics Support?
            </h2>
            <p className="text-lg text-purple-100 mb-8">
              Contact us today to discuss your transportation needs and receive a competitive logistics quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-quote"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                Get Logistics Quote
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