import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/utils/cn';

type RevealVariant = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in' | 'slide-up';

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  rootMargin?: string;
  threshold?: number;
}

const variantHidden: Record<RevealVariant, string> = {
  'fade-up': 'translate-y-8 opacity-0',
  'fade-in': 'opacity-0',
  'slide-left': '-translate-x-8 opacity-0',
  'slide-right': 'translate-x-8 opacity-0',
  'scale-in': 'scale-[0.97] opacity-0',
  'slide-up': 'translate-y-full opacity-0',
};

export function Reveal({
  children,
  className,
  variant = 'fade-up',
  delay = 0,
  duration = 650,
  rootMargin = '0px 0px -6% 0px',
  threshold = 0.12,
}: RevealProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    rootMargin,
    threshold,
  });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const frame = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(frame);
  }, [isVisible]);

  const style = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={cn(
        'motion-reduce:translate-none motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none',
        'transition-all ease-out',
        animate ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : variantHidden[variant],
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}

interface RevealStaggerProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  stagger?: number;
  variant?: RevealVariant;
}

export function RevealStagger({
  children,
  className,
  itemClassName,
  stagger = 80,
  variant = 'fade-up',
}: RevealStaggerProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <Reveal key={index} variant={variant} delay={index * stagger} className={itemClassName}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
