import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        description: data.description || "",
        content,
      } as BlogPost;
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    description: data.description || "",
    content,
  } as BlogPost;
}
