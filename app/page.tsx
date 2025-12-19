import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { projects } from "@/lib/projects";
import ProjectCard from "./components/ProjectCard";
import BlogCard from "./components/BlogCard";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
            Welcome to My Portfolio
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I'm a developer passionate about building modern web applications
            and sharing knowledge through writing. Explore my projects and read
            my latest thoughts.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/projects"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Featured Projects
            </h2>
            <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
              A selection of my recent work
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              View all projects <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      )}

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Latest Blog Posts
            </h2>
            <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
              Thoughts, tutorials, and insights
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Read all posts <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
