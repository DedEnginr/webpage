import { Layout } from "@/components/layout/layout";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import ContactSection from "@/components/contact/contact-section";

export default function ContactPage() {
  return (
    <Layout>
      <div className="bg-primary flex h-60 sm:h-80 items-center justify-between">
        <div className="mx-auto px-4 text-primary-foreground">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto">
            Have questions or need assistance with your industrial automation needs?
            Get in touch with our team of experts today.
          </p>
        </div>
        <div className="hidden sm:block flex-shrink-0 w-1/2">
          <img
            className="w-full h-80 object-cover shadow-md"
            src="https://picsum.photos/seed/gpt/200/300"
            alt="Hero"
          />
        </div>
      </div>

      <section className="bg-background">
        <ContactSection />
        <div className="container my-32 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="bg-muted p-4 rounded-lg shadow-inner">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d202aa69f54!2sTech%20Park!5e0!3m2!1sen!2sus!4v1593180374793!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
}