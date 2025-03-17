import { Link } from 'react-router-dom';
import { UserGroupIcon, BuildingOfficeIcon, ShieldCheckIcon, StarIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-dark-brown text-white min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/ourteam.jpg"
            alt="DC Veteran Building Services Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 max-w-4xl leading-tight">
            Building Excellence with Military Precision
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-gray-100">
            A veteran-owned construction company bringing discipline, integrity, and
            unmatched attention to detail to every project in the DC metro area.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl mb-8">
              To deliver exceptional construction services with the same dedication,
              discipline, and attention to detail that we learned in military service.
              We're committed to building not just structures, but lasting relationships
              with our clients and community.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-cream">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <ShieldCheckIcon className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Integrity</h3>
              <p>Honest communication and transparent pricing in everything we do.</p>
            </div>
            <div className="text-center">
              <StarIcon className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p>Uncompromising quality in every project we undertake.</p>
            </div>
            <div className="text-center">
              <UserGroupIcon className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Service</h3>
              <p>Dedicated to exceeding client expectations at every step.</p>
            </div>
            <div className="text-center">
              <BuildingOfficeIcon className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Reliability</h3>
              <p>Consistent, dependable service you can count on.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              className="relative p-8 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 min-h-[350px]"
              style={{
                backgroundImage: `url('/images/project operators.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/75 group-hover:bg-black/65 transition-all duration-300"></div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">Project Operators</h3>
                <p className="text-gray-100">Experienced professionals managing every aspect of your project.</p>
              </div>
            </div>
            <div 
              className="relative p-8 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 min-h-[350px]"
              style={{
                backgroundImage: `url('/images/skilled craftsmen.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/75 group-hover:bg-black/65 transition-all duration-300"></div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">Skilled Craftsmen</h3>
                <p className="text-gray-100">Expert builders bringing your vision to life with precision.</p>
              </div>
            </div>
            <div 
              className="relative p-8 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 min-h-[350px]"
              style={{
                backgroundImage: `url('/images/design team.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/75 group-hover:bg-black/65 transition-all duration-300"></div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">Design Team</h3>
                <p className="text-gray-100">Creative professionals helping shape your perfect space.</p>
              </div>
            </div>
            <div 
              className="relative p-8 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 min-h-[350px]"
              style={{
                backgroundImage: `url('/images/support staff.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/75 group-hover:bg-black/65 transition-all duration-300"></div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">Support Staff</h3>
                <p className="text-gray-100">Dedicated team ensuring smooth project coordination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veteran Connection */}
      <section className="section bg-dark-brown text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Veteran Connection</h2>
            <p className="text-xl mb-8">
              As a veteran-owned business, we bring military values of leadership,
              discipline, and excellence to the construction industry. Our background
              has taught us the importance of precision, teamwork, and getting the
              job done right the first time.
            </p>
            <Link
              to="/consultation"
              className="btn-primary inline-block"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
