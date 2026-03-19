import Link from "next/link";

type NavKey = "home" | "services" | "portfolio" | "contact";

type PremiumNavProps = {
  active: NavKey;
};

function navClass(active: boolean) {
  return active
    ? "border-b-2 border-amber-300 pb-1 font-bold text-white"
    : "text-blue-100 transition-colors hover:text-white";
}

export function PremiumNav({ active }: PremiumNavProps) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-blue-800/60 bg-blue-900/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <div className="font-headline text-2xl font-bold tracking-tight text-white">
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
            className="hidden rounded-xl px-4 py-2 font-medium text-blue-100 transition-all hover:bg-blue-800 hover:text-white lg:block"
            href="https://wa.me/255000000000"
            target="_blank"
          >
            WhatsApp
          </Link>
          <button
            className="rounded-xl bg-amber-300 px-6 py-2.5 font-semibold text-amber-950 transition-transform hover:bg-amber-200 active:scale-90"
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
    <footer className="bg-blue-950 text-blue-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-16 md:grid-cols-4">
        <div>
          <div className="mb-4 font-headline text-xl font-bold text-white">Dar Web Solutions</div>
          <p className="text-sm leading-relaxed text-blue-200">
            Crafting high-performance digital solutions for the Tanzanian business landscape.
          </p>
        </div>
        <div>
          <h4 className="mb-6 font-headline text-sm font-extrabold uppercase tracking-widest text-amber-300">
            Explore
          </h4>
          <ul className="space-y-4">
            <li><Link className="text-sm text-blue-200 hover:text-white" href="/">Home</Link></li>
            <li><Link className="text-sm text-blue-200 hover:text-white" href="/solution">Services</Link></li>
            <li><Link className="text-sm text-blue-200 hover:text-white" href="/demo">Portfolio</Link></li>
            <li><Link className="text-sm text-blue-200 hover:text-white" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 font-headline text-sm font-extrabold uppercase tracking-widest text-amber-300">
            Legal
          </h4>
          <ul className="space-y-4">
            <li><a className="text-sm text-blue-200 hover:text-white" href="#">Privacy Policy</a></li>
            <li><a className="text-sm text-blue-200 hover:text-white" href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 font-headline text-sm font-extrabold uppercase tracking-widest text-amber-300">
            Connect
          </h4>
          <ul className="space-y-4">
            <li><a className="text-sm text-blue-200 hover:text-white" href="#">LinkedIn</a></li>
            <li><Link className="text-sm text-blue-200 hover:text-white" href="https://instagram.com/darwebsolutions" target="_blank">Instagram</Link></li>
            <li><Link className="text-sm text-blue-200 hover:text-white" href="https://wa.me/255000000000" target="_blank">WhatsApp</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-blue-900 px-8 py-8 md:flex-row">
        <p className="text-sm text-blue-300">© 2024 Dar Web Solutions. Built in Dar es Salaam, Tanzania.</p>
      </div>
    </footer>
  );
}

