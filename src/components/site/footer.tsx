"use client";

import Link from "next/link";
import { Mail, MessageCircle, Clock, ArrowUp } from "lucide-react";
import { navLinks, siteConfig, whatsappLink } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a2540] text-white mt-auto">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-tight mb-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
                Jiro&apos;s
              </span>
              <span className="text-base font-extrabold tracking-tight text-white">
                TRADING &amp; LOGISTICS
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5">
                LIMITED
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-5 max-w-xs">
              Your trusted global gift card partner. Secure, instant, and
              reliable gift card trading worldwide.
            </p>
            <a
              href={whatsappLink("Hello Jiro's Trading, I'd like to trade a gift card.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25d366] hover:bg-[#1ebe5d] text-white text-sm font-semibold transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#d4af37] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-slate-600 group-hover:bg-[#d4af37] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#d4af37] mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-slate-300 inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                Gift Card Trading
              </li>
              <li className="text-sm text-slate-300 inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                Bulk Gift Card Trading
              </li>
              <li className="text-sm text-slate-300 inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                Instant Cash Payouts
              </li>
              <li className="text-sm text-slate-300 inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                Global Money Payouts
              </li>
              <li className="text-sm text-slate-300 inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                24/7 WhatsApp Support
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#d4af37] mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <MessageCircle className="h-4 w-4 mt-0.5 text-[#25d366] flex-shrink-0" />
                  <span>
                    <span className="block text-xs text-slate-500">
                      WhatsApp
                    </span>
                    {siteConfig.whatsappDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 text-[#d4af37] flex-shrink-0" />
                  <span>
                    <span className="block text-xs text-slate-500">Email</span>
                    {siteConfig.emailDisplay}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Clock className="h-4 w-4 mt-0.5 text-[#d4af37] flex-shrink-0" />
                <span>
                  <span className="block text-xs text-slate-500">Hours</span>
                  {siteConfig.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            &copy; {year} {siteConfig.brand}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link href="/legal#terms" className="text-xs text-slate-400 hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/legal#privacy" className="text-xs text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/legal#cookies" className="text-xs text-slate-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/legal#aml" className="text-xs text-slate-400 hover:text-white transition-colors">
              AML &amp; Fraud Prevention
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/legal#disclaimer" className="text-xs text-slate-400 hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
          <a
            href="#home"
            className="text-xs text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            Back to top
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
