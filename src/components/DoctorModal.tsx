import React from 'react';
import { X, Award, GraduationCap, Stethoscope, ArrowRight, Building, CheckCircle2 } from 'lucide-react';
import { DOCTOR_DATA } from '../data/medicalData';

interface DoctorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const DoctorModal: React.FC<DoctorModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-[#090b0e] border border-amber-500/30 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.85)] overflow-hidden my-8">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/70">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-sans font-medium uppercase tracking-[0.25em] text-amber-300/80">
              The Physician · Atelier Medical
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-100 hover:bg-stone-800/60 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal content */}
        <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto space-y-8">
          {/* Hero Doctor Info */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-amber-500/40 bg-stone-950">
                <img
                  src="/assets/doctor_feathered.png"
                  alt={DOCTOR_DATA.name}
                  className="w-full h-full object-cover object-top filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] uppercase tracking-widest text-amber-300/90 font-medium block">
                    Chief of Clinical Medicine
                  </span>
                  <div className="text-sm font-serif text-white">{DOCTOR_DATA.name}</div>
                </div>
              </div>
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-amber-500/20 to-teal-500/20 -z-10 blur-lg opacity-40" />
            </div>

            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-1">
                  Founder & Clinical Director
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-stone-100 font-normal">
                  {DOCTOR_DATA.name}
                </h3>
                <p className="text-xs text-stone-400 font-light mt-0.5">
                  {DOCTOR_DATA.role}
                </p>
              </div>

              {/* Quote block */}
              <div className="p-4 rounded-xl bg-stone-950/90 border-l-2 border-amber-400/80 text-stone-300 text-xs italic leading-relaxed">
                “{DOCTOR_DATA.philosophy}”
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-3 rounded-lg bg-stone-900/50 border border-stone-800">
                  <div className="text-amber-300 font-serif text-lg font-light">15+ Years</div>
                  <div className="text-stone-400 text-[11px]">Academic & Concierge Practice</div>
                </div>
                <div className="p-3 rounded-lg bg-stone-900/50 border border-stone-800">
                  <div className="text-amber-300 font-serif text-lg font-light">Dual-Board</div>
                  <div className="text-stone-400 text-[11px]">Internal Medicine & Cardiology</div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Training */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300/80">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Academic Pedigree & Rigorous Training</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {DOCTOR_DATA.education.map((edu, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80 space-y-1">
                  <span className="text-[10px] text-amber-400/80 uppercase font-medium">{edu.year}</span>
                  <div className="text-xs font-medium text-stone-100">{edu.institution}</div>
                  <div className="text-[11px] text-stone-400 leading-snug">{edu.degree}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Biography */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300/80">
              <Stethoscope className="w-4 h-4 text-amber-400" />
              <span>Clinical Ethos & Practice Background</span>
            </div>
            <div className="space-y-3 text-xs text-stone-300 leading-relaxed font-light">
              {DOCTOR_DATA.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Board Certifications */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300/80">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Board Certifications & Fellowships</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {DOCTOR_DATA.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-stone-950/40 border border-stone-850 text-xs text-stone-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Affiliations */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300/80">
              <Building className="w-4 h-4 text-amber-400" />
              <span>Hospital & Academic Affiliations</span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-stone-400">
              {DOCTOR_DATA.affiliations.map((aff, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-[11px]">
                  {aff}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-stone-800 bg-stone-950/80">
          <span className="text-xs text-stone-400 hidden sm:inline">
            Direct 1:1 consultation availability in London, New York & Beverly Hills
          </span>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-amber-400/80 bg-amber-950/40 text-amber-100 text-xs uppercase tracking-widest font-medium hover:bg-amber-900/60 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(217,119,6,0.2)]"
          >
            Schedule Consultation with Dr. Vance
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
