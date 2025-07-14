import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function GallerySection() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
    description: string;
  } | null>(null);
  
  const galleryImages = [
    {
      src: "/assets/images/factory-automation.jpg",
      alt: "Factory Automation Systems",
      title: "Smart Factory Integration",
      description: "Complete factory automation system with advanced PLC controls"
    },
    {
      src: "/assets/images/control-panel.jpg",
      alt: "Industrial Control Panels",
      title: "Custom Control Panel",
      description: "Fully customized control panel with Siemens S7 PLC integration"
    },
    {
      src: "/assets/images/plc-programming.jpg",
      alt: "PLC Programming & Integration",
      title: "PLC Programming",
      description: "Advanced ladder logic and structured text programming"
    },
    {
      src: "/assets/images/automation-system.jpg",
      alt: "Automation Control Systems",
      title: "Process Control System",
      description: "Complete SCADA system for manufacturing process control"
    },
    {
      src: "/assets/images/factory-robot.jpg",
      alt: "Industrial Robotics",
      title: "Robotic Integration",
      description: "Industrial robot integration with safety systems"
    },
    {
      src: "/assets/images/assembly-line.jpg",
      alt: "Assembly Line Automation",
      title: "Assembly Line Control",
      description: "Fully automated assembly line with distributed control systems"
    }
  ];

  const openModal = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    setOpen(true);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-blue-600 font-semibold mb-2">OUR WORKS</div>
          <h2 className="text-3xl font-bold">Our Works Gallery</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg cursor-pointer relative group"
              onClick={() => openModal(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                <p className="text-sm text-center mb-4">{image.description}</p>
                <Button variant="outline" className="text-white border-white hover:bg-white/20">
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 w-full max-w-4xl bg-white">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3">
              <img 
                src={selectedImage?.src} 
                alt={selectedImage?.alt || "Project detail"} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/3 p-6 flex flex-col">
              <h2 className="text-2xl font-bold mb-4">{selectedImage?.title}</h2>
              <p className="text-gray-600 mb-6">{selectedImage?.description}</p>
              
              <div className="border-t border-gray-200 pt-4 mt-auto">
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">PLC</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">SCADA</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">HMI</span>
                </div>
              </div>
              
              <Button className="mt-6 w-full">Request Similar Solution</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}