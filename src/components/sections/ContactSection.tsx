import { useState, type ReactNode } from 'react';
import { CONTACT } from '@/constants/images';
import { GoogleMapEmbed } from '@/components/common/GoogleMapEmbed';
import { Reveal } from '@/components/common/Reveal';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { getGoogleMapsDirectionsUrl } from '@/utils/maps';
import { cn } from '@/utils/cn';

function ContactInfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 shadow-[var(--shadow-card)] transition-all duration-200 hover:border-brand-200 hover:shadow-[var(--shadow-premium)]"
    >
      <span className="icon-box h-10 w-10 shrink-0 rounded-lg">{icon}</span>
      <span className="min-w-0">
        <span className="block text-[10px] font-bold uppercase tracking-wider text-text-muted">{label}</span>
        <span className="block break-words text-sm font-semibold text-text-primary">{value}</span>
      </span>
    </a>
  );
}

export function ContactSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLocation = CONTACT.locations[activeIndex];

  return (
    <section id="contact" className="section-padding border-b border-border bg-surface-muted">
      <Container>
        <Reveal>
          <SectionTitle>Contact Us</SectionTitle>
        </Reveal>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <Reveal variant="fade-up" delay={80}>
            <div className="space-y-4">
              <ContactInfoRow
                label="Phone"
                value={CONTACT.phone}
                href={CONTACT.phoneHref}
                icon={
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                }
              />
              <ContactInfoRow
                label="Email"
                value={CONTACT.email}
                href={CONTACT.emailHref}
                icon={
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
              />

              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-primary">Office Locations</p>
                <div
                  className="mt-3 flex w-full max-w-full rounded-xl border border-border bg-surface p-1 shadow-[var(--shadow-card)] sm:inline-flex sm:w-auto"
                  role="tablist"
                  aria-label="Office locations"
                >
                  {CONTACT.locations.map((location, index) => (
                    <button
                      key={location.city}
                      type="button"
                      role="tab"
                      aria-selected={activeIndex === index}
                      aria-controls={`location-panel-${location.city}`}
                      id={`location-tab-${location.city}`}
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        'min-h-11 flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 sm:flex-none sm:min-h-0 sm:px-4',
                        activeIndex === index
                          ? 'bg-brand-700 text-white shadow-sm'
                          : 'text-text-secondary hover:bg-surface-muted hover:text-text-primary',
                      )}
                    >
                      {location.city}
                    </button>
                  ))}
                </div>

                <div
                  id={`location-panel-${activeLocation.city}`}
                  role="tabpanel"
                  aria-labelledby={`location-tab-${activeLocation.city}`}
                  className="mt-4 rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-card)]"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    <p className="text-base font-bold text-text-primary">{activeLocation.city}</p>
                  </div>
                  <address className="mt-3 not-italic">
                    <p className="text-[15px] leading-relaxed text-text-secondary">{activeLocation.address}</p>
                    <a
                      href={`tel:${activeLocation.phone.replace(/\s/g, '')}`}
                      className="mt-3 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800"
                    >
                      {activeLocation.phone}
                    </a>
                  </address>
                  <a
                    href={getGoogleMapsDirectionsUrl(activeLocation.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow mt-4 inline-flex text-sm font-semibold"
                  >
                    Get directions
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={160}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-premium)]">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-200/80 to-transparent"
                aria-hidden="true"
              />
              <GoogleMapEmbed
                key={activeLocation.city}
                query={activeLocation.address}
                locationLabel={activeLocation.city}
                title={`Google Map showing Force Intellect ${activeLocation.city} office`}
                className="aspect-[4/3] h-full min-h-[240px] w-full sm:min-h-[360px] lg:min-h-[420px]"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
