const slides = [
  {
    label: "Desktop View",
    description: "Clean logistics landing page with clear services and CTA.",
  },
  {
    label: "Mobile View",
    description:
      "Mobile-first design that makes it easy for customers to contact you.",
  },
  {
    label: "WhatsApp Flow",
    description:
      "A simple WhatsApp ordering button that opens a conversation instantly.",
  },
];

export function DemoSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          See a Sample Website
        </h2>
        <p className="text-slate-600 max-w-2xl">
          Here is an example of a simple logistics website we could build for
          your business. We use your logo, your colors, and your WhatsApp
          number.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-[2fr,1fr] items-center">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-md p-4">
          <div className="grid gap-4 md:grid-cols-3">
            {slides.map((slide) => (
              <article
                key={slide.label}
                className="aspect-16/10 rounded-2xl bg-linear-to-br from-slate-900 via-blue-900 to-sky-500 p-4 text-white flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-xs text-slate-100">
                  <span>Logistics Demo</span>
                  <span>{slide.label}</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="rounded-xl bg-white/10 px-3 py-2">
                    <p className="text-slate-50 text-xs">
                      Placeholder for your website screenshot.
                    </p>
                  </div>
                  <p className="text-slate-100 text-xs">{slide.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Demo preview cards ({slides.length} layouts)
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Replace with real screenshots of your business.</li>
            <li>
              • We adjust colors and content to match your brand and services.
            </li>
            <li>
              • Optimized for both mobile and desktop so customers in Dar can
              browse on any device.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

