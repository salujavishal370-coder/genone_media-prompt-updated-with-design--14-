import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';
import logo from '../assets/genoneLogo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6',
        scrolled ? 'py-4' : 'py-8',
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
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2 sm:gap-3">
          <img
            src={logo}
            alt="Aether Logo"
            className="
      h-10 sm:h-12 md:h-14 lg:h-16 
      w-auto object-contain 
      brightness-110 
      group-hover:scale-105 
      transition-transform duration-300
    "
          />
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