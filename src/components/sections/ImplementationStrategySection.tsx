import { IMPLEMENTATION_CONTENT } from '@/constants/content';
import { IMAGES } from '@/constants/images';
import { Reveal } from '@/components/common/Reveal';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function ImplementationStrategySection() {
  return (
    <section className="section-padding border-b border-border bg-surface">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <Reveal variant="slide-left">
            <div className="lg:sticky lg:top-28">
              <SectionTitle>{IMPLEMENTATION_CONTENT.title}</SectionTitle>

              <ul className="mt-8 space-y-3" role="list">
                {IMPLEMENTATION_CONTENT.points.map((point, index) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-border bg-surface-muted px-4 py-3.5"
                  >
                    <span className="icon-box mt-0.5 h-7 w-7 shrink-0 rounded-lg text-xs font-bold">
                      {index + 1}
                    </span>
                    <span className="text-[15px] leading-relaxed text-text-secondary">{point}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3" role="list">
                {IMPLEMENTATION_CONTENT.paths.map((path, index) => (
                  <li
                    key={path}
                    className="group flex items-center gap-3 rounded-xl border border-brand-100 bg-brand-50/40 px-3.5 py-3 transition-colors hover:border-brand-200 hover:bg-brand-50"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-700 text-[11px] font-bold text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-semibold leading-snug text-text-primary">{path}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal variant="slide-right" delay={100}>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-premium)]">
              <div className="bg-surface-muted px-4 py-5 sm:px-6 sm:py-8">
                <img
                  src={IMAGES.sections.implementationStrategy}
                  alt="ERP implementation strategy for manufacturing SMEs"
                  className="mx-auto w-full max-w-lg object-contain"
                  loading="lazy"
                  width={560}
                  height={360}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
