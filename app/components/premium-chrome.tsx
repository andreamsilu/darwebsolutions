import Link from "next/link";

type NavKey = "home" | "services" | "portfolio" | "contact";

type PremiumNavProps = {
  active: NavKey;
};

function navClass(active: boolean) {
  return active
    ? "border-b-2 border-blue-900 pb-1 font-bold text-blue-900"
    : "text-slate-600 transition-colors hover:text-blue-900";
}

export function PremiumNav({ active }: PremiumNavProps) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <div className="font-headline text-2xl font-bold tracking-tight text-blue-900">
          Dar Web Solutions
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <Link className={navClass(active === "home")} href="/">
            Home
          </Link>
          <Link className={navClass(active === "services")} href="/solution">
            Services
          </Link>
          <Link className={navClass(active === "portfolio")} href="/demo">
            Portfolio
          </Link>
          <Link className={navClass(active === "contact")} href="/contact">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            className="hidden rounded-xl px-4 py-2 font-medium text-blue-900 transition-all hover:bg-slate-50 lg:block"
            href="https://wa.me/255000000000"
            target="_blank"
          >
            WhatsApp
          </Link>
          <button
            className="rounded-xl bg-blue-800 px-6 py-2.5 font-semibold text-white transition-transform active:scale-90"
            type="button"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export function PremiumFooter() {
  return (
    <footer className="bg-slate-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-16 md:grid-cols-4">
        <div>
          <div className="mb-4 font-headline text-xl font-bold text-blue-900">Dar Web Solutions</div>
          <p className="text-sm leading-relaxed text-slate-500">
            Crafting high-performance digital solutions for the Tanzanian business landscape.
          </p>
        </div>
        <div>
          <h4 className="mb-6 font-headline text-sm font-extrabold uppercase tracking-widest text-amber-700">
            Explore
          </h4>
          <ul className="space-y-4">
            <li><Link className="text-sm text-slate-500 hover:text-blue-700" href="/">Home</Link></li>
            <li><Link className="text-sm text-slate-500 hover:text-blue-700" href="/solution">Services</Link></li>
            <li><Link className="text-sm text-slate-500 hover:text-blue-700" href="/demo">Portfolio</Link></li>
            <li><Link className="text-sm text-slate-500 hover:text-blue-700" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 font-headline text-sm font-extrabold uppercase tracking-widest text-amber-700">
            Legal
          </h4>
          <ul className="space-y-4">
            <li><a className="text-sm text-slate-500 hover:text-blue-700" href="#">Privacy Policy</a></li>
            <li><a className="text-sm text-slate-500 hover:text-blue-700" href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 font-headline text-sm font-extrabold uppercase tracking-widest text-amber-700">
            Connect
          </h4>
          <ul className="space-y-4">
            <li><a className="text-sm text-slate-500 hover:text-blue-700" href="#">LinkedIn</a></li>
            <li><Link className="text-sm text-slate-500 hover:text-blue-700" href="https://instagram.com/darwebsolutions" target="_blank">Instagram</Link></li>
            <li><Link className="text-sm text-slate-500 hover:text-blue-700" href="https://wa.me/255000000000" target="_blank">WhatsApp</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-slate-200 px-8 py-8 md:flex-row">
        <p className="text-sm text-slate-500">© 2024 Dar Web Solutions. Built in Dar es Salaam, Tanzania.</p>
      </div>
    </footer>
  );
}

