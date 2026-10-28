import React from 'react';
import { User, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

interface FluidHeroProps {
  onOpenBooking: () => void;
  onOpenDoctor: () => void;
  onOpenSpecialties: () => void;
  onOpenApproach: () => void;
}

export const FluidHero: React.FC<FluidHeroProps> = ({
  onOpenBooking,
  onOpenDoctor,
  onOpenSpecialties,
  onOpenApproach,
}) => {
  return (
    <div className="relative min-h-[92vh] flex flex-col justify-between bg-[#050608] text-stone-100 overflow-hidden border-b border-stone-850">
      {/* Background Looping Video Layer */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <video
          src="/assets/aistudio/Person_moving_towards_center_20261027213826_404f23a6.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-75 md:opacity-90 filter contrast-105"
        />
        {/* Soft feather gradients for ultra-crisp typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050608]/95 via-[#050608]/70 to-[#050608]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-[#050608]/60" />
      </div>

      {/* Top Navbar */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 py-7 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={onOpenApproach}
          className="flex items-center gap-3.5 cursor-pointer group"
        >
          {/* Stylized Cross with center pulse line */}
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
          <span className="font-sans font-light tracking-[0.28em] text-sm md:text-base text-stone-100 uppercase group-hover:text-amber-200 transition-colors [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]">
            Atelier Medical
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs tracking-wider uppercase text-stone-300">
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

        {/* Top Right CTA */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="rounded-full border border-amber-600/70 hover:border-amber-400 bg-stone-950/70 hover:bg-amber-950/30 text-amber-100 text-[11px] md:text-xs uppercase tracking-[0.18em] px-5 sm:px-6 py-2.5 transition-all shadow-[0_0_20px_rgba(217,119,6,0.18)] hover:shadow-[0_0_30px_rgba(217,119,6,0.4)] flex items-center gap-2 cursor-pointer group backdrop-blur-md"
        >
          <span>Book a Consultation</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </header>

      {/* Hero Center Body */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 md:py-16 flex-1 flex flex-col justify-center">
        {/* Glowing ECG wave on left */}
        <div className="absolute left-0 top-[58%] w-[280px] sm:w-[380px] pointer-events-none hidden sm:block">
          <svg className="w-full h-24" viewBox="0 0 380 90" fill="none">
            <path
              d="M 0 50 L 120 50 L 132 46 L 140 54 L 155 12 L 170 82 L 185 32 L 195 60 L 205 50 L 380 50"
              stroke="#2dd4bf"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="filter drop-shadow-[0_0_10px_rgba(45,212,191,0.9)] animate-pulse-glow"
            />
          </svg>
        </div>

        <div className="max-w-2xl text-left md:text-center mx-auto md:mx-0 lg:ml-8 space-y-6">
          {/* Kicker */}
          <div className="text-[11px] md:text-xs uppercase tracking-[0.32em] font-medium text-amber-200/90 [text-shadow:0_2px_10px_rgba(0,0,0,0.9)]">
            Precision · Compassion · Trust
          </div>

          {/* Big Editorial Quote mark & Headline */}
          <div className="relative">
            <span className="font-serif text-5xl md:text-6xl text-amber-300/90 leading-none block md:inline-block -mb-4 md:-mb-8 md:-ml-8 select-none [text-shadow:0_2px_15px_rgba(0,0,0,0.9)]">
              “
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4rem] text-stone-100 font-light leading-[1.12] tracking-tight [text-shadow:0_3px_25px_rgba(0,0,0,0.95)]">
              Where science guides
              <br />
              the hands, compassion
              <br />
              guides the heart.
            </h1>
          </div>

          {/* Elegant Horizontal Divider */}
          <div className="w-12 h-[1.5px] bg-amber-200/60 my-5 md:mx-auto shadow-[0_0_10px_rgba(245,158,11,0.4)]" />

          {/* Subtitle */}
          <p className="text-stone-300/95 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-lg md:mx-auto [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
            Thoughtful care. Clear answers. A healthier tomorrow.
          </p>

          {/* Center Call to Action Button */}
          <div className="pt-2 flex flex-col items-start md:items-center gap-3">
            <button
              type="button"
              onClick={onOpenBooking}
              className="rounded-full border border-amber-400/80 hover:border-amber-300 bg-[#090b0e]/90 hover:bg-amber-950/40 text-stone-100 text-xs md:text-sm uppercase tracking-[0.2em] px-8 py-3.5 transition-all shadow-[0_0_25px_rgba(217,119,6,0.25)] hover:shadow-[0_0_40px_rgba(217,119,6,0.5)] flex items-center gap-2.5 cursor-pointer group backdrop-blur-md"
            >
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Meet Doctor secondary link */}
            <button
              type="button"
              onClick={onOpenDoctor}
              className="text-xs text-stone-400 hover:text-stone-200 underline underline-offset-4 decoration-stone-600 hover:decoration-amber-300 transition-all cursor-pointer [text-shadow:0_2px_10px_rgba(0,0,0,0.9)]"
            >
              Meet your doctor
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Feature Bar */}
      <footer className="relative z-20 border-t border-stone-850/80 bg-stone-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-800/80 text-xs text-stone-300">
            {/* Pillar 1 */}
            <div
              onClick={onOpenApproach}
              className="flex items-center justify-center gap-2.5 py-2 md:py-0 hover:text-amber-200 transition-colors cursor-pointer group px-2"
            >
              <User className="w-4 h-4 text-stone-400 group-hover:text-amber-400 transition-colors" />
              <span className="font-light tracking-wide">Patient-first approach</span>
            </div>

            {/* Pillar 2 */}
            <div
              onClick={onOpenApproach}
              className="flex items-center justify-center gap-2.5 py-2 md:py-0 hover:text-amber-200 transition-colors cursor-pointer group px-2"
            >
              <ShieldCheck className="w-4 h-4 text-stone-400 group-hover:text-amber-400 transition-colors" />
              <span className="font-light tracking-wide">Evidence-informed care</span>
            </div>

            {/* Pillar 3 */}
            <div
              onClick={onOpenApproach}
              className="flex items-center justify-center gap-2.5 py-2 md:py-0 hover:text-amber-200 transition-colors cursor-pointer group px-2"
            >
              <Heart className="w-4 h-4 text-stone-400 group-hover:text-amber-400 transition-colors" />
              <span className="font-light tracking-wide">Personal attention</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
