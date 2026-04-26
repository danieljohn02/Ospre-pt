"use client";
import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Disable the browser's automatic scroll restoration so refreshing
    // always starts at the top of the page instead of the previous position.
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);
  return null;
}
