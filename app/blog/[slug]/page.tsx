import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/content/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metadata.title,
    description: post.metadata.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  const Post = post.Component;

  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-12 md:px-8 md:py-16">
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {new Intl.DateTimeFormat("en", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(post.metadata.publishedAt))}
          </span>
          {post.metadata.tags?.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight text-balance">
            {post.metadata.title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            {post.metadata.summary}
          </p>
        </div>
      </header>
      <div className="min-w-0">
        <Post />
      </div>
    </article>
  );
}
