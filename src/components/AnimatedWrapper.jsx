import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations/fade';

const AnimatedWrapper = memo(({ children, direction = 'up', delay = 0, className = '' }) => {
  return (
    <motion.div
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

AnimatedWrapper.displayName = 'AnimatedWrapper';

export default AnimatedWrapper;
