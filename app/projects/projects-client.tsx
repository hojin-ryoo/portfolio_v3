"use client";

import TypingText from "../components/TypingText";

export default function ProjectsSubtitle() {
  return (
    <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
      <TypingText 
        text="A collection of my work and side projects"
        speed={30}
        cursorColor="#22c55e"
      />
    </p>
  );
}

