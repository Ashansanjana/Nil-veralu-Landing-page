import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

const toNumber = (s) => Number(String(s).replace(/[^\d]/g, ''));

// One pricing card. `variant` is 'plan' (monthly care plan) or 'package' (one-time build).
// `compact` shows only the first few features (used on the home page preview).
export default function PlanCard({ plan, variant, compact = false }) {
  const isPlan = variant === 'plan';
  const href = isPlan ? `/contact?plan=${plan.key}` : `/contact?package=${plan.key}`;
  const cta = isPlan ? `Choose ${plan.title}` : 'Get Started';
  const savings = (toNumber(plan.original) - toNumber(plan.price)).toLocaleString('en-US');

  // Care plans show the free website as a highlight, so drop it from the list
  const features = plan.highlight ? plan.features.slice(1) : plan.features;
  const shown = compact ? features.slice(0, 3) : features;

  return (
    <div className={`plan-card tier-${plan.tier}${plan.featured ? ' featured' : ''}`}>
      <div className="plan-top">
        <div className={`plan-tier ${plan.tier}`}>{plan.tierLabel}</div>
        <div className="plan-tags">
          {plan.badge && <span className="plan-badge">{plan.badge}</span>}
          <span className="discount-badge">50% OFF</span>
        </div>
      </div>
      <h3>{plan.title}</h3>
      <p className="plan-desc">{plan.desc}</p>

      <div className="plan-price-block">
        <div className="plan-was">
          <span className="plan-price-original">{plan.original}</span>
          <span className="plan-save">Save Rs. {savings}{isPlan ? '/mo' : ''}</span>
        </div>
        <div className="plan-price">
          <span className="currency">Rs.</span>
          <span className="amount">{plan.price}</span>
          <span className="period">{isPlan ? '/ month' : 'one-time'}</span>
        </div>
      </div>

      {plan.highlight && (
        <div className="plan-highlight">
          <Icon name="gift" size={18} />
          <strong>{plan.highlight}</strong>
        </div>
      )}

      <ul className="plan-features">
        {shown.map((f) => (
          <li key={f}><Icon name="check" size={16} className="check" /> <span>{f}</span></li>
        ))}
      </ul>
      <Link to={href} className={`btn ${plan.featured ? 'btn-primary' : 'btn-dark-outline'} btn-block`}>
        {cta} <Icon name="arrow" size={17} />
      </Link>
    </div>
  );
}
