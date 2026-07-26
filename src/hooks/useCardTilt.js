import { useEffect, useRef, useCallback } from 'react';

export function useCardTilt(options = {}) {
  const {
    maxRotate = 8,
    scale = 1.03,
    lift = 12,
    perspective = 1000,
    pressScale = 0.98,
    transitionMs = 300,
    glowColor = 'rgba(255, 179, 0, 0.18)',
    borderColor = 'rgba(255, 193, 7, 0.5)',
    shadowColor = 'rgba(255, 179, 0, 0.22)',
  } = options;

  const ref = useRef(null);
  const isHovered = useRef(false);
  const rafId = useRef(null);

  const smoothStyle = useCallback(
    (overrides) => {
      const el = ref.current;
      if (!el) return;
      el.style.transition = `transform ${transitionMs}ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow ${transitionMs}ms cubic-bezier(0.23, 1, 0.32, 1), border-color ${transitionMs}ms ease`;
      Object.assign(el.style, overrides);
    },
    [transitionMs]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!ref.current || !isHovered.current) return;

      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * maxRotate;
        const rotateX = ((centerY - y) / centerY) * maxRotate;

        el.style.transition = 'none';
        el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-${lift}px) scale(${scale})`;
        el.style.boxShadow = `0 25px 60px -12px ${shadowColor}, 0 8px 20px -6px rgba(255, 179, 0, 0.08), 0 0 0 1px ${borderColor}`;
        el.style.borderColor = borderColor;

        const glow = el.querySelector('[data-card-glow]');
        if (glow) {
          const glowX = (x / rect.width) * 100;
          const glowY = (y / rect.height) * 100;
          glow.style.opacity = '1';
          glow.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, ${glowColor}, transparent 70%)`;
        }
      });
    },
    [maxRotate, scale, lift, perspective, glowColor, borderColor, shadowColor]
  );

  const handleMouseEnter = useCallback(() => {
    if (!ref.current) return;
    isHovered.current = true;
    smoothStyle({ cursor: 'pointer' });
  }, [smoothStyle]);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    isHovered.current = false;
    if (rafId.current) cancelAnimationFrame(rafId.current);

    const el = ref.current;
    el.style.transition = `transform ${transitionMs}ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow ${transitionMs}ms cubic-bezier(0.23, 1, 0.32, 1), border-color ${transitionMs}ms ease`;
    el.style.transform = '';
    el.style.boxShadow = '';
    el.style.borderColor = '';

    const glow = el.querySelector('[data-card-glow]');
    if (glow) {
      glow.style.transition = `opacity ${transitionMs}ms cubic-bezier(0.23, 1, 0.32, 1)`;
      glow.style.opacity = '0';
    }
  }, [transitionMs]);

  const handleMouseDown = useCallback(() => {
    if (!ref.current || !isHovered.current) return;
    const el = ref.current;
    el.style.transition = 'transform 100ms cubic-bezier(0.23, 1, 0.32, 1)';
    el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) translateY(-2px) scale(${pressScale})`;
  }, [perspective, pressScale]);

  const handleMouseUp = useCallback(() => {
    if (!ref.current || !isHovered.current) return;
    smoothStyle({});
  }, [smoothStyle]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('mousedown', handleMouseDown);
    el.addEventListener('mouseup', handleMouseUp);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mousedown', handleMouseDown);
      el.removeEventListener('mouseup', handleMouseUp);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp]);

  return ref;
}
