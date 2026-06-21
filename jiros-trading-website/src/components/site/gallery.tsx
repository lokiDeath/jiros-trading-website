"use client";

import { motion } from "framer-motion";
import { giftCards, type BrandId } from "@/lib/site-config";
import { WhatsAppButton } from "./whatsapp-button";
import {
  AmazonCard,
  SteamCard,
  ITunesCard,
  GooglePlayCard,
  XboxCard,
  PlayStationCard,
  EbayCard,
  SephoraCard,
  NetflixCard,
  SpotifyCard,
  VisaCard,
  MastercardCard,
  WalmartCard,
  TargetCard,
  BestBuyCard,
  AppleStoreCard,
  NikeCard,
  AdidasCard,
  MacysCard,
  NordstromCard,
} from "./brand-cards";

const brandCardMap: Record<BrandId, React.ComponentType<{ variant?: "large" | "small"; className?: string }>> = {
  amazon: AmazonCard,
  steam: SteamCard,
  itunes: ITunesCard,
  "google-play": GooglePlayCard,
  xbox: XboxCard,
  playstation: PlayStationCard,
  ebay: EbayCard,
  sephora: SephoraCard,
  netflix: NetflixCard,
  spotify: SpotifyCard,
  visa: VisaCard,
  mastercard: MastercardCard,
  walmart: WalmartCard,
  target: TargetCard,
  "best-buy": BestBuyCard,
  "apple-store": AppleStoreCard,
  nike: NikeCard,
  adidas: AdidasCard,
  macys: MacysCard,
  nordstrom: NordstromCard,
};

export function Gallery() {
  // Duplicate the list for the infinite marquee
  const marquee = [...giftCards, ...giftCards];

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#0a2540] uppercase tracking-wider">
              Gallery
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a2540] tracking-tight">
            Gift Cards We Trade
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600">
            We accept and pay out for all major gift card brands from around the
            world. Don&apos;t see your card? Just ask, we likely support it.
          </p>
        </motion.div>

        {/* Featured cards grid - first 10 brands */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 mb-14">
          {giftCards.slice(0, 10).map((card, i) => {
            const CardComponent = brandCardMap[card.id];
            return (
              <motion.div
                key={`featured-${card.id}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                className="cursor-pointer"
              >
                <CardComponent variant="large" />
              </motion.div>
            );
          })}
        </div>

        {/* Marquee strip showing remaining brands */}
        <div className="relative">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#0a2540]">
              And many more...
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Hover to pause. Don&apos;t see your card? Reach out, we probably
              trade it.
            </p>
          </div>

          <div className="marquee-container relative overflow-hidden">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex gap-4 animate-marquee w-max py-2">
              {marquee.map((card, i) => {
                const CardComponent = brandCardMap[card.id];
                return <CardComponent key={`marquee-${i}`} variant="small" />;
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-600 mb-5">
            Ready to trade? Get an instant rate quote on WhatsApp.
          </p>
          <WhatsAppButton
            label="Get Rate Quote"
            size="lg"
            message="Hello Jiro's Trading, which gift cards do you currently trade and what are your rates?"
          />
        </div>
      </div>
    </section>
  );
}
