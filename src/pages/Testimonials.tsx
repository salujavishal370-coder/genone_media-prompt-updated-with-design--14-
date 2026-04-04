import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'James Wilson', role: 'CEO, TechFlow', text: 'Aether transformed our brand identity into something truly extraordinary. Their attention to detail and creative vision is unmatched.', image: 'https://picsum.photos/seed/user1/200/200' },
  { name: 'Elena Rodriguez', role: 'Marketing Director, Lumina', text: 'The video editing work Aether provided for our latest campaign was cinematic and high-impact. They truly understand storytelling.', image: 'https://picsum.photos/seed/user2/200/200' },
  { name: 'David Park', role: 'Founder, Nexus OS', text: 'Our new website is a masterpiece. The performance and motion design have significantly increased our user engagement.', image: 'https://picsum.photos/seed/user3/200/200' },
  { name: 'Sophia Thorne', role: 'Creative Lead, Vanguard', text: 'Working with Aether is a seamless experience. They are professional, innovative, and always deliver beyond expectations.', image: 'https://picsum.photos/seed/user4/200/200' },
];

export default function Testimonials() {
  return (
    <PageWrapper>
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-24 text-center">
            CLIENT <span className="text-accent">VOICES</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((t, i) => (
              <div key={i} className="p-12 glass rounded-[3rem] relative">
                <Quote className="text-accent/20 absolute top-12 right-12" size={80} />
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="#00ffcc" className="text-accent" />)}
                </div>
                <p className="text-2xl text-white/80 mb-12 leading-relaxed italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-6">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full border border-accent/30" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="text-xl font-bold">{t.name}</h4>
                    <p className="text-white/40 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
