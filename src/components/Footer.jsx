import React, { memo } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = memo(() => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/MoniiMano', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/monisha-v-267980256', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:vmoniimano@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 mb-4 md:mb-0"
          >
             2026 MONISHA V. All rights reserved.
          </motion.div>

          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, color: '#9333ea' }}
                className="text-gray-400 hover:text-purple-500 transition-colors text-2xl"
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
