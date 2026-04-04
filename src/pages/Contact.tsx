import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <PageWrapper>
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-12">
                LET'S <span className="text-accent">TALK</span>
              </h1>
              <p className="text-xl text-white/50 mb-12 leading-relaxed">
                Have a project in mind? We'd love to hear from you. Reach out to us 
                and let's create something extraordinary together.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white/30 uppercase tracking-widest text-xs font-bold mb-1">Email</h4>
                    <p className="text-xl font-bold">hello@aether.agency</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white/30 uppercase tracking-widest text-xs font-bold mb-1">Phone</h4>
                    <p className="text-xl font-bold">+1 (555) 000-AETHER</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white/30 uppercase tracking-widest text-xs font-bold mb-1">Studio</h4>
                    <p className="text-xl font-bold">123 Digital Way, Neo City, NC 90210</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-[3rem] p-12 md:p-16">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-white/40">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-white/40">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-white/40">Service</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option>Video Editing</option>
                    <option>Graphic Design</option>
                    <option>Web Development</option>
                    <option>Full Agency Partnership</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-white/40">Message</label>
                  <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="w-full py-6 bg-accent text-black font-black text-xl rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center gap-3">
                  SEND MESSAGE <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
