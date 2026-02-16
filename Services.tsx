
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Shield } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 flex items-center gap-2">
              <Shield size={12} />
              Bangalore's Trusted Craftsmen
            </h2>
            <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1]">
              Artisan <span className="italic text-stone-400">Carpentry</span> <br/>& Design
            </h2>
          </div>
          <p className="text-stone-500 text-lg max-w-sm font-light leading-relaxed">
            From heritage restoration in Halasuru to modern smart-kitchens in HSR, we bring decades of Bangalore-based mastery to your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group flex flex-col h-full animate-in fade-in slide-in-from-bottom duration-700"
            >
              {/* Image Container with Artisan Overlay */}
              <Link 
                to={`/service/${service.id}`} 
                className="relative h-[480px] overflow-hidden rounded-[3.5rem] block shadow-2xl transition-all duration-700 group-hover:shadow-amber-600/20 mb-10"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/50 transition-all duration-500" />
                
                {/* Floating Category Icon */}
                <div className="absolute top-10 left-10 bg-white/10 backdrop-blur-2xl text-white p-6 rounded-[2rem] border border-white/20 shadow-2xl transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                {/* Hover Reveal: View Details Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white text-stone-900 px-10 py-5 rounded-full font-bold flex items-center gap-3 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                    View Details
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </Link>

              {/* Text Content */}
              <div className="px-6">
                <div className="flex items-center gap-3 mb-5">
                   <span className="w-10 h-[1px] bg-amber-600"></span>
                   <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600">Heritage Quality</span>
                </div>
                <Link to={`/service/${service.id}`} className="block group/title">
                  <h3 className="text-4xl font-serif text-stone-900 mb-5 group-hover/title:text-amber-700 transition-colors">
                    {service.title}
                  </h3>
                </Link>
                <p className="text-stone-500 font-light leading-relaxed mb-10 line-clamp-2 text-lg">
                  {service.description}
                </p>
                
                <Link 
                  to={`/service/${service.id}`}
                  aria-label={`View details for ${service.title}`}
                  className="inline-flex items-center text-stone-900 font-bold text-xs uppercase tracking-[0.25em] group/link relative"
                >
                  <span className="mr-4 pb-1 border-b-2 border-stone-200 group-hover/link:border-amber-600 transition-colors">View Details</span>
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover/link:bg-amber-600 group-hover/link:text-white transition-all transform group-hover/link:translate-x-1">
                    <ArrowUpRight size={16} />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
