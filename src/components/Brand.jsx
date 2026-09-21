import { Link } from 'react-router-dom';

export default function Brand() {
  return (
    <Link to="/" className="brand">
      <img src="/assets/logo.svg" alt="Nil Veralu Web Design" className="brand-logo" />
      <div className="brand-name">
        <span className="brand-nil">Nil</span> <span className="brand-veralu">Veralu</span>
        <span className="brand-sub">AI Web Design</span>
      </div>
    </Link>
  );
}
