import React, { useState } from 'react';
import { ArrowRight, User, ShieldCheck, Heart } from 'lucide-react';

interface ExactHeroProps {
  onOpenBooking: (specialtyId?: string) => void;
  onOpenDoctor: () => void;
  onOpenSpecialties: () => void;
  onOpenApproach: () => void;
  onScrollToExplore: () => void;
}

export const ExactHero: React.FC<ExactHeroProps> = ({
  onOpenBooking,
  onOpenDoctor,
  onOpenSpecialties,
  onOpenApproach
}) => {
  const [activeHoverPillar, setActiveHoverPillar] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-[1672px] mx-auto bg-[#050608] shadow-[0_20px_100px_rgba(0,0,0,0.95)] overflow-hidden select-none">
      {/* 16:9 Aspect container strictly matching the exact 1672x941 dimensions */}
      <div className="relative w-full aspect-[1672/941]">
        {/* ======================================================== */}
        {/* BACKGROUND LAYER: LOOPING VIDEO (Clean, No Overlaid Bars) */}
        {/* ======================================================== */}
        <video
          src="/assets/aistudio/Person_moving_towards_center_20261027213826_404f23a6.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Cinematic subtle dark gradient vignette to ensure editorial typography is crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050608]/90 via-[#050608]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050608]/90 via-transparent to-[#050608]/50 pointer-events-none" />

        {/* Ambient Animated Heartbeat Wave on the Cyan ECG line (x: 0% to 26%, y: 52% to 65%) */}
        <div
          className="absolute left-0 top-[52%] w-[26%] h-[15%] pointer-events-none overflow-hidden"
          title="Active Biometric Telemetry"
        >
          <div className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-teal-300/30 to-transparent blur-sm animate-[pulseGlow_2.8s_ease-in-out_infinite]" />
          <svg
            className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
            viewBox="0 0 400 120"
            fill="none"
          >
            <path
              d="M 0 65 L 140 65 L 155 58 L 165 72 L 180 18 L 195 105 L 210 40 L 220 75 L 230 65 L 380 65"
              stroke="#2dd4bf"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="filter drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]"
            />
          </svg>
        </div>

        {/* ======================================================== */}
        {/* EDITORIAL UI OVERLAY                                     */}
        {/* ======================================================== */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {/* Top Header Bar */}
          <header className="w-full px-[3.5%] pt-[2.2%] flex items-center justify-between pointer-events-auto">
            {/* Logo */}
            <button
              type="button"
              onClick={onOpenApproach}
              className="flex items-center gap-3.5 group cursor-pointer focus:outline-none"
              aria-label="Atelier Medical Home"
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-stone-100 group-hover:text-amber-300 transition-colors"
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 6 C15 4, 17 2, 20 2 C23 2, 25 4, 25 6 L25 15 L34 15 C36 15, 38 17, 38 20 C38 23, 36 25, 34 25 L25 25 L25 34 C25 36, 23 38, 20 38 C17 38, 15 36, 15 34 L15 25 L6 25 C4 25, 2 23, 2 20 C2 17, 4 15, 6 15 L15 15 Z" />
                  <path
                    d="M14 20 L18 20 L19 16 L21 24 L22 18 L23 21 L26 20"
                    stroke="#2dd4bf"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>
              <span className="font-sans font-light tracking-[0.28em] text-xs sm:text-sm lg:text-base text-stone-100 uppercase group-hover:text-amber-200 transition-colors [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]">
                Atelier Medical
              </span>
            </button>

            {/* Nav Links + CTA Button */}
            <div className="flex items-center gap-6 lg:gap-10">
              <nav className="flex items-center gap-6 lg:gap-8 text-xs tracking-wider uppercase text-stone-300">
                <button
                  type="button"
                  onClick={onOpenApproach}
                  className="hover:text-amber-200 transition-colors py-1 cursor-pointer [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]"
                >
                  Our Approach
                </button>
                <button
                  type="button"
                  onClick={onOpenSpecialties}
                  className="hover:text-amber-200 transition-colors py-1 cursor-pointer [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]"
                >
                  Specialties
                </button>
                <button
                  type="button"
                  onClick={onOpenDoctor}
                  className="hover:text-amber-200 transition-colors py-1 cursor-pointer [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]"
                >
                  The Doctor
                </button>
              </nav>

              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="rounded-full border border-amber-600/70 hover:border-amber-400 bg-stone-950/70 hover:bg-amber-950/30 text-amber-100 text-[11px] lg:text-xs uppercase tracking-[0.18em] px-5 sm:px-6 py-2.5 transition-all shadow-[0_0_25px_rgba(217,119,6,0.18)] hover:shadow-[0_0_35px_rgba(217,119,6,0.4)] flex items-center gap-2 cursor-pointer group backdrop-blur-sm"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </header>

          {/* Center Main Headline & Call To Action */}
          <div className="w-full px-[6%] lg:px-[8%] flex flex-col items-center text-center space-y-3 lg:space-y-4 pointer-events-auto">
            {/* Kicker */}
            <div className="text-[10px] sm:text-[11px] lg:text-xs uppercase tracking-[0.32em] font-medium text-amber-200/90 [text-shadow:0_2px_10px_rgba(0,0,0,0.9)]">
              Precision · Compassion · Trust
            </div>

            {/* Big Editorial Quote mark & Headline */}
            <div className="relative max-w-3xl">
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl text-amber-300/90 leading-none block -mb-2 sm:-mb-4 select-none [text-shadow:0_2px_20px_rgba(0,0,0,0.9)]">
                “
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.9rem] text-stone-100 font-light leading-[1.12] tracking-tight [text-shadow:0_3px_25px_rgba(0,0,0,0.95)]">
                Where science guides
                <br />
                the hands, compassion
                <br />
                guides the heart.
              </h1>
            </div>

            {/* Horizontal Gold Divider */}
            <div className="w-12 h-[1.5px] bg-amber-200/60 my-2 sm:my-3 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />

            {/* Subtitle */}
            <p className="text-stone-300/95 text-xs sm:text-sm lg:text-base font-light tracking-wide max-w-lg [text-shadow:0_2px_15px_rgba(0,0,0,0.9)]">
              Thoughtful care. Clear answers. A healthier tomorrow.
            </p>

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-col items-center gap-2.5">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="rounded-full border border-amber-400/80 hover:border-amber-300 bg-[#090b0e]/90 hover:bg-amber-950/40 text-stone-100 text-xs sm:text-xs lg:text-sm uppercase tracking-[0.2em] px-7 sm:px-9 py-3 sm:py-3.5 transition-all shadow-[0_0_25px_rgba(217,119,6,0.25)] hover:shadow-[0_0_40px_rgba(217,119,6,0.5)] flex items-center gap-2.5 cursor-pointer group backdrop-blur-md"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Meet your doctor link */}
              <button
                type="button"
                onClick={onOpenDoctor}
                className="text-xs text-stone-400 hover:text-stone-200 underline underline-offset-4 decoration-stone-600 hover:decoration-amber-300 transition-all cursor-pointer [text-shadow:0_2px_10px_rgba(0,0,0,0.9)]"
              >
                Meet your doctor
              </button>
            </div>
          </div>

          {/* Bottom 3 Feature Pillars */}
          <footer className="w-full border-t border-stone-800/80 bg-stone-950/75 backdrop-blur-md pointer-events-auto">
            <div className="max-w-6xl mx-auto px-6 py-3.5 sm:py-4 grid grid-cols-3 divide-x divide-stone-800/80 text-[11px] sm:text-xs text-stone-300">
              <button
                type="button"
                onClick={onOpenApproach}
                onMouseEnter={() => setActiveHoverPillar('patient-first')}
                onMouseLeave={() => setActiveHoverPillar(null)}
                className="flex items-center justify-center gap-2.5 hover:text-amber-200 transition-colors cursor-pointer group"
              >
                <User className="w-4 h-4 text-stone-400 group-hover:text-amber-400 transition-colors" />
                <span className="font-light tracking-wide">Patient-first approach</span>
              </button>

              <button
                type="button"
                onClick={onOpenApproach}
                onMouseEnter={() => setActiveHoverPillar('evidence-informed')}
                onMouseLeave={() => setActiveHoverPillar(null)}
                className="flex items-center justify-center gap-2.5 hover:text-amber-200 transition-colors cursor-pointer group"
              >
                <ShieldCheck className="w-4 h-4 text-stone-400 group-hover:text-amber-400 transition-colors" />
                <span className="font-light tracking-wide">Evidence-informed care</span>
              </button>

              <button
                type="button"
                onClick={onOpenApproach}
                onMouseEnter={() => setActiveHoverPillar('personal-attention')}
                onMouseLeave={() => setActiveHoverPillar(null)}
                className="flex items-center justify-center gap-2.5 hover:text-amber-200 transition-colors cursor-pointer group"
              >
                <Heart className="w-4 h-4 text-stone-400 group-hover:text-amber-400 transition-colors" />
                <span className="font-light tracking-wide">Personal attention</span>
              </button>
            </div>
          </footer>
        </div>

        {/* Hover Tooltip for Pillars */}
        {activeHoverPillar && (
          <div className="absolute bottom-[9%] left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-stone-950/95 border border-amber-500/50 backdrop-blur-md text-amber-200 text-xs shadow-2xl pointer-events-none z-30">
            {activeHoverPillar === 'patient-first' && '60–90 min unrushed consultations with direct physician access.'}
            {activeHoverPillar === 'evidence-informed' && 'Biomarker sequencing & peer-reviewed gold-standard protocols.'}
            {activeHoverPillar === 'personal-attention' && 'Bespoke longevity roadmaps & 24/7 dedicated private liaison.'}
          </div>
        )}
      </div>
    </div>
  );
};
