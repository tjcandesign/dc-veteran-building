import { Link } from 'react-router-dom';
import { CheckBadgeIcon, ShieldCheckIcon, TrophyIcon, ArrowRightIcon, HomeIcon, BuildingOfficeIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { memo } from 'react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-dark-brown text-white min-h-[100vh] md:min-h-0 xl:min-h-[90vh] md:py-32 overflow-hidden flex items-start md:items-center pt-24 md:pt-0">
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center md:bg-fixed"></div>
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="w-full px-4 xl:px-24 mx-auto relative min-h-[calc(100vh-4rem)] md:min-h-0 flex flex-col justify-between">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-[1] md:leading-tight drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]">
              <span className="text-primary">From Service to Structure:</span> <span className="text-white">Veteran-Built Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 md:mb-8 text-gray-200 leading-snug md:leading-normal">
              Building dreams with military precision. Residential and commercial construction
              services delivered with discipline, integrity, and unmatched attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:mt-0 mt-auto pb-32 md:pb-0 fixed bottom-0 left-0 right-0 md:static bg-gradient-to-t from-black/80 to-transparent md:bg-none px-4 pt-16 md:pt-0 md:px-0">
              <Link 
                to="/consultation" 
                className="btn-primary inline-flex items-center justify-center group text-lg w-full md:w-auto"
              >
                Schedule Project Review
                <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-cream">
        <div className="w-full px-4 xl:px-24 mx-auto">
          <h2 className="heading-2 text-center mb-4">Our Services</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to your needs, delivered with military precision and exceptional craftsmanship.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <HomeIcon className="h-12 w-12 text-primary mr-4" />
                <h3 className="heading-3">Residential</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckBadgeIcon className="h-5 w-5 text-primary mr-2" />
                  Custom Home Building
                </li>
                <li className="flex items-center">
                  <CheckBadgeIcon className="h-5 w-5 text-primary mr-2" />
                  Home Additions
                </li>
                <li className="flex items-center">
                  <CheckBadgeIcon className="h-5 w-5 text-primary mr-2" />
                  Kitchen & Bath Remodels
                </li>
                <li className="flex items-center">
                  <CheckBadgeIcon className="h-5 w-5 text-primary mr-2" />
                  Basement Finishing
                </li>
              </ul>
              <Link to="/services#residential" className="inline-flex items-center text-primary font-semibold mt-6 hover:text-dark-brown transition-colors">
                Learn More <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <BuildingOfficeIcon className="h-12 w-12 text-primary mr-4" />
                <h3 className="heading-3">Commercial Projects</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckBadgeIcon className="h-5 w-5 text-primary mr-2" />
                  Office Renovations
                </li>
                <li className="flex items-center">
                  <CheckBadgeIcon className="h-5 w-5 text-primary mr-2" />
                  Retail Spaces
                </li>
                <li className="flex items-center">
                  <CheckBadgeIcon className="h-5 w-5 text-primary mr-2" />
                  Restaurant Build-Outs
                </li>
                <li className="flex items-center">
                  <CheckBadgeIcon className="h-5 w-5 text-primary mr-2" />
                  Warehouse Facilities
                </li>
              </ul>
              <Link to="/services#commercial" className="inline-flex items-center text-primary font-semibold mt-6 hover:text-dark-brown transition-colors">
                Learn More <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <WrenchScrewdriverIcon className="h-12 w-12 text-primary mr-4" />
                <h3 className="heading-3">Specialized Services</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckBadgeIcon className="h-5 w-5 text-primary mr-2" />
                  Design Consultation
                </li>
                <li className="flex items-center">
                  <CheckBadgeIcon className="h-5 w-5 text-primary mr-2" />
                  Project Management
                </li>
                <li className="flex items-center">
                  <CheckBadgeIcon className="h-5 w-5 text-primary mr-2" />
                  Permit Processing
                </li>
                <li className="flex items-center">
                  <CheckBadgeIcon className="h-5 w-5 text-primary mr-2" />
                  Warranty Service
                </li>
              </ul>
              <Link to="/services#specialized" className="inline-flex items-center text-primary font-semibold mt-6 hover:text-dark-brown transition-colors">
                Learn More <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-dark-brown text-white">
        <div className="w-full px-4 xl:px-24 mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Veterans Building Service Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <ShieldCheckIcon className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Veteran-Owned</h3>
              <p>Our company is founded on military values, bringing discipline, leadership, and excellence to every project we undertake.</p>
            </div>
            <div>
              <ShieldCheckIcon className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Quality Guaranteed</h3>
              <p>We stand behind our work with comprehensive warranty coverage and an unwavering commitment to excellence.</p>
            </div>
            <div>
              <TrophyIcon className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Award-Winning Service</h3>
              <p>Our team has been recognized for outstanding craftsmanship and consistently delivering exceptional customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-dark-brown">
        <div className="w-full px-4 xl:px-24 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            From concept to completion, we're here to bring your vision to life with military precision
            and unmatched craftsmanship.
          </p>
          <Link
            to="/consultation"
            className="bg-dark-brown text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-black hover:scale-[1.02] transition-all"
          >
            Schedule Your Project Review
          </Link>
        </div>
      </section>



      {/* Service Area */}
      <section className="section bg-cream">
        <div className="w-full px-4 xl:px-24 mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Our Service Area</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Proudly serving Washington DC, Maryland, and Virginia with exceptional construction services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <img
                  src="/images/dc-map.svg"
                  alt="Washington DC Map"
                  className="w-full h-48 object-contain rounded-lg bg-gray-50 p-4"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Washington DC</h3>
              <p className="text-gray-600">Full service coverage throughout the District of Columbia</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <img
                  src="/images/maryland-map.svg"
                  alt="Maryland Map"
                  className="w-full h-48 object-contain rounded-lg bg-gray-50 p-4"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Maryland</h3>
              <p className="text-gray-600">Serving Montgomery and Prince George's Counties</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <img
                  src="/images/virginia-map.svg"
                  alt="Virginia Map"
                  className="w-full h-48 object-contain rounded-lg bg-gray-50 p-4"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Virginia</h3>
              <p className="text-gray-600">Available in Arlington, Alexandria, and Fairfax</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default memo(Home);
