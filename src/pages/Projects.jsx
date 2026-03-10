import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { projectsData } from '../data/projects';
import { HiExternalLink, HiCode, HiStar, HiArrowRight, HiLightningBolt } from 'react-icons/hi';

// Memoized Project Card Component
const ProjectCard = React.memo(({ project, index, isActive, onMouseEnter, onMouseLeave }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group h-[500px]"
      style={{ perspective: '1500px' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isActive ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative h-full bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 border border-zinc-700 rounded-3xl overflow-hidden">
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
              
              {/* Floating Badges */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold text-cyan-400 border border-cyan-500/30">
                  {project.category}
                </span>
                {project.featured && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-white flex items-center gap-1 shadow-lg"
                  >
                    <HiStar />
                    TOP
                  </motion.div>
                )}
              </div>

              {/* Hover Indicator */}
              <motion.div
                className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20"
                animate={{ rotate: isActive ? 180 : 0 }}
              >
                <HiArrowRight className="text-white text-xl" />
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                {project.description}
              </p>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-zinc-800/80 text-gray-300 rounded-lg text-xs font-medium border border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 text-purple-400 text-xs font-bold">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Flip Hint */}
              <div className="mt-6 text-center">
                <p className="text-gray-500 text-xs font-medium flex items-center justify-center gap-2">
                  <HiLightningBolt className="text-purple-400" />
                  Hover to explore
                </p>
              </div>
            </div>

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 blur-xl opacity-50" />
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="relative h-full bg-gradient-to-br from-purple-900/90 via-pink-900/90 to-cyan-900/90 backdrop-blur-xl border border-purple-500/50 rounded-3xl p-6 flex flex-col">
            {/* Back Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center">
                  <HiCode className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Project Details</h4>
                  <p className="text-purple-200 text-xs">{project.category}</p>
                </div>
              </div>
            </div>

            {/* Full Description */}
            <div className="flex-1 mb-6">
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* All Technologies */}
              <div>
                <h5 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full" />
                  Tech Stack
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="px-3 py-1.5 bg-white/10 backdrop-blur-md text-white rounded-lg text-xs font-medium border border-white/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-white text-purple-900 rounded-xl font-bold text-sm shadow-lg hover:shadow-white/20 transition-all group/btn"
              >
                <HiExternalLink className="text-lg" />
                <span>Launch Project</span>
                <HiArrowRight className="text-base group-hover/btn:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-xl font-semibold text-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                <HiCode className="text-lg" />
                <span>View Source Code</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  
  const categories = useMemo(() => ['All', 'EdTech', 'AI/ML', 'Full Stack', 'Web Development'], []);

  const filteredProjects = useMemo(() => 
    selectedCategory === 'All' 
      ? projectsData 
      : projectsData.filter(p => p.category === selectedCategory),
    [selectedCategory]
  );

  const handleMouseEnter = useCallback((projectId) => {
    setActiveProject(projectId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveProject(null);
  }, []);

  return (
    <section id="projects" className="min-h-screen py-20 bg-black relative overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,0,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,200,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,0,150,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Featured Projects"
          subtitle="Interactive showcase of innovative solutions"
        />

        {/* Floating Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex bg-zinc-900/50 backdrop-blur-xl p-1.5 rounded-2xl border border-zinc-800">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-6 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  selectedCategory === category ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {selectedCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* 3D Flip Cards Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isActive={activeProject === project.id}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.a
            href="https://github.com/MoniiMano"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-bold text-base shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all group"
          >
            <HiCode className="text-2xl" />
            <span>Explore All Projects</span>
            <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
