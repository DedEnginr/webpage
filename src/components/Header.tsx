import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Clock, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMobile } from '@/hooks/use-mobile';


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMobile();

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/#about' },
    { name: 'PRODUCTS', href: '/#products' },
    { name: 'SERVICES', href: '/#services' },
    { name: 'PROJECTS', href: '/#projects' },
    { name: 'CONTACT US', href: '/contact-us' }
  ];

  return (
    <header className="shadow-sm bg-white">
      {/* Top bar */}
      <div className="bg-gray-100 py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a href="#" className="flex items-center text-sm text-gray-600 hover:text-blue-600">
                <Mail size={16} className="mr-2" />
                <span>contact@example.com</span>
              </a>
              <a href="#" className="flex items-center text-sm text-gray-600 hover:text-blue-600">
                <Phone size={16} className="mr-2" />
                <span>Phone Number</span>
              </a>
              <div className="flex items-center text-sm text-gray-600">
                <Clock size={16} className="mr-2" />
                <span>Business Hours</span>
              </div>
            </div>
            <div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs">
                GET INSTANT QUOTE
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Trident <span className="text-gray-800">Automation</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-50 transition-transform transform",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
          "md:hidden"
        )}
      >
        <div className="flex justify-end p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X />
          </Button>
        </div>
        <nav className="flex flex-col items-center space-y-6 p-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.href}
              className="text-lg font-medium text-gray-800 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-6">
            <Button className="bg-blue-600 hover:bg-blue-700 w-full">
              GET INSTANT QUOTE
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}