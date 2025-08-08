import { Seo } from "@/components/Seo";
import { Leaf } from "lucide-react";

const Sustainability = () => {
  return (
    <>
      <Seo title="Sustainability – Mahogany Studio" description="Responsible materials and processes across our supply chain." canonical="/sustainability" />
      <section>
        <h1 className="font-display text-3xl mb-4 flex items-center gap-2"><Leaf className="h-6 w-6"/> Our Commitments</h1>
        <ul className="grid gap-4 md:grid-cols-2">
          <li className="rounded-xl p-5 card-elevated"><strong>Certified wood</strong><br/><span className="text-muted-foreground text-sm">We source from responsibly managed forests with transparent chain of custody.</span></li>
          <li className="rounded-xl p-5 card-elevated"><strong>Low-VOC finishes</strong><br/><span className="text-muted-foreground text-sm">Natural oils and water-based sealers for healthier homes.</span></li>
          <li className="rounded-xl p-5 card-elevated"><strong>Durability first</strong><br/><span className="text-muted-foreground text-sm">Repairable designs and replaceable components extend product life.</span></li>
          <li className="rounded-xl p-5 card-elevated"><strong>Efficient logistics</strong><br/><span className="text-muted-foreground text-sm">Consolidated shipments reduce emissions and packaging waste.</span></li>
        </ul>
      </section>
    </>
  );
};

export default Sustainability;
