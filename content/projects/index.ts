export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  scope?: string;
  highlights?: string[];
  href?: string;
  repo?: string;
};

export const projects: ProjectItem[] = [
  {
    slug: "documentation-platform-refresh",
    title: "Documentation Platform Refresh",
    scope: "Content platform",
    summary:
      "Rebuilt a documentation and marketing surface around Next.js App Router and MDX so engineers could publish quickly without inheriting a CMS-sized maintenance burden.",
    stack: ["Next.js", "TypeScript", "MDX", "Tailwind CSS", "Vercel"],
    highlights: [
      "Reduced template sprawl by moving layout, navigation, and page chrome into a small set of reusable server-rendered primitives.",
      "Kept the authoring workflow explicit with typed metadata and a constrained component surface instead of adding a heavier editorial stack.",
      "Focused on readability, predictable routing, and a codebase that another engineer could extend without reverse-engineering hidden conventions.",
    ],
  },
  {
    slug: "release-operations-dashboard",
    title: "Release Operations Dashboard",
    scope: "Internal tool",
    summary:
      "Built an internal dashboard for product, support, and engineering teams to track release readiness, rollout status, and follow-up actions from a single operational view.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "shadcn/ui"],
    highlights: [
      "Designed the UI around high-signal scanning, with filters and summaries that helped teams answer operational questions quickly instead of navigating dashboard noise.",
      "Used typed server-side data loading and clear UI states so the product stayed dependable as reporting needs changed.",
      "Prioritized maintainability over novelty, keeping the interaction model lightweight and the data flow easy to trace in code review.",
    ],
  },
  {
    slug: "design-system-ops",
    title: "Design System Operations",
    scope: "Frontend platform",
    summary:
      "Standardized shared UI primitives, tokens, and migration guidance across multiple product surfaces to reduce one-off styling and improve delivery consistency.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Design Systems"],
    highlights: [
      "Replaced duplicated component logic with a smaller, better-documented set of primitives aligned to actual product usage.",
      "Created migration patterns that let teams adopt the shared system incrementally instead of forcing a fragile big-bang rewrite.",
      "Treated DX as part of the product: naming, defaults, and examples were optimized to reduce accidental complexity for the next engineer.",
    ],
  },
];
