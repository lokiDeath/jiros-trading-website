"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Zap } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";
import {
  AmazonCard,
  SteamCard,
  PlayStationCard,
  ITunesCard,
} from "./brand-cards";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden hero-pattern"
    >
      {/* Decorative grid background */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />

      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-32 h-96 w-96 rounded-full bg-[#0a2540]/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 px-4 py-1.5 mb-6">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-[#d4af37] text-[#d4af37]"
                  />
                ))}
              </span>
              <span className="text-xs font-semibold text-[#0a2540]">
                Trusted by thousands globally
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#0a2540] leading-[1.05] tracking-tight">
              Your Trusted{" "}
              <span className="relative inline-block">
                <span className="gold-text">Global Gift Card</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C50 3 150 3 298 9"
                    stroke="#d4af37"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Partner
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Jiro&apos;s Trading and Logistics Limited delivers secure, instant,
              and reliable gift card trading worldwide. Get the best rates for
              Amazon, Steam, iTunes, Google Play, Xbox and many more, paid out
              within minutes.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <WhatsAppButton
                label="Chat on WhatsApp"
                size="lg"
                message="Hello Jiro's Trading, I'd like to trade a gift card. Please share your current rates."
              />
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#0a2540] border-2 border-[#0a2540]/15 rounded-full hover:border-[#0a2540] hover:bg-[#0a2540]/[0.03] transition-all duration-300 hover:scale-[1.02]"
              >
                Our Services
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Mini stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <Stat value="50K+" label="Trades" />
              <Stat value="120+" label="Card Types" />
              <Stat value="24/7" label="Support" />
            </div>
          </motion.div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center lg:text-left">
      <div className="text-2xl sm:text-3xl font-extrabold text-[#0a2540]">
        {value}
      </div>
      <div className="text-xs text-slate-500 font-medium mt-0.5">{label}</div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-square max-w-md mx-auto">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d4af37]/20 via-transparent to-[#0a2540]/20 blur-2xl" />

      {/* Center medallion */}
      <div className="absolute inset-8 md:inset-12 rounded-full bg-white border border-slate-100 shadow-2xl shadow-[#0a2540]/10 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-[#0a2540] text-white mb-4 shadow-lg">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-8 w-8 md:h-10 md:w-10"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18"
              />
            </svg>
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-1">
            Jiro&apos;s
          </div>
          <div className="text-sm font-extrabold text-[#0a2540]">
            TRADING &amp; LOGISTICS
          </div>
          <div className="text-[10px] text-slate-500 mt-1">LIMITED</div>
        </div>
      </div>

      {/* Floating realistic gift cards */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 rotate-[-8deg] animate-float"
        style={{ animationDelay: "0s" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <AmazonCard variant="small" className="w-32 h-20" />
      </motion.div>

      <motion.div
        className="absolute bottom-4 right-0 rotate-[8deg] animate-float"
        style={{ animationDelay: "0.8s" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.55, duration: 0.5 }}
      >
        <PlayStationCard variant="small" className="w-32 h-20" />
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-0 rotate-[-8deg] animate-float"
        style={{ animationDelay: "1.6s" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <SteamCard variant="small" className="w-32 h-20" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 -right-4 -translate-y-1/2 rotate-[12deg] animate-float"
        style={{ animationDelay: "2.4s" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.85, duration: 0.5 }}
      >
        <ITunesCard variant="small" className="w-32 h-20" />
      </motion.div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute top-6 -left-2 md:left-0 bg-white rounded-2xl shadow-xl shadow-[#0a2540]/10 p-3 flex items-center gap-2 border border-slate-50"
      >
        <div className="h-9 w-9 rounded-xl bg-emerald-50 flex items-center justify-center">
          <ShieldCheck className="h-5 w-5 text-emerald-600" />
        </div>
        <div>
          <div className="text-xs font-bold text-[#0a2540]">100% Secure</div>
          <div className="text-[10px] text-slate-500">Verified payouts</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 -right-2 md:right-0 bg-white rounded-2xl shadow-xl shadow-[#0a2540]/10 p-3 flex items-center gap-2 border border-slate-50"
      >
        <div className="h-9 w-9 rounded-xl bg-amber-50 flex items-center justify-center">
          <Zap className="h-5 w-5 text-amber-500" />
        </div>
        <div>
          <div className="text-xs font-bold text-[#0a2540]">Instant Pay</div>
          <div className="text-[10px] text-slate-500">~5 min average</div>
        </div>
      </motion.div>
    </div>
  );
}
