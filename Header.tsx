
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PHONE_NUMBER, BUSINESS_NAME } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/#' + targetId);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#/${targetId}`); // Proper hash routing anchor
      }
    }
  };

  const navItems = [
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'AI Expert', id: 'ai-assistant' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  const isHome = location.pathname === '/';
  const logoColor = isScrolled ? 'text-stone-900' : (isHome ? 'text-white' : 'text-stone-900');
  const headerBg = isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : (isHome ? 'bg-transparent py-6' : 'bg-white py-4 border-b border-stone-100');
  const linkColor = isScrolled ? 'text-stone-700' : (isHome ? 'text-stone-100' : 'text-stone-700');

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${headerBg}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className={`text-xl md:text-2xl font-serif font-bold tracking-tight transition-colors ${logoColor}`}>
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>{BUSINESS_NAME}</Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] hover:text-amber-600 transition-colors ${linkColor}`}
            >
              {item.name}
            </a>
          ))}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 bg-amber-600 text-white px-7 py-3.5 rounded-2xl hover:bg-stone-900 transition-all shadow-lg"
          >
            <Phone size={14} />
            <span className="font-bold text-xs tracking-tight">{PHONE_NUMBER}</span>
          </a>
        </nav>

        <button className={`lg:hidden p-2 ${linkColor}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-10 px-8">
          <div className="flex flex-col space-y-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                className="text-3xl font-serif text-stone-800"
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.name}
              </a>
            ))}
            <a href={`tel:${PHONE_NUMBER}`} className="bg-amber-600 text-white py-5 rounded-2xl text-center font-bold">
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
