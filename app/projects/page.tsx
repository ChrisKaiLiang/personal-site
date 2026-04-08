import type { Metadata } from "next";
import { ProjectCard } from "@/components/site/project-card";
import { SectionHeading } from "@/components/site/section-heading";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A list of projects for the personal site MVP.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 md:px-8 md:py-16">
      <SectionHeading
        title="Projects"
        description="Typed project data for the MVP, kept deliberately simple and easy to edit."
      />
      {projects.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          No projects yet. Add items to `content/projects/index.ts` to populate
          this page.
        </p>
      )}
    </div>
  );
}
