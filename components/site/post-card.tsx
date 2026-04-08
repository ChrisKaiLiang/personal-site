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

type PostCardProps = {
  post: BlogPostEntry;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="h-full border-border/70">
      <CardHeader>
        <p className="text-sm text-muted-foreground">
          {new Intl.DateTimeFormat("en", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }).format(new Date(post.metadata.publishedAt))}
        </p>
        <CardTitle>{post.metadata.title}</CardTitle>
        <CardDescription className="leading-6">
          {post.metadata.summary}
        </CardDescription>
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
      <CardFooter>
        <Button asChild size="sm" variant="outline">
          <Link href={`/blog/${post.slug}`}>Read post</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
