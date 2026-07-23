"use client";
import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Disable the browser's automatic scroll restoration so refreshing
    // always starts at a predictable spot instead of the previous position.
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // If the URL has a hash (e.g. /services#runners-program or /#services),
    // scroll to that section instead of jumping to the top.
    if (window.location.hash) {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView();
        return;
      }
    }

    window.scrollTo(0, 0);
  }, []);
  return null;
}
