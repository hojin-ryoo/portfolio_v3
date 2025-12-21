import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

export async function generateStaticParams() {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/blog/[slug]/page.tsx:7',message:'generateStaticParams entry',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
  // #endregion
  const posts = getAllPosts();
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/blog/[slug]/page.tsx:9',message:'posts retrieved',data:{postCount:posts.length,slugs:posts.map(p=>p.slug)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
  // #endregion
  const params = posts.map((post) => ({
    slug: post.slug,
  }));
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/blog/[slug]/page.tsx:12',message:'generateStaticParams exit',data:{paramCount:params.length,params},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
  // #endregion
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/blog/[slug]/page.tsx:14',message:'generateMetadata entry',data:{paramsIsPromise:params instanceof Promise},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
  // #endregion
  const resolvedParams = params instanceof Promise ? await params : params;
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/blog/[slug]/page.tsx:20',message:'params resolved',data:{slug:resolvedParams.slug},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
  // #endregion
  const post = getPostBySlug(resolvedParams.slug);

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

export default async function BlogPost({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/blog/[slug]/page.tsx:33',message:'BlogPost entry',data:{paramsIsPromise:params instanceof Promise},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
  // #endregion
  const resolvedParams = params instanceof Promise ? await params : params;
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/blog/[slug]/page.tsx:36',message:'params resolved in BlogPost',data:{slug:resolvedParams.slug},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
  // #endregion
  const post = getPostBySlug(resolvedParams.slug);
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/blog/[slug]/page.tsx:39',message:'post retrieved',data:{postFound:!!post,slug:resolvedParams.slug},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion

  if (!post) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/blog/[slug]/page.tsx:37',message:'post not found, calling notFound()',data:{slug:resolvedParams.slug},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    notFound();
  }

  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/blog/[slug]/page.tsx:42',message:'formatting date',data:{postDate:post.date,dateIsValid:!!post.date},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
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
