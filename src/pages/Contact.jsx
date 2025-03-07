import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark-brown text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Get in touch with our team to discuss your construction needs or
            schedule a consultation.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <PhoneIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-lg">
                <a href="tel:+12026009239" className="hover:text-primary transition-colors">
                  (202) 600-9239
                </a>
              </p>
            </div>
            <div className="text-center">
              <EnvelopeIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-lg">
                <a href="mailto:help@dcveteranbuildingservices.com" className="hover:text-primary transition-colors">
                  help@dcveteranbuildingservices.com
                </a>
              </p>
            </div>
            <div className="text-center">
              <MapPinIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Service Area</h3>
              <p className="text-lg">Washington DC, Maryland, and Virginia</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form 
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <input name="bot-field" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="section bg-cream">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Our Service Area</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Washington DC</h3>
              <ul className="space-y-2">
                <li>All Neighborhoods</li>
                <li>Georgetown</li>
                <li>Capitol Hill</li>
                <li>Adams Morgan</li>
                <li>Navy Yard</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Maryland</h3>
              <ul className="space-y-2">
                <li>Bethesda</li>
                <li>Silver Spring</li>
                <li>Rockville</li>
                <li>Chevy Chase</li>
                <li>Potomac</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Virginia</h3>
              <ul className="space-y-2">
                <li>Arlington</li>
                <li>Alexandria</li>
                <li>McLean</li>
                <li>Falls Church</li>
                <li>Vienna</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="section">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Business Hours</h2>
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-bold">Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Saturday</span>
                <span>9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
