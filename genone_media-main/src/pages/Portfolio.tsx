import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../utils/cn';

const categories = ['All', 'Video', 'Design', 'Web'];

const projects = [
  { id: 'neon-genesis', title: 'Neon Genesis', category: 'Video', image: 'https://picsum.photos/seed/neon/800/600' },
  { id: 'aether-os', title: 'Aether OS', category: 'Web', image: 'https://picsum.photos/seed/tech/800/600' },
  { id: 'vanguard', title: 'Vanguard', category: 'Design', image: 'https://picsum.photos/seed/vanguard/800/600' },
  { id: 'lumina', title: 'Lumina', category: 'Video', image: 'https://picsum.photos/seed/lumina/800/600' },
  { id: 'nexus', title: 'Nexus', category: 'Web', image: 'https://picsum.photos/seed/nexus/800/600' },
  { id: 'prism', title: 'Prism', category: 'Design', image: 'https://picsum.photos/seed/prism/800/600' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <PageWrapper>
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-8">
                SELECTED <span className="text-accent">WORKS</span>
              </h1>
              <p className="text-xl text-white/50">
                A collection of our most impactful projects. Each piece is a testament to our 
                commitment to excellence and innovation.
              </p>
            </div>
            
            <div className="flex gap-4 bg-white/5 p-2 rounded-full border border-white/10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'px-6 py-2 rounded-full text-sm font-bold transition-all',
                    activeCategory === cat ? 'bg-accent text-black' : 'hover:bg-white/10'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="group block relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-10 flex flex-col justify-end">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-accent font-bold uppercase tracking-widest text-xs mb-2">{project.category}</p>
                          <h3 className="text-3xl font-display font-bold">{project.title}</h3>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-black transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <ArrowUpRight size={24} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
