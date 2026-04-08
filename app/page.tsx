import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { blogPosts } from "@/content/blog";
import { projects } from "@/content/projects";
import { PostCard } from "@/components/site/post-card";
import { ProjectCard } from "@/components/site/project-card";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const latestPosts = [...blogPosts]
  .sort(
    (left, right) =>
      Date.parse(right.metadata.publishedAt) -
      Date.parse(left.metadata.publishedAt)
  )
  .slice(0, 2);

const featuredProjects = projects.slice(0, 2);

const focusAreas = [
  "Product engineering",
  "Frontend architecture",
  "Content-heavy interfaces",
  "Design systems",
];

const contactIcons = {
  GitHub: ExternalLink,
  LinkedIn: ExternalLink,
  Contact: Mail,
} as const;

export const metadata: Metadata = {
  description:
    "Kai Liang's personal website featuring AI, data, and product-focused projects, plus technical writing on automation, analytics, and maintainable software systems.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-12 md:px-8 md:py-20">
      <section className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
        <div className="rounded-[2rem] border border-border/70 bg-gradient-to-br from-card via-card to-secondary/50 p-8 shadow-sm sm:p-10">
          <div className="max-w-3xl space-y-6">
            <Badge variant="outline" className="h-7 px-3 text-[11px] tracking-[0.18em] uppercase">
              {siteConfig.role}
            </Badge>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                Building clear, durable web products with strong frontend systems.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                I work on product-facing applications, internal tools, and
                content-rich interfaces. The throughline is the same: make the
                experience easy to use, and make the code easy to keep.
              </p>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                I care about pragmatic architecture, maintainable UI layers, and
                shipping systems that are boring in the right places and
                deliberate where users actually notice.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/projects">View selected work</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/blog">Read technical notes</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border/70 bg-background/90 p-8 shadow-sm">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Current focus
              </p>
              <p className="text-sm leading-7 text-muted-foreground">
                Product engineering with a bias for clarity, content structure,
                and frontend systems that hold up under ongoing change.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <Badge key={area} variant="secondary" className="h-6 px-2.5">
                  {area}
                </Badge>
              ))}
            </div>
            <div className="space-y-3 border-t border-border/70 pt-5 text-sm leading-7 text-muted-foreground">
              <p>
                I usually enjoy work that sits between product needs and system
                quality: information architecture, shared UI primitives, content
                workflows, and cleanup that makes future delivery faster.
              </p>
              <p>
                This MVP keeps the site restrained on purpose. The goal is a
                clear signal of how I think, write, and structure work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          description="A small set of representative work with an emphasis on architecture, delivery, and maintainability."
          action={
            <Button asChild variant="ghost" size="sm">
              <Link href="/projects">
                All projects
                <ArrowRight />
              </Link>
            </Button>
          }
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeading
          eyebrow="Writing"
          title="Recent posts"
          description="Technical notes on frontend architecture, maintainability, and lightweight content systems."
          action={
            <Button asChild variant="ghost" size="sm">
              <Link href="/blog">
                All posts
                <ArrowRight />
              </Link>
            </Button>
          }
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-border/70 bg-gradient-to-r from-secondary/70 via-card to-card p-8 shadow-sm sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Open to thoughtful product, platform, and content-focused work.
            </h2>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              The easiest way to get a sense of how I work is through the code,
              writing, and project framing on this site. For conversations about
              product engineering or frontend systems, these are the right
              starting points.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {siteConfig.contactLinks.map((link) => {
              const Icon = contactIcons[link.label as keyof typeof contactIcons];

              return (
                <Button key={link.label} asChild variant="outline">
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      link.href.startsWith("mailto:") ? undefined : "noreferrer"
                    }
                  >
                    <Icon />
                    {link.label}
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
