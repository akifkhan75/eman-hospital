import React from "react";
import Link from "next/link";
import {
  Stethoscope,
  Activity,
  Heart,
  Baby,
  Microscope,
  ShieldAlert,
  Ambulance,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Sparkles,
  Phone,
} from "lucide-react";
import { DEPARTMENTS, HOSPITAL_INFO } from "@/data/hospitalData";

export const metadata = {
  title: "Clinical Services & Specialties | Emaan Medical And Surgical Center",
  description:
    "Explore medical and surgical departments at Emaan Medical Center: Gastroenterology & Endoscopy under Dr. Fayaz Ullah, Laparoscopic Surgery, Gynecology, Pediatrics, 24/7 Emergency, and Diagnostics.",
};

export default function ServicesPage() {
  const departmentIcons: Record<string, React.ReactNode> = {
    gastroenterology: <Stethoscope className="w-8 h-8 text-brand-600" />,
    "general-surgery": <Activity className="w-8 h-8 text-brand-600" />,
    "internal-medicine": <Heart className="w-8 h-8 text-brand-600" />,
    gynecology: <Heart className="w-8 h-8 text-roseAccent-600" />,
    pediatrics: <Baby className="w-8 h-8 text-emerald-600" />,
    cardiology: <Activity className="w-8 h-8 text-red-600" />,
    diagnostics: <Microscope className="w-8 h-8 text-cyan-600" />,
    emergency: <Ambulance className="w-8 h-8 text-amber-600" />,
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-brand-800 text-brand-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-brand-700 mb-3">
            Centers of Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Specialized Medical & Surgical Care
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            From routine health screenings to advanced laparoscopic surgery and dedicated gastroenterology interventions, our departments are equipped for exceptional outcomes.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {DEPARTMENTS.map((dept, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={dept.id}
                id={dept.id}
                className="bg-white rounded-3xl shadow-card border border-slate-200/90 overflow-hidden scroll-mt-28"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                  {/* Left Info Column */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-brand-50 border border-brand-200 flex items-center justify-center shrink-0">
                        {departmentIcons[dept.id] || <Activity className="w-8 h-8 text-brand-600" />}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-roseAccent-600 block">
                          Department
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
                          {dept.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {dept.description}
                    </p>

                    {/* Features List */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                        Department Highlights & Facilities:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {dept.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/appointments?department=${dept.id}`}
                        className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow transition-all"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book in {dept.title.split(" ")[0]}</span>
                      </Link>

                      <a
                        href={`tel:${HOSPITAL_INFO.phone}`}
                        className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm px-5 py-3 rounded-xl transition-colors border border-slate-200"
                      >
                        <Phone className="w-4 h-4 text-brand-600" />
                        <span>Inquire Timing</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Treatments Box */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-brand-50 to-slate-100 p-6 sm:p-8 rounded-2xl border border-brand-100/80">
                    <div className="flex items-center justify-between pb-3 border-b border-brand-200/60 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-900">
                        Common Procedures & Treatments
                      </span>
                      <span className="text-[11px] font-semibold text-brand-700 bg-brand-100/60 px-2 py-0.5 rounded">
                        Lead: {dept.leadDoctor}
                      </span>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                      {dept.treatments.map((t, idx) => (
                        <li key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200/70 shadow-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="font-medium text-slate-900">{t}</span>
                        </li>
                      ))}
                    </ul>

                    {dept.id === "gastroenterology" && (
                      <div className="mt-5 p-4 rounded-xl bg-brand-600 text-white text-xs">
                        <span className="font-bold block text-sm mb-1">Dr. Fayaz Ullah&apos;s Clinic</span>
                        <p className="text-brand-100">
                          Specialized video endoscopy, colonoscopy, and chronic liver care consultations available Monday to Saturday 4:00 PM - 9:00 PM.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

