import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Our Location",
      details: [
        "123 Industrial Avenue",
        "Tech Park, Suite 456",
        "Automation City, AC 98765"
      ]
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone Number",
      details: [
        "+1 (555) 123-4567",
        "+1 (555) 987-6543"
      ],
      link: "tel:+15551234567"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Address",
      details: [
        "info@nextechsolutions.com",
        "support@nextechsolutions.com"
      ],
      link: "mailto:info@nextechsolutions.com"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Working Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const directContactMethods = [
    {
      name: "WhatsApp",
      icon: <MessageSquare className="h-6 w-6" />,
      link: "https://wa.me/15551234567", // Replace with actual WhatsApp number
      bgColor: "bg-primary",
      hoverColor: "hover:bg-primary/90"
    },
    {
      name: "Email",
      icon: <Mail className="h-6 w-6" />,
      link: "mailto:info@nextechsolutions.com",
      bgColor: "bg-primary",
      hoverColor: "hover:bg-primary/90"
    },
    {
      name: "Phone",
      icon: <Phone className="h-6 w-6" />,
      link: "tel:+15551234567",
      bgColor: "bg-primary",
      hoverColor: "hover:bg-primary/90"
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-primary">Contact Information</h2>
      
      {/* Direct Contact Buttons */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Contact Us Directly</h3>
        <div className="flex flex-wrap gap-4">
          {directContactMethods.map((method, index) => (
            <a 
              key={index} 
              href={method.link} 
              className="inline-block"
            >
              <Button 
                className={`${method.bgColor} ${method.hoverColor} text-white transition-all flex items-center gap-2 py-6 px-6`}
                size="lg"
                variant="default"
              >
                {method.icon}
                <span className="font-medium">{method.name}</span>
              </Button>
            </a>
          ))}
        </div>
      </div>
      
      {/* Contact Details Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactDetails.map((item, index) => (
          <Card key={index} className="bg-muted border-none">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <div className="text-muted-foreground">
                    {item.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                    {item.link && (
                      <a 
                        href={item.link} 
                        className="text-primary hover:underline block mt-2"
                      >
                        Click to {item.title === "Phone Number" ? "call" : "email"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}