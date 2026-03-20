import type { Metadata } from "next";
import Image from "next/image";
import { PremiumFooter, PremiumNav } from "../components/premium-chrome";
import { ChatIcon, StepIcon, TrendUpIcon } from "../ui/icons";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "A clear 3-step process from consultation to launch for fast, practical website delivery in Tanzania.",
  alternates: { canonical: "/how-it-works" },
};

export const revalidate = 3600;

export default function HowItWorksPage() {
  const contactImage =
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80";
  const buildImage =
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80";
  const growthImage =
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="bg-slate-50 font-body text-slate-900 antialiased">
      <PremiumNav active="services" />
      <main className="pb-20 pt-28">
        <section className="mx-auto mb-20 max-w-7xl px-8 animate-fade-up">
          <span className="mb-4 block font-headline text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
            Process
          </span>
          <h1 className="mb-6 max-w-4xl font-headline text-5xl font-extrabold leading-tight text-blue-900 md:text-7xl">
            How We Turn Ideas into <span className="text-amber-700">Working Projects</span>.
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-slate-600">
            A clear and practical process from first contact to launch, designed for busy business owners.
          </p>
        </section>

        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 md:grid-cols-3">
          <article className="overflow-hidden rounded-3xl bg-white shadow-xl transition-transform duration-300 hover:-translate-y-1 animate-fade-up-delay-1">
            <Image
              src={contactImage}
              alt="Business consultation and first contact"
              width={900}
              height={700}
              className="h-56 w-full object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="p-8">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                <ChatIcon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-headline text-2xl font-bold text-blue-900">1. Contact</h3>
              <p className="text-slate-600">
                You send your business details and goals. We clarify requirements and project scope quickly.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl bg-white shadow-xl transition-transform duration-300 hover:-translate-y-1 animate-fade-up-delay-2">
            <Image
              src={buildImage}
              alt="Developers building and designing website"
              width={900}
              height={700}
              className="h-56 w-full object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="p-8">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                <StepIcon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-headline text-2xl font-bold text-blue-900">2. We Build</h3>
              <p className="text-slate-600">
                We design and develop your pages, integrate WhatsApp flow, and optimize for mobile users.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl bg-white shadow-xl transition-transform duration-300 hover:-translate-y-1 animate-fade-up-delay-2">
            <Image
              src={growthImage}
              alt="Business growth metrics and conversion improvement"
              width={900}
              height={700}
              className="h-56 w-full object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="p-8">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                <TrendUpIcon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-headline text-2xl font-bold text-blue-900">3. You Grow</h3>
              <p className="text-slate-600">
                After launch, customers have a clear path to trust your business and place orders faster.
              </p>
            </div>
          </article>
        </section>
      </main>
      <PremiumFooter />
    </div>
  );
}

