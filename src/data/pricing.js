// Single source of truth for prices. Keep in sync with PROJECT-NOTES.md.

export const buildPackages = [
  {
    key: '4-page',
    interest: '4 Page Website - Rs. 4,999',
    tier: 'bronze',
    tierLabel: '4',
    title: '4 Page Website',
    desc: 'Perfect for a simple business presence online.',
    original: 'Rs. 9,998',
    price: '4,999',
    features: [
      '4 custom-designed pages (e.g. Home, About, Services, Contact)',
      'Mobile responsive design',
      'Contact form included',
      'Basic on-page SEO setup',
      '2 rounds of revisions',
    ],
  },
  {
    key: '6-page',
    interest: '6 Page Website - Rs. 6,999',
    tier: 'silver',
    tierLabel: '6',
    title: '6 Page Website',
    desc: 'Ideal for businesses that need more room to grow.',
    original: 'Rs. 13,998',
    price: '6,999',
    featured: true,
    badge: 'Best Value',
    features: [
      'Everything in the 4 Page package',
      '6 custom-designed pages',
      'Social media integration',
      '3 rounds of revisions',
    ],
  },
  {
    key: '8-page',
    interest: '8 Page Website - Rs. 8,999',
    tier: 'gold',
    tierLabel: '8',
    title: '8 Page Website',
    desc: 'A complete website for established businesses.',
    original: 'Rs. 17,998',
    price: '8,999',
    features: [
      'Everything in the 6 Page package',
      '8 custom-designed pages',
      'Basic analytics setup',
      '4 rounds of revisions',
    ],
  },
];

export const carePlans = [
  {
    key: 'Bronze',
    interest: 'Bronze Plan - Rs. 999/month',
    tier: 'bronze',
    tierLabel: 'Br',
    highlight: 'FREE 4-page website included',
    title: 'Bronze',
    desc: 'Essential care for a simple, low-traffic website.',
    original: 'Rs. 1,998',
    price: '999',
    features: [
      '4 page website free',
      'Website hosting support & monitoring',
      '1 content update per month',
      'Basic security monitoring',
      'Uptime monitoring',
      'Email support',
    ],
  },
  {
    key: 'Silver',
    interest: 'Silver Plan - Rs. 1,999/month',
    tier: 'silver',
    tierLabel: 'Si',
    highlight: 'FREE 6-page website included',
    title: 'Silver',
    desc: 'Great for growing businesses that update content often.',
    original: 'Rs. 3,998',
    price: '1,999',
    featured: true,
    badge: 'Most Popular',
    features: [
      '6 page website free',
      'Everything in Bronze, plus:',
      '2 content updates per month',
      'Monthly performance report',
      'Basic SEO monitoring',
      'Priority email & chat support',
    ],
  },
  {
    key: 'Gold',
    interest: 'Gold Plan - Rs. 2,999/month',
    tier: 'gold',
    tierLabel: 'Go',
    highlight: 'FREE 8-page website included',
    title: 'Gold',
    desc: 'Full-service care for businesses that rely on their website.',
    original: 'Rs. 5,998',
    price: '2,999',
    features: [
      '8 page website free',
      'Everything in Silver, plus:',
      '3 content updates per month',
      'Weekly automated backups',
      'Monthly SEO optimization',
      'Priority phone support',
    ],
  },
];

export const addons = [
  {
    icon: 'layout',
    title: 'Need more than 8 pages?',
    text: 'Every additional page beyond the 8-page package can be added for a flat rate — as many as your business needs.',
    original: 'Rs. 1,998',
    price: 'Rs. 999',
    unit: 'per additional page',
  },
  {
    icon: 'server',
    title: 'Need hosting for your new website?',
    text: "Build packages don't include hosting. Add on standalone hosting for a low monthly fee — no need for a full care plan.",
    original: 'Rs. 998',
    price: 'Rs. 499',
    unit: 'per month',
  },
  {
    icon: 'coin',
    title: 'Prefer to pay once?',
    text: 'Get free hosting forever with a single one-off setup cost — no monthly hosting fee, ever.',
    original: 'Rs. 5,998',
    price: 'Rs. 2,999',
    unit: 'one-off setup, free hosting forever',
  },
];

// ?plan= and ?package= query values -> contact form "interest" value
export const interestByKey = Object.fromEntries(
  [...carePlans, ...buildPackages].map((p) => [p.key, p.interest])
);
