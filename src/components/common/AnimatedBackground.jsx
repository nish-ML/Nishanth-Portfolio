import { useEffect, useMemo, useState } from 'react';

function AnimatedBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId = 0;
    const handleMove = (event) => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        setMouse({ x: event.clientX, y: event.clientY });
        frameId = 0;
      });
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  const glowStyle = useMemo(
    () => ({
      background: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(34,211,238,0.12), transparent 28%)`,
    }),
    [mouse.x, mouse.y],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#05070b]" aria-hidden="true">
      <div className="absolute inset-0 opacity-70" style={glowStyle} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.16),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(56,189,248,0.14),transparent_24%)]" />
      <div className="absolute inset-0 animate-[spin_22s_linear_infinite] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.03),rgba(34,211,238,0.09),rgba(192,132,252,0.07),rgba(255,255,255,0.03))] opacity-60" />
      <div className="absolute left-[10%] top-[15%] h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="absolute bottom-[10%] right-[8%] h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[130px]" />
      <div className="absolute inset-0 opacity-[0.045]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }} />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)', transform: 'skewX(-15deg)' }} />
    </div>
  );
}

export default AnimatedBackground;
