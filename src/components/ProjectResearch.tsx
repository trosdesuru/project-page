import { cn } from '@/lib/utils';
import { ResearchSection } from '@/lib/types';

type ResearchProps = {
  data: ResearchSection;
  className?: string;
};

export default function ProjectResearch({ data, className }: ResearchProps) {
  return (
    <section className={cn('flex flex-col gap-8 py-10', className)}>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Research</h2>
        <h3 className="mt-2 text-xl font-medium text-gray-600">
          {data.subtitle}
        </h3>
      </div>

      <div className="flex flex-col gap-8">
        {data.steps.map((step) => (
          <div key={step.id} className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold text-gray-900">
              {step.id} - {step.title}
            </h4>
            <ul className="flex flex-col gap-2 pl-5">
              {step.items.map((item, index) => (
                <li key={index} className="list-disc text-base text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
