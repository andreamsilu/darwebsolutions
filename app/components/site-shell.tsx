import Link from "next/link";
import type { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/problem", label: "Problem" },
  { href: "/solution", label: "Solution" },
  { href: "/demo", label: "Demo" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="flex flex-col gap-4">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-800 text-xs font-semibold text-white">
                D
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight">
                  Dar Web Solutions
                </p>
                <p className="text-[11px] text-slate-500">
                  Simple websites for Dar businesses
                </p>
              </div>
            </Link>
            <nav className="hidden gap-4 text-xs font-medium text-slate-600 lg:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-blue-800">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Dar Web Solutions. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

