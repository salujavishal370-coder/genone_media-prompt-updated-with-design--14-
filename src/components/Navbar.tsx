import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-8'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2">
          <div className="text-[28px] font-bold uppercase tracking-[0.08em] transition-all duration-300 hover:scale-105 hover:tracking-[0.12em]">
            Gen <span className="ml-1.5">One</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors hover:text-accent',
                location.pathname === link.path ? 'text-accent' : 'text-white/60'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-accent transition-all duration-300 transform hover:scale-105"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-2xl font-display font-bold flex justify-between items-center"
                >
                  {link.name}
                  <ChevronRight className="text-accent" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
