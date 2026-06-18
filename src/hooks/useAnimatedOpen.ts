import { useEffect, useState } from 'react';

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useAnimatedOpen(open: boolean, duration = 200) {
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setMounted(open);
      setVisible(open);
      return;
    }

    let enterFrame = 0;
    let exitTimer: ReturnType<typeof setTimeout>;

    if (open) {
      setMounted(true);
      enterFrame = requestAnimationFrame(() => {
        enterFrame = requestAnimationFrame(() => setVisible(true));
      });
    } else {
      setVisible(false);
      exitTimer = setTimeout(() => setMounted(false), duration);
    }

    return () => {
      cancelAnimationFrame(enterFrame);
      clearTimeout(exitTimer);
    };
  }, [open, duration]);

  return { mounted, visible };
}
