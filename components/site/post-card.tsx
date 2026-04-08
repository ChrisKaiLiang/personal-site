import Link from "next/link";
import type { BlogPostEntry } from "@/content/blog";
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
import { formatDate } from "@/lib/site";
import { cn } from "@/lib/utils";

type PostCardProps = {
  post: BlogPostEntry;
  variant?: "compact" | "detailed";
};

export function PostCard({ post, variant = "compact" }: PostCardProps) {
  return (
    <Card className="h-full border-border/70 bg-gradient-to-b from-card to-card/80 shadow-none">
      <CardHeader className="gap-3">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span>{formatDate(post.metadata.publishedAt, "short")}</span>
        </div>
        <div className="space-y-2">
          <CardTitle
            className={cn(
              variant === "detailed" ? "text-xl sm:text-2xl" : "text-lg"
            )}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="transition-colors hover:text-muted-foreground"
            >
              {post.metadata.title}
            </Link>
          </CardTitle>
          <CardDescription className="max-w-3xl text-sm leading-7 sm:text-base">
            {post.metadata.summary}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {post.metadata.tags?.length ? (
          post.metadata.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))
        ) : (
          <span className="text-sm text-muted-foreground">No tags yet</span>
        )}
      </CardContent>
      <CardFooter className="border-t border-border/70 pt-6">
        <Button asChild size="sm" variant="outline">
          <Link href={`/blog/${post.slug}`}>Read post</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
