import { Seo } from "@/components/Seo";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Checkout = () => {
  const { items, total, updateQty, removeItem, clear } = useCart();

  return (
    <>
      <Seo title="Checkout – Mahogany Studio" description="Secure checkout with encrypted payments." canonical="/checkout" />
      <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
        <section>
          <h1 className="font-display text-3xl mb-4">Checkout</h1>
          <div className="grid gap-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="first">First name</Label>
                <Input id="first" placeholder="Ayesha" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last">Last name</Label>
                <Input id="last" placeholder="Khan" />
              </div>
              <div className="grid gap-2 md:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="grid gap-2 md:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Street, city, postcode" />
              </div>
            </div>
            <div className="rounded-xl p-4 section-subtle">
              <p className="text-sm text-muted-foreground">Payments are processed securely with industry‑standard encryption.</p>
            </div>
          </div>
        </section>

        <aside className="space-y-4">
          <div className="rounded-xl p-4 card-elevated">
            <h2 className="font-medium mb-3">Order Summary</h2>
            <ul className="divide-y">
              {items.map((i) => (
                <li key={i.id} className="py-3 flex items-center gap-3">
                  <img src={i.image} alt={i.name} className="w-14 h-14 rounded object-cover" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{i.name}</p>
                    <p className="text-xs text-muted-foreground">PKR {i.price.toLocaleString()}</p>
                  </div>
                  <input
                    className="w-14 border bg-background rounded px-2 py-1 text-sm"
                    type="number"
                    min={1}
                    value={i.quantity}
                    onChange={(e) => updateQty(i.id, Number(e.target.value))}
                    aria-label={`Quantity for ${i.name}`}
                  />
                  <Button size="sm" variant="ghost" onClick={() => removeItem(i.id)}>Remove</Button>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between mt-3 text-sm">
              <span>Total</span>
              <span className="font-medium">PKR {total.toLocaleString()}</span>
            </div>
          </div>
          <Button disabled={items.length === 0} variant="premium" className="w-full">Place Order</Button>
          {items.length > 0 && (
            <Button variant="outline" className="w-full" onClick={clear}>Clear Cart</Button>
          )}
        </aside>
      </div>
    </>
  );
};

export default Checkout;
