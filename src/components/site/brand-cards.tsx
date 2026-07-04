"use client";

import { cn } from "@/lib/utils";

/**
 * Realistic SVG gift card components for ALL 20 brands.
 * Each card is carefully designed to match the actual brand's gift card design:
 *  - Proper brand colors and gradients
 *  - Accurate logo recreation (SVG paths)
 *  - Realistic layout (logo, brand name, chip, "GIFT CARD" text)
 *  - Professional gift card styling
 */

export type BrandCardProps = {
  variant?: "large" | "small";
  className?: string;
};

/* ============================================================================
 * Shared helper - card chip
 * ========================================================================== */
function CardChip({ color = "#ffd700" }: { color?: string }) {
  return (
    <div
      className="rounded-md border"
      style={{
        background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
        borderColor: `${color}80`,
      }}
    >
      <div className="w-full h-full opacity-50" />
    </div>
  );
}

/* ============================================================================
 * AMAZON - Dark navy with orange Amazon logo and smile arrow
 * ========================================================================== */
export function AmazonCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #232F3E 0%, #131A22 100%)"><AmazonLogo /></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #232F3E 0%, #131A22 100%)">
      <CardHeader />
      <AmazonLogo big />
      <CardFooter brand="Amazon" dark />
    </LargeCardWrapper>
  );
}

function AmazonLogo({ big = false }: { big?: boolean }) {
  return (
    <svg viewBox="0 0 120 40" className={big ? "h-8" : "h-5"} fill="none">
      <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" fill="#FF9900">amazon</text>
      <path d="M 5 34 Q 60 44 115 34" stroke="#FF9900" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 110 31 L 118 35 L 112 39" stroke="#FF9900" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ============================================================================
 * STEAM - Dark blue/navy with Steam logo
 * ========================================================================== */
export function SteamCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #1B2838 0%, #0E1B2C 100%)"><SteamLogo /></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #1B2838 0%, #0E1B2C 100%)">
      <CardHeader dark />
      <SteamLogo big />
      <CardFooter brand="Steam" dark />
    </LargeCardWrapper>
  );
}

function SteamLogo({ big = false }: { big?: boolean }) {
  return (
    <svg viewBox="0 0 120 40" className={big ? "h-10" : "h-6"}>
      <circle cx="18" cy="20" r="14" fill="#FFFFFF" />
      <circle cx="18" cy="20" r="9" fill="#1B2838" />
      <circle cx="18" cy="20" r="5" fill="#FFFFFF" />
      <circle cx="55" cy="22" r="6" fill="#FFFFFF" />
      <circle cx="55" cy="22" r="3" fill="#1B2838" />
      <text x="70" y="26" fontFamily="Arial Black, sans-serif" fontSize="16" fontWeight="900" fill="#FFFFFF" letterSpacing="1">STEAM</text>
    </svg>
  );
}

/* ============================================================================
 * iTUNES / APPLE - Pink to orange gradient with Apple logo
 * ========================================================================== */
export function ITunesCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #FB5BC5 0%, #FF8FB1 50%, #FFB347 100%)"><AppleLogo /></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #FB5BC5 0%, #FF8FB1 50%, #FFB347 100%)">
      <CardHeader />
      <div className="flex items-center gap-2">
        <AppleLogo big />
        <span className="text-xl font-bold text-white">iTunes</span>
      </div>
      <CardFooter brand="iTunes" />
    </LargeCardWrapper>
  );
}

function AppleLogo({ big = false }: { big?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={big ? "h-8 w-8" : "h-5 w-5"} fill="#FFFFFF">
      <path d="M17.05 12.04c-.03-2.6 2.13-3.85 2.22-3.91-1.21-1.77-3.1-2.01-3.77-2.04-1.6-.16-3.13.94-3.94.94-.82 0-2.06-.92-3.39-.89-1.74.03-3.36 1.02-4.26 2.58-1.82 3.15-.46 7.81 1.31 10.37.87 1.25 1.91 2.66 3.27 2.61 1.32-.05 1.81-.85 3.4-.85 1.59 0 2.04.85 3.43.83 1.42-.03 2.31-1.28 3.18-2.54 1-1.46 1.42-2.88 1.45-2.95-.03-.01-2.78-1.07-2.81-4.25-.03-2.66 2.17-3.93 2.27-3.99-1.25-1.83-3.18-2.04-3.86-2.07m-2.59-1.57c.72-.87 1.21-2.08 1.08-3.29-1.04.04-2.31.69-3.06 1.56-.67.77-1.26 2-1.1 3.19 1.16.09 2.35-.59 3.08-1.46" />
    </svg>
  );
}

