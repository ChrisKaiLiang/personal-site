export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  href?: string;
  repo?: string;
};

export const projects: ProjectItem[] = [
  {
    slug: "personal-site-foundation",
    title: "Personal Site Foundation",
    summary:
      "The initial site shell for projects, writing, and future content work.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
  },
  {
    slug: "content-workflow-mvp",
    title: "Content Workflow MVP",
    summary:
      "A minimal local content model with typed project data and an explicit MDX blog registry.",
    stack: ["TypeScript", "MDX"],
  },
];
