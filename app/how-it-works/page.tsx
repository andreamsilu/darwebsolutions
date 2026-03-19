import { SiteShell } from "../components/site-shell";
import { HowItWorksSection } from "../sections/how-it-works-section";
import { MotionSection } from "../ui/motion-section";

export default function HowItWorksPage() {
  return (
    <SiteShell>
      <MotionSection>
        <HowItWorksSection />
      </MotionSection>
    </SiteShell>
  );
}

