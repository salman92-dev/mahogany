import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, User2, Leaf, Phone, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const navCls = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-primary" : "text-foreground/80 hover:text-foreground";

export const Header = () => {
  const { items } = useCart();
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl">Mahogany</span>
          <span className="uppercase tracking-widest text-xs text-muted-foreground group-hover:text-foreground">Studio</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/products" className={navCls}>Products</NavLink>
          <NavLink to="/about" className={navCls}><Info className="inline-block mr-1 h-4 w-4"/>About</NavLink>
          <NavLink to="/sustainability" className={navCls}><Leaf className="inline-block mr-1 h-4 w-4"/>Sustainability</NavLink>
          <NavLink to="/contact" className={navCls}><Phone className="inline-block mr-1 h-4 w-4"/>Contact</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <NavLink to="/account" className={navCls} aria-label="Account">
            <User2 className="h-5 w-5"/>
          </NavLink>
          <NavLink to="/checkout" className="relative text-foreground/80 hover:text-foreground" aria-label="Cart">
            <ShoppingCart className="h-5 w-5"/>
            {count > 0 && (
              <span className="absolute -right-2 -top-2 text-[10px] px-1.5 py-0.5 rounded bg-accent text-accent-foreground">{count}</span>
            )}
          </NavLink>
          <Button asChild variant="premium" className="hidden md:inline-flex">
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
