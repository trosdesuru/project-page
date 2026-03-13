import { ArrowRight, Link } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 border-t border-slate-800 pt-12 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-white">Contacta</h2>
            <a
              href="mailto:eduardhernandezventos@gmail.com"
              className="rounded-md text-base text-slate-400 transition-colors hover:text-white focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950 focus:outline-none"
            >
              eduardhernandezventos@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://eduardhernandez-portfolio.vercel.app/"
              className="flex items-center gap-2 rounded-full bg-gray-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-gray-800 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none"
            >
              <span className="hidden sm:inline-block">Volver</span>
              <span className="sm:hidden">Volver</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="https://linkedin.com/in/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md text-slate-400 transition-colors hover:text-white focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950 focus:outline-none"
              aria-label="Visitar perfil oficial de LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
