import { SiteShell } from "../components/site-shell";
import { ContactSection } from "../sections/contact-section";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
        <ContactSection />
      </section>
    </SiteShell>
  );
}

