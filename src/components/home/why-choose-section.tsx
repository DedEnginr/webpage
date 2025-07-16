export function WhyChooseSection() {
  const reasons = [
    {
      title: "Quality",
      description: "We are committed to delivering the highest quality solutions and products",
      icon: "fas fa-award"
    },
    {
      title: "Expertise",
      description: "Our team of experts has years of experience in industrial automation",
      icon: "fas fa-brain"
    },
    {
      title: "Client Satisfaction",
      description: "We are dedicated to building long-lasting relationships with our clients",
      icon: "fas fa-handshake"
    },
    {
      title: "Affordable Price",
      description: "We understand the importance of staying within your budget constraints",
      icon: "fas fa-tag"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-blue-600 font-semibold mb-2">WHY CHOOSE US?</div>
          <h2 className="text-3xl font-bold mb-4">Why Choose Trident Automation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trident Automation strives to maintain its position as a leading automation company
            providing world-class services and customer support, building our business on a
            foundation of highly satisfied customers at both OEM and end-user levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                <i className={`${reason.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}