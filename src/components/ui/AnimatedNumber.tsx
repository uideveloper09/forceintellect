import { useCountUp } from '@/hooks/useCountUp';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/utils/cn';

interface AnimatedNumberProps {
  value: string;
  className?: string;
  duration?: number;
}

export function AnimatedNumber({ value, className, duration = 1600 }: AnimatedNumberProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLSpanElement>({
    threshold: 0.4,
    rootMargin: '0px',
  });
  const display = useCountUp(value, isVisible, duration);

  return (
    <span ref={ref} className={cn('tabular-nums', className)} aria-label={value}>
      {display}
    </span>
  );
}
