
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2, Sparkles, ExternalLink, HelpCircle } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

interface Message extends ChatMessage {
  sources?: { title: string; uri: string }[];
}

const SUGGESTIONS = [
  "Current price of Teak?",
  "Best wood for Bangalore rain?",
  "Modern kitchen trends 2025",
  "How to restore a 50-year-old desk?"
];

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Namaste! I'm your Uday Interior Studio AI. I can check current market rates on Mysore Road or help you pick the right finish for your wood. How can I assist today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (textToSubmit?: string) => {
    const finalInput = textToSubmit || input;
    if (!finalInput.trim() || isLoading) return;

    setInput('');
    const newHistory: Message[] = [...messages, { role: 'user', text: finalInput }];
    setMessages(newHistory);
    setIsLoading(true);

    const { text, sources } = await geminiService.generateDesignAdvice(
      newHistory.map(m => ({ role: m.role, text: m.text })), 
      finalInput
    );
    
    setMessages(prev => [...prev, { role: 'model', text, sources }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-assistant" className="py-32 bg-stone-950 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          
          <div className="lg:w-2/5 text-white">
            <div className="inline-flex items-center gap-3 bg-amber-600/10 text-amber-500 px-6 py-3 rounded-full mb-12 border border-amber-600/20 shadow-xl shadow-amber-600/5">
              <Sparkles size={18} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Design Intelligence 3.0</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-[1.05]">Consult the <br/><span className="text-amber-500 italic">Expert.</span></h2>
            <p className="text-stone-400 text-xl mb-14 leading-relaxed font-light">
              Real-time insights on materials, pricing, and trends. Our AI cross-references the latest Bangalore timber indices so you don't have to guess.
            </p>
            
            <div className="space-y-6">
              <p className="text-stone-500 text-xs font-bold uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                <HelpCircle size={16} className="text-amber-600" />
                Artisan Prompt Library
              </p>
              <div className="flex flex-wrap gap-4">
                {SUGGESTIONS.map(s => (
                  <button 
                    key={s}
                    onClick={() => handleSubmit(s)}
                    disabled={isLoading}
                    className="text-xs px-6 py-4 bg-white/5 border border-white/10 rounded-[1.5rem] hover:bg-amber-600 hover:border-amber-600 transition-all text-stone-300 hover:text-white font-medium"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 w-full">
            <div className="bg-stone-900 rounded-[4rem] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.9)] overflow-hidden border border-white/5 flex flex-col h-[750px] relative">
              
              {/* Chat Header */}
              <div className="bg-stone-800/60 backdrop-blur-3xl p-10 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-amber-600/20">
                    <Bot className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-white font-serif text-2xl tracking-tight">Studio Intelligence</h3>
                    <div className="flex items-center gap-2.5 mt-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold">Synced with Bangalore Markets</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Content */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-12 scroll-smooth custom-scrollbar">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}>
                    <div className={`flex gap-6 max-w-[90%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-2xl ${m.role === 'user' ? 'bg-amber-600' : 'bg-stone-800 border border-white/10'}`}>
                        {m.role === 'user' ? <User size={20} className="text-white" /> : <Bot size={20} className="text-white" />}
                      </div>
                      <div className="space-y-6">
                        <div className={`p-8 rounded-[2.5rem] text-sm md:text-lg leading-relaxed shadow-2xl ${m.role === 'user' ? 'bg-amber-600 text-white rounded-tr-none' : 'bg-stone-800 text-stone-200 rounded-tl-none border border-white/5'}`}>
                          {m.text}
                        </div>
                        {m.sources && m.sources.length > 0 && (
                          <div className="flex flex-wrap gap-3 px-2">
                            {m.sources.map((s, idx) => (
                              <a 
                                key={idx} 
                                href={s.uri} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] text-amber-500 font-bold hover:bg-amber-600/10 hover:border-amber-600/30 transition-all uppercase tracking-widest"
                              >
                                <ExternalLink size={12} />
                                {s.title.slice(0, 35)}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-stone-800 flex items-center justify-center border border-white/10">
                      <Loader2 className="text-amber-500 animate-spin" size={20} />
                    </div>
                    <div className="px-8 py-5 bg-stone-800/40 rounded-[2rem] text-stone-500 text-[10px] uppercase tracking-[0.3em] font-bold animate-pulse">
                      Analyzing Trends...
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} 
                className="p-10 bg-stone-800/40 border-t border-white/5 backdrop-blur-3xl"
              >
                <div className="relative flex gap-5">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about Mysore Road teak prices or design tips..."
                    className="flex-1 bg-stone-950 border border-white/10 rounded-[2rem] px-10 py-6 text-white focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all text-base placeholder:text-stone-800"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-amber-600 hover:bg-amber-500 text-white w-20 h-20 rounded-[2rem] disabled:opacity-50 transition-all flex items-center justify-center shadow-2xl hover:shadow-amber-600/40 transform hover:-translate-y-1"
                  >
                    <Send size={28} />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-600/5 blur-[150px] -z-10 pointer-events-none" />
    </section>
  );
};

export default AIAssistant;
