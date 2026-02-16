
import React, { useState } from 'react';
import { Newspaper, Loader2, ExternalLink, RefreshCw } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { NewsItem } from '../types';

const NewsSection: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    const data = await geminiService.getLatestNews();
    setNews(data);
    setLoading(false);
  };

  return (
    <section id="news" className="py-24 bg-stone-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-stone-900">Industry Insights</h2>
            <p className="text-stone-600 text-lg">
              Stay updated with the latest trends in interior design, carpentry, and home improvement.
            </p>
          </div>
          <button
            onClick={fetchNews}
            disabled={loading}
            className="flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <RefreshCw size={20} />
            )}
            Fetch Latest News
          </button>
        </div>

        {news.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-700">
            {news.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition-shadow">
                <div className="bg-amber-100 text-amber-700 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                  <Newspaper size={24} />
                </div>
                <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-2">{item.date}</p>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">{item.title}</h3>
                <p className="text-stone-600 mb-8 flex-grow leading-relaxed">
                  {item.summary}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-900 font-bold text-sm group"
                >
                  Read Full Article 
                  <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/50 rounded-[3rem] border-2 border-dashed border-stone-300">
            <Newspaper size={48} className="mx-auto text-stone-300 mb-4" />
            <p className="text-stone-500 font-medium italic">Click the button above to discover latest trends...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
