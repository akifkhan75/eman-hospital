import React from "react";
import { Users, Award, Bed, HeartHandshake, ShieldCheck, Clock } from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function StatsSection() {
  const statItems = [
    {
      icon: Users,
      value: "35,000+",
      label: "Patients Treated",
      subtext: "From across the region",
    },
    {
      icon: Award,
      value: "25+",
      label: "Specialist Doctors",
      subtext: "Consultants & surgeons",
    },
    {
      icon: Bed,
      value: "4",
      label: "Modular Theatres",
      subtext: "Laminar airflow sterile",
    },
    {
      icon: HeartHandshake,
      value: "99.2%",
      label: "Patient Satisfaction",
      subtext: "Based on verified reviews",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Emergency & ICU",
      subtext: "Always staffed & open",
    },
  ];

  return (
    <section className="bg-brand-900 text-white py-14 relative overflow-hidden border-y border-brand-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,102,178,0.4),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 text-center">
          {statItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-400/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-700/60 text-brand-300 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-brand-200 mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
