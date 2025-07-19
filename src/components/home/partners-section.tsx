export function PartnersSection() {
  const partners = [
    { name: "Siemens", logo: "/assets/brands/siemens.png" },
    { name: "Mitsubishi", logo: "/assets/brands/mitsubishi.png" },
    { name: "Omron", logo: "/assets/brands/omron.png" },
    { name: "Allen-Bradley", logo: "/assets/brands/allen-bradley.png" },
    { name: "Schneider Electric", logo: "/assets/brands/schneider.png" },
    { name: "ABB", logo: "/assets/brands/abb.png" },
    { name: "FANUC", logo: "/assets/brands/fanuc.png" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Brands We Offer Supply & Support</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="w-36 h-36 flex items-center justify-center p-4 transition-all duration-300"
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                loading="lazy"
                className="max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
