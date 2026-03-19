import Link from "next/link";
import { PremiumFooter, PremiumNav } from "./components/premium-chrome";
import {
  BoltIcon,
  ChatIcon,
  CheckCircleIcon,
  GlobeIcon,
  InstagramIcon,
  TrendUpIcon,
  UserIcon,
  WhatsAppIcon,
} from "./ui/icons";

export default function Home() {
  return (
    <div className="bg-slate-50 font-body text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <PremiumNav active="home" />

      <main className="pb-20 pt-28">
        <header className="mx-auto mb-24 max-w-7xl px-8">
          <span className="mb-4 block font-headline text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
            Our Expertise
          </span>
          <h1 className="mb-8 max-w-4xl font-headline text-5xl font-extrabold leading-tight text-blue-900 md:text-7xl">
            Building Digital Growth for <span className="text-amber-700">Tanzanian</span> Business.
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-slate-600">
            We bridge the gap between complex technology and local market needs. Simple, fast, and
            designed to convert visitors into loyal customers.
          </p>
        </header>

        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 md:grid-cols-12">
          <div className="relative overflow-hidden rounded-3xl bg-white p-12 shadow-xl md:col-span-8">
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-800/10">
                <GlobeIcon className="h-8 w-8 text-blue-800" />
              </div>
              <h2 className="mb-4 font-headline text-3xl font-bold text-blue-900">
                Professional Business Websites
              </h2>
              <p className="mb-8 max-w-lg text-lg text-slate-600">
                We create bespoke digital identities that establish authority. No templates - just custom
                architecture built for performance and trust.
              </p>
              <ul className="mb-8 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                {[
                  "Custom UI/UX Design",
                  "SEO Optimized Layouts",
                  "Mobile-First Response",
                  "Local Hosting Support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-amber-700" />
                    <span className="font-medium text-slate-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-linear-to-br from-blue-800/10 to-transparent blur-3xl" />
          </div>

          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-blue-800 p-12 text-white md:col-span-4">
            <div>
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                <BoltIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-4 font-headline text-3xl font-bold">Rapid 2-3 Day Delivery</h2>
              <p className="mb-6 text-blue-100">
                Business does not wait. Our optimized workflow ensures your landing page is live in less
                than 72 hours.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest">Project Pulse</span>
                <span className="text-xs font-bold text-amber-300">Active</span>
              </div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-3/4 bg-amber-300" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12 rounded-3xl bg-slate-100 p-12 md:col-span-12 lg:col-span-7 md:flex-row md:items-center">
            <div className="flex-1">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-700/10">
                <ChatIcon className="h-8 w-8 text-amber-700" />
              </div>
              <h2 className="mb-4 font-headline text-3xl font-bold text-blue-900">
                WhatsApp Ordering Integration
              </h2>
              <p className="mb-8 text-lg text-slate-600">
                In Tanzania, WhatsApp is where business happens. We turn your website into a direct sales
                machine by linking your product catalog directly to your WhatsApp inbox.
              </p>
              <div className="flex flex-wrap gap-4">
                {["One-Click Checkout", "Order Automation", "Catalog Sync"].map((item) => (
                  <div key={item} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full max-w-sm flex-1">
              <div className="relative rounded-xl bg-white p-6 shadow-xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
                    <UserIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400">CUSTOMER</div>
                    <div className="text-sm font-bold">New Order Received</div>
                  </div>
                </div>
                <div className="mb-2 rounded-lg border-l-4 border-green-500 bg-green-50 p-3">
                  <p className="text-xs font-medium text-green-800">
                    &quot;I&apos;d like to order the Executive Package from the website!&quot;
                  </p>
                </div>
                <div className="text-right text-[10px] text-slate-400">Just now via WhatsApp</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-amber-200 p-12 md:col-span-12 lg:col-span-5">
            <div className="relative z-10 flex h-full flex-col justify-center">
              <h2 className="mb-4 font-headline text-3xl font-bold text-amber-900">Market Strategy</h2>
              <p className="mb-8 leading-relaxed text-amber-900/80">
                We do not just build sites; we advise on how to reach the local Dar and Arusha markets
                effectively through digital presence.
              </p>
              <div className="mt-auto text-4xl font-black text-amber-900/20">CONSULT</div>
            </div>
            <div className="absolute bottom-10 right-8 opacity-10">
              <TrendUpIcon className="h-28 w-28 text-amber-900" />
            </div>
          </div>
        </section>

        <section className="mx-auto mt-32 max-w-7xl px-8">
          <div className="relative overflow-hidden rounded-3xl bg-blue-900 p-16 text-center text-white">
            <div className="relative z-10">
              <h2 className="mb-6 font-headline text-4xl font-extrabold md:text-5xl">
                Ready to fix your digital presence?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-xl text-blue-100">
                Start your journey with Dar Web Solutions today. We will have you online and ready for
                business before the week is out.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button className="rounded-xl bg-amber-300 px-8 py-4 text-lg font-bold text-amber-950 transition-transform hover:scale-105">
                  Get Started Now
                </button>
                <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20">
                  View Our Work
                </button>
              </div>
            </div>
            <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.5),transparent_70%)]" />
          </div>
        </section>
      </main>

      <PremiumFooter />

      <div className="fixed bottom-8 right-8 z-50 rounded-full bg-[#25D366] p-4 shadow-2xl">
        <Link href="https://wa.me/255000000000" target="_blank" title="Contact on WhatsApp">
          <WhatsAppIcon className="h-8 w-8 text-white" />
        </Link>
      </div>

      <div className="fixed bottom-8 left-8 z-50 rounded-full bg-white p-4 shadow-xl">
        <Link href="https://instagram.com/darwebsolutions" target="_blank" title="Follow on Instagram">
          <InstagramIcon className="h-7 w-7 text-pink-600" />
        </Link>
      </div>
    </div>
  );
}

