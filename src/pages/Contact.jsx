import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import usePageMeta from '../components/usePageMeta.js';
import Icon from '../components/Icon.jsx';
import { WhatsAppGlyph } from '../components/WhatsAppFloat.jsx';
import { CONTACT_EMAIL, WHATSAPP_URL, WHATSAPP_DISPLAY } from '../data/site.js';
import { carePlans, buildPackages, interestByKey } from '../data/pricing.js';

const emptyForm = { name: '', phone: '', email: '', interest: '', message: '' };

const nextSteps = [
  { title: 'Send us your details', text: 'Tell us about your business and what you need.' },
  { title: 'We get back to you', text: 'We typically respond within 1 business day.' },
  { title: 'Choose the right fit', text: "We'll help you choose the right plan or package for your budget." },
];

export default function Contact() {
  usePageMeta(
    'Contact Us | Nil Veralu Web Design',
    'Get in touch with Nil Veralu Web Design to discuss your website project, care plan or build package.'
  );

  // Pre-select the interest dropdown from ?plan= or ?package=
  const [params] = useSearchParams();
  const preselected = interestByKey[params.get('plan') || params.get('package')] || '';

  const [form, setForm] = useState({ ...emptyForm, interest: preselected });
  const [submitted, setSubmitted] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Front-end only — opens a pre-filled email
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const body = [
      `Name: ${name}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim() || 'N/A'}`,
      `Interested in: ${form.interest || 'N/A'}`,
      '',
      form.message.trim(),
    ].join('\n');

    setSubmitted(true);
    window.location.href =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(`Website Inquiry from ${name}`)}` +
      `&body=${encodeURIComponent(body)}`;
    setForm(emptyForm);
  };

  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container">
          <span className="section-tag tag-dark">Contact Us</span>
          <h1>Let's Talk About Your Website</h1>
          <p>
            Have a question about our Bronze, Silver or Gold care plans, or our 4, 6 and 8 page build
            packages? Send us a message and we'll get back to you.
          </p>
          <div className="hero-chips">
            <span><Icon name="clock" size={16} /> Replies within 1 business day</span>
            <span><Icon name="check" size={16} /> Monday – Saturday, 10 AM – 8 PM</span>
          </div>
        </div>
      </section>

      <section className="contact-quick">
        <div className="container quick-grid">
          <a className="quick-card" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <span className="quick-icon qi-wa"><WhatsAppGlyph size={24} /></span>
            <div>
              <h4>Chat on WhatsApp</h4>
              <p>{WHATSAPP_DISPLAY}</p>
              <span className="quick-link">Start a chat <Icon name="arrow" size={15} /></span>
            </div>
          </a>
          <div className="quick-card">
            <span className="quick-icon qi-time"><Icon name="clock" size={24} /></span>
            <div>
              <h4>Business Hours</h4>
              <p>Monday – Saturday</p>
              <p className="quick-strong">10:00 AM – 8:00 PM</p>
            </div>
          </div>
          <Link className="quick-card" to="/pricing">
            <span className="quick-icon qi-price"><Icon name="coin" size={24} /></span>
            <div>
              <h4>Plans &amp; Packages</h4>
              <p>Care plans from Rs. 999/month</p>
              <span className="quick-link">Compare pricing <Icon name="arrow" size={15} /></span>
            </div>
          </Link>
        </div>
      </section>

      <section className="contact-main">
        <div className="container contact-layout">
          <div className="contact-form-wrap">
            <div className="form-head">
              <span className="form-head-icon"><Icon name="send" size={22} /></span>
              <div>
                <h3>Send Us a Message</h3>
                <p>Fill in the details below and let us know which plan or package you're interested in.</p>
              </div>
            </div>

            <div className={`form-success${submitted ? ' visible' : ''}`}>
              <Icon name="check" size={18} />
              Thank you! Your message has been prepared. We'll get back to you shortly.
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name <em>*</em></label>
                  <input type="text" id="name" name="name" placeholder="Your name" required
                    value={form.name} onChange={update} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="07X XXX XXXX"
                    value={form.phone} onChange={update} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address <em>*</em></label>
                <input type="email" id="email" name="email" placeholder="you@example.com" required
                  value={form.email} onChange={update} />
              </div>

              <div className="form-group">
                <label htmlFor="interest">I'm Interested In</label>
                <select id="interest" name="interest" value={form.interest} onChange={update}>
                  <option value="">Select an option</option>
                  <optgroup label="Monthly Care Plans">
                    {carePlans.map((p) => (
                      <option key={p.key} value={p.interest}>{p.interest.replace(' - ', ' — ')}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Website Build Packages">
                    {buildPackages.map((p) => (
                      <option key={p.key} value={p.interest}>{p.interest.replace(' - ', ' — ')}</option>
                    ))}
                    <option value="Custom - More than 8 pages">
                      Custom — More than 8 pages (Rs. 999/extra page)
                    </option>
                  </optgroup>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message <em>*</em></label>
                <textarea id="message" name="message" required
                  placeholder="Tell us a bit about your business and what you need..."
                  value={form.message} onChange={update}></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg btn-block">
                Send Message <Icon name="send" size={17} />
              </button>
              <p className="form-note"><Icon name="clock" size={14} /> We typically respond within 1 business day.</p>
            </form>
          </div>

          <aside className="contact-aside">
            <div className="next-card">
              <h3>What happens next?</h3>
              <ol className="next-steps">
                {nextSteps.map((s, i) => (
                  <li key={s.title}>
                    <span className="next-num">{i + 1}</span>
                    <div>
                      <strong>{s.title}</strong>
                      <span>{s.text}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="wa-card">
              <span className="wa-card-icon"><WhatsAppGlyph size={26} /></span>
              <h3>Prefer to chat?</h3>
              <p>Reach out directly on WhatsApp and our team will respond as soon as possible.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-block">
                <WhatsAppGlyph size={18} /> {WHATSAPP_DISPLAY}
              </a>
            </div>

            <div className="social-card">
              <span>Follow us</span>
              <div className="social-row">
                <a href="#" aria-label="Facebook">FB</a>
                <a href="#" aria-label="Instagram">IG</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WA</a>
                <a href="#" aria-label="LinkedIn">IN</a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
