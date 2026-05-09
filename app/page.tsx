import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
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

function GitHubLogo({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.5v-1.96c-2.94.64-3.56-1.25-3.56-1.25-.48-1.2-1.18-1.53-1.18-1.53-.96-.66.07-.65.07-.65 1.06.08 1.62 1.08 1.62 1.08.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.67-1.4-2.35-.26-4.82-1.17-4.82-5.2 0-1.15.41-2.1 1.08-2.84-.1-.27-.47-1.36.1-2.84 0 0 .89-.28 2.9 1.08a10.15 10.15 0 0 1 5.28 0c2.01-1.36 2.9-1.08 2.9-1.08.57 1.48.2 2.57.1 2.84.67.74 1.08 1.69 1.08 2.84 0 4.04-2.48 4.93-4.85 5.19.38.32.72.96.72 1.93v2.86c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  );
}

function LinkedInLogo({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9.75h3.96V21H3V9.75Zm6.44 0h3.8v1.54h.05c.53-1 1.82-2.05 3.74-2.05 4 0 4.74 2.63 4.74 6.05V21h-3.96v-5.06c0-1.2-.02-2.75-1.68-2.75-1.68 0-1.94 1.3-1.94 2.66V21H9.44V9.75Z" />
    </svg>
  );
}

const contactIcons = {
  GitHub: GitHubLogo,
  LinkedIn: LinkedInLogo,
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
        <div className="min-w-0 overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-card via-card to-secondary/50 p-8 shadow-sm sm:p-10">
          <div className="min-w-0 max-w-3xl space-y-6">
            <p className="inline-flex max-w-full rounded-4xl border border-border bg-background/70 px-3 py-2 text-[10px] leading-4 tracking-[0.18em] uppercase text-foreground sm:w-auto sm:px-3 sm:py-1.5 sm:text-[11px] sm:leading-none">
              {siteConfig.role}
            </p>
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

        <div className="min-w-0 rounded-[2rem] border border-border/70 bg-background/90 p-8 shadow-sm">
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
              const isBrandLogo =
                link.label === "GitHub" || link.label === "LinkedIn";

              return (
                <Button key={link.label} asChild variant="outline">
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      link.href.startsWith("mailto:") ? undefined : "noreferrer"
                    }
                  >
                    <Icon className={isBrandLogo ? "fill-current" : undefined} />
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
