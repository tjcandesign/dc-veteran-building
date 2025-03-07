import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Warranty', href: '/warranty' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <>
      <div className="h-20" /> {/* Spacer for fixed navbar */}
      <Disclosure as="nav" className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-brown/95 shadow-lg backdrop-blur-sm' : 'bg-dark-brown'} text-white border-b border-white/10`}>
      {({ open }) => (
        <>
          <div className="container">
            <div className="relative flex h-20 items-center justify-between">
              <div className="flex items-center">
                <Link to="/" className="flex items-center group">
                  <img
                    className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                    src="/images/VBS Logo Horizontal White.svg"
                    alt="VBS Logo"
                  />
                  <img
                    className="h-6 w-auto ml-3 transition-transform duration-300 group-hover:scale-110"
                    src="/images/Flag.svg"
                    alt="American Flag"
                  />
                </Link>
              </div>
              
              {/* Desktop navigation */}
              <div className="hidden md:flex md:items-center md:space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium transition-colors ${isActive(item.href) ? 'text-primary' : 'hover:text-primary'}`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/consultation"
                  className="btn-primary hover:scale-105 transform transition-transform"
                >
                  Book Consultation
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-primary/10 hover:text-primary focus:outline-none transition-colors">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 transition-transform duration-300 rotate-90 hover:text-primary" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 transition-transform duration-300 hover:text-primary" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden absolute top-full left-0 right-0 bg-dark-brown/95 backdrop-blur-sm shadow-lg transition-all duration-500 ease-in-out border-t border-white/10">
            <div className="container py-4 space-y-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={`block py-3 px-4 rounded-lg transition-all ${
                    isActive(item.href)
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'hover:bg-primary/5 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="pt-4">
                <Link
                  to="/consultation"
                  className="btn-primary block text-center w-full"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
      </Disclosure>
    </>
  );
}
