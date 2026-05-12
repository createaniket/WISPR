import { Navbar } from "@/components/wispr/Navbar";
import { Hero } from "@/components/wispr/Hero";
import { Products } from "@/components/wispr/Products";
import { Heritage } from "@/components/wispr/Heritage";
import { WhyWispr } from "@/components/wispr/WhyWispr";
import { Showcase } from "@/components/wispr/Showcase";
import { Trust } from "@/components/wispr/Trust";
import { Carousel } from "@/components/wispr/Carousel";
import { CTASection } from "@/components/wispr/CTASection";
import { Footer } from "@/components/wispr/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Heritage />
        <Showcase />
        <WhyWispr />
        <Trust />
        <Carousel />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

