"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  Facebook,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-950 tracking-tight mt-3">
            Contact & Location Details
          </h1>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            We are here to assist you 24 hours a day, 7 days a week. Reach out for consultations, emergency triage, and general hospital inquiries.
          </p>
        </div>

        {/* Contact Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {/* Card 1: Emergency */}
          <div className="bg-gradient-to-br from-roseAccent-600 to-roseAccent-800 text-white rounded-3xl p-6 shadow-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-roseAccent-200 block">
                24/7 Hotline
              </span>
              <h3 className="text-xl font-bold mt-1 mb-2">Emergency & Ambulance</h3>
              <p className="text-xs text-roseAccent-100 leading-relaxed mb-4">
                Immediate response for trauma, acute chest pain, and severe surgical emergencies.
              </p>
            </div>
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-white text-roseAccent-800 font-extrabold py-3 px-4 rounded-xl text-sm shadow hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-roseAccent-600" />
              <span>{HOSPITAL_INFO.emergencyPhone}</span>
            </a>
          </div>

          {/* Card 2: OPD Desk */}
          <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 border border-brand-100">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block">
                Appointment Desk
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">General Inquiries</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                OPD timings, doctor schedule verification, and fee inquiries.
              </p>
            </div>
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-50 hover:bg-brand-100 text-brand-800 font-bold py-3 px-4 rounded-xl text-sm transition-colors border border-brand-200"
            >
              <Phone className="w-4 h-4 text-brand-600" />
              <span>{HOSPITAL_INFO.phone}</span>
            </a>
          </div>

          {/* Card 3: WhatsApp Support */}
          <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block">
                Fast WhatsApp Chat
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Clinic WhatsApp</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Chat with our reception staff, send report images, or ask questions online.
              </p>
            </div>
            <a
              href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-sm shadow transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Card 4: Social / Facebook */}
          <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                <Facebook className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Social Community
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Facebook Page</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Follow our official page for health tips, doctor announcements, and community camps.
              </p>
            </div>
            <a
              href="https://web.facebook.com/profile.php?id=100057389561273&sk=following"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-sm shadow transition-colors"
            >
              <span>Visit Facebook Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Main Content: Form & Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-1">
              Send an Inquiry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              How Can We Help You?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-8">
              Leave your contact details and message below. Our administrative team will get back to you within 24 hours.
            </p>

            {isSent ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Message Received</h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Thank you, <strong>{name}</strong>. Your message has been routed to our clinical coordination department.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-4 px-5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Abbasi"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0300 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Inquiry Subject *
                  </label>
                  <select
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white"
                  >
                    <option value="">Select Topic</option>
                    <option value="dr-fayaz">Dr. Fayaz Ullah (Gastroenterology Consultation)</option>
                    <option value="surgery">General & Laparoscopic Surgery Inquiry</option>
                    <option value="maternity">Maternity & Delivery Packages</option>
                    <option value="diagnostics">Laboratory & Ultrasound Tests</option>
                    <option value="insurance">Insurance / Corporate Panel Verification</option>
                    <option value="other">Other Inquiry / Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Your Message / Question *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your questions or requirement details..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSending ? "Sending..." : "Submit Message"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Location & Timings Side Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-card border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-600" />
                Hospital Address
              </h3>

              <div className="text-sm text-slate-600 space-y-3">
                <p className="font-semibold text-slate-800">
                  {HOSPITAL_INFO.name}
                </p>
                <p>{HOSPITAL_INFO.address}</p>
                <p className="text-xs text-slate-500">
                  Easy access with dedicated patient drop-off area, wheelchair ramp, and secure visitor parking.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  Hours of Operation
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between p-2 rounded-lg bg-emerald-50 text-emerald-800 font-bold border border-emerald-100">
                    <span>Emergency & Ambulance:</span>
                    <span>24/7 (365 Days)</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-50 text-slate-700">
                    <span>Outpatient Clinics (OPD):</span>
                    <span>8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-50 text-slate-700">
                    <span>Diagnostic Lab & Ultrasound:</span>
                    <span>24/7 Service</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-50 text-slate-700">
                    <span>Hospital Pharmacy:</span>
                    <span>Open 24 Hours</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-3 rounded-xl transition-colors border border-slate-200"
                >
                  <MapPin className="w-4 h-4 text-brand-600" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
