import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Clock,
  Calendar,
  User,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { BLOG_POSTS } from "@/data/blogData";

export const metadata = {
  title: "Health Blog & Medical Insights | Emaan Medical And Surgical Center",
  description:
    "Expert health guidance, surgical insights, and wellness advice authored by Dr. Fayaz Ullah and specialist consultants at Emaan Medical Center.",
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Medical Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-950 tracking-tight">
            Patient Health & Clinical Insights
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Evidence-based healthcare articles, surgical explanations, and preventative wellness advice written directly by our medical faculty.
          </p>
        </div>

        {/* Featured Post (Dr. Fayaz Ullah) */}
        {BLOG_POSTS[0] && (
          <div className="mb-14 bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-brand-100 hover:border-brand-300 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-brand-900 border border-slate-200">
                <Image
                  src={BLOG_POSTS[0].author.image}
                  alt={BLOG_POSTS[0].title}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute top-3 left-3 bg-brand-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  Featured Article • {BLOG_POSTS[0].category}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1 font-semibold text-brand-600">
                    <Calendar className="w-3.5 h-3.5" /> {BLOG_POSTS[0].date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {BLOG_POSTS[0].readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 hover:text-brand-600 transition-colors">
                  <Link href={`/blog/${BLOG_POSTS[0].slug}`}>
                    {BLOG_POSTS[0].title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3">
                  {BLOG_POSTS[0].excerpt}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-100 relative border border-slate-200">
                      <Image
                        src={BLOG_POSTS[0].author.image}
                        alt={BLOG_POSTS[0].author.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block leading-tight">
                        {BLOG_POSTS[0].author.name}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {BLOG_POSTS[0].author.role}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${BLOG_POSTS[0].slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-700"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(1).map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl p-6 shadow-soft border border-slate-200/90 hover:shadow-card hover:border-brand-200 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4 text-xs">
                  <span className="bg-brand-50 text-brand-700 font-bold px-2.5 py-1 rounded-lg border border-brand-100">
                    {post.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2 leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100 relative border border-slate-200">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">
                      {post.author.name}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {post.date}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-brand-600 group-hover:text-brand-700 p-1.5 rounded-lg hover:bg-brand-50 transition-colors"
                  aria-label={`Read ${post.title}`}
                >
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
