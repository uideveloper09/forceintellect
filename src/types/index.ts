export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  scrollTarget?: string;
  children?: NavItem[];
}

export interface ErpModule {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface ProcessStep {
  id: string;
  label: string;
  description: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
}

export interface WhyFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  href: string;
  imageKey: 'spectrumErp' | 'eProcurement' | 'mobileApps' | 'customApplications';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
