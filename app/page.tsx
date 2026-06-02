import { Hero } from "@/components/sections/Hero";
import { ProgressSection } from "@/components/sections/ProgressSection";
import { DonationSection } from "@/components/sections/DonationSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { Footer } from "@/components/sections/Footer";
import { NazirSection } from "@/components/sections/NazirSection";
import { LiftCompareSection } from "@/components/sections/LiftCompareSection";
import { WhyDonateSection } from "@/components/sections/WhyDonateSection";
import { FloatingDonateButton } from "@/components/sections/FloatingDonateButton";
import { StickyProgressBar } from "@/components/sections/StickyProgressBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <StickyProgressBar />
      <ProgressSection />
      <DonationSection />
      <NazirSection />
      <LiftCompareSection />
      <WhyDonateSection />
      <ProjectSection />
      <FloatingDonateButton />
      <Footer />
    </main>
  );
}