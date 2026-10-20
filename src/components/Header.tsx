import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  Clock, 
  Flame, 
  FileText,
  Mail 
} from 'lucide-react';
import { AbtLogo } from './AbtLogo';

interface HeaderProps {
  onOpenQuote: (service?: string) => void;
  onOpenService: (serviceId: string) => void;
  onOpenProcess: () => void;
  onOpenAreas: () => void;
  onOpenGallery: () => void;
  onOpenHealthSafety: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuote,
  onOpenService,
  onOpenProcess,
  onOpenAreas,
  onOpenGallery,
  onOpenHealthSafety,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-white sticky top-0 z-40 shadow-sm border-b border-slate-100">
      {/* Top Utility Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo Lockup - Exact image from uploaded IMG_4671 without modifications */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          className="shrink-0 flex items-center group focus:outline-none transition-transform hover:opacity-95"
          aria-label="ABT Environmental Home"
        >
          <AbtLogo className="h-12 sm:h-14 md:h-16 lg:h-[70px] w-auto shrink-0 transition-transform group-hover:scale-[1.02]" variant="light" />
        </a>

        {/* Center Indicators - Desktop */}
        <div className="hidden lg:flex items-center gap-8 text-sm">
          {/* Serving Ontario */}
          <button 
            onClick={onOpenAreas}
            className="flex items-center gap-2.5 text-left text-slate-600 hover:text-[#0D4439] transition-colors group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-xs text-slate-800 leading-tight">Serving Ontario</p>
              <p className="text-[11px] text-slate-500">&amp; Surrounding Areas</p>
            </div>
          </button>

          {/* Phone Callout */}
          <a 
            href="tel:5198047779" 
            className="flex items-center gap-2.5 text-left text-slate-600 hover:text-[#0D4439] transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-sm text-slate-900 leading-tight group-hover:text-emerald-700 transition-colors">(519) 804-7779</p>
              <p className="text-[11px] text-slate-500">Get a Free Quote</p>
            </div>
          </a>
        </div>

        {/* Action Controls & Mobile Toggles */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Direct Phone Button */}
          <a
            href="tel:5198047779"
            aria-label="Call for free quote"
            className="lg:hidden p-2 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors"
          >
            <Phone className="w-5 h-5" />
          </a>

          {/* Primary CTA Button */}
          <button
            onClick={() => onOpenQuote()}
            className="px-3.5 sm:px-5 py-2 sm:py-2.5 bg-[#2E7D32] hover:bg-[#256629] text-white text-xs sm:text-sm font-semibold rounded-md shadow-sm transition-all duration-150 flex items-center gap-2 hover:shadow cursor-pointer active:scale-[0.98] whitespace-nowrap"
          >
            <span>REQUEST A FREE QUOTE</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Main Navigation Bar (Dark Forest Green) */}
      <nav className="bg-[#0B3B32] text-white shadow-inner hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-1 sm:space-x-2 text-sm font-medium">
              <button
                onClick={() => scrollToSection('hero')}
                className="px-3.5 py-3 text-white border-b-2 border-emerald-400 font-semibold transition-colors hover:text-emerald-300 cursor-pointer"
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className="px-3.5 py-3 text-slate-100 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                About Us
              </button>

