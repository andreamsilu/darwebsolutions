import { StepIcon } from "../ui/icons";

const steps = [
  {
    title: "Contact Us",
    description:
      "Send us a WhatsApp message with your business name, services, and logo (if you have one).",
  },
  {
    title: "We Build Your Site",
    description:
      "We prepare a simple one-page website with your content and WhatsApp integration.",
  },
  {
    title: "You Share the Link",
    description:
      "We connect your domain (or a simple link) and you start sharing it with customers.",
  },
];

export function HowItWorksSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          How It Works
        </h2>
        <p className="text-slate-600 max-w-2xl">
          A simple three-step process designed for busy business owners in Dar
          es Salaam.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-800 text-white group-hover:scale-105">
              <StepIcon />
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-1">
              {step.title}
            </h3>
            <p className="text-sm text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

