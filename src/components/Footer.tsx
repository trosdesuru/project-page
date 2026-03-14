import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-10 sm:flex-row sm:gap-4">
          <div className="flex flex-1 flex-col items-center gap-2 sm:items-start">
            <h2 className="text-xl font-semibold text-white">Contacta</h2>
            <a
              href="mailto:eduardhernandezventos@gmail.com"
              className="inline-block w-fit rounded-md text-base text-white/80 transition-colors hover:text-white focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950 focus:outline-none"
            >
              eduardhernandezventos@gmail.com
            </a>
          </div>

          <div className="flex shrink-0 flex-col items-center justify-center">
            <div className="flex h-14 w-32 items-center justify-center overflow-hidden rounded-xl shadow-sm transition-transform hover:scale-105">
              <img
                src="/images/logo.png"
                alt="Logo oficial de Al Borde del Burnout"
                width={56}
                height={56}
                className="h-full w-full object-contain p-1.5"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col items-center gap-6 sm:items-end">
            <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/eduard-hernandez-ventos/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md text-white transition-colors hover:text-white focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950 focus:outline-none"
                aria-label="Visitar perfil de LinkedIn de Eduard Hernández"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 transition-transform hover:scale-110"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <div className="h-6 w-px bg-slate-700" aria-hidden="true" />

              <a
                href="https://eduardhernandez-portfolio.vercel.app/projects"
                className="group flex items-center gap-2 rounded-full  px-5 py-2.5 text-sm font-medium text-white transition-all focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950 focus:outline-none"
              >
                <span className="inline-block">Volver al CV</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
