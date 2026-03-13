import { cn } from '@/lib/utils';
import { CaseStudyProps } from '@/lib/types';

type MetadataProps = Pick<CaseStudyProps, 'metadata' | 'introduction'> & {
  className?: string;
};

export default function ProjectMetadata({
  metadata,
  introduction,
  className,
}: MetadataProps) {
  const metaItems = [
    { label: 'Rol', value: metadata.role },
    { label: 'Duración', value: metadata.timeline },
    { label: 'Plataforma', value: metadata.platform },
    { label: 'Equipo', value: metadata.team },
    { label: 'Usuarios', value: metadata.users },
    { label: 'Limitaciones', value: metadata.constraints },
  ];

  return (
    <section className={cn('flex flex-col gap-10 py-4', className)}>
      <div className="rounded-2xl border border-gray-300 bg-gray-50 p-6 md:p-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3">
          {metaItems.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-gray-900">
                {item.label}
              </span>
              <span className="text-sm leading-relaxed text-gray-600">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-full">
        <p className="text-lg leading-relaxed text-gray-700">{introduction}</p>
      </div>
    </section>
  );
}
