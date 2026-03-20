import type { Metadata } from "next";
import Image from "next/image";
import { PremiumFooter, PremiumNav } from "../components/premium-chrome";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dar Web Solutions is a Dar es Salaam team helping SMEs grow with practical, conversion-focused digital products.",
  alternates: { canonical: "/about" },
};

export const revalidate = 3600;

export default function AboutPage() {
  const teamImage =
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80";
  const officeImage =
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80";
  const cityImage =
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80";

  return (
    <div className="bg-slate-50 font-body text-slate-900 antialiased">
      <PremiumNav active="services" />
      <main className="pb-20 pt-28">
        <section className="mx-auto mb-20 max-w-7xl px-8 animate-fade-up">
          <span className="mb-4 block font-headline text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
            About Us
          </span>
          <h1 className="mb-6 max-w-4xl font-headline text-5xl font-extrabold leading-tight text-blue-900 md:text-7xl">
            Built in Dar, Designed for <span className="text-amber-700">Business Growth</span>.
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-slate-600">
            Dar Web Solutions helps small and medium businesses in Dar es Salaam grow online using simple,
            effective, and conversion-focused digital tools.
          </p>
        </section>

        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 md:grid-cols-12">
          <div className="relative overflow-hidden rounded-3xl bg-white p-10 shadow-xl transition-transform duration-300 hover:-translate-y-1 md:col-span-7 animate-fade-up-delay-1">
            <Image
              src={teamImage}
              alt="Dar Web Solutions team planning digital projects"
              width={1600}
              height={1000}
              className="mb-8 h-72 w-full rounded-2xl object-cover"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
            <h2 className="mb-4 font-headline text-3xl font-bold text-blue-900">
              Local Insight, Global Design Standards
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              We understand that most businesses in Tanzania rely on mobile-first customer journeys and
              WhatsApp communication. Our work combines that local reality with high-quality design and
              modern web performance.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-blue-900 p-10 text-white transition-transform duration-300 hover:-translate-y-1 md:col-span-5 animate-fade-up-delay-1">
            <Image
              src={officeImage}
              alt="Modern office workspace for digital teams"
              fill
              className="object-cover opacity-20"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
            <div className="relative z-10">
              <h3 className="mb-3 font-headline text-2xl font-bold">How We Work</h3>
              <p className="text-blue-100">
                Fast communication, clear milestones, and practical delivery timelines. We focus on
                business results, not just visual appearance.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-amber-200 p-10 transition-transform duration-300 hover:-translate-y-1 md:col-span-12 animate-fade-up-delay-2">
            <Image
              src={cityImage}
              alt="Dar es Salaam city scene representing local business ecosystem"
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="relative z-10 max-w-3xl">
              <h3 className="mb-3 font-headline text-2xl font-bold text-amber-950">Our Mission</h3>
              <p className="text-lg text-amber-900/90">
                To give Tanzanian businesses simple digital systems that build trust, attract customers,
                and convert interest into real sales.
              </p>
            </div>
          </div>
        </section>
      </main>
      <PremiumFooter />
    </div>
  );
}

