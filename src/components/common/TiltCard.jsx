import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const springConfig = { stiffness: 300, damping: 25, mass: 0.5 };

function TiltCard({ children, className = '', style, ...props }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      whileHover={{
        scale: 1.03,
        y: -12,
        boxShadow: '0 25px 60px -12px rgba(255, 179, 0, 0.22), 0 8px 20px -6px rgba(255, 179, 0, 0.08), 0 0 0 1px rgba(255, 193, 7, 0.5)',
        borderColor: 'rgba(255, 193, 7, 0.5)',
      }}
      whileTap={{ scale: 0.98, y: -2 }}
      transition={{
        scale: { type: 'spring', stiffness: 400, damping: 25 },
        y: { type: 'spring', stiffness: 400, damping: 25 },
        boxShadow: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
        borderColor: { duration: 0.3 },
      }}
      className={`${className} cursor-pointer group`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default TiltCard;
