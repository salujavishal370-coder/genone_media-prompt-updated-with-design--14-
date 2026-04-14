import React from 'react';
import { ArrowUpRight, Cpu, PlayCircle, ShoppingBag, BarChart3 } from 'lucide-react';
import { cn } from '../utils/cn';

const industries = [
  {
    title: "Technology & SaaS",
    desc: "Scaling digital products and software platforms with cutting-edge UI/UX and strategic marketing.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "text-blue-400",
    border: "group-hover:border-blue-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    animationClass: "translate-y-full group-hover:translate-y-0"
  },
  {
    title: "Media & Entertainment",
    desc: "Crafting highly engaging digital content, video production, and social media campaigns.",
    image: "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=format&fit=crop&q=80&w=800",
    icon: <PlayCircle className="w-8 h-8" />,
    color: "from-purple-500/20 to-pink-500/20",
    accent: "text-purple-400",
    border: "group-hover:border-purple-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    animationClass: "-translate-x-full group-hover:translate-x-0"
  },
  {
    title: "Retail & E-Commerce",
    desc: "Driving seamless sales and brand loyalty through conversion-optimized web platforms.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    icon: <ShoppingBag className="w-8 h-8" />,
    color: "from-orange-500/20 to-amber-500/20",
    accent: "text-orange-400",
    border: "group-hover:border-orange-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]",
    animationClass: "-translate-y-full group-hover:translate-y-0"
  },
  {
    title: "Fintech & Finance",
    desc: "Building user trust and simplifying complex data through premium, secure design architectures.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "text-emerald-400",
    border: "group-hover:border-emerald-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
    animationClass: "-translate-x-full group-hover:translate-x-0"
  }
];

export default function IndustriesSection() {
  return (
    <section className="py-24 px-6 relative z-20 bg-[#090514] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white tracking-tight mb-8 normal-case">
              Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-500">Cater To</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
              Tailored digital solutions that drive growth across diverse sectors, blending innovation with strategic industry insights.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-500 group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button className="w-14 h-14 rounded-full border border-fuchsia-500 flex items-center justify-center text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(217,70,239,0.2)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[500px]">
          {industries.map((industry, i) => (
            <div 
              key={i} 
              className={cn(
                "group relative rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] overflow-hidden flex flex-col p-10 transition-all duration-700 cursor-pointer backdrop-blur-sm",
                industry.border,
                industry.glow
              )}
            >
              {/* Background Gradient Mesh */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0",
                industry.color
              )} />

              {/* Icon Container */}
              <div className={cn(
                "relative z-20 w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10",
                industry.accent
              )}>
                {industry.icon}
              </div>

              {/* Text Content */}
              <div className="relative z-20 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-500 normal-case">
                  {industry.title}
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed group-hover:text-zinc-200 transition-colors duration-500">
                  {industry.desc}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="relative z-20 flex items-center justify-between mt-10">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 group-hover:text-white transition-colors duration-500">
                  Explore Now
                </span>
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100",
                  industry.accent,
                  "bg-white/10"
                )}>
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Sliding Image on Hover */}
              <div className={cn(
                "absolute inset-0 w-full h-full z-10 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] opacity-0 group-hover:opacity-100",
                industry.animationClass
              )}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#090514] via-[#090514]/80 to-[#090514]/40 z-10" />
                <img src={industry.image} alt={industry.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
