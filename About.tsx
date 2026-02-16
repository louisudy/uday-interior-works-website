
import React from 'react';
import { Target, Heart, Award, ShieldCheck, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-16">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[3/4] border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" 
                    alt="Master Carpenter at work" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="bg-amber-600 rounded-[3rem] p-10 text-white shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform">
                  <p className="text-6xl font-serif font-bold mb-2">15+</p>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">Years in Bangalore</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-square border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1551133990-7ccc03b1905a?auto=format&fit=crop&w=800&q=80" 
                    alt="Handcrafting wood" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[3/4] border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=800&q=80" 
                    alt="Timber textures" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Background Accent */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-600/5 blur-[120px] rounded-full" />
          </div>

          <div className="lg:w-1/2">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-stone-200/50 text-stone-600 px-4 py-2 rounded-full mb-8 text-[10px] font-bold uppercase tracking-[0.2em]">
                <MapPin size={12} className="text-amber-600" />
                Halasuru, Bangalore
              </div>
              <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">Our Heritage</h2>
              <h3 className="text-5xl md:text-7xl font-serif mb-12 text-stone-900 leading-[1.1]">The Art of <br/><span className="italic text-stone-400">Timber & Soul</span></h3>
              
              <div className="space-y-10">
                <p className="text-xl text-stone-600 leading-relaxed font-light">
                  For over a decade and a half, Uday Interior Works has been the silent architect of some of Bangalore's most elegant homes. Our journey began with a simple chisel and a vision: to treat wood not as a commodity, but as a legacy.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-sm border border-stone-100">
                      <Target size={28} />
                    </div>
                    <h4 className="text-lg font-bold text-stone-900">Precision First</h4>
                    <p className="text-stone-500 text-sm leading-relaxed">Every joint, every polish, and every fitting is cross-checked to 0.5mm precision before it leaves our workshop.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-sm border border-stone-100">
                      <Heart size={28} />
                    </div>
                    <h4 className="text-lg font-bold text-stone-900">Bespoke Living</h4>
                    <p className="text-stone-500 text-sm leading-relaxed">We don't believe in catalogs. Your home is unique; your furniture should be a direct reflection of your character.</p>
                  </div>
                </div>

                <div className="p-10 bg-white rounded-[3rem] border border-stone-100 shadow-xl mt-16 flex flex-col md:flex-row items-center gap-8 group hover:border-amber-200 transition-all duration-500">
                  <div className="w-20 h-20 bg-stone-900 rounded-[2rem] flex items-center justify-center text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-xl">
                    <ShieldCheck size={40} />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="font-bold text-stone-900 text-xl">Artisan Quality Certified</h4>
                    <p className="text-stone-500 text-sm mt-2 max-w-xs leading-relaxed">Using exclusively BWP-grade plywood and certified hardwood from sustainable Mysore Road markets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
