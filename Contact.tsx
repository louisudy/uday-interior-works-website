
import React from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Linkedin, MessageSquare, Share2 } from 'lucide-react';
import { PHONE_NUMBER, BUSINESS_NAME, WEBSITE_URL } from '../constants';

const Contact: React.FC = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: BUSINESS_NAME,
          text: 'Check out Bangalore\'s best carpentry and interior design services!',
          url: WEBSITE_URL,
        });
      } catch (err) {
        console.error('Share failed:', err);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(WEBSITE_URL);
      alert('Website link copied to clipboard!');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-stone-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row mb-12">
          
          <div className="lg:w-2/5 p-12 md:p-16 bg-amber-600 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Get In Touch</h2>
              <p className="text-amber-100 text-lg mb-12 max-w-sm">
                Ready to start your next project? Call us or send a message and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all">
                    <Phone />
                  </div>
                  <div>
                    <p className="text-amber-100 text-sm font-medium">Call Us Directly</p>
                    <p className="text-xl font-bold">{PHONE_NUMBER}</p>
                  </div>
                </a>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Mail />
                  </div>
                  <div>
                    <p className="text-amber-100 text-sm font-medium">Email Us</p>
                    <p className="text-xl font-bold">udayinteriorworks@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <p className="text-amber-100 text-sm font-medium">Visit Our Workshop</p>
                    <p className="text-lg font-bold leading-tight">
                      15, 2nd Main Rd, Halasuru, Bengaluru, Karnataka 560008
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/20">
              <div className="flex flex-wrap gap-4 items-center">
                <a 
                  href="https://instagram.com/udayinteriorworks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white text-white hover:text-amber-600 transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://facebook.com/udayinteriorworks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white text-white hover:text-amber-600 transition-all"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://linkedin.com/company/udayinteriorworks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white text-white hover:text-amber-600 transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={`https://wa.me/${PHONE_NUMBER}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white text-white hover:text-amber-600 transition-all"
                >
                  <MessageSquare size={20} />
                </a>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-stone-900/50 hover:bg-stone-900 transition-all text-sm font-bold border border-white/10"
                >
                  <Share2 size={16} />
                  Share Link
                </button>
              </div>
              <p className="mt-4 text-amber-200 text-xs font-mono">{WEBSITE_URL}</p>
            </div>
          </div>

          <div className="lg:w-3/5 p-12 md:p-16">
            <h3 className="text-3xl text-white font-serif mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-stone-400 text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-stone-800 border border-stone-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-stone-400 text-sm font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-stone-800 border border-stone-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-stone-400 text-sm font-medium mb-2">Service Required</label>
                <select className="w-full bg-stone-800 border border-stone-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all appearance-none">
                  <option>Modular Kitchen</option>
                  <option>Wardrobe & Closets</option>
                  <option>Antique Restoration</option>
                  <option>Furniture Polishing</option>
                  <option>Full Home Interior</option>
                </select>
              </div>
              <div>
                <label className="block text-stone-400 text-sm font-medium mb-2">Project Details</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-stone-800 border border-stone-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-2xl transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
              >
                Send Request <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="w-full h-[400px] rounded-[3rem] overflow-hidden shadow-xl border border-stone-100 grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            src="https://www.google.com/maps?q=Halasuru+Bangalore&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Uday Interior Works Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
