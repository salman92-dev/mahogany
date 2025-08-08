import { Seo } from "@/components/Seo";

const Account = () => {
  return (
    <>
      <Seo title="Your Account – Mahogany Studio" description="Manage orders and details." canonical="/account" />
      <section className="grid gap-2">
        <h1 className="font-display text-3xl mb-2">Account</h1>
        <p className="text-muted-foreground">Sign in and order history will be available in a future update.</p>
      </section>
    </>
  );
};

export default Account;
