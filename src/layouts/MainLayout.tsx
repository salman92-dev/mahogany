import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-10">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
