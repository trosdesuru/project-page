import { cn } from '@/lib/utils';
import { ProblemSection } from '@/lib/types';

type ProblemProps = {
  data: ProblemSection;
  className?: string;
};

export default function ProjectProblem({ data, className }: ProblemProps) {
  return (
    <section className={cn('flex flex-col gap-10 py-12 lg:gap-14', className)}>
      <div className="flex max-w-3xl flex-col gap-3">
        <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
          {data.subtitle}
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Problema
        </h2>
        <div className="mt-2 flex flex-col gap-4 text-lg leading-relaxed text-gray-700">
          {data.context.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-semibold text-gray-900">
              El reto
            </h4>
            <p className="text-base leading-relaxed text-gray-700">
              {data.challenge}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-semibold text-gray-900">
              Como se visualiza el éxito
            </h4>
            <ul className="ml-5 flex flex-col gap-2">
              {data.successCriteria.map((item) => (
                <li
                  key={item}
                  className="list-disc text-base leading-relaxed text-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5">
          {data.image ? (
            <figure className="sticky top-24 flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm">
              <img
                src={data.image.src}
                alt={data.image.alt}
                className="h-auto w-full object-cover"
              />
              {data.image.caption && (
                <figcaption className="border-t border-gray-100 bg-white p-3 text-center text-sm font-medium text-gray-500">
                  {data.image.caption}
                </figcaption>
              )}
            </figure>
          ) : null}
        </div>
      </div>
    </section>
  );
}
