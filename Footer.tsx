
import React from 'react';
import { BUSINESS_NAME, PHONE_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">{BUSINESS_NAME}</h2>
            <p className="text-stone-500 max-w-sm leading-relaxed mb-8">
              Excellence in carpentry and interior design. We create beautiful living spaces with custom woodworking and premium finishes.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-amber-500 transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Working Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Mon - Sat</span>
                <span className="text-white">9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white text-right">Consultation Only</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
