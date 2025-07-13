import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/placeholder-hero.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-lg font-medium mb-3">Welcome To</h2>
            <h1 className="text-5xl font-bold mb-6">Trident Automation</h1>
            <p className="text-xl mb-8">
              Industrial automation solutions provider specializing in PLC, HMI, SCADA programming and industrial control systems
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg shadow-lg w-full h-64 bg-gray-300"></div>
            </div>
            <div>
              <h3 className="text-blue-600 font-medium mb-2">WHO WE ARE?</h3>
              <h2 className="text-4xl font-bold mb-6">
                Trident <span className="text-blue-600">Automation</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Industrial automation solutions provider
              </p>
              <p className="text-gray-600 mb-6">
                We provide industrial automation solutions and system integration of <span className="font-medium">PLC</span> automation and a wide range of products that involve electrical and electronic systems, industrial automation controls, and PLC HMI SCADA programming, building and installing automated machines.
              </p>
              <p className="text-gray-600 mb-6">
                We manufacture industrial automation panels suitable for AC/DC drives, PLCs, HMIs, VFDs, SCADA, Servo, Stepper etc. The panels are designed for industrial safety standards and client quality expectations.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Explore More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50" id="products">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-blue-600 font-medium mb-2">OUR PRODUCTS</h3>
            <h2 className="text-4xl font-bold">Products We Offer</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Product 1", image: "/placeholder-product.jpg" },
              { name: "Product 2", image: "/placeholder-product.jpg" },
              { name: "Product 3", image: "/placeholder-product.jpg" },
              { name: "Product 4", image: "/placeholder-product.jpg" }
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="h-48 overflow-hidden relative">
                  <div className="w-full h-full bg-gray-300"></div>
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-20"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <Button variant="link" className="p-0 text-blue-600 flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ChevronRight size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-blue-600 font-medium mb-2">OUR SERVICES</h3>
            <h2 className="text-4xl font-bold mb-6">
              With Trustworthy Service And<br />
              Expertise, We're Here To Help.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "PLC Programming",
                description: "We provide high-quality PLC programming services."
              },
              {
                title: "HMI Design & Development",
                description: "Custom HMI solutions for your automation needs."
              },
              {
                title: "VFD Drive Installation",
                description: "Professional installation of VFD drive systems."
              },
              {
                title: "Servo & Stepper Programming",
                description: "Expert programming for precise motion control."
              }
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-5 w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="link" className="p-0 text-blue-600 flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ChevronRight size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-blue-600 font-medium mb-2">WHY CHOOSE US?</h3>
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Trident Automation
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We seek to maintain our position as a leading automation company 
              that provides world-class services and customer support built on a 
              foundation of satisfied clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quality",
                description: "We prioritize quality in everything we do",
                icon: "🏆"
              },
              {
                title: "Expertise",
                description: "Our team brings years of industry experience",
                icon: "👨‍💻"
              },
              {
                title: "Client Satisfaction",
                description: "We focus on building long-lasting relationships",
                icon: "🤝"
              },
              {
                title: "Affordable Price",
                description: "Competitive pricing without compromising quality",
                icon: "💰"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Proven Track Record With Delivering Solid Performance
          </h2>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Get Instant Quote
          </Button>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-blue-600 font-medium mb-2">PARTNERS</h3>
            <h2 className="text-4xl font-bold">
              Our Partners & Solutions
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                <div className="w-full h-16 bg-gray-200 animate-pulse rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}