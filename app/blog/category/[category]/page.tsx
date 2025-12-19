import { notFound } from "next/navigation";
import { getAllPosts, getPostsByCategory, getAllCategories } from "@/lib/mdx";
import { BlogClient } from "@/app/blog/blog-client";
import { ThemeToggle } from "@/app/components/theme-toggle";
import Link from "next/link";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const categories = getAllCategories(posts);
  return categories.map((category) => ({
    category: category,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const allPosts = await getAllPosts();
  const filteredPosts = getPostsByCategory(allPosts, category);
  const allCategories = getAllCategories(allPosts);
  const { getAllTags } = await import("@/lib/mdx");
  const tags = getAllTags(allPosts);

  if (filteredPosts.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/blog"
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
            Category: <span className="text-purple-600 dark:text-purple-400">{category}</span>
          </h1>
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to all posts
          </Link>
        </div>

        <BlogClient
          posts={filteredPosts}
          tags={tags}
          categories={allCategories}
        />
      </main>
    </div>
  );
}