/* ============================================================================
 * GOOGLE PLAY - White with colorful triangle logo
 * ========================================================================== */
export function GooglePlayCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%)"><GooglePlayLogo /></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%)">
      <CardHeader dark />
      <div className="flex items-center gap-2">
        <GooglePlayLogo big />
        <span className="text-xl font-bold text-slate-800">Google Play</span>
      </div>
      <CardFooter brand="Google Play" dark />
    </LargeCardWrapper>
  );
}

function GooglePlayLogo({ big = false }: { big?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={big ? "h-8 w-8" : "h-5 w-5"}>
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.61-.92z" fill="#00A1FF" />
      <path d="M14.524 12.732l3.474-3.472a1 1 0 011.076-.054l-4.414 6.15-3.632-3.632 3.496 1.008z" fill="#00CF5F" transform="translate(-0.5 -0.5) scale(1.02 1.02)" />
      <path d="M14.524 11.268l3.474 3.472a1 1 0 01-1.076.054l-4.414-6.15 3.632 3.632 3.496-1.008z" fill="#FFB700" transform="translate(-0.5 0.5) scale(1.02 1.02)" />
      <path d="M3.609 1.814a.998.998 0 01.594-.085l11.321 6.479-3.732 3.732L3.609 1.814z" fill="#FF3D4D" />
      <path d="M3.609 22.186l9.183-10.186 2.732 2.732L4.203 22.27a.998.998 0 01-.594-.085z" fill="#00A1FF" />
    </svg>
  );
}

/* ============================================================================
 * XBOX - Green with white Xbox logo
 * ========================================================================== */
export function XboxCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #107C10 0%, #0B5E0B 100%)"><XboxLogo /></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #107C10 0%, #0B5E0B 100%)">
      <CardHeader />
      <div className="flex items-center gap-2">
        <XboxLogo big />
        <span className="text-2xl font-bold text-white tracking-tight">XBOX</span>
      </div>
      <CardFooter brand="Xbox" />
    </LargeCardWrapper>
  );
}

function XboxLogo({ big = false }: { big?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={big ? "h-8 w-8" : "h-5 w-5"} fill="#FFFFFF">
      <path d="M4.102 21.033C6.211 22.881 8.977 24 12 24c3.026 0 5.789-1.119 7.902-2.967 1.246-1.092-3.647-5.235-7.902-7.922-4.255 2.687-9.148 6.83-7.898 7.922zm11.16-19.55C17.962 2.535 20.235 4.59 21.633 7.21c.838 1.575-3.188 6.252-5.354 8.064-2.318-1.885-4.66-4.854-4.66-4.854s2.36-2.945 4.701-4.854c-2.328-1.91-5.184-3.456-7.18-3.456-.657 0-1.16.146-1.51.41C9.295.913 10.624 0 12 0c1.396 0 2.66.387 3.262 1.483z" />
    </svg>
  );
}

/* ============================================================================
 * PLAYSTATION - Blue with PS logo
 * ========================================================================== */
export function PlayStationCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #003791 0%, #001F5C 100%)"><PlayStationLogo /></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #003791 0%, #001F5C 100%)">
      <CardHeader />
      <div className="flex items-center gap-2">
        <PlayStationLogo big />
        <span className="text-xl font-bold text-white">PlayStation</span>
      </div>
      <CardFooter brand="PlayStation" />
    </LargeCardWrapper>
  );
}

function PlayStationLogo({ big = false }: { big?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={big ? "h-9 w-9" : "h-6 w-6"} fill="#FFFFFF">
      <path d="M9.483 3.16v15.184l3.632 1.14V8.395c0-.86.386-1.444 1.003-1.24.723.2.86 1.16.86 2.02v4.07c2.765 1.323 4.936.026 4.936-3.62 0-3.738-1.323-5.296-5.193-6.42-1.526-.452-4.07-1.04-7.238-1.04zM8.18 19.79l-1.418-.45V3.16c1.42.42 1.418.45 1.418.45v16.18zm5.935-2.295c-.83-.083-1.74.526-2.83.96v1.27c1.42-.41 2.85-.55 3.92-.36.5.08.83.65.13 1.05l-1.22.45v1.27c1.42-.41 2.85-.55 3.92-.36.5.08.83.65.13 1.05l3.18-1.18v-3.18z" />
    </svg>
  );
}

/* ============================================================================
 * EBAY - White with colorful eBay logo
 * ========================================================================== */
