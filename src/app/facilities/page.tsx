import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Activity,
  Stethoscope,
  Bed,
  Microscope,
  Pill,
  Truck,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
} from "lucide-react";
import { FACILITIES, HOSPITAL_INFO } from "@/data/hospitalData";

export const metadata = {
  title: "Hospital Facilities & Technology | Emaan Medical And Surgical Center",
  description:
    "Explore our modular operation theatres, HD endoscopy suite under Dr. Fayaz Ullah, 24/7 emergency & ICU, deluxe inpatient rooms, and fully automated diagnostic laboratory.",
};

export default function FacilitiesPage() {
  const facilityIcons: Record<string, React.ReactNode> = {
    "operation-theatres": <Activity className="w-8 h-8 text-brand-600" />,
    "endoscopy-suite": <Stethoscope className="w-8 h-8 text-brand-600" />,
    "emergency-icu": <ShieldCheck className="w-8 h-8 text-roseAccent-600" />,
    "inpatient-rooms": <Bed className="w-8 h-8 text-emerald-600" />,
    pharmacy: <Pill className="w-8 h-8 text-cyan-600" />,
    "ambulance-service": <Truck className="w-8 h-8 text-amber-600" />,
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-brand-950 via-brand-900 to-brand-850 text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-brand-800 text-brand-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-brand-700 mb-3">
            Infrastructure & Equipment
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Advanced Medical Facilities
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Engineered to meet the highest safety, hygiene, and technological standards for surgical precision and restful patient recovery.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {FACILITIES.map((facility, idx) => (
            <div
              key={facility.id}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-brand-50 border border-brand-200 flex items-center justify-center shrink-0">
                    {facilityIcons[facility.id] || <Activity className="w-8 h-8 text-brand-600" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-roseAccent-600 block">
                      {facility.badge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
                      {facility.title}
                    </h2>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {facility.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                    Key Infrastructure Specifications:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {facility.features.map((item, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Side Box */}
              <div className="lg:col-span-4 bg-gradient-to-br from-brand-900 to-brand-950 text-white p-6 sm:p-8 rounded-2xl text-center flex flex-col justify-between">
                <div>
                  <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold">24/7 Availability</h4>
                  <p className="text-xs text-brand-200 mt-2 leading-relaxed">
                    Maintained under rigorous sterilization guidelines with uninterruptible power backup (UPS & Generators).
                  </p>
                </div>

                <div className="mt-8 space-y-2">
                  <Link
                    href="/appointments"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-bold text-xs py-3 rounded-xl transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Schedule Appointment</span>
                  </Link>

                  <a
                    href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-roseAccent-600 hover:bg-roseAccent-700 text-white font-bold text-xs py-3 rounded-xl transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Emergency Hotline</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
