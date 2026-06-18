import { IMAGES } from '@/constants/images';
import { cn } from '@/utils/cn';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <a
      href="/"
      className={cn('group inline-flex shrink-0', className)}
      aria-label="Force Intellect — Home"
    >
      <img
        src={IMAGES.logo}
        alt="Force Intellect — adding value, enabling growth"
        className="h-11 w-auto object-contain transition-opacity group-hover:opacity-90 sm:h-12"
        width={200}
        height={52}
      />
    </a>
  );
}
