import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const formattedDate = project.timestamp
    ? new Date(project.timestamp).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="bg-white dark:bg-black">
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
        >
          ← Back to Projects
        </Link>

        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {project.title}
          </h1>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            {formattedDate && <time dateTime={project.timestamp}>{formattedDate}</time>}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                GitHub →
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                Live Demo →
              </a>
            )}
          </div>
        </header>

        {project.content && (
          <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:text-zinc-900 dark:prose-headings:text-zinc-50 prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-a:text-zinc-900 dark:prose-a:text-zinc-50 prose-strong:text-zinc-900 dark:prose-strong:text-zinc-50 prose-code:text-zinc-900 dark:prose-code:text-zinc-50 prose-pre:bg-zinc-100 dark:prose-pre:bg-zinc-900">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {project.content}
            </ReactMarkdown>
          </div>
        )}
      </article>
    </div>
  );
}

