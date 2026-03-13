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
    <section className={cn('py-8', className)}>
      <div className="grid grid-cols-2 gap-y-6 md:grid-cols-3">
        {metaItems.map((item) => (
          <div key={item.label} className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900">
              {item.label}
            </span>
            <span className="text-sm text-gray-600">{item.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <p className="text-base leading-relaxed text-gray-700">
          {introduction}
        </p>
      </div>
    </section>
  );
}
