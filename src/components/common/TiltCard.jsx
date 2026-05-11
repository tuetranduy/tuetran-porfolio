import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TiltCard = ({ 
  children, 
  className = '', 
  tiltStrength = 10,
  glowColor = 'rgba(6, 182, 212, 0.15)',
  ...props 
}) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Check for fine pointer device
  const [hasMousePointer, setHasMousePointer] = useState(false);

  useEffect(() => {
    setHasMousePointer(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  const handleMouseMove = (e) => {
    if (!ref.current || !hasMousePointer) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = ((y - centerY) / centerY) * -tiltStrength;
    const tiltY = ((x - centerX) / centerX) * tiltStrength;
    
    setTilt({ x: tiltX, y: tiltY });
    setGlowPosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className={`relative ${className}`}
      data-cursor="hover"
      {...props}
    >
      {/* Glow effect that follows cursor */}
      {hasMousePointer && (
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          animate={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}, transparent 50%)`,
          }}
          transition={{ duration: 0.2 }}
        />
      )}
      
      {/* Content */}
      <div style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default TiltCard;
