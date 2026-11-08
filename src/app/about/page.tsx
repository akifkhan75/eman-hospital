import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  HeartPulse,
  Users,
  Target,
  Eye,
  CheckCircle2,
  Clock,
  Calendar,
  Sparkles,
  Phone,
} from "lucide-react";
import { HOSPITAL_INFO, DOCTORS } from "@/data/hospitalData";

export const metadata = {
  title: "About Us | Emaan Medical And Surgical Center",
  description:
    "Learn about Emaan Medical And Surgical Center, our mission, clinical leadership by Dr. Fayaz Ullah, advanced facilities, and compassionate patient care standards.",
};

export default function AboutPage() {
  const drFayaz = DOCTORS.find((d) => d.id === "dr-fayaz-ullah") || DOCTORS[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-brand-950 via-brand-900 to-brand-850 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-brand-800 text-brand-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-brand-700 mb-3">
            About Our Institution
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Healing With Clinical Excellence & Compassion
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Emaan Medical And Surgical Center was established to bridge the gap between advanced medical science and empathetic, accessible patient care.
          </p>
        </div>
      </section>

      {/* Hospital Overview & Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
                A Modern Healthcare Sanctuary for You and Your Family
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                <strong>Emaan Medical And Surgical Center</strong> stands as a benchmark of premier multi-disciplinary medical care. We combine certified senior consultants, modular surgical suites, advanced endoscopy, modern diagnostic pathology, and round-the-clock emergency services under one roof.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Whether you visit us for a preventive gastroenterology screening with <strong>Dr. Fayaz Ullah</strong>, minimally invasive laparoscopic surgery, a joyous childbirth experience, or urgent midnight medical stabilization, our team treats you with utmost dignity, warmth, and clinical precision.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-brand-50 border border-brand-100">
                  <div className="text-2xl font-black text-brand-900">35,000+</div>
                  <div className="text-xs font-semibold text-brand-700 mt-1">Patients Served</div>
                </div>
                <div className="p-4 rounded-xl bg-roseAccent-50 border border-roseAccent-100">
                  <div className="text-2xl font-black text-roseAccent-900">100%</div>
                  <div className="text-xs font-semibold text-roseAccent-700 mt-1">Ethical Practice</div>
                </div>
              </div>
            </div>

            {/* Right: Hospital Emblem & Brand Palette Box */}
            <div className="lg:col-span-6">
              <div className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 p-8 sm:p-12 rounded-3xl shadow-2xl text-white relative overflow-hidden">
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white p-1 border-2 border-brand-300">
                    <Image
                      src="/images/logo.png"
                      alt="Emaan Hospital Emblem"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">Emaan Medical Center</h3>
                    <p className="text-xs text-brand-300">Quality, Ethics & Patient Safety First</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-200">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Stringent Infection Control:</strong> Continuous sterilization and HEPA laminar airflow operation theatres.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <HeartPulse className="w-5 h-5 text-roseAccent-400 shrink-0 mt-0.5" />
                    <span><strong>Rapid Trauma Readiness:</strong> Emergency medical officers and surgeons on premises 24/7.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Board-Certified Specialists:</strong> Consultants with FCPS, MRCP, FACS and international fellowships.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <span><strong>Compassionate Nursing:</strong> Patient-to-nurse ratios aligned with highest international recovery benchmarks.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Medical Director: Dr. Fayaz Ullah */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-card border border-brand-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Doctor Image */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-56 h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src="/images/dr-fayaz-ullah.jpg"
                    alt="Dr. Fayaz Ullah"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mt-4">
                  Dr. Fayaz Ullah
                </h4>
                <p className="text-xs font-semibold text-roseAccent-600 uppercase tracking-wider">
                  Founder & Medical Director
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  MBBS, FCPS (Gastro), MRCP (UK)
                </p>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Medical Director&apos;s Message
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
                  &ldquo;Our Sole Duty Is The Well-Being and Trust of Every Soul Who Walks Through Our Doors.&rdquo;
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  &ldquo;When we founded Emaan Medical And Surgical Center, our vision was simple yet unwavering: to establish a medical sanctuary where clinical excellence meets genuine human empathy. Every surgical procedure, diagnostic endoscopy, and medication plan is executed with utmost responsibility and transparency.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  In today&apos;s rapidly evolving healthcare landscape, we continuously invest in cutting-edge Olympus video endoscopy, modular operating suites, and continuous staff training to ensure our patients receive care comparable to leading institutions worldwide.&rdquo;
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/appointments?doctor=dr-fayaz-ullah"
                    className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation with Dr. Fayaz Ullah</span>
                  </Link>
                  <a
                    href={`tel:${HOSPITAL_INFO.phone}`}
                    className="inline-flex items-center gap-2 text-brand-700 font-semibold text-sm hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Clinic Desk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight mt-3">
              Our Mission, Vision & Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-300 transition-all shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To provide accessible, high-standard healthcare and surgical solutions driven by clinical precision, empathy, ethical transparency, and patient-centered healing.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-300 transition-all shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-roseAccent-600 text-white flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be the region&apos;s most trusted healthcare destination for advanced gastroenterology, laparoscopic surgery, maternal wellbeing, and emergency medicine.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-300 transition-all shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Core Values</h3>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Compassion:</strong> Treating every patient like family.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Integrity:</strong> Evidence-based ethical prescriptions.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Excellence:</strong> Continuous medical innovation.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

