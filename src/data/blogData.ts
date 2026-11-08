export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  date: string;
  readTime: string;
  content: string[];
  keyTakeaways: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "when-to-consult-a-gastroenterologist",
    title: "When Should You Consult a Gastroenterologist? Key Warning Signs",
    excerpt: "Persistent acid reflux, unexplained abdominal cramps, and digestive discomfort shouldn't be ignored. Dr. Fayaz Ullah explains the critical symptoms requiring specialist evaluation.",
    category: "Gastroenterology",
    author: {
      name: "Dr. Fayaz Ullah",
      role: "Chief Consultant Gastroenterologist",
      image: "/images/dr-fayaz-ullah.jpg",
    },
    date: "November 5, 2026",
    readTime: "5 min read",
    keyTakeaways: [
      "Heartburn occurring more than twice weekly may indicate GERD requiring endoscopic assessment.",
      "Unexplained weight loss or changes in bowel habits should be investigated promptly.",
      "H. Pylori bacteria is a common cause of chronic gastritis and peptic ulcers that is easily treatable.",
      "Early video endoscopy can detect precancerous changes and prevent severe complications."
    ],
    content: [
      "Digestive issues are among the most common health complaints seen in outpatient clinics today. However, many individuals normalize chronic heartburn, frequent bloating, or abdominal discomfort, relying on over-the-counter antacids rather than seeking a root-cause diagnosis.",
      "According to Dr. Fayaz Ullah, Chief Consultant in Gastroenterology at Emaan Medical And Surgical Center, early evaluation by a specialist is crucial to preventing long-term damage such as esophageal strictures, peptic ulcers, or undiagnosed liver inflammation.",
      "Key red-flag symptoms that warrant an immediate consultation include: difficulty or pain while swallowing (dysphagia), persistent vomiting, unexplained iron deficiency anemia, black or tarry stools, and chronic diarrhea or constipation lasting over three weeks.",
      "Modern high-definition video endoscopy allows our clinical team to visualize the mucosal lining of the esophagus, stomach, and duodenum with exceptional clarity. Procedures are quick, safe, and typically performed under mild conscious sedation so patients experience zero pain or distress.",
      "If you or a loved one has been struggling with unresolved digestive distress, do not delay. A structured dietary plan combined with targeted diagnostic endoscopy can restore your gastrointestinal wellbeing and quality of life."
    ]
  },
  {
    slug: "benefits-of-laparoscopic-gallbladder-surgery",
    title: "Minimally Invasive Laparoscopic Surgery: Why It Outperforms Traditional Surgery",
    excerpt: "Discover how keyhole laparoscopic techniques reduce postoperative pain, shorten hospital stays, and accelerate your return to normal daily routine.",
    category: "Surgical Excellence",
    author: {
      name: "Dr. Tariq Mahmood",
      role: "Senior Consultant Laparoscopic Surgeon",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    },
    date: "October 28, 2026",
    readTime: "4 min read",
    keyTakeaways: [
      "Tiny 5mm to 10mm keyhole incisions mean minimal tissue trauma and virtually no visible scarring.",
      "Most laparoscopic cholecystectomy patients can be safely discharged within 24 to 36 hours.",
      "Significantly reduced requirement for heavy opioid painkillers following surgery.",
      "Lower risk of surgical site infections compared to traditional open abdominal surgery."
    ],
    content: [
      "Gallstones and symptomatic cholecystitis are prevalent conditions that cause recurrent right upper quadrant abdominal pain, particularly after fatty meals. Historically, open gallbladder surgery required a 15-centimeter abdominal incision and weeks of bed rest.",
      "At Emaan Medical And Surgical Center, our surgical theatre is equipped with advanced Storz high-definition laparoscopy towers. Through 3 to 4 tiny incisions, specialized optical instruments allow our surgeons to perform complete removal of the diseased gallbladder with microscopic precision.",
      "Patients experience significantly reduced postoperative discomfort, resume light walking on the same evening of surgery, and typically return to work within 7 to 10 days.",
      "Minimally invasive keyhole techniques are also routinely used at our hospital for appendectomy, inguinal hernia mesh repair, and diagnostic exploratory procedures."
    ]
  },
  {
    slug: "complete-maternal-health-and-safe-delivery-guide",
    title: "A Mother's Comprehensive Guide to Antenatal Care & Painless Normal Delivery",
    excerpt: "From first-trimester ultrasound screening to modern epidural painless delivery, learn how dedicated obstetric care ensures safe motherhood.",
    category: "Obstetrics & Maternity",
    author: {
      name: "Dr. Ayesha Siddiqui",
      role: "Consultant Obstetrician & Gynecologist",
      image: "https://images.unsplash.com/photo-1594824813580-c08df55225fa?auto=format&fit=crop&w=800&q=80",
    },
    date: "October 20, 2026",
    readTime: "6 min read",
    keyTakeaways: [
      "Regular antenatal visits help identify gestational diabetes and hypertension before complications arise.",
      "Epidural analgesia offers safe, pain-free labor while preserving active maternal participation.",
      "Fetal anomaly ultrasound scans between 18 and 22 weeks verify healthy anatomical development.",
      "Continuous cardiotocography (CTG) monitoring protects infant safety throughout active labor."
    ],
    content: [
      "Every pregnancy is a unique and precious journey that deserves personalized medical care, dignity, and warmth. Modern obstetrics emphasizes preventative surveillance, maternal nutrition, and proactive management of potential risk factors.",
      "At Emaan Medical Center's Maternity Wing, we prioritize natural vaginal delivery whenever clinically safe. For mothers concerned about labor discomfort, our anesthetic team provides modern epidural analgesia (painless delivery), which eliminates contractions' severe pain while enabling the mother to remain fully alert and actively push.",
      "Our maternity floor features private labor, delivery, and recovery (LDR) rooms designed to keep mother and newborn together in a quiet, hygienic, and comforting environment with 24/7 neonatal nursery backup."
    ]
  },
  {
    slug: "protecting-child-health-vaccination-and-respiratory-care",
    title: "Child Health Fundamentals: Essential Vaccinations & Pediatric Asthma Management",
    excerpt: "Expert advice on childhood immunization schedules, nutritional milestones, and rapid home management for childhood respiratory infections.",
    category: "Pediatric Care",
    author: {
      name: "Dr. Salman Raza",
      role: "Consultant Pediatrician & Neonatologist",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    },
    date: "October 14, 2026",
    readTime: "4 min read",
    keyTakeaways: [
      "Timely immunization prevents life-threatening diseases including pneumonia, rotavirus, and measles.",
      "Wheezing and nocturnal coughing in young children may signify pediatric asthma requiring proper inhaler therapy.",
      "Maintain hydration with Oral Rehydration Salts (ORS) during viral gastroenteritis.",
      "Immediate emergency triage is needed if a child exhibits chest indrawing or rapid breathing."
    ],
    content: [
      "Children are not simply miniature adults; their developing immune systems and respiratory physiology demand gentle, specialized medical oversight.",
      "At Emaan Medical Center, our pediatric outpatient department maintains a strict cold-chain certified vaccination center. We offer both the National Expanded Program on Immunization (EPI) and recommended supplementary vaccines including Typhoid Conjugate, Chickenpox, Hepatitis A, and Pneumococcal vaccines.",
      "During seasonal shifts, pediatric asthma and bronchiolitis frequently trigger acute distress. Our pediatric emergency suite provides continuous nebulization, oxygen therapy, and pediatric pulse oximetry monitoring 24 hours a day."
    ]
  }
];
