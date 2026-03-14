import { cn } from '@/lib/utils';
import { ResearchSection } from '@/lib/types';

type ResearchProps = { data: ResearchSection; className?: string };

export default function ProjectResearch({ data, className }: ResearchProps) {
  return (
    <section className={cn('flex flex-col gap-10 py-4 lg:gap-14', className)}>
      <div className="flex max-w-6xl flex-col gap-3">
        <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
          Investigación
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {data.subtitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          {data.image && (
            <figure className="sticky top-1 overflow-hidden">
              <img
                src={data.image.src}
                alt={data.image.alt}
                className="h-auto w-full object-cover"
              />
            </figure>
          )}
        </div>

        <div className="flex flex-col gap-8 lg:col-span-7">
          {data.steps.map((step) => (
            <div key={step.id} className="flex flex-col gap-2">
              <h4 className="text-xl font-semibold text-gray-900">
                {step.id} - {step.title}
              </h4>
              <ul className="ml-5 flex flex-col gap-2">
                {step.items.map((item, index) => (
                  <li
                    key={index}
                    className="list-disc text-base leading-relaxed text-gray-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
