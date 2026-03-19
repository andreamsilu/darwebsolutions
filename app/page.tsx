import Link from "next/link";
import { InstagramIcon, WhatsAppIcon } from "./ui/icons";

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900 antialiased">
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-black tracking-tight text-blue-900">
            Dar Web Solutions
          </div>
          <div className="hidden items-center space-x-8 text-sm font-medium md:flex">
            <a className="border-b-2 border-blue-700 font-bold text-blue-700" href="#home">
              Home
            </a>
            <a className="text-slate-600 transition-all duration-300 hover:text-blue-600" href="#services">
              Services
            </a>
            <a className="text-slate-600 transition-all duration-300 hover:text-blue-600" href="#portfolio">
              Portfolio
            </a>
            <a className="text-slate-600 transition-all duration-300 hover:text-blue-600" href="#contact">
              Contact
            </a>
          </div>
          <Link
            className="rounded-md bg-blue-800 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:opacity-90 active:scale-95"
            href="https://wa.me/255000000000"
            target="_blank"
          >
            WhatsApp
          </Link>
        </div>
      </nav>

      <main>
        <section className="relative overflow-hidden pb-20 pt-32 md:pb-32 md:pt-48" id="home">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-12">
            <div className="space-y-6 md:col-span-7">
              <span className="text-sm font-bold uppercase tracking-widest text-amber-700">
                Premium Web Design
              </span>
              <h1 className="text-5xl font-extrabold leading-tight text-blue-900 md:text-7xl">
                We Build Simple Websites for Businesses in Dar es Salaam
              </h1>
              <p className="max-w-xl text-lg text-slate-600 md:text-xl">
                Get more customers with WhatsApp ordering - fast, simple, professional.
              </p>
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Link
                  className="flex items-center justify-center gap-2 rounded-md bg-amber-200 px-8 py-4 text-center font-bold text-amber-900 shadow-lg transition-transform hover:-translate-y-1"
                  href="https://wa.me/255000000000"
                  target="_blank"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp
                </Link>
                <a
                  className="rounded-md border border-slate-300 px-8 py-4 text-center font-bold transition-colors hover:bg-slate-100"
                  href="#portfolio"
                >
                  View Our Work
                </a>
              </div>
            </div>
            <div className="relative md:col-span-5">
              <div className="relative z-10 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                <img
                  alt="Website Mockup"
                  className="w-full rounded-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPTj0NuzlUQvYt6KdgNAZWR3aKPljW7b1F6O2Hyq8e6rP_L6LJ6Uooa1AfyxnJsyFqbU1ApzTwQSDkgDViEPkk8PigWxNX2laMPlfSN2il9IRHnFxu3qxHUKamBKMCXcguCzd2vJ498yI5b5Y7wElMqBBfBlrI3OOnwxIAHbHQmUbDEqXIROHNWa0rGVHVidwiHJnCJp1jLw496hfaccdBEGvzRTT7JFDkwskaRbGk2hvb3PzLb9qO6gbb0XdJ_416Bo4l5kAfxmo"
                />
              </div>
              <div className="absolute -right-12 -top-12 -z-10 h-64 w-64 rounded-full bg-blue-800/10 blur-3xl" />
            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">Are You Losing Customers Online?</h2>
              <p className="text-lg text-slate-600">
                Generic social media pages are not enough to build a lasting brand. Many Dar businesses
                face these common struggles.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                ["Only WhatsApp", "Relying solely on status updates means your products disappear after 24 hours."],
                ["Customers do not trust business", "Without a professional website, customers worry about legitimacy."],
                ["Hard to manage orders", "Manually taking every detail via chat leads to mistakes."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-xl bg-white p-10 shadow-lg transition-all hover:bg-slate-50">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-rose-100 text-rose-700">
                    !
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{title}</h3>
                  <p className="leading-relaxed text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-900 py-24 text-white" id="services">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">We Fix This For You</h2>
              <div className="mx-auto h-1 w-20 bg-amber-300" />
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                ["Simple Website", "A clean one-page site that showcases your products on any device."],
                ["WhatsApp Integration", "Orders go directly to your WhatsApp with details pre-filled."],
                ["Fast Delivery", "We get your professional presence live in just 2-3 business days."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-xl border border-white/10 bg-blue-800 p-8 transition-colors hover:border-amber-300">
                  <h3 className="mb-4 text-2xl font-bold">{title}</h3>
                  <p className="leading-relaxed text-blue-100">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden py-24" id="portfolio">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
              <div className="max-w-2xl">
                <h2 className="mb-4 text-3xl font-bold md:text-5xl">See a Sample Website</h2>
                <p className="text-lg text-slate-600">
                  Explore our recent project for a local logistics company. Modern, functional, and fast.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 hover:bg-slate-100">
                  ←
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 hover:bg-slate-100">
                  →
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="group relative h-[500px] overflow-hidden rounded-3xl bg-slate-200 md:col-span-8">
                <img
                  alt="Portfolio Site"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO7iZzRgyD0Xtq0M1DUJIwGz30789o_qvfZaRa52Nv1xgWj4fF1uWeCmilSJwSoBiOxxt1s7BfJdr1jLAZEMF5Oaj9CC7iNulO3Yat0R0Sbz_cWAt0tgZthv2c9yJkgI5DIcbMGuewh__CfxlmR-PwZWxOGImwaHzOk62ExteJInMrBnGPQJazuBacjXre4ocEZaMh4Razc7vw41hhtQzc2gCLoR3sLu3LidL5ASVW-gXonmE6M3x4y94S9pzY1hb9LW4vynfK9XI"
                />
              </div>
              <div className="grid gap-8 md:col-span-4 md:grid-rows-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-100 p-8">
                  <h4 className="mb-2 font-bold text-amber-700">Success Metric</h4>
                  <p className="text-3xl font-extrabold text-blue-900">150%</p>
                  <p className="text-slate-600">Increase in mobile orders after launch</p>
                </div>
                <div className="rounded-3xl bg-amber-200 p-8 text-amber-900">
                  <h4 className="mb-2 font-bold">Client Review</h4>
                  <p className="italic">"Dar Web Solutions changed how we talk to clients. Simple and effective!"</p>
                  <p className="mt-4 font-bold">- Director, FastMove TZ</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {[
                ["Contact", "Message us on WhatsApp and tell us about your business."],
                ["We build", "We design your professional site focused on getting sales."],
                ["You get clients", "Launch and start receiving orders directly on WhatsApp."],
              ].map(([title, body]) => (
                <div key={title} className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-blue-800 bg-white shadow-lg">
                    ✓
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{title}</h3>
                  <p className="text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <img
                alt="Our Team"
                className="rounded-3xl shadow-xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9uvUpZIw7YdOzx_bs2fnbyOH2-B7HBfiE9NSBg2p-HHO2oOFnIVRG6KS47aDy66s2KPCNKFJ4wmZCPIXzsIcAKNfMVThP5IwOgKZ8Ty2dbgPkoC_lkPtno0FgLrOJ4LNc7uPfO_ni5sFSAZXySAJUQXFjK9SByAq87UYL2PpXbdShvWnxzM78KiiZRoomEH_cFxaoV7Dulm-NR5X8yS6Oyy4qPKeMnzZF29gGPsxCb2hZcQUmFa9ITzYSnIcxboKA_O_qw4tjEy4"
              />
            </div>
            <div className="order-1 space-y-6 md:order-2">
              <h2 className="text-3xl font-bold">Driven by Tanzanian Excellence</h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Dar Web Solutions helps small and medium businesses in Dar es Salaam grow online using
                simple and effective digital tools.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                We understand the local market and build conversion bridges focused on WhatsApp, where
                your customers already communicate.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-24" id="contact">
          <div className="mx-auto max-w-4xl space-y-10 px-6 text-center">
            <h2 className="text-4xl font-extrabold text-blue-900 md:text-6xl">Ready to Grow Your Business?</h2>
            <p className="text-xl text-slate-600">
              Let us build your professional digital presence today. No complicated jargon, just results.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-900 px-10 py-5 text-lg font-bold text-white shadow-xl transition-all hover:bg-blue-800 sm:w-auto"
                href="https://wa.me/255000000000"
                target="_blank"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp Us Now
              </Link>
              <Link
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-10 py-5 text-lg font-bold transition-all hover:bg-slate-50 sm:w-auto"
                href="https://instagram.com/darwebsolutions"
                target="_blank"
              >
                <InstagramIcon className="h-5 w-5" />
                Follow on Instagram
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 py-12 md:grid-cols-4">
          <div className="space-y-4">
            <div className="text-lg font-bold text-blue-900">Dar Web Solutions</div>
            <p className="text-sm text-slate-500">
              Premium web development tailored for the Tanzanian business ecosystem.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a className="inline-block transition-transform hover:-translate-y-0.5 hover:text-blue-500" href="#home">Home</a></li>
              <li><a className="inline-block transition-transform hover:-translate-y-0.5 hover:text-blue-500" href="#services">Services</a></li>
              <li><a className="inline-block transition-transform hover:-translate-y-0.5 hover:text-blue-500" href="#portfolio">Portfolio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a className="inline-block transition-transform hover:-translate-y-0.5 hover:text-blue-500" href="#">Privacy Policy</a></li>
              <li><a className="inline-block transition-transform hover:-translate-y-0.5 hover:text-blue-500" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Social</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a className="inline-block transition-transform hover:-translate-y-0.5 hover:text-blue-500" href="https://instagram.com/darwebsolutions">Instagram</a></li>
              <li><a className="inline-block transition-transform hover:-translate-y-0.5 hover:text-blue-500" href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl border-t border-slate-200 px-8 py-6 text-center">
          <p className="text-sm text-slate-500">© 2024 Dar Web Solutions. Built for Tanzanian Excellence.</p>
        </div>
      </footer>

      <Link
        className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
        href="https://wa.me/255000000000"
        target="_blank"
        title="Contact on WhatsApp"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </Link>
    </div>
  );
}

