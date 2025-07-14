import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

export function BrandsSection() {
  const brands = [
    {
      name: "PLCs",
      image: "/assets/images/brand1.jpg",
      link: "/products/plcs"
    },
    {
      name: "HMIs",
      image: "/assets/images/brand2.jpg",
      link: "/products/hmis"
    },
    {
      name: "Drives",
      image: "/assets/images/brand3.jpg",
      link: "/products/drives"
    },
    {
      name: "Servo Systems",
      image: "/assets/images/brand4.jpg",
      link: "/products/servo-systems"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-blue-600 font-semibold mb-2">OUR PRODUCTS</div>
          <h2 className="text-3xl font-bold">Brands We Offer</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Link to={brand.link} key={index}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative group overflow-hidden">
                    <img 
                      src={brand.image} 
                      alt={`${brand.name} product`} 
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 w-full">
                        <h3 className="text-xl font-semibold text-white mb-2">{brand.name}</h3>
                        <span className="inline-block text-blue-300 text-sm">Read More</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}