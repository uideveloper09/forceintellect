import type { ReactNode } from 'react';
import { FOOTER_ABOUT, FOOTER_COPYRIGHT } from '@/constants/content';
import { FOOTER_LINKS } from '@/constants/navigation';
import { CONTACT, SOCIAL_LINKS } from '@/constants/images';
import { Reveal } from '@/components/common/Reveal';
import { SocialIcon } from '@/components/common/SocialIcon';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/utils/cn';
import { scrollToSection } from '@/utils/scrollToSection';

interface FooterLinkGroupProps {
  title: string;
  links: ReadonlyArray<{ label: string; href: string; external?: boolean }>;
  icon: ReactNode;
  twoColumn?: boolean;
}

function FooterLinkGroup({ title, links, icon, twoColumn = false }: FooterLinkGroupProps) {
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
          {icon}
        </span>
        <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-text-primary">{title}</h3>
      </div>
      <ul
        className={cn(
          'mt-3.5 space-y-2',
          twoColumn ? 'grid grid-cols-1 gap-y-2 min-[480px]:grid-cols-2 lg:grid-cols-1' : '',
        )}
        role="list"
      >
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="group flex gap-2.5 py-0.5 text-[13px] font-medium leading-snug text-text-secondary transition-all duration-200 hover:text-brand-700"
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="flex w-8 shrink-0 justify-center pt-[0.4rem]" aria-hidden="true">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600 transition-all duration-200 group-hover:scale-125 group-hover:bg-brand-800" />
              </span>
              <span className="min-w-0 flex-1 transition-transform duration-200 group-hover:translate-x-0.5">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const FOOTER_LINK_GROUPS = [
  {
    title: 'ERP Products',
    links: FOOTER_LINKS.products,
    twoColumn: true,
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Industries',
    links: FOOTER_LINKS.industries,
    twoColumn: false,
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Company',
    links: FOOTER_LINKS.company,
    twoColumn: false,
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
] as const;

export function Footer() {
  return (
    <footer className="footer-edge-shadow relative bg-surface-muted">
      <Container className="section-padding pb-10 pt-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0 xl:gap-x-10">
            <Reveal variant="fade-up" className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-balance text-base font-bold leading-snug tracking-tight text-text-primary">
                {FOOTER_ABOUT.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">
                {FOOTER_ABOUT.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Button variant="outline" size="sm" onClick={() => scrollToSection('contact')}>
                  Contact Us
                </Button>
                <Button href={CONTACT.demoHref} variant="primary" size="sm" blinkText>
                  Request a Demo
                </Button>
              </div>

              <div className="mt-4 flex items-center gap-1.5">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface transition-all duration-200 hover:border-brand-300 hover:bg-brand-50"
                  >
                    <SocialIcon icon={social.icon} className="group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </Reveal>

            {FOOTER_LINK_GROUPS.map((group, index) => (
              <Reveal key={group.title} delay={80 + index * 60} variant="fade-up">
                <FooterLinkGroup
                  title={group.title}
                  links={group.links}
                  icon={group.icon}
                  twoColumn={group.twoColumn}
                />
              </Reveal>
            ))}
        </div>
      </Container>

      <div className="w-full overflow-hidden bg-brand-700">
        <div className="px-4 py-[0.9rem] pb-[calc(0.9rem+var(--safe-bottom))] sm:px-6">
          <Reveal variant="slide-up" rootMargin="120px" threshold={0} duration={550}>
            <p className="text-center text-sm text-white/90">{FOOTER_COPYRIGHT}</p>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
