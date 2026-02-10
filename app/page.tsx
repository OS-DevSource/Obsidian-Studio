import { DeliverablesSection } from "@/components/deliverables-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { ProcessSection } from "@/components/process-section";
import { ProofSection } from "@/components/proof-section";
import { SiteFooter } from "@/components/site-footer";
import { TopNav } from "@/components/top-nav";
import { TrustRailSection } from "@/components/trust-rail-section";
import { VisionSection } from "@/components/vision-section";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="relative z-10">
        <TopNav />
        <main>
          <HeroSection />
          <TrustRailSection />
          <VisionSection />
          <ProofSection />
          <GallerySection />
          <ProcessSection />
          <DeliverablesSection />
          <FaqSection />
          <FinalCtaSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
