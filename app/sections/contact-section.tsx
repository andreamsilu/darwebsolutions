import Link from "next/link";
import { InstagramIcon, WhatsAppIcon } from "../ui/icons";

const WHATSAPP_NUMBER = "255712345678";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Habari, ningependa kujadili tovuti rahisi kwa biashara yangu."
);

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const instagramUrl = "https://instagram.com/darwebsolutions";

export function ContactSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Ready to Grow Your Business?
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto">
          Send us a quick WhatsApp message and we will reply with simple
          options, pricing, and the next steps for your new website.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Link
          href={whatsappUrl}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-green-600/30 hover:bg-green-700 transition-colors"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Chat on WhatsApp
          <span className="text-xs font-normal text-green-100">
            Fast response during Dar es Salaam business hours
          </span>
        </Link>
        <div className="flex flex-col items-center gap-2 text-xs text-slate-500">
          <p>Prefer Instagram? You can also reach us there:</p>
          <Link
            href={instagramUrl}
            target="_blank"
            className="inline-flex items-center gap-1 text-blue-800 hover:underline"
          >
            <InstagramIcon className="h-3 w-3" />
            @darwebsolutions
          </Link>
        </div>
      </div>
    </div>
  );
}

