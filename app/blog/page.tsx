import type { Metadata } from "next";
import { PostCard } from "@/components/site/post-card";
import { SectionHeading } from "@/components/site/section-heading";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical writing by Kai Liang on AI workflows, analytics, frontend architecture, and maintainable software systems.",
  alternates: {
    canonical: "/blog",
  },
};

const sortedPosts = [...blogPosts].sort(
  (left, right) =>
    Date.parse(right.metadata.publishedAt) - Date.parse(left.metadata.publishedAt)
);

export default function BlogPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 md:px-8 md:py-16">
      <SectionHeading
        eyebrow="Writing"
        title="Blog"
        size="page"
        description="Short technical notes on building maintainable interfaces, shaping content systems, and keeping small codebases intentionally simple."
      />
      <div className="space-y-5">
        {sortedPosts.map((post) => (
          <PostCard key={post.slug} post={post} variant="detailed" />
        ))}
      </div>
    </div>
  );
}
