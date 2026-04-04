import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    price: '$2,500',
    desc: 'Perfect for startups and small projects.',
    features: ['1 Video Edit / Month', '5 Graphic Assets', 'Basic Web Support', 'Email Support', '2 Revisions'],
    accent: false,
  },
  {
    name: 'Professional',
    price: '$5,000',
    desc: 'Ideal for growing brands and businesses.',
    features: ['3 Video Edits / Month', '15 Graphic Assets', 'Full Web Maintenance', 'Priority Support', 'Unlimited Revisions', 'Dedicated Manager'],
    accent: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Tailored solutions for large organizations.',
    features: ['Unlimited Video Edits', 'Unlimited Graphics', 'Custom Web Apps', '24/7 Support', 'Strategy Consulting', 'On-site Collaboration'],
    accent: false,
  },
];

export default function Pricing() {
  return (
    <PageWrapper>
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-8">
              SIMPLE <span className="text-accent">PRICING</span>
            </h1>
            <p className="text-xl text-white/50">
              Transparent pricing for exceptional creative services. Choose the plan that 
              best fits your needs and let's start creating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`p-12 rounded-[3rem] border ${plan.accent ? 'border-accent bg-accent/5' : 'border-white/10 glass'} flex flex-col`}
              >
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <p className="text-white/40 text-sm mb-8">{plan.desc}</p>
                <div className="text-5xl font-display font-bold mb-12">{plan.price}<span className="text-sm text-white/30 font-sans">/mo</span></div>
                
                <ul className="space-y-6 mb-12 flex-grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/80">
                      <Check size={18} className="text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-full font-bold text-center transition-all ${plan.accent ? 'bg-accent text-black hover:bg-white' : 'bg-white text-black hover:bg-accent'}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
