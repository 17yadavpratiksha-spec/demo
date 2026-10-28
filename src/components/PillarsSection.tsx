import React from 'react';
import { User, ShieldCheck, Heart, Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { CLINICAL_PILLARS } from '../data/medicalData';

interface PillarsSectionProps {
  onOpenBooking: () => void;
  onOpenApproach: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onOpenBooking, onOpenApproach }) => {
  return (
    <section id="approach" className="relative py-24 px-6 lg:px-12 bg-[#06070a] border-b border-stone-850">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-950/20 text-amber-300 text-[11px] uppercase tracking-[0.25em]">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>The Atelier Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-100 font-light">
            Compassion in Practice, Precision in Every Detail.
          </h2>
          <p className="text-stone-400 text-sm md:text-base font-light leading-relaxed">
            Healthcare reimagined as a sacred dialogue. We combine rigorous academic medicine with private concierge attention, ensuring no detail of your health is ever overlooked.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CLINICAL_PILLARS.map((pillar) => {
            const Icon =
              pillar.iconName === 'user'
                ? User
                : pillar.iconName === 'shield'
                ? ShieldCheck
                : Heart;

            return (
              <div
                key={pillar.id}
                className="group relative p-8 rounded-2xl bg-stone-950/80 border border-stone-800/80 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(217,119,6,0.1)]"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-center justify-center text-amber-300 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-sans font-semibold uppercase tracking-widest text-amber-400/90 bg-stone-900/90 px-3 py-1 rounded-full border border-stone-800">
                      {pillar.metrics}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif text-stone-100 font-normal group-hover:text-amber-200 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-amber-300/70 uppercase tracking-wider font-medium mt-1">
                      {pillar.subtitle}
                    </p>
                    <p className="text-stone-400 text-xs sm:text-sm mt-3 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-850 space-y-2.5">
                  <span className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">
                    Clinical Distinctions
                  </span>
                  <ul className="space-y-2">
                    {pillar.details.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-stone-300 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Banner: The Unrushed Consultation */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-stone-950 via-[#0a0c10] to-stone-950 border border-amber-500/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs uppercase tracking-widest text-teal-400 font-medium">
              <Clock className="w-4 h-4" />
              <span>Zero Waiting Rooms · Direct Physician Cell Line</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-serif text-stone-100 font-light">
              Experience Healthcare Unencumbered by Volume.
            </h4>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
              We welcome only a select number of patients into our concierge fold each season, guaranteeing immediate appointments, direct personal communication, and uncompromised focus.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button
              type="button"
              onClick={onOpenApproach}
              className="px-6 py-3 rounded-full border border-stone-700 bg-stone-900 text-xs uppercase tracking-widest text-stone-300 hover:text-white hover:border-stone-500 transition-all cursor-pointer"
            >
              Our Philosophy
            </button>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-7 py-3 rounded-full border border-amber-400/80 bg-amber-950/40 text-xs uppercase tracking-[0.18em] text-amber-100 hover:bg-amber-900/60 transition-all shadow-[0_0_25px_rgba(217,119,6,0.2)] flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
