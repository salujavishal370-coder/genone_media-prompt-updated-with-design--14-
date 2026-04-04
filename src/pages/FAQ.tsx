import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: 'How long does a typical project take?', a: 'Project timelines vary depending on the scope. A simple video edit might take 3-5 days, while a full web development project can take 4-8 weeks.' },
  { q: 'Do you offer custom packages?', a: 'Yes, we specialize in creating custom solutions tailored to your specific needs and goals. Contact us for a bespoke quote.' },
  { q: 'What is your revision policy?', a: 'We offer a set number of revisions depending on your plan. Our goal is to ensure you are 100% satisfied with the final result.' },
  { q: 'Can you work with existing brand guidelines?', a: 'Absolutely. We are experts at integrating with and elevating existing brand systems while maintaining consistency.' },
  { q: 'What technologies do you use for web development?', a: 'We primarily use React, Next.js, and Tailwind CSS for high-performance, modern web experiences.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageWrapper>
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-24 text-center">
            QUESTIONS<span className="text-accent">?</span>
          </h1>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="glass rounded-3xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-8 flex justify-between items-center text-left"
                >
                  <span className="text-2xl font-display font-bold">{faq.q}</span>
                  {openIndex === i ? <Minus className="text-accent" /> : <Plus className="text-accent" />}
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <p className="text-white/50 text-lg leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
