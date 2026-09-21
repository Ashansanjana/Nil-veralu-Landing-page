import { Link } from 'react-router-dom';
import Icon from '../Icon.jsx';
import Reveal from '../Reveal.jsx';

// "Why Nil Veralu" — bento grid, each benefit illustrated with a small CSS visual
export default function WhyUs() {
  return (
    <section className="why">
      <div className="container">
        <div className="split-header">
          <Reveal className="split-title">
            <span className="section-tag">Why Nil Veralu</span>
            <h2>Everything you need to launch and grow online</h2>
          </Reveal>
          <Reveal className="split-copy" delay={100}>
            <p>
              From your first website build to ongoing monthly maintenance, we keep your online presence
              looking great and running smoothly.
            </p>
            <Link to="/pricing" className="link-arrow">Compare plans <Icon name="arrow" size={18} /></Link>
          </Reveal>
        </div>

        <div className="bento">
          <Reveal className="bento-card bento-ai">
            <div className="bento-text">
              <span className="bento-kicker"><Icon name="sparkles" size={16} /> AI-powered development</span>
              <h3>Better Quality, Lower Cost</h3>
              <p>
                We build with AI-powered development — better quality websites at a lower cost, savings we
                pass straight to you.
              </p>
              <div className="bento-chips">
                <span>Built faster</span><span>You pay less</span><span>Same quality</span>
              </div>
            </div>
            <div className="ai-visual" aria-hidden="true">
              <div className="ai-code">
                <div className="ai-code-bar"><i></i><i></i><i></i></div>
                <p><b className="c1"></b><b className="c2"></b></p>
                <p className="in"><b className="c3"></b><b className="c1 s"></b></p>
                <p className="in"><b className="c2 s"></b><b className="c4"></b></p>
                <p><b className="c4 s"></b><b className="c3"></b></p>
              </div>
              <div className="ai-arrow"><Icon name="sparkles" size={18} /></div>
              <div className="ai-site">
                <b></b>
                <i></i><i className="short"></i>
                <em></em>
              </div>
            </div>
          </Reveal>

          <Reveal className="bento-card" delay={80}>
            <div className="bento-visual dev-visual" aria-hidden="true">
              <div className="dev-laptop"><span></span></div>
              <div className="dev-tablet"><span></span></div>
              <div className="dev-phone"><span></span></div>
            </div>
            <h3>Mobile Responsive</h3>
            <p>Every website looks and works great on phones, tablets and desktops.</p>
          </Reveal>

          <Reveal className="bento-card" delay={0}>
            <div className="bento-visual design-visual" aria-hidden="true">
              <div className="swatches"><i></i><i></i><i></i><i></i></div>
              <span className="type-sample">Aa</span>
            </div>
            <h3>Custom Design</h3>
            <p>Clean, modern designs tailored to your brand — no generic templates.</p>
          </Reveal>

          <Reveal className="bento-card" delay={80}>
            <div className="bento-visual care-visual" aria-hidden="true">
              <div className="care-row"><Icon name="check" size={14} /> Uptime monitoring <b>Online</b></div>
              <div className="care-row"><Icon name="check" size={14} /> Security monitoring <b>Active</b></div>
              <div className="care-row"><Icon name="check" size={14} /> Content updates <b>Monthly</b></div>
            </div>
            <h3>Ongoing Care Plans</h3>
            <p>Bronze, Silver and Gold monthly plans keep your site updated and secure.</p>
          </Reveal>

          <Reveal className="bento-card" delay={160}>
            <div className="bento-visual price-visual" aria-hidden="true">
              <span className="pv-from">Care plans from</span>
              <div className="pv-amount"><strong>Rs. 999</strong><span>/ month</span></div>
              <span className="pv-chip">Priced in LKR</span>
            </div>
            <h3>Affordable Pricing</h3>
            <p>Transparent, LKR-based pricing built for Sri Lankan small businesses.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
