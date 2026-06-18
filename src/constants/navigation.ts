import type { NavItem } from '@/types';

const ABOUT_LINKS: NavItem[] = [
  { label: 'About Us', href: 'https://forceintellect.com/about-us/', external: true },
  { label: 'Vision, Mission & Values', href: 'https://forceintellect.com/vision-mission-values/', external: true },
  { label: 'Our Team', href: 'https://forceintellect.com/our-team/', external: true },
];

const ERP_PRODUCT_LINKS: NavItem[] = [
  { label: 'Spectrum ERP', href: 'https://forceintellect.com/spectrum-erp-software/', external: true },
  { label: 'Tally Integration', href: 'https://forceintellect.com/spectrum-erp-with-tally-integration/', external: true },
  { label: 'Mobile Apps', href: 'https://forceintellect.com/spectrum-erp-mobile-apps/', external: true },
  { label: 'Business Intelligence', href: 'https://forceintellect.com/spectrum-erp-business-intelligence-solution/', external: true },
  { label: 'Custom Applications', href: 'https://forceintellect.com/spectrum-erp-custom-applications/', external: true },
  { label: 'e-Procurement', href: 'https://forceintellect.com/eprocurement-solution/', external: true },
  { label: 'Material Management', href: 'https://forceintellect.com/material-management-solution/', external: true },
];

const INDUSTRY_LINKS: NavItem[] = [
  { label: 'Engineering', href: 'https://forceintellect.com/erp-for-engineering-industry/', external: true },
  { label: 'Fabrication', href: 'https://forceintellect.com/erp-for-fabrication-industry/', external: true },
  { label: 'Steel', href: 'https://forceintellect.com/erp-for-steel-industry/', external: true },
  { label: 'Mining', href: 'https://forceintellect.com/erp-for-mining-industry/', external: true },
  { label: 'Chemical', href: 'https://forceintellect.com/erp-for-chemical-industry/', external: true },
  { label: 'Electrical', href: 'https://forceintellect.com/erp-for-electrical-industry/', external: true },
  { label: 'Transmission Line Tower', href: 'https://forceintellect.com/erp-for-transmission-line-tower-industry/', external: true },
];

const ARTICLE_LINKS: NavItem[] = [
  { label: 'ERP', href: 'https://forceintellect.com/category/erp/', external: true },
  { label: 'e-Procurement', href: 'https://forceintellect.com/category/e-procurement/', external: true },
  { label: 'GST', href: 'https://forceintellect.com/category/gst/', external: true },
];

export const PRIMARY_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: 'https://forceintellect.com/about-us/',
    external: true,
    children: ABOUT_LINKS,
  },
  {
    label: 'ERP Products',
    href: 'https://forceintellect.com/spectrum-erp-software/',
    external: true,
    children: ERP_PRODUCT_LINKS,
  },
  {
    label: 'Industries',
    href: '#industries',
    children: INDUSTRY_LINKS,
  },
  { label: 'Clients', href: '#clients' },
  { label: 'ERP Case Studies', href: 'https://forceintellect.com/erp-case-studies/', external: true },
  { label: 'Careers', href: 'https://forceintellect.com/careers/', external: true },
  {
    label: 'Articles',
    href: 'https://forceintellect.com/articles/',
    external: true,
    children: ARTICLE_LINKS,
  },
  { label: 'Contact Us', href: '/', scrollTarget: 'contact' },
];

export const FOOTER_LINKS = {
  products: [
    { label: 'Spectrum ERP', href: 'https://forceintellect.com/spectrum-erp-software/', external: true },
    { label: 'Tally Integration', href: 'https://forceintellect.com/spectrum-erp-with-tally-integration/', external: true },
    { label: 'Mobile Apps', href: 'https://forceintellect.com/spectrum-erp-mobile-apps/', external: true },
    { label: 'Business Intelligence', href: 'https://forceintellect.com/spectrum-erp-business-intelligence-solution/', external: true },
    { label: 'Custom Applications', href: 'https://forceintellect.com/spectrum-erp-custom-applications/', external: true },
    { label: 'e-Procurement', href: 'https://forceintellect.com/eprocurement-solution/', external: true },
    { label: 'Material Management', href: 'https://forceintellect.com/material-management-solution/', external: true },
  ],
  industries: [
    { label: 'Engineering', href: 'https://forceintellect.com/erp-for-engineering-industry/', external: true },
    { label: 'Fabrication', href: 'https://forceintellect.com/erp-for-fabrication-industry/', external: true },
    { label: 'Steel', href: 'https://forceintellect.com/erp-for-steel-industry/', external: true },
    { label: 'Mining', href: 'https://forceintellect.com/erp-for-mining-industry/', external: true },
    { label: 'Chemical', href: 'https://forceintellect.com/erp-for-chemical-industry/', external: true },
    { label: 'Electrical', href: 'https://forceintellect.com/erp-for-electrical-industry/', external: true },
    { label: 'Transmission Line Tower', href: 'https://forceintellect.com/erp-for-transmission-line-tower-industry/', external: true },
  ],
  company: [
    { label: 'About Us', href: 'https://forceintellect.com/about-us/', external: true },
    { label: 'Case Studies', href: 'https://forceintellect.com/erp-case-studies/', external: true },
    { label: 'Careers', href: 'https://forceintellect.com/careers/', external: true },
    { label: 'Articles', href: 'https://forceintellect.com/articles/', external: true },
  ],
} as const;
