import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, Download, User, Mail, Phone, ArrowRight, Shield } from 'lucide-react';
import { CLINICAL_SPECIALTIES, CLINIC_LOCATIONS } from '../data/medicalData';
import { AppointmentBooking } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpecialtyId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialSpecialtyId }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string>(
    initialSpecialtyId || CLINICAL_SPECIALTIES[0].id
  );
  const [selectedLocation, setSelectedLocation] = useState<string>(CLINIC_LOCATIONS[0].name);
  const [selectedDate, setSelectedDate] = useState<string>('2026-11-02');
  const [selectedTime, setSelectedTime] = useState<string>('10:30 AM');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentBooking | null>(null);

  if (!isOpen) return null;

  const currentSpecialty = CLINICAL_SPECIALTIES.find((s) => s.id === selectedSpecialtyId) || CLINICAL_SPECIALTIES[0];

  const handleNext = () => {
    if (step === 3) {
      if (!formData.name.trim() || !formData.email.trim()) {
        return;
      }
      const booking: AppointmentBooking = {
        specialtyId: currentSpecialty.id,
        specialtyTitle: currentSpecialty.title,
        location: selectedLocation,
        date: selectedDate,
        timeSlot: selectedTime,
        patientName: formData.name,
        patientEmail: formData.email,
        patientPhone: formData.phone,
        healthGoals: formData.notes,
        confirmationId: `ATM-${Math.floor(100000 + Math.random() * 900000)}`,
        createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };
      setConfirmedBooking(booking);
      setStep(4);
    } else {
      setStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleDownloadCalendar = () => {
    if (!confirmedBooking) return;
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Atelier Medical//Consultation//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Atelier Medical Consultation - ${confirmedBooking.specialtyTitle}`,
      `DESCRIPTION:Private clinical consultation with Dr. Julian Vance, MD at ${confirmedBooking.location}. Reference: ${confirmedBooking.confirmationId}`,
      `LOCATION:${confirmedBooking.location}`,
      `STATUS:CONFIRMED`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Atelier-Medical-${confirmedBooking.confirmationId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '11:45 AM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#090b0e] border border-amber-500/30 rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden my-8">
        {/* Top subtle golden glow header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-800/80 bg-stone-950/60">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <div>
              <span className="text-[11px] font-sans font-medium uppercase tracking-[0.25em] text-amber-300/80">
                Atelier Medical · Private Concierge
              </span>
              <h2 className="text-lg font-serif text-stone-100 font-normal">
                {step === 4 ? 'Consultation Confirmed' : 'Reserve Private Consultation'}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-100 hover:bg-stone-800/60 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step indicator */}
        {step < 4 && (
          <div className="flex items-center justify-between px-8 py-3 bg-stone-900/40 border-b border-stone-800/60 text-xs text-stone-400">
            <span className={step >= 1 ? 'text-amber-300 font-medium' : 'text-stone-600'}>
              1. Specialty
            </span>
            <span className="text-stone-700">/</span>
            <span className={step >= 2 ? 'text-amber-300 font-medium' : 'text-stone-600'}>
              2. Location & Date
            </span>
            <span className="text-stone-700">/</span>
            <span className={step >= 3 ? 'text-amber-300 font-medium' : 'text-stone-600'}>
              3. Patient Details
            </span>
          </div>
        )}

        {/* Body content */}
        <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto">
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-amber-200/70">
                Select clinical focus for your consultation
              </p>
              <div className="space-y-3">
                {CLINICAL_SPECIALTIES.map((spec) => (
                  <div
                    key={spec.id}
                    onClick={() => setSelectedSpecialtyId(spec.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedSpecialtyId === spec.id
                        ? 'border-amber-400/80 bg-amber-950/20 shadow-[0_0_20px_rgba(217,119,6,0.15)]'
                        : 'border-stone-800/80 bg-stone-900/30 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] tracking-wider uppercase text-amber-400/70 block mb-1">
                          {spec.category} · {spec.duration}
                        </span>
                        <h4 className="text-base font-serif text-stone-100 font-normal">
                          {spec.title}
                        </h4>
                        <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                          {spec.tagline}
                        </p>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border mt-1 flex items-center justify-center ${
                          selectedSpecialtyId === spec.id
                            ? 'border-amber-400 bg-amber-400/30'
                            : 'border-stone-700'
                        }`}
                      >
                        {selectedSpecialtyId === spec.id && (
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="text-xs uppercase tracking-widest text-amber-200/70 block mb-2">
                  Select Consultation Location
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {CLINIC_LOCATIONS.map((loc) => (
                    <div
                      key={loc.name}
                      onClick={() => setSelectedLocation(loc.name)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        selectedLocation === loc.name
                          ? 'border-amber-400/80 bg-amber-950/20'
                          : 'border-stone-800 bg-stone-900/30 hover:border-stone-700'
                      }`}
                    >
                      <MapPin className="w-4 h-4 text-amber-400 mb-1" />
                      <div className="text-xs font-medium text-stone-200">{loc.city}</div>
                      <div className="text-[11px] text-stone-400 leading-tight mt-0.5">{loc.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-amber-200/70 block mb-2">
                  Preferred Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-stone-900/60 border border-stone-800 rounded-lg px-4 py-2.5 text-sm text-stone-200 focus:outline-none focus:border-amber-400/80"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-amber-200/70 block mb-2">
                  Available Physician Time Slots (Dr. Julian Vance)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-3 text-xs rounded-lg border transition-all text-center ${
                        selectedTime === time
                          ? 'border-amber-400/80 bg-amber-950/30 text-amber-200'
                          : 'border-stone-800 bg-stone-900/40 text-stone-300 hover:border-stone-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="p-3 bg-amber-950/10 border border-amber-500/20 rounded-xl flex items-start gap-3">
                <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-stone-300 leading-relaxed">
                  Strict Medical Privacy: Your health data and personal identifiers are safeguarded under physician-patient privilege and highest HIPAA / GDPR standards.
                </p>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-stone-300 block mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lady Katherine Vance or Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-stone-900/60 border border-stone-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-stone-200 focus:outline-none focus:border-amber-400/80"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs uppercase tracking-wider text-stone-300 block mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="patient@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-stone-900/60 border border-stone-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-stone-200 focus:outline-none focus:border-amber-400/80"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-stone-300 block mb-1">
                    Direct Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-stone-900/60 border border-stone-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-stone-200 focus:outline-none focus:border-amber-400/80"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-stone-300 block mb-1">
                  Primary Clinical Objective or Health Concerns (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Comprehensive cardiovascular screening, second opinion on coronary angiogram, or executive longevity optimization..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-stone-900/60 border border-stone-800 rounded-lg px-4 py-2.5 text-sm text-stone-200 focus:outline-none focus:border-amber-400/80"
                />
              </div>
            </div>
          )}

          {step === 4 && confirmedBooking && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-400/40 flex items-center justify-center mx-auto text-amber-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
                  Reference: {confirmedBooking.confirmationId}
                </span>
                <h3 className="text-2xl font-serif text-stone-100 font-normal mt-1">
                  Consultation Confirmed with Dr. Julian Vance
                </h3>
                <p className="text-xs text-stone-400 mt-2 max-w-md mx-auto">
                  A personalized itinerary and intake dossier have been dispatched to{' '}
                  <span className="text-stone-200 font-medium">{confirmedBooking.patientEmail}</span>.
                </p>
              </div>

              <div className="p-4 bg-stone-950/80 border border-stone-800 rounded-xl text-left space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-stone-900">
                  <span className="text-stone-500">Service:</span>
                  <span className="text-stone-200 font-medium">{confirmedBooking.specialtyTitle}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-900">
                  <span className="text-stone-500">Location:</span>
                  <span className="text-stone-200 font-medium">{confirmedBooking.location}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-900">
                  <span className="text-stone-500">Appointment Date:</span>
                  <span className="text-stone-200 font-medium">{confirmedBooking.date} at {confirmedBooking.timeSlot}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">Patient:</span>
                  <span className="text-stone-200 font-medium">{confirmedBooking.patientName}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  type="button"
                  onClick={handleDownloadCalendar}
                  className="px-5 py-2.5 rounded-full border border-amber-500/50 bg-stone-900 text-xs font-medium text-amber-200 hover:bg-amber-950/30 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Add to Calendar (.ics)
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-stone-100 text-stone-900 text-xs font-medium hover:bg-white transition-all"
                >
                  Return to Sanctuary
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer controls */}
        {step < 4 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-stone-800/80 bg-stone-950/60">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((prev) => (prev - 1) as 1 | 2 | 3)}
                className="px-4 py-2 text-xs text-stone-400 hover:text-stone-200"
              >
                ← Back
              </button>
            ) : (
              <div />
            )}
            <button
              type="button"
              onClick={handleNext}
              disabled={step === 3 && (!formData.name || !formData.email)}
              className="px-6 py-2.5 rounded-full border border-amber-400/80 bg-amber-950/40 text-amber-100 text-xs uppercase tracking-widest font-medium hover:bg-amber-900/60 disabled:opacity-50 transition-all flex items-center gap-2"
            >
              {step === 3 ? 'Confirm Consultation' : 'Continue'}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
