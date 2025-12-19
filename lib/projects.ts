export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Sample Project 1",
    description: "A modern web application built with Next.js and TypeScript.",
    longDescription: "This is a detailed description of the project, showcasing various features and technologies used.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "Sample Project 2",
    description: "A full-stack application with authentication and database integration.",
    longDescription: "This project demonstrates advanced features including user authentication, data management, and API integration.",
    techStack: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "project-3",
    title: "Sample Project 3",
    description: "A mobile-responsive design system and component library.",
    longDescription: "A comprehensive design system with reusable components and consistent styling patterns.",
    techStack: ["React", "Storybook", "CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];
