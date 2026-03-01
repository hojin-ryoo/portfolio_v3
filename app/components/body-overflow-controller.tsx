"use client";

import { useEffect } from "react";

export default function BodyOverflowController() {
  useEffect(() => {
    // Hide body overflow on desktop to prevent double scrollbar
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    
    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    handleResize(mediaQuery);
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      document.body.style.overflow = "";
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return null;
}

