export interface Doctor {
  id: string;
  name: string;
  role: string;
  department: string;
  qualifications: string;
  experience: string;
  image: string;
  isFeatured?: boolean;
  timings: string;
  days: string[];
  bio: string;
  specialties: string[];
  fee: string;
  rating: number;
  reviewsCount: number;
}

export interface Department {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  leadDoctor: string;
  features: string[];
  treatments: string[];
  bannerGradient: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  features: string[];
  badge: string;
  iconName: string;
}

export const HOSPITAL_INFO = {
  name: "Emaan Medical And Surgical Center",
  shortName: "Emaan Medical Center",
  tagline: "Excellence in Healthcare, Compassion in Healing",
  description: "A premier multi-specialty healthcare institution delivering world-class medical, surgical, gastroenterology, diagnostic, and 24/7 emergency care with state-of-the-art infrastructure and compassionate patient-centered healing.",
  phone: "+92 51 2244555",
  emergencyPhone: "+92 333 9993622",
  whatsappNumber: "+923005553622",
  whatsappDisplay: "+92 300 555-EMAAN (3622)",
  email: "care@emaanmedical.org",
  address: "Main Service Road, Phase 4-A / Expressway Corridor, Islamabad / Rawalpindi",
  opdHours: "Mon - Sat: 8:00 AM - 10:00 PM | Sun: 10:00 AM - 5:00 PM",
  emergencyHours: "24 Hours / 7 Days / 365 Days",
  stats: [
    { label: "Successful Treatments", value: "35,000+" },
    { label: "Specialist Consultants", value: "25+" },
    { label: "Modern Operation Theatres", value: "4" },
    { label: "Patient Satisfaction", value: "99.2%" },
    { label: "24/7 Emergency Care", value: "Always Open" },
  ],
};

