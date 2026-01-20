import React from 'react';
import { PERSONAL_INFO, CERTIFICATIONS, EDUCATION } from '../constants';
import { Award, GraduationCap, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Summary: React.FC = () => {
  return (
    <section id="summary" className="py-24 relative z-10 border-b border-slate-800/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Summary Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             {/* Terminal Heading Style */}
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 font-mono">
              <span className="text-accent-pink">$</span>
              whoami
            </h3>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-12 border-l-2 border-accent-purple/50 pl-6">
              {PERSONAL_INFO.summary}
            </p>
            
            <div className="">
               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 font-mono">
                <GraduationCap className="text-accent-yellow" />
                Education
              </h3>
              <div className="bg-slate-900/50 p-8 rounded-lg border border-slate-800 backdrop-blur-sm hover:border-accent-yellow/30 transition-colors">
                <h4 className="text-xl font-bold text-white">{EDUCATION.degree}</h4>
                <div className="text-accent-cyan mt-2 text-lg font-mono">{EDUCATION.institution}</div>
                <div className="text-slate-500 mt-2 font-mono">{EDUCATION.year}</div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-mono">
              <Award className="text-accent-green" />
              Certifications.json
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {CERTIFICATIONS.map((cert, index) => (
                <a 
                  key={index}
                  href={cert.link || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-6 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-accent-green/50 hover:bg-slate-800 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center border border-accent-green/20 group-hover:scale-110 transition-transform">
                      <Award size={20} className="text-accent-green" />
                    </div>
                    <div>
                      <span className="text-slate-200 text-base md:text-lg font-medium group-hover:text-white transition-colors block font-mono">
                        {cert.name}
                      </span>
                      {cert.issuer && (
                        <span className="text-slate-500 text-xs uppercase tracking-wider font-mono mt-1 group-hover:text-slate-400 transition-colors block">
                          {cert.issuer}
                        </span>
                      )}
                    </div>
                  </div>
                  <ExternalLink size={18} className="text-slate-500 group-hover:text-accent-green transition-colors opacity-0 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Summary;