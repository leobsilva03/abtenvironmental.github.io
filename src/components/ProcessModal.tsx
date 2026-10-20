import React from 'react';
import { X, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/abatementData';

interface ProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ProcessModal: React.FC<ProcessModalProps> = ({ isOpen, onClose, onOpenQuote }) => {
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
              ONTARIO SAFETY STANDARD
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Our 3-Step Abatement Process
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
              Rigorous containment, certified execution, and safe regulated disposal.
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

        <div className="p-5 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div 
                key={step.step}
                className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/70 hover:bg-emerald-50/40 hover:border-emerald-300 transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-2 py-1 bg-[#0D4439] text-emerald-300 rounded">
                    STEP {step.step}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Containment details box */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 space-y-2">
            <p className="font-bold text-slate-900 text-sm">
              Negative Pressure &amp; HEPA Standards
            </p>
            <p className="leading-relaxed">
              All containment chambers are continuously maintained under negative air pressure of at least -0.02 inches of water gauge, using calibrated digital manometers with alarms. Air is exhausted outside through true HEPA filters with 99.97% efficiency down to 0.3 microns.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">Free project estimates &amp; hazard consults</span>
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="px-5 py-2.5 bg-[#2E7D32] hover:bg-[#256629] text-white text-xs font-bold rounded-lg shadow flex items-center gap-2 cursor-pointer"
            >
              <span>Get Free Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
