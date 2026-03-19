import Link from "next/link";
import { PremiumFooter, PremiumNav } from "../components/premium-chrome";
import { QuoteIcon, UserIcon } from "../ui/icons";

export default function DemoPage() {
  return (
    <div className="bg-slate-50 font-body text-slate-900 antialiased">
      <PremiumNav active="portfolio" />

      <main className="pt-32">
        <section className="mx-auto mb-24 max-w-7xl px-8">
          <span className="mb-4 block font-headline text-sm font-extrabold uppercase tracking-widest text-amber-700">
            Our Work
          </span>
          <h1 className="mb-8 font-headline text-5xl font-extrabold leading-tight text-blue-900 md:text-7xl">
            Architecting Digital <br /> Success in Tanzania.
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-slate-600">
            We combine global design standards with local market insights to build websites that do not
            just look good - they perform.
          </p>
        </section>

        <section className="mx-auto max-w-7xl bg-slate-100 px-8 py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-xl transition-all hover:bg-slate-50 md:col-span-8">
              <div className="aspect-video overflow-hidden">
                <img
                  alt="Logistics Dashboard interface"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCU8pdewjsXLf7BM4Kr_BioH2zajZexx2e1hgDvOFc_GPF6o_q202bamajDQzEwdcRffheEWqyG0p0NOZ48YDoaiG9NNx-LyGcqvAkb_0-LVuBWstbo2UUR4y1x8BacupC9qej8FQciwFhhrJdcNEJtvO4fc2rKLEikKvgk60p3UaMXVvY-X155UlVsujyN5Jx4qkWyv1pn1VuR0YXC2luoHG9_gKBIsfbbakPECFeybDqunb4WVLLsT7DDql0G3jxazSCjlkFOu8"
                />
              </div>
              <div className="p-8">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 font-headline text-3xl font-bold text-blue-900">
                      Minimal Logistics Website
                    </h3>
                    <p className="max-w-lg text-slate-600">
                      A streamlined fleet management and client portal for a pan-African transport firm.
                      Focused on real-time tracking and ease of booking.
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="block text-4xl font-extrabold text-amber-700">150%</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Increase in Mobile Orders
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold">React</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold">Node.js</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold">UI/UX Design</span>
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl bg-white shadow-xl transition-all hover:bg-slate-50 md:col-span-4">
              <div className="aspect-square">
                <img
                  alt="Mlimani Fashion Hub storefront"
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtIPT16vIypN2qiTTYfHvsTtYqMBhN0KZ55aOJGAM1kqcLKSLmLUXj6O_1IWzooagLxQ96LCJ_oMeV9-fsd23jvmZgKIQcypBoR4pmUiyDIwmPDocxTojIT2YciOxyMQnFNWm9_HWyTF6bGrw-RvfvyiGJlELme5bSe9b4To8PesraiRArdOASkYlxRuQl2tjoKb3rj38brLole150nZkXRBd8GECxQppzYU3QjydEdpqcNHaXDTT8IflTypiqs1T0GmHpOdLrTJM"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-1 font-headline text-xl font-bold text-blue-900">Mlimani Fashion Hub</h4>
                <p className="mb-4 text-sm text-slate-600">
                  Complete e-commerce transformation for a local luxury boutique.
                </p>
                <div className="font-bold text-amber-700">+85% Revenue</div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl bg-white shadow-xl transition-all hover:bg-slate-50 md:col-span-4">
              <div className="aspect-square">
                <img
                  alt="Real Estate Listing Portal"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDAM-kIX49up3mNErMi6NLfqLNHtkX09BlU1sMesrOJ6xlpLJTFn-RRar0eq4jrmEIPOI5d_H_v1PlnGo3h5kdo-XHxBwtugNfs-B1MbtnVZeg68HtEgjTCCuCursgZfbCeFkFT56vS8y0mnFgaS584JCbvXql9uPzy-uv0TGhW6iyS4ST3q2x1nbAxOGAu2MPlHL0KmzImoeMxUc7OQv0EupA1KSooFwMcZHKlDowr6cYIE44x3cU1lNY6meINzJOefyxaIlX1DI"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-1 font-headline text-xl font-bold text-blue-900">Kariakoo Realty</h4>
                <p className="mb-4 text-sm text-slate-600">
                  Dynamic property listing platform with automated lead generation.
                </p>
                <div className="font-bold text-amber-700">2.4k Active Users</div>
              </div>
            </div>

            <div className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-xl transition-all hover:bg-slate-50 md:col-span-8 md:flex-row">
              <div className="overflow-hidden md:w-1/2">
                <img
                  alt="Educational Platform Screenshot"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVOq3u5LOCFigRHP9HGap_jyNkMGkDziYYtJTzrXngXtsfh7hpZhOYaOPUCKUCBR1KJL81o0iH2Y1FwKRaPpj_WIr6DGV2tYJYmQETrepe7YlaKpL73__XIaqiQkSjDWHBEWFNryEgdfDOjXd5dX8GCVm04G4Migb5ObruAFFxfV7yFFNaW_Ww8W7lwD8v7V1dEEtlyi_jq4J5C5abmCpKM8hqSRT5FAri5KiMC_gxgVB0BbJKIpDus162L5rHHL8rl_I71zlrgNo"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:w-1/2">
                <h3 className="mb-4 font-headline text-2xl font-bold text-blue-900">Dar Ed-Tech Portal</h3>
                <p className="mb-6 text-slate-600">
                  An accessible learning management system designed to work on low-bandwidth connections
                  across Tanzania.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-amber-700">12k+</div>
                    <div className="text-xs font-bold uppercase text-slate-700">Students Enrolled</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-700">99.9%</div>
                    <div className="text-xs font-bold uppercase text-slate-700">Uptime Efficiency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-32">
          <div className="mb-16 text-center">
            <span className="mb-4 block font-headline text-sm font-extrabold uppercase tracking-widest text-amber-700">
              Trust &amp; Results
            </span>
            <h2 className="font-headline text-4xl font-bold text-blue-900">Voices from Dar es Salaam</h2>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              [
                "Said Mohamed",
                "CEO, Tanzan Logistics",
                "Dar Web Solutions did not just build a site; they understood our business model.",
                "bg-blue-800 text-white",
              ],
              [
                "Amina Juma",
                "Founder, Juma Designs",
                "The mobile-first approach was exactly what we needed for our Dar clients.",
                "bg-amber-700 text-white",
              ],
              [
                "Rashid K.",
                "Director, Coastal Estates",
                "Their attention to detail and transparency during the process was world-class.",
                "bg-slate-700 text-white",
              ],
            ].map(([name, role, quote, avatarClass]) => (
              <div key={name} className="relative pt-12">
                <QuoteIcon className="absolute left-0 top-0 h-12 w-12 text-amber-300/60" />
                <p className="relative z-10 mb-8 text-lg italic leading-relaxed text-slate-600">{quote}</p>
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${avatarClass}`}>
                    <UserIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-blue-900">{name}</div>
                    <div className="text-xs text-slate-600">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-7xl px-8">
          <div className="relative overflow-hidden rounded-xl bg-blue-900 p-12 md:p-20">
            <div className="absolute right-0 top-0 h-full w-1/3 translate-x-1/2 -skew-x-12 bg-blue-700 opacity-20" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="mb-6 font-headline text-4xl font-bold text-white">
                Ready to build your next big thing?
              </h2>
              <p className="mb-10 text-xl text-blue-100">
                Let&apos;s discuss how we can bring architectural precision to your digital presence.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="rounded-xl bg-amber-300 px-8 py-4 font-bold text-amber-950 transition-all active:scale-95"
                  type="button"
                >
                  Start a Project
                </button>
                <button
                  className="rounded-xl border border-white/20 px-8 py-4 font-bold text-white transition-all hover:bg-white/10"
                  type="button"
                >
                  View Our Process
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PremiumFooter />
    </div>
  );
}

