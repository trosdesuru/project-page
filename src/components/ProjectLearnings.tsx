import { cn } from '@/lib/utils';
import { LearningsSection } from '@/lib/types';

export default function ProjectLearnings({
  data,
  className,
}: {
  data: LearningsSection;
  className?: string;
}) {
  return (
    <section className={cn('flex flex-col gap-10 py-12 lg:gap-14', className)}>
      <div className="flex max-w-6xl flex-col gap-3">
        <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
          Aprendizajes
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {data.subtitle}
        </h2>
      </div>

      <div className="flex w-full flex-col gap-8">
        {data.items.map((item, index) => (
          <div key={index}>
            <h4 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h4>
            <p className="mt-2 text-base leading-relaxed text-gray-700">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {data.image && (
        <figure className="mt-4 aspect-video w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm">
          <img
            src={data.image.src}
            alt={data.image.alt}
            className="h-full w-full object-cover"
          />
        </figure>
      )}
    </section>
  );
}
