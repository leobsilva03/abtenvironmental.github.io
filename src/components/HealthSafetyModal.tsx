import React from 'react';
import { X, ShieldCheck, CheckCircle, FileText, AlertCircle, ArrowRight } from 'lucide-react';

interface HealthSafetyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const HealthSafetyModal: React.FC<HealthSafetyModalProps> = ({
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
              REGULATORY COMPLIANCE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Health, Safety &amp; Legal Standards
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
              Exceeding Ontario occupational regulations and environmental protection laws.
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

        <div className="p-5 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto text-slate-700">
          {/* Key Compliance Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Ontario Regulation 278/05</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Designated Substance — Asbestos on Construction Projects and in Buildings and Repair Operations. We strictly follow classified Type 1, 2, and 3 containment protocols and decontamination airlocks.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-emerald-700" />
                <span>Ministry of the Environment (MECP)</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Registered Environmental Compliance Approval (ECA) for hazardous waste transportation. All asbestos and hazardous waste is tracked through electronic manifest chains of custody.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-emerald-700" />
                <span>WSIB &amp; $5,000,000 Liability Insurance</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive commercial general liability insurance including specialized environmental pollution riders, with up-to-date WSIB clearance certificates provided for every project.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>IICRC Mould Remediation (S520)</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Certified adherence to the Institute of Inspection, Cleaning and Restoration Certification (IICRC) S520 Standard for mold remediation, utilizing antimicrobial botanical agents and true HEPA equipment.
              </p>
            </div>
          </div>

          {/* PPE Standards Banner */}
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
            <div className="text-xs">
              <p className="font-bold text-emerald-950 mb-1">
                Technician PPE &amp; Air Monitoring Assurance
              </p>
              <p className="text-emerald-900 leading-relaxed">
                Every field technician is fit-tested for negative pressure powered air-purifying respirators (PAPR) and NIOSH-approved P100 filtration. Pre-work baseline air samples and post-work clearance air monitoring ensure non-detectable airborne particulate counts.
              </p>
            </div>
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
              <span>Request Safety File / Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