export const DOCTORS: Doctor[] = [
  {
    id: "dr-fayaz-ullah",
    name: "Dr. Fayaz Ullah",
    role: "Chief Consultant & Medical Director",
    department: "Gastroenterology & Internal Medicine",
    qualifications: "MBBS, FCPS (Gastroenterology), MRCP (UK), Fellow Advanced Endoscopy",
    experience: "18+ Years Experience",
    image: "/images/dr-fayaz-ullah.jpg",
    isFeatured: true,
    timings: "04:00 PM - 09:00 PM",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    bio: "Dr. Fayaz Ullah is a renowned Consultant Gastroenterologist and Specialist in Internal Medicine with extensive clinical leadership. He is proficient in diagnostic & therapeutic endoscopy, colonoscopy, hepatic diseases, GERD, peptic ulcers, and comprehensive adult internal medicine care. Renowned for his compassionate approach and clinical precision, Dr. Fayaz Ullah leads the clinical team at Emaan Medical And Surgical Center.",
    specialties: [
      "Diagnostic & Therapeutic Endoscopy",
      "Colonoscopy & Polypectomy",
      "Liver Cirrhosis & Hepatitis B/C Management",
      "Acid Reflux (GERD) & Dyspepsia",
      "Irritable Bowel Syndrome (IBS) & IBD",
      "Internal Medicine & Chronic Disease Care"
    ],
    fee: "PKR 2,500",
    rating: 4.9,
    reviewsCount: 420,
  },
  {
    id: "dr-tariq-mahmood",
    name: "Dr. Tariq Mahmood",
    role: "Senior Consultant General & Laparoscopic Surgeon",
    department: "General & Laparoscopic Surgery",
    qualifications: "MBBS, FCPS (Surgery), FACS (USA), FICS",
    experience: "16+ Years Experience",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    timings: "05:00 PM - 08:30 PM",
    days: ["Mon", "Wed", "Fri", "Sat"],
    bio: "Senior laparoscopic surgeon specialized in minimally invasive abdominal procedures including laparoscopic cholecystectomy, hernia repairs, appendix, and advanced trauma surgeries.",
    specialties: [
      "Laparoscopic Cholecystectomy (Gallbladder)",
      "Advanced Hernia Repair (Mesh Plasty)",
      "Appendectomy & Colorectal Procedures",
      "Thyroid & Breast Surgery",
      "Trauma & Acute Abdomen Emergencies"
    ],
    fee: "PKR 2,500",
    rating: 4.8,
    reviewsCount: 310,
  },
  {
    id: "dr-ayesha-siddiqui",
    name: "Dr. Ayesha Siddiqui",
    role: "Consultant Obstetrician & Gynecologist",
    department: "Obstetrics & Gynecology",
    qualifications: "MBBS, FCPS (OBGYN), MCPS, Fellowship in Fetal Medicine",
    experience: "14+ Years Experience",
    image: "https://images.unsplash.com/photo-1594824813580-c08df55225fa?auto=format&fit=crop&w=800&q=80",
    timings: "10:00 AM - 02:00 PM & 06:00 PM - 09:00 PM",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    bio: "Dedicated specialist delivering compassionate woman-centered care from adolescence to motherhood and menopause. Expert in normal and painless delivery, high-risk pregnancies, and gynecological surgeries.",
    specialties: [
      "High-Risk Pregnancy & Ante-natal Care",
      "Painless Normal Delivery & C-Section",
      "Gynecological Laparoscopy & Hysteroscopy",
      "Infertility Workup & Management",
      "PCOS & Hormonal Health"
    ],
    fee: "PKR 2,200",
    rating: 4.9,
    reviewsCount: 385,
  },
  {
    id: "dr-salman-raza",
    name: "Dr. Salman Raza",
    role: "Consultant Pediatrician & Neonatologist",
    department: "Pediatrics & Neonatal Care",
    qualifications: "MBBS, FCPS (Pediatrics), DCH",
    experience: "12+ Years Experience",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    timings: "11:00 AM - 03:00 PM & 06:00 PM - 09:00 PM",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    bio: "Passionate child healthcare specialist overseeing pediatric OPD, neonatal nursery, immunization protocols, childhood asthma, growth monitoring, and pediatric infectious conditions.",
    specialties: [
      "Newborn Care & Neonatal Triage",
      "Childhood Asthma & Respiratory Allergies",
      "Growth, Nutrition & Developmental Assessment",
      "EPI & Optional Pediatric Immunization",
      "Pediatric Gastrointestinal Disorders"
    ],
    fee: "PKR 2,000",
    rating: 4.8,
    reviewsCount: 275,
  },
  {
    id: "dr-noman-khalid",
    name: "Dr. Noman Khalid",
    role: "Consultant Cardiologist & Physician",
    department: "Cardiology & Vascular Medicine",
    qualifications: "MBBS, FCPS (Cardiology), Dip. Cardiology (UK)",
    experience: "15+ Years Experience",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
    timings: "05:00 PM - 09:00 PM",
    days: ["Mon", "Wed", "Thu", "Fri"],
    bio: "Cardiovascular specialist focused on preventive cardiology, echocardiography, hypertension management, heart failure clinics, and post-angioplasty medical rehabilitation.",
    specialties: [
      "Echocardiography (Echo) & Color Doppler",
      "Exercise Tolerance Testing (ETT)",
      "Hypertension & Dyslipidemia Protocol",
      "Coronary Artery Disease & Angina Care",
      "Arrhythmia & Holter Monitoring Evaluation"
    ],
    fee: "PKR 2,500",
    rating: 4.9,
    reviewsCount: 230,
  },
  {
    id: "dr-farah-naz",
    name: "Dr. Farah Naz",
    role: "Consultant Radiologist & Sonologist",
    department: "Radiology & Diagnostic Imaging",
    qualifications: "MBBS, DMRD, MCPS (Radiology)",
    experience: "11+ Years Experience",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    timings: "09:00 AM - 02:00 PM",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    bio: "Expert diagnostician providing precise ultrasound imaging, 3D/4D obstetric anomaly scans, vascular Doppler, thyroid scans, and digital X-ray reporting.",
    specialties: [
      "4D Anomaly & Obstetric Ultrasound",
      "Abdominal & Pelvic Ultrasound",
      "Peripheral Vascular Doppler",
      "Musculoskeletal Ultrasound",
      "Digital X-Ray Diagnostics"
    ],
    fee: "PKR 2,000",
    rating: 4.7,
    reviewsCount: 190,
  },
];

