import { Seo } from "@/components/Seo";

const About = () => {
  return (
    <>
      <Seo title="About Us – Mahogany Studio" description="Our story of craftsmanship and considered design in Pakistan." canonical="/about" />
      <section className="prose max-w-none">
        <h1 className="font-display text-3xl mb-4">About Us</h1>
        <p className="text-muted-foreground">Founded in Lahore, Mahogany Studio designs and builds premium furniture with an emphasis on longevity and thoughtful detail. We work with solid walnut, natural fabrics and low-VOC finishes to create pieces that age beautifully.</p>
        <p className="text-muted-foreground">Each design is prototyped in-house and produced in small batches by expert craftspeople. Our approach is minimal yet warm—celebrating the inherent character of wood.</p>
      </section>
    </>
  );
};

export default About;
