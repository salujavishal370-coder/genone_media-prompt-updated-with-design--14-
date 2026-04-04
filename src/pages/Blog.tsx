import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

const posts = [
  { id: 1, title: 'The Future of Immersive Web Design', date: 'March 15, 2026', author: 'Alex Rivera', category: 'Tech', image: 'https://picsum.photos/seed/blog1/800/600' },
  { id: 2, title: 'Mastering Cinematic Color Grading', date: 'March 10, 2026', author: 'Sarah Chen', category: 'Video', image: 'https://picsum.photos/seed/blog2/800/600' },
  { id: 3, title: 'Building Brand Systems that Last', date: 'March 05, 2026', author: 'Marcus Thorne', category: 'Design', image: 'https://picsum.photos/seed/blog3/800/600' },
  { id: 4, title: 'The Rise of AI in Creative Post-Production', date: 'Feb 28, 2026', author: 'Alex Rivera', category: 'Video', image: 'https://picsum.photos/seed/blog4/800/600' },
];

export default function Blog() {
  return (
    <PageWrapper>
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24">
            <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-8">
              JOURNAL<span className="text-accent">.</span>
            </h1>
            <p className="text-xl text-white/50">
              Insights, thoughts, and updates from the Aether team. We share our 
              knowledge and experiences in the creative industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group block">
                <div className="aspect-video rounded-[3rem] overflow-hidden mb-8 border border-white/10 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 px-4 py-1 bg-accent text-black text-xs font-bold rounded-full uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="flex gap-6 text-white/30 text-sm mb-4">
                  <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-2"><User size={14} /> {post.author}</span>
                </div>
                <h3 className="text-3xl font-display font-bold mb-6 group-hover:text-accent transition-colors">{post.title}</h3>
                <div className="inline-flex items-center gap-2 font-bold text-accent group-hover:gap-4 transition-all">
                  Read Article <ArrowRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
