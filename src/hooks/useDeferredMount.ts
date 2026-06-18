import { useEffect, useState } from 'react';

interface UseDeferredMountOptions {
  /** Delay in ms before mounting (default: 0 — idle callback only). */
  delayMs?: number;
  /** Max wait before mounting even without idle (default: 4000). */
  idleTimeoutMs?: number;
}

export function useDeferredMount({
  delayMs = 0,
  idleTimeoutMs = 4000,
}: UseDeferredMountOptions = {}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const mount = () => {
      if (cancelled) return;
      if (delayMs > 0) {
        timeoutId = globalThis.setTimeout(() => setMounted(true), delayMs);
      } else {
        setMounted(true);
      }
    };

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(mount, { timeout: idleTimeoutMs });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(idleId);
        if (timeoutId !== undefined) globalThis.clearTimeout(timeoutId);
      };
    }

    timeoutId = globalThis.setTimeout(mount, idleTimeoutMs);
    return () => {
      cancelled = true;
      if (timeoutId !== undefined) globalThis.clearTimeout(timeoutId);
    };
  }, [delayMs, idleTimeoutMs]);

  return mounted;
}
