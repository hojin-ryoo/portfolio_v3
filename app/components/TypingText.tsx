"use client";

import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
}

export default function TypingText({
  text,
  speed = 30,
  className = "",
  delay = 0,
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
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse inline-block w-1 h-5 bg-orange-500 ml-0.5 align-middle" />
      )}
    </span>
  );
}

