import { cn } from '@/lib/utils';
import { CaseStudyProps, SectionImage } from '@/lib/types';

type HeaderProps = Pick<
  CaseStudyProps,
  'client' | 'title' | 'shortDescription' | 'tags'
> & {
  image?: SectionImage;
  className?: string;
};

export default function CaseStudyHeader({
  client,
  title,
  shortDescription,
  tags,
  image,
  className,
}: HeaderProps) {
  return (
    <header
      className={cn(
        'grid grid-cols-1 gap-10 border-b border-gray-200 pb-12 lg:grid-cols-12 lg:gap-16',
        className,
      )}
    >
      <div className="flex flex-col justify-center gap-6 lg:col-span-6 lg:py-4">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
            {client}
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl lg:leading-[1.1]">
            {title}
          </h1>
        </div>

        <p className="text-lg leading-relaxed text-gray-700">
          {shortDescription}
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-800 bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="lg:col-span-6">
        {image ? (
          <div className="relative h-full w-full overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="absolute h-full w-full object-contain"
            />
          </div>
        ) : null}
      </div>
    </header>
  );
}
