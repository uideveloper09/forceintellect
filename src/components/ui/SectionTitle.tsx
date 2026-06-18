import { cn } from '@/utils/cn';
import type { HTMLAttributes, ReactNode } from 'react';

type SectionTitleProps = {
  as?: 'h1' | 'h2';
  size?: 'default' | 'large' | 'hero';
  centered?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLHeadingElement>, 'children'>;

const sizeStyles = {
  default: 'font-display text-balance text-2xl font-normal text-text-primary lg:text-[1.75rem] lg:leading-tight',
  large: 'font-display text-balance text-2xl font-normal text-text-primary lg:text-3xl',
  hero: 'font-display text-balance text-[1.65rem] font-normal leading-[1.15] text-text-primary sm:text-[2.35rem] lg:text-[2.65rem]',
};

export function SectionTitle({
  as: Tag = 'h2',
  size = 'default',
  centered = false,
  className,
  children,
  ...props
}: SectionTitleProps) {
  return (
    <div className={cn(centered && 'flex flex-col items-center text-center', className)}>
      <Tag className={sizeStyles[size]} {...props}>
        {children}
      </Tag>
      <div className={cn('section-title-accent', centered && 'mx-auto')} aria-hidden="true" />
    </div>
  );
}
