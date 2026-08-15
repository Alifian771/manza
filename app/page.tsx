import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import MountainExperience from "@/components/MountainExperience";
import HotSpring from "@/components/HotSpring";
import ScrollIndicator from "@/components/ScrollIndicator";
import BookingCTA from "@/components/BookingCTA";
import { useLanguage } from "@/components/LanguageContext";

export default function Home() {

  

  return (
    <>
      <Navbar />
      <ScrollIndicator />

      <main>
        <Hero />
        <MountainExperience />
        <HotSpring />
        <Features />
        <BookingCTA />
      </main>
    </>
  );
}