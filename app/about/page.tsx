
'use client';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About ACT SCRAP METAL TRADING LTD
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Your trusted partner in scrap metal trading since our establishment. We specialize in buying, selling, and processing various types of scrap metals with a commitment to excellence and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
              <p className="text-gray-600 mb-6">
                ACT SCRAP METAL TRADING LTD is your premier destination for professional scrap metal trading services. Our company operates with the highest standards of integrity, providing reliable and efficient solutions for all your scrap metal needs. We serve both individual customers and businesses, offering competitive prices and excellent service.
              </p>
              <p className="text-gray-600">
                With our extensive network and industry expertise, we ensure that every transaction is handled with professionalism and transparency. Our commitment to environmental sustainability drives us to promote responsible recycling practices.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20scrap%20metal%20trading%20facility%20with%20modern%20equipment%20and%20organized%20metal%20processing%20areas%2C%20industrial%20setting%20with%20safety%20protocols%2C%20clean%20and%20efficient%20operations&width=500&height=400&seq=about1&orientation=landscape" 
                alt="ACT Scrap Metal Trading Facility"
                className="rounded-lg shadow-lg object-cover w-full h-80"
              />
            </div>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex justify-center">
                <img 
                  src="https://readdy.ai/api/search-image?query=environmental%20sustainability%20concept%20with%20recycling%20symbols%2C%20green%20energy%2C%20clean%20environment%2C%20earth%20protection%2C%20circular%20economy%20illustration&width=500&height=400&seq=mission1&orientation=landscape" 
                  alt="Our Mission - Environmental Sustainability"
                  className="rounded-lg shadow-lg object-cover w-full h-80"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-600 mb-6">
                  At ACT SCRAP METAL TRADING LTD, our mission extends beyond simple transactions. We are committed to making a positive environmental impact through responsible scrap metal recycling and processing. We strive to transform waste materials into valuable resources, contributing to a sustainable future.
                </p>
                <p className="text-gray-600">
                  Our focus areas include ferrous and non-ferrous metals, electronic waste, automotive scrap, and industrial materials. We ensure proper processing and recycling to minimize environmental impact while maximizing value recovery.
                </p>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-gray-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-recycle-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Metal Collection</h3>
                <p className="text-gray-600">
                  We provide efficient collection services for all types of scrap metals from your location with competitive pricing.
                </p>
              </div>
              <div className="text-center bg-gray-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-scales-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fair Pricing</h3>
                <p className="text-gray-600">
                  Our transparent pricing system ensures you receive fair market value for your scrap metals with accurate weighing.
                </p>
              </div>
              <div className="text-center bg-gray-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-truck-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Logistics</h3>
                <p className="text-gray-600">
                  We handle transportation and logistics efficiently, ensuring smooth operations from collection to processing.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                <p className="text-gray-600">Satisfied Customers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">15</div>
                <p className="text-gray-600">Metal Categories</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
                <p className="text-gray-600">Tonnes Processed</p>
              </div>
            </div>
          </div>

          {/* Partnership Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Partnership</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Turkey Operations</h3>
                  <p className="text-gray-600 mb-4">
                    We maintain strong business partnerships internationally, including our Turkish operations through WE TRADE GENERAL DIS TİCARET LIMITED ŞİRKETİ.
                  </p>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <p className="font-semibold text-gray-900">Turkey Address:</p>
                    <p className="text-gray-600">
                      5219/1 Sok: No:8<br/>
                      İzmir, Turkey
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">UK Headquarters</h3>
                  <p className="text-gray-600 mb-4">
                    Our UK operations are based in England, providing comprehensive services across the British market.
                  </p>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <p className="font-semibold text-gray-900">UK Address:</p>
                    <p className="text-gray-600">
                      44 F S ACCOUNTANTS LTD YORK STREET<br/>
                      CLITHEROE<br/>
                      ENGLAND BB7 2DL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose ACT SCRAP METAL TRADING?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-check-line text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Competitive Pricing</h4>
                    <p className="text-gray-600">We offer market-leading prices for all types of scrap metals with transparent pricing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-check-line text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Professional Service</h4>
                    <p className="text-gray-600">Our experienced team ensures efficient and reliable service for all your needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-check-line text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Environmental Responsibility</h4>
                    <p className="text-gray-600">We follow sustainable practices and environmental guidelines in all operations.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-check-line text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Quick Processing</h4>
                    <p className="text-gray-600">Fast turnaround times for collection, weighing, and payment processes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-check-line text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Wide Coverage</h4>
                    <p className="text-gray-600">Extensive service area with flexible collection and delivery options.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-check-line text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h4>
                    <p className="text-gray-600">Fully licensed operations with comprehensive insurance coverage for peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-purple-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center mr-3">
                      <i className="ri-phone-line text-purple-600"></i>
                    </div>
                    <span className="text-gray-600">+44 7367067827</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center mr-3">
                      <i className="ri-whatsapp-line text-purple-600"></i>
                    </div>
                    <span className="text-gray-600">WhatsApp: +44 7367067827</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <i className="ri-map-pin-line text-purple-600"></i>
                    </div>
                    <div>
                      <p className="text-gray-600">
                        44 F S ACCOUNTANTS LTD YORK STREET<br/>
                        CLITHEROE<br/>
                        ENGLAND BB7 2DL
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <div className="mt-6">
                  <Link href="/contact" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer inline-block">
                    Contact Us Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}