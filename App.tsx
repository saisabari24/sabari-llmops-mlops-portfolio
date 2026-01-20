import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden relative">
      {/* Global Fixed Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-grid-white bg-[bottom_1px_center]"></div>
         {/* Vignette overlay to focus center */}
         <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-950/40"></div>
      </div>

      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;