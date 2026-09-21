import { useLayoutEffect, useRef, useState } from 'react';

// Fades an element up when it scrolls into view. Content is visible by default: it is only hidden
// when it starts below the fold and IntersectionObserver is available, so it can never get stuck hidden.
export default function Reveal({ className = '', delay = 0, children }) {
  const ref = useRef(null);
  const [pending, setPending] = useState(false);
  const [animate, setAnimate] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (el.getBoundingClientRect().top < window.innerHeight) return undefined;

    setPending(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPending(false);
          setAnimate(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${pending ? ' pending' : ''}${animate ? ' in' : ''} ${className}`}
      style={{ '--d': `${delay}ms` }}
    >
      {children}
    </div>
  );
}
