import { SiteShell } from "../components/site-shell";
import { SolutionSection } from "../sections/solution-section";
import { MotionSection } from "../ui/motion-section";

export default function SolutionPage() {
  return (
    <SiteShell>
      <MotionSection>
        <SolutionSection />
      </MotionSection>
    </SiteShell>
  );
}

