import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <PageWrapper>
      <section className="pt-24 md:pt-30 pb-20 md:pb-32 px-4 md:px-6">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6 text-white mt-8">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-500">Elevate</span> Your Brand?
            </h2>

            <p className="text-base sm:text-lg text-white/60 mb-12 leading-relaxed max-w-xl">
              Have a project in mind? We'd love to hear from you. Let's build something impactful together
              with cutting-edge technology and creative solutions.
            </p>

            {/* CONTACT ITEMS */}
            <div className="space-y-8">

              {/* EMAIL */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-fuchsia-400">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-white/40 text-sm uppercase tracking-wider">Email</p>
                  <p className="text-lg font-semibold">tushxrr001@gmail.com</p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-fuchsia-400">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-white/40 text-sm uppercase tracking-wider">Phone</p>
                  <p className="text-lg font-semibold">
                    +91&nbsp;7489725507
                  </p>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-fuchsia-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-white/40 text-sm uppercase tracking-wider">Location</p>
                  <p className="text-lg font-semibold">Sector 62, Noida, Uttar Pradesh, India</p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="glass rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 md:p-14 relative overflow-hidden">

            {/* Glow Background */}
            <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full top-[-50px] right-[-50px]"></div>

            <form className="space-y-6 relative z-10">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div>
                  <label className="text-xs uppercase tracking-widest text-white/40 mb-2 block">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-fuchsia-500 transition"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-white/40 mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-fuchsia-500 transition"
                  />
                </div>

              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-white/40 mb-2 block">Service</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-fuchsia-500 transition">
                  <option>Web Development</option>
                  <option>Graphic Design</option>
                  <option>Video Editing</option>
                  <option>Full Agency Partnership</option>
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-white/40 mb-2 block">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-fuchsia-500 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-fuchsia-500/30"
              >
                Send Message <Send size={18} />
              </button>

            </form>
          </div>

        </div>

      </section>
    </PageWrapper>
  );
}