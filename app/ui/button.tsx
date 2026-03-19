import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, asChild, className = "", ...props }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

  if (asChild) {
    return (
      <span className={`${baseClasses} ${className}`} {...props}>
        {children}
      </span>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}

