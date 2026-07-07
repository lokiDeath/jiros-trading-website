"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, MessageCircle, Send } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { WhatsAppButton } from "./whatsapp-button";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a2540] via-[#14365c] to-[#0a2540] p-8 md:p-14 mb-16"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#d4af37]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />

          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 mb-5">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Start Trading Today
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Start Trading with Us Today
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-300">
              Send us a message on WhatsApp and get an instant rate quote. Most
              trades are completed within minutes. Your cash is just one
              message away.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <WhatsAppButton
                label="Chat on WhatsApp Now"
                size="lg"
                message="Hello Jiro's Trading, I'd like to trade a gift card. Please share your current rates."
              />
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/20 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact details grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0a2540] mb-3">
            Get in Touch
          </h3>
          <p className="text-slate-600">
            We&apos;re available around the clock. Reach us on the channel that
            works best for you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          <ContactCard
            icon={MessageCircle}
            title="WhatsApp"
            value={siteConfig.whatsappDisplay}
            sub="Fastest response, 24/7"
            href={whatsappLink("Hello Jiro's Trading, I'd like to trade a gift card.")}
            accent="green"
          />
          <ContactCard
            icon={Mail}
            title="Email"
            value={siteConfig.emailDisplay}
            sub="We reply within 2 hours"
            href={`mailto:${siteConfig.email}`}
            accent="navy"
          />
          <ContactCard
            icon={Clock}
            title="Working Hours"
            value={siteConfig.hours}
            sub="Sun: 12 PM - 10 PM (GMT)"
            href="#"
            accent="gold"
          />
        </div>

        {/* Quick contact form (WhatsApp-powered) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 max-w-3xl mx-auto bg-slate-50/60 rounded-3xl p-6 md:p-10 border border-slate-100"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#0a2540] text-center mb-2">
            Send us a quick message
          </h3>
          <p className="text-sm text-slate-600 text-center mb-6">
            Fill this in and we&apos;ll open a pre-filled WhatsApp chat with our
            team.
          </p>
          <QuickForm />
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  sub,
  href,
  accent,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  sub: string;
  href: string;
  accent: "green" | "navy" | "gold";
}) {
  const accentClasses = {
    green: "bg-emerald-50 text-emerald-600",
    navy: "bg-[#0a2540]/10 text-[#0a2540]",
    gold: "bg-[#d4af37]/10 text-[#d4af37]",
  };

  const content = (
    <div className="group h-full bg-white rounded-2xl p-6 border border-slate-100 hover:border-[#0a2540]/30 hover:shadow-lg hover:shadow-[#0a2540]/5 transition-all duration-300 flex flex-col items-center text-center">
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 ${accentClasses[accent]} group-hover:scale-110 transition-transform`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
        {title}
      </h4>
      <div className="text-base font-bold text-[#0a2540]">{value}</div>
      <div className="text-xs text-slate-500 mt-1">{sub}</div>
    </div>
  );

  if (href === "#") return content;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
      {content}
    </a>
  );
}

function QuickForm() {
  const [name, setName] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardValue, setCardValue] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Jiro's Trading!%0A%0AName: ${encodeURIComponent(
      name || "-"
    )}%0AGift Card: ${encodeURIComponent(
      cardType || "-"
    )}%0AValue: ${encodeURIComponent(
      cardValue || "-"
    )}%0A%0AMessage: ${encodeURIComponent(message || "-")}`;
    window.open(`${whatsappLink()}?text=${text}`, "_blank");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#0a2540] placeholder:text-slate-400 focus:outline-none focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/10 transition-all"
        />
        <input
          required
          value={cardType}
          onChange={(e) => setCardType(e.target.value)}
          placeholder="Gift card type (e.g. Amazon, Steam)"
          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#0a2540] placeholder:text-slate-400 focus:outline-none focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/10 transition-all"
        />
      </div>
      <input
        value={cardValue}
        onChange={(e) => setCardValue(e.target.value)}
        placeholder="Card value (e.g. $100)"
        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#0a2540] placeholder:text-slate-400 focus:outline-none focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/10 transition-all"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Anything else we should know?"
        rows={3}
        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#0a2540] placeholder:text-slate-400 focus:outline-none focus:border-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/10 transition-all resize-none"
      />
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#25d366] hover:bg-[#1ebe5d] rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#25d366]/25"
      >
        <Send className="h-5 w-5" />
        Send via WhatsApp
      </button>
    </form>
  );
}
