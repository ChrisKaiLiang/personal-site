import type { Metadata } from "next";
import { ProjectCard } from "@/components/site/project-card";
import { SectionHeading } from "@/components/site/section-heading";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Kai Liang across AI, data, product engineering, and maintainable frontend systems.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 md:px-8 md:py-16">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects"
        size="page"
        description="A curated set of projects that reflect the kinds of work I tend to enjoy most: product surfaces, internal tools, and systems that improve how teams build and publish."
      />
      <div className="space-y-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} variant="detailed" />
        ))}
      </div>
    </div>
  );
}
