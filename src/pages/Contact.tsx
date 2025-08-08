import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <>
      <Seo title="Contact – Mahogany Studio" description="Get in touch for orders, viewings, or support." canonical="/contact" />
      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="font-display text-3xl mb-4">Contact</h1>
          <p className="text-muted-foreground">We’d love to hear from you. Send us a message and our team will reply within 1–2 business days.</p>
        </div>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your full name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="How can we help?" />
          </div>
          <Button type="submit" variant="premium">Send Message</Button>
        </form>
      </section>
    </>
  );
};

export default Contact;
