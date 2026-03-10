import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiMail, HiArrowRight, HiCode, HiLightningBolt, HiSparkles } from 'react-icons/hi';
import { fadeIn } from '../animations/fade';
import { slideIn } from '../animations/slide';

const Home = () => {
  const techStack = [
    { name: 'React.js', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
    { name: 'Next.js', icon: '▲', color: 'from-purple-500 to-pink-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-emerald-500' },
    { name: 'MongoDB', icon: '🍃', color: 'from-emerald-500 to-teal-500' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-indigo-500' },
    { name: 'Docker', icon: '🐳', color: 'from-cyan-500 to-blue-600' },
  ];

  const highlights = [
    { value: '2+', label: 'Years', icon: '⏱️' },
    { value: '10+', label: 'Projects', icon: '🚀' },
    { value: '6', label: 'Team Size', icon: '👥' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Greeting Badge */}
            <motion.div
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-full"
            >
              <HiSparkles className="text-yellow-400" />
              <span className="text-zinc-300 text-sm font-medium">Welcome to my portfolio</span>
            </motion.div>

            {/* Name */}
            <motion.div
              variants={slideIn('up', 0.3)}
              initial="hidden"
              animate="show"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                  MONISHA V
                </span>
              </h1>
            </motion.div>

            {/* Role with Icon */}
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              className="flex items-center gap-3"
            >
              <HiCode className="text-3xl text-purple-400" />
              <h2 className="text-2xl md:text-3xl text-zinc-300 font-light">
                Full Stack Web Developer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              animate="show"
              className="text-zinc-400 text-lg leading-relaxed max-w-xl"
            >
              Specializing in building{' '}
              <span className="text-purple-400 font-semibold">AI-integrated EdTech platforms</span>{' '}
              with <span className="text-cyan-400 font-semibold">2+ years</span> of professional experience. 
              Leading teams and delivering scalable solutions using modern web technologies.
            </motion.p>

            {/* Quick Highlights */}
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              animate="show"
              className="flex gap-6"
            >
              {highlights.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-1">{item.icon}</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {item.value}
                  </div>
                  <div className="text-xs text-zinc-500">{item.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
              >
                View My Work
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="mailto:vmoniimano@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-zinc-900 border-2 border-zinc-800 text-white rounded-xl font-semibold hover:border-cyan-500 transition-all flex items-center gap-2"
              >
                <HiMail />
                Get in Touch
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Creative Visual Elements */}
          <div className="relative">
            {/* Floating Tech Stack Cards */}
            <div className="relative h-[600px]">
              {/* Center Circle */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <div className="relative">
                  {/* Rotating Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-48 h-48 rounded-full border-2 border-dashed border-purple-500/30"
                  />
                  
                  {/* Center Avatar */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 flex items-center justify-center shadow-2xl">
                      <span className="text-5xl font-bold text-white">MV</span>
                    </div>
                  </div>

                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 blur-2xl opacity-30 animate-pulse" />
                </div>
              </motion.div>

              {/* Orbiting Tech Cards */}
              {techStack.map((tech, index) => {
                const angle = (index * 360) / techStack.length;
                const radius = 200;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      x: x,
                      y: y
                    }}
                    transition={{ 
                      delay: 0.5 + index * 0.1,
                      type: 'spring',
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      zIndex: 50
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  >
                    <div className="relative group">
                      {/* Card */}
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-xl border-4 border-black`}>
                        <span className="text-3xl group-hover:scale-110 transition-transform">
                          {tech.icon}
                        </span>
                      </div>

                      {/* Glow */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} blur-xl opacity-0 group-hover:opacity-60 transition-opacity`} />

                      {/* Label */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className={`px-3 py-1 bg-gradient-to-r ${tech.color} rounded-lg shadow-lg`}>
                          <span className="text-white text-xs font-bold">{tech.name}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Decorative Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl shadow-xl flex items-center justify-center"
              >
                <HiLightningBolt className="text-3xl text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-xl flex items-center justify-center"
              >
                <HiCode className="text-3xl text-white" />
              </motion.div>

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="absolute w-2 h-2 bg-purple-500 rounded-full"
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                />
              ))}
            </div>

            {/* Download Resume Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-64"
            >
              <a
                href="/Monisha_V_Resume.pdf"
                download="Monisha_V_Resume.pdf"
                className="block group"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-zinc-900 rounded-2xl p-4 border border-zinc-800 hover:border-transparent transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <HiDownload className="text-2xl text-purple-400" />
                        <div>
                          <div className="text-white font-semibold text-sm">Resume</div>
                          <div className="text-zinc-500 text-xs">Download PDF</div>
                        </div>
                      </div>
                      <HiArrowRight className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-zinc-500"
          >
            <span className="text-xs">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
