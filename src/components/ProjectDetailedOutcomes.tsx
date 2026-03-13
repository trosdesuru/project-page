import { cn } from '@/lib/utils';
import { DetailedOutcomesSection } from '@/lib/types';

export default function ProjectDetailedOutcomes({
  data,
  className,
}: {
  data: DetailedOutcomesSection;
  className?: string;
}) {
  const outcomes = [
    { label: 'Business outcome', data: data.business },
    { label: 'User outcome', data: data.user },
    { label: 'Team outcome', data: data.team },
  ];

  return (
    <section className={cn('flex flex-col gap-6 py-10', className)}>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Outcomes</h2>
        <h3 className="mt-2 text-xl font-medium text-gray-600">
          {data.subtitle}
        </h3>
      </div>

      <div className="mt-4 flex flex-col gap-8">
        {outcomes.map((item, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold text-gray-900">
              {item.label}
            </h4>
            <p className="mt-2 text-base leading-relaxed text-gray-700">
              <strong className="text-gray-900">{item.data.title}.</strong>{' '}
              {item.data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
