import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations/fade';

const SectionTitle = memo(({ title, subtitle }) => {
  return (
    <motion.div
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-6 rounded-full" />
    </motion.div>
  );
});

SectionTitle.displayName = 'SectionTitle';

export default SectionTitle;
