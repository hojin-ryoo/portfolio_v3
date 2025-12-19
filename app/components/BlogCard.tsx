import Link from "next/link";
import type { BlogPost } from "@/lib/mdx";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="p-6">
        <div className="mb-2 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <time dateTime={post.date}>{formattedDate}</time>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-50 dark:group-hover:text-zinc-300">
          {post.title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {post.description}
        </p>
        <div className="mt-4 text-sm font-medium text-zinc-600 transition-colors group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-50">
          Read more →
        </div>
      </div>
    </Link>
  );
}
