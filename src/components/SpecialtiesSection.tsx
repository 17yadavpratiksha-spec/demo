import React, { useState } from 'react';
import { ArrowRight, Clock, Activity, CheckCircle2, ChevronRight } from 'lucide-react';
import { CLINICAL_SPECIALTIES } from '../data/medicalData';

interface SpecialtiesSectionProps {
  onOpenBooking: (specialtyId?: string) => void;
  onOpenSpecialtiesModal: () => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onOpenBooking,
  onOpenSpecialtiesModal
}) => {
  const [selectedId, setSelectedId] = useState<string>(CLINICAL_SPECIALTIES[0].id);

  const activeSpecialty =
    CLINICAL_SPECIALTIES.find((s) => s.id === selectedId) || CLINICAL_SPECIALTIES[0];

  return (
    <section id="specialties" className="relative py-24 px-6 lg:px-12 bg-[#050608] border-b border-stone-850">
      <div className="relative max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.28em] text-amber-300/80 font-medium">
              Comprehensive Diagnostic Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-100 font-light">
              Clinical Specialties & Preventative Programs
            </h2>
            <p className="text-stone-400 text-sm md:text-base font-light">
              Designed to detect cellular, arterial, and metabolic dysfunction decades before acute clinical events occur.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenSpecialtiesModal}
            className="self-start md:self-end px-5 py-2.5 rounded-full border border-stone-800 hover:border-amber-500/50 text-xs uppercase tracking-wider text-stone-300 hover:text-amber-200 transition-all flex items-center gap-2"
          >
            <span>View All Protocols</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

        {/* Interactive Master-Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Tab list */}
          <div className="lg:col-span-5 space-y-2">
            {CLINICAL_SPECIALTIES.map((spec) => {
              const isSelected = spec.id === selectedId;
              return (
                <div
                  key={spec.id}
                  onClick={() => setSelectedId(spec.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'border-amber-500/60 bg-stone-900/80 shadow-[0_4px_25px_rgba(217,119,6,0.12)]'
                      : 'border-stone-850 bg-stone-950/40 hover:border-stone-750 hover:bg-stone-900/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-amber-400/80 font-medium block">
                        {spec.category}
                      </span>
                      <h4
                        className={`text-base font-serif font-normal mt-0.5 ${
                          isSelected ? 'text-amber-200' : 'text-stone-200'
                        }`}
                      >
                        {spec.title}
                      </h4>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-amber-400 translate-x-1' : 'text-stone-600'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Active Specialty Detail Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#090b0f] border border-amber-500/30 shadow-[0_15px_50px_rgba(0,0,0,0.8)] space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
                  {activeSpecialty.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-stone-100 font-normal mt-1">
                  {activeSpecialty.title}
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-xs text-amber-300">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{activeSpecialty.duration}</span>
              </div>
            </div>

            <p className="text-stone-300 text-sm leading-relaxed font-light">
              {activeSpecialty.description}
            </p>

            {/* Diagnostic Protocols included */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-300/80 font-medium">
                <Activity className="w-3.5 h-3.5 text-amber-400" />
                <span>Diagnostic Protocols & Biomarker Testing:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeSpecialty.diagnosticTools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-stone-950/70 border border-stone-850 text-xs text-stone-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Indications */}
            <div className="p-4 rounded-xl bg-stone-950/90 border border-stone-800/80 space-y-1.5">
              <span className="text-[11px] uppercase tracking-wider text-amber-400/90 font-medium block">
                Recommended Patient Candidates:
              </span>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                {activeSpecialty.idealFor}
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-stone-400">
                Direct physician review & written longevity dossier included.
              </span>
              <button
                type="button"
                onClick={() => onOpenBooking(activeSpecialty.id)}
                className="w-full sm:w-auto px-7 py-3 rounded-full border border-amber-400/80 bg-amber-950/40 text-amber-100 text-xs uppercase tracking-[0.18em] font-medium hover:bg-amber-900/60 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(217,119,6,0.2)] cursor-pointer group"
              >
                <span>Reserve Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
