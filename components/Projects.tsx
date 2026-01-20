import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Zap, Code2, Server, FolderGit2, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-slate-800 pb-8"
        >
           {/* Terminal Heading Style */}
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
              <span className="text-accent-green mr-2">$</span>
              ls ./projects/
            </h2>
            <p className="text-slate-400 font-mono text-sm mt-2">
              <span className="text-accent-yellow">3 directories found.</span> Access level: public
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900/80 rounded-lg p-1 overflow-hidden backdrop-blur-sm"
            >
              {/* Animated Gradient Border - Updated Colors */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-xy"></div>
              
              <div className="relative h-full bg-slate-900/90 rounded-lg p-6 overflow-hidden border border-slate-800 group-hover:border-transparent transition-colors">
                
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-accent-cyan transition-colors">
                    {index === 0 ? <Zap size={24} /> : index === 1 ? <Server size={24} /> : <Code2 size={24} />}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-xs font-semibold text-accent-pink font-mono uppercase tracking-wider mb-2">
                    {project.subtitle || 'Infrastructure'}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-purple transition-colors font-mono">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 border-t border-slate-800 pt-4">
                  {project.metrics && (
                    <div className="space-y-2">
                      {project.metrics.map((metric, mIndex) => (
                        <div key={mIndex} className="flex items-center gap-2 text-xs text-accent-green font-mono">
                           <span className="text-accent-pink">➜</span>
                           {metric}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, tIndex) => (
                      <span 
                        key={tIndex}
                        className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-xs font-medium text-slate-400 font-mono group-hover:border-accent-purple/30 group-hover:text-accent-purple transition-colors"
                      >
                        $ {tech}
                      </span>
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

export default Projects;