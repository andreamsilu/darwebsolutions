import { SolutionIcon } from "../ui/icons";

const solutions = [
  {
    title: "Simple Website",
    description:
      "A clean one-page site that clearly shows who you are, what you do, and how to contact you.",
  },
  {
    title: "WhatsApp Integration",
    description:
      "Buttons that send customers directly to your WhatsApp with the right message pre-filled.",
  },
  {
    title: "Fast Delivery (2–3 Days)",
    description:
      "We launch quickly so you can start sharing your link with customers this week, not next month.",
  },
];

export function SolutionSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          We Fix This for You
        </h2>
        <p className="text-slate-600 max-w-2xl">
          Dar Web Solutions designs simple but powerful websites that connect
          directly to WhatsApp and help your business look serious and
          trustworthy.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {solutions.map((solution, index) => (
          <div
            key={solution.title}
            className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5"
          >
            <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-800/10 text-blue-800">
              <SolutionIcon />
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-1">
              {solution.title}
            </h3>
            <p className="text-sm text-slate-600">{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

