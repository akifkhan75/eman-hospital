"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Search,
  Download,
  Printer,
  CheckCircle2,
  Clock,
  ShieldCheck,
  AlertCircle,
  Stethoscope,
  QrCode,
  ArrowRight,
  User,
  Phone,
} from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

interface LabReport {
  id: string;
  mrNumber: string;
  patientName: string;
  ageGender: string;
  testName: string;
  consultant: string;
  date: string;
  status: "Completed" | "Processing";
  department: string;
  results: { parameter: string; value: string; unit: string; normalRange: string; status: "Normal" | "High" | "Low" }[];
  remarks?: string;
  endoscopyFindings?: {
    esophagus: string;
    stomach: string;
    duodenum: string;
    impression: string;
    recommendation: string;
  };
}

const SAMPLE_REPORTS: LabReport[] = [
  {
    id: "REP-98214",
    mrNumber: "EMN-7861",
    patientName: "Muhammad Usman Khan",
    ageGender: "46 Yrs / Male",
    testName: "Upper Gastrointestinal Video Endoscopy",
    consultant: "Dr. Fayaz Ullah (Consultant Gastroenterologist)",
    date: "06-Nov-2026",
    status: "Completed",
    department: "Gastroenterology & Endoscopy Suite",
    results: [],
    endoscopyFindings: {
      esophagus: "Normal lumen, normal mucosa, no esophageal varices or ulceration seen.",
      stomach: "Mild patchy erythema noted in antrum consistent with superficial antral gastritis. No active bleeding, ulcer, or mass lesion.",
      duodenum: "D1 bulb and D2 second part normal. Villi appear intact.",
      impression: "Mild Antral Gastritis. Rapid Urease Test (H. Pylori) Negative.",
      recommendation: "Proton Pump Inhibitor (PPI) therapy for 4 weeks. Diet modification. Follow up with Dr. Fayaz Ullah in OPD."
    }
  },
  {
    id: "REP-98215",
    mrNumber: "EMN-4420",
    patientName: "Hajra Begum",
    ageGender: "52 Yrs / Female",
    testName: "Comprehensive Liver Function Tests (LFTs) & Chemistry",
    consultant: "Dr. Fayaz Ullah (Consultant Physician & Gastroenterologist)",
    date: "07-Nov-2026",
    status: "Completed",
    department: "Automated Clinical Pathology Laboratory",
    results: [
      { parameter: "Serum Bilirubin (Total)", value: "0.85", unit: "mg/dL", normalRange: "0.2 - 1.2", status: "Normal" },
      { parameter: "SGPT / ALT", value: "32", unit: "U/L", normalRange: "up to 40", status: "Normal" },
      { parameter: "SGOT / AST", value: "28", unit: "U/L", normalRange: "up to 35", status: "Normal" },
      { parameter: "Alkaline Phosphatase (ALP)", value: "195", unit: "U/L", normalRange: "100 - 290", status: "Normal" },
      { parameter: "Serum Albumin", value: "4.3", unit: "g/dL", normalRange: "3.5 - 5.0", status: "Normal" },
      { parameter: "Total Protein", value: "7.1", unit: "g/dL", normalRange: "6.0 - 8.3", status: "Normal" },
    ],
    remarks: "Liver profile parameters within normal physiological limits."
  },
  {
    id: "REP-98216",
    mrNumber: "EMN-9912",
    patientName: "Zainab Tariq",
    ageGender: "28 Yrs / Female",
    testName: "Complete Blood Count (CBC) with ESR",
    consultant: "Dr. Ayesha Siddiqui (Consultant Gynecologist)",
    date: "08-Nov-2026",
    status: "Completed",
    department: "Hematology Section",
    results: [
      { parameter: "Hemoglobin (Hb)", value: "12.4", unit: "g/dL", normalRange: "12.0 - 15.5", status: "Normal" },
      { parameter: "Total Leukocyte Count (TLC)", value: "7,400", unit: "/cumm", normalRange: "4,000 - 11,000", status: "Normal" },
      { parameter: "Platelet Count", value: "245,000", unit: "/cumm", normalRange: "150,000 - 450,000", status: "Normal" },
      { parameter: "Hematocrit (PCV)", value: "38.2", unit: "%", normalRange: "36.0 - 46.0", status: "Normal" },
      { parameter: "ESR (Westergren)", value: "14", unit: "mm/1st hr", normalRange: "0 - 20", status: "Normal" },
    ],
    remarks: "CBC parameters normal. No toxic granules or blasts seen."
  }
];

