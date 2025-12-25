import { getAllPosts } from "@/lib/mdx";
import BlogCard from "../components/BlogCard";

export const metadata = {
  title: "Blog | Portfolio",
  description: "Thoughts, tutorials, and insights on web development and technology.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-[family-name:var(--font-outfit)]">
            <span className="bg-gradient-to-r from-yellow-500 via-white to-yellow-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient dark:from-yellow-400 dark:via-white dark:to-yellow-400">
              Blog
            </span>
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            Thoughts, tutorials, and insights
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-zinc-600 dark:text-zinc-400">
              No blog posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
