import { projects } from "@/lib/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectsSubtitle from "./projects-client";

export const metadata = {
  title: "Projects | Portfolio",
  description: "A collection of my projects and work.",
};

export default function Projects() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-[family-name:var(--font-outfit)]">
            <span className="bg-gradient-to-r from-green-500 via-white to-green-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient dark:from-green-400 dark:via-white dark:to-green-400">
              Projects
            </span>
          </h1>
          <ProjectsSubtitle />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-zinc-600 dark:text-zinc-400">
              No projects to display yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
