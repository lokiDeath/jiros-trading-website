"use client";

import { cn } from "@/lib/utils";

/**
 * SVG-based gift card component.
 * All cards now use SVG designs (no image files needed).
 * This component is kept for backwards compatibility but simply renders
 * the SVG card from brand-cards.tsx via the gallery.
 */

// This is now a no-op since we use SVG cards directly
export function hasCardImage(_brandId: string): boolean {
  return false;
}