export function EbayCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%)"><EbayLogo /></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%)">
      <CardHeader dark />
      <EbayLogo big />
      <CardFooter brand="eBay" dark />
    </LargeCardWrapper>
  );
}

function EbayLogo({ big = false }: { big?: boolean }) {
  return (
    <svg viewBox="0 0 100 30" className={big ? "h-10" : "h-6"}>
      <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="900" fontStyle="italic" fill="#E53238">e</text>
      <text x="20" y="24" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="900" fontStyle="italic" fill="#0064D2">b</text>
      <text x="44" y="24" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="900" fontStyle="italic" fill="#F5AF02">a</text>
      <text x="68" y="24" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="900" fontStyle="italic" fill="#86B817">y</text>
    </svg>
  );
}

/* ============================================================================
 * SEPHORA - Black with white Sephora text
 * ========================================================================== */
export function SephoraCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #000000 0%, #1a1a1a 100%)"><span className="text-white text-xs font-bold tracking-[0.15em]">SEPHORA</span></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #000000 0%, #1a1a1a 100%)">
      <CardHeader />
      <div className="text-2xl font-bold text-white tracking-[0.15em]">SEPHORA</div>
      <CardFooter brand="Sephora" />
    </LargeCardWrapper>
  );
}

/* ============================================================================
 * NETFLIX - Black with red Netflix logo
 * ========================================================================== */
export function NetflixCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #000000 0%, #1a0000 100%)"><NetflixLogo /></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #000000 0%, #1a0000 100%)">
      <CardHeader />
      <NetflixLogo big />
      <CardFooter brand="Netflix" />
    </LargeCardWrapper>
  );
}

function NetflixLogo({ big = false }: { big?: boolean }) {
  return (
    <svg viewBox="0 0 100 30" className={big ? "h-10" : "h-6"}>
      <text x="0" y="26" fontFamily="Arial Black, sans-serif" fontSize="28" fontWeight="900" fill="#E50914" fontStyle="italic" letterSpacing="-1">NETFLIX</text>
    </svg>
  );
}

/* ============================================================================
 * SPOTIFY - Black with green Spotify logo
 * ========================================================================== */
export function SpotifyCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #000000 0%, #1a1a1a 100%)"><SpotifyLogo /></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #000000 0%, #1a1a1a 100%)">
      <CardHeader />
      <div className="flex items-center gap-2">
        <SpotifyLogo big />
        <span className="text-2xl font-bold text-white">Spotify</span>
      </div>
      <CardFooter brand="Spotify" />
    </LargeCardWrapper>
  );
}

function SpotifyLogo({ big = false }: { big?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={big ? "h-10 w-10" : "h-6 w-6"} fill="#1DB954">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.959-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.361 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

/* ============================================================================
 * VISA - Navy blue with white VISA text
 * ========================================================================== */
export function VisaCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #1A1F71 0%, #0F1450 100%)"><VisaLogo /></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #1A1F71 0%, #0F1450 100%)">
      <CardHeader />
      <VisaLogo big />
      <CardFooter brand="Visa" />
    </LargeCardWrapper>
  );
}

function VisaLogo({ big = false }: { big?: boolean }) {
  return (
    <svg viewBox="0 0 80 30" className={big ? "h-8" : "h-5"}>
      <text x="0" y="26" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="900" fontStyle="italic" fill="#FFFFFF" letterSpacing="-1">VISA</text>
    </svg>
  );
}

/* ============================================================================
 * MASTERCARD - Dark with overlapping red/orange circles
 * ========================================================================== */
export function MastercardCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #1a1a1a 0%, #000000 100%)"><MastercardLogo /></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #1a1a1a 0%, #000000 100%)">
      <CardHeader />
      <MastercardLogo big />
      <CardFooter brand="Mastercard" />
    </LargeCardWrapper>
  );
}

function MastercardLogo({ big = false }: { big?: boolean }) {
  return (
    <svg viewBox="0 0 48 30" className={big ? "h-10" : "h-6"}>
      <circle cx="18" cy="15" r="12" fill="#EB001B" />
      <circle cx="30" cy="15" r="12" fill="#F79E1B" />
      <path d="M24 5.5a12 12 0 0 0 0 19 12 12 0 0 0 0-19z" fill="#FF5F00" />
    </svg>
  );
}

/* ============================================================================
 * WALMART - Blue with yellow Walmart spark logo
 * ========================================================================== */
export function WalmartCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #0071CE 0%, #005EB8 100%)"><WalmartLogo /></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #0071CE 0%, #005EB8 100%)">
      <CardHeader />
      <div className="flex items-center gap-2">
        <WalmartLogo big />
        <span className="text-2xl font-bold text-white">Walmart</span>
      </div>
      <CardFooter brand="Walmart" />
    </LargeCardWrapper>
  );
}

