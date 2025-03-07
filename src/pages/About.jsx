import { Link } from 'react-router-dom';
import { UserGroupIcon, BuildingOfficeIcon, ShieldCheckIcon, StarIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark-brown text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-6">About DC Veteran Building Services</h1>
          <p className="text-xl max-w-3xl">
            A veteran-owned construction company bringing military precision and excellence
            to every residential and commercial project in the DC metro area.
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
          <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-dark-brown text-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">Project Operators</h3>
                <p>Experienced professionals managing every aspect of your project.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-dark-brown text-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">Skilled Craftsmen</h3>
                <p>Expert builders bringing your vision to life with precision.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-dark-brown text-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">Design Team</h3>
                <p>Creative professionals helping shape your perfect space.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-dark-brown text-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">Support Staff</h3>
                <p>Dedicated team ensuring smooth project coordination.</p>
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
