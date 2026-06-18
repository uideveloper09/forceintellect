import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function NotFoundPage() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">404</p>
      <h1 className="mt-3 text-3xl font-bold text-text-primary">Page not found</h1>
      <p className="mt-3 max-w-md text-text-secondary">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button href="/" className="mt-8">
        Back to Home
      </Button>
    </Container>
  );
}
