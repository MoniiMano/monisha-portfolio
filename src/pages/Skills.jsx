import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { skillsData } from '../data/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = {
    frontend: {
      title: 'Frontend Development',
      skills: skillsData.frontend,
      gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
      icon: '⚛️'
    },
    backend: {
      title: 'Backend Development',
      skills: skillsData.backend,
      gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
      icon: '⚙️'
    },
    database: {
      title: 'Database & Storage',
      skills: skillsData.database,
      gradient: 'from-emerald-600 via-green-600 to-teal-600',
      icon: '🗄️'
    },
    tools: {
      title: 'Tools & DevOps',
      skills: skillsData.tools,
      gradient: 'from-orange-600 via-amber-600 to-yellow-600',
      icon: '🛠️'
    }
  };

  return (
    <section id="skills" className="relative py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Technical Expertise"
          subtitle="Mastering modern technologies to build exceptional digital experiences"
        />

        {/* Category Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap gap-3 p-2 bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800/50">
            {Object.entries(categories).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {activeCategory === key && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 bg-gradient-to-r ${cat.gradient} rounded-xl`}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-xl">{cat.icon}</span>
                  <span className="hidden sm:inline">{cat.title}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          {/* Category Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${categories[activeCategory].gradient} rounded-2xl shadow-2xl mb-4`}
            >
              <span className="text-4xl">{categories[activeCategory].icon}</span>
              <h3 className="text-2xl font-bold text-white">{categories[activeCategory].title}</h3>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-6 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300 shadow-xl">
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${categories[activeCategory].gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                    {/* Icon */}
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    
                    {/* Name */}
                    <h4 className="text-white font-semibold text-sm leading-tight">
                      {skill.name}
                    </h4>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${categories[activeCategory].gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 text-center"
        >
          <h4 className="text-xl font-semibold text-zinc-400 mb-8">
            Additional Technologies & Tools
          </h4>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {['Redux Toolkit', 'TypeScript', 'Socket.IO', 'WebRTC', 'Razorpay', 'Docker', 'Kubernetes', 'CI/CD', 'RBAC', 'REST API', 'AI/ML Integration', 'SEO', 'Agile', 'GitLab', 'Canva', 'Postman'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-zinc-900/80 backdrop-blur-sm text-zinc-300 rounded-lg text-sm font-medium border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-800/80 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
