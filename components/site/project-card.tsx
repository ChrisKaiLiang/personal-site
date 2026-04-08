import type { ProjectItem } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: ProjectItem;
  variant?: "compact" | "detailed";
};

export function ProjectCard({
  project,
  variant = "compact",
}: ProjectCardProps) {
  const highlights = project.highlights ?? [];
  const hasLinks = Boolean(project.href || project.repo);
  const showHighlights = variant === "detailed" && highlights.length > 0;
  const showFooter = variant === "detailed" || hasLinks;

  return (
    <Card
      className={cn(
        "h-full border-border/70 bg-gradient-to-b from-card to-card/80 shadow-none",
        variant === "detailed" && "rounded-2xl"
      )}
    >
      <CardHeader className="gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">Project</Badge>
          {project.scope ? (
            <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {project.scope}
            </span>
          ) : null}
        </div>
        <div className="space-y-2">
          <CardTitle
            className={cn(
              variant === "detailed" ? "text-xl sm:text-2xl" : "text-lg"
            )}
          >
            {project.title}
          </CardTitle>
          <CardDescription className="max-w-3xl text-sm leading-7 sm:text-base">
            {project.summary}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent
        className={cn(
          "flex flex-col gap-5",
          variant === "detailed" && "md:grid md:grid-cols-[1.4fr_0.9fr]"
        )}
      >
        {showHighlights ? (
          <div className="space-y-4">
            <ul className="space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/70" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      {showFooter ? (
        <CardFooter className="flex-wrap justify-between gap-3 border-t border-border/70 pt-6">
          {variant === "detailed" ? (
            <p className="text-sm text-muted-foreground">
              {hasLinks
                ? "External links available"
                : "Project details available on request"}
            </p>
          ) : (
            <span />
          )}
          {hasLinks ? (
            <div className="flex flex-wrap gap-3">
              {project.href ? (
                <Button asChild size="sm" variant="outline">
                  <a href={project.href} target="_blank" rel="noreferrer">
                    Live site
                  </a>
                </Button>
              ) : null}
              {project.repo ? (
                <Button asChild size="sm" variant="ghost">
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    Source
                  </a>
                </Button>
              ) : null}
            </div>
          ) : null}
        </CardFooter>
      ) : null}
    </Card>
  );
}
