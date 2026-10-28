export interface Specialty {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  diagnosticTools: string[];
  duration: string;
  idealFor: string;
}

export interface DoctorProfile {
  name: string;
  title: string;
  role: string;
  credentials: string[];
  education: { institution: string; degree: string; year: string }[];
  bio: string[];
  philosophy: string;
  affiliations: string[];
  consultationFocus: string[];
}

export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'user' | 'shield' | 'heart' | 'activity';
  metrics: string;
  details: string[];
}

export interface AppointmentBooking {
  specialtyId: string;
  specialtyTitle: string;
  location: string;
  date: string;
  timeSlot: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  healthGoals: string;
  confirmationId?: string;
  createdAt?: string;
}
