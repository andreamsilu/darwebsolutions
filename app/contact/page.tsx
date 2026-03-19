import Link from "next/link";
import { PremiumFooter, PremiumNav } from "../components/premium-chrome";
import {
  ArrowRightIcon,
  BeaconIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  RocketIcon,
  WhatsAppIcon,
} from "../ui/icons";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 font-body text-slate-900 selection:bg-amber-200 selection:text-amber-950">
      <PremiumNav active="contact" />

      <main className="pb-20 pt-24">
        <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-8 py-16 lg:grid-cols-12">
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
                href="https://wa.me/255000000000"
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
          <div className="relative lg:col-span-5">
            <div className="aspect-square overflow-hidden rounded-full bg-linear-to-tr from-blue-900 to-blue-700 p-1 shadow-2xl">
              <img
                alt="Professional Tanzanian female tech consultant"
                className="h-full w-full rounded-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5FJuM2YdCPMIvRFDDStFWTjAXGwPyQ-6dPoK5irUMxA2zGMCraUNaii5qIeVhCjDuwReTD3MKBwxooYryE9w8Ke_mHKi053omczi4GdQRM043qBPNkyjXr3xD0sSeajVoJmT6E1Hv3nNeQOwVuIjbHYmhY3ewdR8qUlURUsM07WCJr6ZBYomGbrbLH4R56OJxaQ_r-Keq8gtmaQsWkKqxkLlZD91o_8vcNrfSIpwzZ3BLNS8A9soEA1r1dQibQ91QHpldmTKYpVQ"
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
            <div className="rounded-xl bg-white p-8 shadow-sm md:p-12">
              <h2 className="mb-8 font-headline text-3xl font-bold text-blue-900">Send an Inquiry</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-semibold text-slate-600">Full Name</label>
                    <input
                      className="w-full rounded-lg bg-slate-100 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-800/30"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-semibold text-slate-600">Business Type</label>
                    <select className="w-full rounded-lg bg-slate-100 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-800/30">
                      <option>Startup</option>
                      <option>Corporate</option>
                      <option>E-commerce</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-sm font-semibold text-slate-600">Message</label>
                  <textarea
                    className="w-full resize-none rounded-lg bg-slate-100 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-800/30"
                    placeholder="Tell us about your project..."
                    rows={4}
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
                    href="mailto:hello@darwebsolutions.co.tz"
                  >
                    hello@darwebsolutions.co.tz
                  </a>
                </div>
              </div>

              <div className="group relative h-64 w-full overflow-hidden rounded-xl bg-slate-200 shadow-inner">
                <img
                  className="h-full w-full object-cover opacity-50 grayscale transition-opacity group-hover:opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsZYXgMFWaa2g4f_L5l0QBXlX7gtdhcb0aoMUn1vVrbVuCM3bheY05_wBix_eGEZci1ZS_IyZaxSQsnNaSZz8rQieFpznCpKiz2XRZjtwWoePsBD0cwWgQVUCNAUoEByfd0QI9AvLqOJzEooRCZid4ne08GGM3hjkBitbWQuVMRGGTPHMl6ZPHT4Wx4Tsp781atL5NNZpyJ1_wXQ10s6SwAl-UZs0zsc0sVWDM_Ecqche39bFDzbQb93prU2HAV6VHZWAYU_U_gT0"
                  alt="Map view of Dar es Salaam business district"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-blue-800 p-4 text-white shadow-2xl">
                    <BeaconIcon className="h-6 w-6" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-bold text-blue-900 backdrop-blur">
                  VISIT US IN VICTORIA
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
                  href="https://wa.me/255000000000"
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

