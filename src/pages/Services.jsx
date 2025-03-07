import { Link } from 'react-router-dom';
import { HomeIcon, BuildingOfficeIcon, WrenchScrewdriverIcon, SwatchIcon } from '@heroicons/react/24/outline';

export default function Services() {
  const services = [
    {
      title: "Residential Construction",
      icon: HomeIcon,
      description: "Complete home building and renovation services for your dream space.",
      items: [
        "Custom Home Building",
        "Home Additions",
        "Kitchen Remodeling",
        "Bathroom Renovations",
        "Basement Finishing",
        "Deck & Patio Construction"
      ]
    },
    {
      title: "Commercial Construction",
      icon: BuildingOfficeIcon,
      description: "Professional spaces built to enhance your business operations.",
      items: [
        "Office Build-Outs",
        "Retail Spaces",
        "Restaurant Construction",
        "Warehouse Facilities",
        "Showroom Design",
        "Commercial Renovations"
      ]
    },
    {
      title: "Specialized Services",
      icon: WrenchScrewdriverIcon,
      description: "Expert solutions for specific construction needs.",
      items: [
        "Historic Renovations",
        "Green Building",
        "ADA Compliance Updates",
        "Structural Repairs",
        "Site Preparation",
        "Project Recovery"
      ]
    },
    {
      title: "Design Services",
      icon: SwatchIcon,
      description: "Comprehensive design solutions to bring your vision to life.",
      items: [
        "Architectural Design",
        "Interior Design",
        "3D Visualization",
        "Space Planning",
        "Material Selection",
        "Color Consultation"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark-brown text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive construction services delivered with military precision and
            unmatched attention to detail.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="relative p-8 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
                style={{
                  backgroundImage: `url('/images/${service.title.toLowerCase().replace(/ /g, '')}.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <service.icon className="h-12 w-12 text-primary mb-6" />
                  <h2 className="text-2xl font-bold mb-4 text-white">{service.title}</h2>
                  <p className="text-gray-200 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-white">
                        <span className="h-2 w-2 bg-primary rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-cream mb-[75px]">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-dark-brown text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p>Initial meeting to discuss your project needs and vision</p>
            </div>
            <div className="text-center">
              <div className="bg-dark-brown text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Planning</h3>
              <p>Detailed project planning and design development</p>
            </div>
            <div className="text-center">
              <div className="bg-dark-brown text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Execution</h3>
              <p>Professional construction with regular updates</p>
            </div>
            <div className="text-center">
              <div className="bg-dark-brown text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Completion</h3>
              <p>Final inspection and project handover</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expert construction services.
          </p>
          <Link
            to="/consultation"
            className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-all"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
