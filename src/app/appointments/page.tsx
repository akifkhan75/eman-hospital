import React, { Suspense } from "react";
import {
  Calendar,
  Clock,
  Phone,
  ShieldCheck,
  FileText,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import AppointmentBookingForm from "@/components/AppointmentBookingForm";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export const metadata = {
  title: "Book an Appointment | Emaan Medical And Surgical Center",
  description:
    "Schedule a consultation with our specialist physicians and surgeons, including Dr. Fayaz Ullah (Consultant Gastroenterologist). Fast confirmation and online support.",
};

export default function AppointmentsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Outpatient Department (OPD)
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-950 tracking-tight mt-3">
            Book Your Doctor Consultation
          </h1>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Choose your consultant doctor, pick your preferred date and time, and our OPD desk will confirm your appointment promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Booking Form (Wrapped in Suspense) */}
          <div className="lg:col-span-8">
            <Suspense
              fallback={
                <div className="p-12 text-center text-slate-400 bg-white rounded-3xl shadow">
                  Loading booking form...
                </div>
              }
            >
              <AppointmentBookingForm />
            </Suspense>
          </div>

          {/* Right Info Box: Checklist & Emergency Phone */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct Telephone Booking */}
            <div className="bg-brand-900 text-white rounded-3xl p-6 sm:p-8 shadow-card border border-brand-800">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-300 block mb-1">
                Prefer Phone Booking?
              </span>
              <h3 className="text-xl font-bold">Call Our OPD Desk Directly</h3>
              <p className="text-xs text-slate-300 mt-1 mb-5">
                Our patient coordinators are available to assist you with scheduling and doctor availability.
              </p>

              <div className="space-y-3">
                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {HOSPITAL_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* What to Bring on Appointment Day */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-200">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-600" />
                What to Bring to Your Visit
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>National ID Card (CNIC) or B-Form (for pediatric patients).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Previous medical reports, ultrasounds, endoscopy records, or prescriptions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Current regular medication list (diabetes, blood pressure, etc.).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Arrive 15 minutes before your time slot for registration.</span>
                </li>
              </ul>
            </div>

            {/* Emergency Notice */}
            <div className="bg-roseAccent-50 rounded-2xl p-5 border border-roseAccent-200 text-xs text-roseAccent-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-roseAccent-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">Have an acute medical emergency?</strong>
                Do not wait for an OPD appointment. Please call our 24/7 Emergency at{" "}
                <a href={`tel:${HOSPITAL_INFO.emergencyPhone}`} className="underline font-bold">
                  {HOSPITAL_INFO.emergencyPhone}
                </a>{" "}
                or arrive directly at our emergency triage room.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
