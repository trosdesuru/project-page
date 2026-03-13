import Image from 'next/image';
import { cn } from '@/lib/utils';
import { IterativeProcessSection } from '@/lib/types';

type IterativeProps = {
  data: IterativeProcessSection;
  className?: string;
};

export default function ProjectIterative({ data, className }: IterativeProps) {
  return (
    <section className={cn('flex flex-col gap-6 py-10', className)}>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Iterative process</h2>
        <h3 className="mt-2 text-xl font-medium text-gray-600">
          {data.subtitle}
        </h3>
      </div>

      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-900">
          High-fidelity prototype
        </h4>
        <ul className="mt-3 flex flex-col gap-2 pl-5">
          {data.highFidelity.map((item, index) => (
            <li key={index} className="list-disc text-base text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Bloque de Imagen con Next.js Image */}
      {data.image && (
        <figure className="my-8 flex flex-col items-center gap-3">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
            {/* Nota: Asegúrate de configurar dominios en next.config.ts si usas URLs externas */}
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {data.image.caption && (
            <figcaption className="text-sm text-gray-500">
              {data.image.caption}
            </figcaption>
          )}
        </figure>
      )}

      <div>
        <h4 className="text-lg font-semibold text-gray-900">
          Testing and validation
        </h4>
        <ul className="mt-3 flex flex-col gap-2 pl-5">
          {data.testing.map((item, index) => (
            <li key={index} className="list-disc text-base text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
