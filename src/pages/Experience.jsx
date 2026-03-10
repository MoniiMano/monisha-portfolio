import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { experienceData } from '../data/experience';
import { HiCheckCircle, HiBriefcase } from 'react-icons/hi';

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey and achievements"
        />

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 transform -translate-x-1/2" />

          {experienceData.map((exp, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-16 md:mb-24 ${isLeft ? 'md:pr-1/2' : 'md:pl-1/2'}`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="hidden md:block absolute left-1/2 top-8 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transform -translate-x-1/2 shadow-lg shadow-purple-500/50 z-10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-ping opacity-75" />
                </motion.div>

                {/* Content Card */}
                <div className={`md:w-[calc(50%-3rem)] ${isLeft ? 'md:ml-0' : 'md:ml-auto'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative group"
                    style={{ perspective: '1000px' }}
                  >
                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${isLeft ? 'from-purple-600 to-pink-600' : 'from-cyan-600 to-blue-600'} rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition duration-500`} />
                    
                    {/* Card */}
                    <div className="relative bg-zinc-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 group-hover:border-transparent transition-all shadow-2xl">
                      {/* Company Icon */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${isLeft ? 'from-purple-600 to-pink-600' : 'from-cyan-600 to-blue-600'} mb-4 shadow-lg`}>
                        <HiBriefcase className="text-3xl text-white" />
                      </div>

                      {/* Period Badge */}
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${isLeft ? 'from-purple-600 to-pink-600' : 'from-cyan-600 to-blue-600'} rounded-full text-sm font-semibold text-white mb-4 ml-4 shadow-lg`}>
                        {exp.period}
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.role}
                      </h3>
                      <h4 className={`text-xl font-semibold mb-2 bg-gradient-to-r ${isLeft ? 'from-purple-400 to-pink-400' : 'from-cyan-400 to-blue-400'} bg-clip-text text-transparent`}>
                        {exp.company}
                      </h4>
                      <p className="text-gray-400 text-sm mb-6">📍 {exp.location}</p>

                      {/* Responsibilities */}
                      <ul className="space-y-3 mb-6">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3 text-gray-400"
                          >
                            <HiCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                            <span className="text-sm leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className={`px-3 py-1 bg-gradient-to-r ${isLeft ? 'from-purple-500/20 to-pink-500/20' : 'from-cyan-500/20 to-blue-500/20'} text-gray-300 rounded-lg text-xs font-semibold border border-gray-700 hover:border-purple-500 transition-all`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Arrow Pointer for Desktop */}
                      <div className={`hidden md:block absolute top-8 ${isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} w-8 h-8`}>
                        <div className={`w-0 h-0 border-t-8 border-b-8 border-transparent ${isLeft ? 'border-l-8 border-l-zinc-900' : 'border-r-8 border-r-zinc-900'}`} />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
