import React, { useState, useRef } from 'react';
import { ExactHero } from './components/ExactHero';
import { FluidHero } from './components/FluidHero';
import { PillarsSection } from './components/PillarsSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { DoctorSpotlightSection } from './components/DoctorSpotlightSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { DoctorModal } from './components/DoctorModal';
import { SpecialtiesModal } from './components/SpecialtiesModal';
import { ApproachModal } from './components/ApproachModal';
import { Layers, Monitor, Sparkles } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<'exact' | 'fluid'>('exact');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSpecialtyId, setBookingSpecialtyId] = useState<string | undefined>(undefined);
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);
  const [isSpecialtiesModalOpen, setIsSpecialtiesModalOpen] = useState(false);
  const [isApproachModalOpen, setIsApproachModalOpen] = useState(false);

  const exploreRef = useRef<HTMLDivElement>(null);

  const handleOpenBooking = (specialtyId?: string) => {
    setBookingSpecialtyId(specialtyId);
    setIsBookingOpen(true);
  };

  const handleScrollToExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050608] text-stone-100 flex flex-col font-sans selection:bg-amber-500/25 selection:text-amber-200">
      {/* Top Floating View Mode Switcher */}
      <aside aria-label="View Mode and Display Options" className="fixed top-3 right-3 sm:right-6 z-40 flex items-center gap-1.5 p-1 rounded-full bg-stone-950/85 border border-amber-500/30 backdrop-blur-md shadow-2xl">
        <button
          type="button"
          onClick={() => setViewMode('exact')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-sans font-medium transition-all ${
            viewMode === 'exact'
              ? 'bg-amber-500/20 text-amber-200 border border-amber-400/50 shadow-[0_0_15px_rgba(217,119,6,0.3)]'
              : 'text-stone-400 hover:text-stone-200'
          }`}
          title="Exact 1:1 Pixel Match to Screenshot with Live Interactive Hotspots"
        >
          <Monitor className="w-3 h-3 text-amber-400" />
          <span>Exact 1:1 Match</span>
        </button>

        <button
          type="button"
          onClick={() => setViewMode('fluid')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-sans font-medium transition-all ${
            viewMode === 'fluid'
              ? 'bg-amber-500/20 text-amber-200 border border-amber-400/50 shadow-[0_0_15px_rgba(217,119,6,0.3)]'
              : 'text-stone-400 hover:text-stone-200'
          }`}
          title="Fluid Responsive Layout for Any Device Size"
        >
          <Layers className="w-3 h-3 text-teal-400" />
          <span>Fluid Layout</span>
        </button>
      </aside>

      {/* Main Hero Section */}
      <main className="flex-1">
        {viewMode === 'exact' ? (
          <div className="relative w-full bg-[#050608] pt-2 sm:pt-4 pb-6">
            <ExactHero
              onOpenBooking={handleOpenBooking}
              onOpenDoctor={() => setIsDoctorModalOpen(true)}
              onOpenSpecialties={() => setIsSpecialtiesModalOpen(true)}
              onOpenApproach={() => setIsApproachModalOpen(true)}
              onScrollToExplore={handleScrollToExplore}
            />
          </div>
        ) : (
          <FluidHero
            onOpenBooking={handleOpenBooking}
            onOpenDoctor={() => setIsDoctorModalOpen(true)}
            onOpenSpecialties={() => setIsSpecialtiesModalOpen(true)}
            onOpenApproach={() => setIsApproachModalOpen(true)}
          />
        )}

        {/* Scroll anchor into extended clinic sections */}
        <div ref={exploreRef}>
          {/* 3 Pillars & Diagnostic Standard */}
          <PillarsSection
            onOpenBooking={handleOpenBooking}
            onOpenApproach={() => setIsApproachModalOpen(true)}
          />

          {/* Specialties Interactive Catalog */}
          <SpecialtiesSection
            onOpenBooking={handleOpenBooking}
            onOpenSpecialtiesModal={() => setIsSpecialtiesModalOpen(true)}
          />

          {/* The Doctor Profile Spotlight */}
          <DoctorSpotlightSection
            onOpenBooking={handleOpenBooking}
            onOpenDoctorModal={() => setIsDoctorModalOpen(true)}
          />

          {/* Patient Testimonials */}
          <TestimonialsSection />
        </div>
      </main>

      {/* Luxury Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenDoctor={() => setIsDoctorModalOpen(true)}
        onOpenSpecialties={() => setIsSpecialtiesModalOpen(true)}
        onOpenApproach={() => setIsApproachModalOpen(true)}
      />

      {/* Modals & Dialogs */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialSpecialtyId={bookingSpecialtyId}
      />

      <DoctorModal
        isOpen={isDoctorModalOpen}
        onClose={() => setIsDoctorModalOpen(false)}
        onOpenBooking={() => {
          setIsDoctorModalOpen(false);
          setIsBookingOpen(true);
        }}
      />

      <SpecialtiesModal
        isOpen={isSpecialtiesModalOpen}
        onClose={() => setIsSpecialtiesModalOpen(false)}
        onSelectSpecialtyForBooking={(specId) => {
          setIsSpecialtiesModalOpen(false);
          handleOpenBooking(specId);
        }}
      />

      <ApproachModal
        isOpen={isApproachModalOpen}
        onClose={() => setIsApproachModalOpen(false)}
        onOpenBooking={() => {
          setIsApproachModalOpen(false);
          setIsBookingOpen(true);
        }}
      />
    </div>
  );
}
