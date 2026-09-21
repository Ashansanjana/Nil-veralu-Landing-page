import { Link } from 'react-router-dom';
import Icon from '../Icon.jsx';
import Reveal from '../Reveal.jsx';
import { steps } from '../../data/steps.js';
import { WHATSAPP_URL } from '../../data/site.js';

function DomainVisual() {
  return (
    <div className="v-domain">
      <div className="v-search">
        <Icon name="globe" size={16} />
        <span>www.<b>yourbusiness</b>.lk</span>
        <em><Icon name="check" size={12} /> Available</em>
      </div>
      <div className="v-tlds"><span className="on">.lk</span><span>.com</span><span>.net</span></div>
    </div>
  );
}

function HostingVisual() {
  return (
    <div className="v-host">
      {[0, 1].map((n) => (
        <div className="v-server" key={n}>
          <span className="v-leds"><i></i><i></i></span>
          <span className="v-bars"><i></i><i></i></span>
          <span className="v-status"><i></i> Online</span>
        </div>
      ))}
    </div>
  );
}

function BuildVisual() {
  return (
    <div className="v-build">
      <div className="v-build-bar"><i></i><i></i><i></i></div>
      <div className="v-build-body">
        <div className="v-build-hero"><b></b><span></span></div>
        <div className="v-build-cards"><span></span><span></span><span></span></div>
        <div className="v-progress"><span></span></div>
      </div>
    </div>
  );
}

const visuals = [DomainVisual, HostingVisual, BuildVisual];

// "How It Works" — three illustrated step cards linked by arrows
export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-tag">How It Works</span>
          <h2>Online in 3 simple steps</h2>
          <p>From registering your address online to a fully built website, here's what's involved.</p>
        </Reveal>

        <div className="steps">
          {steps.map((s, i) => {
            const Visual = visuals[i];
            return (
              <Reveal className="step-card" key={s.title} delay={i * 120}>
                <div className="step-visual" aria-hidden="true"><Visual /></div>
                <div className="step-body">
                  <div className="step-meta">
                    <span className="step-no">Step {String(i + 1).padStart(2, '0')}</span>
                    <Icon name={s.icon} size={20} className="step-icon" />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text[0]}</p>
                  {s.text[1] && (
                    <div className="step-note"><Icon name="gift" size={16} /> {s.text[1]}</div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="process-cta">
          <div className="process-cta-text">
            <div className="process-cta-icon"><Icon name="phone" size={22} /></div>
            <div>
              <strong>Not sure where to start?</strong>
              <span>Contact us and we'll guide you through domain, hosting and development.</span>
            </div>
          </div>
          <div className="process-cta-actions">
            <Link to="/contact" className="btn btn-primary">Contact Us <Icon name="arrow" size={18} /></Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-dark-outline">
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
