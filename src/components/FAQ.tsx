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
    question: "What services do you offer?",
    answer: <>At <Highlight>Genone Media</Highlight>, we provide end-to-end digital solutions including <Highlight>web development, graphic design, video editing, and social media marketing</Highlight>. Our services are designed to help businesses build a strong online presence and scale effectively.</>,
  },
  {
    question: "I'm not good on camera. Will I still be able to do this?",
    answer: <>Absolutely. Our team ensures you feel <Highlight>comfortable and confident</Highlight> throughout the process. We guide you with scripting, delivery, and presentation so you can create content naturally without any pressure.</>,
  },
  {
    question: "I don't know what to talk about or what kind of content will work for me.",
    answer: <>No worries at all. We conduct <Highlight>market research and competitor analysis</Highlight> to create content strategies tailored to your audience. This helps in producing engaging and result-driven content consistently.</>,
  },
  {
    question: "Do you only do video editing, or can you handle web development too?",
    answer: <>We are a complete digital agency. Along with <Highlight>professional video editing and content creation</Highlight>, we also build <Highlight>high-performance, scalable websites and web applications</Highlight> tailored to your business needs.</>,
  },
  {
    question: "How long does a typical project take from start to finish?",
    answer: <>Project timelines depend on the scope and complexity. Video and content projects usually take <Highlight>1–2 weeks</Highlight>, while web development projects may take <Highlight>3–6 weeks</Highlight> depending on requirements.</>,
  },
  {
    question: "What platforms do you optimize the content for?",
    answer: <>We create and optimize content for platforms like <Highlight>Instagram, Facebook, LinkedIn, and YouTube</Highlight>. Each piece of content is tailored to platform-specific formats, trends, and audience behavior.</>,
  },
  {
    question: "How do we track the performance of the campaigns?",
    answer: <>We provide <Highlight>detailed performance reports</Highlight> including reach, engagement, and growth metrics. These insights help us continuously optimize strategies for better results and higher ROI.</>,
  },
  {
    question: "Do you work with international clients?",
    answer: <>Yes, we work with clients globally. Our <Highlight>remote workflow and communication process</Highlight> ensure smooth collaboration for web development, design, and marketing projects worldwide.</>,
  },
  {
    question: "Will I own the rights to all the content and code?",
    answer: <>Yes, once the project is completed and delivered, you get full <Highlight>ownership of all assets</Highlight> including website code, designs, and content. Everything is transferred to you with complete transparency.</>,
  },
  {
    question: "How do we get started with Genone Media?",
    answer: <>Getting started is simple. Just connect with us for a <Highlight>quick consultation</Highlight>, share your requirements, and we’ll provide a customized plan to help you achieve your goals efficiently.</>,
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
                  <h3 className="text-lg md:text-xl font-bold text-white pr-8 tracking-tight normal-case">
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
