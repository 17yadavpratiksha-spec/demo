import { Specialty, DoctorProfile, Pillar } from '../types';

export const DOCTOR_DATA: DoctorProfile = {
  name: 'Dr. Julian Vance, MD, FACC',
  title: 'Founder & Chief of Clinical Medicine',
  role: 'Internal Medicine & Diagnostic Cardiology Specialist',
  credentials: [
    'Board Certified, American Board of Internal Medicine (ABIM)',
    'Fellow, American College of Cardiology (FACC)',
    'Subspecialty Certification in Adult Echocardiography & Vascular Ultrasound',
    'Member, European Society of Cardiology & International Society for Heart Research'
  ],
  education: [
    { institution: 'Harvard Medical School', degree: 'Doctor of Medicine (MD), Magna Cum Laude', year: '2008' },
    { institution: 'Johns Hopkins Hospital', degree: 'Internal Medicine Residency & Chief Medical Resident', year: '2012' },
    { institution: 'Stanford University Medical Center', degree: 'Fellowship in Cardiovascular Disease & Advanced Imaging', year: '2015' }
  ],
  bio: [
    'Dr. Julian Vance established Atelier Medical after fifteen years of academic hospital leadership and private clinical practice. Driven by the conviction that modern healthcare too often trades diagnostic depth for patient volume, Dr. Vance created a private medical sanctuary where clinical mastery and unhurried human attention co-exist.',
    'A clinician-scientist whose research has appeared in the New England Journal of Medicine and Circulation, Dr. Vance pairs molecular diagnostics, non-invasive hemodynamics, and predictive biomarker analysis with a rigorous bedside examination.',
    'At Atelier Medical, every patient is received not as a collection of lab values, but as an individual whose longevity and quality of life require bespoke, meticulous clinical architecture.'
  ],
  philosophy: 'Where science guides the hands, compassion guides the heart. True healing begins where cutting-edge diagnostics meet attentive, unhurried listening.',
  affiliations: [
    'Mount Sinai Health System, Attending Physician',
    'The Wellington Hospital, London, Consultant Physician',
    'Cedars-Sinai Medical Center, Affiliate Faculty'
  ],
  consultationFocus: [
    'Comprehensive multi-system diagnostic workups',
    'Advanced cardiovascular risk stratification & arterial plaque analysis',
    'Metabolic optimization & longevity roadmap design',
    'Complex clinical second opinions & pre-surgical readiness'
  ]
};

export const CLINICAL_PILLARS: Pillar[] = [
  {
    id: 'patient-first',
    title: 'Patient-first approach',
    subtitle: 'Unhurried, intimate consultations',
    description: 'We limit our daily patient census to ensure every consultation lasts between 60 to 90 minutes. You speak directly with your physician, without intermediaries, rushed schedules, or hurried handoffs.',
    iconName: 'user',
    metrics: '90 Min',
    details: [
      '60 to 90 minute uninterrupted direct physician consultations',
      'Same-day direct telephone & messaging access to Dr. Vance',
      'Dedicated private consultation suites with absolute confidentiality',
      'Comprehensive digital health portal with direct lab result annotations'
    ]
  },
  {
    id: 'evidence-informed',
    title: 'Evidence-informed care',
    subtitle: 'Rooted in peer-reviewed science',
    description: 'Every recommendation is anchored in rigorous clinical research and gold-standard trial evidence. We integrate advanced biomarkers, continuous physiological tracking, and genomic sequencing.',
    iconName: 'shield',
    metrics: 'Tier 1 Evidence',
    details: [
      'Comprehensive multi-omics biomarker mapping and genetic risk profiling',
      'High-resolution non-invasive arterial stiffness and endothelial assessments',
      'Strict adherence to peer-reviewed clinical guidelines and meta-analyses',
      'Actionable therapeutic plans grounded in verifiable clinical outcomes'
    ]
  },
  {
    id: 'personal-attention',
    title: 'Personal attention',
    subtitle: 'Bespoke clinical choreography',
    description: 'Health is deeply personal. Your care architecture is custom-tailored to your physiological profile, family history, executive lifestyle, and specific long-term vitality goals.',
    iconName: 'heart',
    metrics: '1:1 Direct Care',
    details: [
      'Individualized longevity roadmaps reviewed quarterly',
      'Seamless coordination with top global surgical & medical sub-specialists',
      'In-home and in-suite phlebotomy and diagnostic sample collection',
      'Global care continuity and prescription coordination while traveling'
    ]
  }
];

