import React from 'react';
import { X, ArrowRight, Activity, Clock, Target, CheckCircle2 } from 'lucide-react';
import { CLINICAL_SPECIALTIES } from '../data/medicalData';

interface SpecialtiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSpecialtyForBooking: (specialtyId: string) => void;
}

export const SpecialtiesModal: React.FC<SpecialtiesModalProps> = ({
  isOpen,
  onClose,
  onSelectSpecialtyForBooking
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#090b0e] border border-amber-500/30 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.85)] overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-800 bg-stone-950/70">
          <div>
            <span className="text-[11px] font-sans font-medium uppercase tracking-[0.25em] text-amber-300/80">
              Clinical Portfolio · Atelier Medical
            </span>
            <h2 className="text-xl font-serif text-stone-100 font-normal">
              Specialized Medical Practices & Diagnostic Suites
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-100 hover:bg-stone-800/60 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto space-y-6">
          <p className="text-xs text-stone-400 font-light max-w-2xl leading-relaxed">
            Every clinical specialty is executed with bespoke diagnostic protocols, continuous biometric analysis, and the dedicated direct attention of Dr. Julian Vance.
          </p>

          <div className="space-y-4">
            {CLINICAL_SPECIALTIES.map((spec) => (
              <div
                key={spec.id}
                className="p-5 rounded-2xl bg-stone-950/70 border border-stone-800/80 hover:border-amber-500/50 transition-all space-y-3 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-850 pb-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold">
                      {spec.category}
                    </span>
                    <h3 className="text-lg font-serif text-stone-100 font-normal group-hover:text-amber-200 transition-colors">
                      {spec.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-400">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{spec.duration}</span>
                  </div>
                </div>

                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  {spec.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-lg bg-stone-900/40 border border-stone-800/60">
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-amber-300/80 font-medium mb-1.5">
                      <Activity className="w-3.5 h-3.5 text-amber-400" />
                      Diagnostic Protocols Included:
                    </div>
                    <ul className="space-y-1">
                      {spec.diagnosticTools.map((tool, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-xs text-stone-400">
                          <CheckCircle2 className="w-3 h-3 text-amber-400/80 shrink-0" />
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-lg bg-stone-900/40 border border-stone-800/60 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-amber-300/80 font-medium mb-1.5">
                        <Target className="w-3.5 h-3.5 text-amber-400" />
                        Clinical Indication:
                      </div>
                      <p className="text-xs text-stone-400 leading-relaxed font-light">
                        {spec.idealFor}
                      </p>
                    </div>

                    <div className="pt-3 text-right">
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onSelectSpecialtyForBooking(spec.id);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-medium group-hover:translate-x-0.5 transition-transform"
                      >
                        Book This Specialty
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-stone-800 bg-stone-950/80">
          <span className="text-xs text-stone-400">
            Unsure which diagnostic pathway suits your health goals?
          </span>
          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectSpecialtyForBooking(CLINICAL_SPECIALTIES[0].id);
            }}
            className="px-5 py-2 rounded-full border border-amber-400/80 bg-amber-950/40 text-amber-100 text-xs uppercase tracking-widest font-medium hover:bg-amber-900/60 transition-all flex items-center gap-2"
          >
            Schedule Intake Consultation
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
