import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Linkedin, ChevronRight, Activity, Server, Database, Terminal, Download, Crosshair } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["MLOps Engineer", "AI Platform Engineer", "Cloud Architect"];
  
  useEffect(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    const handleType = () => {
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );
    };

    let typingSpeed = 100;
    if (isDeleting) typingSpeed = 50;
    if (!isDeleting && text === fullText) typingSpeed = 2000; // Pause at end of word
    
    const timer = setTimeout(() => {
      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        handleType();
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-pink rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
      </div>

      {/* HUD Elements - Hidden on mobile to prevent clutter */}
      <div className="absolute top-24 w-full px-6 lg:px-8 flex justify-between items-start pointer-events-none select-none mix-blend-screen z-0">
        {/* Top Left: System Logs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
          className="hidden lg:block font-mono text-[10px] md:text-xs text-slate-500 space-y-1"
        >
          <div className="flex items-center gap-2">
            <span className="text-slate-700">PID:8924</span> 
            <span className="text-accent-green">ACTIVE</span> 
            <span>session_init.sh</span>
          </div>
          <div className="pl-4 border-l border-slate-800 text-slate-600 mt-2">
            <div>&gt; mounting_volumes... OK</div>
            <div>&gt; starting_pods... OK</div>
          </div>
        </motion.div>

        {/* Top Right: Geo/Net Stats & Target Zones */}
        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 1.2, duration: 0.8 }}
           className="hidden lg:block text-right space-y-6 pointer-events-auto"
        >
          <div className="flex items-center justify-end gap-2 text-xs font-mono text-slate-400 mr-1">
            <span>CURRENT_LOC: BLR_IN</span>
            <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse shadow-[0_0_5px_rgba(80,250,123,0.5)]"></div>
          </div>

          <div className="bg-slate-900/90 backdrop-blur-xl border border-accent-cyan/40 p-5 rounded-xl shadow-[0_0_30px_rgba(139,233,253,0.15)] hover:border-accent-cyan/70 transition-all duration-300">
             <div className="flex items-center justify-end gap-3 text-sm font-bold font-mono text-accent-cyan tracking-widest uppercase mb-4 border-b border-white/10 pb-3">
               <span className="drop-shadow-[0_0_10px_rgba(139,233,253,0.5)]">Target Zones</span>
               <Crosshair size={16} className="text-accent-pink animate-[spin_6s_linear_infinite]" />
             </div>
             <div className="flex flex-col gap-3 text-xs font-mono text-white">
                {[
                  { id: 'AUS', label: 'AUSTRALIA' },
                  { id: 'KSA', label: 'SAUDI ARABIA' },
                  { id: 'UAE', label: 'UAE (DUBAI)' },
                  { id: 'LUX', label: 'LUXEMBOURG' }
                ].map((zone) => (
                  <div key={zone.id} className="flex justify-end items-center gap-3 group cursor-default hover:bg-white/5 p-1 rounded transition-all">
                    <span className="font-bold tracking-wide group-hover:text-accent-green transition-colors">{zone.label}</span>
                    <span className="text-[10px] text-accent-purple font-bold bg-accent-purple/10 px-1.5 py-0.5 rounded border border-accent-purple/20">[{zone.id}]</span>
                    <div className="w-2 h-2 bg-accent-green rounded-full shadow-[0_0_10px_rgba(80,250,123,0.8)] animate-pulse"></div>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content Wrapper - uses flex-grow to push footer down */}
      <div className="flex-grow flex items-center justify-center w-full z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 flex flex-col items-start"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-green/30 bg-accent-green/10 text-accent-green text-xs font-mono"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
              </span>
              System Online
            </motion.div>
            
            <div className="space-y-2 w-full">
              <h2 className="text-xl md:text-2xl text-slate-400 font-light font-mono">Hello, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              {/* Fixed height container for typing text to prevent layout shift */}
              <div className="h-20 md:h-14 flex items-center">
                <h2 className="text-2xl md:text-4xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink leading-normal">
                  {text}
                  <span className="border-r-4 border-accent-green ml-1 animate-pulse"></span>
                </h2>
              </div>
            </div>
            
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl border-l-2 border-slate-700 pl-4">
              {PERSONAL_INFO.summary.split('. ')[0]}. 
              Expert in <span className="text-accent-cyan font-mono">KServe & vLLM</span> for high-throughput inference and building robust <span className="text-accent-purple font-mono">MLOps pipelines</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="Sabari_llmops_mlops_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-lg border border-accent-green bg-accent-green/10 text-accent-green hover:bg-accent-green hover:text-slate-950 font-mono font-bold transition-all shadow-[0_0_15px_rgba(80,250,123,0.1)] flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <Terminal size={18} />
                $ download-resume
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://${PERSONAL_INFO.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-lg border border-slate-700 hover:border-accent-cyan/50 bg-slate-800/50 hover:bg-slate-800 text-slate-200 font-medium transition-all flex items-center justify-center gap-2 backdrop-blur-sm whitespace-nowrap"
              >
                <Linkedin size={18} />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
          
          {/* Right Column: Visual Tech Stack */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center relative"
          >
            {/* Pseudo-Terminal Interface */}
            <div className="relative w-full max-w-md bg-slate-900/90 backdrop-blur-xl rounded-lg border border-slate-700 shadow-2xl overflow-hidden group hover:border-accent-purple/30 transition-colors duration-500">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5555]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#f1fa8c]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#50fa7b]"></div>
                </div>
                <div className="text-xs text-slate-400 font-mono ml-4">sabari@cloud-cluster:~</div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm space-y-4">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-accent-pink">➜</span>
                  <span className="text-accent-cyan">~</span>
                  <span>init_pipeline.sh --env=prod</span>
                </div>
                
                <div className="space-y-3 pl-4 border-l-2 border-slate-700 ml-1">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Activity size={14} className="text-accent-green" />
                    <span>Initializing KServe Inference Plane...</span>
                  </div>
                   <div className="flex items-center gap-2 text-slate-300">
                    <Server size={14} className="text-accent-purple" />
                    <span>Allocating NVIDIA MIG Instances...</span>
                  </div>
                   <div className="flex items-center gap-2 text-slate-300">
                    <Database size={14} className="text-accent-yellow" />
                    <span>Syncing Feature Store (DVC)...</span>
                  </div>
                </div>

                <div className="text-accent-green mt-2 animate-pulse">
                    {'>'} System Ready. Latency: 45ms
                </div>

                {/* Experience Block inside terminal */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="mt-6 pt-4 border-t border-slate-800"
                >
                   <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors">
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Total Experience</div>
                        <div className="text-3xl font-bold text-white flex items-baseline gap-1 font-mono">
                          5.6 <span className="text-sm font-normal text-accent-green">Years</span>
                        </div>
                      </div>
                      <div className="h-8 w-px bg-slate-800"></div>
                      <div className="text-right">
                         <div className="text-xs text-slate-500 mb-1">Status</div>
                         <div className="text-xs text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded border border-accent-cyan/20">Active</div>
                      </div>
                   </div>
                </motion.div>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-purple/5 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar - Relative Flow on all screens to ensure no overlaps. 
          The flex-grow on the content above ensures it pushes this to the bottom when content is short. */}
      <div className="w-full bg-slate-900/50 backdrop-blur-md border-t border-slate-800/50 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Models Deployed", value: "50+" },
              { label: "Pipelines Built", value: "100+" },
              { label: "Cloud Platforms", value: "AWS / Azure" },
              { label: "Uptime Achieved", value: "99.9%" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-2xl font-bold text-white font-mono">{stat.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-mono text-accent-cyan">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;