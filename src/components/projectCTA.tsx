import { Mail, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProjectCTA({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        'flex flex-col items-center justify-center gap-8 border-t border-gray-300 py-4 text-center lg:py-20',
        className,
      )}
    >
      <div className="flex max-w-2xl flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Muchas gracias por tu tiempo
        </h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Si te ha parecido interesante este enfoque donde el diseño UX y el
          desarrollo Frontend se dan la mano para crear productos más
          eficientes, me encantaría que habláramos.
        </p>
      </div>

      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
        {/* Botón Principal: Email */}
        <a
          href="mailto:eduardhernandezventos@gmail.com"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-base font-medium text-white shadow-sm transition-all hover:scale-105 hover:bg-gray-800 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none"
        >
          <Mail className="h-5 w-5" />
          <span>Hablemos por Email</span>
        </a>

        {/* Botón Secundario: LinkedIn */}
        <a
          href="https://www.linkedin.com/in/eduard-hernandez-ventos/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 text-base font-medium text-gray-900 shadow-sm transition-all hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:outline-none"
        >
          <span>Conectar en LinkedIn</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
