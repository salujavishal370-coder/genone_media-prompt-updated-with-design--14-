import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Play, Palette, Code, ArrowRight, CheckCircle2, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'video',
    title: 'Video Editing',
    icon: Play,
    desc: 'Cinematic storytelling with high-end post-production. From raw footage to final cut, we craft engaging visual experiences.',
    features: ['Color Grading', 'Sound Design', 'Motion Graphics', 'Visual Effects', 'Commercial Editing'],
    path: '/services/video',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop', // video editing setup
  },
  {
    id: 'design',
    title: 'Graphic Design',
    icon: Palette,
    desc: 'Creative visuals that define your brand identity and leave a lasting impression across all platforms.',
    features: ['Brand Identity', 'UI/UX Design', 'Print Media', 'Social Assets', 'Logo Design'],
    path: '/services/design',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop', // design workspace
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: Code,
    desc: 'High-performance websites built with modern technologies focusing on speed, scalability, and user experience.',
    features: ['React/Next.js', 'E-commerce', 'Custom CMS', 'API Integration', 'Performance Optimization'],
    path: '/services/web',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop', // coding laptop
  },
  {
    id: 'social',
    title: 'Social Media Management',
    icon: Share2,
    desc: 'Grow your brand presence across social platforms with strategic content, consistent engagement, and data-driven campaigns.',
    features: [
      'Content Strategy',
      'Post Designing',
      'Instagram Growth',
      'Ad Campaigns',
      'Analytics & Reporting'
    ],
    path: '/services/social',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200&auto=format&fit=crop', // social media apps
  },
];

export default function Services() {
  return (
    <PageWrapper>
      <section className="pt-24 md:pt-32 pb-20 md:pb-32 px-4 md:px-6">

        <div className="max-w-7xl mx-auto">

          {/* ================= HEADER ================= */}
          <div className="max-w-3xl mb-16 md:mb-24 mt-12">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-display font-bold tracking-tight mb-6">
              Our{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400">
                Services
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
              We deliver end-to-end digital solutions — from creative design to
              powerful web development and cinematic video production.
            </p>
          </div>

          {/* ================= SERVICES ================= */}
          <div className="space-y-16 md:space-y-28">

            {services.map((service, i) => (
              <div
                key={i}
                className={`flex flex-col lg:flex-row items-center gap-10 md:gap-16 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >

                {/* LEFT CONTENT */}
                <div className="flex-1">

                  {/* ICON (UPDATED THEME STYLE) */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 
                    bg-gradient-to-r from-fuchsia-600/20 to-purple-600/20 
                    border border-white/10 backdrop-blur-md 
                    shadow-lg shadow-fuchsia-500/10 
                    group hover:shadow-fuchsia-500/30 transition duration-300">

                    <service.icon
                      className="text-fuchsia-500 group-hover:scale-110 transition-transform duration-300"
                      size={28}
                    />
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4">
                    {service.title}
                  </h2>

                  <p className="text-white/60 text-base md:text-lg mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* FEATURES */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-white/80 text-sm">
                        <CheckCircle2 size={16} className="text-fuchsia-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* BUTTON */}
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 px-6 py-3 
                    bg-gradient-to-r from-fuchsia-600 to-purple-600 
                    text-white font-semibold rounded-full 
                    shadow-lg shadow-fuchsia-500/30 
                    hover:scale-105 transition-all duration-300"
                  >
                    Explore {service.title}
                    <ArrowRight size={18} />
                  </Link>

                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-1 w-full relative group">

                  {/* Glow */}
                  <div className="absolute inset-0 bg-purple-500/20 blur-[80px] opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full rounded-[2rem] md:rounded-[3rem] border border-white/10 object-cover relative z-10 grayscale-0 hover:grayscale transition duration-500"
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