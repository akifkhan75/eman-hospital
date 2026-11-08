"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle2,
  Stethoscope,
  AlertCircle,
  MessageCircle,
  FileText,
  RotateCcw,
} from "lucide-react";
import { DOCTORS, DEPARTMENTS, HOSPITAL_INFO } from "@/data/hospitalData";

interface BookingFormProps {
  preselectedDoctorId?: string;
  preselectedDepartmentId?: string;
}

export default function AppointmentBookingForm({
  preselectedDoctorId,
  preselectedDepartmentId,
}: BookingFormProps) {
  const searchParams = useSearchParams();
  const queryDoctor = searchParams?.get("doctor") || preselectedDoctorId || "dr-fayaz-ullah";
  const queryDept = searchParams?.get("department") || preselectedDepartmentId || "";

  const [department, setDepartment] = useState(queryDept);
  const [selectedDoctorId, setSelectedDoctorId] = useState(queryDoctor);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [problemDescription, setProblemDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  // Sync if query parameter changes
  useEffect(() => {
    if (searchParams?.get("doctor")) {
      setSelectedDoctorId(searchParams.get("doctor")!);
    }
  }, [searchParams]);

  // Filter doctors by selected department if any
  const filteredDoctors = department
    ? DOCTORS.filter((d) => {
        const deptObj = DEPARTMENTS.find((dept) => dept.id === department);
        if (!deptObj) return true;
        return d.department.toLowerCase().includes(deptObj.title.toLowerCase().split(" ")[0]);
      })
    : DOCTORS;

  const currentDoctor = DOCTORS.find((d) => d.id === selectedDoctorId) || DOCTORS[0];

  const timeSlots = [
    "04:00 PM - 04:30 PM",
    "04:30 PM - 05:00 PM",
    "05:00 PM - 05:30 PM",
    "05:30 PM - 06:00 PM",
    "06:00 PM - 06:30 PM",
    "07:00 PM - 07:30 PM",
    "07:30 PM - 08:00 PM",
    "08:00 PM - 08:30 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API reservation request
    setTimeout(() => {
      const generatedRef = "EMN-" + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(generatedRef);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setDate("");
    setTimeSlot("");
    setPatientName("");
    setPhone("");
    setEmail("");
    setProblemDescription("");
  };

  if (isSuccess) {
    const whatsappMessage = encodeURIComponent(
      `Hello Emaan Medical Center! I have booked an appointment.\nBooking Ref: ${bookingRef}\nPatient: ${patientName}\nDoctor: ${currentDoctor.name}\nDate: ${date}\nTime: ${timeSlot || "Standard slot"}`
    );

    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-emerald-100 text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
          Appointment Requested Successfully
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Your Booking Reference:{" "}
          <span className="text-brand-600 font-mono">{bookingRef}</span>
        </h3>

        <div className="mt-6 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-left space-y-2.5 text-sm">
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-slate-500">Doctor:</span>
            <span className="font-bold text-brand-950">{currentDoctor.name}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-slate-500">Department:</span>
            <span className="font-medium text-slate-800">{currentDoctor.department}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-slate-500">Patient Name:</span>
            <span className="font-medium text-slate-800">{patientName}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-slate-500">Scheduled Date:</span>
            <span className="font-medium text-slate-800">{date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Time Slot:</span>
            <span className="font-bold text-brand-600">{timeSlot || "Next Available OPD Slot"}</span>
          </div>
        </div>

        <p className="mt-5 text-sm text-slate-600 leading-relaxed">
          Our OPD coordinator has received your request and will call you at{" "}
          <span className="font-bold text-slate-800">{phone}</span> to confirm your time slot.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow transition-colors text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Confirm on WhatsApp</span>
          </a>

          <button
            onClick={handleReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Book Another Appointment</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-brand-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Department Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Select Department
          </label>
          <select
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white text-sm"
          >
            <option value="">All Departments & Specialties</option>
            {DEPARTMENTS.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.title}
              </option>
            ))}
          </select>
        </div>

        {/* Doctor Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Select Consultant Doctor *
          </label>
          <select
            required
            value={selectedDoctorId}
            onChange={(e) => setSelectedDoctorId(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-brand-300 bg-brand-50/40 text-brand-950 font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white text-sm"
          >
            {filteredDoctors.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.name} — {doc.department} ({doc.fee})
              </option>
            ))}
          </select>
        </div>

        {/* Appointment Date */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Preferred Date *
          </label>
          <div className="relative">
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white text-sm"
            />
          </div>
        </div>

        {/* Time Slot Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Preferred Time Slot *
          </label>
          <select
            required
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white text-sm"
          >
            <option value="">Select Time Slot</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        {/* Patient Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Patient Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Muhammad Usman"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white text-sm"
          />
        </div>

        {/* Contact Phone / WhatsApp */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Phone / WhatsApp Number *
          </label>
          <input
            type="tel"
            required
            placeholder="0300 1234567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white text-sm"
          />
        </div>

        {/* Age & Gender */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Age (Years)
            </label>
            <input
              type="number"
              placeholder="e.g. 42"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white text-sm"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Child / Other</option>
            </select>
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Email Address (Optional)
          </label>
          <input
            type="email"
            placeholder="patient@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white text-sm"
          />
        </div>

        {/* Symptoms / Chief Complaint */}
        <div className="md:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Chief Medical Complaint / Symptoms
          </label>
          <textarea
            rows={3}
            placeholder="Briefly describe your symptoms, previous reports, or reason for consultation (e.g. stomach pain, acidity, endoscopy consultation, general surgical evaluation)..."
            value={problemDescription}
            onChange={(e) => setProblemDescription(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white text-sm resize-none"
          ></textarea>
        </div>
      </div>

      {/* Selected Doctor Summary Card */}
      {currentDoctor && (
        <div className="mt-6 p-4 rounded-2xl bg-brand-50/80 border border-brand-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-brand-300 relative shrink-0">
              <img
                src={currentDoctor.image}
                alt={currentDoctor.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <span className="text-[11px] font-bold text-roseAccent-600 uppercase tracking-wider block">
                Selected Consultant
              </span>
              <span className="text-sm font-bold text-brand-950 block">
                {currentDoctor.name} ({currentDoctor.department})
              </span>
              <span className="text-xs text-slate-600">
                Clinic: {currentDoctor.timings}
              </span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs text-slate-500 block">Consultation Fee</span>
            <span className="text-base font-extrabold text-brand-800">{currentDoctor.fee}</span>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
        >
          {isSubmitting ? (
            <span>Confirming Booking...</span>
          ) : (
            <>
              <Calendar className="w-5 h-5" />
              <span>Confirm & Request Appointment</span>
            </>
          )}
        </button>
        <p className="mt-3 text-center text-xs text-slate-500">
          No advance payment required. Pay at hospital reception upon arrival.
        </p>
      </div>
    </form>
  );
}

