import { Suspense, type ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionSkeleton, type SectionSkeletonVariant } from '@/components/ui/Skeleton';
import { cn } from '@/utils/cn';

export type { SectionSkeletonVariant };

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  skeleton?: SectionSkeletonVariant;
}

export function LazySection({ children, className, skeleton = 'default' }: LazySectionProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    rootMargin: '160px',
    threshold: 0.05,
  });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const frame = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(frame);
  }, [isVisible]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <div
          className={cn(
            'motion-reduce:translate-none motion-reduce:opacity-100 motion-reduce:transition-none',
            'transition-all duration-700 ease-out',
            animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
          )}
        >
          {children}
        </div>
      ) : (
        <SectionSkeleton variant={skeleton} />
      )}
    </div>
  );
}

interface LazySectionSuspenseProps extends LazySectionProps {
  fallback?: ReactNode;
}

export function LazySectionSuspense({
  children,
  className,
  skeleton = 'default',
  fallback,
}: LazySectionSuspenseProps) {
  return (
    <LazySection className={className} skeleton={skeleton}>
      <Suspense fallback={fallback ?? <SectionSkeleton variant={skeleton} />}>{children}</Suspense>
    </LazySection>
  );
}
