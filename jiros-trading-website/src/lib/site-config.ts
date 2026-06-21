/**
 * Site-wide configuration for Jiro's Trading and Logistics Limited.
 * Update WHATSAPP_NUMBER, email, and addresses with the real company details.
 */

export type BrandId =
  | "amazon"
  | "steam"
  | "itunes"
  | "google-play"
  | "xbox"
  | "playstation"
  | "ebay"
  | "sephora"
  | "netflix"
  | "spotify"
  | "visa"
  | "mastercard"
  | "walmart"
  | "target"
  | "best-buy"
  | "apple-store"
  | "nike"
  | "adidas"
  | "macys"
  | "nordstrom";

export type GiftCardBrand = {
  id: BrandId;
  name: string;
};

export const siteConfig = {
  brand: "JIRO'S TRADING AND LOGISTICS LIMITED",
  brandShort: "Jiro's Trading",
  tagline: "Your Trusted Global Gift Card Partner",
  description:
    "Jiro's Trading and Logistics Limited is your trusted global gift card partner. We offer secure transactions, instant processing, and the most competitive rates for gift cards worldwide.",

  // Real company WhatsApp number and email
  whatsappNumber: "2347044213381",
  whatsappDisplay: "+234 704 421 3381",
  email: "wilson116688@outlook.com",
  emailDisplay: "wilson116688@outlook.com",

  // Working hours
  hours: "Mon - Sat: 8:00 AM - 10:00 PM (GMT)",

  // Social links (optional)
  social: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const trustBadges = [
  {
    icon: "shield-check",
    title: "Secure Transactions",
    description:
      "Bank-grade encryption and verified payment channels keep every trade protected from start to finish.",
  },
  {
    icon: "zap",
    title: "Instant Processing",
    description:
      "Most gift card trades are confirmed and paid out within minutes, no long waiting, no delays.",
  },
  {
    icon: "globe",
    title: "Global Service",
    description:
      "We trade with clients across Africa, Europe, North America, Asia and beyond, wherever you are.",
  },
  {
    icon: "layers",
    title: "All Card Types",
    description:
      "Amazon, Steam, iTunes, Google Play, Xbox, PlayStation, Sephora, Visa and many more, we accept them all.",
  },
] as const;

export const giftCards: GiftCardBrand[] = [
  { id: "amazon", name: "Amazon" },
  { id: "steam", name: "Steam" },
  { id: "itunes", name: "iTunes" },
  { id: "google-play", name: "Google Play" },
  { id: "xbox", name: "Xbox" },
  { id: "playstation", name: "PlayStation" },
  { id: "ebay", name: "eBay" },
  { id: "sephora", name: "Sephora" },
  { id: "netflix", name: "Netflix" },
  { id: "spotify", name: "Spotify" },
  { id: "visa", name: "Visa" },
  { id: "mastercard", name: "Mastercard" },
  { id: "walmart", name: "Walmart" },
  { id: "target", name: "Target" },
  { id: "best-buy", name: "Best Buy" },
  { id: "apple-store", name: "Apple Store" },
  { id: "nike", name: "Nike" },
  { id: "adidas", name: "Adidas" },
  { id: "macys", name: "Macy's" },
  { id: "nordstrom", name: "Nordstrom" },
];
