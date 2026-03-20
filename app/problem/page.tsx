import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PremiumFooter, PremiumNav } from "../components/premium-chrome";
import { ChatIcon, ProblemIcon, TrendUpIcon, UserIcon } from "../ui/icons";

export const metadata: Metadata = {
  title: "Business Challenges",
  description:
    "Understand why Dar businesses lose online customers and how structured digital flows improve trust and conversions.",
  alternates: { canonical: "/problem" },
};

export const revalidate = 3600;

export default function ProblemPage() {
  const challengeImage =
    "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1400&q=80";
  const trustImage =
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80";
  const operationsImage =
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80";
  const lossImage =
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80";
  const ctaImage =
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1800&q=80";
  const heroTopImage =
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="bg-slate-50 font-body text-slate-900 antialiased">
      <PremiumNav active="services" />
      <main className="pb-20 pt-28">
        <header className="mx-auto mb-24 grid max-w-7xl grid-cols-1 items-center gap-10 px-8 md:grid-cols-12 animate-fade-up">
          <div className="md:col-span-7">
            <span className="mb-4 block font-headline text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
              Common Challenges
            </span>
            <h1 className="mb-8 max-w-4xl font-headline text-5xl font-extrabold leading-tight text-blue-900 md:text-7xl">
              Why Businesses in Dar <span className="text-amber-700">Lose Customers</span> Online.
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-slate-600">
              Most businesses are active on social platforms, but still miss sales because there is no
              structured digital experience that builds trust and guides customers to order.
            </p>
          </div>
          <div className="md:col-span-5">
            <Image
              src={heroTopImage}
              alt="Business owner facing customer communication challenges"
              width={1200}
              height={900}
              className="h-72 w-full rounded-3xl object-cover shadow-xl md:h-96"
              sizes="(max-width: 768px) 100vw, 42vw"
              priority
            />
          </div>
        </header>

        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 md:grid-cols-12">
          <div className="relative overflow-hidden rounded-3xl bg-white p-12 shadow-xl transition-transform duration-300 hover:-translate-y-1 md:col-span-8 animate-fade-up-delay-1">
            <div className="absolute inset-0">
              <Image
                src={challengeImage}
                alt="Business owner reviewing online orders"
                fill
                className="object-cover opacity-10"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
            <div className="relative z-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
                <ProblemIcon className="h-8 w-8 text-red-700" />
              </div>
              <h2 className="mb-4 font-headline text-3xl font-bold text-blue-900">
                Only WhatsApp, No Structured Website
              </h2>
              <p className="mb-8 max-w-2xl text-lg text-slate-600">
                Customers find your business from referrals, then struggle to understand your services,
                pricing, and ordering flow because everything is scattered in chat messages.
              </p>
              <ul className="grid grid-cols-1 gap-y-4 md:grid-cols-2">
                {[
                  "No permanent service showcase",
                  "Offers disappear in status updates",
                  "Hard to compare packages quickly",
                  "No clear call-to-action path",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-amber-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-linear-to-br from-red-200/30 to-transparent blur-3xl" />
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-blue-800 p-12 text-white transition-transform duration-300 hover:-translate-y-1 md:col-span-4 animate-fade-up-delay-1">
            <div className="absolute inset-0">
              <Image
                src={trustImage}
                alt="Corporate office and credibility visuals"
                fill
                className="object-cover opacity-20"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
              <TrendUpIcon className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-4 font-headline text-3xl font-bold">Trust Gap</h2>
            <p className="text-blue-100">
              If new customers cannot verify your business quickly, they often choose competitors with a
              clearer digital presence.
            </p>
          </div>

          <div className="relative flex flex-col items-center gap-12 overflow-hidden rounded-3xl bg-slate-100 p-12 transition-transform duration-300 hover:-translate-y-1 md:col-span-12 md:flex-row lg:col-span-7 animate-fade-up-delay-2">
            <div className="absolute inset-0">
              <Image
                src={operationsImage}
                alt="Team coordinating customer operations"
                fill
                className="object-cover opacity-[0.08]"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
            <div className="flex-1">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                <ChatIcon className="h-8 w-8 text-blue-800" />
              </div>
              <h2 className="mb-4 font-headline text-3xl font-bold text-blue-900">
                Unmanaged Orders Create Operational Chaos
              </h2>
              <p className="mb-8 text-lg text-slate-600">
                Taking all requests manually through one chat thread leads to missed follow-ups, delayed
                replies, and inconsistent customer experience.
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  "Messages buried by new chats",
                  "Manual copy-paste of details",
                  "No order priority visibility",
                  "High chance of human error",
                ].map((item) => (
                  <div key={item} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full max-w-sm flex-1">
              <div className="rounded-xl bg-white p-6 shadow-xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 text-white">
                    <UserIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-600">CUSTOMER ALERT</div>
                    <div className="text-sm font-bold text-slate-900">Inquiry Not Answered</div>
                  </div>
                </div>
                <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-3">
                  <p className="text-xs font-medium text-red-800">
                    &quot;I sent my order yesterday but got no response.&quot;
                  </p>
                </div>
                <div className="mt-2 text-right text-xs text-slate-600">2h ago</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-amber-200 p-12 transition-transform duration-300 hover:-translate-y-1 md:col-span-12 lg:col-span-5 animate-fade-up-delay-2">
            <div className="absolute inset-0">
              <Image
                src={lossImage}
                alt="Analytics dashboard indicating performance drop"
                fill
                className="object-cover opacity-15"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <div className="relative z-10">
              <h2 className="mb-4 font-headline text-3xl font-bold text-amber-900">
                The Cost of Delay
              </h2>
              <p className="mb-8 leading-relaxed text-amber-900/80">
                Every day without a clear digital system means lost leads, weaker trust, and fewer repeat
                customers.
              </p>
              <div className="text-4xl font-black text-amber-900/20">MISSED SALES</div>
            </div>
            <div className="absolute bottom-8 right-8 opacity-10">
              <TrendUpIcon className="h-28 w-28 text-amber-900" />
            </div>
          </div>
        </section>

        <section className="mx-auto mt-32 max-w-7xl px-8">
          <div className="relative overflow-hidden rounded-3xl bg-blue-900 p-16 text-center text-white">
            <div className="absolute inset-0">
              <Image
                src={ctaImage}
                alt="Dar skyline and digital growth concept"
                fill
                className="object-cover opacity-20"
                sizes="100vw"
              />
            </div>
            <div className="relative z-10">
              <h2 className="mb-6 font-headline text-4xl font-extrabold md:text-5xl">
                Need a cleaner ordering flow?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-xl text-blue-100">
                We can transform these problem points into a simple, conversion-focused website connected
                directly to your WhatsApp.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-xl bg-amber-300 px-8 py-4 text-lg font-bold text-amber-950 transition-transform hover:scale-105"
                >
                  Fix My Website Flow
                </Link>
                <Link
                  href="/solution"
                  className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  See Solution Examples
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.5),transparent_70%)]" />
          </div>
        </section>
      </main>
      <PremiumFooter />
    </div>
  );
}

