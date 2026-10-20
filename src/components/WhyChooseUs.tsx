import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { IMAGES } from '../config/images';

interface WhyChooseUsProps {
  onOpenQuote: (service?: string) => void;
  onSelectService: (serviceId: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuote, onSelectService }) => {
  const points = [
    'Certified and experienced technicians',
    'Full compliance with Ontario regulations (MOE, WSIB)',
    'Residential, commercial & industrial services',
    'Clear communication and honest pricing',
    'Minimal disruption to your daily life or business'
  ];

  const photoCards = [
    {
      id: 'asbestos',
      title: 'Asbestos Removal',
      subtext: 'Safe removal of hazardous materials from your property.',
      image: IMAGES.asbestos
    },
    {
      id: 'lead',
      title: 'Lead Abatement',
      subtext: 'Protecting buildings and people from lead exposure.',
      image: IMAGES.lead
    },
    {
      id: 'mould',
      title: 'Mould Remediation',
      subtext: 'Cleaner air. Healthier spaces.',
      image: IMAGES.mould
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Why Choose Us Content */}
          <div className="lg:col-span-5">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-emerald-700 uppercase mb-2 block">
              WHY CHOOSE US
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
              Your Safety is Our Priority
            </h2>

            {/* Checklist */}
            <div className="space-y-4 mb-9">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-slate-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Green CTA */}
            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#2E7D32] hover:bg-[#256629] text-white text-sm sm:text-base font-bold rounded-md shadow-md transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: 3 Photo Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {photoCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => onSelectService(card.id)}
                  className="group flex flex-col rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-emerald-600/40 transition-all duration-200 cursor-pointer bg-white"
                >
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  </div>
                  <div className="p-4 sm:p-4.5 flex flex-col flex-grow">
                    <h3 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-[#0D4439] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3 flex-grow">
                      {card.subtext}
                    </p>
                    <span className="text-xs font-bold text-emerald-700 group-hover:text-emerald-800 flex items-center gap-1 mt-auto">
                      <span>View details</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
