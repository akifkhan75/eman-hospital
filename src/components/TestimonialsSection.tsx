import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";
import { TESTIMONIALS } from "@/data/hospitalData";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-roseAccent-600 bg-roseAccent-50 px-3 py-1 rounded-full border border-roseAccent-100">
            Patient Stories & Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight mt-3">
            Real Experiences, Caring Recovery
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Hear from families and patients whose lives were transformed through our clinical expertise, dedicated surgeons, and compassionate nursing care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-soft border border-slate-200/80 hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand-200" />
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-4">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-brand-700 block">
                  {item.treatment}
                </span>
                <span className="text-[11px] text-slate-500 block mb-1">
                  Doctor: {item.doctor}
                </span>

                <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-50">
                  <div>
                    <span className="text-sm font-bold text-slate-900 block leading-tight">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-slate-500">{item.city}</span>
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