export default function ReportsPortalPage() {
  const [searchQuery, setSearchQuery] = useState("EMN-7861");
  const [selectedReport, setSelectedReport] = useState<LabReport | null>(SAMPLE_REPORTS[0]);
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim().toUpperCase();
    const found = SAMPLE_REPORTS.find(
      (r) => r.mrNumber.toUpperCase() === q || r.id.toUpperCase() === q
    );
    setSelectedReport(found || null);
    setHasSearched(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Emaan Diagnostic Portal
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight mt-3">
            Online Laboratory & Diagnostic Reports
          </h1>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Access, view, and print your diagnostic pathology, ultrasound, and video endoscopy reports securely from home.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-brand-100 mb-10">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="Enter MR Number or Report ID (e.g. EMN-7861, EMN-4420, EMN-9912)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-3.5 rounded-2xl text-sm shadow transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Track Report</span>
            </button>
          </form>

          {/* Quick Demo Tokens */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Quick Test Records:</span>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("EMN-7861");
                setSelectedReport(SAMPLE_REPORTS[0]);
              }}
              className="bg-brand-50 hover:bg-brand-100 text-brand-700 px-2.5 py-1 rounded-lg border border-brand-200 font-mono transition-colors"
            >
              EMN-7861 (Endoscopy - Dr. Fayaz)
            </button>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("EMN-4420");
                setSelectedReport(SAMPLE_REPORTS[1]);
              }}
              className="bg-brand-50 hover:bg-brand-100 text-brand-700 px-2.5 py-1 rounded-lg border border-brand-200 font-mono transition-colors"
            >
              EMN-4420 (Liver Function LFTs)
            </button>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("EMN-9912");
                setSelectedReport(SAMPLE_REPORTS[2]);
              }}
              className="bg-brand-50 hover:bg-brand-100 text-brand-700 px-2.5 py-1 rounded-lg border border-brand-200 font-mono transition-colors"
            >
              EMN-9912 (Blood Count CBC)
            </button>
          </div>
        </div>

        {/* Report View Container */}
        {selectedReport ? (
          <div className="bg-white rounded-3xl shadow-elevated border border-slate-200 overflow-hidden">
            {/* Action Bar Above Report */}
            <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="bg-emerald-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Official Verified Report
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Report ID: {selectedReport.id}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-xl border border-white/20 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Report</span>
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 bg-brand-500 hover:bg-brand-400 text-white text-xs font-bold px-4 py-2 rounded-xl shadow transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>

            {/* Printable Paper Canvas */}
            <div className="p-8 sm:p-12 print:p-0 space-y-8" id="printable-report">
              {/* Report Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b-2 border-brand-900">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand-600 bg-white p-0.5 shrink-0">
                    <Image
                      src="/images/logo.png"
                      alt="Emaan Hospital"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-brand-950 tracking-tight leading-tight">
                      EMAAN MEDICAL &amp; SURGICAL CENTER
                    </h2>
                    <p className="text-xs text-brand-700 font-bold uppercase tracking-wider">
                      DEPARTMENT OF {selectedReport.department.toUpperCase()}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Main Boulevard, Islamabad/Rawalpindi • UAN: {HOSPITAL_INFO.phone} • Emergency: {HOSPITAL_INFO.emergencyPhone}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="w-16 h-16 border border-slate-300 rounded-lg p-1 bg-slate-50 flex items-center justify-center mx-auto sm:ml-auto">
                    <QrCode className="w-12 h-12 text-slate-800" />
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-1 font-mono">
                    Scan for Authenticity
                  </span>
                </div>
              </div>

              {/* Patient Particulars Box */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-400 block">MR Number:</span>
                  <span className="font-extrabold text-slate-900 font-mono text-sm">{selectedReport.mrNumber}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Patient Name:</span>
                  <span className="font-bold text-slate-900 text-sm">{selectedReport.patientName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Age / Gender:</span>
                  <span className="font-bold text-slate-900">{selectedReport.ageGender}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Report Date:</span>
                  <span className="font-bold text-slate-900">{selectedReport.date}</span>
                </div>
                <div className="col-span-2 sm:col-span-4 pt-2 border-t border-slate-200 flex justify-between">
                  <div>
                    <span className="text-slate-400">Consultant: </span>
                    <strong className="text-brand-900">{selectedReport.consultant}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">Investigation: </span>
                    <strong className="text-brand-900">{selectedReport.testName}</strong>
                  </div>
                </div>
              </div>

              {/* Endoscopy Findings Display (if endoscopy report) */}
              {selectedReport.endoscopyFindings ? (
                <div className="space-y-6">
                  <div className="bg-brand-50/60 p-4 rounded-xl border border-brand-200">
                    <h3 className="text-sm font-extrabold text-brand-950 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Stethoscope className="w-4 h-4 text-brand-600" />
                      Upper Gastrointestinal Video Endoscopy Findings
                    </h3>
                    <p className="text-xs text-slate-500">
                      Procedure performed using Olympus HD Video Endoscope under local pharyngeal spray.
                    </p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="p-4 rounded-xl border border-slate-200 bg-white">
                      <strong className="block text-slate-900 mb-1">Esophagus:</strong>
                      <p className="text-slate-700 leading-relaxed">{selectedReport.endoscopyFindings.esophagus}</p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white">
                      <strong className="block text-slate-900 mb-1">Stomach:</strong>
                      <p className="text-slate-700 leading-relaxed">{selectedReport.endoscopyFindings.stomach}</p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white">
                      <strong className="block text-slate-900 mb-1">Duodenum:</strong>
                      <p className="text-slate-700 leading-relaxed">{selectedReport.endoscopyFindings.duodenum}</p>
                    </div>

                    <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40">
                      <strong className="block text-amber-950 mb-1">Clinical Impression:</strong>
                      <p className="text-slate-800 font-semibold">{selectedReport.endoscopyFindings.impression}</p>
                    </div>

                    <div className="p-4 rounded-xl border border-brand-200 bg-brand-50/40">
                      <strong className="block text-brand-950 mb-1">Recommended Plan:</strong>
                      <p className="text-slate-800">{selectedReport.endoscopyFindings.recommendation}</p>
                    </div>
                  </div>
                </div>
              ) : (
                /* Table of Results for Blood/Chemistry */
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-brand-900 text-white">
                        <th className="py-3 px-4 font-bold rounded-l-lg">Parameter / Test</th>
                        <th className="py-3 px-4 font-bold">Observed Value</th>
                        <th className="py-3 px-4 font-bold">Units</th>
                        <th className="py-3 px-4 font-bold">Reference Range</th>
                        <th className="py-3 px-4 font-bold rounded-r-lg">Interpretation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {selectedReport.results.map((r, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="py-3 px-4 font-medium text-slate-900">{r.parameter}</td>
                          <td className="py-3 px-4 font-bold text-brand-800 text-base">{r.value}</td>
                          <td className="py-3 px-4 text-slate-500">{r.unit}</td>
                          <td className="py-3 px-4 text-slate-600 font-mono">{r.normalRange}</td>
                          <td className="py-3 px-4">
                            <span className="inline-block bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-0.5 rounded text-xs border border-emerald-200">
                              {r.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {selectedReport.remarks && (
                    <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                      <strong>Remarks:</strong> {selectedReport.remarks}
                    </div>
                  )}
                </div>
              )}

              {/* Signatures & Footer */}
              <div className="pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="h-10 border-b border-slate-300 w-44 mb-1"></div>
                  <p className="font-bold text-slate-800">Medical Technologist</p>
                  <p className="text-[10px]">Emaan Clinical Laboratories</p>
                </div>

                <div className="space-y-1 text-center sm:text-right">
                  <div className="h-10 border-b border-slate-300 w-52 mb-1"></div>
                  <p className="font-bold text-slate-900">{selectedReport.consultant}</p>
                  <p className="text-[10px] text-brand-700 font-semibold">Verified Electronically</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center shadow-card border border-slate-200 max-w-lg mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-roseAccent-100 text-roseAccent-600 flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">No Record Found</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              No laboratory record matched the query &quot;<strong>{searchQuery}</strong>&quot;. Please check the MR number on your appointment slip or call the diagnostic desk.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="inline-flex items-center gap-2 bg-brand-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Diagnostic Desk ({HOSPITAL_INFO.phone})</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
