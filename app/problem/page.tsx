import { PremiumFooter, PremiumNav } from "../components/premium-chrome";
import { ProblemSection } from "../sections/problem-section";
import { MotionSection } from "../ui/motion-section";

export default function ProblemPage() {
  return (
    <div className="bg-slate-50 font-body text-slate-900 antialiased">
      <PremiumNav active="services" />
      <main className="pt-24">
        <MotionSection>
          <ProblemSection />
        </MotionSection>
      </main>
      <PremiumFooter />
    </div>
  );
}

