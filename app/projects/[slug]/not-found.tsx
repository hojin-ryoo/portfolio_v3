import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Project Not Found
        </h1>
        <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}

