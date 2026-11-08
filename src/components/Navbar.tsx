"use client";

import React, { useState, useEffect } from "react";
import Link from "next/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import {
  Phone,
  Clock,
  MapPin,
  Calendar,
  Menu,
  X,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services & Specialties", href: "/services" },
    { label: "Doctors", href: "/doctors" },
    { label: "Facilities", href: "/facilities" },
    { label: "Contact & Location", href: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Top Notification / Emergency Bar */}
      <div className="bg-brand-900 text-white text-xs sm:text-sm py-2 px-4 border-b border-brand-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-medium text-roseAccent-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-roseAccent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-roseAccent-500"></span>
              </span>
              24/7 Emergency & Ambulance:
            </span>
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
              className="font-bold text-white hover:text-roseAccent-200 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-roseAccent-400" />
              {HOSPITAL_INFO.emergencyPhone}
            </a>
            <span className="hidden md:inline-block text-brand-600">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-brand-400" />
              OPD: 8:00 AM - 10:00 PM
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 transition-colors font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              WhatsApp Clinic
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=100057389561273"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <span>Official Facebook</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-soft border-b border-slate-200/80 py-3"
            : "bg-white shadow-sm border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <NextLink href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-brand-600/30 shadow-md group-hover:scale-105 transition-transform bg-white">
              <Image
                src="/images/logo.png"
                alt="Emaan Medical And Surgical Center Logo"
                fill
                priority
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold text-brand-900 tracking-tight leading-tight group-hover:text-brand-600 transition-colors">
                EMAAN
              </span>
              <span className="text-xs sm:text-sm font-semibold text-brand-700 uppercase tracking-wider">
                Medical & Surgical Center
              </span>
              <span className="hidden sm:block text-[10px] text-slate-500 font-medium">
                Healthcare with Compassion & Excellence
              </span>
            </div>
          </NextLink>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <NextLink
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                    isActive
                      ? "text-brand-600 bg-brand-50 font-bold"
                      : "text-slate-700 hover:text-brand-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </NextLink>
              );
            })}
          </div>

          {/* Right Action CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="flex items-center gap-2 text-brand-800 hover:text-brand-600 text-sm font-semibold px-3 py-2 rounded-lg hover:bg-brand-50/60 transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-600" />
              <span>{HOSPITAL_INFO.phone}</span>
            </a>
            <NextLink
              href="/appointments"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </NextLink>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <NextLink
              href="/appointments"
              className="bg-brand-600 text-white text-xs font-semibold px-3 py-1.5 rounded-md"
            >
              Book
            </NextLink>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-brand-600 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 mt-3 animate-in fade-in duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <NextLink
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                      isActive
                        ? "bg-brand-50 text-brand-600 font-bold"
                        : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </NextLink>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <NextLink
                href="/appointments"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold py-3 rounded-lg shadow"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </NextLink>

              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <a
                  href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                  className="flex items-center justify-center gap-1.5 bg-roseAccent-50 text-roseAccent-700 py-2.5 rounded-lg font-bold border border-roseAccent-200"
                >
                  <Phone className="w-3.5 h-3.5" />
                  24/7 Emergency
                </a>
                <a
                  href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-emerald-50 text-emerald-700 py-2.5 rounded-lg font-bold border border-emerald-200"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
