import Link from "next/link";
import type { BlogPostMetadata } from "@/types/blog";

interface PostCardProps {
  post: BlogPostMetadata;
}

export function PostCard({ post }: PostCardProps) {
  const { slug, frontmatter } = post;
  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700">
      <Link href={`/blog/${slug}`} className="block">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {frontmatter.title}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          {formattedDate}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {frontmatter.description}
        </p>
        {(frontmatter.tags || frontmatter.categories) && (
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags?.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {tag}
              </Link>
            ))}
            {frontmatter.categories?.map((category) => (
              <Link
                key={category}
                href={`/blog/category/${category}`}
                className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {category}
              </Link>
            ))}
          </div>
        )}
      </Link>
    </article>
  );
}

