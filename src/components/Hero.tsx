import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';
import { IMAGES } from '../config/images';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenProcess: () => void;
  onOpenService: (serviceId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onOpenProcess, onOpenService }) => {
  return (
    <section id="hero" className="relative bg-[#072620] text-white min-h-[560px] lg:min-h-[640px] flex items-center overflow-hidden">
      {/* Background Hero Image - Hosted on GitHub */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="ABT Environmental certified abatement team at work in containment"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-10000"
          referrerPolicy="no-referrer"
        />
        {/* Rich Multi-stop Scrim overlay matching the reference image's dark left grade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06201b]/95 via-[#083028]/90 to-[#0b3c33]/75 lg:to-[#0b3c33]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06201b] via-transparent to-transparent opacity-80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Top Kicker matching image */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase">
              SAFE. PROFESSIONAL. COMPLIANT.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-5 text-balance">
            Asbestos, Lead Abatement &amp; Mold Remediation
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-2xl font-bold text-emerald-300/90 mb-4 tracking-tight">
            Protecting Your Health. Restoring Your Space.
          </p>

          {/* Paragraph description */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed mb-8 sm:mb-10 max-w-2xl text-pretty font-normal">
            ABT Environmental provides comprehensive asbestos, lead abatement and mold remediation services for residential, commercial and industrial properties across Ontario.
          </p>

          {/* Dual Action CTAs matching layout */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
            <button
              onClick={onOpenQuote}
              className="px-6 sm:px-8 py-3.5 bg-[#2E7D32] hover:bg-[#256629] text-white text-sm sm:text-base font-bold rounded-md shadow-lg transition-all duration-150 flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98] group"
            >
              <span>REQUEST A FREE QUOTE</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenProcess}
              className="px-6 sm:px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/60 hover:border-white text-sm sm:text-base font-semibold rounded-md backdrop-blur-xs transition-all duration-150 flex items-center justify-center cursor-pointer active:scale-[0.98]"
            >
              LEARN MORE
            </button>
          </div>

          {/* Trust Highlights Strip below CTAs */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-5 sm:gap-8 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>MOE &amp; WSIB Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Type 1, 2, 3 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
