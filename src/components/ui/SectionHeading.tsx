import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'mb-4 flex items-center gap-3',
            align === 'center' && 'justify-center',
          )}
        >
          <span
            className={cn('h-px w-8', dark ? 'bg-brand-200' : 'bg-brand-600')}
            aria-hidden="true"
          />
          <p
            className={cn(
              'text-xs font-bold uppercase tracking-[0.14em]',
              dark ? 'text-brand-100' : 'text-brand-700',
            )}
          >
            {eyebrow}
          </p>
          {align === 'center' && (
            <span
              className={cn('h-px w-8', dark ? 'bg-brand-200' : 'bg-brand-600')}
              aria-hidden="true"
            />
          )}
        </div>
      )}
      <h2
        className={cn(
          'font-display text-3xl font-normal leading-[1.15] sm:text-4xl lg:text-[2.75rem]',
          dark ? 'text-white' : 'text-text-primary',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-lg leading-relaxed',
            dark ? 'text-brand-100/90' : 'text-text-secondary',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
