import { useState, type FormEvent } from 'react';
import { IMAGES } from '@/constants/images';
import { ERP_GUIDE_POPUP } from '@/constants/content';
import { useErpGuidePopup } from '@/hooks/useErpGuidePopup';
import { cn } from '@/utils/cn';

export function ErpGuidePopup() {
  const { mounted, visible, closing, dismiss } = useErpGuidePopup();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!mounted) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 400));

    window.open(ERP_GUIDE_POPUP.downloadUrl, '_blank', 'noopener,noreferrer');
    dismiss();
    setSubmitting(false);
  };

  return (
    <div
      className={cn(
        'guide-popup-root fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6',
        closing && 'guide-popup-root-hidden',
        visible && !closing && 'guide-popup-root-visible',
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="erp-guide-popup-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-brand-900/55 backdrop-blur-[2px]"
        aria-label="Close popup"
        onClick={dismiss}
      />

      <div
        className={cn(
          'guide-popup-panel mobile-popup-panel relative z-10 w-full max-w-[720px] overflow-y-auto rounded-2xl border border-border bg-surface shadow-[0_24px_64px_rgb(10_22_40/0.18)]',
          closing && 'guide-popup-panel-hidden',
          visible && !closing && 'guide-popup-panel-visible',
        )}
      >
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text-secondary shadow-sm transition-colors hover:border-border-strong hover:bg-surface-muted hover:text-text-primary sm:right-4 sm:top-4"
          aria-label="Close"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="flex items-center justify-center border-b border-border bg-surface-muted p-6 sm:border-b-0 sm:border-r sm:p-8">
            <img
              src={IMAGES.logo}
              alt="Force Intellect — A Guide for ERP concepts"
              className="max-h-32 w-auto object-contain"
              width={200}
              height={80}
            />
          </div>

          <div className="p-6 pt-8 sm:p-7 sm:pt-7">
            <h2 id="erp-guide-popup-title" className="text-2xl font-bold tracking-tight text-brand-800">
              {ERP_GUIDE_POPUP.title}
            </h2>
            <p className="mt-2 text-base text-text-primary">{ERP_GUIDE_POPUP.subtitle}</p>

            <form className="mt-6 space-y-3" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="guide-name" className="sr-only">
                  Name
                </label>
                <input
                  id="guide-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Name*"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-lg border border-border-strong bg-surface px-4 py-3 text-base text-text-primary placeholder:text-text-muted transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="guide-email" className="sr-only">
                  Email
                </label>
                <input
                  id="guide-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-lg border border-border-strong bg-surface px-4 py-3 text-base text-text-primary placeholder:text-text-muted transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 sm:text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-1 w-full rounded-lg bg-brand-700 px-4 py-3.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? 'Opening guide…' : ERP_GUIDE_POPUP.cta}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
