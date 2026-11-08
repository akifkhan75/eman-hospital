"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Star,
  ShieldCheck,
  CheckCircle2,
  Stethoscope,
  Phone,
  ArrowRight,
  Filter,
} from "lucide-react";
import { DOCTORS, HOSPITAL_INFO } from "@/data/hospitalData";

export default function DoctorsPage() {
  const [selectedDept, setSelectedDept] = useState("all");

  const departments = [
    { id: "all", name: "All Specialists" },
    { id: "gastro", name: "Gastroenterology" },
    { id: "surgery", name: "General Surgery" },
    { id: "gynecology", name: "Gynecology & OB" },
    { id: "pediatrics", name: "Pediatrics" },
    { id: "cardiology", name: "Cardiology" },
    { id: "radiology", name: "Radiology" },
  ];

  const filteredDoctors = DOCTORS.filter((doc) => {
    if (selectedDept === "all") return true;
    if (selectedDept === "gastro") return doc.department.toLowerCase().includes("gastro");
    if (selectedDept === "surgery") return doc.department.toLowerCase().includes("surgery");
    if (selectedDept === "gynecology") return doc.department.toLowerCase().includes("gynecology");
    if (selectedDept === "pediatrics") return doc.department.toLowerCase().includes("pediatric");
    if (selectedDept === "cardiology") return doc.department.toLowerCase().includes("cardiology");
    if (selectedDept === "radiology") return doc.department.toLowerCase().includes("radiology");
    return true;
  });

  const drFayaz = DOCTORS.find((d) => d.id === "dr-fayaz-ullah") || DOCTORS[0];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-brand-950 via-brand-900 to-brand-850 text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-brand-800 text-brand-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-brand-700 mb-3">
            Medical Faculty
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Consultant Physicians & Surgeons
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Our multi-disciplinary team consists of qualified specialists, fellows, and surgeons dedicated to delivering compassionate, evidence-based care.
          </p>
        </div>
      </section>

      {/* Featured Medical Director Spotlight: Dr. Fayaz Ullah */}
      <section className="py-12 bg-white border-b border-slate-200/80" id="dr-fayaz-ullah">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-900 via-brand-850 to-brand-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Doctor Photo */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative aspect-[4/5] w-64 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                  <Image
                    src={drFayaz.image}
                    alt="Dr. Fayaz Ullah"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                  <div className="absolute top-3 left-3 bg-brand-600/90 text-xs font-bold px-3 py-1 rounded-full">
                    Medical Director
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-roseAccent-300 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Chief Consultant & Medical Director
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {drFayaz.name}
                </h2>
                <p className="text-sm text-brand-200 font-semibold">
                  {drFayaz.qualifications} — {drFayaz.experience}
                </p>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {drFayaz.bio}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-300 shrink-0" />
                    <span>Clinic Hours: <strong>{drFayaz.timings}</strong> (Mon - Sat)</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10 flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-300 fill-amber-300 shrink-0" />
                    <span>Patient Rating: <strong>4.9 / 5.0</strong> (420+ Verified Patients)</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href="/appointments?doctor=dr-fayaz-ullah"
                    className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book with Dr. Fayaz Ullah</span>
                  </Link>

                  <a
                    href={`tel:${HOSPITAL_INFO.phone}`}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors border border-white/20"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Reception</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Filter & Doctor Cards Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedDept === dept.id
                    ? "bg-brand-600 text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-3xl p-6 shadow-soft border border-slate-200/90 hover:shadow-card transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 mb-5 border border-slate-200">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[11px] font-bold text-brand-800 px-2.5 py-1 rounded-full shadow-sm">
                      {doc.experience}
                    </div>
                    <div className="absolute top-3 right-3 bg-brand-900/90 backdrop-blur-md text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <Star className="w-3 h-3 fill-amber-300" />
                      {doc.rating}
                    </div>
                  </div>

                  <span className="text-xs font-bold text-roseAccent-600 uppercase tracking-wider block mb-1">
                    {doc.department}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {doc.qualifications}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {doc.bio}
                  </p>

                  {/* Timings & Fee */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-brand-600" /> Clinic:
                      </span>
                      <span className="font-semibold text-slate-900">{doc.timings}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-700">
                      <span className="text-slate-500">Fee:</span>
                      <span className="font-bold text-brand-700 text-sm">{doc.fee}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/appointments?doctor=${doc.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm py-3 rounded-xl shadow transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
