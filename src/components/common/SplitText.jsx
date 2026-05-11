import { useMemo } from 'react';
import { motion } from 'framer-motion';

const SplitText = ({ 
  children, 
  className = '', 
  splitBy = 'char', // 'char' | 'word'
  delay = 0,
  staggerDelay = 0.03,
  animation = 'fadeUp', // 'fadeUp' | 'fadeIn' | 'slideUp'
}) => {
  const text = typeof children === 'string' ? children : '';

  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: '100%' },
      visible: { opacity: 1, y: 0 },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = variants[animation] || variants.fadeUp;

  const elements = useMemo(() => {
    if (splitBy === 'word') {
      return text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            variants={itemVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
          {i < text.split(' ').length - 1 && <span>&nbsp;</span>}
        </span>
      ));
    }

    // Split by character
    return text.split('').map((char, i) => (
      <span key={i} className="inline-block overflow-hidden">
        <motion.span
          variants={itemVariants}
          className="inline-block"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      </span>
    ));
  }, [text, splitBy, itemVariants]);

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {elements}
    </motion.span>
  );
};

export default SplitText;
