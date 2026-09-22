import { Link } from 'react-router-dom';
import usePageMeta from '../components/usePageMeta.js';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import PlanPreview from '../components/PlanPreview.jsx';
import Faq from '../components/Faq.jsx';
import { WHATSAPP_URL } from '../data/site.js';

const heroPoints = ['Free build with any care plan', '100% mobile responsive', 'Custom design, no templates'];

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="mock-browser">
        <div className="mock-bar">
          <i></i><i></i><i></i>
          <span className="mock-url">yourbusiness.lk</span>
        </div>
        <div className="mock-body">
          <div className="mock-nav"><b></b><span></span><span></span><span></span></div>
          <div className="mock-hero">
            <div className="mock-lines"><i></i><i></i><i></i><i></i><em></em></div>
            <div className="mock-img"></div>
          </div>
          <div className="mock-cards"><div></div><div></div><div></div></div>
        </div>
      </div>
      <div className="mock-phone">
        <div className="mock-phone-notch"></div>
        <div className="mock-phone-img"></div>
        <i></i><i></i><i></i>
        <em></em>
      </div>
      <div className="float-card float-a">
        <span className="float-label">Build packages from</span>
        <strong>Rs. 4,999</strong>
        <span className="float-strike">Rs. 9,998</span>
      </div>
      <div className="float-card float-b">
        <Icon name="check" size={16} className="float-check" /> Built with AI, delivered faster
      </div>
    </div>
  );
}

export default function Home() {
  usePageMeta(
    'Nil Veralu Web Design | Affordable Web Design Sri Lanka',
    'Nil Veralu Web Design builds affordable, professional websites for Sri Lankan businesses, with monthly care plans and build packages.'
  );

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Link to="/pricing" className="hero-pill">
              <span className="hero-pill-tag">50% OFF</span>
              Build your site FREE with any care plan
              <Icon name="arrow" size={15} />
            </Link>
            <h1>
              Beautiful websites, <span className="accent">built for Sri Lankan businesses using AI</span>
            </h1>
            <p className="hero-lede">
              Affordable, professional websites for small and growing businesses — with monthly care plans
              that keep your site fast, secure and up to date. We're the first in Sri Lanka to pass
              AI-driven savings directly to our customers.
            </p>
            <div className="hero-actions">
              <Link to="/pricing" className="btn btn-primary btn-lg">View Pricing <Icon name="arrow" size={18} /></Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">
                <Icon name="phone" size={18} /> Chat on WhatsApp
              </a>
            </div>
            <ul className="hero-points">
              {heroPoints.map((p) => (
                <li key={p}><Icon name="check" size={16} /> {p}</li>
              ))}
            </ul>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* ---------- Stats strip ---------- */}
      <section className="stats-strip">
        <div className="container">
          <div className="stats-card">
            <div><strong>Rs. 999</strong><span>Starting monthly care plan</span></div>
            <div><strong>4–8+</strong><span>Page website packages</span></div>
            <div><strong>100%</strong><span>Mobile responsive builds</span></div>
            <div><strong>50%</strong><span>Off everything, limited time</span></div>
          </div>
        </div>
      </section>

      {/* ---------- Pricing preview ---------- */}
      <section className="pricing-preview">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-tag">Pricing</span>
            <h2>Simple, transparent pricing</h2>
            <p>All prices in Sri Lankan Rupees. Limited-time 50% off on every plan and package.</p>
          </Reveal>
          <PlanPreview />
        </div>
      </section>

      {/* ---------- Why Nil Veralu: AI savings + comparison ---------- */}
      <section className="value">
        <div className="container value-grid">
          <Reveal className="value-copy">
            <span className="section-tag tag-dark">Why Pay More?</span>
            <h2>AI-powered efficiency. <span className="accent-text">Real savings for you.</span></h2>
            <p>
              We use modern AI development tools to build faster — so you pay less without compromising on
              quality. Same quality, without the traditional agency price tag.
            </p>
            <Link to="/pricing" className="btn btn-primary">See what you'll pay <Icon name="arrow" size={18} /></Link>
          </Reveal>

          <Reveal className="compare" delay={120}>
            <div className="compare-row compare-them">
              <div>
                <span className="compare-label">Traditional Agency</span>
                <p>Typical starting cost for a small business website in Sri Lanka</p>
              </div>
              <div className="compare-amt">Rs. 30,000+</div>
            </div>
            <div className="compare-bar"><span style={{ width: '100%' }}></span></div>

            <div className="compare-row compare-us">
              <div>
                <span className="compare-label">Nil Veralu Web Design <em>AI-Powered</em></span>
                <p>Same quality, built faster with AI — savings passed straight to you</p>
              </div>
              <div className="compare-amt">Rs. 4,999</div>
            </div>
            <div className="compare-bar us"><span style={{ width: '17%' }}></span></div>

            <div className="compare-save">
              <Icon name="coin" size={20} /> Save <strong>over Rs. 25,000</strong> on your first website
            </div>
          </Reveal>
        </div>
      </section>

      <Faq />

      {/* ---------- CTA ---------- */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-card">
            <div>
              <h2>Ready to bring your business online?</h2>
              <p>Tell us about your project and we'll help you choose the right plan or package for your budget.</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Get in Touch <Icon name="arrow" size={18} /></Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
