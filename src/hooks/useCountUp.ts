import { useEffect, useState } from 'react';

interface ParsedValue {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
}

function parseStatValue(value: string): ParsedValue {
  const match = value.match(/^([^\d]*?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { prefix: '', target: 0, suffix: value, decimals: 0 };
  }

  const [, prefix = '', num = '0', suffix = ''] = match;
  const decimals = num.includes('.') ? num.split('.')[1]!.length : 0;

  return {
    prefix,
    target: Number(num),
    suffix,
    decimals,
  };
}

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useCountUp(value: string, active: boolean, duration = 1600): string {
  const { prefix, target, suffix, decimals } = parseStatValue(value);
  const [display, setDisplay] = useState(() => (active && prefersReducedMotion() ? value : `${prefix}0${suffix}`));

  useEffect(() => {
    if (!active) return;

    if (prefersReducedMotion()) {
      setDisplay(value);
      return;
    }

    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = target * easeOutCubic(progress);
      const formatted =
        decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();

      setDisplay(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value, target, prefix, suffix, decimals, duration]);

  return display;
}
