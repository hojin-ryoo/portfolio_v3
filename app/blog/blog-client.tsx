"use client";

import { useState, useMemo, useEffect } from "react";
import { PostCard } from "@/app/components/post-card";
import { Search } from "@/app/components/search";
import { TagFilter } from "@/app/components/tag-filter";
import { ThemeToggle } from "@/app/components/theme-toggle";
import Link from "next/link";
import type { BlogPostMetadata } from "@/types/blog";

const POSTS_PER_PAGE = 6;

interface BlogClientProps {
  posts: BlogPostMetadata[];
  tags: string[];
  categories: string[];
}

export function BlogClient({
  posts: initialPosts,
  tags,
  categories,
}: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    let filtered = initialPosts;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.frontmatter.title.toLowerCase().includes(query) ||
          post.frontmatter.description.toLowerCase().includes(query) ||
          post.frontmatter.tags?.some((tag) =>
            tag.toLowerCase().includes(query)
          ) ||
          post.frontmatter.categories?.some((cat) =>
            cat.toLowerCase().includes(query)
          )
      );
    }

    return filtered;
  }, [initialPosts, searchQuery]);

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-gray-100"
            >
              Portfolio & Blog
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Thoughts, tutorials, and insights on web development and more.
          </p>

          <div className="mb-6">
            <Search onSearch={setSearchQuery} />
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Filter by Tags
            </h2>
            <TagFilter tags={tags} type="tag" />
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Filter by Categories
            </h2>
            <TagFilter tags={categories} type="category" />
          </div>
        </div>

        {paginatedPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No posts found. Try adjusting your search or filters.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {paginatedPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => {
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-4 py-2 rounded-lg border transition-colors ${
                              page === currentPage
                                ? "bg-blue-600 text-white border-blue-600"
                                : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                            }`}
                          >
                            {page}
                          </button>
                        );
                      } else if (
                        page === currentPage - 2 ||
                        page === currentPage + 2
                      ) {
                        return (
                          <span
                            key={page}
                            className="px-2 text-gray-500 dark:text-gray-400"
                          >
                            ...
                          </span>
                        );
                      }
                      return null;
                    }
                  )}
                </div>

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

