import { cn } from '@/lib/utils';
import { CaseStudyProps } from '@/lib/types';

type OutcomesProps = Pick<CaseStudyProps, 'outcomes'> & {
  className?: string;
};

export default function ProjectOutcomes({
  outcomes,
  className,
}: OutcomesProps) {
  const outcomesList = [
    { category: 'Business outcome', data: outcomes.business },
    { category: 'Users outcome', data: outcomes.users },
    { category: 'Team outcome', data: outcomes.team },
  ];

  return (
    <section className={cn('rounded-2xl bg-gray-50 p-6 md:p-8', className)}>
      <div className="grid gap-6 md:grid-cols-3">
        {outcomesList.map((item) => (
          <div key={item.category} className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-gray-500">
              {item.category}
            </span>
            <h3 className="text-lg font-bold text-gray-900">
              {item.data.title}
            </h3>
            <p className="text-sm text-gray-600">{item.data.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
