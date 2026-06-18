import { cn } from '@/utils/cn';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn('skeleton-shimmer rounded-md', className)} aria-hidden="true" />;
}

function SkeletonHeading() {
  return (
    <div className="mx-auto max-w-2xl space-y-3 text-center">
      <Skeleton className="mx-auto h-3 w-24" />
      <Skeleton className="mx-auto h-7 w-4/5 max-w-md" />
      <Skeleton className="mx-auto h-4 w-full max-w-lg" />
      <Skeleton className="mx-auto h-4 w-3/4 max-w-sm" />
    </div>
  );
}

interface SectionSkeletonProps {
  variant?: SectionSkeletonVariant;
}

export type SectionSkeletonVariant = 'default' | 'split' | 'cards' | 'stats' | 'testimonials' | 'cta';

export function SectionSkeleton({ variant = 'default' }: SectionSkeletonProps) {
  if (variant === 'split') {
    return (
      <section className="section-padding border-b border-border bg-surface">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-4 lg:col-span-5">
              <Skeleton className="h-3 w-28" />
              <Skeleton className="h-8 w-full max-w-sm" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
              <div className="space-y-3 pt-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
              <Skeleton className="mt-6 h-44 w-full rounded-xl" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-28 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'cards') {
    return (
      <section className="section-padding border-b border-border bg-surface-muted">
        <div className="section-container">
          <SkeletonHeading />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-52 rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'stats') {
    return (
      <section className="section-padding border-b border-border bg-brand-900">
        <div className="section-container">
          <SkeletonHeading />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-28 rounded-xl opacity-80" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'testimonials') {
    return (
      <section className="section-padding border-b border-border bg-surface">
        <div className="section-container">
          <SkeletonHeading />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {Array.from({ length: 2 }).map((_, i) => (
              <Skeleton key={i} className="h-40 rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'cta') {
    return (
      <section className="section-padding bg-brand-900">
        <div className="section-container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <Skeleton className="h-3 w-24 opacity-80" />
              <Skeleton className="h-8 w-full max-w-md opacity-80" />
              <Skeleton className="h-4 w-full opacity-80" />
              <Skeleton className="h-4 w-5/6 opacity-80" />
              <div className="flex gap-3 pt-2">
                <Skeleton className="h-11 w-36 rounded-lg opacity-80" />
                <Skeleton className="h-11 w-36 rounded-lg opacity-80" />
              </div>
            </div>
            <Skeleton className="h-64 rounded-2xl opacity-80" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding border-b border-border bg-surface">
      <div className="section-container">
        <SkeletonHeading />
        <Skeleton className="mt-10 h-56 w-full rounded-xl" />
      </div>
    </section>
  );
}

export function HeroSkeleton() {
  return (
    <section className="border-b border-border bg-surface">
      <Skeleton className="aspect-[16/5] w-full rounded-none" />
      <div className="hero-padding section-container">
        <div className="w-full space-y-4">
          <Skeleton className="h-10 w-full max-w-lg" />
          <Skeleton className="h-10 w-4/5 max-w-md" />
          <Skeleton className="h-1 w-14 rounded-full" />
          <Skeleton className="h-4 w-full max-w-xl" />
          <Skeleton className="h-4 w-full max-w-lg" />
          <Skeleton className="h-4 w-3/4 max-w-md" />
          <div className="flex flex-wrap gap-2 pt-2">
            <Skeleton className="h-8 w-36 rounded-full" />
            <Skeleton className="h-8 w-32 rounded-full" />
            <Skeleton className="h-8 w-40 rounded-full" />
            <Skeleton className="h-8 w-44 rounded-full" />
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Skeleton className="h-12 w-52 rounded-lg" />
            <Skeleton className="h-12 w-40 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClientsSkeleton() {
  return (
    <section className="section-padding-sm border-b border-border bg-surface-muted">
      <div className="section-container">
        <Skeleton className="mx-auto h-4 w-32" />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-24 rounded-lg" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePageSkeleton() {
  return (
    <>
      <HeroSkeleton />
      <ClientsSkeleton />
      <SectionSkeleton variant="split" />
      <SectionSkeleton variant="cards" />
      <SectionSkeleton variant="default" />
      <SectionSkeleton variant="stats" />
      <SectionSkeleton variant="testimonials" />
      <SectionSkeleton variant="cards" />
      <SectionSkeleton variant="cta" />
    </>
  );
}
