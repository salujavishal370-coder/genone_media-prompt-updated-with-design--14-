import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

const projectData: Record<string, any> = {
  'neon-genesis': {
    title: 'Neon Genesis',
    category: 'Video / Motion',
    client: 'Cyberdyne Systems',
    year: '2025',
    desc: 'A high-octane music video utilizing advanced motion tracking and 3D environment design.',
    challenge: 'The client needed a visual experience that felt both nostalgic and futuristic, blending 80s synthwave aesthetics with modern high-fidelity rendering.',
    solution: 'We developed a custom pipeline for real-time motion tracking and integrated it with Unreal Engine 5 to create immersive, neon-drenched landscapes.',
    images: ['https://picsum.photos/seed/neon1/1200/800', 'https://picsum.photos/seed/neon2/1200/800', 'https://picsum.photos/seed/neon3/1200/800'],
  },
  'aether-os': {
    title: 'Aether OS',
    category: 'Web / UI',
    client: 'Aether Tech',
    year: '2026',
    desc: 'A futuristic operating system interface designed for high-performance computing.',
    challenge: 'Designing a UI that feels complex yet intuitive, with a focus on data visualization and real-time feedback.',
    solution: 'We utilized glassmorphism and advanced CSS shaders to create a tactile, immersive interface that responds to user input with fluid motion.',
    images: ['https://picsum.photos/seed/os1/1200/800', 'https://picsum.photos/seed/os2/1200/800', 'https://picsum.photos/seed/os3/1200/800'],
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id as string] || projectData['neon-genesis'];

  return (
    <PageWrapper>
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/50 hover:text-accent transition-colors mb-12">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
            <div>
              <p className="text-accent font-bold uppercase tracking-widest mb-6">{project.category}</p>
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-none">
                {project.title}
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-12">
                {project.desc}
              </p>
              
              <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
                <div>
                  <h4 className="text-white/30 uppercase tracking-widest text-xs font-bold mb-2">Client</h4>
                  <p className="text-lg font-bold">{project.client}</p>
                </div>
                <div>
                  <h4 className="text-white/30 uppercase tracking-widest text-xs font-bold mb-2">Year</h4>
                  <p className="text-lg font-bold">{project.year}</p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">The Challenge</h3>
                <p className="text-white/50 leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">The Solution</h3>
                <p className="text-white/50 leading-relaxed">{project.solution}</p>
              </div>
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-accent transition-all flex items-center gap-2">
                Visit Live Site <ExternalLink size={18} />
              </button>
            </div>
          </div>

          <div className="space-y-12">
            {project.images.map((img: string, i: number) => (
              <img
                key={i}
                src={img}
                alt={`${project.title} ${i}`}
                className="w-full rounded-[3rem] border border-white/10"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>

          <div className="mt-32 pt-32 border-t border-white/10 flex justify-between items-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold">NEXT PROJECT</h2>
            <Link to="/portfolio" className="w-24 h-24 rounded-full bg-accent flex items-center justify-center text-black hover:scale-110 transition-transform">
              <ArrowRight size={40} />
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
