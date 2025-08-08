import { useParams } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { getProductById } from "@/data/products";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productId ? getProductById(productId) : undefined;
  const { addItem } = useCart();

  if (!product) return <p>Product not found.</p>;

  return (
    <>
      <Seo
        title={`${product.name} – Mahogany Studio`}
        description={product.description}
        canonical={`/product/${product.id}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          image: [product.image],
          description: product.description,
          offers: { '@type': 'Offer', priceCurrency: 'PKR', price: product.price, availability: 'https://schema.org/InStock' }
        }}
      />
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <ZoomableImage src={product.image} alt={`${product.name} zoomable image`} />
        </div>
        <div>
          <h1 className="font-display text-3xl mb-2">{product.name}</h1>
          <p className="text-lg mb-4">PKR {product.price.toLocaleString()}</p>
          <p className="text-muted-foreground mb-6">{product.description}</p>
          <div className="grid gap-4 text-sm mb-6">
            <div><span className="text-muted-foreground">Category:</span> {product.category}</div>
            <div><span className="text-muted-foreground">Material:</span> {product.material}</div>
            <div><span className="text-muted-foreground">Lead time:</span> 2–3 weeks</div>
          </div>
          <div className="flex gap-3">
            <Button variant="premium" onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}>Add to Cart</Button>
            <Button variant="outline">Book a Viewing</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
