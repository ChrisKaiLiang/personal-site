import Link from "next/link";
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

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full border-border/70">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="leading-6">
          {project.summary}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Badge key={item} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
      {project.href || project.repo ? (
        <CardFooter className="gap-3">
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
          {!project.href && !project.repo ? (
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Details coming soon
            </Link>
          ) : null}
        </CardFooter>
      ) : null}
    </Card>
  );
}
