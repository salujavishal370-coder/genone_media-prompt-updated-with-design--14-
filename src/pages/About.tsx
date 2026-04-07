import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Users, Target, Zap, Globe } from 'lucide-react';

export default function About() {
  return (
    <PageWrapper>
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-32">
            <h1 className="text-5xl md:text-9xl font-display font-bold tracking-tighter mb-12">
              WE ARE <span className="block text-6xl md:text-8xl lg:text-[96px] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 pb-3">AETHER</span>
            </h1>
            <p className="text-xl md:text-3xl text-white/60 leading-relaxed">
              A collective of designers, developers, and storytellers dedicated to pushing the 
              boundaries of digital creation. We believe in the power of immersive experiences 
              to transform brands and engage audiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <img src="https://picsum.photos/seed/team1/800/600" alt="Team 1" className="rounded-[3rem] border border-white/10" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/team2/800/600" alt="Team 2" className="rounded-[3rem] border border-white/10 md:mt-24" referrerPolicy="no-referrer" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32">
            {[
              { icon: Users, title: 'Collaborative', desc: 'We work closely with our clients to ensure their vision is realized.' },
              { icon: Target, title: 'Strategic', desc: 'Every decision is backed by data and strategic thinking.' },
              { icon: Zap, title: 'Innovative', desc: 'We utilize the latest technologies to stay ahead of the curve.' },
              { icon: Globe, title: 'Global', desc: 'Our team and clients span the globe, bringing diverse perspectives.' },
            ].map((item, i) => (
              <div key={i} className="p-10 glass rounded-3xl">
                <item.icon className="text-accent mb-6" size={32} />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-surface rounded-[4rem] p-12 md:p-24">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 text-center">OUR MISSION</h2>
            <p className="text-2xl md:text-4xl text-center text-white/60 max-w-4xl mx-auto leading-tight">
              "To elevate the digital landscape through exceptional design, cutting-edge technology, 
              and cinematic storytelling."
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