export const DEPARTMENTS: Department[] = [
  {
    id: "gastroenterology",
    title: "Gastroenterology & Hepatology",
    shortDesc: "Advanced digestive care, liver treatments, and video endoscopy headed by Dr. Fayaz Ullah.",
    description: "Our Center of Excellence in Gastroenterology provides state-of-the-art diagnostic and therapeutic endoscopic solutions, comprehensive liver disease care, and treatment for chronic gastrointestinal disorders led by Dr. Fayaz Ullah.",
    iconName: "Stethoscope",
    leadDoctor: "Dr. Fayaz Ullah",
    features: [
      "High-Definition Video Endoscopy Suite",
      "Diagnostic & Therapeutic Colonoscopy",
      "Specialized Hepatitis B & C Treatment Clinic",
      "Upper & Lower GI Bleed Emergency Management",
      "Acid Peptic & GERD Comprehensive Programs"
    ],
    treatments: [
      "Endoscopy & Colonoscopy",
      "Polypectomy & Biopsy",
      "Cirrhosis & Fatty Liver Care",
      "Peptic Ulcer Treatment",
      "GERD & Reflux Therapy",
      "Inflammatory Bowel Disease (IBD)"
    ],
    bannerGradient: "from-brand-600 to-brand-800"
  },
  {
    id: "general-surgery",
    title: "General & Laparoscopic Surgery",
    shortDesc: "Minimally invasive keyhole surgeries with fast recovery, minimal scarring, and modern surgical suites.",
    description: "Equipped with sterile laminar-flow operation theatres and HD laparoscopic towers, our surgical department performs complex abdominal, endocrine, and emergency procedures with exceptional safety margins.",
    iconName: "Activity",
    leadDoctor: "Dr. Tariq Mahmood",
    features: [
      "Modular Laminar Airflow Theatres",
      "HD Laparoscopy Storz System",
      "Dedicated Day-Care Surgical Unit",
      "Advanced Post-Operative Recovery Ward",
      "24/7 Acute Abdominal Emergency Response"
    ],
    treatments: [
      "Laparoscopic Cholecystectomy (Gallbladder)",
      "Laparoscopic Appendectomy",
      "Inguinal & Ventral Hernia Mesh Plasty",
      "Thyroid & Parathyroid Surgery",
      "Pilonidal Sinus & Fistula Surgery",
      "Trauma & Emergency Laparotomy"
    ],
    bannerGradient: "from-brand-700 to-brand-900"
  },
  {
    id: "internal-medicine",
    title: "Internal Medicine & Chronic Care",
    shortDesc: "Holistic evaluation and management of adult diseases, diabetes, hypertension, and multi-system conditions.",
    description: "Our Internal Medicine department provides thorough clinical assessments and individualized care plans for patients with complex multisystem ailments, metabolic disorders, and chronic illness management.",
    iconName: "HeartPulse",
    leadDoctor: "Dr. Fayaz Ullah",
    features: [
      "Multisystem Chronic Disease Management",
      "Comprehensive Adult Health Screening",
      "Hypertension & Diabetes Registry",
      "Infectious Disease Isolation & Care",
      "Geriatric Comprehensive Protocols"
    ],
    treatments: [
      "Type 1 & Type 2 Diabetes Management",
      "Resistant Hypertension Control",
      "Respiratory Infections & Asthma",
      "Thyroid & Endocrine Disorders",
      "Unexplained Fever & Infectious Diseases",
      "Preventive Executive Health Checkups"
    ],
    bannerGradient: "from-blue-600 to-indigo-800"
  },
  {
    id: "gynecology",
    title: "Obstetrics & Gynecology",
    shortDesc: "Comprehensive maternal health, painless delivery, fertility consultation, and female surgical care.",
    description: "Offering a warm, dignified, and safe environment for women through all phases of life. From pre-conception counseling and gentle labor suites to high-risk obstetric monitoring and minimally invasive gynecological surgery.",
    iconName: "Heart",
    leadDoctor: "Dr. Ayesha Siddiqui",
    features: [
      "Dedicated Labor, Delivery & Recovery Suites (LDR)",
      "Painless Delivery (Epidural Analgesia)",
      "Continuous Cardiotocography (CTG) Fetal Monitoring",
      "Emergency Obstetric Operative Backup 24/7",
      "Private & Executive Maternity Wards"
    ],
    treatments: [
      "Normal Vaginal Delivery & Painless Delivery",
      "Cesarean Section (C-Section)",
      "High-Risk Pregnancy Management",
      "Infertility Evaluation & Follicular Tracking",
      "Laparoscopic Hysterectomy & Ovarian Cystectomy",
      "Menopause & Hormonal Balance"
    ],
    bannerGradient: "from-roseAccent-600 to-roseAccent-800"
  },
  {
    id: "pediatrics",
    title: "Pediatrics & Neonatal Care",
    shortDesc: "Gentle and expert medical attention for infants, children, and adolescents with modern nursery support.",
    description: "We are committed to the vibrant health and wellbeing of children. Our child-friendly clinic and neonatal nursery provide 24/7 care for acute illnesses, vaccination schedules, and growth milestones.",
    iconName: "Baby",
    leadDoctor: "Dr. Salman Raza",
    features: [
      "Phototherapy & Neonatal Incubators",
      "24/7 Pediatric Emergency Triage",
      "Cold-Chain Maintained Vaccination Center",
      "Child-Friendly Outpatient Consultation Rooms",
      "Pediatric Nebulization & Observation Area"
    ],
    treatments: [
      "Neonatal Jaundice & Infection Management",
      "Pediatric Chest Infections & Asthma",
      "Diarrheal Dehydration & Gastroenteritis",
      "Routine & Travel Immunization",
      "Growth Failure & Nutritional Deficiencies",
      "Developmental Milestones Monitoring"
    ],
    bannerGradient: "from-emerald-600 to-teal-800"
  },
  {
    id: "cardiology",
    title: "Cardiology & Vascular Health",
    shortDesc: "Early detection, diagnostic cardiology, echocardiography, and long-term cardiac rehabilitation.",
    description: "Equipped with modern echocardiography, ECG, and stress testing facilities, our cardiology clinic focuses on early cardiovascular diagnosis, lifestyle intervention, and evidence-based pharmacotherapy.",
    iconName: "ShieldAlert",
    leadDoctor: "Dr. Noman Khalid",
    features: [
      "Color Doppler Echocardiography",
      "Computerized 12-Lead ECG",
      "Exercise Tolerance Testing (ETT / TMT)",
      "24-Hour Ambulatory Blood Pressure Monitoring",
      "Emergency Cardiac Stabilization Protocols"
    ],
    treatments: [
      "Ischemic Heart Disease Management",
      "Hypertensive Heart Disease Care",
      "Congestive Heart Failure Clinic",
      "Dyslipidemia & Lipid Management",
      "Post-Infarction Rehabilitation",
      "Cardiovascular Risk Stratification"
    ],
    bannerGradient: "from-red-600 to-rose-900"
  },
  {
    id: "diagnostics",
    title: "Diagnostics & Pathology Lab",
    shortDesc: "Automated hematology, clinical chemistry, microbiological cultures, and rapid emergency reporting.",
    description: "Our certified laboratory operates round-the-clock using robotic analyzers and stringent internal and external quality controls to provide rapid, precise, and dependable diagnostic reporting.",
    iconName: "Microscope",
    leadDoctor: "Pathology Team",
    features: [
      "Fully Automated Clinical Chemistry Analyzers",
      "5-Part Differential Hematology Systems",
      "Automated Hormone & Tumor Marker Chemiluminescence",
      "Rapid Blood Gas (ABG) & Electrolyte Analyzers",
      "Online Report Delivery via SMS / Portal"
    ],
    treatments: [
      "Complete Blood Count (CBC) & ESR",
      "Liver Function Tests (LFTs) & Lipid Profiles",
      "Renal Function Tests (RFTs) & Urea / Creatinine",
      "HbA1c & Blood Glucose Monitoring",
      "Hepatitis B, C, HIV, Dengue & Typhoid Serology",
      "Urine & Stool Routine & Culture Studies"
    ],
    bannerGradient: "from-cyan-600 to-blue-800"
  },
  {
    id: "emergency",
    title: "24/7 Emergency & Critical Trauma",
    shortDesc: "Always ready. Immediate triage, resuscitation, intensive monitoring, and acute stabilization.",
    description: "Our Emergency & Trauma Centre is staffed 24 hours a day, 365 days a year by emergency physicians, certified trauma nurses, and on-call specialist surgeons to deliver rapid life-saving interventions.",
    iconName: "Ambulance",
    leadDoctor: "Emergency Care Specialists",
    features: [
      "Zero-Delay Emergency Triage",
      "Defibrillators, Multichannel Monitors & Ventilators",
      "Dedicated Minor OT for Suturing & Casts",
      "Direct Access to CT/Ultrasound & Blood Bank Coordination",
      "Emergency Ambulance Fleet with Oxygen Support"
    ],
    treatments: [
      "Acute Chest Pain & Cardiac Emergencies",
      "Severe Abdominal Pain & GI Bleeding",
      "Trauma, Accidents & Fracture Stabilization",
      "High Fever, Sepsis & Dehydration",
      "Poisoning & Medical Overdoses",
      "Respiratory Distress & Acute Asthma Attacks"
    ],
    bannerGradient: "from-amber-600 to-red-700"
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "operation-theatres",
    title: "Modular Laminar Operation Theatres",
    description: "Sterile, positive-pressure surgical theaters fitted with HEPA filters, LED scialytic surgical lights, and advanced anesthesia workstations for maximum safety.",
    badge: "ISO Standard Sterile",
    features: [
      "HEPA Air Filtration & Laminar Flow",
      "Advanced Anesthesia Workstations",
      "High-Definition Laparoscopy Equipment",
      "Integrated Electrosurgical & Ultrasonic Scalpels"
    ],
    iconName: "Activity"
  },
  {
    id: "endoscopy-suite",
    title: "Specialized Endoscopy & Colonoscopy Suite",
    description: "Headed by Dr. Fayaz Ullah, this dedicated procedure suite utilizes high-definition video endoscopes with advanced optical enhancement for rapid, comfortable exams.",
    badge: "Headed by Dr. Fayaz Ullah",
    features: [
      "Olympus HD Video Endoscopy System",
      "Sedation-Assisted Painless Procedures",
      "Automated Endoscope Reprocessors & Disinfection",
      "Immediate Digital Video Documentation"
    ],
    iconName: "Stethoscope"
  },
  {
    id: "emergency-icu",
    title: "24/7 Emergency & High Dependency Unit (HDU)",
    description: "Equipped with intensive monitoring, invasive and non-invasive ventilation, and round-the-clock intensive care physicians for critical patient recovery.",
    badge: "24/7 Staffed",
    features: [
      "Continuous Multichannel Hemodynamic Monitors",
      "Mechanical ICU Ventilators",
      "Central Medical Gas & Vacuum Distribution",
      "Rapid Response Resuscitation Crash Carts"
    ],
    iconName: "ShieldAlert"
  },
  {
    id: "inpatient-rooms",
    title: "Comfortable Inpatient Wards & Executive Suites",
    description: "Designed for peaceful, stress-free recovery. Patients can choose from deluxe private suites, semi-private rooms, and well-spaced general wards.",
    badge: "Patient Comfort First",
    features: [
      "Ergonomic Electric Hospital Beds",
      "Nurse Call Intercom by Every Bed",
      "En-suite Clean Bathrooms & Climate Control",
      "Dedicated Attendant Lounges & Wi-Fi"
    ],
    iconName: "Bed"
  },
  {
    id: "pharmacy",
    title: "24/7 In-House Hospital Pharmacy",
    description: "Stocked with 100% genuine pharmaceutical drugs, emergency medications, surgical consumables, and strict cold-chain maintained vaccines.",
    badge: "100% Authentic Drugs",
    features: [
      "Continuous 24-Hour Operation",
      "Cold-Chain Maintained Refrigeration",
      "Computerized Prescription Verification",
      "Direct Ward Supply & Home Delivery Options"
    ],
    iconName: "Pill"
  },
  {
    id: "ambulance-service",
    title: "Rapid Response Ambulance Service",
    description: "Our fleet of ambulances is equipped with oxygen, basic life support tools, and trained paramedical staff to safely transport patients during emergencies.",
    badge: "Quick Dispatch",
    features: [
      "Built-in Oxygen & Suction Facilities",
      "Paramedic & Nursing Escort",
      "Emergency Stretcher & Spinal Board",
      "Dedicated Direct Emergency Dispatch Hotline"
    ],
    iconName: "Truck"
  }
];

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Haji Muhammad Aslam",
    city: "Rawalpindi",
    comment: "Dr. Fayaz Ullah is an extraordinary doctor. I suffered from chronic stomach pain and acidity for over 4 years. His endoscopy was painless, and his prescribed treatment gave me complete relief within 3 weeks. The entire hospital staff was extremely attentive.",
    treatment: "Gastroenterology Consultation & Endoscopy",
    doctor: "Dr. Fayaz Ullah",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    id: "2",
    name: "Mrs. Shazia Naveed",
    city: "Islamabad",
    comment: "Delivered our daughter at Emaan Medical Center under Dr. Ayesha Siddiqui. The maternity ward was spotless, peaceful, and the nursing team took care of me and my baby like family. Cleanest private rooms in the area!",
    treatment: "Maternity & Normal Delivery",
    doctor: "Dr. Ayesha Siddiqui",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: "3",
    name: "Kamran Baig",
    city: "Islamabad",
    comment: "Had my gallbladder laparoscopic surgery done by Dr. Tariq Mahmood. I was admitted in the morning and walking comfortably the same evening. Transparent billing with no hidden surprises. Truly recommend Emaan Medical!",
    treatment: "Laparoscopic Gallbladder Surgery",
    doctor: "Dr. Tariq Mahmood",
    rating: 5,
    date: "2 months ago"
  },
  {
    id: "4",
    name: "Zubair Ahmed Qureshi",
    city: "Chaklala",
    comment: "We rushed my father in at 2 AM with severe abdominal pain and vomiting. The emergency team acted within 60 seconds, stabilized him, did blood tests in 20 minutes, and Dr. Fayaz Ullah reviewed the case promptly. Life-savers!",
    treatment: "24/7 Emergency Care",
    doctor: "Emergency Team & Dr. Fayaz Ullah",
    rating: 5,
    date: "3 months ago"
  }
];

