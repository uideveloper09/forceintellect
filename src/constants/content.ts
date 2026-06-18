import type { Product, Testimonial } from '@/types';

export const HERO_CONTENT = {
  headline: 'We Provide Robust & Affordable ERP for Manufacturing SMEs',
  description:
    'Force Intellect provides ERP software for small and medium enterprises in Manufacturing Industry. We understand complexities of manufacturing industry as well as challenges faced by SMEs to grow their business. Our robust and affordable ERP software, ERP products and custom ERP solutions help streamline processes, improve operation management and supply chain efficiencies. This makes manufacturing SMEs more efficient, productive and agile.',
  highlights: [
    'Manufacturing Industry',
    'streamline processes',
    'supply chain efficiencies',
    'efficient, productive and agile',
  ],
  primaryCta: 'Request a Demo',
  secondaryCta: 'Business Associate Request',
} as const;

export const SPECTRUM_ERP_CONTENT = {
  title: 'Spectrum ERP - Designed For Manufacturing SMEs',
  description:
    'Spectrum ERP - our comprehensive End to End ERP software solution automates and integrates manufacturing processes of material management, planning and production, e-Procurement, sales and distribution, finance and accounting, HR & payroll, plant maintenance, customer relationship management.',
  highlights: [
    'Spectrum ERP helps connect all departments, teams and integrates information across locations.',
    'This makes it easier to access, gather, analyze information and make informed decisions.',
    'Spectrum ERP can also be seamlessly integrated with Tally Software.',
  ],
} as const;

export const SPECTRUM_ERP_MODULES = [
  'Inventory Management',
  'Production Planning',
  'Quality Management',
  'Plant Maintenance',
  'Financial Accounting',
  'Sales & Distribution',
  'Material Management',
  'Purchase Management',
] as const;

export const EXPERTISE_CONTENT = {
  title: 'Count On Us, We Are Manufacturing ERP Experts',
  description:
    'We have served clients from manufacturing industries for over 10 years. We understand, and analyze each industry specific business challenge. For clients having unique and complex business processes, we provide Spectrum ERP Custom Applications - a blend of our "ready to use" ERP modules and "highly customized" modules to suit their specific requirements. Our Spectrum ERP has been successfully implemented in manufacturing industry verticals such as: electrical, chemicals, fabrication, elevators, transmission line towers, machinery, mining and so on. We keep improving our ERP products & solutions, to meet ever changing needs of manufacturing industry.',
} as const;

export const SMART_ERP_CONTENT = {
  title: 'Smart ERP Solutions for Competitive Edge',
  description:
    'We provide smart ERP solutions for a competitive edge. Our Spectrum ERP Business Intelligence Solution provides dashboards, business analysis reports, exception reporting and notification alerts. Spectrum ERP Mobile Apps offer mobility to stay connected & informed on the Go! Manufacturing SMEs can thus find areas to focus on, make quick and well informed decisions. This helps improve business performance and stay ahead of competition.',
  points: [
    'We provide smart ERP solutions for a competitive edge.',
    'Our Spectrum ERP Business Intelligence Solution provides dashboards, business analysis reports, exception reporting and notification alerts.',
    'Spectrum ERP Mobile Apps offer mobility to stay connected & informed on the Go!',
    'Manufacturing SMEs can thus find areas to focus on, make quick and well informed decisions. This helps improve business performance and stay ahead of competition.',
  ],
} as const;

export const PARTNERSHIP_CONTENT = {
  title: "We Don't Just Implement ERP Software! We Partner with You!",
  description:
    'We understand businesses need results, not products! We gather, understand and brainstorm your business challenges to provide the most appropriate ERP Solution. We provide checklists, guidelines, tools and perform reviews to make go-live a smooth affair. Our support team ensures that you extract the best value from our ERP solution. We don\'t just implement ERP Software! We partner with you to provide the best ERP Solutions!',
  points: [
    'We understand businesses need results, not products!',
    'We gather, understand and brainstorm your business challenges to provide the most appropriate ERP Solution.',
    'We provide checklists, guidelines, tools and perform reviews to make go-live a smooth affair.',
    'Our support team ensures that you extract the best value from our ERP solution.',
    "We don't just implement ERP Software! We partner with you to provide the best ERP Solutions!",
  ],
} as const;

