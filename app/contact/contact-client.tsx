"use client";

import TypingText from "../components/TypingText";

export default function ContactSubtitle() {
  return (
    <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
      <TypingText 
        text="I'd love to hear from you. Send me a message and I'll respond as soon as possible."
        speed={30}
        cursorColor="#ef4444"
      />
    </p>
  );
}

