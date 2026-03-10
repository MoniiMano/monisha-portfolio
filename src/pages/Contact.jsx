import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedWrapper from '../components/AnimatedWrapper';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focused, setFocused] = useState({});

  const contactInfo = [
    { icon: HiMail, label: 'Email', value: 'vmoniimano@gmail.com', href: 'mailto:vmoniimano@gmail.com' },
    { icon: HiPhone, label: 'Phone', value: '+91-6374000157', href: 'tel:+916374000157' },
    { icon: HiLocationMarker, label: 'Location', value: 'India', href: '#' },
  ];

  const socialLinks = [
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/monisha-v-267980256', color: 'from-blue-600 to-blue-400' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/MoniiMano', color: 'from-gray-600 to-gray-400' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's discuss your next project or opportunity"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedWrapper direction="left" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Let's work together
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision. Feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-zinc-900/50 rounded-xl border border-gray-800 hover:border-purple-500 transition-all group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                      <info.icon />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`w-14 h-14 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white text-2xl shadow-lg hover:shadow-xl transition-all`}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedWrapper>

          {/* Contact Form */}
          <AnimatedWrapper direction="right" delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <motion.input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocused({ ...focused, name: true })}
                  onBlur={() => setFocused({ ...focused, name: false })}
                  className="w-full px-4 py-4 bg-zinc-900/50 border-2 border-gray-800 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-all"
                  placeholder="Your Name"
                />
                {focused.name && (
                  <motion.div
                    layoutId="input-glow"
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur-xl opacity-50"
                  />
                )}
              </div>

              {/* Email Input */}
              <div className="relative">
                <motion.input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocused({ ...focused, email: true })}
                  onBlur={() => setFocused({ ...focused, email: false })}
                  className="w-full px-4 py-4 bg-zinc-900/50 border-2 border-gray-800 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-all"
                  placeholder="Your Email"
                />
                {focused.email && (
                  <motion.div
                    layoutId="input-glow"
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur-xl opacity-50"
                  />
                )}
              </div>

              {/* Message Input */}
              <div className="relative">
                <motion.textarea
                  required
                  rows="6"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused({ ...focused, message: true })}
                  onBlur={() => setFocused({ ...focused, message: false })}
                  className="w-full px-4 py-4 bg-zinc-900/50 border-2 border-gray-800 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-all resize-none"
                  placeholder="Your Message"
                />
                {focused.message && (
                  <motion.div
                    layoutId="input-glow"
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur-xl opacity-50"
                  />
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(147, 51, 234, 0.6)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
};

export default Contact;
