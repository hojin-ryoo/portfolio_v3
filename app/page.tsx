import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { projects } from "@/lib/projects";
import ProjectCard from "./components/ProjectCard";
import BlogCard from "./components/BlogCard";
import TypingText from "./components/TypingText";
import ScrollDots from "./components/scroll-dots";
import ScrollArrows from "./components/scroll-arrows";
import BodyOverflowController from "./components/body-overflow-controller";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const recentPosts = getAllPosts().slice(0, 3);

  const sections = [
    { id: "welcome", label: "Welcome" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
  ];

  return (
    <>
      <BodyOverflowController />
      <div className="bg-white dark:bg-black md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory md:scroll-smooth scroll-container">
      {/* Welcome Section */}
      <section 
        id="welcome"
        className="min-h-screen md:h-screen md:snap-start flex items-center justify-center px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl w-full text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-[family-name:var(--font-outfit)]">
            <span className="bg-gradient-to-r from-orange-500 via-white to-orange-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient dark:from-orange-400 dark:via-white dark:to-orange-400">
              Welcome!
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <TypingText
              text="I'm an engineer passionate about building AI solutions. Explore my projects and read my latest updates."
              speed={20}
              delay={500}
            />
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

      {/* Projects Section */}
      {featuredProjects.length > 0 && (
        <section 
          id="projects"
          className="min-h-screen md:h-screen md:snap-start flex items-center px-4 py-16 sm:px-6 lg:px-8 md:overflow-y-auto"
        >
          <div className="mx-auto max-w-7xl w-full">
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
          </div>
        </section>
      )}

      {/* Blog Section */}
      {recentPosts.length > 0 && (
        <section 
          id="blog"
          className="min-h-screen md:h-screen md:snap-start flex items-center px-4 py-16 sm:px-6 lg:px-8 md:overflow-y-auto"
        >
          <div className="mx-auto max-w-7xl w-full">
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
          </div>
        </section>
      )}
    </div>
    
    <ScrollDots sections={sections} />
    <ScrollArrows sections={sections} />
    </>
  );
}
