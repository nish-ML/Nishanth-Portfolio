import { useEffect, useRef } from 'react';
import { gsap } from '../animations/gsap';

export function useGsapReveal({
  selector = '[data-gsap-reveal]',
  y = 32,
  scale = 0.96,
  opacity = 0,
  duration = 0.8,
  stagger = 0.12,
  ease = 'power3.out',
  start = 'top 80%',
  once = true,
  delay = 0,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const elements = Array.from(node.querySelectorAll(selector));
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        { opacity, y, scale, willChange: 'transform,opacity' },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          stagger,
          delay,
          ease,
          scrollTrigger: {
            trigger: node,
            start,
            once,
            toggleActions: 'play none none reverse',
          },
        },
      );
    }, node);

    return () => ctx.revert();
  }, [selector, y, scale, opacity, duration, stagger, ease, start, once, delay]);

  return ref;
}

export function useGsapDrawLine({
  selector = '.timeline-line',
  duration = 1,
  ease = 'power3.out',
  start = 'top 75%',
  once = true,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const element = node.querySelector(selector);
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          duration,
          ease,
          scrollTrigger: {
            trigger: node,
            start,
            once,
          },
        },
      );
    }, node);

    return () => ctx.revert();
  }, [selector, duration, ease, start, once]);

  return ref;
}
