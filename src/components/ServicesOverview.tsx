import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/abatementData';

interface ServicesOverviewProps {
  onSelectService: (serviceId: string) => void;
  onOpenQuote: (service?: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onSelectService, onOpenQuote }) => {
  const renderBadgeIcon = (type: ServiceItem['badgeIcon']) => {
    switch (type) {
      case 'asbestos':
        return (
          <div className="w-16 h-16 rounded-full bg-[#0D4439] flex items-center justify-center text-white shadow-sm mb-5 group-hover:scale-105 transition-transform">
            {/* Custom crystalline/fibrous mineral lattice icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8 text-emerald-400">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="1.5" fill="#4ade80" />
            </svg>
          </div>
        );
      case 'lead':
        return (
          <div className="w-16 h-16 rounded-full bg-[#0D4439] flex items-center justify-center text-white shadow-sm mb-5 group-hover:scale-105 transition-transform">
            {/* Pb periodic element badge */}
            <div className="flex flex-col items-center justify-center border-2 border-emerald-400 rounded-md px-1.5 py-0.5">
              <span className="font-extrabold text-lg text-emerald-400 leading-none">Pb</span>
              <span className="text-[8px] font-mono tracking-tighter text-emerald-200">82</span>
            </div>
          </div>
        );
      case 'mould':
        return (
          <div className="w-16 h-16 rounded-full bg-[#0D4439] flex items-center justify-center text-white shadow-sm mb-5 group-hover:scale-105 transition-transform">
            {/* Spores / microbial organism icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8 text-emerald-400">
              <circle cx="12" cy="12" r="5" stroke="#4ade80" strokeWidth="2" />
              <circle cx="12" cy="12" r="2" fill="#4ade80" />
              <circle cx="6" cy="7" r="1.5" fill="#34d399" />
              <circle cx="18" cy="7" r="1.5" fill="#34d399" />
              <circle cx="19" cy="16" r="2" fill="#34d399" />
              <circle cx="5" cy="16" r="2" fill="#34d399" />
            </svg>
          </div>
        );
      case 'commercial':
        return (
          <div className="w-16 h-16 rounded-full bg-[#0D4439] flex items-center justify-center text-white shadow-sm mb-5 group-hover:scale-105 transition-transform">
            {/* Industrial Shield Check icon */}
            <ShieldCheck className="w-8 h-8 text-emerald-400" />
          </div>
        );
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-emerald-700 uppercase mb-2">
            CERTIFIED ENVIRONMENTAL SERVICES
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Abatement Solutions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Certified containment, advanced negative air scrubbers, and regulatory clearance testing for every hazard.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.id)}
              className="group flex flex-col p-6 sm:p-7 rounded-xl border border-slate-200/80 bg-white hover:border-[#0D4439]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer text-left"
            >
              {renderBadgeIcon(service.badgeIcon)}

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-[#0D4439] transition-colors">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                {service.shortDesc}
              </p>

              <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
                <span className="text-xs sm:text-sm font-semibold text-[#0D4439] group-hover:text-emerald-600 flex items-center gap-1.5 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[11px] font-medium text-slate-400 group-hover:text-emerald-700">
                  Certified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
