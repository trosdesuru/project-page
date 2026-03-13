import { cn } from '@/lib/utils';
import { DeliverySection } from '@/lib/types';

type DeliveryProps = { data: DeliverySection; className?: string };

export default function ProjectDelivery({ data, className }: DeliveryProps) {
  return (
    <section className={cn('flex flex-col gap-10 py-4 lg:gap-14', className)}>
      <div className="flex max-w-6xl flex-col gap-3">
        <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
          Entrega
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {data.subtitle}
        </h2>
      </div>

      <div className="flex w-full flex-col gap-8">
        <div>
          <h4 className="text-xl font-semibold text-gray-900">Qué entregué</h4>
          <ul className="mt-3 ml-5 flex flex-col gap-2">
            {data.delivered.map((item, index) => (
              <li
                key={index}
                className="list-disc text-base leading-relaxed text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-900">Mejoras clave</h4>
          <ul className="mt-3 ml-5 flex flex-col gap-2">
            {data.improvements.map((item, index) => (
              <li
                key={index}
                className="list-disc text-base leading-relaxed text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {data.image && (
        <figure className="w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <img
            src={data.image.src}
            alt={data.image.alt}
            className="h-full w-full object-contain"
          />
        </figure>
      )}
    </section>
  );
}
