import { cn } from '@/lib/utils';
import { DefinitionSection } from '@/lib/types';

type DefinitionProps = { data: DefinitionSection; className?: string };

export default function ProjectDefinition({
  data,
  className,
}: DefinitionProps) {
  return (
    <section className={cn('flex flex-col gap-10 py-12 lg:gap-14', className)}>
      <div className="flex max-w-3xl flex-col gap-3">
        <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
          {data.subtitle}
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Definición
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <div className="flex flex-col gap-4 text-lg leading-relaxed text-gray-700">
            {data.context.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900">
              Alcance del MVP (lo que priorizamos)
            </h4>
            <ul className="mt-3 ml-5 flex flex-col gap-2">
              {data.scope.map((item, index) => (
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

        <div className="lg:col-span-5">
          {data.image && (
            <figure className="sticky top-24 overflow-hidden">
              <img
                src={data.image.src}
                alt={data.image.alt}
                className="h-auto w-full object-contain"
              />
            </figure>
          )}
        </div>
      </div>

      {data.bottomImage && (
        <figure className="mt-6 aspect-square w-full overflow-hidden sm:mx-auto sm:w-3/4">
          <img
            src={data.bottomImage.src}
            alt={data.bottomImage.alt}
            className="relative h-full w-full object-contain"
          />
        </figure>
      )}
    </section>
  );
}
