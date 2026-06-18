import { lazy } from 'react';
import { LazySectionSuspense } from '@/components/common/LazySection';
import { HeroSection } from '@/components/sections/HeroSection';

const ClientsSection = lazy(() =>
  import('@/components/sections/ClientsSection').then((m) => ({ default: m.ClientsSection })),
);

const ErpModulesGrid = lazy(() =>
  import('@/components/sections/ErpModulesGrid').then((m) => ({ default: m.ErpModulesGrid })),
);
const ExpertiseSection = lazy(() =>
  import('@/components/sections/ExpertiseSection').then((m) => ({ default: m.ExpertiseSection })),
);
const SmartErpSolutionsSection = lazy(() =>
  import('@/components/sections/SmartErpSolutionsSection').then((m) => ({
    default: m.SmartErpSolutionsSection,
  })),
);
const PartnershipSection = lazy(() =>
  import('@/components/sections/PartnershipSection').then((m) => ({ default: m.PartnershipSection })),
);
const ImplementationStrategySection = lazy(() =>
  import('@/components/sections/ImplementationStrategySection').then((m) => ({
    default: m.ImplementationStrategySection,
  })),
);
const TestimonialsSection = lazy(() =>
  import('@/components/sections/TestimonialsSection').then((m) => ({ default: m.TestimonialsSection })),
);
const ProductsSection = lazy(() =>
  import('@/components/sections/ProductsSection').then((m) => ({ default: m.ProductsSection })),
);
const ContactSection = lazy(() =>
  import('@/components/sections/ContactSection').then((m) => ({ default: m.ContactSection })),
);

export function HomePage() {
  return (
    <>
      <HeroSection />

      <LazySectionSuspense skeleton="split">
        <ErpModulesGrid />
      </LazySectionSuspense>

      <LazySectionSuspense skeleton="split">
        <ExpertiseSection />
      </LazySectionSuspense>

      <LazySectionSuspense skeleton="split">
        <SmartErpSolutionsSection />
      </LazySectionSuspense>

      <LazySectionSuspense skeleton="split">
        <PartnershipSection />
      </LazySectionSuspense>

      <LazySectionSuspense skeleton="split">
        <ImplementationStrategySection />
      </LazySectionSuspense>

      <LazySectionSuspense skeleton="cards">
        <ProductsSection />
      </LazySectionSuspense>

      <LazySectionSuspense skeleton="testimonials">
        <TestimonialsSection />
      </LazySectionSuspense>

      <LazySectionSuspense skeleton="cards">
        <ClientsSection />
      </LazySectionSuspense>

      <LazySectionSuspense skeleton="split">
        <ContactSection />
      </LazySectionSuspense>
    </>
  );
}
