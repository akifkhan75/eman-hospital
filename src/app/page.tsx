import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Phone,
  ShieldCheck,
  Stethoscope,
  Activity,
  Heart,
  Baby,
  Microscope,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Bed,
  Ambulance,
  PhoneCall,
  MapPin,
  ChevronRight,
  Award,
} from "lucide-react";
import DrFayazSpotlight from "@/components/DrFayazSpotlight";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import AppointmentBookingForm from "@/components/AppointmentBookingForm";
import { HOSPITAL_INFO, DEPARTMENTS, FACILITIES } from "@/data/hospitalData";

export default function HomePage() {
  const departmentIcons: Record<string, React.ReactNode> = {
    gastroenterology: <Stethoscope className="w-6 h-6 text-brand-600" />,
    "general-surgery": <Activity className="w-6 h-6 text-brand-600" />,
    "internal-medicine": <Heart className="w-6 h-6 text-brand-600" />,
    gynecology: <Heart className="w-6 h-6 text-roseAccent-600" />,
    pediatrics: <Baby className="w-6 h-6 text-emerald-600" />,
    cardiology: <Activity className="w-6 h-6 text-red-600" />,
    diagnostics: <Microscope className="w-6 h-6 text-cyan-600" />,
    emergency: <Ambulance className="w-6 h-6 text-amber-600" />,
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white overflow-hidden py-16 sm:py-24 lg:py-28">
        {/* Abstract glow circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-roseAccent-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-200 text-xs sm:text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-roseAccent-400 animate-ping"></span>
                <span className="w-2 h-2 rounded-full bg-roseAccent-500 -ml-3.5"></span>
                Multi-Specialty Medical & Surgical Hospital
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Excellence In Healthcare, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-sky-200 to-white">
                  Compassion
                </span>{" "}
                In Healing.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Welcome to <strong>Emaan Medical And Surgical Center</strong>. Delivering advanced
                laparoscopic surgery, comprehensive gastroenterology & video endoscopy under{" "}
                <strong>Dr. Fayaz Ullah</strong>, 24/7 acute trauma response, and dedicated maternity care.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/appointments"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-500 hover:bg-brand-400 text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-base transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-roseAccent-600 hover:bg-roseAccent-700 text-white font-bold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-base border border-roseAccent-400/40"
                >
                  <Phone className="w-5 h-5 text-roseAccent-200 animate-pulse" />
                  <span>24/7 Emergency Hotline</span>
                </a>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 border-t border-brand-700/60 grid grid-cols-3 gap-4 text-center sm:text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">24/7</div>
                  <div className="text-xs text-brand-200">Emergency & ICU</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">18+ Yrs</div>
                  <div className="text-xs text-brand-200">Consultant Experience</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">35K+</div>
                  <div className="text-xs text-brand-200">Satisfied Patients</div>
                </div>
              </div>
            </div>

            {/* Right Card / Visual Banner with Dr. Fayaz Preview */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative">
                {/* Header inside card */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1 border-2 border-brand-300">
                      <Image
                        src="/images/logo.png"
                        alt="Emaan Hospital"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Emaan Medical Center</h4>
                      <span className="text-xs text-brand-300">Clinical Leadership</span>
                    </div>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-400/30">
                    Open Now
                  </span>
                </div>

                {/* Dr Fayaz Quick Card Teaser */}
                <Link
                  href="#dr-fayaz"
                  className="block bg-gradient-to-r from-brand-900/90 to-brand-800/90 rounded-2xl p-4 border border-brand-600/40 hover:border-brand-400 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-20 rounded-xl overflow-hidden shrink-0 border-2 border-white/20">
                      <Image
                        src="/images/dr-fayaz-ullah.jpg"
                        alt="Dr. Fayaz Ullah"
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-brand-300 uppercase tracking-wider block">
                        Chief Consultant
                      </span>
                      <h4 className="text-base font-bold text-white group-hover:text-brand-200 transition-colors">
                        Dr. Fayaz Ullah
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                        Gastroenterology & Internal Medicine
                      </p>
                      <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-roseAccent-300">
                        <span>View Profile & Timings</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Quick Info Grid */}
                <div className="mt-6 space-y-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                    <Clock className="w-4 h-4 text-brand-300 shrink-0" />
                    <span>Emergency & Trauma: <strong>Open 24/7 / 365 Days</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                    <Stethoscope className="w-4 h-4 text-brand-300 shrink-0" />
                    <span>Specialist Clinics: <strong>Daily 8:00 AM - 10:00 PM</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                    <MapPin className="w-4 h-4 text-brand-300 shrink-0" />
                    <span className="truncate">{HOSPITAL_INFO.address}</span>
                  </div>
                </div>

                {/* Instant WhatsApp Help */}
                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <a
                    href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 hover:text-emerald-200"
                  >
                    <span>Instant Consultation & Inquiries on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsSection />

      {/* Dr Fayaz Ullah Spotlight Section (Prominent Home Feature) */}
      <DrFayazSpotlight />

      {/* Clinical Departments & Specialties Grid */}
      <section className="py-20 bg-white" id="departments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                Centers of Clinical Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight mt-3">
                Comprehensive Healthcare & Specialized Surgery
              </h2>
              <p className="mt-3 text-slate-600 text-base sm:text-lg">
                Providing state-of-the-art medical, surgical, and diagnostic departments designed for optimal patient recovery and clinical precision.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-bold text-sm shrink-0 group"
            >
              <span>Explore All Departments</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEPARTMENTS.map((dept) => (
              <div
                key={dept.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-card hover:border-brand-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {departmentIcons[dept.id] || <Activity className="w-6 h-6 text-brand-600" />}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {dept.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {dept.shortDesc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                      Lead Consultant
                    </span>
                    <span className="text-xs font-bold text-brand-900 block">
                      {dept.leadDoctor}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services#${dept.id}`}
                    className="text-xs font-bold text-brand-600 group-hover:text-brand-700 flex items-center gap-1"
                  >
                    <span>View Treatments</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/appointments?department=${dept.id}`}
                    className="text-xs font-semibold bg-brand-50 hover:bg-brand-600 text-brand-700 hover:text-white px-2.5 py-1.5 rounded-lg transition-colors"
                  >
                    Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Facilities & Technology */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/70" id="facilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              State-of-the-Art Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight mt-3">
              Modern Hospital Facilities
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Designed according to international hospital infection control and surgical safety guidelines to deliver first-rate clinical outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACILITIES.map((facility) => (
              <div
                key={facility.id}
                className="bg-white rounded-2xl p-7 shadow-soft border border-slate-200/80 hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-brand-50 text-brand-700 px-3 py-1 rounded-full border border-brand-100">
                      {facility.badge}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {facility.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {facility.description}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    {facility.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/facilities"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700"
                  >
                    <span>Learn more about this facility</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Fast Appointment Booking Form */}
      <section className="py-20 bg-gradient-to-b from-white via-brand-50/30 to-white" id="book">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
              Instant Scheduling
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight mt-3">
              Book a Specialist Consultation
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Choose your doctor, preferred date, and submit in seconds. Our OPD reception desk will confirm your appointment instantly.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="p-12 text-center text-slate-400 bg-white rounded-3xl shadow">
                Loading appointment booking portal...
              </div>
            }
          >
            <AppointmentBookingForm />
          </Suspense>
        </div>
      </section>

      {/* Patient Testimonials */}
      <TestimonialsSection />

      {/* Emergency Callout Banner */}
      <section className="bg-gradient-to-r from-roseAccent-700 via-roseAccent-600 to-roseAccent-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Ambulance className="w-8 h-8 text-white animate-bounce" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-roseAccent-200">
                Need Immediate Emergency Help?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Emergency Ambulance & Acute Triage
              </h3>
              <p className="text-roseAccent-100 text-sm mt-1">
                Call our direct trauma line for instant ambulance dispatch and hospital bed preparation.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
              className="inline-flex items-center gap-2 bg-white text-roseAccent-800 font-extrabold px-6 py-4 rounded-xl shadow-lg hover:bg-slate-100 transition-transform hover:-translate-y-0.5 text-base"
            >
              <Phone className="w-5 h-5 text-roseAccent-600" />
              <span>{HOSPITAL_INFO.emergencyPhone}</span>
            </a>
            <a
              href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-4 rounded-xl shadow-lg transition-all text-base"
            >
              <span>WhatsApp Emergency</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />
    </div>
  );
}
