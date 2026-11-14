import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Code, Globe, Zap, Shield, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebDev() {
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
                Web{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400">
                  Development
                </span>
              </h1>

              <p className="text-white/60 text-base md:text-lg mb-8 leading-relaxed">
                We build fast, scalable, and high-performance web applications using modern
                technologies. From business websites to complex platforms, we deliver
                seamless digital experiences.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-fuchsia-500/30 hover:scale-105 transition-all duration-300"
              >
                Start Your Web Project
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative group">

              {/* Glow */}
              <div className="absolute inset-0 bg-purple-500/20 blur-[80px] opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
                alt="Web Development"
                className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-[2rem] md:rounded-[3rem] border border-white/10 grayscale-0 group-hover:grayscale transition duration-500"
              />
            </div>

          </div>

          {/* ================= CODE PREVIEW (BETTER UI) ================= */}
          <div className="relative mb-20 md:mb-28">

            <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-[2rem]"></div>

            <div className="relative glass rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 border border-white/10">

              {/* TOP DOTS */}
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* CODE */}
              <div className="space-y-3 font-mono text-sm md:text-base text-white/50">
                <p className="text-fuchsia-400">const product = buildApp();</p>
                <p>product.features = {'{'}</p>
                <p className="pl-4">performance: "high",</p>
                <p className="pl-4">scalability: "infinite",</p>
                <p className="pl-4">design: "modern"</p>
                <p>{'}'};</p>
              </div>

            </div>

          </div>

          {/* ================= SERVICES GRID ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

            {[
              {
                icon: Code,
                title: 'React / Next.js',
                desc: 'Modern frameworks for building fast, SEO-friendly, and scalable web applications.'
              },
              {
                icon: Zap,
                title: 'Performance',
                desc: 'Optimized architecture ensuring lightning-fast load times and smooth experience.'
              },
              {
                icon: Globe,
                title: 'API & Integrations',
                desc: 'Seamless integration with third-party services, APIs, and backend systems.'
              },
              {
                icon: Smartphone,
                title: 'Responsive Design',
                desc: 'Mobile-first approach ensuring perfect experience across all devices.'
              },
              {
                icon: Shield,
                title: 'Security',
                desc: 'Secure coding practices to protect your application and user data.'
              },
              {
                icon: Code,
                title: 'Custom Solutions',
                desc: 'Tailored development based on your business needs and scalability goals.'
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

        </div>
      </section>
    </PageWrapper>
  );
}