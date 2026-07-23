// Build-time fetch of OSPRE PT's live Google rating.
//
// This runs during `next build` (the site is a static export), so the value is
// baked into the deployed HTML — no runtime API call, no exposed key, no CSP change.
// It refreshes whenever the site is rebuilt/redeployed.
//
// Set these two build environment variables in Netlify (Site settings → Environment):
//   GOOGLE_PLACES_API_KEY  — a key with "Places API (New)" enabled
//   GOOGLE_PLACE_ID        — OSPRE PT's Place ID (from Google's "Place ID Finder")
//
// If either is missing or the request fails, it falls back to the last known
// values below so a build never breaks.

export type GoogleRating = { rating: number; total: number };

// Last known-good values — safe fallback if the API can't be reached at build time.
export const FALLBACK_RATING: GoogleRating = { rating: 5.0, total: 67 };

export async function getGoogleRating(): Promise<GoogleRating> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return FALLBACK_RATING;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(
        placeId
      )}?fields=rating,userRatingCount&key=${key}`,
      // force-cache keeps this a build-time (static) fetch — required for output: export.
      { cache: "force-cache" }
    );
    if (!res.ok) return FALLBACK_RATING;

    const data = (await res.json()) as {
      rating?: number;
      userRatingCount?: number;
    };
    const rating = typeof data.rating === "number" ? data.rating : null;
    const total =
      typeof data.userRatingCount === "number" ? data.userRatingCount : null;

    if (rating === null || total === null) return FALLBACK_RATING;
    return { rating, total };
  } catch {
    return FALLBACK_RATING;
  }
}
