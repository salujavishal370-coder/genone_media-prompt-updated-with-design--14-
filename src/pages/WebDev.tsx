import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Code, Globe, Zap, Shield, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebDev() {
  return (
    <PageWrapper>
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <p className="text-accent font-bold uppercase tracking-widest mb-6">Service Detail</p>
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-none">
                WEB <span className="text-accent">DEV</span>
              </h1>
              <p className="text-xl text-white/50 mb-12 leading-relaxed">
                We build the future of the web. Our development team specializes in high-performance, 
                immersive web experiences that push the boundaries of what's possible.
              </p>
              <Link to="/contact" className="px-10 py-4 bg-accent text-black font-bold rounded-full hover:bg-white transition-all duration-300">
                Start Your Web Project
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full" />
              <div className="relative glass rounded-[3rem] p-8 border border-white/20">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4 font-mono text-sm text-white/40">
                  <p className="text-accent">const agency = new Aether();</p>
                  <p>agency.build({'{'}</p>
                  <p className="pl-4">performance: 'extreme',</p>
                  <p className="pl-4">motion: 'anti-gravity',</p>
                  <p className="pl-4">design: 'high-end'</p>
                  <p>{'})'};</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            {[
              { icon: Code, title: 'React / Next.js', desc: 'Modern frameworks for fast, SEO-friendly web applications.' },
              { icon: Zap, title: 'Performance', desc: 'Optimized code that ensures lightning-fast load times.' },
              { icon: Globe, title: 'Web3', desc: 'Integration with blockchain technologies and decentralized systems.' },
              { icon: Smartphone, title: 'Responsive', desc: 'Seamless experiences across all devices and screen sizes.' },
              { icon: Shield, title: 'Security', desc: 'Robust security measures to protect your data and users.' },
              { icon: Code, title: 'Custom CMS', desc: 'Tailored content management systems for your specific needs.' },
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
