import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-24 px-6 relative z-20 bg-[#090514] overflow-hidden border-t border-white/5">
      {/* Background Glows matching the FAQ flow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-fuchsia-600/10 blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text & Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6 text-white">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-500">Elevate</span> Your Brand?
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
                Drop us a line to discuss your vision. Whether it's cinematic production, high-conversion creatives, or a complete digital overhaul, we're ready to build.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 group-hover:border-fuchsia-500/50 flex items-center justify-center text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors duration-300 shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-1">Email</h4>
                  <p className="text-white text-lg font-medium group-hover:text-fuchsia-300 transition-colors"> genonemedia@gmail.com </p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 group-hover:border-fuchsia-500/50 flex items-center justify-center text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors duration-300 shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-1">Phone</h4>
                  <p className="text-white text-lg font-medium group-hover:text-fuchsia-300 transition-colors">+91&nbsp;94069 50540</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 group-hover:border-fuchsia-500/50 flex items-center justify-center text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors duration-300 shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-1">Studio</h4>
                  <p className="text-white text-lg font-medium group-hover:text-fuchsia-300 transition-colors">Sector 62, Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Component */}
          <div className="bg-[#0f0a1d]/60 border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md relative">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent rounded-3xl pointer-events-none" />
             
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-fuchsia-500/50 focus:bg-black/70 transition-all font-medium placeholder:text-zinc-600" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
                  <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-fuchsia-500/50 focus:bg-black/70 transition-all font-medium placeholder:text-zinc-600" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Service Required</label>
                <div className="relative">
                  <select className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-fuchsia-500/50 focus:bg-black/70 transition-all appearance-none cursor-pointer font-medium">
                    <option className="bg-[#090514] text-white">Video Editing & Reels</option>
                    <option className="bg-[#090514] text-white">Brand Strategy</option>
                    <option className="bg-[#090514] text-white">Web Development</option>
                    <option className="bg-[#090514] text-white">Full Digital Partnership</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none text-[10px]">
                    ▼
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-fuchsia-500/50 focus:bg-black/70 transition-all resize-none font-medium placeholder:text-zinc-600" placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-3 mt-4 group">
                SEND MESSAGE <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
