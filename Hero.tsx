
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 transition-transform duration-[12s] ease-linear hover:scale-100"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/40 to-stone-900/90 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-5xl">
        <div className="inline-block px-5 py-2 mb-10 border border-white/20 rounded-full bg-white/5 backdrop-blur-md animate-in fade-in slide-in-from-top duration-1000">
          <p className="text-amber-400 font-bold text-[10px] uppercase tracking-[0.4em]">Bangalore's Finest Woodworking Studio</p>
        </div>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif mb-10 leading-[1] animate-in fade-in slide-in-from-bottom duration-1000">
          Timber <br/><span className="italic text-amber-200">Reimagined.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-stone-200 mb-14 max-w-2xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
          Bespoke modular kitchens and artisan furniture crafted with heritage mastery in the heart of Halasuru.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          <a 
            href="#services" 
            className="group w-full sm:w-auto px-12 py-5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-2xl transition-all text-lg shadow-2xl flex items-center justify-center gap-3"
          >
            Our Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <Link 
            to="/quote" 
            className="w-full sm:w-auto px-12 py-5 bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-stone-900 font-bold rounded-2xl transition-all text-lg border border-white/30 shadow-xl text-center"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 opacity-40 hover:opacity-100 transition-opacity">
        <a href="#services" className="flex flex-col items-center gap-3 group">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white font-bold group-hover:text-amber-400 transition-colors">Discover More</span>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center animate-bounce">
            <ChevronDown className="text-white" size={20} />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
