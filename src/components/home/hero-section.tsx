import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useMobile } from "@/hooks/use-mobile";
import { LucidePhoneCall, PhoneCallIcon, PhoneIcon } from "lucide-react";

export function HeroSection() {
  const isMobile = useMobile();

  return (
    <section id="home" className="relative h-[450px] md:h-[600px] flex items-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-primary/80 z-0"
        style={{
          backgroundImage: 'url("/assets/images/hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />

      <img
        src="/assets/images/logo-hero.png"
        alt="Overlay Image"
        className={`absolute z-10 pointer-events-none select-none 
          ${isMobile ? 'hidden' : 'right-10 bottom-4 w-1/3'}`}
      />

      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Industrial Automation Solutions
          </h1>
          <p className="text-xl mb-8">
            Expert PLC programming, HMI design, and control systems integration for modern industries
          </p>
          <div className="space-x-4">
            {/* Scroll to services section */}
            {/* <ScrollLink to="services" smooth={true} duration={500} offset={-70}>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Our Services
              </Button>
            </ScrollLink> */}

            {/* Route to contact page */}
            <Link to="/contact">
              <Button asChild>
                <div className="flex bg-accent h-16">
                  <p className="text-lg font-bold">
                    Get in Touch
                  </p>
                  <PhoneIcon size={14} />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
