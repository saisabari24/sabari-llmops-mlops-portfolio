import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Summary', href: '#summary' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 py-2' 
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo / Brand */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="p-1.5 rounded bg-accent-green/10 border border-accent-green/20 group-hover:border-accent-green/50 transition-colors">
                 <Terminal size={20} className="text-accent-green" />
              </div>
              <span className="font-mono font-bold text-lg text-slate-200 group-hover:text-accent-green transition-colors">
                sabari.ml
              </span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded text-sm font-mono font-medium text-slate-400 hover:text-accent-cyan hover:bg-accent-cyan/5 transition-all duration-200 relative group"
                >
                  <span className="text-accent-pink opacity-0 group-hover:opacity-100 transition-opacity mr-1">&gt;</span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-accent-green hover:bg-slate-900 focus:outline-none border border-transparent hover:border-slate-800 transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 absolute w-full left-0 top-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-accent-green hover:bg-slate-900/50 block px-3 py-3 rounded-md text-base font-mono border-l-2 border-transparent hover:border-accent-green transition-all"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-accent-pink mr-2">$</span>
                cd ./{link.name.toLowerCase()}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;