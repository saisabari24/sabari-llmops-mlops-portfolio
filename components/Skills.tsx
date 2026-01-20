import React from 'react';
import { SKILL_CATEGORIES, SKILL_CHART_DATA } from '../constants';
import { GitBranch, Cpu, Cloud, Container, Code, Database, Terminal, Shield, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';

const iconMap: Record<string, React.ReactNode> = {
  GitBranch: <GitBranch className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  Container: <Container className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden scroll-mt-20">
      {/* Divider line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-accent-purple font-mono text-sm mb-4">
            <Terminal size={14} />
            <span>Stack Overview</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 font-mono">
             <span className="text-accent-green">$</span> ls ./skills/
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Specialized in cloud-native technologies, automated pipelines, and scalable inference systems.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Radar Chart Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2"
          >
            <div className="w-full h-[350px] md:h-[400px] relative">
              <div className="absolute inset-0 bg-accent-cyan/10 blur-[80px] rounded-full"></div>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="45%" data={SKILL_CHART_DATA} margin={{ top: 40, right: 40, bottom: 40, left: 40 }}>
                  <defs>
                    <radialGradient id="radarFill" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" stopColor="#8be9fd" stopOpacity={0.6}/>
                      <stop offset="100%" stopColor="#8be9fd" stopOpacity={0.1}/>
                    </radialGradient>
                  </defs>
                  <PolarGrid gridType="polygon" stroke="#334155" />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500, fontFamily: 'JetBrains Mono' }} 
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Proficiency"
                    dataKey="A"
                    stroke="#8be9fd"
                    strokeWidth={3}
                    fill="url(#radarFill)"
                    fillOpacity={1}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f1f5f9', fontFamily: 'JetBrains Mono' }}
                    itemStyle={{ color: '#8be9fd' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Skill Cards Section */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 order-2 lg:order-1">
            {SKILL_CATEGORIES.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-accent-purple/50 transition-all duration-300 h-full backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-accent-cyan group-hover:bg-accent-purple group-hover:text-slate-950 transition-colors duration-300 shadow-lg">
                      {iconMap[category.icon]}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors font-mono">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIndex) => (
                      <span 
                        key={sIndex} 
                        className="px-3 py-1 rounded bg-slate-950/80 border border-slate-800 text-xs md:text-sm font-medium text-slate-400 group-hover:border-accent-cyan/30 group-hover:text-slate-200 transition-colors font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;