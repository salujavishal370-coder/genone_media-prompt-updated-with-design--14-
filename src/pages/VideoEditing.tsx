import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Play, Film, Scissors, Music, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VideoEditing() {
  return (
    <PageWrapper>
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <p className="text-accent font-bold uppercase tracking-widest mb-6">Service Detail</p>
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-none">
                VIDEO <span className="text-accent">EDITING</span>
              </h1>
              <p className="text-xl text-white/50 mb-12 leading-relaxed">
                We transform raw footage into cinematic masterpieces. Our approach combines technical 
                precision with creative storytelling to deliver content that resonates and engages.
              </p>
              <Link to="/contact" className="px-10 py-4 bg-accent text-black font-bold rounded-full hover:bg-white transition-all duration-300">
                Start Your Video Project
              </Link>
            </div>
            <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 group">
              <img src="https://picsum.photos/seed/edit/1200/800" alt="Video Editing" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                  <Play size={40} fill="white" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            {[
              { icon: Film, title: 'Commercials', desc: 'High-impact edits for brands that want to make a statement.' },
              { icon: Music, title: 'Music Videos', desc: 'Visual rhythms that complement and elevate the auditory experience.' },
              { icon: Scissors, title: 'Post-Production', desc: 'Meticulous attention to detail in every cut, transition, and frame.' },
              { icon: Layers, title: 'Color Grading', desc: 'Creating the perfect mood and atmosphere through expert color work.' },
              { icon: Play, title: 'Social Content', desc: 'Fast-paced, engaging edits optimized for social media platforms.' },
              { icon: Music, title: 'Sound Design', desc: 'Immersive audio landscapes that bring your visuals to life.' },
            ].map((item, i) => (
              <div key={i} className="p-12 glass rounded-3xl">
                <item.icon className="text-accent mb-8" size={40} />
                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-surface rounded-[4rem] p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-12">OUR PROCESS</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {['Discovery', 'Storyboarding', 'Editing', 'Delivery'].map((step, i) => (
                <div key={i} className="relative">
                  <div className="text-8xl font-display font-black text-white/5 absolute -top-12 left-1/2 -translate-x-1/2">0{i+1}</div>
                  <h4 className="text-2xl font-bold relative z-10">{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
