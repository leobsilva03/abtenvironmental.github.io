import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { IMAGES } from '../config/images';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose, onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'asbestos' | 'lead' | 'mould'>('all');

  if (!isOpen) return null;

  const galleryItems = [
    {
      id: 1,
      category: 'asbestos',
      title: 'Commercial Asbestos Pipe Wrap Containment',
      location: 'Kitchener, ON',
      image: IMAGES.asbestos,
      details: 'Type 3 containment zone with negative pressure differential monitoring and certified MOE waste disposal manifests.'
    },
    {
      id: 2,
      category: 'lead',
      title: 'Heritage Architectural Lead Stabilization',
      location: 'Toronto, ON',
      image: IMAGES.lead,
      details: 'HEPA shrouded negative vacuum mechanical stripping with zero airborne lead dust dispersion.'
    },
    {
      id: 3,
      category: 'mould',
      title: 'Residential Drywall Corner & Baseboard Mould Remediation',
      location: 'Waterloo, ON',
      image: IMAGES.mould,
      details: 'Active containment line cut and antimicrobial treatment for extensive black mould infestation.'
    },
    {
      id: 4,
      category: 'asbestos',
      title: 'Multi-Room Renovation Hazmat Team',
      location: 'London, ON',
      image: IMAGES.hero,
      details: 'Complete plastic containment enclosure with 3-stage decontamination shower facility.'
    },
    {
      id: 5,
      category: 'mould',
      title: 'Indoor Air Quality & Moisture Audit Inspection',
      location: 'Cambridge, ON',
      image: IMAGES.about,
      details: 'Certified technician calibrating precision air sampling pumps for PCM and TEM optical clearance.'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(i => i.category === activeCategory);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-[#0B3B32] text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest text-emerald-300 uppercase mb-1">
              FIELD DOCUMENTATION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Containment &amp; Project Gallery
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
              Photographic proof of compliant safety enclosures, air filtration, and certified completion.
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
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'asbestos', label: 'Asbestos Abatement' },
              { id: 'lead', label: 'Lead Mitigation' },
              { id: 'mould', label: 'Mould Remediation' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0D4439] text-white border-[#0D4439]'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                    {item.location}
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                    {item.details}
                  </p>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-700 font-medium">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Passed Air Clearance
                    </span>
                    <span className="text-slate-400 capitalize">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
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
              <span>Get Free Site Inspection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
