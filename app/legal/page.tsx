"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowLeft,
  FileText,
  ShieldCheck,
  Cookie,
  Scale,
  AlertTriangle,
  Mail,
} from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import { siteConfig, legalSections } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const sectionMeta = [
  {
    id: "terms",
    label: "Terms & Conditions",
    icon: FileText,
    intro:
      "These Terms & Conditions govern your use of Jiro's Trading and Logistics Limited gift card trading services. By trading with us, you agree to the terms below.",
  },
  {
    id: "privacy",
    label: "Privacy Policy",
    icon: ShieldCheck,
    intro:
      "This Privacy Policy explains how Jiro's Trading and Logistics Limited collects, uses, and protects your personal information when you trade gift cards with us.",
  },
  {
    id: "cookies",
    label: "Cookie Policy",
    icon: Cookie,
    intro:
      "This Cookie Policy explains how Jiro's Trading and Logistics Limited uses cookies and similar technologies on our website.",
  },
  {
    id: "aml",
    label: "AML & Fraud Prevention",
    icon: Scale,
    intro:
      "Jiro's Trading and Logistics Limited is committed to preventing fraud, money laundering, and the trade of stolen gift cards. This policy outlines our approach.",
  },
  {
    id: "disclaimer",
    label: "Disclaimer",
    icon: AlertTriangle,
    intro:
      "The information provided by Jiro's Trading and Logistics Limited on this website is for general informational purposes only.",
  },
];