export const IMPLEMENTATION_CONTENT = {
  title: 'Our ERP Implementation Strategy meets your business requirements',
  description:
    'We understand that each manufacturing enterprise is unique. Hence, we help you adopt, an ERP implementation strategy that suits your business requirements. You can start with a single ERP module such as "Material Management Module" or combine a few ERP modules like "Material Management and Sales" or choose to implement full suite ERP Solution. We have a simple, easy to understand and affordable pricing suited for all business requirements.',
  points: [
    'We understand that each manufacturing enterprise is unique.',
    'Hence, we help you adopt, an ERP implementation strategy that suits your business requirements.',
    'You can start with a single ERP module such as "Material Management Module" or combine a few ERP modules like "Material Management and Sales" or choose to implement full suite ERP Solution.',
    'We have a simple, easy to understand and affordable pricing suited for all business requirements.',
  ],
  paths: ['Material Management Module', 'Material Management and Sales', 'full suite ERP Solution'],
} as const;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'vijay-transmissions',
    quote:
      'We were looking for ways to increase operation efficiency in our industry. To fulfill these duties we hired Force-Intellect. They have worked with us to increase our operation efficiency while keeping in mind our purpose...',
    author: 'Director',
    company: 'Vijay Transmissions Pvt. Ltd.',
  },
  {
    id: 'star-wires',
    quote:
      'We have been growing rapidly and needed an ERP that will connect our operations across locations into one integrated system. They had a ready solution for our business.They implemented the solution on time and gave us re...',
    author: 'Director',
    company: 'Star Wires Vidhyut Pvt Ltd',
  },
  {
    id: 'eros-elevators',
    quote:
      'Force- system has helped us in increasing our operational efficiency. They delivered unique solutions to some complex problems. They provided us various automation tasks such as estimation and BOM generation, integration...',
    author: 'CEO',
    company: 'Eros Elevators Pvt Ltd.',
  },
  {
    id: 'hira-group',
    quote:
      'Force-Intellect provided us with innovative ERP solutions which suits to our business process. Force-Intellect helped us in the integration of multiple business units and in rolling out various strategies to support divi...',
    author: 'Director',
    company: 'Hira Group of Companies',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'spectrum-erp',
    title: 'Spectrum ERP',
    description:
      'An end-to-end ERP Solution for Manufacturing SMEs to integrate manufacturing processes, maximize efficiency and drive profitable growth.',
    href: 'https://forceintellect.com/spectrum-erp-software/',
    imageKey: 'spectrumErp',
  },
  {
    id: 'e-procurement',
    title: 'e-Procurement',
    description:
      'Our integrated e-Procurement solution offers efficient and transparent procurement system for manufacturing enterprises. This solution is a part of our Spectrum ERP product portfolio and can also be integrated with 3rd party ERP.',
    href: 'https://forceintellect.com/eprocurement-solution/',
    imageKey: 'eProcurement',
  },
  {
    id: 'mobile-apps',
    title: 'Spectrum ERP Mobile Apps',
    description:
      'Our Mobile Apps offer easy access to ERP information via Smartphone & tabs. You can stay connected & informed anytime, anywhere!',
    href: 'https://forceintellect.com/spectrum-erp-mobile-apps/',
    imageKey: 'mobileApps',
  },
  {
    id: 'custom-apps',
    title: 'Spectrum ERP Custom Applications',
    description:
      'Your own business processes may be your competitive advantage. We design and build ERP custom applications to provide cutting edge to your unique business processes.',
    href: 'https://forceintellect.com/spectrum-erp-custom-applications/',
    imageKey: 'customApplications',
  },
];

export const TESTIMONIALS_SECTION = {
  title: 'Client Testimonials',
  description:
    'Over the years, our ERP for Manufacturing SMEs, has addressed the needs of clients from various manufacturing industry verticals. See how our clients have benefited by implementing Spectrum ERP',
} as const;

export const PRODUCTS_SECTION = {
  title: 'Our ERP Products & Solutions To Keep You Ahead of Competition',
} as const;

export const ERP_GUIDE_POPUP = {
  title: 'Get the ERP Concepts Guide',
  subtitle: 'A Must Read before Implementing ERP',
  cta: 'Download FREE!',
  downloadUrl: 'https://forceintellect.com/download/ERP-Concept-Guide.pdf',
} as const;

export const FOOTER_ABOUT = {
  title: 'We Provide Robust & Affordable ERP for Manufacturing SMEs',
  description:
    'Robust and affordable ERP software for manufacturing SMEs. Spectrum ERP connects departments, locations and processes in one integrated system.',
} as const;

export const FOOTER_COPYRIGHT = 'Copyright © 2016 Forceintellect.com All rights reserved';
