import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Play, Film, Scissors, Music, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VideoEditing() {
  return (
    <PageWrapper>
      <section className="pt-24 md:pt-32 pb-20 md:pb-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">

          {/* ================= HERO ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 md:mb-28">

            {/* LEFT */}
            <div>
              <p className="text-fuchsia-400 font-semibold uppercase tracking-widest mb-4 text-sm">
                Service Detail
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                Video{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400">
                  Editing
                </span>
              </h1>

              <p className="text-white/60 text-base md:text-lg mb-8 leading-relaxed">
                We transform raw footage into cinematic masterpieces. Our approach combines
                technical precision with creative storytelling to deliver content that
                resonates and engages.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-fuchsia-500/30 hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative group">

              {/* Glow */}
              <div className="absolute inset-0 bg-purple-500/20 blur-[80px] opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop"
                  alt="Video Editing"
                  className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover"
                />
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:scale-110 transition cursor-pointer">
                  <Play size={28} className="text-white" />
                </div>
              </div>

            </div>
          </div>

          {/* ================= SERVICES GRID ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mb-20 md:mb-28">

            {[
              { icon: Film, title: 'Commercials', desc: 'High-impact edits for brands that want to make a strong impression and drive engagement.' },
              { icon: Music, title: 'Music Videos', desc: 'Creative storytelling synced with rhythm to enhance the emotional experience.' },
              { icon: Scissors, title: 'Post-Production', desc: 'Precision editing with seamless transitions, effects, and storytelling flow.' },
              { icon: Layers, title: 'Color Grading', desc: 'Professional color correction to set the perfect tone and visual consistency.' },
              { icon: Play, title: 'Social Content', desc: 'Short-form engaging videos optimized for Instagram, YouTube, and reels.' },
              { icon: Music, title: 'Sound Design', desc: 'Immersive audio enhancements to elevate your video content experience.' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 md:p-10 glass rounded-3xl hover:scale-105 transition-all duration-300"
              >
                <item.icon className="text-fuchsia-400 mb-6" size={30} />
                <h3 className="text-lg md:text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}

          </div>

          {/* ================= PROCESS ================= */}
          <div className="bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[3rem] p-10 md:p-16 text-center">

            <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">
              Our Process
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

              {['Discovery', 'Storyboarding', 'Editing', 'Delivery'].map((step, i) => (
                <div key={i} className="relative">

                  <div className="text-5xl md:text-6xl font-bold text-white/10 absolute -top-6 left-1/2 -translate-x-1/2">
                    0{i + 1}
                  </div>

                  <h4 className="text-base md:text-lg font-semibold relative z-10">
                    {step}
                  </h4>

                </div>
              ))}

            </div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}