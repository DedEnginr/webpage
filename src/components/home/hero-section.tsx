import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center">
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
      
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Industrial Automation Solutions
          </h1>
          <p className="text-xl mb-8">
            Expert PLC programming, HMI design, and control systems integration for modern industries
          </p>
          <div className="space-x-4">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/services">Our Services</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}