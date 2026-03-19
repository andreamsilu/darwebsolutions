import { SiteShell } from "../components/site-shell";
import { DemoSection } from "../sections/demo-section";
import { MotionSection } from "../ui/motion-section";

export default function DemoPage() {
  return (
    <SiteShell>
      <MotionSection>
        <DemoSection />
      </MotionSection>
    </SiteShell>
  );
}

