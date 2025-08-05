import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

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
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {[{ name: 'Home', link: "#home" }, { name: 'About Us', link: "#about-us" }, { name: 'Services', link: "#services" }, { name: 'Contact', link: "/contact" }].map((item) => (
                <li key={item.name}>
                  {item.link.startsWith('#') ? (
                    <ScrollLink
                      key={item.name}
                      to={item.link.slice(1)} // remove '#'
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="py-2 hover:text-accent-foreground font-medium cursor-pointer"
                    >
                      {item.name}
                    </ScrollLink>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.link}
                      className="py-2 hover:text-accent-foreground font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">OUR SERVICES</h3>
            <ul className="space-y-2">
              {['PLCs', 'HMIs', 'Drives', 'Servo Systems'].map((item) => (
                <li key={item} className="text-primary-foreground hover:text-accent-foreground transition-colors duration-200">
                  <span className="mr-2">»</span>
                  {item}
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
              <a href="mailto:admin@tridentautomation.in" className="hover:text-accent-foreground transition-colors duration-200">
                admin@tridentautomation.in
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
      <div className="bg-muted/80 py-4 border-t border-border">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p className="mb-2 md:mb-0">© 2025 Trident Automation — All Rights Reserved.</p>
          <div className="flex items-center space-x-2">
            <img src="/assets/images/logo.png" alt="Trident Logo" className="h-5 w-auto" />
            <span className="font-medium tracking-wide text-xs md:text-sm">Trident Automation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}