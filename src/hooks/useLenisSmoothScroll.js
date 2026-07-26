import { useEffect } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from '../animations/gsap';

export function useLenisSmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.35,
      wheelMultiplier: 1.1,
      normalizeWheel: true,
    });

    const updateScrollTrigger = () => ScrollTrigger.update();
    const resizeHandler = () => ScrollTrigger.refresh();

    lenis.on('scroll', updateScrollTrigger);
    window.addEventListener('resize', resizeHandler);

    let frame = 0;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resizeHandler);
      lenis.off('scroll', updateScrollTrigger);
      lenis.destroy();
      ScrollTrigger.refresh();
    };
  }, []);
}
