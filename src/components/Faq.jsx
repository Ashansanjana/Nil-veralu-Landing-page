import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { WhatsAppGlyph } from './WhatsAppFloat.jsx';
import { faqs, faqCategories } from '../data/faq.js';
import { WHATSAPP_URL } from '../data/site.js';

// FAQ with category filters and a single-open animated accordion
export default function Faq() {
  const baseId = useId();
  const [cat, setCat] = useState('all');
  const items = cat === 'all' ? faqs : faqs.filter((f) => f.cat === cat);
  const [open, setOpen] = useState(faqs[0].q);

  const pickCategory = (id) => {
    setCat(id);
    const first = id === 'all' ? faqs[0] : faqs.find((f) => f.cat === id);
    setOpen(first.q);
  };

  const count = (id) => (id === 'all' ? faqs.length : faqs.filter((f) => f.cat === id).length);

  return (
    <section className="faq" id="faq">
      <div className="container faq-layout">
        <Reveal className="faq-intro">
          <span className="section-tag">FAQ</span>
          <h2>Frequently asked questions</h2>
          <p>
            Everything you need to know about our care plans, build packages and pricing. Can't find the
            answer you're looking for? We're happy to help.
          </p>

          <div className="faq-help">
            <span className="faq-help-icon"><Icon name="phone" size={22} /></span>
            <h3>Still have questions?</h3>
            <p>Reach out directly or fill in the form and our team will respond as soon as possible.</p>
            <div className="faq-help-actions">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
                <WhatsAppGlyph size={17} /> WhatsApp
              </a>
              <Link to="/contact" className="btn btn-outline">Contact Form</Link>
            </div>
          </div>
        </Reveal>

        <Reveal className="faq-main" delay={100}>
          <div className="faq-filters" role="group" aria-label="Filter questions">
            {faqCategories.map((c) => (
              <button
                key={c.id}
                className={`faq-chip${cat === c.id ? ' active' : ''}`}
                aria-pressed={cat === c.id}
                onClick={() => pickCategory(c.id)}
              >
                {c.label} <span>{count(c.id)}</span>
              </button>
            ))}
          </div>

          <div className="faq-list" key={cat}>
            {items.map((item, i) => {
              const isOpen = open === item.q;
              const qid = `${baseId}-q${i}`;
              const aid = `${baseId}-a${i}`;
              return (
                <div className={`faq-item${isOpen ? ' open' : ''}`} key={item.q}>
                  <h3>
                    <button
                      id={qid}
                      className="faq-q"
                      aria-expanded={isOpen}
                      aria-controls={aid}
                      onClick={() => setOpen(isOpen ? null : item.q)}
                    >
                      <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="faq-q-text">{item.q}</span>
                      <span className="faq-toggle" aria-hidden="true"></span>
                    </button>
                  </h3>
                  <div className="faq-a" id={aid} role="region" aria-labelledby={qid}>
                    <div><p>{item.a}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
