import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';
import heroVideo from '../assets/hero.mp4.mp4';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';
import IndustriesSection from '../components/IndustriesSection';

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
  { id: 'growth-campaign', title: 'Growth Campaign', category: 'Social Media', image: 'https://picsum.photos/seed/social/1200/800' },
  { id: 'ad-conversion', title: 'Ad Conversion Boost', category: 'Performance Marketing', image: 'https://picsum.photos/seed/ads/1200/800' },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <PageWrapper>

      {/* ============ HERO SECTION — Full Screen Video Background ============ */}
      <section className="relative w-full h-screen overflow-hidden bg-black">

        {/* Background Video — loops silently */}
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />

        {/* Dark gradient top + bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/75 z-10" />

        {/* Ambient fuchsia glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-fuchsia-600/10 blur-[180px] rounded-full pointer-events-none z-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-indigo-700/10 blur-[140px] rounded-full pointer-events-none z-10" />

        {/* ---- Centered Content ---- */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-10 rounded-full border border-white/15 bg-white/5 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" />
            <span className="text-xs font-bold tracking-[0.25em] text-white/70 uppercase">
              Aether Creative Agency
            </span>
          </motion.div>

          {/* Main Headline — each line slides up from below */}
          <h1 className="font-display font-black text-white tracking-tighter leading-[1.05]">

            {/* Line 1: We build */}
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block text-5xl md:text-7xl lg:text-[96px]"
              >
                We build
              </motion.span>
            </div>

            {/* Line 2: your brand */}
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="block text-5xl md:text-7xl lg:text-[96px]"
              >
                your brand
              </motion.span>
            </div>

            {/* Line 3: unstoppable. — fuchsia gradient */}
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
                className="block text-5xl md:text-7xl lg:text-[96px] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 pb-3"
              >
                unstoppable.
              </motion.span>
            </div>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.82 }}
            className="mt-8 text-base md:text-xl text-white/45 max-w-2xl leading-relaxed font-medium"
          >
            Done-for-you content creation that converts strangers into loyal customers.{' '}
            <span className="text-white/75 font-semibold">
              We position you as the authority in your space.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 hover:scale-105 transition-all duration-300"
            >
              Get Started →
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-white/75 font-bold text-sm tracking-wide hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Our Services
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-white/35 to-transparent"
          />
        </motion.div>
      </section>
      {/* ============ END HERO SECTION ============ */}

      {/* Brands Marquee Section */}
      <section className="py-12 md:py-16 bg-[#090514] border-b border-white/5 w-full flex flex-col items-center relative overflow-hidden">
        {/* Fading Edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#090514] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#090514] to-transparent z-10 pointer-events-none" />

        <p className="text-zinc-500 font-medium text-sm mb-10 md:mb-12 text-center px-4 uppercase tracking-[0.2em] relative z-20">
          Partnering with the world's leading enterprises
        </p>

        <div className="flex flex-col gap-8 w-full">
          {/* Top Slider - Moves Right */}
          <div className="flex w-max animate-marquee-right opacity-60">
            {[
              "Wealthbeats Finserv", "Delhi Dental Clinic", "Adi Kailash", "Tushar Saluja", "Lahori Zeera",
              "Wealthbeats Finserv", "Delhi Dental Clinic", "Adi Kailash", "Tushar Saluja", "Lahori Zeera"
            ].map((brand, i) => (
              <div key={`top-${i}`} className="flex items-center gap-3 shrink-0 px-8 md:px-16 cursor-default">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white relative -top-[2px]" viewBox="0 0 24 24" fill="currentColor">
                  {i % 5 === 0 && <path d="M12 2L2 12h5v8h10v-8h5L12 2z" />}
                  {i % 5 === 1 && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />}
                  {i % 5 === 2 && <path d="M12 2L3 11h6v4h6v-4h6L12 2zm-5 12.5L3 18.5V21h18v-2.5L17 14.5 12 19.5 7 14.5z" />}
                  {i % 5 === 3 && <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />}
                  {i % 5 === 4 && <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />}
                </svg>
                <span className="text-xl md:text-3xl font-display font-medium text-white tracking-tight whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-[#090514] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">

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

          <div className="flex flex-col md:flex-row gap-4 h-[350px] w-full">
            {services.map((service, i) => (
              <Link
                key={i}
                to={service.path}
                className="group relative flex-1 hover:flex-[1.25] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-3xl overflow-hidden bg-zinc-900 border border-white/5"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

                <div className="absolute top-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="absolute inset-0 flex items-end p-6 z-10 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-lg font-black uppercase tracking-tighter leading-none">
                    {service.title}
                  </h3>
                </div>

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

      <CTASection />
      <IndustriesSection />

      <FAQ />
      <ContactSection />
    </PageWrapper>
  );
}