export const CLINICAL_SPECIALTIES: Specialty[] = [
  {
    id: 'cardiovascular-wellness',
    title: 'Precision Cardiovascular Medicine',
    category: 'Cardiology & Hemodynamics',
    tagline: 'Predictive arterial health, plaque quantification, and heart longevity.',
    description: 'Going far beyond standard cholesterol panels, our cardiovascular assessment incorporates ApoB, Lp(a), high-sensitivity cardiac biomarkers, non-invasive central aortic pressure mapping, and CT coronary calcium scoring coordination to halt arterial aging decades before symptoms emerge.',
    diagnosticTools: ['ApoB & Subfraction Lipids', 'Endothelial Glycocalyx Testing', 'Advanced Echocardiography', 'Carotid Intima-Media Thickness (CIMT)'],
    duration: '90 minutes',
    idealFor: 'Individuals with family histories of premature heart disease, executive leaders seeking preventative cardiac clearance, or those with unexplained cardiovascular symptoms.'
  },
  {
    id: 'concierge-internal-medicine',
    title: 'Concierge Internal Medicine',
    category: 'Primary & Complex Care',
    tagline: 'Your personal physician for acute care, chronic vitality, and health stewardship.',
    description: 'Direct, continuous primary care stewardship under Dr. Julian Vance. From managing intricate multi-system conditions to coordinating emergency hospital transfers, our concierge practice guarantees absolute peace of mind and immediate access.',
    diagnosticTools: ['Complete Comprehensive Metabolic Suite', 'Thyroid & Endocrine Profiling', 'Nutritional Micronutrient Assay', 'Full-Body Systems Review'],
    duration: '75 minutes',
    idealFor: 'Discerning patients seeking a dedicated primary doctor who knows their complete medical history intimately.'
  },
  {
    id: 'longevity-metabolic-health',
    title: 'Longevity & Metabolic Architecture',
    category: 'Preventative & Cellular Health',
    tagline: 'Targeting the cellular drivers of aging for sustained cognitive and physical vigor.',
    description: 'Utilizing continuous glucose monitoring (CGM), visceral adiposity analysis, biological age clock algorithms, and mitochondrial function tests, we formulate custom nutrition, peptide, and pharmacological regimens to extend healthspan.',
    diagnosticTools: ['Continuous Glucose Telemetry', 'VO2 Max & Lactate Threshold Testing', 'Epigenetic Methylation Age Clock', 'Mitochondrial Bioenergetics'],
    duration: '90 minutes',
    idealFor: 'Individuals focused on preserving peak physical performance, metabolic resilience, and cognitive acuity into later decades.'
  },
  {
    id: 'executive-health-assessment',
    title: 'Executive Diagnostic Health Immersion',
    category: 'Whole-Body Diagnostic Suite',
    tagline: 'A comprehensive, single-day evaluation of every organ system.',
    description: 'An exhaustive half-day diagnostic immersion in our private suite. Combines molecular genetics, cardiovascular imaging, pulmonary function, abdominal ultrasound, dermatological mapping, and neurological screening into an integrated longevity report.',
    diagnosticTools: ['Whole-Body MRI Coordination', 'Multi-Cancer Early Detection (MCED) Blood Biopsy', 'Advanced Pulmonary Function', 'Cognitive Baseline Testing'],
    duration: 'Half-Day Immersion (4 Hours)',
    idealFor: 'Executives, entrepreneurs, and busy professionals who require exhaustive annual diagnostic evaluation without weeks of hospital waiting.'
  },
  {
    id: 'second-opinion-complex-cases',
    title: 'Complex Second Opinions & Pre-Surgical Review',
    category: 'Diagnostic Review',
    tagline: 'Unbiased, rigorous review of ambiguous diagnoses and surgical indications.',
    description: 'When facing major surgical procedures or unresolved medical mysteries, Dr. Vance conducts an independent, meticulous audit of all medical imaging, operative notes, and histology reports, providing objective clarity and peace of mind.',
    diagnosticTools: ['Independent Radiology Re-Read', 'Comprehensive Pathology Audit', 'Multidisciplinary Case Board Review', 'Surgical Risk Stratification'],
    duration: '60 minutes',
    idealFor: 'Patients considering elective or cardiac surgery, or those navigating complex, contradictory diagnoses.'
  }
];

export const CLINIC_LOCATIONS = [
  {
    city: 'London',
    name: 'Atelier Medical Mayfair',
    address: '14 Berkeley Square, Mayfair, London W1J 6BQ',
    phone: '+44 (0) 20 7946 0912',
    hours: 'Mon – Fri: 08:00 – 19:00 BST'
  },
  {
    city: 'New York',
    name: 'Atelier Medical Manhattan',
    address: '740 Park Avenue, Upper East Side, New York, NY 10021',
    phone: '+1 (212) 555-0184',
    hours: 'Mon – Fri: 08:00 – 18:30 EST'
  },
  {
    city: 'Beverly Hills',
    name: 'Atelier Medical Beverly Hills',
    address: '436 N Bedford Drive, Suite 300, Beverly Hills, CA 90210',
    phone: '+1 (310) 555-0149',
    hours: 'Mon – Fri: 09:00 – 18:00 PST'
  }
];

export const PATIENT_TESTIMONIALS = [
  {
    quote: 'In thirty years of executive healthcare across London and Zurich, I have never experienced a physician who listens with such forensic focus as Dr. Vance. He discovered a hidden arterial vulnerability that three prior hospital physicals completely missed.',
    author: 'Sir Arthur M.',
    designation: 'Private Wealth Director, London',
    verified: 'Concierge Patient since 2021'
  },
  {
    quote: 'Atelier Medical represents medicine as it was truly meant to be practiced: unhurried, evidence-based, and profoundly empathetic. The peace of mind this practice gives our family is invaluable.',
    author: 'Elena R. Sterling',
    designation: 'Biotechnology Executive, New York',
    verified: 'Executive Immersion & Family Care'
  },
  {
    quote: 'The level of diagnostic sophistication combined with the aesthetic calm of the clinic makes every consultation feel like a restorative experience rather than a stressful medical appointment.',
    author: 'Marcus K. Thornton',
    designation: 'Architectural Principal, Los Angeles',
    verified: 'Cardiovascular Longevity Patient'
  }
];
