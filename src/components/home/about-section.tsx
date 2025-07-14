export function AboutSection() {
  return (
    <section id="about-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Who We Are</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Trident Automation is a leading provider of industrial automation solutions with over two decades of experience in the field.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Expertise in Industrial Automation</h3>
            <p className="mb-4 text-foreground/90">
              Our team of engineers and technicians specialize in designing, implementing, and maintaining automated systems for various industries including manufacturing, food processing, pharmaceuticals, and more.
            </p>
            <p className="mb-6 text-foreground/90">
              We combine cutting-edge technology with practical industry knowledge to deliver solutions that increase efficiency, reduce downtime, and optimize production processes.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Certified Engineers</h4>
                  <p className="text-sm text-muted-foreground">Industry-certified professionals</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">24/7 Support</h4>
                  <p className="text-sm text-muted-foreground">Round-the-clock technical assistance</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Fast Deployment</h4>
                  <p className="text-sm text-muted-foreground">Quick implementation of solutions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Scalable Solutions</h4>
                  <p className="text-sm text-muted-foreground">Systems that grow with your business</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="bg-muted rounded-lg overflow-hidden shadow-md mb-4 h-48">
                <img 
                  src="/assets/images/engineer-1.jpg" 
                  alt="Engineer working on control panel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-muted rounded-lg overflow-hidden shadow-md h-64">
                <img 
                  src="/assets/images/factory-automation.jpg" 
                  alt="Automated factory line" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="mt-8">
              <div className="bg-muted rounded-lg overflow-hidden shadow-md mb-4 h-64">
                <img 
                  src="/assets/images/control-system.jpg" 
                  alt="Modern control system" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-muted rounded-lg overflow-hidden shadow-md h-48">
                <img 
                  src="/assets/images/engineer-2.jpg" 
                  alt="Engineers collaborating" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}