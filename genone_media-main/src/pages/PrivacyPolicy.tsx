import React from 'react';
import PageWrapper from '../components/PageWrapper';

export default function PrivacyPolicy() {
  return (
    <PageWrapper>
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-24">
            PRIVACY <span className="text-accent">POLICY</span>
          </h1>
          
          <div className="space-y-12 text-white/60 text-lg leading-relaxed">
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create or modify your account, 
                request on-demand services, contact customer support, or otherwise communicate with us. 
                This information may include: name, email, phone number, postal address, profile picture, 
                payment method, and other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, 
                such as to facilitate payments, send receipts, provide products and services you request 
                (and send related information), develop new features, provide customer support, 
                and send administrative and promotional communications.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">3. Sharing of Information</h2>
              <p>
                We may share the information we collect about you as described in this statement or 
                as described at the time of collection or sharing, including with third-party service 
                providers who perform services on our behalf.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">4. Your Choices</h2>
              <p>
                You may update, correct, or delete information about you at any time by logging into 
                your online account or by emailing us. Please note that we may retain certain 
                information as required by law or for legitimate business purposes.
              </p>
            </section>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
