import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      {project.image && (
        <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <div className="flex h-full items-center justify-center text-zinc-400 dark:text-zinc-600">
            <svg
              className="h-12 w-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
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
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              GitHub →
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
