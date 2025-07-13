import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">TRIDENT AUTOMATION</h3>
            <p className="text-gray-300 mb-6">
              We provide industrial automation solutions and system integration of PLC automation.
            </p>
            <Link 
              to="/about" 
              className="text-blue-400 hover:text-blue-300 inline-flex items-center"
            >
              Read More
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">QUICK LINKS</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/#about' },
                { name: 'Services', href: '/#services' },
                { name: 'Contact Us', href: '/#contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 inline-flex items-center"
                  >
                    <span className="mr-2">»</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-xl font-bold mb-6">OUR PRODUCTS</h3>
            <ul className="space-y-3">
              {[
                { name: 'Product 1', href: '/#product1' },
                { name: 'Product 2', href: '/#product2' },
                { name: 'Product 3', href: '/#product3' },
                { name: 'Product 4', href: '/#product4' },
              ].map((product, index) => (
                <li key={index}>
                  <Link 
                    to={product.href}
                    className="text-gray-300 hover:text-blue-400 inline-flex items-center"
                  >
                    <span className="mr-2">»</span> {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6">CONTACT US</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Company Address</span>
              </p>
              <p>
                <a href="#" className="flex items-center text-gray-300 hover:text-blue-400">
                  <Phone size={18} className="mr-2 flex-shrink-0" />
                  <span>Phone Number</span>
                </a>
              </p>
              <p>
                <a href="#" className="flex items-center text-gray-300 hover:text-blue-400">
                  <Mail size={18} className="mr-2 flex-shrink-0" />
                  <span>contact@example.com</span>
                </a>
              </p>
            </address>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © Copyright - <Link to="/" className="hover:text-blue-400">Trident Automation</Link> - All Rights Reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Designed & Developed by MGX
          </p>
        </div>
      </div>
    </footer>
  );
}