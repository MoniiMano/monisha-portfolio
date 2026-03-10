import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { HiCode, HiLightningBolt, HiUsers, HiTrendingUp, HiCheckCircle } from 'react-icons/hi';

const About = () => {
  const journey = [
    {
      year: '2024-Present',
      role: 'Full Stack Developer & Team Lead',
      company: 'DataSpark AI Solutions',
      description: 'Leading 6-member team, building AI-integrated EdTech platforms'
    },
    {
      year: '2024',
      role: 'Web Development Intern',
      company: 'SIGN ADSS',
      description: 'Developed corporate website with SEO optimization'
    },
    {
      year: '2023',
      role: 'React Developer Training',
      company: 'Infycle Technologies',
      description: 'Completed intensive React.js certification program'
    }
  ];

  const expertise = [
    'Leading development teams in Agile environments',
    'Building scalable AI-integrated EdTech platforms',
    'Optimizing application performance (30% improvement)',
    'Implementing RBAC and secure payment systems',
    'Docker deployment and CI/CD pipelines',
    'Real-time features with WebRTC and Socket.IO'
  ];

  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="About Me"
          subtitle="Crafting digital experiences that make a difference"
        />

        {/* Main Content - Magazine Style */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          
          {/* Left Column - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Large Opening Text */}
            <div className="space-y-6">
              <p className="text-3xl md:text-4xl font-light text-white leading-relaxed">
                I'm <span className="font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Monisha V</span>, 
                a Full Stack Web Developer passionate about building 
                <span className="font-semibold text-purple-400"> AI-powered educational platforms</span> that 
                empower thousands of students.
              </p>
            </div>

            {/* Body Text */}
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
              <p>
                With over <span className="text-white font-semibold">2 years of professional experience</span>, 
                I specialize in creating scalable web applications using modern technologies like React.js, Next.js, 
                Node.js, and cloud databases. Currently, I lead a talented team of 6 developers at 
                <span className="text-cyan-400 font-semibold"> DataSpark AI Solutions</span>, where we're 
                revolutionizing exam preparation for IELTS, PTE, NEET, JEE, and TNPSC.
              </p>

              <p>
                My work involves integrating cutting-edge AI/ML features including speech scoring, OCR-based 
                examinations, and real-time feedback systems. I've successfully implemented payment gateways, 
                role-based access control, and optimized application performance by 30% through strategic 
                code splitting and lazy loading.
              </p>

              <p>
                Beyond coding, I'm passionate about <span className="text-purple-400 font-semibold">team leadership</span> and 
                <span className="text-purple-400 font-semibold"> mentorship</span>. I believe in Agile methodologies, 
                clean code practices, and creating inclusive development environments where everyone can thrive.
              </p>
            </div>

            {/* What I Do Best */}
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full" />
                What I Do Best
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-zinc-300"
                  >
                    <HiCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Sidebar Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Quick Stats */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50">
              <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-6">Quick Stats</h4>
              <div className="space-y-6">
                {[
                  { icon: HiCode, label: 'Experience', value: '2+ Years', color: 'text-purple-400' },
                  { icon: HiLightningBolt, label: 'Projects', value: '10+ Delivered', color: 'text-cyan-400' },
                  { icon: HiUsers, label: 'Team Size', value: '6 Members', color: 'text-green-400' },
                  { icon: HiTrendingUp, label: 'Performance', value: '+30% Boost', color: 'text-orange-400' }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="text-2xl" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{stat.value}</div>
                      <div className="text-sm text-zinc-500">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50">
              <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <a href="mailto:vmoniimano@gmail.com" className="block text-zinc-300 hover:text-purple-400 transition-colors text-sm">
                  📧 vmoniimano@gmail.com
                </a>
                <a href="tel:+916374000157" className="block text-zinc-300 hover:text-cyan-400 transition-colors text-sm">
                  📱 +91-6374000157
                </a>
                <a href="https://www.linkedin.com/in/monisha-v-267980256" target="_blank" rel="noopener noreferrer" className="block text-zinc-300 hover:text-blue-400 transition-colors text-sm">
                  💼 LinkedIn Profile
                </a>
                <a href="https://portfolio-pro-096ee8bf.base44.app" target="_blank" rel="noopener noreferrer" className="block text-zinc-300 hover:text-green-400 transition-colors text-sm">
                  🌐 Portfolio Website
                </a>
              </div>
            </div>

            {/* Education */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50">
              <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Education</h4>
              <div className="space-y-4">
                <div>
                  <div className="text-white font-semibold text-sm">Master of Computer Applications</div>
                  <div className="text-zinc-400 text-xs">SFR College for Women</div>
                  <div className="text-purple-400 text-xs font-semibold mt-1">CGPA: 8.2/10 • 2021-2023</div>
                </div>
                <div className="border-t border-zinc-800 pt-4">
                  <div className="text-white font-semibold text-sm">Bachelor of Computer Applications</div>
                  <div className="text-zinc-400 text-xs">SFR College for Women</div>
                  <div className="text-cyan-400 text-xs font-semibold mt-1">CGPA: 7.5/10 • 2018-2021</div>
                </div>
              </div>
            </div>

            {/* Download Resume */}
            <a
              href="/Monisha_V_Resume.pdf"
              download="Monisha_V_Resume.pdf"
              className="block w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-center rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Timeline - Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            My <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-green-500" />

            <div className="space-y-12">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transform -translate-x-1/2 shadow-lg shadow-purple-500/50 z-10" />

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800/50 hover:border-zinc-700 transition-all">
                      <div className="text-sm font-semibold text-purple-400 mb-2">{item.year}</div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.role}</h4>
                      <div className="text-cyan-400 font-semibold text-sm mb-2">{item.company}</div>
                      <p className="text-zinc-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
