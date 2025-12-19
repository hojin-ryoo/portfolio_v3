import { projects } from "@/lib/projects";
import ProjectCard from "../components/ProjectCard";

export const metadata = {
  title: "Projects | Portfolio",
  description: "A collection of my projects and work.",
};

export default function Projects() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Projects
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            A collection of my work and side projects
          </p>
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
