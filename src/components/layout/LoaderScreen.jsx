import { useEffect, useState, useRef } from 'react';
import Loader from './Loader';

function LoaderScreen({ onComplete }) {
  const [fading, setFading] = useState(false);
  const [visible, setVisible] = useState(true);
  const triggeredRef = useRef(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    let fadeCleanup;

    const timer = setTimeout(() => {
      setFading(true);
      fadeCleanup = setTimeout(() => {
        setVisible(false);
        if (!triggeredRef.current) {
          triggeredRef.current = true;
          onComplete?.();
        }
      }, 500);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeCleanup);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200]"
      style={{
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      <Loader onComplete={() => {}} />
    </div>
  );
}

export default LoaderScreen;
