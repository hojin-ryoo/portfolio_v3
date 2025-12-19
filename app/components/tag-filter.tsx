"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface TagFilterProps {
  tags: string[];
  type?: "tag" | "category";
}

export function TagFilter({ tags, type = "tag" }: TagFilterProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeTag = searchParams.get(type);

  const basePath = type === "tag" ? "/blog/tag" : "/blog/category";

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

