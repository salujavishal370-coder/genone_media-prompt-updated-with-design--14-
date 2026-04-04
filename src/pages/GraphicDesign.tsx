import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Palette, Layers, Image, Type, Box, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GraphicDesign() {
  return (
    <PageWrapper>
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <p className="text-accent font-bold uppercase tracking-widest mb-6">Service Detail</p>
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-none">
                GRAPHIC <span className="text-accent">DESIGN</span>
              </h1>
              <p className="text-xl text-white/50 mb-12 leading-relaxed">
                We design visual languages that speak volumes. From brand identities to digital assets, 
                our work is crafted to be both aesthetically stunning and strategically effective.
              </p>
              <Link to="/contact" className="px-10 py-4 bg-accent text-black font-bold rounded-full hover:bg-white transition-all duration-300">
                Start Your Design Project
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img src="https://picsum.photos/seed/design1/600/800" alt="Design 1" className="w-full rounded-3xl border border-white/10" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/design2/600/800" alt="Design 2" className="w-full rounded-3xl border border-white/10 mt-12" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            {[
              { icon: Palette, title: 'Brand Identity', desc: 'Comprehensive visual systems that define your brand essence.' },
              { icon: Type, title: 'Typography', desc: 'Custom lettering and typographic systems that command attention.' },
              { icon: Box, title: 'Packaging', desc: 'Tactile experiences that bridge the gap between product and consumer.' },
              { icon: Image, title: 'Digital Assets', desc: 'High-fidelity graphics for social media, ads, and web content.' },
              { icon: Layers, title: 'UI/UX Design', desc: 'Intuitive interfaces that prioritize user experience and aesthetic.' },
              { icon: Palette, title: 'Illustration', desc: 'Bespoke visual elements that add a unique touch to your brand.' },
            ].map((item, i) => (
              <div key={i} className="p-12 glass rounded-3xl">
                <item.icon className="text-accent mb-8" size={40} />
                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
