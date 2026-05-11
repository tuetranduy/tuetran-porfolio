import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ value, duration = 2, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  // Extract numeric part from value (e.g., "8+" -> 8)
  const numericValue = parseInt(value.toString().replace(/\D/g, ''), 10) || 0;
  const textSuffix = value.toString().replace(/[0-9]/g, '') || suffix;

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Ease out cubic
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutCubic * numericValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, numericValue, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      className="counter"
    >
      {prefix}{count}{textSuffix}
    </motion.span>
  );
};

export default Counter;
