import React from 'react';
import { HardHat, ShieldCheck, Users, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../config/images';

interface AboutSectionProps {
  onOpenProcess: () => void;
  onOpenHealthSafety: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenProcess, onOpenHealthSafety }) => {
  const highlights = [
    {
      icon: HardHat,
      title: 'Certified & Experienced Technicians',
      description: 'Fully licensed professionals adhering strictly to O. Reg. 278/05 standards.'
    },
    {
      icon: ShieldCheck,
      title: 'Full Compliance with Ontario Regulations (MOE, WSIB)',
      description: 'Ministry of the Environment manifests and full WSIB safety certification.'
    },
    {
      icon: Users,
      title: 'Professional & Respectful Team',
      description: 'Discreet, polite service with minimal disturbance to residents or staff.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Certified Technician Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 aspect-[4/3] lg:aspect-[4/4.2]">
              <img
                src={IMAGES.about}
                alt="ABT Environmental technician measuring air quality in containment"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs rounded-lg p-3 shadow-md border border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-900">Ontario Health &amp; Safety Mandate</p>
                  <p className="text-[11px] text-slate-500">Strict negative pressure barrier verification</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
              </div>
            </div>
            {/* Subtle decorative backing accent */}
            <div className="absolute -bottom-3 -right-3 w-32 h-32 bg-emerald-700/10 rounded-2xl -z-10" />
          </div>

          {/* Right Column: Experience, Safety, Results */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-emerald-700 uppercase">
                ABOUT ABT ENVIRONMENTAL
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              Experience. Safety. Results.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-10 text-pretty">
              With years of industry experience, ABT Environmental is committed to delivering high-quality abatement services that meet all Ontario regulations. Our team is trained, certified and equipped with the latest technology to keep your property and people safe.
            </p>

            {/* 3 Core Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex flex-col gap-3 p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs hover:border-emerald-500/30 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm leading-snug mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Secondary Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenProcess}
                className="text-xs sm:text-sm font-bold text-[#0D4439] hover:text-emerald-700 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Read our 3-Step Abatement Process</span>
                <span>→</span>
              </button>
              <span className="text-slate-300">·</span>
              <button
                onClick={onOpenHealthSafety}
                className="text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                View Ontario Regulatory Accreditations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
