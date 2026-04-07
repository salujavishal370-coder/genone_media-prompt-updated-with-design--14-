import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { Play, Palette, Code, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'video',
    title: 'Video Editing',
    icon: Play,
    desc: 'Cinematic storytelling through high-end post-production. We handle everything from color grading to sound design.',
    features: ['Color Grading', 'Sound Design', 'Motion Graphics', 'Visual Effects', 'Commercial Editing'],
    path: '/services/video',
    image: 'https://picsum.photos/seed/video/800/600',
  },
  {
    id: 'design',
    title: 'Graphic Design',
    icon: Palette,
    desc: 'Visual identities that resonate. We create brand systems that are both timeless and cutting-edge.',
    features: ['Brand Identity', 'UI/UX Design', 'Print Media', 'Social Assets', 'Logo Design'],
    path: '/services/design',
    image: 'https://picsum.photos/seed/design/800/600',
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: Code,
    desc: 'High-performance websites built for the modern web. We focus on speed, accessibility, and immersive experiences.',
    features: ['React/Next.js', 'E-commerce', 'Custom CMS', 'Web3 Integration', 'Performance Optimization'],
    path: '/services/web',
    image: 'https://picsum.photos/seed/web/800/600',
  },
];

export default function Services() {
  return (
    <PageWrapper>
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-32">
            <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-12">
              OUR <span                 className="block text-5xl md:text-7xl lg:text-[96px] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 pb-3">SERVICES</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 leading-relaxed">
              We offer a holistic approach to digital creation. From the first frame to the last line of code, 
              we ensure your brand stands out in a crowded digital landscape.
            </p>
          </div>

          <div className="space-y-32">
            {services.map((service, i) => (
              <div key={i} className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
                    <service.icon className="text-accent" size={32} />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">{service.title}</h2>
                  <p className="text-xl text-white/60 mb-12 leading-relaxed">{service.desc}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-white/80">
                        <CheckCircle2 size={18} className="text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-accent transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    Explore {service.title} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="flex-1 relative group">
                  <div className="absolute inset-0 bg-accent/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full rounded-[3rem] relative z-10 border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
