"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Globe,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { trustBadges } from "@/lib/site-config";

const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  zap: Zap,
  globe: Globe,
  layers: Layers,
};

export function TrustBadges() {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0a2540]/5 border border-[#0a2540]/10 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#0a2540] uppercase tracking-wider">
              Why choose us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a2540] tracking-tight">
            Trusted by Thousands Globally
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600">
            We&apos;ve built our reputation on speed, security, and fairness.
            Here&apos;s what every client gets when they trade with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map((badge, i) => {
            const Icon = iconMap[badge.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-white rounded-2xl p-6 md:p-7 border border-slate-100 hover:border-[#d4af37]/40 hover:shadow-xl hover:shadow-[#0a2540]/5 transition-all duration-300"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a2540] to-[#14365c] text-white shadow-lg shadow-[#0a2540]/20 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-[#0a2540] mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {badge.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
