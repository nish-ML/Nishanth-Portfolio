import { motion, useAnimation, animate } from 'framer-motion';
import { useEffect, useRef, useCallback } from 'react';

const DOT_COUNT = 9;
const WAVE_DURATION = 1200;

function Loader({ onComplete }) {
  const dotsRef = useRef([]);
  const phaseRef = useRef('wave');
  const sphereControls = useAnimation();

  const runMergeAndExpand = useCallback(async () => {
    phaseRef.current = 'merge';

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const cx = vw / 2;
    const cy = vh / 2;

    const mergePromises = dotsRef.current.map((el) => {
      if (!el) return Promise.resolve();
      const rect = el.getBoundingClientRect();
      const elCx = rect.left + rect.width / 2;
      const elCy = rect.top + rect.height / 2;

      return new Promise((resolve) => {
        animate(
          el,
          {
            x: cx - elCx,
            y: cy - elCy,
            scale: 2.2,
            opacity: 0,
            boxShadow: '0 0 0 0 rgba(255, 213, 79, 0)',
          },
          {
            duration: 0.35,
            ease: [0.32, 0, 0.67, 1],
            onComplete: resolve,
          }
        );
      });
    });

    await Promise.all(mergePromises);

    await sphereControls.start({
      scale: [0, 1.25, 1],
      opacity: 1,
      transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
    });

    await sphereControls.start({
      scale: [1, 1.12, 1],
      transition: { duration: 0.12, ease: 'easeInOut' },
    });

    await sphereControls.start({
      scale: 250,
      opacity: 0,
      transition: {
        duration: 0.55,
        ease: [0.76, 0, 0.24, 1],
      },
    });

    onComplete?.();
  }, [onComplete, sphereControls]);

  useEffect(() => {
    let raf;
    const startTime = performance.now();

    const tick = (now) => {
      if (phaseRef.current !== 'wave') return;

      const elapsed = now - startTime;
      if (elapsed >= WAVE_DURATION) {
        runMergeAndExpand();
        return;
      }

      const progress = elapsed / WAVE_DURATION;
      const wavePos = ((progress * 2.5) % 1) * (DOT_COUNT + 8) - 4;

      dotsRef.current.forEach((el, i) => {
        if (!el) return;
        const dist = Math.abs(i - wavePos);
        const influence = Math.max(0, 1 - dist / 2.5);
        const ease = influence * influence * (3 - 2 * influence);

        el.style.transform = `translateY(${-ease * 18}px) scale(${1 + ease * 1.6})`;
        el.style.opacity = String(0.2 + ease * 0.8);
        el.style.boxShadow =
          ease > 0.05
            ? `0 0 ${28 * ease}px ${14 * ease}px rgba(255, 213, 79, ${0.7 * ease})`
            : 'none';
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [runMergeAndExpand]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ backgroundColor: '#FFFDF7' }}
    >
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
        {Array.from({ length: DOT_COUNT }, (_, i) => (
          <div
            key={i}
            ref={(el) => (dotsRef.current[i] = el)}
            className="rounded-full"
            style={{
              width: 8,
              height: 8,
              backgroundColor: '#FFD54F',
              opacity: 0.2,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>

      <motion.div
        animate={sphereControls}
        initial={{ scale: 0, opacity: 0 }}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 48,
          height: 48,
          background:
            'radial-gradient(circle at 35% 35%, #FFE082, #FFD54F 40%, #FFC107 80%, rgba(255, 193, 7, 0.3) 100%)',
          boxShadow:
            '0 0 80px 40px rgba(255, 213, 79, 0.45), 0 0 160px 80px rgba(255, 213, 79, 0.15)',
        }}
      />
    </div>
  );
}

export default Loader;
