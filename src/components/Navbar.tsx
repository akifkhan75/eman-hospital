"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Clock,
  Calendar,
  Menu,
  X,
  ExternalLink,
  MessageCircle,
  FileText,
  Home,
  Info,
  Stethoscope,
  Users,
  Building2,
  MapPin,
  ChevronRight,
  ShieldCheck,
  BookOpen,
} from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: Info },
    { label: "Specialties", href: "/services", icon: Stethoscope },
    { label: "Doctors", href: "/doctors", icon: Users },
    { label: "Facilities", href: "/facilities", icon: Building2 },
    { label: "Lab Reports", href: "/reports", icon: FileText },
    { label: "Health Blog", href: "/blog", icon: BookOpen },
    { label: "Contact", href: "/contact", icon: MapPin },
  ];

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Top Notification / Emergency Bar */}
      <div className="bg-brand-950 text-white text-xs py-1.5 px-3 sm:px-6 border-b border-brand-900/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Left: Emergency 24/7 hotline */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 font-bold text-roseAccent-300 tracking-wide text-[11px] sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-roseAccent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-roseAccent-500"></span>
              </span>
              <span className="hidden xs:inline">24/7</span> Emergency:
            </span>
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
              className="font-bold text-white hover:text-roseAccent-200 transition-colors flex items-center gap-1 text-[11px] sm:text-xs tracking-tight"
            >
              <Phone className="w-3 h-3 text-roseAccent-400 shrink-0" />
              <span>{HOSPITAL_INFO.emergencyPhone}</span>
            </a>
          </div>

          {/* Right: OPD info & quick links */}
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-brand-400" />
              <span>OPD: 8 AM - 10 PM</span>
            </span>

            <Link
              href="/reports"
              className="hidden sm:inline-flex items-center gap-1 text-brand-300 hover:text-white transition-colors"
            >
              <FileText className="w-3 h-3 text-brand-400" />
              <span>Online Reports</span>
            </Link>

            <a
              href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3 h-3 fill-current" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-soft border-b border-slate-200/80 py-2 sm:py-2.5"
            : "bg-white shadow-sm border-b border-slate-100 py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0 shrink">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-full overflow-hidden border-2 border-brand-600/30 shadow-md group-hover:scale-105 transition-transform bg-white shrink-0">
              <Image
                src="/images/logo.png"
                alt="Emaan Medical And Surgical Center Logo"
                fill
                priority
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg md:text-xl font-black text-brand-900 tracking-tight leading-none group-hover:text-brand-600 transition-colors">
                  EMAAN
                </span>
                <span className="hidden sm:inline-block text-[10px] bg-brand-50 text-brand-700 font-bold px-1.5 py-0.5 rounded border border-brand-200">
                  Hospital
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-brand-700 uppercase tracking-wider truncate">
                Medical &amp; Surgical Center
              </span>
              <span className="hidden xl:block text-[10px] text-slate-500 font-medium truncate">
                Healthcare with Compassion &amp; Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                    isActive
                      ? "text-brand-600 bg-brand-50 font-bold"
                      : "text-slate-700 hover:text-brand-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="flex items-center gap-1.5 text-brand-800 hover:text-brand-600 text-xs xl:text-sm font-bold px-2.5 py-2 rounded-lg hover:bg-brand-50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-600" />
              <span>{HOSPITAL_INFO.phone}</span>
            </a>
            <Link
              href="/appointments"
              className="inline-flex items-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs xl:text-sm px-3.5 xl:px-4 py-2 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile & Tablet Right Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
            {/* Quick Call Icon Button */}
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
              className="p-2 rounded-lg bg-roseAccent-50 text-roseAccent-700 border border-roseAccent-200 hover:bg-roseAccent-100 transition-colors flex items-center justify-center"
              aria-label="Call Emergency"
            >
              <Phone className="w-4 h-4 text-roseAccent-600" />
            </a>

            {/* Quick Book Button */}
            <Link
              href="/appointments"
              className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-sm transition-colors flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Book</span>
            </Link>

            {/* Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-brand-600 hover:bg-slate-100 rounded-lg focus:outline-none transition-colors border border-slate-200"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-900" />
              ) : (
                <Menu className="w-5 h-5 text-slate-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Slide-Out Drawer / Modal */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[88px] sm:top-[94px] z-50 lg:hidden">
            {/* Backdrop overlay */}
            <div
              className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer Content */}
            <div className="relative bg-white w-full max-h-[calc(100vh-90px)] overflow-y-auto shadow-2xl border-t border-slate-200 px-4 py-5 flex flex-col justify-between">
              {/* Navigation Items */}
              <div className="space-y-1">
                <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Navigation Menu
                </div>

                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-brand-50 text-brand-600 font-bold border border-brand-200"
                          : "text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`w-4 h-4 ${
                            isActive ? "text-brand-600" : "text-slate-400"
                          }`}
                        />
                        <span>{link.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300" />
                    </Link>
                  );
                })}
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-5 mt-4 border-t border-slate-100 space-y-2.5">
                <Link
                  href="/appointments"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 rounded-xl shadow text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Doctor Appointment</span>
                </Link>

                <div className="grid grid-cols-2 gap-2 text-center text-xs pt-1">
                  <a
                    href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                    className="flex items-center justify-center gap-1.5 bg-roseAccent-50 text-roseAccent-700 py-3 rounded-xl font-bold border border-roseAccent-200"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>24/7 Trauma</span>
                  </a>

                  <a
                    href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-emerald-50 text-emerald-700 py-3 rounded-xl font-bold border border-emerald-200"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="pt-2 text-center text-[11px] text-slate-400">
                  <span>Emergency: </span>
                  <a href={`tel:${HOSPITAL_INFO.emergencyPhone}`} className="font-bold text-slate-700">
                    {HOSPITAL_INFO.emergencyPhone}
                  </a>
                  <span> • OPD: </span>
                  <span className="text-slate-700">8:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
