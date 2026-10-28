import React from 'react';
import { X, User, ShieldCheck, Heart, Activity, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CLINICAL_PILLARS } from '../data/medicalData';

interface ApproachModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ApproachModal: React.FC<ApproachModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#090b0e] border border-amber-500/30 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.85)] overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-800 bg-stone-950/70">
          <div>
            <span className="text-[11px] font-sans font-medium uppercase tracking-[0.25em] text-amber-300/80">
              The Atelier Philosophy
            </span>
            <h2 className="text-xl font-serif text-stone-100 font-normal">
              Precision Medicine Governed by Deep Compassion
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

        {/* Modal content */}
        <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-medium">
              Precision · Compassion · Trust
            </span>
            <p className="text-sm md:text-base font-serif text-stone-200 italic font-light">
              “Modern clinical healthcare often atomizes the patient into 10-minute slots and automated prescriptions. At Atelier Medical, we return to the timeless nobility of the physician-patient covenant.”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CLINICAL_PILLARS.map((pillar) => {
              const Icon =
                pillar.iconName === 'user'
                  ? User
                  : pillar.iconName === 'shield'
                  ? ShieldCheck
                  : pillar.iconName === 'heart'
                  ? Heart
                  : Activity;

              return (
                <div
                  key={pillar.id}
                  className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800/80 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold">
                        {pillar.metrics}
                      </span>
                      <h3 className="text-base font-serif text-stone-100 font-normal mt-0.5">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-stone-400 mt-1 leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-850 space-y-2">
                    <div className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">
                      Clinical Commitments:
                    </div>
                    <ul className="space-y-1.5">
                      {pillar.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-xs text-stone-400 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/80 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-5 rounded-2xl bg-stone-950 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-sm font-serif text-stone-100">
                Experience the Atelier Difference in Person
              </h4>
              <p className="text-xs text-stone-400 font-light">
                Private consultation suites in Mayfair London, Manhattan Upper East Side, and Beverly Hills.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-6 py-2.5 rounded-full border border-amber-400/80 bg-amber-950/40 text-amber-100 text-xs uppercase tracking-widest font-medium hover:bg-amber-900/60 transition-all flex items-center gap-2 shrink-0"
            >
              Reserve a Consultation
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-4 border-t border-stone-800 bg-stone-950/80">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-stone-850 text-stone-300 text-xs font-medium hover:bg-stone-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
