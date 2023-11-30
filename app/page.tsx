import Footer from "@/components/footer/Footer";
import ExploreSection from "@/components/main/ExploreSection";
import FeaturedSection from "@/components/main/FeaturedSection";
import MainSection from "@/components/main/MainSection";
import ServicesSection from "@/components/main/ServicesSection";

export default function Home() {
  return (
    <main className="w-full isblur transition-all">
      <MainSection />
      <ExploreSection />
      <FeaturedSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}
