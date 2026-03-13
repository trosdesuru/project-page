import { cn } from '@/lib/utils';
import { CaseStudyProps } from '@/lib/types';

type HeaderProps = Pick<CaseStudyProps, 'client' | 'title' | 'shortDescription' | 'tags'> & {
  className?: string;
};

export default function CaseStudyHeader({ client, title, shortDescription, tags, className }: HeaderProps) {
  return (
    <header className={cn('flex flex-col gap-4 border-b pb-8', className)}>
      <h2 className="text-xl font-medium text-gray-500">{client}</h2>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
        {title}
      </h1>
      <p className="mt-2 text-lg text-gray-600">{shortDescription}</p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
          >
            {tag}
          </span>
        ))}
      </div>
    </header>
  );
}