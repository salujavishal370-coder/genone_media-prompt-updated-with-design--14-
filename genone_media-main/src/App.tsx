import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MouseGlow from './components/MouseGlow';

import { lazy, Suspense } from 'react';

// Pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Prompt = lazy(() => import('./pages/Prompt'));
const VideoEditing = lazy(() => import('./pages/VideoEditing'));
const GraphicDesign = lazy(() => import('./pages/GraphicDesign'));
const WebDev = lazy(() => import('./pages/WebDev'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <>
      <MouseGlow />
      <Router>
        <ScrollToTop />
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center bg-[#090514]">
                <div className="w-12 h-12 border-4 border-fuchsia-500/20 border-t-fuchsia-500 rounded-full animate-spin"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/prompt" element={<Prompt />} />
                <Route path="/services/video" element={<VideoEditing />} />
                <Route path="/services/design" element={<GraphicDesign />} />
                <Route path="/services/web" element={<WebDev />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:id" element={<ProjectDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  );
}
