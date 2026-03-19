import { PremiumFooter, PremiumNav } from "../components/premium-chrome";
import { HowItWorksSection } from "../sections/how-it-works-section";
import { MotionSection } from "../ui/motion-section";

export default function HowItWorksPage() {
  return (
    <div className="bg-slate-50 font-body text-slate-900 antialiased">
      <PremiumNav active="services" />
      <main className="pt-24">
        <MotionSection>
          <HowItWorksSection />
        </MotionSection>
      </main>
      <PremiumFooter />
    </div>
  );
}

