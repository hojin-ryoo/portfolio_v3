"use client";

import { useEffect, useState } from "react";

interface ScrollArrowsProps {
  sections: { id: string }[];
}

function ChevronUp({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}

export default function ScrollArrows({ sections }: ScrollArrowsProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section, index) => {
      const element = document.getElementById(section.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setCurrentIndex(index);
            }
          });
        },
        {
          threshold: [0.5],
          rootMargin: "-10% 0px -10% 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sections]);

  const scrollToSection = (index: number) => {
    if (index < 0 || index >= sections.length) return;
    const element = document.getElementById(sections[index].id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const canScrollUp = currentIndex > 0;
  const canScrollDown = currentIndex < sections.length - 1;

  return (
    <div className="hidden md:fixed md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:flex md:gap-4 md:z-50">
      <button
        onClick={() => scrollToSection(currentIndex - 1)}
        disabled={!canScrollUp}
        className={`
          p-3 rounded-full transition-all duration-300 shadow-lg
          ${
            canScrollUp
              ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 cursor-pointer"
              : "bg-zinc-200 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 cursor-not-allowed"
          }
        `}
        aria-label="Scroll to previous section"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
      <button
        onClick={() => scrollToSection(currentIndex + 1)}
        disabled={!canScrollDown}
        className={`
          p-3 rounded-full transition-all duration-300 shadow-lg
          ${
            canScrollDown
              ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 cursor-pointer"
              : "bg-zinc-200 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 cursor-not-allowed"
          }
        `}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </div>
  );
}

