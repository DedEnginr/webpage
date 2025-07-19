import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Michael Johnson",
      position: "Production Manager",
      company: "Need client Name",
      quote: "Trident Automation completely transformed our production line with their PLC programming expertise. Their team's attention to detail and commitment to quality resulted in a 30% increase in our production efficiency.",
      image: "/assets/images/testimonial1.jpg"
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "Operations Director",
      company: "Need client Name",
      quote: "We've been working with Trident Automation, and they continue to impress us with their innovative automation solutions. Their technical support is unmatched in the industry.",
      image: "/assets/images/testimonial2.jpg"
    },
    /*{
      id: 3,
      name: "Robert Chen",
      position: "Chief Engineer",
      company: "GlobalTech Industries",
      quote: "The HMI system designed by NexTech Solutions has significantly improved our monitoring capabilities. The user interface is intuitive and has reduced training time for new operators by 50%.",
      image: "/assets/images/testimonial3.jpg"
    }*/
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-blue-600 font-semibold mb-2">TESTIMONIALS</div>
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on delivering exceptional service and solutions that exceed our clients' expectations.
            Here's what some of our clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white p-8 shadow-md">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-blue-600 mb-4 text-2xl">❝</div>
                <p className="text-gray-700 mb-6 italic">
                  {testimonials[activeIndex].quote}
                </p>
                <div className="font-semibold text-lg">{testimonials[activeIndex].name}</div>
                <div className="text-gray-600">{testimonials[activeIndex].position}, {testimonials[activeIndex].company}</div>
              </div>
            </div>
          </Card>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <i className="fas fa-arrow-left"></i>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <i className="fas fa-arrow-right"></i>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}