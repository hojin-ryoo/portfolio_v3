import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

interface MDXContentProps {
  mdxSource: MDXRemoteSerializeResult;
}

export function MDXContent({ mdxSource }: MDXContentProps) {
  return <MDXRemote {...mdxSource} />;
}

