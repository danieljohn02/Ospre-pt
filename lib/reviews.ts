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
// values below so a build never breaks. Diagnostics are logged to the build output.

export type GoogleRating = { rating: number; total: number };

// Last known-good values — safe fallback if the API can't be reached at build time.
export const FALLBACK_RATING: GoogleRating = { rating: 5.0, total: 67 };

export async function getGoogleRating(): Promise<GoogleRating> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!key || !placeId) {
    console.warn(
      "[reviews] Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID — using fallback."
    );
    return FALLBACK_RATING;
  }

  try {
    // Places API (New) — key and field mask MUST be sent as headers.
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "rating,userRatingCount",
        },
        cache: "force-cache", // build-time (static) fetch — required for output: export
      }
    );

    if (!res.ok) {
      const body = await res.text();
      console.warn(
        `[reviews] Places API returned ${res.status}: ${body.slice(0, 300)} — using fallback.`
      );
      return FALLBACK_RATING;
    }

    const data = (await res.json()) as {
      rating?: number;
      userRatingCount?: number;
    };

    if (typeof data.rating !== "number" || typeof data.userRatingCount !== "number") {
      console.warn(
        `[reviews] Unexpected response ${JSON.stringify(data)} — using fallback.`
      );
      return FALLBACK_RATING;
    }

    console.log(
      `[reviews] Live Google rating: ${data.rating} (${data.userRatingCount} reviews)`
    );
    return { rating: data.rating, total: data.userRatingCount };
  } catch (e) {
    console.warn(`[reviews] Fetch failed: ${String(e)} — using fallback.`);
    return FALLBACK_RATING;
  }
}
