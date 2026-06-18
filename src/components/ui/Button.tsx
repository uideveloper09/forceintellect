import { Children } from 'react';
import { cn } from '@/utils/cn';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'inverse' | 'onDark';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  blinkText?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-700 text-white border border-brand-700 shadow-[0_1px_2px_rgb(10_22_40/0.12)] hover:bg-brand-800 hover:border-brand-800',
  secondary:
    'bg-surface text-text-primary border border-border-strong hover:border-brand-600 hover:text-brand-700',
  outline:
    'bg-transparent text-brand-700 border border-brand-600 hover:bg-brand-50',
  inverse:
    'bg-white text-brand-900 border border-white hover:bg-brand-50 hover:border-brand-50',
  onDark:
    'bg-transparent text-white border border-white/60 hover:border-white hover:bg-white/10',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-[15px]',
};

function renderBlinkLabel(children: ReactNode) {
  return Children.map(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      return (
        <span key="blink-text" className="btn-text-blink-slow whitespace-nowrap">
          {child}
        </span>
      );
    }

    return child;
  });
}

export function Button({
  variant = 'primary',
  size = 'md',
  blinkText = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:min-h-0',
    blinkText && 'whitespace-nowrap',
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  const label = blinkText ? renderBlinkLabel(children) : children;

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props;
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

    return (
      <a
        href={href}
        className={classes}
        {...(isExternal && href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...anchorProps}
      >
        {label}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {label}
    </button>
  );
}
