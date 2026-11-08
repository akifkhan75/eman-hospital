import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, MessageCircle } from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export const metadata: Metadata = {
  metadataBase: new URL("https://emaanmedical.org"),
  title: "Emaan Medical And Surgical Center | Advanced Healthcare & Surgery",
  description:
    "Emaan Medical And Surgical Center is a multi-specialty hospital providing 24/7 Emergency, Gastroenterology & Endoscopy under Dr. Fayaz Ullah, Laparoscopic Surgery, Obstetrics & Gynecology, Pediatrics, and Diagnostic Laboratory.",
  keywords: [
    "Emaan Medical And Surgical Center",
    "Emaan Hospital",
    "Dr Fayaz Ullah",
    "Gastroenterologist",
    "Endoscopy Islamabad",
    "Laparoscopic Surgery",
    "Maternity Hospital",
    "24/7 Emergency Hospital",
  ],
  authors: [{ name: "Emaan Medical And Surgical Center" }],
  openGraph: {
    title: "Emaan Medical And Surgical Center | Excellence in Healthcare",
    description:
      "24/7 Emergency, Laparoscopic Surgery, Gastroenterology & Endoscopy under Dr. Fayaz Ullah, Maternity & Pediatric care.",
    url: "https://emaanmedical.org",
    siteName: "Emaan Medical And Surgical Center",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "Emaan Medical And Surgical Center Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: HOSPITAL_INFO.name,
    image: "https://emaanmedical.org/images/logo.png",
    url: "https://emaanmedical.org",
    telephone: HOSPITAL_INFO.emergencyPhone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: HOSPITAL_INFO.address,
      addressCountry: "PK",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    medicalSpecialty: [
      "Gastroenterology",
      "Surgical",
      "Obstetrics",
      "Gynecology",
      "Pediatric",
      "Cardiology",
      "Emergency",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-white selection:bg-brand-500 selection:text-white overflow-x-hidden">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />

        {/* Floating Quick Action Buttons (Mobile & Desktop Responsive) */}
        <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
          {/* Floating WhatsApp Button */}
          <a
            href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello! I would like to inquire about consultation and hospital services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group border-2 border-white/60"
            aria-label="Chat on WhatsApp"
            title="Chat with Clinic Desk on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
            <span className="hidden sm:inline-block text-xs font-semibold">
              WhatsApp
            </span>
          </a>

          {/* Floating Emergency Hotline */}
          <a
            href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
            className="flex items-center gap-2 bg-roseAccent-600 hover:bg-roseAccent-700 text-white font-bold p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group border-2 border-white/60"
            aria-label="Call 24/7 Emergency"
            title="24/7 Emergency Hotline"
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            <span className="hidden sm:inline-block text-xs font-semibold">
              24/7 Trauma
            </span>
          </a>
        </div>
      </body>
    </html>
  );
}
