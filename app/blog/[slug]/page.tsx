import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/content/blog";
import { formatDate } from "@/lib/site";

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
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.summary,
      url: `/blog/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: post.metadata.title,
      description: post.metadata.summary,
    },
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
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to blog
      </Link>

      <header className="space-y-5 rounded-[2rem] border border-border/70 bg-gradient-to-br from-card to-secondary/45 p-8 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {formatDate(post.metadata.publishedAt, "long")}
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
          <p className="max-w-2xl text-base leading-8 text-muted-foreground">
            {post.metadata.summary}
          </p>
        </div>
      </header>

      <div className="min-w-0 rounded-[2rem] border border-border/70 bg-card p-8 shadow-sm">
        <Post />
      </div>
    </article>
  );
}
