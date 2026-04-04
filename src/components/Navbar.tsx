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
  const [isVisible, setIsVisible] = useState(true); // Navbar dikhega ya nahi
  const [lastScrollY, setLastScrollY] = useState(0); // Pichli scroll position
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Scrolled state for glass effect (vahi purana logic)
      setScrolled(currentScrollY > 20);

      // 2. Hide/Show Logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Niche scroll kar rahe ho toh hide kar do (lekin thoda niche jaane ke baad)
        setIsVisible(false);
      } else {
        // Upar scroll kar rahe ho toh show kar do
        setIsVisible(true);
      }

      // Update pichli position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]); // lastScrollY update hone par effect dobara chale

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6',
        scrolled ? 'py-4' : 'py-8',
        /* Yahan main magic hai: translate-y-0 matlab normal, -translate-y-full matlab upar gayab */
        isVisible ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div 
        className={cn(
          "max-w-7xl mx-auto px-6 py-3 rounded-full transition-all duration-500 flex justify-between items-center",
          scrolled 
            ? 'bg-white/10 backdrop-blur-2xl border border-fuchsia-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]' 
            : 'bg-transparent'
        )}
      >
        {/* Logo with Glow */}
        <Link to="/" className="group">
          <div className="text-xl md:text-2xl font-bold uppercase tracking-[0.15em] text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            Gen <span className="text-fuchsia-400 group-hover:text-white transition-colors duration-300">One</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[12px] uppercase tracking-[0.2em] font-bold transition-all relative group',
                location.pathname === link.path ? 'text-fuchsia-400' : 'text-white/80 hover:text-white'
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-[2px] bg-fuchsia-400 shadow-[0_0_10px_#60a5fa] transition-all duration-300",
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              )} />
            </Link>
          ))}
          
          <Link
            to="/contact"
            className="relative px-7 py-2.5 bg-fuchsia-500 text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)] active:scale-95"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <div className="bg-fuchsia-500/20 p-2 rounded-lg border border-fuchsia-500/40">
             {isOpen ? <X size={20} /> : <Menu size={20} />}
          </div>
        </button>
      </div>
    </nav>
  );
}