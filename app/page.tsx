import Footer from "@/components/footer/Footer";
import ExploreSection from "@/components/main/ExploreSection";
import FeaturedSection from "@/components/main/FeaturedSection";
import MainSection from "@/components/main/MainSection";
import ServicesSection from "@/components/main/ServicesSection";

export default function Home() {
  return (
    <main className="top-[50%] w-full absolute -z-10">
      <MainSection />
      <ExploreSection />
      <FeaturedSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}
