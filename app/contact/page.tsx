import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PremiumFooter, PremiumNav } from "../components/premium-chrome";
import {
  ArrowRightIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  RocketIcon,
  WhatsAppIcon,
} from "../ui/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dar Web Solutions for website design, WhatsApp integration, and digital growth support in Dar es Salaam.",
  alternates: { canonical: "/contact" },
};

export const revalidate = 3600;

type ContactPageProps = {
  searchParams: Promise<{ status?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { status } = await searchParams;
  const consultantImage =
    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="bg-slate-50 font-body text-slate-900 selection:bg-amber-200 selection:text-amber-950">
      <PremiumNav active="contact" />

      <main className="pb-20 pt-24">
        <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-8 py-16 lg:grid-cols-12 animate-fade-up">
          <div className="lg:col-span-7">
            <p className="mb-4 font-headline text-sm font-extrabold uppercase tracking-widest text-amber-700">
              Let&apos;s Build Together
            </p>
            <h1 className="mb-6 font-headline text-5xl font-extrabold leading-tight text-blue-900 md:text-7xl">
              Partnering in <span className="text-amber-700">Digital Excellence</span>
            </h1>
            <p className="max-w-xl text-xl leading-relaxed text-slate-600">
              From the heart of Dar es Salaam, we design digital solutions that scale.
              Reach out today and let&apos;s turn your vision into a structural masterpiece.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <Link
                className="flex items-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 font-bold text-white shadow-lg transition-all hover:brightness-110"
                href="https://wa.me/255769289824"
                target="_blank"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat on WhatsApp
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-blue-900 transition-colors hover:bg-blue-800 hover:text-white"
                  href="https://instagram.com/darwebsolutions"
                  target="_blank"
                >
                  <InstagramIcon className="h-5 w-5" />
                </Link>
                <Link
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-blue-900 transition-colors hover:bg-blue-800 hover:text-white"
                  href="#"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 animate-fade-up-delay-1">
            <div className="aspect-square overflow-hidden rounded-full bg-linear-to-tr from-blue-900 to-blue-700 p-1 shadow-2xl">
              <Image
                alt="Professional Tanzanian female tech consultant"
                className="h-full w-full rounded-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                src={consultantImage}
                width={900}
                height={900}
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 max-w-xs rounded-xl border-l-4 border-amber-700 bg-white p-6 shadow-xl">
              <p className="font-headline font-bold text-slate-900">100+ Businesses Served</p>
              <p className="text-sm text-slate-600">Strategic digital growth for Tanzanian SMEs.</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-8 lg:grid-cols-2">
            <div className="rounded-xl bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 md:p-12 animate-fade-up-delay-1">
              <h2 className="mb-8 font-headline text-3xl font-bold text-blue-900">Send an Inquiry</h2>
              {status === "success" && (
                <p className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
                  Your inquiry was sent successfully. We will contact you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
                  We could not send your inquiry. Please check your details and try again.
                </p>
              )}
              {status === "rate_limited" && (
                <p className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900">
                  Too many attempts. Please wait a few minutes before sending another inquiry.
                </p>
              )}
              <form className="space-y-6" action="/api/contact" method="post">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="full-name" className="ml-1 text-sm font-semibold text-slate-600">
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      name="fullName"
                      className="w-full rounded-lg bg-slate-100 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-800/30"
                      placeholder="John Doe"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email-address" className="ml-1 text-sm font-semibold text-slate-600">
                      Email Address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      className="w-full rounded-lg bg-slate-100 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-800/30"
                      placeholder="name@business.com"
                      type="email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="business-type" className="ml-1 text-sm font-semibold text-slate-600">
                      Business Type
                    </label>
                    <select
                      id="business-type"
                      name="businessType"
                      className="w-full rounded-lg bg-slate-100 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-800/30"
                    >
                      <option>Startup</option>
                      <option>Corporate</option>
                      <option>E-commerce</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <input type="text" name="companyWebsite" className="hidden" tabIndex={-1} autoComplete="off" />
                <div className="space-y-2">
                  <label htmlFor="project-message" className="ml-1 text-sm font-semibold text-slate-600">
                    Message
                  </label>
                  <textarea
                    id="project-message"
                    name="message"
                    className="w-full resize-none rounded-lg bg-slate-100 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-800/30"
                    placeholder="Tell us about your project..."
                    rows={4}
                    required
                  />
                </div>
                <button
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-800 py-4 font-bold text-white transition-all hover:brightness-110"
                  type="submit"
                >
                  Send Message
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </form>
            </div>

            <div className="flex flex-col justify-center space-y-12">
              <div>
                <p className="mb-4 font-headline text-sm font-extrabold uppercase tracking-widest text-amber-700">
                  Our Base
                </p>
                <h2 className="mb-6 font-headline text-4xl font-bold text-blue-900">
                  Dar es Salaam Office
                </h2>
                <div className="mb-6 flex items-start gap-4">
                  <MapPinIcon className="mt-1 h-5 w-5 text-blue-900" />
                  <p className="text-lg text-slate-600">
                    7th Floor, Tanzanite Park,
                    <br />
                    Victoria, New Bagamoyo Road,
                    <br />
                    Dar es Salaam, Tanzania.
                  </p>
                </div>
                <div className="mb-10 flex items-center gap-4">
                  <MailIcon className="h-5 w-5 text-blue-900" />
                  <a
                    className="text-lg font-medium text-blue-900 hover:underline"
                    href="mailto:developermsilu@gmail.com"
                  >
                    developermsilu@gmail.com
                  </a>
                </div>
              </div>

              <div className="relative h-64 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-200 shadow-inner animate-fade-up-delay-2">
                <iframe
                  title="Dar Web Solutions location map"
                  src="https://www.google.com/maps?q=Victoria%2C+New+Bagamoyo+Road%2C+Dar+es+Salaam%2C+Tanzania&z=15&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute bottom-4 left-4 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-bold text-blue-900 shadow">
                  VICTORIA, DAR ES SALAAM
                </div>
              </div>

              <div className="pt-6">
                <p className="mb-6 font-headline text-sm font-bold text-slate-600">Follow our journey</p>
                <div className="flex gap-4">
                  <Link
                    className="group flex items-center gap-3 rounded-full border border-slate-300/40 py-2 pr-6 transition-all hover:bg-white"
                    href="https://instagram.com/darwebsolutions"
                    target="_blank"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 text-white">
                      <InstagramIcon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-blue-900">
                      Instagram
                    </span>
                  </Link>
                  <Link
                    className="group flex items-center gap-3 rounded-full border border-slate-300/40 py-2 pr-6 transition-all hover:bg-white"
                    href="#"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-600 text-white">
                      <LinkedInIcon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-blue-900">
                      LinkedIn
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto my-20 max-w-7xl px-8">
          <div className="relative overflow-hidden rounded-3xl bg-blue-900 p-12 text-center md:p-20">
            <div className="absolute inset-0 bg-linear-to-br from-blue-900 to-blue-700 opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-size-[40px_40px] opacity-10" />
            <div className="relative z-10 space-y-8">
              <h2 className="font-headline text-4xl font-extrabold text-white md:text-5xl">
                Ready for a digital upgrade?
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-blue-100">
                Skip the email and talk to our lead architect directly on WhatsApp for an immediate consultation.
              </p>
              <div className="flex flex-col justify-center gap-6 pt-4 sm:flex-row">
                <Link
                  className="flex items-center justify-center gap-3 rounded-2xl bg-amber-300 px-10 py-5 text-lg font-extrabold text-amber-950 shadow-xl transition-transform hover:scale-105"
                  href="https://wa.me/255769289824"
                  target="_blank"
                >
                  Start Free Consultation
                  <RocketIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PremiumFooter />
    </div>
  );
}

