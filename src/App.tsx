import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServingOntarioBanner } from './components/ServingOntarioBanner';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProcessModal } from './components/ProcessModal';
import { ServiceAreasModal } from './components/ServiceAreasModal';
import { GalleryModal } from './components/GalleryModal';
import { HealthSafetyModal } from './components/HealthSafetyModal';
import { Phone, ArrowRight } from 'lucide-react';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string | undefined>(undefined);
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [processModalOpen, setProcessModalOpen] = useState(false);
  const [serviceAreasModalOpen, setServiceAreasModalOpen] = useState(false);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [healthSafetyModalOpen, setHealthSafetyModalOpen] = useState(false);

  const handleOpenQuote = (service?: string) => {
    setSelectedQuoteService(service);
    setQuoteModalOpen(true);
  };

  const handleOpenService = (serviceId: string) => {
    setActiveServiceId(serviceId);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-[#20815d] selection:text-white">
      {/* Top Header & Navigation */}
      <Header
        onOpenQuote={handleOpenQuote}
        onOpenService={handleOpenService}
        onOpenProcess={() => setProcessModalOpen(true)}
        onOpenAreas={() => setServiceAreasModalOpen(true)}
        onOpenGallery={() => setGalleryModalOpen(true)}
        onOpenHealthSafety={() => setHealthSafetyModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onOpenProcess={() => setProcessModalOpen(true)}
          onOpenService={handleOpenService}
        />

        {/* 4 Core Services Overview Section */}
        <ServicesOverview
          onSelectService={handleOpenService}
          onOpenQuote={handleOpenQuote}
        />

        {/* About ABT Environmental Section */}
        <AboutSection
          onOpenProcess={() => setProcessModalOpen(true)}
          onOpenHealthSafety={() => setHealthSafetyModalOpen(true)}
        />

        {/* Why Choose Us & 3 Service Action Cards */}
        <WhyChooseUs
          onOpenQuote={handleOpenQuote}
          onSelectService={handleOpenService}
        />

        {/* Serving All of Ontario Banner */}
        <ServingOntarioBanner
          onOpenQuote={() => handleOpenQuote()}
          onOpenAreas={() => setServiceAreasModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenQuote={() => handleOpenQuote()}
        onOpenService={handleOpenService}
        onOpenProcess={() => setProcessModalOpen(true)}
        onOpenAreas={() => setServiceAreasModalOpen(true)}
        onOpenGallery={() => setGalleryModalOpen(true)}
        onOpenHealthSafety={() => setHealthSafetyModalOpen(true)}
      />

      {/* Mobile Floating Action Bottom Strip (Only on small screens, within 15% sticky cap) */}
      <aside aria-label="Mobile emergency contact" className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#06221c]/95 backdrop-blur-md border-t border-emerald-800/60 p-2.5 flex items-center gap-2">
        <a
          href="tel:5198047779"
          className="flex-1 py-2.5 px-3 bg-[#0D4439] hover:bg-[#083028] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 shadow"
        >
          <Phone className="w-4 h-4 text-emerald-300" />
          <span>(519) 804-7779</span>
        </a>
        <button
          onClick={() => handleOpenQuote()}
          className="flex-1 py-2.5 px-3 bg-[#2E7D32] hover:bg-[#256629] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 shadow"
        >
          <span>Free Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </aside>

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedQuoteService}
      />

      <ServiceDetailModal
        serviceId={activeServiceId}
        onClose={() => setActiveServiceId(null)}
        onRequestQuote={(serviceTitle) => handleOpenQuote(serviceTitle)}
      />

      <ProcessModal
        isOpen={processModalOpen}
        onClose={() => setProcessModalOpen(false)}
        onOpenQuote={() => handleOpenQuote()}
      />

      <ServiceAreasModal
        isOpen={serviceAreasModalOpen}
        onClose={() => setServiceAreasModalOpen(false)}
        onOpenQuote={() => handleOpenQuote()}
      />

      <GalleryModal
        isOpen={galleryModalOpen}
        onClose={() => setGalleryModalOpen(false)}
        onOpenQuote={() => handleOpenQuote()}
      />

      <HealthSafetyModal
        isOpen={healthSafetyModalOpen}
        onClose={() => setHealthSafetyModalOpen(false)}
        onOpenQuote={() => handleOpenQuote()}
      />
    </div>
  );
}
