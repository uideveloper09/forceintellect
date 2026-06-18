import type { ReactNode } from 'react';
import { CONTACT, SOCIAL_LINKS } from '@/constants/images';
import { SocialIcon } from '@/components/common/SocialIcon';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/utils/cn';

function UtilityOutlineButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center rounded-md border border-white/25 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-white transition-colors hover:border-white/40 hover:bg-white/10',
        className,
      )}
    >
      {children}
    </a>
  );
}

export function TopUtilityBar() {
  return (
    <div className="border-b border-brand-800/80 bg-brand-900">
      <Container>
        <div className="flex h-9 items-center justify-between gap-4 lg:h-10">
          <div className="flex items-center gap-1.5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/5 transition-all duration-200 hover:border-white/25 hover:bg-white/10"
              >
                <SocialIcon icon={social.icon} variant="onDark" className="group-hover:scale-110" />
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-brand-100 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-700/80 text-white">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </span>
              {CONTACT.phone}
            </a>

            <span className="h-4 w-px bg-white/15" aria-hidden="true" />

            <div className="flex items-center gap-2">
              <UtilityOutlineButton href={CONTACT.businessAssociateHref}>
                Business Associate Request
              </UtilityOutlineButton>
              <Button href={CONTACT.demoHref} variant="inverse" size="sm" blinkText className="!px-3.5 !py-1.5 !text-[11px]">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
