import { SMART_ERP_CONTENT } from '@/constants/content';
import { IMAGES } from '@/constants/images';
import { Reveal } from '@/components/common/Reveal';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function SmartErpSolutionsSection() {
  return (
    <section className="section-padding border-b border-border bg-surface">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <Reveal variant="slide-left" className="lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-premium)]">
              <div className="bg-surface-muted px-4 py-5 sm:px-6 sm:py-8">
                <img
                  src={IMAGES.sections.smartSolutions}
                  alt="Smart ERP solutions — Business Intelligence and Mobile Apps"
                  className="mx-auto w-full max-w-lg object-contain"
                  loading="lazy"
                  width={560}
                  height={360}
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="slide-right" delay={100} className="lg:order-2">
            <div className="lg:sticky lg:top-28">
              <SectionTitle>{SMART_ERP_CONTENT.title}</SectionTitle>

              <ul className="mt-8 space-y-3" role="list">
                {SMART_ERP_CONTENT.points.map((point, index) => (
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
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
