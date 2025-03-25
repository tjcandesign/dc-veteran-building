import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Our Company', href: '/about' },
  { name: 'Services', href: '/services' },
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
      <div className="h-24" /> {/* Spacer for fixed navbar */}
      <Disclosure as="nav" className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-brown/95 shadow-lg backdrop-blur-sm' : 'bg-dark-brown'} text-white border-b border-white/10`}>
      {({ open }) => (
        <>
          <div className="w-full px-4 xl:px-24 mx-auto">
            <div className="relative flex h-24 items-center justify-between">
              <div className="flex items-center">
                <Link to="/" className="flex items-center group">
                  <img
                    className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                    src="/images/VBS Logo Horizontal White.svg"
                    alt="VBS Logo"
                  />
                </Link>
              </div>
              
              {/* Desktop navigation */}
              <div className="hidden md:flex md:items-center md:space-x-6 ml-auto">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,1)] ${isActive(item.href) ? 'text-primary' : 'hover:text-primary'}`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="w-8" />
                <Link
                  to="/consultation"
                  className="btn-primary inline-flex items-center justify-center group"
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

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center focus:outline-none transition-colors">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8 transition-transform duration-300 rotate-90 hover:text-primary" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8 transition-transform duration-300 hover:text-primary" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden absolute top-full left-0 right-0 bg-[#1a1310]/95 backdrop-blur-sm shadow-lg transition-all duration-500 ease-in-out border-t border-white/10">
            <div className="w-full px-4 xl:px-24 mx-auto py-4 space-y-2">
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
          </Disclosure.Panel>
        </>
      )}
      </Disclosure>
    </>
  );
}
