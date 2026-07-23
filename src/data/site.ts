export const SITE = {
  name: 'Max Pavage',
  legalName: 'Max Pavage srl',
  domain: 'https://www.maxpavage.be',
  phone: '+32 87 47 44 01',
  phoneHref: 'tel:+3287474401',
  email: 'info@maxpavage.be',
  address: {
    street: 'Rue Saint-Paul 243',
    postalCode: '4841',
    city: 'Welkenraedt',
    country: 'BE',
  },
  region: 'Province de Liège',
  googleAdsId: 'AW-18337275490',
  socials: {
    facebook: 'https://www.facebook.com/p/Max-Pavage-100036004763244/',
    instagram: 'https://www.instagram.com/maxpavage_/',
    linkedin: 'https://www.linkedin.com/company/108565359',
  },
  heroVideoId: '9xLV82KlkMk',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { label: 'Aménagements extérieurs', href: '/amenagements-exterieurs' },
  { label: 'Terrassement', href: '/terrassement' },
  { label: 'Maçonnerie', href: '/maconnerie' },
  { label: 'Tapis de pierre', href: '/tapis-de-pierre' },
  { label: 'Réalisations', href: '/nos-realisations' },
  { label: 'A propos', href: '/about-us' },
];
