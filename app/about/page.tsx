import type { Metadata } from "next";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";

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
    title: "What I do",
    description:
      "I build product-facing web applications, internal tools, and content-heavy interfaces. Most of my work sits at the point where user experience, frontend architecture, and delivery constraints meet.",
  },
  {
    title: "Problems I work on",
    description:
      "I tend to gravitate toward information architecture, design system cleanup, editorial workflows, and product surfaces that need both interface judgment and system discipline.",
  },
  {
    title: "What I care about technically",
    description:
      "Readable code, typed interfaces, server-first rendering where it helps, sensible defaults, and abstractions that earn their keep instead of adding mystery to the codebase.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 md:px-8 md:py-16">
      <SectionHeading
        eyebrow="Profile"
        title="About"
        size="page"
        description="A concise professional profile shaped around the kind of engineering work I find most valuable and the kinds of systems I like to improve."
      />

      <div className="max-w-3xl space-y-5 text-base leading-8 text-muted-foreground">
        <p>
          I am most interested in work that combines product thinking with
          technical rigor. That usually means interfaces with real information
          density, shared frontend systems, and codebases that need to stay
          understandable as they evolve.
        </p>
        <p>
          The kinds of problems I enjoy are rarely about adding the most
          technology. They are usually about choosing the right amount of
          structure: enough to make the system reliable and scalable, not so
          much that future changes become harder than they should be.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {profileSections.map((section) => (
          <Card
            key={section.title}
            className="border-border/70 bg-gradient-to-b from-card to-card/80 shadow-none"
          >
            <CardHeader>
              <CardTitle className="text-lg">{section.title}</CardTitle>
              <CardDescription className="text-sm leading-7 sm:text-base">
                {section.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="max-w-3xl rounded-[2rem] border border-border/70 bg-secondary/55 p-8 text-base leading-8 text-muted-foreground">
        <p>
          In practice, I prefer systems that are explicit, calm, and easy for
          another engineer to pick up. If a page looks polished but the code is
          difficult to reason about, the work is only half-finished.
        </p>
      </div>
    </div>
  );
}
