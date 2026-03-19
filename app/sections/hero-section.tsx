import Link from "next/link";
import { Button } from "../ui/button";

const WHATSAPP_NUMBER = "255712345678";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Habari, ningependa kupata tovuti rahisi kwa biashara yangu ya Dar es Salaam."
);

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export function HeroSection() {
  return (
    <div className="grid gap-10 md:grid-cols-2 items-center">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
          We Build Simple Websites for Businesses in Dar es Salaam
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-xl">
          Get more customers with WhatsApp ordering – fast, simple, professional
          websites built for Tanzanian small and medium businesses.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            asChild
            className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-full shadow-md shadow-blue-900/20"
          >
            <Link href={whatsappUrl} target="_blank">
              Chat on WhatsApp
            </Link>
          </Button>
          <span className="text-sm text-slate-500">
            No complicated forms. Just send us a WhatsApp message.
          </span>
        </div>
      </div>
      <div className="relative mx-auto h-64 w-full max-w-md rounded-3xl bg-linear-to-br from-blue-900 via-blue-700 to-sky-500 p-6 text-white shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-100">
              Dar Web Solutions
            </p>
            <p className="text-sm font-medium text-blue-50">
              WhatsApp Ordering Site
            </p>
          </div>
          <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-xs">
            DWS
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between rounded-2xl bg-white/10 px-3 py-2">
            <span className="text-blue-50">New Order: Food Delivery</span>
            <span className="text-[11px] text-blue-100">via WhatsApp</span>
          </div>
          <div className="rounded-2xl bg-white/5 px-3 py-2">
            <p className="text-[11px] text-blue-100">
              Your customers tap a button, chat on WhatsApp, and you get the
              order instantly.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center text-[11px]">
            <div className="rounded-2xl bg-white/10 px-2 py-2">
              <p className="font-semibold text-blue-50">2-3 days</p>
              <p className="text-blue-100">Delivery</p>
            </div>
            <div className="rounded-2xl bg-white/10 px-2 py-2">
              <p className="font-semibold text-blue-50">Simple</p>
              <p className="text-blue-100">Landing Page</p>
            </div>
            <div className="rounded-2xl bg-white/10 px-2 py-2">
              <p className="font-semibold text-blue-50">WhatsApp</p>
              <p className="text-blue-100">Integration</p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/20" />
      </div>
    </div>
  );
}

