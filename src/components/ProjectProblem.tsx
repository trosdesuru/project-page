import { cn } from '@/lib/utils';
import { ProblemSection } from '@/lib/types';

type ProblemProps = { data: ProblemSection; className?: string };

export default function ProjectProblem({ data, className }: ProblemProps) {
  return (
    <section className={cn('flex flex-col gap-10 py-12 lg:gap-14', className)}>
      <div className="flex max-w-6xl flex-col gap-3">
        <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
          Problema
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {data.subtitle}
        </h2>
      </div>

      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col gap-4 text-lg leading-relaxed text-gray-700">
          {data.context.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {data.image && (
          <figure className="mt-4 aspect-video w-full overflow-hidden">
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="h-full w-full object-cover"
            />
          </figure>
        )}

        <div>
          <h4 className="text-xl font-semibold text-gray-900">El reto</h4>
          <p className="mt-2 text-base leading-relaxed text-gray-700">
            {data.challenge}
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-900">
            Criterios de éxito
          </h4>
          <ul className="mt-3 ml-5 flex flex-col gap-2">
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
    </section>
  );
}
