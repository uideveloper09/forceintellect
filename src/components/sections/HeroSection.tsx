import { HERO_CONTENT } from '@/constants/content';
import { CONTACT, IMAGES } from '@/constants/images';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function HeroSection() {
  return (
    <section className="relative border-b border-border bg-surface">
      <div className="w-full overflow-hidden border-b border-border bg-white">
        <picture>
          <source
            srcSet={`${IMAGES.heroSrcSet.xs} 480w, ${IMAGES.heroSrcSet.sm} 640w, ${IMAGES.heroSrcSet.md} 1280w, ${IMAGES.heroSrcSet.lg} 1920w`}
            sizes="100vw"
            type="image/webp"
          />
          <img
            src={IMAGES.hero}
            alt="Force Intellect ERP software for manufacturing SMEs"
            className="hero-banner-img block h-auto w-full"
            width={1920}
            height={600}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>

      <Container className="hero-padding relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/80 to-transparent" aria-hidden="true" />
        <div className="bg-pattern absolute inset-0 opacity-30" aria-hidden="true" />

        <div className="relative w-full">
          <SectionTitle as="h1">{HERO_CONTENT.headline}</SectionTitle>

          <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-[17px]">
            {HERO_CONTENT.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" role="list">
            {HERO_CONTENT.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-brand-100 bg-brand-50/70 px-3.5 py-1.5 text-sm font-medium text-brand-800"
              >
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={CONTACT.businessAssociateHref} size="lg" variant="secondary" className="w-full sm:w-auto">
              {HERO_CONTENT.secondaryCta}
            </Button>
            <Button href={CONTACT.demoHref} size="lg" blinkText className="w-full sm:w-auto">
              {HERO_CONTENT.primaryCta}
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
