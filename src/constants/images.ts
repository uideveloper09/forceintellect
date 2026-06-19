const baseUrl = import.meta.env.BASE_URL;
console.log('baseUrl', import.meta.env)
export const IMAGES = {
  logo: `${baseUrl}images/logo/force-intellect-logo.png`,
  favicon: `${baseUrl}images/favi.png`,
  hero: `${baseUrl}images/hero/ForceIntellect-Slider-01.jpg`,
  heroWebp: `${baseUrl}images/hero/ForceIntellect-Slider-01.webp`,
  heroSrcSet: {
    xs: `${baseUrl}images/hero/ForceIntellect-Slider-01-480.webp`,
    sm: `${baseUrl}images/hero/ForceIntellect-Slider-01-640.webp`,
    md: `${baseUrl}images/hero/ForceIntellect-Slider-01-1280.webp`,
    lg: `${baseUrl}images/hero/ForceIntellect-Slider-01.webp`,
  },
  sections: {
    spectrumErp: `${baseUrl}images/sections/spectrum-erp-manufacturing-smes.png`,
    smartSolutions: `${baseUrl}images/sections/smart-erp-solutions.png`,
    smartTools: `${baseUrl}images/sections/smart-erp-tools.png`,
    implementationStrategy: `${baseUrl}images/sections/erp-implementation-strategy.jpg`,
  },
  video: {
    erpOverview:
      'https://www.forceintellect.com/download/Force-Intellect-ERP-Products-Solutions-for-Manufacturing-SMEs.mp4',
  },
  products: {
    spectrumErp: `${baseUrl}images/products/spectrum-erp.jpg`,
    eProcurement: `${baseUrl}images/products/e-procurement.jpg`,
    mobileApps: `${baseUrl}images/products/mobile-apps.jpg`,
    customApplications: `${baseUrl}images/products/custom-applications.jpg`,
  },
  clients: [
    `${baseUrl}images/clients/01.png`,
    `${baseUrl}images/clients/05.png`,
    `${baseUrl}images/clients/08.png`,
    `${baseUrl}images/clients/09.png`,
    `${baseUrl}images/clients/20.png`,
    `${baseUrl}images/clients/25.png`,
    `${baseUrl}images/clients/31.png`,
    `${baseUrl}images/clients/36.png`,
    `${baseUrl}images/clients/39.png`,
    `${baseUrl}images/clients/43.png`,
    `${baseUrl}images/clients/46.png`,
  ],
} as const;

export const CONTACT = {
  phone: '+91 9993533344',
  phoneHref: 'tel:+919993533344',
  email: 'contact@forceintellect.com',
  emailHref: 'mailto:contact@forceintellect.com',
  demoHref: 'https://forceintellect.com/request-a-demo/',
  businessAssociateHref: 'https://forceintellect.com/erp-solution-business-associate/',
  locations: [
    {
      city: 'Pune',
      address: 'C - 703, Radhe Heights Ravet, Pune Maharashtra, India - 411044',
      phone: '+91 9993533344',
    },
    {
      city: 'Bhilai',
      address:
        'Software Technology Park of India, Room No: 6, Incubation Center Junwani Road, Bhilai, Chhattisgarh, India - 490020',
      phone: '0788 - 4038587',
    },
  ],
} as const;

export const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/ForceIntellect/',
    icon: 'facebook',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/ForceIntellect',
    icon: 'twitter',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCGdEauTrK1tI3hCFXMQ5-uQ',
    icon: 'youtube',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/2689419/',
    icon: 'linkedin',
  },
] as const;
