import type { Metadata } from "next";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "A short placeholder about page for the personal site.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-12 md:px-8 md:py-16">
      <SectionHeading
        title="About"
        description="A simple placeholder page for positioning, background, and collaboration context."
      />
      <div className="space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
        <p>
          This page is intentionally brief for the initialization pass. It
          establishes the route, the shared layout, and the baseline typography
          without locking in final personal copy yet.
        </p>
        <p>
          In the next iteration, this section can expand into a clearer personal
          narrative, experience summary, and links to the most representative
          projects and writing.
        </p>
      </div>
    </div>
  );
}
