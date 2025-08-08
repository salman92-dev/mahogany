import { useMemo, useState } from "react";
import { Seo } from "@/components/Seo";
import { allCategories, allMaterials, priceBounds, products } from "@/data/products";
import { Filters, FiltersSidebar } from "@/components/FiltersSidebar";
import { ProductCard } from "@/components/ProductCard";

const Products = () => {
  const [filters, setFilters] = useState<Filters>({ price: [priceBounds.min, priceBounds.max], categories: [], materials: [] });

  const result = useMemo(() => {
    return products.filter((p) => {
      const priceOk = p.price >= filters.price[0] && p.price <= filters.price[1];
      const catOk = filters.categories.length ? filters.categories.includes(p.category) : true;
      const matOk = filters.materials.length ? filters.materials.includes(p.material) : true;
      return priceOk && catOk && matOk;
    });
  }, [filters]);

  return (
    <>
      <Seo
        title="Shop Furniture – Mahogany Studio"
        description="Explore premium Pakistani furniture in solid walnut and natural materials. Filter by price, category, and material."
        canonical="/products"
      />
      <div className="grid gap-10 md:grid-cols-[280px_1fr]">
        <FiltersSidebar
          allCategories={allCategories}
          allMaterials={allMaterials}
          filters={filters}
          setFilters={setFilters}
          min={priceBounds.min}
          max={priceBounds.max}
        />

        <div>
          <header className="mb-4">
            <h1 className="font-display text-3xl">All Products</h1>
            <p className="text-sm text-muted-foreground">{result.length} item(s)</p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {result.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
