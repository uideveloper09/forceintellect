import { cn } from '@/utils/cn';
import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'elevated' | 'outline';
}

const paddingStyles = {
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-6',
};

const variantStyles = {
  default: 'bg-surface shadow-[var(--shadow-card)]',
  elevated: 'bg-surface shadow-[var(--shadow-premium)]',
  outline: 'bg-surface-muted shadow-none',
};

export function Card({
  hover = false,
  padding = 'md',
  variant = 'default',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border',
        variantStyles[variant],
        hover && 'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]',
        paddingStyles[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
