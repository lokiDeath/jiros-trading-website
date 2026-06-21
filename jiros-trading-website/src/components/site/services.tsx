"use client";

import { motion } from "framer-motion";
import {
  Gift,
  TrendingUp,
  Clock,
  BadgePercent,
  Globe2,
  Headset,
  ArrowRight,
  Check,
} from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";

const features = [
  {
    icon: Clock,
    title: "Instant Verification",
    description:
      "Submit your gift card and we verify balance within minutes. No long waits, no back-and-forth."
  },
  {
    icon: BadgePercent,
    title: "Best Market Rates",
    description:
      "We benchmark our rates daily so you always get the most competitive payout for every card type.",
  },
  {
    icon: Globe2,
    title: "Worldwide Coverage",
    description:
      "Trade from any country. We accept gift cards from the US, UK, EU, Canada, Australia and more.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "Real humans on WhatsApp 24/7. Get answers, resolve issues, and track your trade in real time.",
  },
];

const tradeSteps = [
  {
    step: "01",
    title: "Contact us on WhatsApp",
    description:
      "Send us a message with the type and value of the gift card you want to trade.",
  },
  {
    step: "02",
    title: "Submit your gift card",
    description:
      "Share clear photos of the card or the digital code securely through our WhatsApp channel.",
  },
  {
    step: "03",
    title: "We verify the balance",
    description:
      "Our team validates the card balance within minutes and confirms your payout rate.",
  },
  {
    step: "04",
    title: "Get paid instantly",
    description:
      "Choose your preferred payout (bank transfer, mobile money, or local payment) and get paid."
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#0a2540] uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a2540] tracking-tight">
            Gift Card Trading
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600">
            The simple, secure way to convert unused gift cards into cash. We
            trade all major brands with the best rates and fastest payouts in
            the industry.
          </p>
        </motion.div>

        {/* Service spotlight card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-xl shadow-[#0a2540]/5 mb-16"
        >
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left visual */}
            <div className="relative lg:col-span-2 bg-gradient-to-br from-[#0a2540] via-[#14365c] to-[#0a2540] p-8 md:p-12 flex flex-col justify-between min-h-[320px] overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#d4af37]/20 blur-3xl" />

              <div className="relative">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur text-white border border-white/20 mb-6">
                  <Gift className="h-8 w-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  Trade any gift card for instant cash
                </h3>
                <p className="mt-3 text-sm text-slate-300 max-w-sm">
                  Amazon, Steam, iTunes, Google Play, Xbox, PlayStation, Sephora,
                  Visa, Mastercard and many more.
                </p>
              </div>

              <div className="relative mt-8 grid grid-cols-3 gap-3">
                <MiniStat value="~5 min" label="Avg payout" />
                <MiniStat value="120+" label="Card types" />
                <MiniStat value="100%" label="Secure" />
              </div>
            </div>

            {/* Right copy */}
            <div className="lg:col-span-3 p-8 md:p-12">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-[#d4af37]" />
                <span className="text-xs font-semibold text-[#0a2540] uppercase tracking-wider">
                  The Jiro&apos;s Advantage
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0a2540] mb-4">
                Get the most value from your gift cards
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Jiro&apos;s Trading and Logistics Limited gives you a smooth,
                transparent, and fast way to exchange gift cards for cash. We
                work with individual traders, retailers, and bulk resellers,
                always with upfront rates, real-time updates, and guaranteed
                payouts.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  "All major gift card brands supported",
                  "Transparent, upfront rates",
                  "Bank transfer, mobile money & local pay",
                  "Bulk trading available for resellers",
                  "No hidden fees, ever",
                  "WhatsApp support 24/7",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 flex-shrink-0">
                      <Check className="h-3 w-3 text-emerald-600" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <WhatsAppButton
                  label="Trade Now"
                  size="lg"
                  message="Hello Jiro's Trading, I'd like to trade a gift card. Please share your current rates."
                />
                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-[#0a2540] hover:text-[#d4af37] transition-colors group"
                >
                  View supported cards
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:shadow-[#0a2540]/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37] mb-4">
                <f.icon className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-[#0a2540] mb-1.5">
                {f.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0a2540] mb-3">
            How it works
          </h3>
          <p className="text-slate-600">
            Four simple steps from gift card to cash, usually completed within
            minutes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tradeSteps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 border border-slate-100 h-full hover:border-[#d4af37]/40 transition-colors">
                <div className="text-4xl font-extrabold text-[#d4af37]/30 mb-3">
                  {s.step}
                </div>
                <h4 className="text-base font-bold text-[#0a2540] mb-2">
                  {s.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {s.description}
                </p>
              </div>
              {i < tradeSteps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 h-6 w-6 items-center justify-center rounded-full bg-white border border-slate-200">
                  <ArrowRight className="h-3 w-3 text-slate-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-white/10 backdrop-blur p-3 border border-white/10">
      <div className="text-base font-bold text-white">{value}</div>
      <div className="text-[10px] text-slate-300 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
