import { useEffect, useRef, useState } from 'react';

function isInteractiveTarget(target) {
  if (!(target instanceof HTMLElement)) return false;
  return Boolean(
    target.closest('a, button, input, textarea, select, [role="button"]') ||
      target.tagName === 'A' ||
      target.tagName === 'BUTTON',
  );
}

function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, scale: 1, visible: false, active: false });

  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const scaleRef = useRef(1);
  const currentScaleRef = useRef(1);
  const activeRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateMobileState = () => setIsMobile(mediaQuery.matches);
    updateMobileState();

    if (mediaQuery.matches) return undefined;

    let frameId = 0;

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.16;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.16;
      currentScaleRef.current += (scaleRef.current - currentScaleRef.current) * 0.2;

      setCursor({
        x: currentRef.current.x,
        y: currentRef.current.y,
        scale: currentScaleRef.current,
        visible: true,
        active: activeRef.current,
      });

      frameId = window.requestAnimationFrame(animate);
    };

    const onMouseMove = (event) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
    };

    const onMouseLeave = () => {
      setCursor((prev) => ({ ...prev, visible: false }));
    };

    const onMouseEnter = () => {
      setCursor((prev) => ({ ...prev, visible: true }));
    };

    const onMouseOver = (event) => {
      const interactive = isInteractiveTarget(event.target);
      activeRef.current = interactive;
      scaleRef.current = interactive ? 1.35 : 1;
    };

    const onMouseOut = (event) => {
      if (event.relatedTarget && event.relatedTarget instanceof HTMLElement) {
        const relatedTarget = event.relatedTarget;
        const stillInsideInteractive = relatedTarget.closest('a, button, input, textarea, select, [role="button"]');
        if (stillInsideInteractive) return;
      }

      activeRef.current = false;
      scaleRef.current = 1;
    };

    frameId = window.requestAnimationFrame(animate);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-[140] ${cursor.visible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`,
        willChange: 'transform',
      }}
    >
      <div className="relative flex h-0 w-0 items-center justify-center">
        <div
          className={`absolute h-14 w-14 rounded-full border border-cyan-300/70 bg-cyan-400/10 shadow-[0_0_45px_rgba(34,211,238,0.35)] backdrop-blur-sm transition-transform duration-200 ${cursor.active ? 'scale-125' : 'scale-100'}`}
          style={{ transform: `scale(${cursor.scale})` }}
        />
        <div className="absolute h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_20px_rgba(255,255,255,0.9)]" />
        <div className="absolute h-20 w-20 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
    </div>
  );
}

export default CustomCursor;
