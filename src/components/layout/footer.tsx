import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">TRIDENT AUTOMATION</h3>
            <p className="mb-4">
              We provide industrial automation solutions and system integration for PLC automation 
              and a wide range of products across all major brands.
            </p>
            <Link to="/about" className="text-accent hover:text-accent-foreground">
              Read More
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="hover:text-accent-foreground transition-colors duration-200"
                  >
                    <span className="mr-2">»</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">OUR PRODUCTS</h3>
            <ul className="space-y-2">
              {['PLCs', 'HMIs', 'Drives', 'Servo Systems'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/products/${item.toLowerCase().replace(' ', '-')}`} 
                    className="hover:text-accent-foreground transition-colors duration-200"
                  >
                    <span className="mr-2">»</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
            <p className="mb-2">Trident Automation</p>
            <p className="mb-2">9/A Mandaveli 1st street,</p>
            <p className="mb-2">Nerkundram chennai - 600107</p>
            <p className="mb-2">
              <a href="tel:+91 73387 43478" className="hover:text-accent-foreground transition-colors duration-200">+91 73387 43478</a>
            </p>
            <p className="mb-4">
              <a href="mailto:info@tridentautomation.com" className="hover:text-accent-foreground transition-colors duration-200">
                info@tridentautomation.com
              </a>
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent-foreground transition-colors duration-200"
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-accent py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© Copyright - Trident Automation - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}