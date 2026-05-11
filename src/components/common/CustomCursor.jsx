import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [hasMousePointer, setHasMousePointer] = useState(false);
  
  const cursorOuterRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const hasPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setHasMousePointer(hasPointer);
  }, []);

  useEffect(() => {
    if (!hasMousePointer) return;

    let animationId;
    
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      cursorOuterRef.current.x = lerp(cursorOuterRef.current.x, position.x, 0.12);
      cursorOuterRef.current.y = lerp(cursorOuterRef.current.y, position.y, 0.12);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [position, hasMousePointer]);

  useEffect(() => {
    if (!hasMousePointer) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const onMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="hover"]');
      setIsHovering(!!isInteractive);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [hasMousePointer]);

  if (!hasMousePointer) return null;

  return (
    <>
      {/* Inner dot - follows instantly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isClicking ? 0.8 : isHovering ? 0.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          x: { type: 'tween', duration: 0 },
          y: { type: 'tween', duration: 0 },
          scale: { type: 'spring', stiffness: 300, damping: 20 },
          opacity: { duration: 0.2 },
        }}
      >
        <div 
          className="w-2 h-2 rounded-full bg-cyan-400"
          style={{
            boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)',
          }}
        />
      </motion.div>
      
      {/* Outer ring - follows with delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isClicking ? 0.9 : isHovering ? 1.4 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          x: { type: 'spring', stiffness: 100, damping: 20, mass: 0.5 },
          y: { type: 'spring', stiffness: 100, damping: 20, mass: 0.5 },
          scale: { type: 'spring', stiffness: 200, damping: 15 },
          opacity: { duration: 0.2 },
        }}
      >
        <div 
          className={`w-10 h-10 rounded-full border transition-colors duration-200 ${
            isHovering 
              ? 'border-cyan-400 bg-cyan-400/10' 
              : 'border-slate-400/50'
          }`}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
