import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  CheckCircle2,
  CalendarCheck,
  Stethoscope,
  Share2,
  Phone,
} from "lucide-react";
import { BLOG_POSTS } from "@/data/blogData";
import { HOSPITAL_INFO } from "@/data/hospitalData";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Emaan Medical Center`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-slate-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Health Articles</span>
        </Link>

        {/* Article Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-card border border-slate-200">
          {/* Header */}
          <div className="border-b border-slate-100 pb-8 mb-8">
            <span className="inline-block bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-brand-200 mb-4">
              {post.category}
            </span>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              {/* Author badge */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-brand-100 border border-brand-300 shrink-0">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block">
                    {post.author.name}
                  </span>
                  <span className="text-xs text-slate-500">
                    {post.author.role}
                  </span>
                </div>
              </div>

              {/* Meta details */}
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-600" />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-600" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="mb-8 p-6 rounded-2xl bg-brand-50/70 border border-brand-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-600" />
              Clinical Key Takeaways & Recommendations:
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {post.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600 shrink-0 mt-2"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Prose */}
          <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Doctor CTA Banner at Bottom of Article */}
          <div className="mt-12 pt-8 border-t border-slate-100 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-1">
                Have Specific Questions on This Condition?
              </span>
              <h4 className="text-lg font-bold text-slate-900">
                Consult With Our Clinical Specialist
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Schedule a one-on-one consultation with {post.author.name} at Emaan Medical Center.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow transition-colors text-center"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>
              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

