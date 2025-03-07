import { Link } from 'react-router-dom';
import { CheckBadgeIcon, ShieldCheckIcon, TrophyIcon, ArrowRightIcon, HomeIcon, BuildingOfficeIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { memo } from 'react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-dark-brown text-white h-[90vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center md:bg-fixed"></div>
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="w-full px-4 xl:px-24 mx-auto relative flex items-center">
          <div className="max-w-3xl py-24 md:py-0">
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
          <h2 className="heading-2 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Comprehensive construction solutions tailored to your needs, delivered with military precision and exceptional craftsmanship.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="relative p-12 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 min-h-[650px]"
              style={{
                backgroundImage: `url('/images/residential.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/75 group-hover:bg-black/65 transition-all duration-300"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex flex-col items-center mb-8 text-center">
                  <HomeIcon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">Residential</h3>
                </div>
                <ul className="space-y-4 flex-grow">
                  <li className="flex items-center text-white text-lg">
                    <CheckBadgeIcon className="h-6 w-6 text-primary mr-3" />
                    Custom Home Building
                  </li>
                  <li className="flex items-center text-white text-lg">
                    <CheckBadgeIcon className="h-6 w-6 text-primary mr-3" />
                    Home Additions
                  </li>
                  <li className="flex items-center text-white text-lg">
                    <CheckBadgeIcon className="h-6 w-6 text-primary mr-3" />
                    Kitchen & Bath Remodels
                  </li>
                  <li className="flex items-center text-white text-lg">
                    <CheckBadgeIcon className="h-6 w-6 text-primary mr-3" />
                    Basement Finishing
                  </li>
                </ul>
                <Link to="/services#residential" className="inline-flex items-center text-primary font-semibold hover:text-white transition-colors group">
                  Learn More <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
            <div 
              className="relative p-12 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 min-h-[650px]"
              style={{
                backgroundImage: `url('/images/Commerical.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/75 group-hover:bg-black/65 transition-all duration-300"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex flex-col items-center mb-8 text-center">
                  <BuildingOfficeIcon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">Commercial Projects</h3>
                </div>
                <ul className="space-y-4 flex-grow">
                  <li className="flex items-center text-white text-lg">
                    <CheckBadgeIcon className="h-6 w-6 text-primary mr-3" />
                    Office Renovations
                  </li>
                  <li className="flex items-center text-white text-lg">
                    <CheckBadgeIcon className="h-6 w-6 text-primary mr-3" />
                    Retail Spaces
                  </li>
                  <li className="flex items-center text-white text-lg">
                    <CheckBadgeIcon className="h-6 w-6 text-primary mr-3" />
                    Restaurant Build-Outs
                  </li>
                  <li className="flex items-center text-white text-lg">
                    <CheckBadgeIcon className="h-6 w-6 text-primary mr-3" />
                    Warehouse Facilities
                  </li>
                </ul>
                <Link to="/services#commercial" className="inline-flex items-center text-primary font-semibold hover:text-white transition-colors group">
                  Learn More <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
            <div 
              className="relative p-12 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 min-h-[650px]"
              style={{
                backgroundImage: `url('/images/specialized services.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/75 group-hover:bg-black/65 transition-all duration-300"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex flex-col items-center mb-8 text-center">
                  <WrenchScrewdriverIcon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">Specialized Services</h3>
                </div>
                <ul className="space-y-4 flex-grow">
                  <li className="flex items-center text-white text-lg">
                    <CheckBadgeIcon className="h-6 w-6 text-primary mr-3" />
                    Design Consultation
                  </li>
                  <li className="flex items-center text-white text-lg">
                    <CheckBadgeIcon className="h-6 w-6 text-primary mr-3" />
                    Project Management
                  </li>
                  <li className="flex items-center text-white text-lg">
                    <CheckBadgeIcon className="h-6 w-6 text-primary mr-3" />
                    Permit Processing
                  </li>
                  <li className="flex items-center text-white text-lg">
                    <CheckBadgeIcon className="h-6 w-6 text-primary mr-3" />
                    Warranty Service
                  </li>
                </ul>
                <Link to="/services#specialized" className="inline-flex items-center text-primary font-semibold hover:text-white transition-colors group">
                  Learn More <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
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
      <section className="relative min-h-[600px] flex items-center bg-primary text-white overflow-hidden">
        <img
          src="/images/start your project.png"
          alt="Start Your Project Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary opacity-90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="w-full px-4 xl:px-24 mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-2xl mb-10 max-w-2xl mx-auto">
            From concept to completion, we're here to bring your vision to life with military precision
            and unmatched craftsmanship.
          </p>
          <Link
            to="/consultation"
            className="bg-white text-dark-brown px-10 py-4 rounded-lg text-xl font-bold hover:bg-opacity-90 transition-all inline-block"
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
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6 relative">
                <img
                  src="/images/washingtondc.png"
                  alt="Washington DC Map"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Washington DC</h3>
              <p className="text-gray-600">Full service coverage throughout the District of Columbia</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6 relative">
                <img
                  src="/images/maryland.png"
                  alt="Maryland Map"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Maryland</h3>
              <p className="text-gray-600">Serving Montgomery and Prince George's Counties</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6 relative">
                <img
                  src="/images/virginina.png"
                  alt="Virginia Map"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
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
