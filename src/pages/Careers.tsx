import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const jobs = [
  { title: 'Senior Motion Designer', type: 'Full-time', location: 'Remote / Neo City', salary: '$120k - $160k' },
  { title: 'Full Stack Developer', type: 'Full-time', location: 'Remote', salary: '$130k - $180k' },
  { title: 'Creative Director', type: 'Full-time', location: 'Neo City', salary: '$150k - $200k' },
  { title: 'Video Editor', type: 'Contract', location: 'Remote', salary: '$80k - $110k' },
];

export default function Careers() {
  return (
    <PageWrapper>
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-32">
            <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-12">
              JOIN THE <span className="text-accent">ASCENT</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 leading-relaxed">
              We are always looking for visionary creators to join our team. If you're 
              passionate about pushing the boundaries of digital art and technology, 
              we want to hear from you.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <div key={i} className="p-12 glass rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-8 group hover:border-accent/50 transition-colors">
                <div>
                  <h3 className="text-3xl font-display font-bold mb-4">{job.title}</h3>
                  <div className="flex flex-wrap gap-6 text-white/40">
                    <span className="flex items-center gap-2"><Briefcase size={16} /> {job.type}</span>
                    <span className="flex items-center gap-2"><MapPin size={16} /> {job.location}</span>
                    <span className="flex items-center gap-2"><Clock size={16} /> {job.salary}</span>
                  </div>
                </div>
                <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-accent transition-all flex items-center gap-2 group-hover:gap-4">
                  Apply Now <ArrowRight size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-32 p-12 md:p-24 bg-surface rounded-[4rem] text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">DON'T SEE A ROLE?</h2>
            <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
              We're always open to meeting talented individuals. Send us your portfolio 
              and let's see if there's a fit.
            </p>
            <a href="mailto:careers@aether.agency" className="text-accent font-bold text-2xl hover:underline">
              careers@aether.agency
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