function WalmartLogo({ big = false }: { big?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={big ? "h-10 w-10" : "h-6 w-6"} fill="#FFC220">
      <path d="M12 2c.46 0 .83.37.83.83v6.34a.83.83 0 0 1-1.66 0V2.83c0-.46.37-.83.83-.83zM5.46 5.46c.32-.32.84-.32 1.17 0l4.49 4.49a.83.83 0 0 1-1.17 1.17L5.46 6.63a.83.83 0 0 1 0-1.17zm13.08 0c.32.32.32.84 0 1.17l-4.49 4.49a.83.83 0 0 1-1.17-1.17l4.49-4.49c.32-.32.84-.32 1.17 0zM2 12c0-.46.37-.83.83-.83h6.34a.83.83 0 0 1 0 1.66H2.83A.83.83 0 0 1 2 12zm12 0c0-.46.37-.83.83-.83h6.34a.83.83 0 0 1 0 1.66h-6.34A.83.83 0 0 1 14 12zM5.46 18.54a.83.83 0 0 1 0-1.17l4.49-4.49a.83.83 0 0 1 1.17 1.17l-4.49 4.49a.83.83 0 0 1-1.17 0zm13.08 0a.83.83 0 0 1-1.17 0l-4.49-4.49a.83.83 0 0 1 1.17-1.17l4.49 4.49c.32.32.32.84 0 1.17zM12 14.5c.46 0 .83.37.83.83v6.34a.83.83 0 0 1-1.66 0v-6.34c0-.46.37-.83.83-.83z" />
    </svg>
  );
}

/* ============================================================================
 * TARGET - Red with bullseye logo
 * ========================================================================== */
export function TargetCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #CC0000 0%, #A60000 100%)"><TargetLogo /></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #CC0000 0%, #A60000 100%)">
      <CardHeader />
      <div className="flex items-center gap-2">
        <TargetLogo big />
        <span className="text-2xl font-light italic text-white">target</span>
      </div>
      <CardFooter brand="Target" />
    </LargeCardWrapper>
  );
}

function TargetLogo({ big = false }: { big?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={big ? "h-10 w-10" : "h-6 w-6"}>
      <circle cx="12" cy="12" r="10" fill="#CC0000" />
      <circle cx="12" cy="12" r="7" fill="#FFFFFF" />
      <circle cx="12" cy="12" r="4.5" fill="#CC0000" />
      <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
    </svg>
  );
}

/* ============================================================================
 * BEST BUY - Blue with yellow Best Buy tag
 * ========================================================================== */
export function BestBuyCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #0046BE 0%, #0033A0 100%)"><span className="px-2 py-0.5 bg-yellow-400 text-[#0046BE] text-[10px] font-extrabold rounded">BEST BUY</span></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #0046BE 0%, #0033A0 100%)">
      <CardHeader />
      <div className="inline-block px-4 py-2 bg-yellow-400 text-[#0046BE] text-lg font-extrabold rounded">
        BEST BUY
      </div>
      <CardFooter brand="Best Buy" />
    </LargeCardWrapper>
  );
}

/* ============================================================================
 * APPLE STORE - Light gray with Apple logo
 * ========================================================================== */
export function AppleStoreCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #F5F5F7 0%, #E8E8ED 100%)"><AppleLogo /></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #F5F5F7 0%, #E8E8ED 100%)">
      <CardHeader dark />
      <div className="flex items-center gap-2">
        <AppleLogo big />
        <span className="text-xl font-semibold text-[#1D1D1F]">App Store</span>
      </div>
      <CardFooter brand="App Store & iTunes" dark />
    </LargeCardWrapper>
  );
}

/* ============================================================================
 * NIKE - Black with white Nike swoosh
 * ========================================================================== */
export function NikeCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #111111 0%, #000000 100%)"><NikeLogo /></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #111111 0%, #000000 100%)">
      <CardHeader />
      <NikeLogo big />
      <div className="text-xl font-extrabold tracking-tight text-white">NIKE</div>
      <CardFooter brand="Nike" />
    </LargeCardWrapper>
  );
}

