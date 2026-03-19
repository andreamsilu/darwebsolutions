export function AboutSection() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          About Dar Web Solutions
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-[2fr,1fr] items-start">
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Dar Web Solutions helps small and medium businesses in Dar es Salaam
          grow online using simple and effective digital tools. We understand
          that many business owners are busy and not technical. That is why we
          focus on clear, mobile-first websites that connect directly to
          WhatsApp – the tool your customers already use every day.
        </p>
        <div className="rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 px-4 py-6 text-center text-xs text-blue-900">
          Placeholder area for your logo or a photo of your team / office.
          Replace this box with a real image when you are ready.
        </div>
      </div>
    </div>
  );
}

