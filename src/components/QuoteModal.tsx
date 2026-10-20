import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight, AlertTriangle, Phone, FileText } from 'lucide-react';
import { SERVICES_DATA } from '../data/abatementData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialService }) => {
  const [service, setService] = useState(initialService || 'asbestos');
  const [propertyType, setPropertyType] = useState('residential');
  const [urgency, setUrgency] = useState('standard');
  const [sqft, setSqft] = useState('under-500');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReference, setQuoteReference] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !fullName) return;

    const ref = `ABT-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteReference(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="bg-[#0B3B32] text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-800/80 text-emerald-300 text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Fast Free Consultation &amp; Assessment</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Request a Free Abatement Quote
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
              Serving residential, commercial &amp; industrial properties across Ontario.
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

        {isSubmitted ? (
          <div className="p-8 sm:p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-2">
              Quote Request Received!
            </h4>
            <p className="text-sm text-slate-600 mb-4 max-w-md mx-auto">
              Thank you, <strong className="text-slate-800">{fullName}</strong>. An Ontario certified environmental supervisor is reviewing your project details.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto mb-6 text-left text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-500">Reference ID:</span>
                <span className="font-mono font-bold text-slate-900">{quoteReference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service:</span>
                <span className="font-semibold text-slate-800 capitalize">{service} Abatement</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Location:</span>
                <span className="font-semibold text-slate-800">{city || 'Ontario Region'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Estimated Callback:</span>
                <span className="font-bold text-emerald-700">&lt; 15 Minutes</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:5198047779"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#0D4439] hover:bg-[#09322a] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 shadow"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dispatch Now: (519) 804-7779</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-5 max-h-[75vh] overflow-y-auto">
            {/* Service selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Hazard Service Needed
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SERVICES_DATA.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setService(s.id)}
                    className={`px-3 py-2.5 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                      service === s.id
                        ? 'bg-[#0B3B32] text-white border-[#0B3B32] shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Property type and urgency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Property Classification
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full p-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option value="residential">Residential Home / Condominium</option>
                  <option value="commercial">Commercial Office / Retail</option>
                  <option value="industrial">Industrial Plant / Warehouse</option>
                  <option value="institutional">School / Healthcare Facility</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Timeline / Urgency
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full p-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option value="emergency">Emergency (Immediate / 24 Hours)</option>
                  <option value="standard">Standard (Within 1-2 Weeks)</option>
                  <option value="planning">Renovation Planning / Real Estate Due Diligence</option>
                </select>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-t border-slate-100 pt-4">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                Your Contact Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Miller"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(519) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">Ontario City / Region *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kitchener, Waterloo, Toronto, London"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>
            </div>

            {/* Project Notes */}
            <div>
              <label className="block text-[11px] text-slate-500 mb-1">
                Project Scope / Suspected Materials (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Popcorn ceiling in 3 bedrooms, or pipe wrap in basement, or visible black mould under bathroom sink..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            {/* Bottom Submit */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-[11px] text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero obligations · Free on-site consultation</span>
              </p>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-[#2E7D32] hover:bg-[#256629] text-white text-xs sm:text-sm font-bold rounded-lg shadow transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>SUBMIT QUOTE REQUEST</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
