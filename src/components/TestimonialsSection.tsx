import React from 'react';
import { Quote, Star } from 'lucide-react';
import { PATIENT_TESTIMONIALS } from '../data/medicalData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-24 px-6 lg:px-12 bg-[#050608] border-b border-stone-850">
      <div className="relative max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.28em] text-amber-300/80 font-medium">
            Patient Stewardship & Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-100 font-light">
            Voices of Restored Health & Confidence
          </h2>
          <p className="text-stone-400 text-sm md:text-base font-light">
            Reflections from individuals, executives, and families who entrust their health to Atelier Medical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PATIENT_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-stone-950/70 border border-stone-800/80 flex flex-col justify-between space-y-6 relative hover:border-amber-500/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-amber-500/30" />
                <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed italic">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-stone-850">
                <div className="text-sm font-serif text-stone-100 font-normal">
                  {t.author}
                </div>
                <div className="text-xs text-amber-300/80 font-light mt-0.5">
                  {t.designation}
                </div>
                <div className="text-[11px] text-stone-500 mt-1">
                  {t.verified}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
