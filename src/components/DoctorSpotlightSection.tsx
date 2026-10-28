import React from 'react';
import { Award, GraduationCap, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { DOCTOR_DATA } from '../data/medicalData';

interface DoctorSpotlightSectionProps {
  onOpenBooking: () => void;
  onOpenDoctorModal: () => void;
}

export const DoctorSpotlightSection: React.FC<DoctorSpotlightSectionProps> = ({
  onOpenBooking,
  onOpenDoctorModal
}) => {
  return (
    <section id="doctor" className="relative py-24 px-6 lg:px-12 bg-[#060709] border-b border-stone-850 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute right-0 top-1/3 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Doctor Portrait visual */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-amber-500/40 bg-stone-950 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <img
                src="/assets/doctor_feathered.png"
                alt={DOCTOR_DATA.name}
                className="w-full h-full object-cover object-top filter contrast-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-85" />

              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-[11px] font-sans font-medium uppercase tracking-[0.25em] text-amber-300">
                    Chief Physician
                  </span>
                </div>
                <div className="text-xl font-serif text-white">{DOCTOR_DATA.name}</div>
                <p className="text-xs text-stone-400 font-light">{DOCTOR_DATA.role}</p>
              </div>
            </div>

            {/* Ambient framing glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/20 via-teal-500/10 to-transparent -z-10 blur-xl opacity-50" />
          </div>

          {/* Right Text Dossier */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-950/20 text-amber-300 text-[11px] uppercase tracking-[0.25em]">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>The Physician</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-100 font-light leading-tight">
                Dedicated to the Noble Art of Healing.
              </h2>
            </div>

            {/* Philosophy callout */}
            <blockquote className="p-5 rounded-2xl bg-[#090b0e] border-l-2 border-amber-400 text-stone-300 text-sm md:text-base font-serif italic leading-relaxed">
              “{DOCTOR_DATA.philosophy}”
            </blockquote>

            <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
              {DOCTOR_DATA.bio[0]}
            </p>

            {/* Credentials Pills & List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-850 space-y-1">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-medium">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Training</span>
                </div>
                <p className="text-xs text-stone-300 font-light">
                  Harvard Medical School (MD, Magna Cum Laude) · Johns Hopkins Chief Resident · Stanford Cardiology
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-850 space-y-1">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-medium">
                  <Award className="w-4 h-4" />
                  <span>Certifications</span>
                </div>
                <p className="text-xs text-stone-300 font-light">
                  American Board of Internal Medicine · Fellow, American College of Cardiology (FACC)
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenDoctorModal}
                className="px-6 py-3 rounded-full border border-stone-800 hover:border-amber-500/50 text-xs uppercase tracking-widest text-stone-300 hover:text-amber-200 transition-all text-center"
              >
                Read Full Biography & Papers
              </button>
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-7 py-3 rounded-full border border-amber-400/80 bg-amber-950/40 text-xs uppercase tracking-[0.18em] text-amber-100 hover:bg-amber-900/60 transition-all shadow-[0_0_25px_rgba(217,119,6,0.2)] flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Book with Dr. Vance</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
