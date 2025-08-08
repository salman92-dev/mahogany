import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-living-warm.jpg";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpot({ x, y });
  };

  return (
    <section className="relative overflow-hidden rounded-2xl section-subtle">
      <div
        ref={ref}
        onMouseMove={onMove}
        className="relative aspect-[16/9] w-full"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Spotlight overlay (signature moment) */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `radial-gradient(600px circle at ${spot.x}% ${spot.y}%, hsl(var(--background) / 0.0), hsl(var(--background) / 0.5))`,
            transition: "background 150ms ease-out",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-background/0" />

        <div className="absolute inset-0 flex items-end">
          <div className="container pb-12">
            <div className="max-w-2xl animate-enter">
              <h1 className="font-display text-4xl md:text-6xl leading-tight mb-4">Timeless furniture for modern living</h1>
              <p className="text-muted-foreground text-base md:text-lg mb-6">
                Designed in Pakistan. Crafted from solid walnut and natural fabrics. Made to last a lifetime.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="hero">
                  <Link to="/products">Explore Collection</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/about">Our Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
