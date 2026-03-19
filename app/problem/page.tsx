import { SiteShell } from "../components/site-shell";
import { ProblemSection } from "../sections/problem-section";
import { MotionSection } from "../ui/motion-section";

export default function ProblemPage() {
  return (
    <SiteShell>
      <MotionSection>
        <ProblemSection />
      </MotionSection>
    </SiteShell>
  );
}

