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
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase text-sm tracking-widest font-semibold mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            With Trustworthy Service and Expertise, We’re Here to Help.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team of experienced engineers delivers reliable automation solutions across a range of industrial applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-background shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden border border-border"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-center text-blue-600 mb-4 text-xl">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-lg font-semibold text-center text-primary mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground text-center">{service.description}</p>
              </CardContent>
              <CardFooter className="pb-6 flex justify-center">
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
