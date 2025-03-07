import { Link } from 'react-router-dom';
import { CheckBadgeIcon, ShieldCheckIcon, TrophyIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { memo } from 'react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-dark-brown text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541976590-713941681591')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Veteran-Owned Construction Excellence in DC
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Building dreams with military precision. Residential and commercial construction
              services delivered with discipline, integrity, and unmatched attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link 
                to="/consultation" 
                className="btn-primary inline-flex items-center justify-center group"
              >
                Book a Consultation
                <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/gallery" 
                className="text-white border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-dark-brown transition-all inline-flex items-center justify-center font-semibold"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-cream">
        <div className="container">
          <h2 className="heading-2 text-center mb-4">Our Services</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to your needs, delivered with military precision and exceptional craftsmanship.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="heading-3 mb-4">Residential Construction</h3>
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
              <h3 className="heading-3 mb-4">Commercial Projects</h3>
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
              <h3 className="heading-3 mb-4">Specialized Services</h3>
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
      <section className="section bg-dark-brown text-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">The VBS Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <ShieldCheckIcon className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Veteran-Owned</h3>
              <p>Military values of discipline, leadership, and excellence in every project.</p>
            </div>
            <div>
              <CheckBadgeIcon className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Quality Guaranteed</h3>
              <p>Comprehensive warranty coverage and commitment to excellence.</p>
            </div>
            <div>
              <TrophyIcon className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Award-Winning Service</h3>
              <p>Recognized for outstanding craftsmanship and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            From concept to completion, we're here to bring your vision to life with military precision
            and unmatched craftsmanship.
          </p>
          <Link
            to="/consultation"
            className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-all"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-6">Featured Projects</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore our latest transformations and see how we bring visions to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/custom-home.jpg"
                alt="Custom Home Project"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Custom Home Build</h3>
                  <p className="text-sm">Modern design meets comfort in this custom-built residence.</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/kitchen-renovation.jpg"
                alt="Kitchen Renovation"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Kitchen Renovation</h3>
                  <p className="text-sm">A stunning transformation of a dated kitchen into a modern culinary haven.</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/office-buildout.jpg"
                alt="Office Buildout"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Commercial Office Buildout</h3>
                  <p className="text-sm">Creating productive and inspiring workspaces for modern businesses.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center text-primary font-semibold hover:text-dark-brown transition-colors group"
            >
              View All Projects
              <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section bg-cream">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-6">Our Service Area</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Proudly serving Washington DC, Maryland, and Virginia with exceptional construction services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1617695103171-8f9c25f014f7"
                  alt="Washington DC"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Washington DC</h3>
              <p className="text-gray-600">Full service coverage throughout the District of Columbia</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1630859255236-b5f47402c963"
                  alt="Maryland"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Maryland</h3>
              <p className="text-gray-600">Serving Montgomery and Prince George's Counties</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1599769568487-b45c1e76b23c"
                  alt="Virginia"
                  className="w-full h-48 object-cover rounded-lg"
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
