import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import WhatsAppFloat from './WhatsAppFloat.jsx';

// Scroll to top on page change, or to the #hash section (e.g. /pricing#care-plans)
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
}

export default function Layout() {
  const { pathname } = useLocation();
  useScrollOnNavigate();

  return (
    <>
      {pathname === '/' && (
        <div className="announcement-bar">
          <div className="container">
            Limited-Time Special Offer &mdash; <strong>50% OFF Everything</strong>
          </div>
        </div>
      )}
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