function NikeLogo({ big = false }: { big?: boolean }) {
  return (
    <svg viewBox="0 0 60 24" className={big ? "h-8" : "h-5"} fill="#FFFFFF">
      <path d="M55.2 4.7c-1.2 1.8-3.4 4.6-7.8 8.4-3.6 3.1-7.5 5.6-11.5 6.9-3.9 1.3-7.5 1.5-10.5.6-2.9-.9-5-2.7-6.2-5.2-1.2-2.4-1.6-5.3-1.2-8.4.4-3.1 1.4-6.1 3-8.9-1.6 1.7-3 3.6-4.2 5.7-1.2 2.1-2 4.2-2.5 6.3-.4 2.1-.5 4.1-.1 6 .4 1.9 1.2 3.6 2.5 5 1.3 1.4 3 2.4 5.1 3 2.1.6 4.5.7 7.2.2 2.7-.5 5.5-1.5 8.4-3.1 2.9-1.6 5.6-3.6 8.1-6 2.5-2.4 4.4-4.8 5.7-7.2.5-1 .8-1.7.9-2.2l-1.9 1.2z" />
    </svg>
  );
}

/* ============================================================================
 * ADIDAS - Black with white three stripes
 * ========================================================================== */
export function AdidasCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #000000 0%, #1a1a1a 100%)"><AdidasLogo /></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #000000 0%, #1a1a1a 100%)">
      <CardHeader />
      <AdidasLogo big />
      <div className="text-xl font-bold lowercase tracking-tight text-white">adidas</div>
      <CardFooter brand="Adidas" />
    </LargeCardWrapper>
  );
}

function AdidasLogo({ big = false }: { big?: boolean }) {
  return (
    <svg viewBox="0 0 60 40" className={big ? "h-10" : "h-6"}>
      <path d="M10 30 L25 5 L30 8 L17 32 Z" fill="#FFFFFF" />
      <path d="M22 30 L37 5 L42 8 L29 32 Z" fill="#FFFFFF" />
      <path d="M34 30 L49 5 L54 8 L41 32 Z" fill="#FFFFFF" />
    </svg>
  );
}

/* ============================================================================
 * MACY'S - Red with white star
 * ========================================================================== */
export function MacysCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #E21A2C 0%, #B8151F 100%)"><span className="text-white text-[10px] font-bold italic">Macy&apos;s</span><span className="text-yellow-300 text-sm">★</span></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #E21A2C 0%, #B8151F 100%)">
      <CardHeader />
      <div className="text-2xl font-bold italic text-white">Macy&apos;s</div>
      <div className="text-yellow-300 text-2xl mt-1">★ ★ ★</div>
      <CardFooter brand="Macy's" />
    </LargeCardWrapper>
  );
}

/* ============================================================================
 * NORDSTROM - Black with white Nordstrom text
 * ========================================================================== */
export function NordstromCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") return <SmallCardWrapper className={className} bg="linear-gradient(135deg, #000000 0%, #1a1a1a 100%)"><span className="text-white text-[10px] font-serif italic">Nordstrom</span></SmallCardWrapper>;
  return (
    <LargeCardWrapper className={className} bg="linear-gradient(135deg, #000000 0%, #1a1a1a 100%)">
      <CardHeader />
      <div className="text-2xl font-serif italic text-white">Nordstrom</div>
      <CardFooter brand="Nordstrom" />
    </LargeCardWrapper>
  );
}

/* ============================================================================
 * SHARED WRAPPERS
 * ========================================================================== */

function LargeCardWrapper({ children, className, bg }: { children: React.ReactNode; className?: string; bg: string }) {
  return (
    <div
      className={cn(
        "relative h-48 md:h-52 rounded-2xl overflow-hidden shadow-lg border border-slate-200 group p-5 flex flex-col justify-between",
        className
      )}
      style={{ background: bg }}
    >
      {children}
    </div>
  );
}

function SmallCardWrapper({ children, className, bg }: { children: React.ReactNode; className?: string; bg: string }) {
  return (
    <div
      className={cn(
        "relative w-40 md:w-44 h-24 md:h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-slate-200 p-3 flex items-center justify-center",
        className
      )}
      style={{ background: bg }}
    >
      {children}
    </div>
  );
}

function CardHeader({ dark = false }: { dark?: boolean }) {
  return (
    <div className={cn("text-[10px] uppercase tracking-[0.2em] font-semibold", dark ? "opacity-60 text-slate-600" : "opacity-70 text-white")}>
      Gift Card
    </div>
  );
}

function CardFooter({ brand, dark = false }: { brand: string; dark?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className="h-5 w-7 rounded-md bg-yellow-400/50 border border-white/20" />
      <div className={cn("text-[10px] font-semibold", dark ? "opacity-60 text-slate-600" : "opacity-70 text-white")}>
        Jiro&apos;s Trading
      </div>
    </div>
  );
}
