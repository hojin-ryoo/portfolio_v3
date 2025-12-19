import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
          Post Not Found
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
}


