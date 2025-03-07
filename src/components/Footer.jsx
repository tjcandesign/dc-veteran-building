import { Link } from 'react-router-dom';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-dark-brown text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img src="/images/hero-pattern.svg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 xl:grid-cols-[2fr,1fr,1fr,1fr] xl:gap-x-16">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src="/vbs-logo.svg"
                alt="VBS Logo"
                className="h-12 w-auto mb-4"
              />
              <h3 className="text-xl font-bold">DC Veteran Building Services</h3>
            </Link>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2 text-primary" />
                Serving DC, Maryland, and Virginia
              </p>
              <p className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2 text-primary" />
                <a href="tel:+12026009239" className="hover:text-primary transition-colors">
                  (202) 600-9239
                </a>
              </p>
              <p className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2 text-primary" />
                <a href="mailto:help@dcveteranbuildingservices.com" className="hover:text-primary transition-colors">
                  help@dcveteranbuildingservices.com
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                General Contracting
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Custom Home Building
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Home Additions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Specialized Renovations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Commercial Spaces
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary transition-colors flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-primary transition-colors flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="hover:text-primary transition-colors flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get Started</h3>
            <div className="bg-primary/10 rounded-lg p-6">
              <p className="mb-6 text-gray-300">
                Ready to transform your space? Book a consultation with our experts today.
              </p>
              <Link
                to="/consultation"
                className="btn-primary inline-flex items-center justify-center w-full group"
              >
                Book Consultation
                <svg
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} DC Veteran Building Services LLC. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Branding and Site Design by Workhorse Collective
              </p>
            </div>
            <div className="flex items-center space-x-6">
              {/* Social Media Icons */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.2c3.2,0,3.6,0,4.9.1,3.3.1,4.8,1.7,4.9,4.9.1,1.3.1,1.6.1,4.8,0,3.2,0,3.6-.1,4.8-.1,3.2-1.7,4.8-4.9,4.9-1.3.1-1.6.1-4.9.1-3.2,0-3.6,0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8,0-3.2,0-3.6.1-4.8C2.4,4,4,2.4,7.2,2.3,8.5,2.2,8.8,2.2,12,2.2ZM12,0C8.7,0,8.3,0,7.1.1,2.7.3.3,2.7.1,7.1,0,8.3,0,8.7,0,12s0,3.7.1,4.9c.2,4.4,2.6,6.8,7,7,1.2.1,1.6.1,4.9.1s3.7,0,4.9-.1c4.4-.2,6.8-2.6,7-7,.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7,0,15.3,0,12,0Zm0,5.8A6.2,6.2,0,1,0,18.2,12,6.2,6.2,0,0,0,12,5.8Zm0,10.2A4,4,0,1,1,16,12,4,4,0,0,1,12,16Zm7.8-10.4a1.4,1.4,0,1,1-1.4-1.4A1.4,1.4,0,0,1,19.8,5.6Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,3a2,2,0,0,1,2,2V19a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H19m-.5,15.5V13.2a3.26,3.26,0,0,0-3.26-3.26h0a2.9,2.9,0,0,0-2.32,1.3V10.13H10.13V18.5h2.79V13.57a1.4,1.4,0,1,1,2.79,0V18.5H18.5M6.88,8.56A1.68,1.68,0,0,0,8.56,6.88,1.68,1.68,0,0,0,6.88,5.2,1.68,1.68,0,0,0,5.2,6.88,1.68,1.68,0,0,0,6.88,8.56M8.27,18.5V10.13H5.5V18.5Z" />
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
