import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6',
        scrolled ? 'py-4' : 'py-8'
      )}
    >
      <div 
        className={cn(
          "max-w-7xl mx-auto px-6 py-3 rounded-2xl transition-all duration-500 flex justify-between items-center",
          /* Jab scroll ho tab yeh Floating Glass ban jayega */
          scrolled 
            ? 'bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]' 
            : 'bg-transparent'
        )}
      >
        {/* Logo Section */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="text-xl md:text-2xl font-bold uppercase tracking-[0.15em] text-white">
            Gen <span className="text-blue-500 group-hover:text-blue-400 transition-colors">One</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[13px] uppercase tracking-widest font-semibold transition-all hover:text-blue-400 relative group',
                location.pathname === link.path ? 'text-blue-400' : 'text-white/70'
              )}
            >
              {link.name}
              {/* Active Line Indicator */}
              <span className={cn(
                "absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all duration-300",
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              )} />
            </Link>
          ))}
          
          <Link
            to="/contact"
            className="px-7 py-2.5 bg-blue-600 text-white text-xs font-bold uppercase tracking-tighter rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-blue-600/20"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Glass Effect) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[90%] left-6 right-6 bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:hidden z-40 shadow-2xl"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-3xl font-bold tracking-tighter flex justify-between items-center group"
                >
                  <span className="group-hover:text-blue-500 transition-colors">{link.name}</span>
                  <ChevronRight className="text-blue-500 group-hover:translate-x-2 transition-transform" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}