export const FAQS = [
  {
    q: "How can I book an appointment with Dr. Fayaz Ullah?",
    a: "You can book directly through our online appointment system on this website, call our appointment desk at +92 51 2244555, or send a WhatsApp message to +92 300 555-EMAAN. Dr. Fayaz Ullah sees patients Monday through Saturday from 4:00 PM to 9:00 PM."
  },
  {
    q: "Are emergency services available 24/7 at Emaan Medical Center?",
    a: "Yes. Our Emergency and Trauma Center is open 24 hours a day, 7 days a week, 365 days a year with on-duty emergency medical officers, trained trauma nurses, and 24/7 access to the operation theater, laboratory, and pharmacy."
  },
  {
    q: "What gastrointestinal and liver procedures are conducted?",
    a: "Under the leadership of Dr. Fayaz Ullah, we conduct diagnostic and therapeutic Upper GI Endoscopy, Colonoscopy, Polypectomy, GI bleeding management, liver biopsies, treatment for Hepatitis B & C, GERD/acid reflux protocols, and peptic ulcer treatments."
  },
  {
    q: "Do you offer cashless panel or insurance facilities?",
    a: "We work with multiple corporate panels and private health insurance providers in Pakistan, as well as Sehat Sahulat Card / emergency assistance protocols. Please contact our reception desk with your panel or insurance details for verification."
  },
  {
    q: "How fast are diagnostic laboratory and ultrasound test results provided?",
    a: "Routine blood tests (CBC, Blood Sugar, LFTs, RFTs) are delivered within 2 hours. Ultrasound reports are provided immediately following the examination. Digital copies can be sent directly to your WhatsApp or phone via SMS."
  },
  {
    q: "Where is Emaan Medical And Surgical Center located?",
    a: "We are prominently situated on Main Service Road / Expressway Corridor, Phase 4-A, Islamabad / Rawalpindi, offering ample dedicated patient parking, wheelchair accessibility, and rapid ambulance entry."
  }
];

