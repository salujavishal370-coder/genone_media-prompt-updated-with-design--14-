import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../utils/cn';

const industries = [
  {
    title: "Technology & SaaS",
    desc: "Scaling digital products and software platforms with cutting-edge UI/UX and strategic marketing.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    animationClass: "translate-y-full group-hover:translate-y-0" // Bottom to top
  },
  {
    title: "Media & Entertainment",
    desc: "Crafting highly engaging digital content, video production, and social media campaigns.",
    image: "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=format&fit=crop&q=80&w=800",
    animationClass: "-translate-x-full group-hover:translate-x-0" // Left to right
  },
  {
    title: "Retail & E-Commerce",
    desc: "Driving seamless sales and brand loyalty through conversion-optimized web platforms.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    animationClass: "-translate-y-full group-hover:translate-y-0" // Top to bottom
  },
  {
    title: "Fintech & Finance",
    desc: "Building user trust and simplifying complex data through premium, secure design architectures.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    animationClass: "-translate-x-full group-hover:translate-x-0" // Left to right
  }
];

export default function IndustriesSection() {
  return (
    <section className="py-24 px-6 relative z-20 bg-[#090514] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white tracking-tight mb-6">
              Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-500">Cater To</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
              Get what you are looking for to fulfill your digital growth and branding needs, with our expertise across high-demand sectors.
            </p>
          </div>
          
          {/* Navigation Arrows (Visual only, to match reference) */}
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-fuchsia-500 flex items-center justify-center text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white hover:scale-105 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[450px]">
          {industries.map((industry, i) => (
            <div 
              key={i} 
              className="group relative rounded-[2rem] bg-white/[0.02] border border-white/5 overflow-hidden flex flex-col p-8 transition-colors duration-500 hover:border-fuchsia-500/50 cursor-pointer shadow-2xl"
            >
              {/* Text Content - Always Visible */}
              <div className="relative z-20 flex-grow transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-white transition-colors duration-500">
                  {industry.title}
                </h3>
                <p className="text-zinc-500 font-medium leading-relaxed group-hover:text-zinc-200 transition-colors duration-500">
                  {industry.desc}
                </p>
              </div>

              {/* Bottom Action text */}
              <div className="relative z-20 flex items-center justify-end text-white/20 group-hover:text-fuchsia-400 transition-colors duration-500 font-bold text-sm tracking-widest uppercase mt-8">
                Explore <ArrowUpRight size={18} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* The Sliding Hover Image matching user direction requests */}
              <div className={cn(
                "absolute inset-0 w-full h-full z-10 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
                industry.animationClass
              )}>
                {/* Image Gradient Overlay for text readability over images */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090514] via-[#090514]/70 to-[#090514]/20 z-10" />
                <div className="absolute inset-0 bg-fuchsia-900/20 mix-blend-overlay z-10" />
                <img src={industry.image} alt={industry.title} className="w-full h-full object-cover" />
              </div>

              {/* Base Hover Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
