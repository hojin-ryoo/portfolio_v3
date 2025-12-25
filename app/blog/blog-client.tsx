"use client";

import TypingText from "../components/TypingText";
import Link from "next/link";
import type { BlogPostMetadata } from "@/types/blog";

export default function BlogSubtitle() {
  return (
    <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
      <TypingText 
        text="Thoughts, tutorials, and insights"
        speed={30}
        cursorColor="#eab308"
      />
    </p>
  );
}

interface BlogClientProps {
  posts: BlogPostMetadata[];
  tags: string[];
  categories: string[];
}

export function BlogClient({ posts, tags, categories }: BlogClientProps) {
  return (
    <div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const formattedDate = new Date(post.frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="p-6">
                <div className="mb-2 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <time dateTime={post.frontmatter.date}>{formattedDate}</time>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-50 dark:group-hover:text-zinc-300">
                  {post.frontmatter.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {post.frontmatter.description}
                </p>
                {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.frontmatter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4 text-sm font-medium text-zinc-600 transition-colors group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-50">
                  Read more →
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
