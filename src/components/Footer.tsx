import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-white/10 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-display font-bold tracking-tighter mb-8 block">
              Gen One <span className="text-fuchsia-500">Media</span>
            </Link>
            <p className="text-white/50 text-lg max-w-md mb-8">
              Crafting digital excellence through high-end motion, design, and development. 
              We push the boundaries of what's possible in the digital realm.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-fuchsia-500">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/video" className="hover:text-fuchsia-500 transition-colors">Video Editing</Link></li>
              <li><Link to="/services/design" className="hover:text-fuchsia-500 transition-colors">Graphic Design</Link></li>
              <li><Link to="/services/web" className="hover:text-fuchsia-500 transition-colors">Web Development</Link></li>
              <li><Link to="/portfolio" className="hover:text-fuchsia-500 transition-colors">Motion Graphics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-fuchsia-500">Agency</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-fuchsia-500 transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="hover:text-fuchsia-500 transition-colors">Testimonials</Link></li>
              <li><Link to="/careers" className="hover:text-fuchsia-500 transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-fuchsia-500 transition-colors">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-fuchsia-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-white/30 text-sm">
            © 2026 Gen One Media. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-white/30">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
