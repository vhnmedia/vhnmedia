import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Offer from "@/components/Offer";
import Differentiators from "@/components/Differentiators";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Offer />
      <Differentiators />
      <Industries />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
