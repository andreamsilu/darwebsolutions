import { PremiumFooter, PremiumNav } from "../components/premium-chrome";
import { SolutionSection } from "../sections/solution-section";
import { MotionSection } from "../ui/motion-section";

export default function SolutionPage() {
  return (
    <div className="bg-slate-50 font-body text-slate-900 antialiased">
      <PremiumNav active="services" />
      <main className="pt-24">
        <MotionSection>
          <SolutionSection />
        </MotionSection>
      </main>
      <PremiumFooter />
    </div>
  );
}

