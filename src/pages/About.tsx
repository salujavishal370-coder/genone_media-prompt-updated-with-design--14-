import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Lightbulb, ShieldCheck, Users } from "lucide-react";
import founderImg from '../assets/tusxCroppedImg.webp';

export default function About() {
  return (
    <PageWrapper>
      <section className="pt-24 md:pt-30 pb-20 md:pb-32 px-4 md:px-6">

        {/* ================= HERO SECTION ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16 md:mb-24">

          {/* LEFT CONTENT */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-5 normal-case pl-6 sm:pl-12 md:pl-20 lg:pl-25">
              About Us
            </h1>

            <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-8 pl-6 sm:pl-12 md:pl-20 lg:pl-25 pr-4 sm:pr-10">
              We help businesses build and scale their digital presence with modern web
              development, creative design, and high-quality video solutions — all at a
              competitive cost.
            </p>

            <button className="ml-6 sm:ml-12 md:ml-20 lg:ml-25 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 hover:scale-105 transition-all duration-300">
              Contact Us
            </button>

            <p className="pl-6 sm:pl-12 md:pl-20 lg:pl-25 text-white/40 mt-4 text-sm">
              100% Confidential and Secure
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 w-full">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="Team working"
              className="rounded-[2rem] md:rounded-[3rem] border border-white/10 object-cover w-full h-[250px] sm:h-[350px] md:h-[450px]"
            />
          </div>
        </div>

        {/* ================= TEAM SECTION ================= */}
        <div className="py-12 md:py-15">

          <div className="max-w-4xl mx-auto text-center mb-20 md:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 normal-case">
              Our Team Comprises Experts, Innovators, and Achievers!
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
              We are more than just a development company — we are a team of passionate
              professionals dedicated to building innovative digital solutions.
            </p>
          </div>

          {/* ================= FOUNDER SECTION ================= */}
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">

            {/* LEFT CONTENT */}
            <div className="flex-1 text-center lg:text-left">

              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-6">
                The driving force behind our success is strong leadership and deep
                industry experience. With years of expertise in software development
                and product engineering, our leadership has contributed across multiple
                domains including consultation, system design, business development,
                and innovation.
              </p>

              <p className="text-white/80 font-semibold text-base sm:text-lg mb-8">
                We are committed to delivering high-quality solutions and building
                long-term partnerships with our clients.
              </p>

              <div className="w-16 h-[2px] bg-gradient-to-r from-fuchsia-500 to-indigo-500 mb-6 mx-auto lg:mx-0"></div>

              <p className="text-xl md:text-2xl font-bold normal-case">
                Tushar Saluja
              </p>
              <p className="text-white/50 normal-case">
                Founder & CEO
              </p>

            </div>

            {/* RIGHT IMAGE (FIXED + CLEAN CUTOUT LOOK) */}
            {/* RIGHT IMAGE (CIRCLE CEO IMAGE) */}
            <div className="flex-1 w-full flex justify-center items-center relative">

              {/* Glow Effect */}
              <div className="absolute w-64 h-64 bg-purple-500/20 blur-3xl rounded-full"></div>

              {/* Circle Image Wrapper */}
<div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-white/10 shadow-lg relative z-10">

  <img
    src={founderImg}
    alt="Founder"
    className="w-full h-full object-cover"
  />

</div>

            </div>

          </div>
        </div>

        {/* ================= CORE VALUES ================= */}
        <div className="py-12 md:py-15">

          <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 normal-case">
              Our Core Values
            </h2>
            <p className="text-white/60 text-base sm:text-lg md:text-xl">
              We are committed to delivering reliable, high-quality solutions that create real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">

            <div className="p-6 md:p-10 glass rounded-3xl hover:scale-105 transition-all duration-300">
              <Lightbulb className="text-accent mb-6" size={32} />
              <h3 className="text-lg md:text-xl font-bold mb-4 normal-case">Top Industry Talent</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                We bring together highly skilled professionals who excel in their domains.
                From developers and designers to strategists, every team member is carefully
                selected to ensure quality, innovation, and impactful results for every project.
              </p>
            </div>

            <div className="p-6 md:p-10 glass rounded-3xl hover:scale-105 transition-all duration-300">
              <ShieldCheck className="text-accent mb-6" size={32} />
              <h3 className="text-lg md:text-xl font-bold mb-4 normal-case">Integrity First</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                We believe trust is the foundation of every successful partnership.
                Our work is guided by transparency, honesty, and strong ethical values,
                ensuring consistent delivery and long-term client relationships.
              </p>
            </div>

            <div className="p-6 md:p-10 glass rounded-3xl hover:scale-105 transition-all duration-300">
              <Users className="text-accent mb-6" size={32} />
              <h3 className="text-lg md:text-xl font-bold mb-4 normal-case">Open Work Culture</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                We foster a collaborative and inclusive environment where ideas are valued
                and creativity thrives. Our culture encourages innovation, teamwork, and
                continuous learning to deliver the best outcomes.
              </p>
            </div>

          </div>

        </div>

      </section>
    </PageWrapper>
  );
}