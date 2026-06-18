import { IMAGES } from '@/constants/images';
import { LogoCard, LogoMarquee, usePrefersReducedMotion } from '@/components/common/LogoMarquee';
import { Reveal } from '@/components/common/Reveal';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

const CLIENT_ROW_ONE = IMAGES.clients.slice(0, 6);
const CLIENT_ROW_TWO = IMAGES.clients.slice(6);

export function ClientsSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="clients" className="section-padding overflow-hidden border-b border-border bg-surface">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle>Our Clients</SectionTitle>
            <a
              href="https://forceintellect.com/clients/"
              className="link-arrow shrink-0 sm:pb-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              See all clients
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-premium)]">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-200/80 to-transparent"
              aria-hidden="true"
            />

            <div className="bg-surface-muted/70 px-2 py-6 sm:px-4 sm:py-7">
              {reducedMotion ? (
                <div className="flex flex-wrap justify-start gap-4 px-3 sm:px-4">
                  {IMAGES.clients.map((logo, index) => (
                    <LogoCard key={logo} src={logo} labelIndex={index} />
                  ))}
                </div>
              ) : (
                <div className="space-y-5">
                  <LogoMarquee logos={CLIENT_ROW_ONE} direction="left" duration={42} fade="muted" />
                  <LogoMarquee logos={CLIENT_ROW_TWO} direction="right" duration={48} fade="muted" />
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
