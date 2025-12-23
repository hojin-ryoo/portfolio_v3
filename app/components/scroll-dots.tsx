"use client";

import { useEffect, useState } from "react";

interface ScrollDotsProps {
  sections: { id: string; label: string }[];
}

export default function ScrollDots({ sections }: ScrollDotsProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setActiveSection(section.id);
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="hidden md:fixed md:right-8 md:top-1/2 md:-translate-y-1/2 md:flex md:flex-col md:gap-4 md:z-50">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex items-center"
          aria-label={`Navigate to ${section.label}`}
        >
          <span
            className={`
              w-3 h-3 rounded-full border-2 transition-all duration-300
              ${
                activeSection === section.id
                  ? "bg-orange-500 border-orange-500 scale-125"
                  : "bg-transparent border-zinc-400 dark:border-zinc-600 hover:border-orange-500 dark:hover:border-orange-400"
              }
            `}
          />
          <span className="absolute right-full mr-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-medium text-zinc-900 dark:text-zinc-50 bg-white dark:bg-zinc-800 px-3 py-1 rounded-md shadow-lg">
            {section.label}
          </span>
        </button>
      ))}
    </div>
  );
}

