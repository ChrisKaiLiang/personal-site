import type { Metadata } from "next";
import { PostCard } from "@/components/site/post-card";
import { SectionHeading } from "@/components/site/section-heading";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Local MDX writing for the personal site MVP.",
};

const sortedPosts = [...blogPosts].sort(
  (left, right) =>
    Date.parse(right.metadata.publishedAt) - Date.parse(left.metadata.publishedAt)
);

export default function BlogPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 md:px-8 md:py-16">
      <SectionHeading
        title="Blog"
        description="Posts are authored as local MDX files and registered explicitly for the MVP."
      />
      {sortedPosts.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {sortedPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          No posts yet. Add an MDX file and register it in `content/blog/index.ts`.
        </p>
      )}
    </div>
  );
}
