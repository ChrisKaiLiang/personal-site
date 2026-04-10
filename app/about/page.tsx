import type { Metadata } from "next";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kai Liang: a product-focused AI builder and data analyst working on practical automation, analytics, and well-structured digital products.",
  alternates: {
    canonical: "/about",
  },
};

const profileSections = [
  {
    title: "Where I create value",
    summary:
      "I usually work in the space between raw information and real operating decisions, where teams need more than analysis alone.",
    bullets: [
      "Designing measurement frameworks that clarify what should be tracked and why.",
      "Building analytics products, reporting systems, and internal tools people can actually use.",
      "Turning recurring research or reporting work into lighter, more structured workflows.",
    ],
  },
  {
    title: "How I approach the work",
    summary:
      "I care more about usefulness than complexity. The goal is usually not to add more system, but to add the right amount of structure.",
    bullets: [
      "Start from the decision a person needs to make, then work backward to the data and interface.",
      "Simplify ambiguous requirements until they can be turned into concrete logic or repeatable process.",
      "Optimize for clarity, trust, and adoption instead of novelty for its own sake.",
    ],
  },
];

const principles = [
  {
    title: "Clarity before volume.",
    description:
      "More information is not better if people still cannot see what matters.",
  },
  {
    title: "Structure should reduce friction.",
    description:
      "A system earns its keep when it makes future work easier, not heavier.",
  },
  {
    title: "AI should improve a real workflow.",
    description:
      "I care about AI when it removes manual work or improves access to knowledge.",
  },
  {
    title: "Durability matters.",
    description:
      "Useful systems should remain understandable, maintainable, and easy for others to continue.",
  },
];

const heroHighlights = [
  "Turning ambiguous questions into usable decision systems.",
  "Designing analytics products and lightweight AI workflows.",
  "Optimizing for clarity, trust, and repeatable execution.",
];

const heroLinks = siteConfig.contactLinks.filter(
  (link) => link.label === "GitHub" || link.label === "LinkedIn"
);

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

const heroLinkIcons = {
  GitHub: GitHubLogo,
  LinkedIn: LinkedInLogo,
} as const;

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 md:px-8 md:py-16">
      <section className="grid gap-8 lg:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.4fr)] lg:items-start">
        <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-secondary via-card to-background shadow-none">
          <div className="p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-border/70 bg-secondary/40">
              <Image
                src="/images/about/kai-liang-portrait.jpg"
                alt="Portrait of Kai Liang"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 28vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="border-t border-border/60 bg-background/50 px-4 py-4">
            <div className="grid grid-cols-2 gap-3">
              {heroLinks.map((link) => {
                const Icon =
                  heroLinkIcons[link.label as keyof typeof heroLinkIcons];

                return (
                  <Button
                    key={link.label}
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-11 justify-center rounded-2xl px-4"
                  >
                    <a href={link.href} target="_blank" rel="noreferrer">
                      <Icon className="size-4 fill-current" />
                      {link.label}
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-5">
            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-foreground text-balance sm:text-6xl lg:text-6xl">
                Kai Liang
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-foreground/85 sm:text-xl">
                I build decision systems, analytics products, and practical AI
                tools that help teams make better use of information.
              </p>
              <div className="max-w-3xl text-base leading-8 text-muted-foreground">
                <p>
                  My work sits at the intersection of analysis, product
                  thinking, and execution, usually where data exists but the
                  structure for using it well does not. I focus on clarifying
                  what matters, improving how performance is interpreted, and
                  building tools or workflows that reduce repeated manual work.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl">
            <ul className="grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {heroHighlights.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-border/60 bg-card/70 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {profileSections.map((section) => (
          <Card
            key={section.title}
            className="h-full border-border/70 bg-gradient-to-b from-card to-card/80 shadow-none"
          >
            <CardHeader>
              <CardTitle className="text-lg">{section.title}</CardTitle>
              <CardDescription className="text-sm leading-7 sm:text-base">
                {section.summary}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2 pl-5 text-sm leading-7 text-muted-foreground sm:text-base">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="list-disc">
                    {bullet}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="max-w-4xl rounded-[2rem] border border-border/70 bg-secondary/55 p-8 text-muted-foreground">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              Principles
            </h3>
            <p className="max-w-3xl text-base leading-8">
              A few consistent standards shape how I think about analytics,
              products, and AI-enabled systems.
            </p>
          </div>

          <ul className="grid gap-4 md:grid-cols-2">
            {principles.map((principle) => (
              <li
                key={principle.title}
                className="rounded-2xl border border-border/60 bg-background/70 p-5"
              >
                <p className="text-sm font-semibold text-foreground sm:text-base">
                  {principle.title}
                </p>
                <p className="mt-2 text-sm leading-7 sm:text-base">
                  {principle.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
