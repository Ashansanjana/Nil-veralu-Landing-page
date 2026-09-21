import { Link } from 'react-router-dom';
import usePageMeta from '../components/usePageMeta.js';
import PlanCard from '../components/PlanCard.jsx';
import Icon from '../components/Icon.jsx';
import Faq from '../components/Faq.jsx';
import { buildPackages, carePlans, addons } from '../data/pricing.js';

export default function Pricing() {
  usePageMeta(
    'Pricing | Nil Veralu Web Design',
    'Bronze, Silver and Gold monthly website care plans, plus 4, 6 and 8 page website build packages from Nil Veralu Web Design. Additional pages Rs. 999 each.'
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="launch-offer-badge">Limited-Time Special Offer &mdash; 50% OFF Everything</div>
          <h1>Simple, Transparent Pricing</h1>
          <p>
            Choose an ongoing monthly care plan for your existing site, or a one-time package to get a
            brand new website built. All prices in Sri Lankan Rupees (LKR).
          </p>
          <div className="page-hero-callout">Build Your Site for <span>Free</span></div>
          <p className="page-hero-callout-note">with any Bronze, Silver or Gold monthly care plan</p>
        </div>
      </section>

      <section id="build-packages">
        <div className="container">
          <div className="divider-heading">
            <h2>One-Time Website Build Packages</h2>
            <p>Get a brand new, custom-designed website built from scratch. Choose the number of pages that fits your business.</p>
          </div>

          <div className="pricing-grid">
            {buildPackages.map((p) => (
              <PlanCard key={p.key} plan={p} variant="package" />
            ))}
          </div>

          {addons.map((a) => (
            <div className="addon-banner" key={a.title}>
              <div className="addon-icon"><Icon name={a.icon} size={24} /></div>
              <div className="addon-text">
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
              <div className="addon-price">
                <span className="addon-price-original">{a.original}</span>
                <strong>{a.price}</strong>
                <span>{a.unit}</span>
              </div>
            </div>
          ))}

          <div className="pricing-note">
            Website hosting is <strong>not included</strong> in build packages by default. Add standalone
            hosting for Rs. 499/month, or pay a one-off Rs. 2,999 setup fee for free hosting forever, or
            upgrade to a Bronze, Silver or Gold monthly care plan for hosting plus ongoing maintenance and updates.
          </div>
        </div>
      </section>

      <section id="care-plans" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Monthly Care Plans</span>
            <h2>Bronze, Silver &amp; Gold</h2>
            <p>Keep your website online, secure and up to date with an ongoing monthly plan. Cancel or upgrade anytime.</p>
          </div>

          <div className="care-highlight">
            <span className="big">No Charge for Website Development</span>
            <span className="small">Minimum 12 month commitment</span>
          </div>

          <div className="pricing-grid">
            {carePlans.map((p) => (
              <PlanCard key={p.key} plan={p} variant="plan" />
            ))}
          </div>
        </div>
      </section>

      <Faq />

      <section className="cta-banner">
        <div className="container">
          <h2>Not sure which option is right for you?</h2>
          <p>Send us a message with a few details about your business and we'll recommend the best plan or package.</p>
          <Link to="/contact" className="btn btn-primary">Talk to Us</Link>
        </div>
      </section>
    </>
  );
}