              {/* Our Services with dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => scrollToSection('services')}
                  className="px-3.5 py-3 text-slate-100 hover:text-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Our Services</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-300" />
                </button>

                {/* Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-b-lg shadow-xl border border-slate-100 py-2 z-50 text-slate-800 animate-in fade-in-50 duration-150">
                    <button
                      onClick={() => { setServicesDropdownOpen(false); onOpenService('asbestos'); }}
                      className="w-full text-left px-4 py-2.5 text-xs hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <div>
                        <p className="font-semibold text-slate-900">Asbestos Abatement</p>
                        <p className="text-[11px] text-slate-500">Type 1, 2, 3 Certified Containment &amp; Removal</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                    <button
                      onClick={() => { setServicesDropdownOpen(false); onOpenService('lead'); }}
                      className="w-full text-left px-4 py-2.5 text-xs hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <div>
                        <p className="font-semibold text-slate-900">Lead Abatement</p>
                        <p className="text-[11px] text-slate-500">Paint Scraping & Dust Stabilization</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                    <button
                      onClick={() => { setServicesDropdownOpen(false); onOpenService('mould'); }}
                      className="w-full text-left px-4 py-2.5 text-xs hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <div>
                        <p className="font-semibold text-slate-900">Mould Remediation</p>
                        <p className="text-[11px] text-slate-500">Air Scrubbing & Antimicrobial Treatment</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                    <button
                      onClick={() => { setServicesDropdownOpen(false); onOpenService('commercial'); }}
                      className="w-full text-left px-4 py-2.5 text-xs hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <div>
                        <p className="font-semibold text-slate-900">Industrial &amp; Commercial</p>
                        <p className="text-[11px] text-slate-500">Large-Scale &amp; Hazardous Facilities</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => { scrollToSection('process'); onOpenProcess(); }}
                className="px-3.5 py-3 text-slate-100 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                Our Process
              </button>

              <button
                onClick={onOpenHealthSafety}
                className="px-3.5 py-3 text-slate-100 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                Health &amp; Safety
              </button>

              <button
                onClick={onOpenAreas}
                className="px-3.5 py-3 text-slate-100 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                Service Areas
              </button>

              <button
                onClick={onOpenGallery}
                className="px-3.5 py-3 text-slate-100 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                Gallery
              </button>

              <button
                onClick={() => scrollToSection('contact-banner')}
                className="px-3.5 py-3 text-slate-100 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>

            {/* Contact Email */}
            <a 
              href="mailto:info@abtenvironmental.ca" 
              className="flex items-center gap-1.5 text-xs text-emerald-200 hover:text-white transition-colors group"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              <span>info@abtenvironmental.ca</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B3B32] border-t border-emerald-900/50 text-white px-4 py-5 shadow-2xl transition-all">
          <div className="flex flex-col space-y-1 divide-y divide-emerald-900/40">
            <div className="pb-3 flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left py-2 font-medium text-emerald-300 flex items-center justify-between"
              >
                <span>Home</span>
                <span className="text-xs bg-emerald-800/80 px-2 py-0.5 rounded text-emerald-200">Top</span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left py-2 text-slate-100 hover:text-white"
              >
                About Us
              </button>
            </div>

            {/* Services with sub-items */}
            <div className="py-3 flex flex-col space-y-2">
              <span className="text-xs uppercase font-semibold text-emerald-400 tracking-wider">Services</span>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenService('asbestos'); }}
                className="text-left pl-2 py-1.5 text-sm text-slate-200 hover:text-white flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Asbestos Abatement</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenService('lead'); }}
                className="text-left pl-2 py-1.5 text-sm text-slate-200 hover:text-white flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Lead Abatement</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenService('mould'); }}
                className="text-left pl-2 py-1.5 text-sm text-slate-200 hover:text-white flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Mould Remediation</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenService('commercial'); }}
                className="text-left pl-2 py-1.5 text-sm text-slate-200 hover:text-white flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Industrial &amp; Commercial</span>
              </button>
            </div>

            <div className="py-3 flex flex-col space-y-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenProcess(); }}
                className="text-left py-2 text-slate-100 hover:text-white"
              >
                Our 3-Step Process
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenHealthSafety(); }}
                className="text-left py-2 text-slate-100 hover:text-white"
              >
                Health &amp; Safety Compliance
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAreas(); }}
                className="text-left py-2 text-slate-100 hover:text-white"
              >
                Service Areas (Ontario)
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenGallery(); }}
                className="text-left py-2 text-slate-100 hover:text-white"
              >
                Containment Gallery
              </button>
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href="mailto:info@abtenvironmental.ca"
                className="w-full py-2.5 bg-emerald-900/60 hover:bg-emerald-900 border border-emerald-700/40 rounded-md text-center text-xs font-semibold text-emerald-100 flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>info@abtenvironmental.ca</span>
              </a>
              <a
                href="tel:5198047779"
                className="w-full py-3 bg-emerald-800/80 hover:bg-emerald-800 rounded-md text-center text-sm font-semibold text-white flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Call (519) 804-7779</span>
              </a>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
                className="w-full py-3 bg-[#2E7D32] hover:bg-[#256629] rounded-md text-center text-sm font-bold text-white flex items-center justify-center gap-2 shadow"
              >
                <span>REQUEST A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
