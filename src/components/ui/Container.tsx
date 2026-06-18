import { cn } from '@/utils/cn';
import type { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'header' | 'footer' | 'nav' | 'main';
  narrow?: boolean;
}

export function Container({
  as: Component = 'div',
  narrow = false,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', narrow ? 'max-w-5xl' : 'max-w-7xl', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
