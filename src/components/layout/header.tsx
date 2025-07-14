import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Shield } from "lucide-react";
import { useMobile } from '@/hooks/use-mobile';

export function Header() {
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '#about-us' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'CONTACT US', path: '/contact' }
  ];

  return (
    <header className="w-full">
      {/* Top bar */}
      {/* <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
          <div className="flex flex-wrap items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@tridentautomation.com" className="hover:text-accent-foreground">info@tridentautomation.com</a>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <i className="fas fa-phone"></i>
              <a href="tel:+1-555-123-4567" className="hover:text-accent-foreground">+1-555-123-4567</a>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <i className="far fa-clock"></i>
              <span>Mon-Fri: 8:00am - 6:00pm</span>
            </div>
          </div>
          <div>
            <Button variant="outline" size="sm" className="bg-accent hover:bg-accent/80 text-accent-foreground border-none text-xs">
              GET A QUOTE
            </Button>
          </div>
        </div>
      </div> */}

      {/* Main header */}
      <div className="bg-card py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-sm flex items-center justify-center">
              <img src="/assets/images/logo.png" />
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">Trident</span>
              <span className="text-2xl font-bold text-muted-foreground">Automation</span>
            </div>
          </Link>

          {isMobile ? (
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="py-2 hover:text-primary font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-foreground hover:text-primary font-medium text-sm transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}