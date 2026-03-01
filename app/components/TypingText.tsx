"use client";

import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
  cursorColor?: string;
}

export default function TypingText({
  text,
  speed = 30,
  className = "",
  delay = 0,
  cursorColor = "#f97316",
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Start after initial delay
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, hasStarted]);

  return (
    <span className={`${className} relative inline-block`}>
      {/* Invisible text to reserve space and prevent layout shift */}
      <span className="invisible" aria-hidden="true">
        {text}
      </span>
      {/* Visible typing text positioned absolutely */}
      <span className="absolute top-0 left-0 right-0">
        {displayedText}
        {currentIndex < text.length && (
          <span 
            className="animate-pulse inline-block w-1 h-5 ml-0.5 align-middle"
            style={{ backgroundColor: cursorColor }}
          />
        )}
      </span>
    </span>
  );
}

