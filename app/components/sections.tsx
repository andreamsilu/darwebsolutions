import { MotionSection } from "../ui/motion-section";
import { HeroSection } from "../sections/hero-section";
import { ProblemSection } from "../sections/problem-section";
import { SolutionSection } from "../sections/solution-section";
import { DemoSection } from "../sections/demo-section";
import { HowItWorksSection } from "../sections/how-it-works-section";
import { AboutSection } from "../sections/about-section";
import { ContactSection } from "../sections/contact-section";

export function MainPageSections() {
  return (
    <>
      <MotionSection id="hero">
        <HeroSection />
      </MotionSection>
      <MotionSection id="problems">
        <ProblemSection />
      </MotionSection>
      <MotionSection id="solutions">
        <SolutionSection />
      </MotionSection>
      <MotionSection id="demo">
        <DemoSection />
      </MotionSection>
      <MotionSection id="how-it-works">
        <HowItWorksSection />
      </MotionSection>
      <MotionSection id="about">
        <AboutSection />
      </MotionSection>
      <section id="contact" className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
        <ContactSection />
      </section>
    </>
  );
}
