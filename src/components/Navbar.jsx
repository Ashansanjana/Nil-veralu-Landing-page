import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Brand from './Brand.jsx';
import { navLinks } from '../data/site.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav container">
        <Brand />
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <Link to="/contact" className="btn btn-primary btn-sm nav-btn">Get Started</Link>
          <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
