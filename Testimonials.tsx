
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-serif text-center mb-16">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-10 rounded-3xl shadow-sm relative border border-stone-100">
              <div className="absolute top-0 right-10 -translate-y-1/2 w-12 h-12 bg-amber-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <Quote fill="currentColor" size={24} />
              </div>
              
              <div className="flex gap-1 text-amber-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-stone-700 italic leading-relaxed mb-8 text-lg">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-stone-500 font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">{t.name}</h4>
                  <p className="text-stone-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
