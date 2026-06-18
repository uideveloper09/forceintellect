import { PRODUCTS, PRODUCTS_SECTION } from '@/constants/content';
import { IMAGES } from '@/constants/images';
import { Reveal } from '@/components/common/Reveal';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function ProductsSection() {
  return (
    <section className="section-padding border-b border-border bg-surface">
      <Container>
        <Reveal>
          <SectionTitle size="large" className="mb-10 sm:mb-14">
            {PRODUCTS_SECTION.title}
          </SectionTitle>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.id} delay={index * 100} variant="fade-up">
              <Card hover variant="elevated" padding="sm" className="group h-full overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={IMAGES.products[product.imageKey]}
                    alt={product.title}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    width={480}
                    height={192}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-text-primary">{product.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{product.description}</p>
                  <a
                    href={product.href}
                    className="link-arrow mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
