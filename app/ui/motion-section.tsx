import type { ReactNode } from "react";

type MotionSectionProps = {
  id?: string;
  children: ReactNode;
};

export function MotionSection({ id, children }: MotionSectionProps) {
  return (
    <section
      id={id}
      className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24"
    >
      {children}
    </section>
  );
}

