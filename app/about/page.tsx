import { PremiumFooter, PremiumNav } from "../components/premium-chrome";
import { AboutSection } from "../sections/about-section";
import { MotionSection } from "../ui/motion-section";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 font-body text-slate-900 antialiased">
      <PremiumNav active="services" />
      <main className="pt-24">
        <MotionSection>
          <AboutSection />
        </MotionSection>
      </main>
      <PremiumFooter />
    </div>
  );
}

