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
    <section className={cn('flex flex-col gap-6 py-10', className)}>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Learnings</h2>
        <h3 className="mt-2 text-xl font-medium text-gray-600">
          {data.subtitle}
        </h3>
      </div>

      <div className="mt-4 flex flex-col gap-6">
        {data.items.map((item, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h4>
            <p className="mt-1 text-base text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
