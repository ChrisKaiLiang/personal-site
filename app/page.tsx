import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { projects } from "@/content/projects";
import { PostCard } from "@/components/site/post-card";
import { ProjectCard } from "@/components/site/project-card";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";

const latestPosts = [...blogPosts]
  .sort(
    (left, right) =>
      Date.parse(right.metadata.publishedAt) -
      Date.parse(left.metadata.publishedAt)
  )
  .slice(0, 2);

const featuredProjects = projects.slice(0, 2);

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-12 md:px-8 md:py-16">
      <section className="flex flex-col gap-8">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Personal site initialization
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            A clean foundation for projects, writing, and future iteration.
          </h1>
          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            This first pass keeps the structure intentionally light: a simple
            homepage, typed project data, local MDX blog posts, and a shared
            site shell that can be refined in the next step.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/projects">View projects</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/blog">Read blog</Link>
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeading
          title="Featured Projects"
          description="A minimal project list for the MVP. Content depth and polish can come next."
        />
        {featuredProjects.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            No projects yet. Add entries to `content/projects/index.ts` to
            populate this section.
          </p>
        )}
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeading
          title="Latest Writing"
          description="Blog posts are powered by local MDX files and a small manual registry."
        />
        {latestPosts.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            No posts yet. Add an MDX file under `content/blog/` and register it
            in `content/blog/index.ts`.
          </p>
        )}
      </section>
    </div>
  );
}
