import { TESTIMONIALS, TESTIMONIALS_SECTION } from '@/constants/content';
import { Reveal } from '@/components/common/Reveal';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

function getInitials(company: string) {
  return company
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section className="section-padding border-b border-border bg-surface-muted">
      <Container>
        <Reveal>
          <SectionTitle size="large">{TESTIMONIALS_SECTION.title}</SectionTitle>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary">
            {TESTIMONIALS_SECTION.description}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 100} variant="fade-up">
              <Card variant="elevated" padding="md" hover className="relative flex h-full flex-col">
                <blockquote className="flex-1 text-[15px] leading-relaxed text-text-secondary">
                  {testimonial.quote}
                </blockquote>
                <footer className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-sm font-bold text-brand-700"
                    aria-hidden="true"
                  >
                    {getInitials(testimonial.company)}
                  </div>
                  <cite className="not-italic">
                    <p className="text-sm font-bold text-text-primary">{testimonial.author}</p>
                    <p className="text-sm text-text-muted">{testimonial.company}</p>
                  </cite>
                </footer>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-12 text-center">
          <a
            href="https://forceintellect.com/client-testimonials/"
            className="link-arrow"
            target="_blank"
            rel="noopener noreferrer"
          >
            See all client testimonials
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
