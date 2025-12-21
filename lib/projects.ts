import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/projects");

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  timestamp?: string;
  content?: string;
}

function getAllProjects(): Project[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      // Map frontmatter fields to Project interface
      const project: Project = {
        id: data.filename || slug,
        slug: data.filename || slug,
        title: data.title || "",
        description: data.description || "",
        techStack: Array.isArray(data.tags) ? data.tags : [],
        githubUrl: data.githubUrl || undefined,
        liveUrl: data.liveUrl || undefined,
        featured: data.featured === true,
        timestamp: data.timestamp || undefined,
        content,
      };

      return project;
    });

  // Sort by timestamp if available, otherwise by title
  const sorted = allProjectsData.sort((a, b) => {
    if (a.timestamp && b.timestamp) {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    }
    return a.title.localeCompare(b.title);
  });

  return sorted;
}

export function getProjectBySlug(slug: string): Project | null {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    id: data.filename || slug,
    slug: data.filename || slug,
    title: data.title || "",
    description: data.description || "",
    techStack: Array.isArray(data.tags) ? data.tags : [],
    githubUrl: data.githubUrl || undefined,
    liveUrl: data.liveUrl || undefined,
    featured: data.featured === true,
    timestamp: data.timestamp || undefined,
    content,
  };
}

export const projects: Project[] = getAllProjects();
