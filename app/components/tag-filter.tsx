"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

interface TagFilterProps {
  tags: string[];
  type?: "tag" | "category";
}

function TagFilterContent({ tags, type = "tag" }: TagFilterProps) {
  const pathname = usePathname();
  const basePath = type === "tag" ? "/blog/tag" : "/blog/category";
  
  // Extract active tag from pathname instead of search params
  const activeTag = pathname?.startsWith(basePath) 
    ? pathname.split('/').pop() 
    : null;

  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/blog"
        className={`px-3 py-1 rounded-full text-sm transition-colors ${
          !activeTag
            ? "bg-blue-600 text-white"
            : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
        }`}
      >
        All
      </Link>
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`${basePath}/${tag}`}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            activeTag === tag
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}

export function TagFilter(props: TagFilterProps) {
  return (
    <Suspense fallback={<div className="flex flex-wrap gap-2">Loading...</div>}>
      <TagFilterContent {...props} />
    </Suspense>
  );
}

