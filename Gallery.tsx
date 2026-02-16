
import React, { useState } from 'react';
import { Camera, ExternalLink } from 'lucide-react';

const CATEGORIES = ['All', 'Residential', 'Restoration', 'Commercial'];

const GALLERY_ITEMS = [
  { url: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=80', cat: 'Residential', title: 'Modern Living Room' },
  { url: 'https://images.unsplash.com/photo-1558976825-6b1b03a03719?auto=format&fit=crop&w=800&q=80', cat: 'Commercial', title: 'Office Workspaces' },
  { url: 'https://images.unsplash.com/photo-1540518614846-7eba433944bc?auto=format&fit=crop&w=800&q=80', cat: 'Residential', title: 'Master Bedroom' },
  { url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80', cat: 'Restoration', title: 'Heritage Console' },
  { url: 'https://images.unsplash.com/photo-1616137422495-1e902b721149?auto=format&fit=crop&w=800&q=80', cat: 'Residential', title: 'Modular Kitchen' },
  { url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80', cat: 'Restoration', title: 'Classic Wardrobe' },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.cat === filter);

  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">Portfolio</h2>
            <h2 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">Crafting <span className="italic text-stone-400">Excellence</span></h2>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              Explore our hand-picked collection of bespoke carpentry and interior transformations across Bangalore.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-amber-600 text-white shadow-lg' 
                    : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 min-h-[600px]">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.url} 
              className="relative group overflow-hidden rounded-[2rem] break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-700 animate-fade-up"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">{item.cat}</p>
                  <h4 className="text-white text-2xl font-serif mb-6">{item.title}</h4>
                  <button className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                    View Project <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-3 px-10 py-5 bg-stone-900 text-white font-bold rounded-2xl hover:bg-amber-600 transition-all shadow-xl hover:shadow-amber-200">
            <Camera size={20} />
            Full Gallery (50+)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
