import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function ServicesSection() {
  const services = [
    {
      icon: "fas fa-microchip",
      title: "PLC Programming",
      description: "Custom PLC programming for all major brands, tailored to your specific automation needs.",
      link: "/services/plc-programming",
      image: "/assets/images/plc-programming.jpg"
    },
    {
      icon: "fas fa-desktop",
      title: "HMI Design & Development",
      description: "User-friendly, intuitive HMI interfaces that provide efficient control and monitoring solutions.",
      link: "/services/hmi-design",
      image: "/assets/images/hmi.jpg"
    },
    {
      icon: "fas fa-cogs",
      title: "VFD Drive Installation",
      description: "Professional installation and configuration of variable frequency drives for motor control applications.",
      link: "/services/vfd-installation",
      image: "/assets/images/vfd.jpg"
    },
    {
      icon: "fas fa-robot",
      title: "Servo & Stepper Programming",
      description: "Precision motion control solutions with expert servo and stepper motor programming.",
      link: "/services/servo-programming",
      image: "/assets/images/factory-robot.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-blue-600 font-semibold mb-2">OUR SERVICES</div>
          <h2 className="text-3xl font-bold mb-4">
            With Trustworthy Service And Expertise, We're Here To Help.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of experienced engineers delivers reliable automation solutions across a range of industrial applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-t-4 border-blue-600 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                  <i className={`${service.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-center">
                <Link to={service.link} className="text-blue-600 hover:text-blue-800">
                  Read More
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}