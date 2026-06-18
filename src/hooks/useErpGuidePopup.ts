import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'fi-erp-guide-popup-dismissed';
const DEFAULT_DELAY_MS = 2800;
const EXIT_MS = 320;

interface UseErpGuidePopupOptions {
  delayMs?: number;
}

export function useErpGuidePopup({ delayMs = DEFAULT_DELAY_MS }: UseErpGuidePopupOptions = {}) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let timer: number | undefined;

    const scheduleShow = () => {
      timer = window.setTimeout(() => {
        setMounted(true);
        requestAnimationFrame(() => setVisible(true));
      }, delayMs);
    };

    if (document.readyState === 'complete') {
      scheduleShow();
    } else {
      window.addEventListener('load', scheduleShow, { once: true });
    }

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('load', scheduleShow);
    };
  }, [delayMs]);

  useEffect(() => {
    if (!mounted) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previous;
    };
  }, [mounted]);

  const dismiss = useCallback(() => {
    setClosing(true);
    sessionStorage.setItem(STORAGE_KEY, '1');

    window.setTimeout(() => {
      setVisible(false);
      setMounted(false);
      setClosing(false);
    }, EXIT_MS);
  }, []);

  return { mounted, visible, closing, dismiss };
}
