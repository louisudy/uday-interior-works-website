
import React, { useState } from 'react';
import { Send, CheckCircle2, Ruler, IndianRupee, Clock, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { BUSINESS_NAME, PHONE_NUMBER } from '../constants';

const QuoteForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Modular Kitchen',
    budget: 'Not decided yet',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Build a professionally formatted WhatsApp message
    const text = `*New Quote Request* 🪵\n` +
                 `--------------------------\n` +
                 `*Client:* ${formData.name}\n` +
                 `*Phone:* ${formData.phone}\n\n` +
                 `*Service:* ${formData.service}\n` +
                 `*Budget:* ${formData.budget}\n` +
                 `*Details:* ${formData.message}\n` +
                 `--------------------------\n` +
                 `_Sent via Uday Interior Works Studio_`;

    const whatsappUrl = `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;

    // Simulate a brief delay to show the "Redirecting" state for a premium feel
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="quote" className="py-24 bg-stone-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-white rounded-[4rem] p-16 md:p-24 text-center border border-stone-100 shadow-2xl animate-in fade-in zoom-in duration-700">
            <div className="w-24 h-24 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">WhatsApp Connected</h2>
            <p className="text-stone-500 text-lg mb-12 max-w-md mx-auto leading-relaxed">
              We've launched your quote request. If the chat didn't open automatically, please use the button below to reach us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={`https://wa.me/91${PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebd59] text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 transition-all shadow-xl"
              >
                <MessageSquare size={20} />
                Open Chat Manually
              </a>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-stone-400 font-bold uppercase tracking-widest text-xs hover:text-amber-600 transition-colors py-5 px-10"
              >
                Back to Studio Form
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-32 bg-white overflow-hidden relative">
      {/* Decorative Wood-Like Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/wood-pattern.png')` }}></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-stretch">
          
          {/* Form Context */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-5 py-2 rounded-full mb-8 text-[11px] font-bold uppercase tracking-[0.2em] border border-amber-100/50">
                <Sparkles size={14} className="animate-pulse" />
                Estimation Studio
              </div>
              <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.05] mb-8">
                Request a <br /><span className="italic text-stone-400">Free Quote.</span>
              </h2>
              <p className="text-stone-500 text-xl font-light leading-relaxed">
                Connect directly with our master craftsmen. Provide your project vision, and we'll handle the precision.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex gap-8 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-stone-50 flex items-center justify-center text-amber-600 shrink-0 shadow-sm border border-stone-100 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                  <Ruler size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg mb-1">On-Site Precision</h4>
                  <p className="text-stone-500 leading-relaxed font-light">We verify every millimeter in person before finalizing your artisanal project.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-stone-50 flex items-center justify-center text-amber-600 shrink-0 shadow-sm border border-stone-100 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                  <IndianRupee size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg mb-1">Bespoke Pricing</h4>
                  <p className="text-stone-500 leading-relaxed font-light">Tailored estimates based on your choice of timber, hardware, and finish complexity.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-stone-50 flex items-center justify-center text-amber-600 shrink-0 shadow-sm border border-stone-100 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg mb-1">Studio Priority</h4>
                  <p className="text-stone-500 leading-relaxed font-light">Get a preliminary response on WhatsApp within one working day.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actual Form Container */}
          <div className="lg:w-2/3">
            <div className="bg-stone-50 rounded-[4rem] p-10 md:p-20 border border-stone-100 shadow-xl relative overflow-hidden group/form">
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-600 to-amber-800"></div>
              
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-widest text-stone-400 ml-4">Full Name</label>
                    <input 
                      required
                      id="name"
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-white border border-stone-200 rounded-[2rem] px-8 py-6 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all shadow-sm placeholder:text-stone-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-widest text-stone-400 ml-4">Phone Number</label>
                    <input 
                      required
                      id="phone"
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white border border-stone-200 rounded-[2rem] px-8 py-6 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all shadow-sm placeholder:text-stone-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label htmlFor="service" className="text-[11px] font-bold uppercase tracking-widest text-stone-400 ml-4">Service Category</label>
                    <div className="relative">
                      <select 
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-stone-200 rounded-[2rem] px-8 py-6 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all shadow-sm appearance-none cursor-pointer"
                      >
                        <option>Modular Kitchen</option>
                        <option>Designer Wardrobes</option>
                        <option>Furniture Restoration</option>
                        <option>PU / Melamine Polishing</option>
                        <option>Custom Home Furniture</option>
                        <option>Full Interior Planning</option>
                      </select>
                      <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                        <ArrowRight size={18} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="budget" className="text-[11px] font-bold uppercase tracking-widest text-stone-400 ml-4">Budget Range (Optional)</label>
                    <div className="relative">
                      <select 
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-stone-200 rounded-[2rem] px-8 py-6 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all shadow-sm appearance-none cursor-pointer"
                      >
                        <option>Not decided yet</option>
                        <option>Under ₹50,000</option>
                        <option>₹50,000 - ₹2,00,000</option>
                        <option>₹2,00,000 - ₹5,00,000</option>
                        <option>₹5,00,000+</option>
                      </select>
                      <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                        <ArrowRight size={18} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-widest text-stone-400 ml-4">Project Description & Dimensions</label>
                  <textarea 
                    required
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about the space, wood preferences, or any specific requirements..."
                    className="w-full bg-white border border-stone-200 rounded-[3rem] px-8 py-8 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all shadow-sm resize-none placeholder:text-stone-300 leading-relaxed"
                  ></textarea>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-stone-900 hover:bg-amber-600 text-white font-bold py-8 rounded-[2.5rem] transition-all shadow-2xl hover:shadow-amber-600/30 flex items-center justify-center gap-5 text-xl group disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1 active:scale-[0.98]"
                  >
                    {loading ? (
                      <span className="flex items-center gap-4">
                        <LoaderIcon />
                        Opening WhatsApp...
                      </span>
                    ) : (
                      <>
                        <span className="tracking-tight">Submit & Consult on WhatsApp</span>
                        <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform duration-500" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-stone-400 text-[10px] uppercase tracking-[0.2em] mt-8 font-medium">
                    Secured Connection • Free Consultation • Fast Response
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LoaderIcon = () => (
  <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

export default QuoteForm;
