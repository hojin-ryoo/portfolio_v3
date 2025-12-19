import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface BlogFrontmatter {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  categories?: string[];
  published?: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  mdxSource: MDXRemoteSerializeResult;
}

export interface BlogPostMetadata {
  slug: string;
  frontmatter: BlogFrontmatter;
}

export interface BlogListProps {
  posts: BlogPost[];
  currentPage?: number;
  totalPages?: number;
  tags?: string[];
  categories?: string[];
}

