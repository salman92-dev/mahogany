import { Hero } from "@/components/Hero";
import { Seo } from "@/components/Seo";
import { Link } from "react-router-dom";
import { ShieldCheck, Star, Truck } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const Index = () => {
  const featured = products.slice(0, 3);

  return (
    <>
      <Seo
        title="Mahogany Studio – Premium Furniture Pakistan"
        description="Luxurious, minimal furniture handcrafted in Pakistan. Explore sofas, tables, and storage in warm, earthy materials. Secure checkout and nationwide delivery."
        canonical="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Mahogany Studio',
          url: '/',
          sameAs: [],
        }}
      />
      <Hero />

      {/* Featured Collections */}
      <section className="mt-12">
        <header className="mb-6">
          <h2 className="font-display text-3xl">Featured Pieces</h2>
          <p className="text-muted-foreground">A preview of our most loved designs.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link className="story-link" to="/products">Browse the full collection</Link>
        </div>
      </section>

      {/* Reviews */}
      <section className="mt-16">
        <header className="mb-6">
          <h2 className="font-display text-3xl">What clients say</h2>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <article key={i} className="rounded-xl p-6 card-elevated">
              <div className="flex items-center gap-1 text-accent mb-2">
                <Star className="h-4 w-4 fill-current"/>
                <Star className="h-4 w-4 fill-current"/>
                <Star className="h-4 w-4 fill-current"/>
                <Star className="h-4 w-4 fill-current"/>
                <Star className="h-4 w-4 fill-current"/>
              </div>
              <p className="text-sm text-muted-foreground">“Exceptional craftsmanship and seamless delivery. The walnut finish is gorgeous and the sofa feels built to last.”</p>
              <p className="mt-3 text-sm font-medium">— Ayesha, Lahore</p>
            </article>
          ))}
        </div>
      </section>

      {/* Trust badges */}
      <section className="mt-16 rounded-2xl p-6 section-subtle">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6"/>
            <div>
              <p className="font-medium">5-Year Warranty</p>
              <p className="text-sm text-muted-foreground">On frames and hardware</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="h-6 w-6"/>
            <div>
              <p className="font-medium">Nationwide Delivery</p>
              <p className="text-sm text-muted-foreground">Secure and insured</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6"/>
            <div>
              <p className="font-medium">Secure Checkout</p>
              <p className="text-sm text-muted-foreground">Encrypted payments</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