const today = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function LegalPage() {
  const [activeId, setActiveId] = useState<string>("terms");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      // Determine active section
      let current = sectionMeta[0].id;
      for (const section of sectionMeta) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            current = section.id;
          }
        }
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 hero-pattern overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#d4af37]/15 blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#d4af37]/30 px-4 py-1.5 mb-5 shadow-sm">
                <FileText className="h-4 w-4 text-[#d4af37]" />
                <span className="text-xs font-semibold text-[#0a2540] uppercase tracking-wider">
                  Legal Documents
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a2540] tracking-tight">
                Legal <span className="gold-text">Documents</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Please review the policies and terms that govern your use of
                Jiro&apos;s Trading and Logistics Limited services.
              </p>
              <p className="mt-4 text-xs text-slate-500">
                Last updated: <span className="font-semibold text-[#0a2540]">{today}</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mobile sidebar - horizontal scroll */}
        <div className="lg:hidden sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100">
          <div className="overflow-x-auto">
            <div className="flex gap-2 px-4 py-3 min-w-max">
              {legalSections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={section.href}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors",
                      isActive
                        ? "bg-[#0a2540] text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    )}
                  >
                    {section.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content area */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Desktop sidebar */}
              <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-28">
                  <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-4">
                      On This Page
                    </div>
                    <nav className="space-y-1">
                      {legalSections.map((section) => {
                        const meta = sectionMeta.find((m) => m.id === section.id);
                        const Icon = meta?.icon ?? FileText;
                        const isActive = activeId === section.id;
                        return (
                          <a
                            key={section.id}
                            href={section.href}
                            className={cn(
                              "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                              isActive
                                ? "bg-[#0a2540] text-white"
                                : "text-slate-700 hover:bg-slate-50 hover:text-[#0a2540]"
                            )}
                          >
                            <Icon className="h-4 w-4 flex-shrink-0" />
                            {section.label}
                          </a>
                        );
                      })}
                    </nav>

                    <div className="mt-6 pt-5 border-t border-slate-100">
                      <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a2540] hover:text-[#d4af37] transition-colors"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main content */}
              <div className="lg:col-span-9 space-y-10">
                {/* Back to home (mobile) */}
                <div className="lg:hidden">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a2540] hover:text-[#d4af37] transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                  </Link>
                </div>

                {/* Section: Terms & Conditions */}
                <LegalSection id="terms" label="Terms & Conditions" icon={FileText} intro={sectionMeta[0].intro}>
                  <SubHeading>1. Eligibility &amp; Ownership</SubHeading>
                  <Para>
                    By trading with Jiro&apos;s Trading and Logistics Limited,
                    you confirm that you are the lawful owner of any gift card
                    you submit to us. You must be at least 18 years old or the
                    age of majority in your jurisdiction to use our services.
                  </Para>

                  <SubHeading>2. Prohibited Activity</SubHeading>
                  <Para>
                    Stolen, fraudulent, or otherwise unlawfully obtained gift
                    cards are strictly prohibited. We do not accept cards that
                    were purchased with stolen payment methods, obtained through
                    phishing, or acquired in any way that violates applicable
                    law.
                  </Para>

                  <SubHeading>3. Trade Rates</SubHeading>
                  <Para>
                    Gift card trade rates may change at any time without prior
                    notice. The rate confirmed by our team at the time of
                    verification is the rate that will apply to your trade.
                  </Para>

                  <SubHeading>4. Verification</SubHeading>
                  <Para>
                    All gift cards are verified before payment is issued.
                    Verification may include balance checks, validity checks,
                    and origin review. We reserve the right to request
                    additional information from you to confirm legitimacy.
                  </Para>

                  <SubHeading>5. Payment Times</SubHeading>
                  <Para>
                    Estimated payout times are provided as a guide only and are
                    not guaranteed. Actual payout times may vary depending on
                    payment method, verification requirements, and third-party
                    processing.
                  </Para>

                  <SubHeading>6. Rejection of Trades</SubHeading>
                  <Para>
                    We may reject a trade for any of the following reasons,
                    including but not limited to:
                  </Para>
                  <BulletList
                    items={[
                      "The gift card is invalid or has already been redeemed",
                      "The stated value does not match the actual balance",
                      "The gift card shows signs of suspicious or fraudulent activity",
                      "The gift card was purchased with stolen or unauthorized payment methods",
                      "Information provided by the customer is incomplete or misleading",
                    ]}
                  />

                  <SubHeading>7. Reporting Fraud</SubHeading>
                  <Para>
                    Suspected fraud may be reported to the appropriate law
                    enforcement and regulatory authorities. We cooperate fully
                    with such authorities in the investigation of any
                    fraudulent activity.
                  </Para>

                  <SubHeading>8. Liability Limitations</SubHeading>
                  <Para>
                    Jiro&apos;s Trading and Logistics Limited shall not be
                    liable for any indirect, incidental, or consequential
                    damages arising from your use of our services. Our total
                    liability for any claim related to a trade is limited to the
                    value of the gift card submitted.
                  </Para>
                </LegalSection>

                {/* Section: Privacy Policy */}
                <LegalSection id="privacy" label="Privacy Policy" icon={ShieldCheck} intro={sectionMeta[1].intro}>
                  <SubHeading>1. Information We Collect</SubHeading>
                  <Para>
                    When you trade with us or contact us, we may collect the
                    following types of information:
                  </Para>
                  <BulletList
                    items={[
                      "Your name and contact details, including WhatsApp number and email address",
                      "Gift card details you share with us for verification",
                      "Your IP address and basic device information, such as browser type and operating system",
                      "Message records and trade history with our team",
                    ]}
                  />

                  <SubHeading>2. How We Use Your Information</SubHeading>
                  <Para>We use the information we collect to:</Para>
                  <BulletList
                    items={[
                      "Process and verify your gift card trades",
                      "Communicate with you about trades, rates, and payouts",
                      "Prevent fraud and protect both us and our customers",
                      "Improve our services and customer experience",
                    ]}
                  />

                  <SubHeading>3. How We Store &amp; Protect Data</SubHeading>
                  <Para>
                    We take reasonable measures to protect your personal
                    information from unauthorized access, disclosure, or loss.
                    Sensitive trade details are stored securely and access is
                    limited to authorized team members only.
                  </Para>

                  <SubHeading>4. Third-Party Services</SubHeading>
                  <Para>
                    We rely on third-party services to operate our business,
                    including WhatsApp for communication and our hosting
                    provider for website infrastructure. These providers may
                    collect limited information as part of their own services
                    and are governed by their own privacy policies.
                  </Para>

                  <SubHeading>5. Your Rights</SubHeading>
                  <Para>
                    You may request access to, correction of, or deletion of
                    your personal information at any time. You may also opt out
                    of promotional communication by notifying us through
                    WhatsApp or email.
                  </Para>

                  <SubHeading>6. Contact for Privacy Concerns</SubHeading>
                  <Para>
                    For any privacy-related questions or requests, please
                    contact us at:
                  </Para>
                  <ContactInline />
                </LegalSection>

                {/* Section: Cookie Policy */}
                <LegalSection id="cookies" label="Cookie Policy" icon={Cookie} intro={sectionMeta[2].intro}>
                  <SubHeading>1. What Are Cookies</SubHeading>
                  <Para>
                    Cookies are small text files that websites place on your
                    device when you visit them. They allow the website to
                    remember your actions and preferences over a period of
                    time, so you don&apos;t have to re-enter them every time
                    you visit.
                  </Para>

                  <SubHeading>2. Types of Cookies We Use</SubHeading>
                  <BulletList
                    items={[
                      "Essential cookies: required for the website to function correctly",
                      "Analytics cookies: help us understand how visitors use our website so we can improve it",
                      "Functional cookies: remember your preferences, such as language or region",
                    ]}
                  />

                  <SubHeading>3. Third-Party Services</SubHeading>
                  <Para>
                    Some third-party services we use may also set cookies on
                    your device, including:
                  </Para>
                  <BulletList
                    items={[
                      "Google Analytics, for anonymous traffic analytics",
                      "Cloudflare, for website security and performance",
                      "Our website hosting provider",
                      "Contact form and chat services, including WhatsApp",
                    ]}
                  />

                  <SubHeading>4. Managing Cookies</SubHeading>
                  <Para>
                    You can manage or disable cookies at any time through your
                    browser settings. Most modern browsers allow you to refuse
                    cookies or alert you when cookies are being sent.
                  </Para>

                  <SubHeading>5. Effect of Disabling Cookies</SubHeading>
                  <Para>
                    Please note that disabling cookies may affect the
                    functionality of our website. Some features may not work as
                    intended if cookies are disabled.
                  </Para>
                </LegalSection>

                {/* Section: AML & Fraud Prevention */}
                <LegalSection id="aml" label="AML & Fraud Prevention Policy" icon={Scale} intro={sectionMeta[3].intro}>
                  <SubHeading>1. No Stolen Gift Cards</SubHeading>
                  <Para>
                    We do not accept stolen gift cards under any circumstances.
                    Every gift card submitted to Jiro&apos;s Trading and
                    Logistics Limited is screened for signs of theft, fraud, or
                    unauthorized acquisition.
                  </Para>

                  <SubHeading>2. Fraudulent Activity Is Prohibited</SubHeading>
                  <Para>
                    Any attempt to trade fraudulent, counterfeit, or
                    unauthorized gift cards is strictly prohibited and may
                    result in immediate termination of services and reporting
                    to the authorities.
                  </Para>

                  <SubHeading>3. Additional Verification</SubHeading>
                  <Para>
                    Suspicious trades may require additional verification
                    before processing. This may include requesting
                    identification, proof of purchase, or other documentation
                    to confirm the legitimacy of the gift card.
                  </Para>

                  <SubHeading>4. Right to Refuse Transactions</SubHeading>
                  <Para>
                    Jiro&apos;s Trading and Logistics Limited reserves the
                    right to refuse any transaction at its sole discretion,
                    without prior notice and without obligation to provide a
                    reason.
                  </Para>

                  <SubHeading>5. Reporting to Authorities</SubHeading>
                  <Para>
                    Where we identify or suspect fraudulent activity, we may
                    report the matter to the appropriate law enforcement and
                    regulatory authorities and cooperate fully with any
                    investigation.
                  </Para>

                  <SubHeading>6. Commitment to Trust</SubHeading>
                  <Para>
                    We are committed to building long-term trust with
                    legitimate customers. Our fraud prevention measures exist
                    to protect both us and the honest customers who trade with
                    us every day.
                  </Para>
                </LegalSection>

                {/* Section: Disclaimer */}
                <LegalSection id="disclaimer" label="Disclaimer" icon={AlertTriangle} intro={sectionMeta[4].intro}>
                  <SubHeading>1. Rates May Change</SubHeading>
                  <Para>
                    Gift card trade rates may change without notice. The rate
                    quoted at the time of verification is the rate that will
                    apply, and we are not bound by rates quoted in earlier
                    conversations.
                  </Para>

                  <SubHeading>2. Processing Times May Vary</SubHeading>
                  <Para>
                    While we strive to process trades quickly, actual
                    processing times may vary based on verification
                    requirements, payment method, and third-party processing.
                  </Para>

                  <SubHeading>3. Technical Issues</SubHeading>
                  <Para>
                    Occasional technical issues with our systems, payment
                    providers, or third-party services may delay payouts. We
                    are not liable for delays caused by factors outside of our
                    direct control.
                  </Para>

                  <SubHeading>4. Information Provided &quot;As-Is&quot;</SubHeading>
                  <Para>
                    All information on this website is provided on an
                    &quot;as-is&quot; basis without warranties of any kind,
                    either express or implied. We do not guarantee the
                    accuracy, completeness, or timeliness of the information.
                  </Para>

                  <SubHeading>5. No Warranties or Guarantees</SubHeading>
                  <Para>
                    To the fullest extent permitted by law, Jiro&apos;s Trading
                    and Logistics Limited disclaims all warranties and
                    guarantees regarding our services and the information
                    provided on this website.
                  </Para>

                  <SubHeading>6. User Responsibility</SubHeading>
                  <Para>
                    You assume full responsibility for the gift cards you
                    trade, including their origin, legitimacy, and value. You
                    are responsible for ensuring that any card you submit
                    complies with our Terms &amp; Conditions and applicable
                    law.
                  </Para>
                </LegalSection>

                {/* Contact for legal questions */}
                <div className="rounded-2xl bg-gradient-to-br from-[#0a2540] to-[#1e3a5f] p-7 md:p-9 shadow-navy relative overflow-hidden">
                  <div className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-[#d4af37]/15 blur-3xl pointer-events-none" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <Mail className="h-5 w-5 text-[#d4af37]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                        Questions about our policies?
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      We&apos;re here to help
                    </h3>
                    <p className="mt-2 text-sm text-white/80 leading-relaxed max-w-lg">
                      If you have any questions about these legal documents or
                      how we handle your data, reach out to us on WhatsApp or by
                      email.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <a
                        href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello Jiro's Trading, I have a question about your legal policies.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] hover:bg-[#1ebe5d] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#25d366]/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Chat on WhatsApp
                      </a>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 text-sm font-bold text-white transition-all duration-300"
                      >
                        <Mail className="h-4 w-4" />
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />

      {/* Back to top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={cn(
          "fixed bottom-24 right-5 z-40 h-11 w-11 rounded-full bg-[#0a2540] hover:bg-[#1e3a5f] text-white shadow-navy flex items-center justify-center transition-all duration-300",
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}

function LegalSection({
  id,
  label,
  icon: Icon,
  intro,
  children,
}: {
  id: string;
  label: string;
  icon: React.ElementType;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-28 md:scroll-mt-32"
    >
      <div className="rounded-2xl border border-slate-100 bg-white p-6 md:p-9 shadow-card">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-12 w-12 rounded-xl bg-[#0a2540]/5 flex items-center justify-center">
            <Icon className="h-6 w-6 text-[#0a2540]" />
          </div>
          <div>
            <span className="gold-bar mb-1.5" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a2540] tracking-tight">
              {label}
            </h2>
          </div>
        </div>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
          {intro}
        </p>
        <div className="space-y-5">{children}</div>
      </div>
    </motion.section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-bold text-[#0a2540] mt-2 mb-2">
      {children}
    </h3>
  );
}

function Para({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
      {children}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2.5">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#d4af37] flex-shrink-0" />
          <span className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ContactInline() {
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 mt-1">
      <div className="flex items-center gap-2 text-sm text-slate-700">
        <Mail className="h-4 w-4 text-[#d4af37]" />
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-semibold text-[#0a2540] hover:text-[#d4af37] transition-colors break-all"
        >
          {siteConfig.email}
        </a>
      </div>
      <div className="mt-1.5 text-xs text-slate-500">
        WhatsApp: {siteConfig.whatsappDisplay}
      </div>
    </div>
  );
}
