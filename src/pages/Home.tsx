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
      <section className="relative min-h-screen flex items-center justify-between overflow-hidden px-6 py-20 bg-[#090514]">
        {/* Background Gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-[600px] bg-indigo-900/10 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-fuchsia-600/10 blur-[150px] pointer-events-none -translate-y-1/2 rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 pt-20">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left space-y-30">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <div className="w-6 h-6 rounded bg-fuchsia-500 flex items-center justify-center text-[10px] font-bold text-white shadow-[0_0_15px_rgba(217,70,239,0.5)]">
                fm
              </div>
              <span className="text-xs font-bold tracking-widest text-white uppercase">Aether Media</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-3xl lg:text-[80px] leading-[1] font-display font-bold text-white tracking-tighter">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="block">
                We build
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="block mt-2">
                your brand
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-500 mt-2 pb-2">
               unstoppable.
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-500 pb-2 relative inline-block">
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 5.5C45.8333 2.16667 140.5 -2.59999 197.5 6.5" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-zinc-400 max-w-xl font-medium leading-relaxed mt-4"
            >
              Done-for-you content creation that converts strangers into customers. We position you as the <span className="font-bold text-white">authority in your space.</span>
            </motion.p>
          </div>

          {/* Right Column: Image Block Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full aspect-[4/5] lg:h-[700px] rounded-[3rem] border border-white/5 bg-white/5 overflow-visible flex flex-col items-center justify-center backdrop-blur-sm shadow-2xl"
          >
            {/* Background Glow inside the block */}
            <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/5 to-indigo-500/10 rounded-[3rem]" />
            <div className="absolute inset-0 border border-white/10 rounded-[3rem]" />
            
            <div className="text-center z-10 p-8 flex flex-col items-center">
               <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                 <svg className="w-10 h-10 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                 </svg>
               </div>
               <p className="text-white/80 font-bold text-xl mb-2">Your Image Here</p>
               <p className="text-white/40 text-sm max-w-[200px] text-center">Replace this block with your portrait or hero image</p>
            </div>

            {/* Floating Element 1 - Top Left */}
            <div className="absolute top-20 -left-6 md:-left-12 bg-[#1A1A24]/90 backdrop-blur-md border border-white/10 px-5 py-4 rounded-2xl flex items-center gap-4 shadow-2xl z-20">
               <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
               </div>
               <div>
                 <p className="text-white font-bold text-base">MegaCreator</p>
                 <p className="text-green-400 text-sm font-semibold mt-0.5">2.5M Followers</p>
               </div>
            </div>
            
            {/* Floating Element 2 - Bottom Right */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 bg-[#1B2B28]/95 backdrop-blur-md border border-green-500/30 px-5 py-4 rounded-xl flex items-center gap-4 shadow-2xl z-20">
               <div className="w-12 h-12 bg-[#00D084] rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-green-500/20">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
               </div>
               <div>
                 <p className="text-white font-black text-2xl leading-none">100M+</p>
                 <p className="text-[#00D084] text-xs font-bold mt-1 text-right">▲ Views</p>
               </div>
            </div>

            {/* Social Icons Stack - Bottom Left */}
            <div className="absolute bottom-20 -left-6 bg-[#1A1A24]/90 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex flex-col gap-3 shadow-2xl z-20 border-r-fuchsia-500 border-r-2">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/70 hover:bg-white/10 cursor-pointer transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/70 hover:bg-white/10 cursor-pointer transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-[#090514] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* TOP SECTION: Tagda Content */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-1 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/5 text-fuchsia-400 text-[10px] font-black uppercase tracking-[0.3em]">
              Agency Expertise
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase">
              Digital <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-500 mt-2 pb-2">Mastery</span>
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