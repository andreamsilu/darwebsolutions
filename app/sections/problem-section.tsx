import { ProblemIcon } from "../ui/icons";

const problems = [
  {
    title: "Only WhatsApp, No Website",
    description:
      "Customers search your business on Google or Instagram but find nothing professional to trust.",
  },
  {
    title: "Customers Don’t Trust the Business",
    description:
      "Without a simple website, new customers are not sure if your business is serious and reliable.",
  },
  {
    title: "Hard to Manage Orders",
    description:
      "All messages are mixed in one WhatsApp chat – it is easy to lose serious customers.",
  },
];

export function ProblemSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Are You Losing Customers Online?
        </h2>
        <p className="text-slate-600 max-w-2xl">
          Many Dar es Salaam businesses depend only on WhatsApp and social
          media. That makes it hard for new customers to find you and trust you.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {problems.map((problem, index) => (
          <div
            key={problem.title}
            className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-800">
              <ProblemIcon />
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              {problem.title}
            </h3>
            <p className="text-sm text-slate-600">{problem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

