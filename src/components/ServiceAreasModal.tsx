import React from 'react';
import { X, MapPin, Clock, ArrowRight, Phone } from 'lucide-react';
import { SERVICE_AREAS } from '../data/abatementData';

interface ServiceAreasModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ServiceAreasModal: React.FC<ServiceAreasModalProps> = ({
  isOpen,
  onClose,
  onOpenQuote
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-[#0B3B32] text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest text-emerald-300 uppercase mb-1">
              PROVINCE-WIDE COVERAGE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Ontario Service Areas &amp; Dispatch
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
              Rapid response teams stationed strategically across Southern and Central Ontario.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-emerald-900 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-5 sm:p-7 space-y-5 max-h-[75vh] overflow-y-auto">
          <div className="space-y-4">
            {SERVICE_AREAS.map((area, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:border-emerald-400 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>{area.region}</span>
                  </h4>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                    <Clock className="w-3 h-3" />
                    <span>Est. Response: {area.responseTime}</span>
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {area.cities.map((city, cIdx) => (
                    <span 
                      key={cIdx}
                      className="text-xs bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-emerald-900">Don't see your municipality?</p>
              <p className="text-[11px] text-emerald-700">We dispatch province-wide for commercial and industrial abatement contracts.</p>
            </div>
            <a
              href="tel:5198047779"
              className="px-4 py-2 bg-[#0D4439] text-white rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-[#083028] shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call (519) 804-7779</span>
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="px-5 py-2.5 bg-[#2E7D32] hover:bg-[#256629] text-white text-xs font-bold rounded-lg shadow flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule On-Site Inspection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
