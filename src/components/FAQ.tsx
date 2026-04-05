import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-500 font-semibold drop-shadow-sm">
    {children}
  </span>
);

const faqs = [
  {
    question: "I don't have time to shoot content every week. How will this work for me?",
    answer: <>You don't have to. We shoot all your reels for the month in just <Highlight>two dedicated studio days</Highlight>. Everything—from <Highlight>setup to direction</Highlight> is handled by our team.</>,
  },
  {
    question: "I'm not good on camera. Will I still be able to do this?",
    answer: <>Absolutely. Our directors specialize in making you feel <Highlight>comfortable and confident</Highlight>. We guide you through every line delivery, body language cue, and script pacing.</>,
  },
  {
    question: "I don't know what to talk about or what kind of content will work for me.",
    answer: <>That's exactly what we're here for. We conduct deep <Highlight>market and competitor research</Highlight> to script highly engaging content tailored specifically to your target audience.</>,
  },
  {
    question: "Do you only do video editing, or can you handle web development too?",
    answer: <>We are a full-scale digital agency. We handle everything from <Highlight>cinematic video production</Highlight> and social media management to building <Highlight>high-performance web applications</Highlight>.</>,
  },
  {
    question: "How long does a typical project take from start to finish?",
    answer: <>Project timelines vary. Content batches usually take <Highlight>1-2 weeks</Highlight> post-shoot, while comprehensive web development projects can take <Highlight>4-8 weeks</Highlight> depending on complexity.</>,
  },
  {
    question: "What platforms do you optimize the content for?",
    answer: <>We tailor content natively for <Highlight>Instagram Reels, TikTok, YouTube Shorts, and LinkedIn</Highlight>, ensuring correct aspect ratios, safe zones, and platform-specific trends.</>,
  },
  {
    question: "How do we track the performance of the campaigns?",
    answer: <>We provide <Highlight>detailed monthly analytics reporting</Highlight> covering reach, engagement, conversion metrics, and actionable insights to refine our ongoing strategy.</>,
  },
  {
    question: "Do you work with international clients?",
    answer: <>Yes! While our shoots are localized, our <Highlight>post-production, web development, and strategy services</Highlight> are available to clients globally via seamless remote workflows.</>,
  },
  {
    question: "Will I own the rights to all the content and code?",
    answer: <>100%. Once the project is fully handed over and payments are cleared, all <Highlight>intellectual property rights</Highlight> for the produced assets are transferred directly to you.</>,
  },
  {
    question: "How do we get started with Aether?",
    answer: <>Simply book a <Highlight>discovery call</Highlight> with us. We'll audit your current digital presence, understand your goals, and propose a highly customized execution plan.</>,
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 relative z-20 bg-[#090514] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[150px] pointer-events-none -translate-x-1/2 rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3 rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-500">Questions</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            Everything you need to know about our service
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={false}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all duration-300",
                  isOpen 
                    ? "border-fuchsia-500/50 shadow-[0_0_30px_rgba(217,70,239,0.05)] bg-white/[0.03]" 
                    : "border-fuchsia-500/10 bg-transparent hover:border-fuchsia-500/30 hover:bg-white/[0.01]"
                )}
              >
                <button
                  className="w-full px-6 py-6 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg md:text-xl font-bold text-white pr-8 tracking-tight">
                    {faq.question}
                  </h3>
                  <div 
                    className={cn(
                      "flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] text-fuchsia-500",
                      isOpen && "rotate-180"
                    )}
                  >
                    <ChevronDown size={24} strokeWidth={2.5} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="px-6 pb-6 pt-0 md:px-8 text-zinc-400 leading-relaxed md:text-[17px]">
                        <div className="pt-4 border-t border-white/5">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
