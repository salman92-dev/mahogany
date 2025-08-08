import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  material: string;
};

export const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  return (
    <article className="card-elevated rounded-xl overflow-hidden">
      <Link to={`/product/${product.id}`} className="block">
        <img src={product.image} alt={`${product.name} product photo`} loading="lazy" className="w-full aspect-[4/3] object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="font-medium mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3">PKR {product.price.toLocaleString()}</p>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link to={`/product/${product.id}`}>View</Link>
          </Button>
          <Button size="sm" variant="secondary" onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}>
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  );
};
