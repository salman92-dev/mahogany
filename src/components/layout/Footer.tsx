import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Truck } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-16 border-t">
      <div className="container py-10 grid gap-10 md:grid-cols-4">
        <div>
          <h4 className="font-display text-xl mb-3">Mahogany Studio</h4>
          <p className="text-sm text-muted-foreground">Premium handcrafted furniture designed in Pakistan. Minimal forms, luxurious materials.</p>
        </div>
        <div>
          <h5 className="font-medium mb-3">Company</h5>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover-scale" to="/about">About Us</Link></li>
            <li><Link className="hover-scale" to="/sustainability">Sustainability</Link></li>
            <li><Link className="hover-scale" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-3">Shop</h5>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover-scale" to="/products?category=Sofas">Sofas</Link></li>
            <li><Link className="hover-scale" to="/products?category=Tables">Tables</Link></li>
            <li><Link className="hover-scale" to="/products?category=Storage">Storage</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-3">Trust</h5>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> 5-year structural warranty</li>
            <li className="flex items-center gap-2"><Lock className="h-4 w-4"/> Secure checkout</li>
            <li className="flex items-center gap-2"><Truck className="h-4 w-4"/> Nationwide delivery</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Mahogany Studio. All rights reserved.</p>
          <p>Crafted with care — minimal, durable, timeless.</p>
        </div>
      </div>
    </footer>
  );
};
