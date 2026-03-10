import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { achievementsData, educationData, certificationsData } from '../data/education';
import { scaleIn } from '../animations/scale';
import { staggerContainer } from '../animations/slide';
import { HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';

const Achievements = () => {
  return (
    <section id="achievements" className="min-h-screen py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Achievements & Education"
          subtitle="Academic excellence and professional milestones"
        />

        {/* Achievements Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              variants={scaleIn(index * 0.1)}
              whileHover={{ y: -10, rotateY: 5 }}
              className="relative group"
              style={{ perspective: '1000px' }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500" />
              <div className="relative bg-zinc-900 rounded-2xl p-6 border border-gray-800 group-hover:border-transparent transition-all h-full">
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-sm text-purple-400 mb-2">{achievement.organization}</p>
                <p className="text-sm text-gray-400">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, rotateX: 2 }}
              className="relative group"
              style={{ perspective: '1000px' }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition duration-500" />
              <div className="relative bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 group-hover:border-green-500 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{edu.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-green-400 font-semibold mb-1">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.location}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{edu.period}</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
          <div className="relative bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 group-hover:border-orange-500 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <HiBadgeCheck className="text-4xl text-orange-400" />
              <h3 className="text-2xl font-bold text-white">Professional Certification</h3>
            </div>
            
            {certificationsData.map((cert) => (
              <div key={cert.id}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-orange-400 mb-1">{cert.title}</h4>
                    <p className="text-gray-300">{cert.organization} • {cert.location}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold">
                      {cert.duration}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-zinc-800 text-gray-300 rounded-lg text-sm border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
