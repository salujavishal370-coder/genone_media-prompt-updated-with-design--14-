import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

const posts: Record<string, any> = {
  '1': {
    title: 'The Future of Immersive Web Design',
    date: 'March 15, 2026',
    author: 'Alex Rivera',
    category: 'Tech',
    image: 'https://picsum.photos/seed/blog1/1200/800',
    content: `
      The web is evolving. No longer are we satisfied with static pages and simple grids. 
      The future of web design lies in immersion—creating digital spaces that feel tactile, 
      responsive, and alive.

      At Aether, we've been experimenting with advanced CSS shaders, WebGL, and 
      highly-performant motion systems to bridge the gap between traditional UI 
      and interactive art.

      Key trends we're watching:
      1. Glassmorphism 2.0: Beyond simple blurs.
      2. Kinetic Typography: Text that responds to user presence.
      3. Anti-gravity Motion: Breaking the traditional scroll-down paradigm.
    `,
  },
};

export default function BlogPost() {
  const { id } = useParams();
  const post = posts[id as string] || posts['1'];

  return (
    <PageWrapper>
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-accent transition-colors mb-12">
            <ArrowLeft size={20} /> Back to Journal
          </Link>

          <p className="text-accent font-bold uppercase tracking-widest mb-6">{post.category}</p>
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-12 leading-none">
            {post.title}
          </h1>

          <div className="flex flex-wrap justify-between items-center gap-6 mb-12 py-8 border-y border-white/10">
            <div className="flex gap-8">
              <span className="flex items-center gap-2 text-white/50"><Calendar size={18} /> {post.date}</span>
              <span className="flex items-center gap-2 text-white/50"><User size={18} /> {post.author}</span>
            </div>
            <button className="flex items-center gap-2 text-accent font-bold hover:text-white transition-colors">
              <Share2 size={18} /> Share Article
            </button>
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-[3rem] border border-white/10 mb-16"
            referrerPolicy="no-referrer"
          />

          <div className="prose prose-invert prose-xl max-w-none text-white/70 leading-relaxed whitespace-pre-line">
            {post.content}
          </div>

          <div className="mt-24 p-12 glass rounded-[3rem] text-center">
            <h3 className="text-3xl font-display font-bold mb-6">SUBSCRIBE TO OUR JOURNAL</h3>
            <p className="text-white/50 mb-8">Get the latest insights and updates delivered to your inbox.</p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input type="email" className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-accent" placeholder="your@email.com" />
              <button className="px-8 py-4 bg-accent text-black font-bold rounded-full hover:bg-white transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
