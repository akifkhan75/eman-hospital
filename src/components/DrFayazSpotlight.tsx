import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  Calendar,
  Clock,
  Star,
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  PhoneCall,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { DOCTORS, HOSPITAL_INFO } from "@/data/hospitalData";

export default function DrFayazSpotlight() {
  const drFayaz = DOCTORS.find((d) => d.id === "dr-fayaz-ullah") || DOCTORS[0];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-brand-50/40 to-white relative overflow-hidden" id="dr-fayaz">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-roseAccent-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            Medical Leadership Spotlight
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-950 tracking-tight">
            Consult With <span className="text-brand-600">Dr. Fayaz Ullah</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Leading consultant in Gastroenterology and Internal Medicine at Emaan Medical And Surgical Center, dedicated to precision diagnostics, minimally invasive endoscopic care, and patient wellbeing.
          </p>
        </div>

        {/* Doctor Card Banner */}
        <div className="bg-white rounded-3xl shadow-card border border-brand-100/80 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Doctor Photo & Badges */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 p-8 sm:p-10 flex flex-col items-center justify-between relative">
              <div className="absolute top-4 left-4 bg-brand-800/80 backdrop-blur-md text-brand-200 text-xs font-semibold px-3 py-1 rounded-full border border-brand-700 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Verified Specialist
              </div>

              <div className="w-full max-w-sm mt-4 mb-6">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl bg-brand-900 group">
                  <Image
                    src={drFayaz.image}
                    alt="Dr. Fayaz Ullah - Consultant Gastroenterologist"
                    fill
                    priority
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-semibold text-brand-300 uppercase tracking-wider block">
                      Chief Consultant
                    </span>
                    <h3 className="text-xl font-bold tracking-tight">
                      Dr. Fayaz Ullah
                    </h3>
                    <p className="text-xs text-slate-200">
                      MBBS, FCPS (Gastroenterology), MRCP (UK)
                    </p>
                  </div>
                </div>
              </div>

              {/* Rating & Reviews Bar */}
              <div className="w-full bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15 flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-bold text-white text-sm">4.9 / 5.0</span>
                </div>
                <span className="text-slate-300">420+ Verified Reviews</span>
                <span className="text-emerald-300 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 18+ Yrs Exp
                </span>
              </div>
            </div>

            {/* Right: Detailed Bio, Specialties & Booking Details */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold text-roseAccent-600 uppercase tracking-wider block">
                      Gastroenterology & Internal Medicine
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight mt-1">
                      Dr. Fayaz Ullah
                    </h3>
                  </div>
                  <div className="bg-brand-50 border border-brand-200 px-3 py-1.5 rounded-lg text-right">
                    <span className="text-[11px] text-slate-500 block">Consultation Fee</span>
                    <span className="text-brand-800 font-bold text-base">{drFayaz.fee}</span>
                  </div>
                </div>

                {/* Professional Qualifications */}
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                  <span className="bg-slate-100 px-3 py-1 rounded-md text-slate-800 border border-slate-200">
                    MBBS
                  </span>
                  <span className="bg-slate-100 px-3 py-1 rounded-md text-slate-800 border border-slate-200">
                    FCPS (Gastroenterology)
                  </span>
                  <span className="bg-slate-100 px-3 py-1 rounded-md text-slate-800 border border-slate-200">
                    MRCP (UK)
                  </span>
                  <span className="bg-brand-50 text-brand-700 px-3 py-1 rounded-md border border-brand-200 font-semibold">
                    Fellow Advanced Endoscopy
                  </span>
                </div>

                {/* Bio Prose */}
                <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {drFayaz.bio}
                </p>

                {/* Core Clinical Procedures */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                    <Stethoscope className="w-4 h-4 text-brand-600" />
                    Key Clinical Expertise & Diagnostic Procedures
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {drFayaz.specialties.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consultation Timing & Clinic Schedule */}
                <div className="mt-6 bg-brand-50/70 rounded-xl p-4 border border-brand-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-600 text-white flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">
                        Clinic Timings
                      </span>
                      <span className="text-sm font-bold text-brand-950">
                        {drFayaz.timings}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-roseAccent-600 text-white flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">
                        Available Days
                      </span>
                      <span className="text-sm font-bold text-brand-950">
                        Monday to Saturday
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  href="/appointments?doctor=dr-fayaz-ullah"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment with Dr. Fayaz Ullah</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-5 py-3.5 rounded-xl transition-colors text-sm border border-slate-200"
                >
                  <PhoneCall className="w-4 h-4 text-brand-600" />
                  <span>Call Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

