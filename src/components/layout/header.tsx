import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useMobile } from '@/hooks/use-mobile';
import { Link as ScrollLink } from 'react-scroll';

export function Header() {
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '#about-us' },
    // { name: 'PRODUCTS', path: '#products' },
    { name: 'SERVICES', path: '#services' },
    // { name: 'PROJECTS', path: '#projects' },
    { name: 'CONTACT US', path: '/contact' }
  ];

  return (
    <header className="w-full">
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
                  {navItems.map((item) =>
                    item.path.startsWith('#') ? (
                      <ScrollLink
                        key={item.name}
                        to={item.path.slice(1)} // remove '#'
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={() => setIsMenuOpen(false)}
                        className="py-2 hover:text-primary font-medium cursor-pointer"
                      >
                        {item.name}
                      </ScrollLink>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="py-2 hover:text-primary font-medium"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) =>
                item.path.startsWith('#') ? (
                  <ScrollLink
                    key={item.name}
                    to={item.path.slice(1)}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-foreground hover:text-primary font-medium text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-foreground hover:text-primary font-medium text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
