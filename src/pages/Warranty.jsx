import { Link } from 'react-router-dom';
import { ShieldCheckIcon, ClockIcon, DocumentTextIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Warranty() {
  const coverageDetails = [
    {
      title: "Structural Elements",
      duration: "10 Years",
      items: [
        "Foundation",
        "Load-bearing walls",
        "Roof structure",
        "Floor joists and supports",
        "Structural defects"
      ]
    },
    {
      title: "Systems & Components",
      duration: "5 Years",
      items: [
        "Electrical systems",
        "Plumbing systems",
        "HVAC systems",
        "Waterproofing",
        "Insulation"
      ]
    },
    {
      title: "Workmanship & Materials",
      duration: "2 Years",
      items: [
        "Interior finishes",
        "Exterior finishes",
        "Doors and windows",
        "Flooring",
        "Paint and sealants"
      ]
    },
    {
      title: "Appliances & Fixtures",
      duration: "1 Year",
      items: [
        "Kitchen appliances",
        "Bathroom fixtures",
        "Light fixtures",
        "Cabinet hardware",
        "Door hardware"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark-brown text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-6">Warranty Coverage</h1>
          <p className="text-xl max-w-3xl">
            Our comprehensive warranty program reflects our commitment to quality
            and gives you peace of mind in your investment.
          </p>
        </div>
      </section>

      {/* Warranty Features */}
      <section className="section bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <ShieldCheckIcon className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Comprehensive Coverage</h3>
              <p>
                Full protection for structural elements, systems, and workmanship
                with tiered coverage periods.
              </p>
            </div>
            <div className="text-center">
              <ClockIcon className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
              <p>
                24-hour response time for urgent warranty claims and scheduled
                maintenance visits.
              </p>
            </div>
            <div className="text-center">
              <DocumentTextIcon className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Clear Documentation</h3>
              <p>
                Detailed warranty documentation and maintenance guidelines for
                your reference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="section">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Coverage Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coverageDetails.map((coverage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">{coverage.title}</h3>
                <p className="text-primary font-bold mb-4">{coverage.duration}</p>
                <ul className="space-y-2">
                  {coverage.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <span className="h-2 w-2 bg-primary rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Process */}
      <section className="section bg-cream">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Warranty Process</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Submit a Claim</h3>
                  <p>
                    Contact our warranty department through phone, email, or our online
                    form to report any issues covered under warranty.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Assessment</h3>
                  <p>
                    Our team will assess the issue and determine if it's covered
                    under warranty. We'll schedule an inspection if needed.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  3
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Resolution</h3>
                  <p>
                    We'll promptly address and resolve any warranty-covered issues
                    to your satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-dark-brown text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Need Warranty Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our warranty team is ready to assist you. Contact us for prompt service
            and support.
          </p>
          <div className="flex justify-center items-center space-x-6">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
