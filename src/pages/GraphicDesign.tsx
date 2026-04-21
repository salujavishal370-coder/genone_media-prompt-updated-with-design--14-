import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Palette, Layers, Image, Type, Box, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GraphicDesign() {
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
                Graphic{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400">
                  Design
                </span>
              </h1>

              <p className="text-white/60 text-base md:text-lg mb-8 leading-relaxed">
                We design visual identities that not only look stunning but also communicate
                your brand’s story effectively. From logos to full brand systems, we create
                impactful digital experiences.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-fuchsia-500/30 hover:scale-105 transition-all duration-300"
              >
                Start Your Design Project
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* RIGHT IMAGES */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">

              <img
                src="https://images.unsplash.com/photo-1626785774625-2a0a6f7b3f9d?q=80&w=800&auto=format&fit=crop"
                alt="Brand Design"
                className="w-full h-[220px] sm:h-[300px] object-cover rounded-[2rem] border border-white/10 grayscale-0 hover:grayscale transition duration-500"
              />

              <img
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop"
                alt="UI Design"
                className="w-full h-[220px] sm:h-[300px] object-cover rounded-[2rem] border border-white/10 mt-8 md:mt-12 grayscale-0 hover:grayscale transition duration-500"
              />

            </div>
          </div>

          {/* ================= SERVICES GRID ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mb-20 md:mb-28">

            {[
              {
                icon: Palette,
                title: 'Brand Identity',
                desc: 'We craft unique brand identities that reflect your vision and create a lasting impression in the market.'
              },
              {
                icon: Type,
                title: 'Typography',
                desc: 'Custom typography and font systems that enhance readability and visual storytelling.'
              },
              {
                icon: Box,
                title: 'Packaging Design',
                desc: 'Attractive and functional packaging designs that elevate your product presence.'
              },
              {
                icon: Image,
                title: 'Digital Assets',
                desc: 'High-quality graphics for social media, ads, banners, and all digital platforms.'
              },
              {
                icon: Layers,
                title: 'UI/UX Design',
                desc: 'User-centric designs focused on usability, performance, and seamless experience.'
              },
              {
                icon: Palette,
                title: 'Illustration',
                desc: 'Custom illustrations and creative visuals to make your brand stand out uniquely.'
              },
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

          {/* ================= EXTRA CTA ================= */}
          <div className="text-center bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[3rem] p-10 md:p-16">

            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Let’s Build Your Brand
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto mb-8 text-base md:text-lg">
              Whether you're starting fresh or scaling your brand, we help you design
              visuals that connect, convert, and stand out.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-fuchsia-500/30 hover:scale-105 transition-all duration-300"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>
    </PageWrapper>
  );
}