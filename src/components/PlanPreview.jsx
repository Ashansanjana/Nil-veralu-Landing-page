import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import PlanCard from './PlanCard.jsx';
import { carePlans, buildPackages } from '../data/pricing.js';

const tabs = [
  {
    id: 'care',
    label: 'Monthly Care Plans',
    badge: 'Free build',
    plans: carePlans,
    variant: 'plan',
    notes: ['No charge for website development', 'Minimum 12 month commitment', 'All prices in LKR'],
  },
  {
    id: 'build',
    label: 'Website Build Packages',
    plans: buildPackages,
    variant: 'package',
    notes: ['One-time payment', 'Extra pages Rs. 999 each', 'Hosting add-on from Rs. 499/month'],
  },
];

// Home-page pricing snapshot with a Care Plans / Build Packages switch
export default function PlanPreview() {
  const [active, setActive] = useState('care');
  const tab = tabs.find((t) => t.id === active);

  return (
    <>
      <div className="seg" role="tablist" aria-label="Pricing type">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={t.id === active}
            className={`seg-btn${t.id === active ? ' active' : ''}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
            {t.badge && <span className="seg-badge">{t.badge}</span>}
          </button>
        ))}
      </div>

      <div className="pricing-grid preview-grid" key={tab.id}>
        {tab.plans.map((p) => (
          <PlanCard key={p.key} plan={p} variant={tab.variant} compact />
        ))}
      </div>

      <ul className="preview-notes">
        {tab.notes.map((n) => (
          <li key={n}><Icon name="check" size={16} /> {n}</li>
        ))}
      </ul>

      <div className="section-cta">
        <Link to="/pricing" className="btn btn-dark-outline">
          View full pricing &amp; add-ons <Icon name="arrow" size={18} />
        </Link>
      </div>
    </>
  );
}
