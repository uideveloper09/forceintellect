import { useSyncExternalStore } from 'react';
import { cn } from '@/utils/cn';

type LogoMarqueeProps = {
  logos: readonly string[];
  direction?: 'left' | 'right';
  duration?: number;
  fade?: 'surface' | 'muted';
};

export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (callback) => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      mediaQuery.addEventListener('change', callback);
      return () => mediaQuery.removeEventListener('change', callback);
    },
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false,
  );
}

export function LogoCard({
  src,
  labelIndex,
  decorative = false,
}: {
  src: string;
  labelIndex: number;
  decorative?: boolean;
}) {
  return (
    <div className="flex h-[5.5rem] w-[10.5rem] shrink-0 items-center justify-center rounded-xl border border-border bg-surface px-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-brand-200 hover:shadow-[var(--shadow-card-hover)] sm:h-24 sm:w-44">
      <img
        src={src}
        alt={decorative ? '' : `Force Intellect client logo ${labelIndex + 1}`}
        aria-hidden={decorative}
        className="max-h-11 max-w-full object-contain opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
        loading="lazy"
        width={120}
        height={48}
        draggable={false}
      />
    </div>
  );
}

export function LogoMarquee({
  logos,
  direction = 'left',
  duration = 45,
  fade = 'surface',
}: LogoMarqueeProps) {
  const reducedMotion = usePrefersReducedMotion();
  const items = reducedMotion ? logos : [...logos, ...logos];

  return (
    <div
      className={cn(
        'logo-marquee',
        direction === 'right' && 'logo-marquee-reverse',
        reducedMotion && 'logo-marquee-static',
        fade === 'muted' && 'logo-marquee-fade-muted',
      )}
      style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
    >
      <div className="logo-marquee-track">
        {items.map((logo, index) => (
          <LogoCard
            key={`${logo}-${index}`}
            src={logo}
            labelIndex={index % logos.length}
            decorative={!reducedMotion && index >= logos.length}
          />
        ))}
      </div>
    </div>
  );
}
