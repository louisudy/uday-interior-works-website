
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Phone, 
  MessageSquare, 
  ChevronRight, 
  HelpCircle, 
  CheckCircle2,
  ImageIcon,
  Sparkles
} from 'lucide-react';
// Added BUSINESS_NAME to the imports from constants to fix the reference error on line 132
import { SERVICES, SERVICE_GALLERIES, PHONE_NUMBER, BUSINESS_NAME } from '../constants';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!service) {
    return (
      <div className="pt-40 pb-24 min-h-screen bg-stone-50 flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-stone-200 rounded-full flex items-center justify-center mb-6 text-stone-400">
          <HelpCircle size={48} />
        </div>
        <h2 className="text-3xl font-serif mb-4 text-stone-900">Service Not Found</h2>
        <button 
          onClick={() => navigate('/')} 
          className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full font-bold shadow-xl transition-all"
        >
          Return Home
        </button>
      </div>
    );
  }

  const galleryImages = SERVICE_GALLERIES[service.id] || [];
  const heroImage = galleryImages.length > 0 ? galleryImages[0] : service.image;

  return (
    <div className="bg-white min-h-screen">
      
      {/* HERO SECTION */}
      <div 
        className="relative h-[400px] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-24 left-8 z-20">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/90 hover:text-white transition-all group bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-[10px] uppercase tracking-widest">Back</span>
          </button>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif font-bold text-center px-4 drop-shadow-lg">
          {service.title}
        </h1>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="max-w-[1000px] mx-auto px-6 py-20">
        
        {/* ABOUT THIS SERVICE */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-stone-900 mb-6 border-b-2 border-stone-100 pb-4">About This Service</h2>
          <p className="text-lg text-stone-700 leading-relaxed font-light">
            {service.longDescription}
          </p>
        </div>

        {/* FEATURES */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif text-stone-900 mb-8">Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 group">
                <span className="text-amber-600 flex-shrink-0 mt-1">✔</span>
                <span className="text-lg text-stone-700 leading-relaxed font-light">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* GALLERY */}
        {galleryImages.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-serif text-stone-900 mb-8">Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((img, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-xl aspect-square shadow-md transition-all duration-500"
                >
                  <img
                    src={img}
                    alt={`${service.title} workspace ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ACTION BUTTONS */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <div className="text-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-4 bg-[#b8860b] hover:bg-stone-900 text-white px-10 py-5 rounded-lg font-bold text-xl transition-all shadow-lg w-full md:w-auto min-w-[320px]"
            >
              {/* Fix: BUSINESS_NAME is now imported correctly from constants */}
              📞 Call {BUSINESS_NAME}
            </a>
          </div>

          <div className="text-center">
            <a
              href={`https://wa.me/91${PHONE_NUMBER}?text=Hello%20Uday%20Interior%20Works,%20I%20am%20interested%20in%20your%20service.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#1ebd59] text-white px-10 py-5 rounded-lg font-bold text-xl transition-all shadow-lg w-full md:w-auto min-w-[320px]"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;
