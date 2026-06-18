import type { MouseEvent } from 'react';

export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function handleSectionScroll(event: MouseEvent<HTMLAnchorElement>, sectionId: string) {
  event.preventDefault();
  scrollToSection(sectionId);
}
