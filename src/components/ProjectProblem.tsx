import { cn } from '@/lib/utils';
import { ProblemSection } from '@/lib/types';

type ProblemProps = {
  data: ProblemSection;
  className?: string;
};

export default function ProjectProblem({ data, className }: ProblemProps) {
  return (
    <section className={cn('flex flex-col gap-6 py-10', className)}>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Problem</h2>
        <h3 className="mt-2 text-xl font-medium text-gray-600">
          {data.subtitle}
        </h3>
      </div>

      <div className="flex flex-col gap-4 text-base leading-relaxed text-gray-700">
        {data.context.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-900">The challenge</h4>
        <p className="mt-2 text-base text-gray-700">{data.challenge}</p>
      </div>

      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-900">
          What success looked like (Success criteria)
        </h4>
        <ul className="mt-3 flex flex-col gap-2 pl-5">
          {data.successCriteria.map((item, index) => (
            <li key={index} className="list-disc text-base text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
