import React from 'react';
import { X, Shield, AlertTriangle, CheckCircle2, ArrowRight, Layers, FileCheck } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/abatementData';

interface ServiceDetailModalProps {
  serviceId: string | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  serviceId,
  onClose,
  onRequestQuote
}) => {
  if (!serviceId) return null;

  const service = SERVICES_DATA.find((s) => s.id === serviceId);
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#0B3B32] text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-800/80 text-emerald-300 text-xs font-semibold mb-2">
              <Shield className="w-3.5 h-3.5" />
              <span>{service.regulationCode}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {service.fullTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-emerald-900 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-5 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Top image & description split */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
            <div className="sm:col-span-5 rounded-xl overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="sm:col-span-7">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-emerald-800 mb-1">
                Hazard Scope &amp; Health Risk
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>

          {/* Key Hazards & Solutions in 2 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            {/* Hazards */}
            <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-100">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <h5 className="font-bold text-xs uppercase tracking-wider text-rose-900">
                  Common Contaminants &amp; Materials
                </h5>
              </div>
              <ul className="space-y-2 text-xs text-rose-950">
                {service.keyHazards.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
              <div className="flex items-center gap-2 mb-3">
                <FileCheck className="w-4 h-4 text-emerald-700" />
                <h5 className="font-bold text-xs uppercase tracking-wider text-emerald-900">
                  ABT Certified Solutions &amp; Containment
                </h5>
              </div>
              <ul className="space-y-2 text-xs text-emerald-950">
                {service.ourSolutions.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-500">
              Need immediate clearance or testing for this material?
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onRequestQuote(service.title);
                }}
                className="w-1/2 sm:w-auto px-5 py-2.5 bg-[#2E7D32] hover:bg-[#256629] text-white text-xs font-bold rounded-lg shadow flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
