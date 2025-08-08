import { useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export type Filters = {
  price: number[]; // [min, max]
  categories: string[];
  materials: string[];
};

type Props = {
  allCategories: string[];
  allMaterials: string[];
  filters: Filters;
  setFilters: (f: Filters) => void;
  min: number;
  max: number;
};

export const FiltersSidebar = ({ allCategories, allMaterials, filters, setFilters, min, max }: Props) => {
  const step = useMemo(() => Math.max(1000, Math.round((max - min) / 20)), [min, max]);

  const toggle = (key: 'categories' | 'materials', value: string) => {
    setFilters({
      ...filters,
      [key]: filters[key].includes(value) ? filters[key].filter((v) => v !== value) : [...filters[key], value],
    });
  };

  return (
    <aside className="space-y-8">
      <section>
        <h4 className="font-medium mb-3">Price Range</h4>
        <div className="px-1">
          <Slider
            min={min}
            max={max}
            step={step}
            value={filters.price}
            onValueChange={(v) => setFilters({ ...filters, price: v })}
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>PKR {filters.price[0].toLocaleString()}</span>
            <span>PKR {filters.price[1].toLocaleString()}</span>
          </div>
        </div>
      </section>

      <section>
        <h4 className="font-medium mb-3">Category</h4>
        <div className="space-y-3">
          {allCategories.map((c) => (
            <div className="flex items-center gap-2" key={c}>
              <Checkbox id={`c-${c}`} checked={filters.categories.includes(c)} onCheckedChange={() => toggle('categories', c)} />
              <Label htmlFor={`c-${c}`}>{c}</Label>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h4 className="font-medium mb-3">Material</h4>
        <div className="space-y-3">
          {allMaterials.map((m) => (
            <div className="flex items-center gap-2" key={m}>
              <Checkbox id={`m-${m}`} checked={filters.materials.includes(m)} onCheckedChange={() => toggle('materials', m)} />
              <Label htmlFor={`m-${m}`}>{m}</Label>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};
