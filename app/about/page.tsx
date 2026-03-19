import { SiteShell } from "../components/site-shell";
import { AboutSection } from "../sections/about-section";
import { MotionSection } from "../ui/motion-section";

export default function AboutPage() {
  return (
    <SiteShell>
      <MotionSection>
        <AboutSection />
      </MotionSection>
    </SiteShell>
  );
}

