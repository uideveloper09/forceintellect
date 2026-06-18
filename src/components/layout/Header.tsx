import { Fragment, useEffect, useRef, useState } from 'react';
import { PRIMARY_NAV } from '@/constants/navigation';
import { CONTACT } from '@/constants/images';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useAnimatedOpen } from '@/hooks/useAnimatedOpen';
import { Logo } from '@/components/common/Logo';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { TopUtilityBar } from '@/components/layout/TopUtilityBar';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/utils/cn';
import { handleSectionScroll } from '@/utils/scrollToSection';
import type { NavItem } from '@/types';

function ChevronIcon({ open }: { open?: boolean }) {
  return (
    <svg
      className={cn('h-3 w-3 opacity-50 transition-transform duration-200 ease-out', open && 'rotate-180 opacity-70')}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function getLinkProps(item: NavItem) {
  return item.external ? { target: '_blank' as const, rel: 'noopener noreferrer' } : {};
}

function NavLink({
  item,
  className,
  emphasized,
  onNavigate,
}: {
  item: NavItem;
  className?: string;
  emphasized?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <a
      href={item.scrollTarget ? '/' : item.href}
      className={cn(
        'relative whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-semibold tracking-tight transition-colors xl:px-3',
        emphasized
          ? 'text-brand-700 hover:bg-brand-50 hover:text-brand-800 dark:text-brand-200 dark:hover:bg-brand-800 dark:hover:text-white'
          : 'text-brand-800/90 hover:bg-brand-50 hover:text-brand-700 dark:text-brand-100/90 dark:hover:bg-brand-800 dark:hover:text-white',
        className,
      )}
      onClick={(event) => {
        if (item.scrollTarget) {
          handleSectionScroll(event, item.scrollTarget);
        }
        onNavigate?.();
      }}
      {...getLinkProps(item)}
    >
      {item.label}
    </a>
  );
}

function DropdownLink({ item }: { item: NavItem }) {
  return (
    <a
      href={item.href}
      className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-brand-50"
      {...getLinkProps(item)}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-brand-100 bg-brand-50 text-brand-600 transition-all duration-200 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white">
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </span>
      <span className="min-w-0 flex-1 text-[13px] font-semibold leading-snug text-text-primary transition-colors group-hover:text-brand-700">
        {item.label}
      </span>
    </a>
  );
}

function DesktopNavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const { mounted, visible } = useAnimatedOpen(open, 200);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const children = item.children ?? [];
  const useTwoColumns = children.length >= 6;

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  return (
    <li
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={cn(
          'inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-semibold tracking-tight transition-colors xl:px-3',
          open
            ? 'bg-brand-50 text-brand-700 dark:bg-brand-800 dark:text-brand-100'
            : 'text-brand-800/90 hover:bg-brand-50 hover:text-brand-700 dark:text-brand-100/90 dark:hover:bg-brand-800 dark:hover:text-white',
        )}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((prev) => !prev)}
      >
        {item.label}
        <ChevronIcon open={open} />
      </button>

      {mounted && (
        <div
          className={cn(
            'absolute left-0 top-full z-[100] pt-2 lg:left-1/2 lg:-translate-x-1/2',
            !visible && 'pointer-events-none',
          )}
          aria-hidden={!open}
        >
          <div
            className={cn(
              'origin-top overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--shadow-premium)] ring-1 ring-black/[0.03] transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none',
              useTwoColumns ? 'min-w-[400px]' : 'min-w-[260px]',
              visible
                ? 'translate-y-0 scale-100 opacity-100'
                : '-translate-y-2 scale-[0.98] opacity-0',
            )}
          >
            <div className="border-b border-border/70 bg-surface-muted px-4 py-3">
              <p className="text-[13px] font-bold text-brand-800">{item.label}</p>
            </div>

            <ul
              className={cn('p-2', useTwoColumns && 'grid grid-cols-2 gap-1')}
              role="menu"
            >
              {children.map((child) => (
                <li key={child.label} role="none">
                  <DropdownLink item={child} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
}

function DesktopNavItem({ item }: { item: NavItem }) {
  if (item.children?.length) {
    return <DesktopNavDropdown item={item} />;
  }

  return (
    <li>
      <NavLink item={item} emphasized={item.label === 'Contact Us'} />
    </li>
  );
}

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const { mounted, visible } = useAnimatedOpen(expanded, 200);
  const hasChildren = Boolean(item.children?.length);

  if (!hasChildren) {
    return (
      <li>
        <a
          href={item.scrollTarget ? '/' : item.href}
          className="block rounded-lg px-3 py-2.5 text-sm font-medium text-text-secondary hover:bg-surface-subtle hover:text-brand-700"
          onClick={(event) => {
            if (item.scrollTarget) {
              handleSectionScroll(event, item.scrollTarget);
            }
            onNavigate();
          }}
          {...getLinkProps(item)}
        >
          {item.label}
        </a>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-text-secondary hover:bg-surface-subtle hover:text-brand-700"
        aria-expanded={expanded}
        onClick={() => setExpanded((prev) => !prev)}
      >
        {item.label}
        <ChevronIcon open={expanded} />
      </button>
      {mounted && (
        <div
          className={cn(
            'grid transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none',
            visible ? 'mt-1 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
          )}
          aria-hidden={!expanded}
        >
          <div className="overflow-hidden">
            <ul className="ml-2 space-y-1 border-l-2 border-brand-100 py-1 pl-3" role="list">
              {item.children!.map((child) => (
                <li key={child.label}>
                  <a
                    href={child.href}
                    className="flex min-w-0 items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-brand-50 hover:text-brand-700"
                    onClick={onNavigate}
                    {...getLinkProps(child)}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="min-w-0 flex-1 leading-snug">{child.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
}

export function Header() {
  const isScrolled = useScrollPosition(1);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobileMenu = () => setMobileOpen(false);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-[100] w-full self-start">
      <div className={cn(isScrolled ? 'bg-surface/95 backdrop-blur-xl' : 'bg-surface')}>
        <TopUtilityBar />
      </div>

      <div className="pointer-events-none fixed left-4 top-1/2 z-[120] -translate-y-1/2">
        <div className="pointer-events-auto rounded-full border border-border/70 bg-surface/90 shadow-lg backdrop-blur-md">
          <ThemeToggle className="h-11 w-11 rounded-full" />
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={cn(
          'relative border-b',
          isScrolled && !mobileOpen
            ? 'border-border/80 bg-surface/95 shadow-[0_12px_30px_-22px_rgba(0,0,0,0.45)] backdrop-blur-xl'
            : 'border-border bg-surface',
        )}
      >
        <div className="absolute inset-x-0 top-0 h-0.5 bg-brand-700" aria-hidden="true" />

        <Container as="nav" aria-label="Main navigation">
          <div className="flex min-h-[4.5rem] items-center justify-between gap-4 lg:min-h-[5rem] lg:gap-6">
            <div className="flex shrink-0 items-center border-border/70 py-3 lg:border-r lg:pr-6 xl:pr-8">
              <Logo />
            </div>

            <ul className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 lg:flex xl:gap-1" role="list">
              {PRIMARY_NAV.map((item, index) => (
                <Fragment key={item.label}>
                  {index === PRIMARY_NAV.length - 1 && (
                    <li
                      className="mx-1.5 hidden h-4 w-px shrink-0 bg-border xl:mx-2.5"
                      aria-hidden="true"
                    />
                  )}
                  <DesktopNavItem item={item} />
                </Fragment>
              ))}
            </ul>

            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border p-2.5 text-text-primary dark:border-brand-700 dark:text-brand-100 lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {mobileOpen && (
            <div id="mobile-menu" className="mobile-nav-panel overflow-y-auto border-t border-border pb-5 lg:hidden">
              <ul className="flex flex-col gap-0.5 pt-3" role="list">
                {PRIMARY_NAV.map((item) => (
                  <MobileNavItem key={item.label} item={item} onNavigate={closeMobileMenu} />
                ))}
              </ul>
              <div className="mt-5 flex flex-col gap-3 border-t border-border px-3 pt-5">
                <a href={CONTACT.phoneHref} className="text-sm font-medium text-text-secondary">
                  {CONTACT.phone}
                </a>
                <a
                  href={CONTACT.businessAssociateHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-text-primary"
                >
                  Business Associate Request
                </a>
                <Button href={CONTACT.demoHref} size="md" blinkText className="w-full">
                  Request a Demo
                </Button>
              </div>
            </div>
          )}
        </Container>
      </div>
    </header>
  );
}
