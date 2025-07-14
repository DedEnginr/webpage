import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CallToAction() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Proven Track Records With Delivering Solid Performance & Strong Reputations
        </h2>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to="/contact">Get a Quote</Link>
        </Button>
      </div>
    </section>
  );
}