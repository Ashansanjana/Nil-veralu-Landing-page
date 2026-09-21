import { Link } from 'react-router-dom';
import Brand from './Brand.jsx';
import Icon from './Icon.jsx';
import { WhatsAppGlyph } from './WhatsAppFloat.jsx';
import { WHATSAPP_URL, WHATSAPP_DISPLAY, navLinks } from '../data/site.js';

const packages = [
  { to: '/pricing#care-plans', label: 'Bronze / Silver / Gold', price: 'from Rs. 999/month' },
  { to: '/pricing#build-packages', label: '4 / 6 / 8 Page Sites', price: 'from Rs. 4,999' },
  { to: '/pricing#build-packages', label: 'Additional Pages', price: 'Rs. 999 per page' },
  { to: '/pricing#build-packages', label: 'Hosting Add-on', price: 'Rs. 499/month' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand />
            <p>Affordable website design and monthly care plans for businesses across Sri Lanka.</p>
            <span className="footer-offer">50% OFF everything — limited time</span>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Packages</h4>
            <ul className="footer-packages">
              {packages.map((p) => (
                <li key={p.label}>
                  <Link to={p.to}>{p.label}</Link>
                  <span>{p.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul className="footer-contact">
              <li>
                <span className="fc-icon"><WhatsAppGlyph size={16} /></span>
                <div>
                  <small>WhatsApp</small>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a>
                </div>
              </li>
              <li>
                <span className="fc-icon"><Icon name="clock" size={16} /></span>
                <div>
                  <small>Business Hours</small>
                  <span>Mon – Sat, 10:00 AM – 8:00 PM</span>
                </div>
              </li>
              <li>
                <span className="fc-icon"><Icon name="mail" size={16} /></span>
                <div>
                  <small>Message us</small>
                  <Link to="/contact">Contact Form</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Nil Veralu Web Design. All rights reserved.</span>
          <span>Prices listed in Sri Lankan Rupees (LKR)</span>
          <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top <Icon name="arrowUp" size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
