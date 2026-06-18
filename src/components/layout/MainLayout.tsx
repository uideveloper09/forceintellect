import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useDeferredMount } from '@/hooks/useDeferredMount';
import { Header } from './Header';

const Footer = lazy(() => import('./Footer').then((m) => ({ default: m.Footer })));
const ScrollToTop = lazy(() =>
  import('@/components/common/ScrollToTop').then((m) => ({ default: m.ScrollToTop })),
);
const ZohoSalesIQ = lazy(() =>
  import('@/components/common/ZohoSalesIQ').then((m) => ({ default: m.ZohoSalesIQ })),
);
const ErpGuidePopup = lazy(() =>
  import('@/components/common/ErpGuidePopup').then((m) => ({ default: m.ErpGuidePopup })),
);

function DeferredWidgets() {
  const mounted = useDeferredMount({ idleTimeoutMs: 12000 });

  if (!mounted) return null;

  return (
    <Suspense fallback={null}>
      <ScrollToTop />
      <ZohoSalesIQ />
      <ErpGuidePopup />
    </Suspense>
  );
}

export function MainLayout() {
  return (
    <div className="flex min-h-screen min-h-dvh flex-col overflow-visible">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <DeferredWidgets />
    </div>
  );
}
