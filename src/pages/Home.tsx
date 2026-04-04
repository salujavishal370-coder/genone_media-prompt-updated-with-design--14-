import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Code, Palette, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

const services = [
  {
    title: "Web Development",
    desc: "Building high-performance, scalable web applications with modern frameworks.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    path: "/services/web-dev",
  },
  {
    title: "Video Editing",
    desc: "Professional post-production, motion graphics, and cinematic storytelling.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    path: "/services/video-editing",
  },
  {
    title: "Graphic Designing",
    desc: "Creative visual identities, branding, and high-impact digital assets.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    path: "/services/graphic-design",
  },
  {
    title: "Social Media",
    desc: "Strategic content creation and management to boost brand engagement.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    path: "/services/social-media",
  },
];

const projects = [
  { id: 'neon-genesis', title: 'Neon Genesis', category: 'Video / Motion', image: 'https://picsum.photos/seed/neon/1200/800' },
  { id: 'aether-os', title: 'Aether OS', category: 'Web / UI', image: 'https://picsum.photos/seed/tech/1200/800' },
  { id: 'vanguard', title: 'Vanguard', category: 'Branding', image: 'https://picsum.photos/seed/vanguard/1200/800' },

  // ✅ NEW PROJECT TYPES
  { id: 'growth-campaign', title: 'Growth Campaign', category: 'Social Media', image: 'https://picsum.photos/seed/social/1200/800' },
  { id: 'ad-conversion', title: 'Ad Conversion Boost', category: 'Performance Marketing', image: 'https://picsum.photos/seed/ads/1200/800' },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  // In transforms ko use karne ke liye niche sections mein style={ {y: y1} } add karna hoga
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
        {/* Background Blobs - Added -z-10 to prevent blocking clicks */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full anti-gravity" />
          <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-blue-500 rounded-full anti-gravity" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full anti-gravity" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs md:text-sm font-medium tracking-widest uppercase"
          >
            Creative Excellence Redefined
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-8">
            <span className="block overflow-hidden">
              <motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="block">
                CRAFTING
              </motion.span>
            </span>
            <span className="block overflow-hidden text-blue-500 ">
              <motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="block">
                VISUAL
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="block">
                REALITIES
              </motion.span>
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto mb-12">
            A high-end agency specializing in video editing, graphic design, meta adds, seo and web development.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/portfolio" className="px-10 py-4 bg-blue-500 text-black font-bold rounded-full hover:bg-white transition-all duration-300 flex items-center gap-2 group">
              View Portfolio <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-10 py-4 border border-white/20 hover:bg-white/5 font-bold rounded-full transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-[2px] h-12 bg-gradient-to-b from- accent to-transparent rounded-full animate-bounce" />
        </div>
      </section>

      {/* Services Section */}
<section className="py-20 px-6 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: Tagda Content */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
            Agency Expertise
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase">
            Digital <span className="text-blue-500">Mastery</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We don't just follow trends; we set them. From high-performance web architecture 
            to cinematic social storytelling, we deliver results that scale.
          </p>
        </div>

        {/* BOTTOM SECTION: Compact Expandable Cards */}
        {/* Height reduced to 350px for a very compact/sleek look */}
        <div className="flex flex-col md:flex-row gap-4 h-[350px] w-full">
          {services.map((service, i) => (
            <Link
              key={i}
              to={service.path}
              /* flex-1 base width, hover:flex-[1.25] for subtle expansion */
              className="group relative flex-1 hover:flex-[1.25] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-3xl overflow-hidden bg-zinc-900 border border-white/5"
            >
              {/* Background Image - Subtle starting opacity */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 scale-105 group-hover:scale-100"
              />

              {/* Overlay Gradient for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

              {/* Top Right Arrow */}
              <div className="absolute top-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Static Title (Visible initially) */}
              <div className="absolute inset-0 flex items-end p-6 z-10 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg font-black uppercase tracking-tighter leading-none">
                  {service.title}
                </h3>
              </div>

              {/* Hover Content: Compact White Box */}
              <div className="absolute inset-x-3 bottom-3 z-20 pointer-events-none">
                <div className="bg-white p-5 rounded-2xl opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out shadow-2xl">
                  <span className="text-[9px] text-blue-600 font-black uppercase tracking-widest mb-1 block">Expertise</span>
                  <h3 className="text-black text-base font-extrabold mb-1.5 uppercase leading-none">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-[11px] leading-snug font-medium">
                    {service.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Optional: Bottom Link */}
        <div className="mt-12 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-500 font-bold text-xs uppercase tracking-[0.2em] transition-colors"
          >
            View All Services <ChevronRight size={14} />
          </Link>
        </div>
        
      </div>
    </section>

      {/* Portfolio with Scroll Transform (y1 applied here) */}
      <motion.section style={{ y: y1 }} className="py-32 px-6 relative z-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-24 text-center">
            SELECTED <span className="text-accent">WORKS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <Link key={i} to={`/portfolio/${project.id}`} className={cn('group relative block overflow-hidden rounded-3xl aspect-[16/10]', i === 2 && 'md:col-span-2')}>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-12 flex flex-col justify-end">
                  <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">{project.category}</p>
                  <h3 className="text-4xl font-display font-bold">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>
    </PageWrapper>
  );
}