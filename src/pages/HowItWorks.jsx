import { Link } from 'react-router-dom';
import usePageMeta from '../components/usePageMeta.js';
import Icon from '../components/Icon.jsx';
import { steps } from '../data/steps.js';

export default function HowItWorks() {
  usePageMeta(
    'How It Works | Nil Veralu Web Design',
    'Learn the 3 simple steps to getting your business online with Nil Veralu Web Design: buying a domain, buying hosting, and website development.'
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>How It Works</h1>
          <p>New to websites? Here's everything that goes into getting your business online, in 3 simple steps.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="process-steps">
            {steps.map((step, i) => (
              <div className="process-step" key={step.title}>
                <div className="process-head">
                  <div className="process-number">{i + 1}</div>
                  <Icon name={step.icon} size={26} className="process-icon" />
                </div>
                <h3>{step.title}</h3>
                {step.text.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="pricing-note">
            Not sure where to start? <Link to="/contact"><strong>Contact us</strong></Link> and we'll
            guide you through domain, hosting and development.
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>See our monthly care plans and website build packages, or reach out with any questions.</p>
          <Link to="/pricing" className="btn btn-primary">View Pricing</Link>
        </div>
      </section>
    </>
  );
}
