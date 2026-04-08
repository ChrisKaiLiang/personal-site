import type { ComponentType } from "react";
import * as firstPostModule from "./first-post.mdx";

export type BlogPostMeta = {
  title: string;
  summary: string;
  publishedAt: string;
  tags?: string[];
};

export type BlogPostEntry = {
  slug: string;
  metadata: BlogPostMeta;
  Component: ComponentType<Record<string, unknown>>;
};

const firstPost = firstPostModule as unknown as {
  default: BlogPostEntry["Component"];
  metadata: BlogPostMeta;
};

export const blogPosts: BlogPostEntry[] = [
  {
    slug: "first-post",
    metadata: firstPost.metadata,
    Component: firstPost.default,
  },
];
