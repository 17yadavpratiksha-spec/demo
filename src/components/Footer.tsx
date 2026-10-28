import React from 'react';
import { MapPin, Phone, Clock, Shield } from 'lucide-react';
import { CLINIC_LOCATIONS } from '../data/medicalData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenDoctor: () => void;
  onOpenSpecialties: () => void;
  onOpenApproach: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenDoctor,
  onOpenSpecialties,
  onOpenApproach
}) => {
  return (
    <footer className="relative bg-[#040507] text-stone-300 pt-16 pb-12 border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <svg
                className="w-7 h-7 text-amber-400"
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
              <span className="font-sans font-light tracking-[0.28em] text-sm text-stone-100 uppercase">
                Atelier Medical
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed font-light max-w-sm">
              Where science guides the hands, compassion guides the heart. Bespoke concierge internal medicine, advanced cardiovascular diagnostics, and longevity architecture.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-full border border-amber-500/70 bg-amber-950/30 hover:bg-amber-900/50 text-amber-200 text-xs uppercase tracking-widest transition-all"
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>

          {/* Practice Navigation */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-300/80 font-medium block">
              Sanctuary
            </span>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button type="button" onClick={onOpenApproach} className="hover:text-amber-200 transition-colors">
                  Our Approach & Philosophy
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenSpecialties} className="hover:text-amber-200 transition-colors">
                  Clinical Specialties
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenDoctor} className="hover:text-amber-200 transition-colors">
                  Meet Dr. Julian Vance
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenBooking} className="hover:text-amber-200 transition-colors">
                  Reserve Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-300/80 font-medium block">
              Private Consulting Suites
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CLINIC_LOCATIONS.map((loc, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-stone-950/60 border border-stone-850 space-y-1">
                  <div className="text-xs font-serif text-stone-200">{loc.city}</div>
                  <div className="text-[10px] text-stone-400 leading-snug">{loc.name}</div>
                  <div className="text-[10px] text-amber-400/90">{loc.phone}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} Atelier Medical Practice LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Confidential Medical Protocol</span>
            <span>·</span>
            <span>HIPAA & GDPR Compliant</span>
            <span>·</span>
            <span>Emergency Services: Dial 911 / 999</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
