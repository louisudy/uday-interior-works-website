
import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import AIAssistant from './components/AIAssistant';
import NewsSection from './components/NewsSection';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Loader2 } from 'lucide-react';

// Lazy load secondary pages to optimize the main bundle
const ServiceDetail = lazy(() => import('./components/ServiceDetail'));
const QuoteForm = lazy(() => import('./components/QuoteForm'));

/**
 * Loading Spinner for Lazy Components
 */
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="animate-spin text-amber-600" size={40} />
      <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Loading Studio Assets...</span>
    </div>
  </div>
);

/**
 * Enhanced Scroll Management
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
};

/**
 * The Studio Home Page Composition
 */
const HomePage = () => (
  <div className="animate-in fade-in duration-1000">
    <Hero />
    <Services />
    <About />
    {/* QuoteForm is kept in HomePage for standard landing experience, but can be lazy too */}
    <Suspense fallback={<div className="h-96" />}>
      <QuoteForm />
    </Suspense>
    <AIAssistant />
    <NewsSection />
    <Gallery />
    <Testimonials />
    <Contact />
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen relative bg-stone-50 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
              <Route path="/quote" element={<QuoteForm />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
};

export default App;
