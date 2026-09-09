import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Scrolls to the section matching the URL hash on navigation, or to the top otherwise. */
export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);
}
