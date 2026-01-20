import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Mail, Terminal, Heart, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative z-10 border-t border-slate-800 pt-16 pb-8 overflow-hidden backdrop-blur-sm bg-slate-950/30 scroll-mt-20">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          
          <div className="text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-2 text-accent-green font-mono text-sm bg-accent-green/10 px-3 py-1 rounded-full border border-accent-green/20">
               <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
              </span>
              System Status: Online
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-mono mb-4">
                <span className="text-accent-pink mr-2">&gt;</span>
                Let's Connect
              </h2>
              <p className="text-slate-400 max-w-md text-lg leading-relaxed mx-auto md:mx-0">
                Currently open for MLOps and AI Engineering opportunities. 
                Initialize a conversation below.
              </p>
            </div>

            {/* Location Preferences Tag */}
            <div className="inline-block bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-left backdrop-blur-sm hover:border-accent-cyan/30 transition-colors">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-2 uppercase tracking-wide">
                <MapPin size={12} className="text-accent-cyan" />
                Target Locations
              </div>
              <div className="flex flex-wrap gap-2">
                {['Australia', 'Saudi Arabia', 'UAE', 'Luxembourg'].map((loc) => (
                  <span key={loc} className="text-sm font-mono text-slate-200 bg-slate-800/50 px-2 py-1 rounded border border-slate-700/50">
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end gap-6">
            {[
              { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
              { icon: Linkedin, href: `https://${PERSONAL_INFO.linkedin}`, label: 'LinkedIn' },
              { icon: Github, href: `https://${PERSONAL_INFO.github}`, label: 'GitHub' } 
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group relative p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(139,233,253,0.3)] transition-all duration-300 backdrop-blur-md"
                aria-label={social.label}
              >
                <div className="absolute inset-0 bg-accent-cyan/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
                <social.icon size={24} className="text-slate-400 group-hover:text-accent-cyan relative z-10 transition-colors" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Terminal Footer Info */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm font-mono">
          <div className="flex items-center gap-2">
            <Terminal size={14} />
            <span>sabari.cloud © {currentYear}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <Heart size={12} className="text-accent-pink fill-accent-pink" />
            <span>using React & Tailwind</span>
          </div>

          <div className="text-xs text-slate-600">
            git commit: <span className="text-accent-yellow">latest</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;