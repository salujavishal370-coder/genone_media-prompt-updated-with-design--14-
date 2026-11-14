import React, { useMemo, useState } from 'react';
import { ArrowUpRight, Copy, Search, X, Check } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

type PromptCategory = 'Astrology' | 'Fitness' | 'Diet' | 'Marketing';

type PromptItem = {
  title: string;
  category: PromptCategory;
  description: string;
  image: string;
  prompt: string;
};

const prompts: PromptItem[] = [
  {
    title: 'Astrology',
    category: 'Astrology',
    description: 'Horoscope and zodiac prompts',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=85',
    prompt: 'Act as an experienced Vedic astrologer. Create a clear, thoughtful horoscope reading based on the birth details I provide. Explain the key themes, opportunities and challenges in simple language. Ask me for any missing birth details before beginning.'
  },
  {
    title: 'Fitness',
    category: 'Fitness',
    description: 'Workout and muscle gain',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=85',
    prompt: 'Act as a certified fitness coach. Build a practical workout plan based on my goal, experience, available equipment and weekly schedule. Include exercises, sets, reps, rest times and a simple progression plan. Ask for my details before creating the plan.'
  },
  {
    title: 'Diet Plan',
    category: 'Diet',
    description: 'Healthy meal planning',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85',
    prompt: 'Act as a nutrition planner. Create a balanced, realistic meal plan based on my goal, food preferences, budget and daily routine. Include meal timings, approximate calories and protein, plus easy alternatives. Ask about allergies and dietary restrictions first.'
  },
  {
    title: 'Marketing',
    category: 'Marketing',
    description: 'Ads and business growth',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85',
    prompt: 'Act as a digital marketing strategist. Create a practical growth strategy for my business using the target audience, offer, budget and platform I provide. Include content ideas, campaign structure, hooks, calls to action and measurable KPIs. Ask for any missing business details.'
  }
];

const categories = ['All', 'Astrology', 'Fitness', 'Diet', 'Marketing'] as const;

export default function Prompt() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');
  const [search, setSearch] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState<PromptItem | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredPrompts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return prompts.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = !query || `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const copyPrompt = async () => {
    if (!selectedPrompt) return;
    try {
      await navigator.clipboard.writeText(selectedPrompt.prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <PageWrapper>
      <section className="relative min-h-screen bg-[#090e1d] px-4 pb-24 pt-32 text-white sm:px-6 md:pt-40">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 border-t border-white/15 pt-14 text-center sm:mb-14 sm:pt-16">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-violet-400">GenOne Media</p>
            <h1 className="mb-4 text-4xl font-bold normal-case tracking-tight text-white sm:text-5xl md:text-6xl">
              Explore AI Prompts
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Your creativity starts with the right prompt.
            </p>
          </div>

          <div className="mx-auto mb-9 max-w-4xl">
            <label className="flex h-16 items-center gap-4 rounded-2xl border border-white/[0.04] bg-[#1b2235] px-5 transition focus-within:border-violet-400/50">
              <Search className="h-6 w-6 shrink-0 text-violet-300" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search prompts..."
                aria-label="Search prompts"
                className="h-full w-full bg-transparent text-base text-white outline-none placeholder:text-slate-400 sm:text-lg"
              />
            </label>
          </div>

          <div className="mb-8 flex flex-wrap gap-2.5 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition sm:text-base ${
                  activeCategory === category
                    ? 'bg-violet-500/20 text-violet-300 ring-1 ring-violet-400/20'
                    : 'bg-[#20283a] text-slate-200 hover:bg-[#30394f]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredPrompts.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredPrompts.map((item) => (
                <article key={item.title} className="group min-w-0">
                  <div className="mb-5 aspect-[1.55/1] overflow-hidden rounded-[1.35rem] bg-[#1b2235]">
                    <img
                      src={item.image}
                      alt={`${item.title} prompt category`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="mb-1 text-2xl font-bold normal-case tracking-tight text-slate-100">{item.title}</h2>
                  <p className="mb-4 text-base leading-relaxed text-slate-400">{item.description}</p>
                  <button
                    type="button"
                    onClick={() => setSelectedPrompt(item)}
                    className="inline-flex items-center gap-2 rounded-full bg-violet-500/15 px-4 py-2 text-sm font-semibold text-violet-300 transition hover:bg-violet-500/25 hover:text-violet-200"
                  >
                    Get Prompt <ArrowUpRight className="h-4 w-4" />
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-[#151c2e] px-6 py-14 text-center">
              <p className="text-lg font-semibold text-white">No prompts found</p>
              <p className="mt-2 text-sm text-slate-400">Try another search term or select a different category.</p>
              <button
                type="button"
                onClick={() => { setSearch(''); setActiveCategory('All'); }}
                className="mt-5 rounded-full bg-violet-500/15 px-4 py-2 text-sm font-semibold text-violet-300 hover:bg-violet-500/25"
              >
                Clear filters
              </button>
            </div>
          )}

          <div className="mt-14 rounded-3xl border border-violet-300/10 bg-gradient-to-br from-[#1b2040] to-[#151a30] p-7 sm:p-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-violet-300">Create something amazing</p>
            <h2 className="mb-3 text-2xl font-bold normal-case tracking-tight text-white sm:text-3xl">The right prompt changes everything.</h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Choose a category, explore the prompts and use them as a starting point for your next idea.
            </p>
          </div>
        </div>

        {selectedPrompt && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="prompt-dialog-title"
            onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedPrompt(null); }}
          >
            <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#11182a] p-6 shadow-2xl sm:p-8">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-300">{selectedPrompt.category}</p>
                  <h2 id="prompt-dialog-title" className="text-2xl font-bold normal-case tracking-tight text-white">Your {selectedPrompt.title} Prompt</h2>
                </div>
                <button type="button" onClick={() => setSelectedPrompt(null)} aria-label="Close prompt" className="rounded-full p-2 text-slate-400 transition hover:bg-white/10 hover:text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="max-h-[45vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#090e1d] p-5 text-sm leading-7 text-slate-300">
                {selectedPrompt.prompt}
              </div>
              <div className="mt-5 flex flex-wrap justify-end gap-3">
                <button type="button" onClick={() => setSelectedPrompt(null)} className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/5">
                  Close
                </button>
                <button type="button" onClick={copyPrompt} className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Copied!' : 'Copy Prompt'}
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </PageWrapper>
  );
}
