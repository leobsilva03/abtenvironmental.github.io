import React from 'react';
import { Phone, ArrowRight, MapPin, Building2, Home } from 'lucide-react';
import { IMAGES } from '../config/images';

interface ServingOntarioBannerProps {
  onOpenQuote: () => void;
  onOpenAreas: () => void;
}

export const ServingOntarioBanner: React.FC<ServingOntarioBannerProps> = ({ onOpenQuote, onOpenAreas }) => {
  return (
    <section id="contact-banner" className="relative bg-[#072620] text-white py-16 sm:py-20 overflow-hidden">
      {/* Toronto Ontario Skyline Background Image - Hosted on GitHub */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.skyline}
          alt="Toronto Ontario skyline at twilight across Lake Ontario"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured contrast scrim overlay preserving emerald theme and high readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06241e]/95 via-[#08342b]/85 to-[#0b3d32]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06241e] via-transparent to-transparent opacity-75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Text */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-2">
              <button 
                onClick={onOpenAreas}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold hover:bg-emerald-900 transition-colors cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>View Full Ontario Service Map</span>
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-3">
              Proudly Serving All of Ontario
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-normal">
              From small residential projects to large commercial buildings, we're here to help. Contact us today for a free consultation and keep your property safe.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-emerald-200">
              <span className="flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-emerald-400" />
                Residential Homes &amp; Condos
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                Commercial &amp; Industrial Facilities
              </span>
            </div>
          </div>

          {/* Right Action Elements */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full sm:w-auto">
            {/* Phone Button */}
            <a
              href="tel:5198047779"
              className="w-full sm:w-auto px-6 py-3.5 rounded-md bg-[#082e27] hover:bg-[#06241e] border border-emerald-600/40 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm transition-all duration-150"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>(519) 804-7779</span>
            </a>

            {/* Quote Button */}
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-7 py-3.5 rounded-md bg-[#2E7D32] hover:bg-[#256629] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition-all duration-150 cursor-pointer active:scale-[0.98]"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
