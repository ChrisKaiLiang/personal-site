import type { ComponentType } from "react";
import * as firstPostModule from "./first-post.mdx";
import * as secondPostModule from "./small-systems-notes.mdx";

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

type BlogPostModule = {
  default: BlogPostEntry["Component"];
  metadata: BlogPostMeta;
};

const firstPost = firstPostModule as unknown as BlogPostModule;
const secondPost = secondPostModule as unknown as BlogPostModule;

export const blogPosts: BlogPostEntry[] = [
  {
    slug: "shipping-a-small-mdx-site",
    metadata: firstPost.metadata,
    Component: firstPost.default,
  },
  {
    slug: "small-systems-notes",
    metadata: secondPost.metadata,
    Component: secondPost.default,
  },
];
