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
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'lib/mdx.ts:15',message:'getAllPosts entry',data:{contentDirectory,exists:fs.existsSync(contentDirectory)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  // #endregion
  if (!fs.existsSync(contentDirectory)) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'lib/mdx.ts:18',message:'contentDirectory does not exist',data:{contentDirectory},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'lib/mdx.ts:22',message:'fileNames read',data:{fileNames,count:fileNames.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  // #endregion
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'lib/mdx.ts:30',message:'post processed',data:{slug,hasDate:!!data.date,hasTimestamp:!!data.timestamp,dateValue:data.date,timestampValue:data.timestamp,title:data.title},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        description: data.description || "",
        content,
      } as BlogPost;
    });

  const sorted = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'lib/mdx.ts:44',message:'getAllPosts exit',data:{postCount:sorted.length,slugs:sorted.map(p=>p.slug)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
  // #endregion
  return sorted;
}

export function getPostBySlug(slug: string): BlogPost | null {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'lib/mdx.ts:47',message:'getPostBySlug entry',data:{slug,contentDirectory},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'lib/mdx.ts:50',message:'fullPath constructed',data:{fullPath,exists:fs.existsSync(fullPath)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  if (!fs.existsSync(fullPath)) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'lib/mdx.ts:52',message:'file not found',data:{fullPath,slug},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'lib/mdx.ts:58',message:'post loaded',data:{slug,hasDate:!!data.date,hasTimestamp:!!data.timestamp,dateValue:data.date,timestampValue:data.timestamp,title:data.title},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion

  const result = {
    slug,
    title: data.title || "",
    date: data.date || "",
    description: data.description || "",
    content,
  } as BlogPost;
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/b6a20d97-64a6-426e-89c2-df78e9af9d23',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'lib/mdx.ts:66',message:'getPostBySlug exit',data:{slug,resultDate:result.date,resultTitle:result.title},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  return result;
}
