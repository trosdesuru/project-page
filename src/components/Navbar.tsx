import Link from 'next/link';
import { Linkedin, Mail, ArrowLeft, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="group flex items-center gap-2 text-xl font-bold text-gray-900 transition-colors hover:text-gray-600"
        aria-label="Ir a la página principal"
      >
        <span className="hidden sm:inline-block">Eduard Hernández</span>
      </Link>

      <div className="flex items-center gap-4 sm:gap-6">
        <a
          href="mailto:eduardhernandezventos@gmail.com"
          className="text-gray-500 transition-colors hover:text-gray-900"
          aria-label="Enviar un correo electrónico"
        >
          <Mail className="h-5 w-5" />
        </a>

        <a
          href="https://www.linkedin.com/in/eduard-hernandez-ventos/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 transition-colors hover:text-gray-900"
          aria-label="Visitar perfil de LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>

        <div
          className="hidden h-6 w-px bg-gray-200 sm:block"
          aria-hidden="true"
        />

        <Link
          href="https://eduardhernandez-portfolio.vercel.app/projects"
          className="flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-gray-800 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none"
        >
          <span className="hidden sm:inline-block">Volver</span>
          <span className="sm:hidden">Volver</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </nav>
  );
}
