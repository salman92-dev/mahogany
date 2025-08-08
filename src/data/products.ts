import sofa from "@/assets/product-sofa.jpg";
import dining from "@/assets/product-dining-table.jpg";
import armchair from "@/assets/product-armchair.jpg";
import bed from "@/assets/product-bed.jpg";
import sideboard from "@/assets/product-sideboard.jpg";
import coffee from "@/assets/product-coffee-table.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  material: string;
  description: string;
};

export const products: Product[] = [
  { id: 'sofa-aurora', name: 'Aurora 3-Seater Sofa', price: 285000, image: sofa, category: 'Sofas', material: 'Linen & Walnut', description: 'A refined 3-seater with kiln-dried walnut frame and removable linen cushions for breathable comfort.' },
  { id: 'table-horizon', name: 'Horizon Dining Table', price: 345000, image: dining, category: 'Tables', material: 'Solid Walnut', description: 'A chamfered-edge table in premium walnut, finished in natural oil for a tactile, matte feel.' },
  { id: 'chair-atlas', name: 'Atlas Armchair', price: 165000, image: armchair, category: 'Seating', material: 'Leather & Walnut', description: 'Mid-century silhouette with full-grain cognac leather and sculpted walnut frame.' },
  { id: 'bed-serene', name: 'Serene Bed Frame', price: 385000, image: bed, category: 'Bedroom', material: 'Walnut & Fabric', description: 'Low-profile platform bed with upholstered headboard and balanced center support.' },
  { id: 'sideboard-ember', name: 'Ember Sideboard', price: 255000, image: sideboard, category: 'Storage', material: 'Walnut & Brass', description: 'Minimalist storage with soft-close doors and brushed brass hardware.' },
  { id: 'coffee-round', name: 'Round Coffee Table', price: 125000, image: coffee, category: 'Tables', material: 'Solid Walnut', description: 'Compact round table with beveled edge and durable, hand-rubbed finish.' },
];

export const getProductById = (id: string) => products.find(p => p.id === id);

export const allCategories = Array.from(new Set(products.map(p => p.category)));
export const allMaterials = Array.from(new Set(products.map(p => p.material)));

export const priceBounds = {
  min: Math.min(...products.map(p => p.price)),
  max: Math.max(...products.map(p => p.price)),
};
