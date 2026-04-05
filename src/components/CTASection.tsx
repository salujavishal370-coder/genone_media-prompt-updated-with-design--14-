import React from 'react';
import { CheckCircle2, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-24 px-6 relative z-20 bg-[#090514] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-16 shadow-2xl">
          
          {/* Subtle Background Glow inside the box */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-fuchsia-600/10 to-transparent pointer-events-none" />

          {/* Left Content */}
          <div className="relative z-10 w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
              Got a <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-500">Project</span> in Mind?
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-lg">
              Let's transform your concept into a market-winning product. Our teams integrate seamlessly with yours, bringing speed, skill, and scalability to every project.
            </p>
            
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-[#090514] font-bold text-sm md:text-base px-8 py-4 rounded-full hover:scale-105 hover:bg-zinc-200 transition-all duration-300 group">
                GET A FREE CONSULTATION 
                <div className="bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full p-1.5 group-hover:translate-x-1 shadow-lg transition-transform">
                  <ChevronRight size={18} className="text-white" strokeWidth={3} />
                </div>
              </Link>
            </div>

            {/* Checkmarks Row */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-4">
              {[
                "50+ Industry Sectors",
                "97% Client Satisfaction",
                "4200+ Projects"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-zinc-300 text-sm md:text-base font-medium">
                  <CheckCircle2 size={20} strokeWidth={2.5} className="text-fuchsia-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Visuals - Modern Floating Avatars */}
          <div className="relative z-10 w-full lg:w-1/2 h-[400px] flex items-center justify-center mt-8 lg:mt-0">
            {/* Center Main Glow */}
            <div className="absolute w-[300px] h-[300px] bg-fuchsia-500/20 blur-[100px] rounded-full" />
            
            {/* Center Main Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-[6px] border-[#090514] shadow-2xl overflow-hidden z-20">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="Professional Expert" className="w-full h-full object-cover" />
            </div>

            {/* Floating Top Left */}
            <div className="absolute top-4 left-4 md:top-10 md:left-10 w-20 h-20 md:w-24 md:h-24 rounded-full border-[5px] border-[#090514] overflow-hidden z-30 shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" alt="Team member" className="w-full h-full object-cover" />
            </div>

            {/* Floating Bottom Right */}
            <div className="absolute bottom-10 right-4 md:bottom-16 md:right-10 w-16 h-16 md:w-20 md:h-20 rounded-full border-[4px] border-[#090514] overflow-hidden z-30 shadow-xl animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" alt="Team member" className="w-full h-full object-cover" />
            </div>

            {/* Floating Top Right (Small Dot Graphic) */}
            <div className="absolute top-12 right-12 md:top-20 md:right-16 bg-[#090514] p-3 rounded-full shadow-2xl z-10 w-12 h-12 flex items-center justify-center border border-white/10">
              <div className="w-4 h-4 bg-fuchsia-500 rounded-full shadow-[0_0_15px_rgba(217,70,239,0.8)]" />
            </div>

            {/* Review Badge Bottom Left */}
            <div className="absolute bottom-4 left-0 md:-left-4 bg-[#0f0a1d]/80 backdrop-blur-md border border-white/10 p-4 md:p-5 rounded-2xl z-40 shadow-2xl flex flex-col gap-2">
              <div className="flex gap-1 text-fuchsia-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-white font-bold text-[15px]">Rahul B.</p>
                <div className="bg-green-500 rounded-full p-0.5">
                  <CheckCircle2 size={12} className="text-[#090514]" strokeWidth={3} />
                </div>
              </div>
              <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider">Past Marketer</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
