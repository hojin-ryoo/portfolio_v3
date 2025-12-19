import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white dark:bg-black">
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
        >
          ← Back to Blog
        </Link>

        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:text-zinc-900 dark:prose-headings:text-zinc-50 prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-a:text-zinc-900 dark:prose-a:text-zinc-50 prose-strong:text-zinc-900 dark:prose-strong:text-zinc-50 prose-code:text-zinc-900 dark:prose-code:text-zinc-50 prose-pre:bg-zinc-100 dark:prose-pre:bg-zinc-900">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
