import { useEffect } from 'react';
import { ZOHO_SALESIQ_SCRIPT_URL, ZOHO_SALESIQ_WIDGET_CODE } from '@/constants/integrations';

declare global {
  interface Window {
    $zoho?: {
      salesiq?: {
        widgetcode?: string;
        values?: Record<string, unknown>;
        ready?: () => void;
      };
    };
  }
}

function injectZohoScript() {
  if (document.getElementById('zsiqscript')) return;

  window.$zoho = window.$zoho || {};
  window.$zoho.salesiq = window.$zoho.salesiq || {
    widgetcode: ZOHO_SALESIQ_WIDGET_CODE,
    values: {},
    ready() {},
  };

  if (!document.getElementById('zsiqwidget')) {
    const widgetRoot = document.createElement('div');
    widgetRoot.id = 'zsiqwidget';
    document.body.appendChild(widgetRoot);
  }

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.id = 'zsiqscript';
  script.defer = true;
  script.src = ZOHO_SALESIQ_SCRIPT_URL;

  const firstScript = document.getElementsByTagName('script')[0];
  firstScript?.parentNode?.insertBefore(script, firstScript);
}

export function ZohoSalesIQ() {
  useEffect(() => {
    let loaded = false;

    const load = () => {
      if (loaded) return;
      loaded = true;
      injectZohoScript();
    };

    const interactionEvents = ['scroll', 'pointerdown', 'keydown', 'touchstart'] as const;
    const onInteraction = () => {
      load();
      interactionEvents.forEach((event) => window.removeEventListener(event, onInteraction));
    };

    interactionEvents.forEach((event) =>
      window.addEventListener(event, onInteraction, { passive: true }),
    );

    return () => {
      interactionEvents.forEach((event) => window.removeEventListener(event, onInteraction));
    };
  }, []);

  return null;
}
