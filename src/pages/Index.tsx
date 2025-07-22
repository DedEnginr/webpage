import { Layout } from "@/components/layout/layout";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
/*import { BrandsSection } from "@/components/home/brands-section";*/
import { ServicesSection } from "@/components/home/services-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { GallerySection } from "@/components/home/gallery-section";
/*import { TestimonialSection } from "@/components/home/testimonial-section";*/
import { PartnersSection } from "@/components/home/partners-section";
/*import { CallToAction } from "@/components/home/call-to-action";*/

export default function IndexPage() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <GallerySection />
      <PartnersSection />
    </Layout>
  );
}