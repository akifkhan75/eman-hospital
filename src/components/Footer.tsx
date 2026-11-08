import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Facebook,
  ExternalLink,
  ChevronRight,
  HeartPulse,
  Award,
  Calendar,
} from "lucide-react";
import { HOSPITAL_INFO, DEPARTMENTS } from "@/data/hospitalData";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-slate-300 pt-16 pb-10 border-t border-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Emergency CTA Strip */}
        <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 rounded-2xl p-6 sm:p-8 mb-14 border border-brand-700/60 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-full bg-roseAccent-500/20 border-2 border-roseAccent-400 flex items-center justify-center shrink-0">
              <HeartPulse className="w-7 h-7 text-roseAccent-400 animate-pulse" />
            </div>
            <div>
              <span className="inline-block bg-roseAccent-900/80 text-roseAccent-300 text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1">
                Immediate Emergency Assistance
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                24/7 Trauma, Surgical & Medical Response
              </h3>
              <p className="text-slate-300 text-sm mt-0.5">
                Our emergency triage, ambulances, and acute specialists are always on standby.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
              className="inline-flex items-center gap-2 bg-roseAccent-600 hover:bg-roseAccent-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              <span>Call Emergency: {HOSPITAL_INFO.emergencyPhone}</span>
            </a>
            <Link
              href="/appointments"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold px-5 py-3.5 rounded-xl transition-all"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-brand-900">
          {/* Column 1: Hospital Info & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-white border-2 border-brand-400/40 p-0.5 shadow-md">
                <Image
                  src="/images/logo.png"
                  alt="Emaan Medical Center Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight block">
                  EMAAN
                </span>
                <span className="text-xs text-brand-300 font-semibold uppercase tracking-wider block">
                  Medical & Surgical Center
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Dedicated to clinical excellence, minimally invasive surgical precision, and compassionate healthcare for every patient and family.
            </p>

            <div className="pt-2">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Connect With Us
              </h5>
              <div className="flex items-center gap-3">
                <a
                  href="https://web.facebook.com/profile.php?id=100057389561273&sk=following"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-brand-900 hover:bg-brand-600 text-brand-200 hover:text-white flex items-center justify-center transition-colors border border-brand-800"
                  aria-label="Emaan Medical Facebook Page"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900 text-emerald-400 hover:text-emerald-300 text-xs font-medium border border-emerald-800 transition-colors"
                >
                  <span>WhatsApp Chat</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Clinical Departments */}
          <div>
            <h4 className="text-base font-bold text-white tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              Departments
            </h4>
            <ul className="space-y-2.5 text-sm">
              {DEPARTMENTS.slice(0, 6).map((dept) => (
                <li key={dept.id}>
                  <Link
                    href={`/services#${dept.id}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group text-slate-400 hover:text-slate-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-500 group-hover:translate-x-1 transition-transform" />
                    <span>{dept.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs text-brand-400 hover:text-brand-300 font-semibold pt-1"
                >
                  View All Specialties &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Patient Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-roseAccent-500"></span>
              Patient Care
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/appointments"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-roseAccent-400 group-hover:translate-x-1 transition-transform" />
                  <span>Book Doctor Appointment</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors#dr-fayaz-ullah"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group font-medium text-slate-300"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brand-400 group-hover:translate-x-1 transition-transform" />
                  <span>Dr. Fayaz Ullah (Consultant Profile)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/facilities"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-roseAccent-400 group-hover:translate-x-1 transition-transform" />
                  <span>Operation Theaters & Wards</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-roseAccent-400 group-hover:translate-x-1 transition-transform" />
                  <span>Hospital Mission & Quality Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-roseAccent-400 group-hover:translate-x-1 transition-transform" />
                  <span>Location Map & Visiting Hours</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Hospital Location
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{HOSPITAL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {HOSPITAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href={`mailto:${HOSPITAL_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {HOSPITAL_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <span className="block text-emerald-400 font-semibold">
                    Emergency: Open 24/7 / 365 Days
                  </span>
                  <span>OPD Clinics: 8:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {HOSPITAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-brand-400" />
              Verified Healthcare Facility
            </span>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300">
              Patient Rights & Safety
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

