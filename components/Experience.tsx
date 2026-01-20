import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-800 pb-8"
        >
          <div>
            {/* Terminal Heading Style */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
              <span className="text-accent-green mr-2">$</span>
              cat experience.log
            </h2>
            <p className="text-slate-400 font-mono text-sm mt-2">
              <span className="text-accent-pink">Loading history...</span> Done.
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-accent-cyan font-mono text-sm border border-slate-800 px-3 py-1 rounded bg-slate-900/80 backdrop-blur-sm">
            Total Exp: 5.6 Years
          </div>
        </motion.div>

        <div className="relative space-y-16">
          {/* Connector Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-[19px] w-px bg-gradient-to-b from-accent-green/50 via-slate-800 to-transparent"></div>

          {EXPERIENCE.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-950 border-2 border-accent-green flex items-center justify-center z-10 shadow-[0_0_10px_rgba(80,250,123,0.3)]">
                <Briefcase size={16} className="text-accent-green" />
              </div>

              {/* Apple Style Window Card - Terminal Version */}
              <div className="bg-slate-900/90 rounded-lg border border-slate-700/50 shadow-2xl overflow-hidden group hover:border-accent-green/30 transition-all duration-300 backdrop-blur-sm">
                {/* Window Header */}
                <div className="bg-slate-800/80 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                   <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-[#ff5555]"></div>
                     <div className="w-3 h-3 rounded-full bg-[#f1fa8c]"></div>
                     <div className="w-3 h-3 rounded-full bg-[#50fa7b]"></div>
                   </div>
                   <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
                      <Terminal size={12} />
                      <span>{job.role.toLowerCase().replace(/\s+/g, '_')}.sh</span>
                   </div>
                </div>

                {/* Window Body */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent-green transition-colors font-mono tracking-tight">{job.role}</h3>
                      <div className="text-lg text-accent-cyan font-medium mt-1 font-mono">{job.company}</div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-mono bg-slate-950/80 px-4 py-2 rounded border border-slate-800">
                      <Calendar size={14} />
                      {job.period}
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                    {job.description}
                  </p>

                  <div className="grid grid-cols-1 gap-3">
                    {job.achievements.map((achievement, aIndex) => (
                      <div key={aIndex} className="flex items-start gap-3">
                        <span className="text-accent-pink mt-1 font-mono">➜</span>
                        <span className="text-slate-400 text-sm leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;