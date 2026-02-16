
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${PHONE_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] group flex items-center"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="mr-3 px-4 py-2 bg-white rounded-full shadow-xl text-stone-900 font-bold text-sm opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Chat with us
      </div>
      <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-300 group-hover:scale-110 group-active:scale-95 relative">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
        <MessageCircle size={32} fill="currentColor" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
