import { useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  zoom?: number; // e.g., 2 for 200%
};

export const ZoomableImage = ({ src, alt, zoom = 2 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setPos({ x, y });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseMove={onMove}
      className="relative overflow-hidden rounded-xl bg-muted"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: active ? `${zoom * 100}%` : "cover",
        backgroundPosition: `${pos.x}% ${pos.y}%`,
        aspectRatio: '4 / 3',
      }}
      aria-label={alt}
      role="img"
    >
      {/* For accessibility, include an offscreen img */}
      <img src={src} alt={alt} className="sr-only" />
    </div>
  );
};
