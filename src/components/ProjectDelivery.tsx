import { cn } from '@/lib/utils';
import { DeliverySection } from '@/lib/types';

type DeliveryProps = {
  data: DeliverySection;
  className?: string;
};

export default function ProjectDelivery({ data, className }: DeliveryProps) {
  return (
    <section className={cn('flex flex-col gap-6 py-10', className)}>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Delivery</h2>
        <h3 className="mt-2 text-xl font-medium text-gray-600">
          {data.subtitle}
        </h3>
      </div>

      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-900">
          What I delivered
        </h4>
        <ul className="mt-3 flex flex-col gap-2 pl-5">
          {data.delivered.map((item, index) => (
            <li key={index} className="list-disc text-base text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-900">
          Key improvements vs the legacy tool
        </h4>
        <ul className="mt-3 flex flex-col gap-2 pl-5">
          {data.improvements.map((item, index) => (
            <li key={index} className="list-disc text-base text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
