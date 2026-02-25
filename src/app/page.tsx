import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import Capabilities from "@/components/Capabilities";
import Services from "@/components/Services";
import DataSection from "@/components/DataSection";
import Principles from "@/components/Principles";
import Founders from "@/components/Founders";
import Commitment from "@/components/Commitment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Results />
        <Capabilities />
        <Services />
        <DataSection />
        <Principles />
        <Founders />
        <Commitment />
      </main>
      <Footer />
    </>
  );
}
