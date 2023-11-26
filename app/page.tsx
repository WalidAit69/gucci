import ExploreSection from "@/components/main/ExploreSection";
import MainSection from "@/components/main/MainSection";

export default function Home() {
  return (
    <main className="top-[50%] w-full absolute -z-10">
      <MainSection />
      <ExploreSection/>
    </main>
  );
}
