import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";

const components: MDXComponents = {
  h1: ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className={cn(
        "mt-10 scroll-m-20 text-4xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
    <p
      className={cn("mt-6 text-base leading-8 text-foreground/90", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul className={cn("mt-6 ml-6 list-disc space-y-3", className)} {...props} />
  ),
  ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className={cn("mt-6 ml-6 list-decimal space-y-3", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className={cn("leading-7 text-foreground/90", className)} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-border pl-6 text-muted-foreground italic",
        className
      )}
      {...props}
    />
  ),
  hr: ({ className, ...props }: ComponentPropsWithoutRef<"hr">) => (
    <hr className={cn("my-10 border-border", className)} {...props} />
  ),
  a: ({ className, href = "", ...props }: ComponentPropsWithoutRef<"a">) => {
    const value = href.toString();

    if (value.startsWith("/")) {
      return (
        <Link
          href={value}
          className={cn(
            "font-medium text-foreground underline underline-offset-4",
            className
          )}
        >
          {props.children}
        </Link>
      );
    }

    return (
      <a
        href={value}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "font-medium text-foreground underline underline-offset-4",
          className
        )}
        {...props}
      />
    );
  },
  pre: ({ className, ...props }: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className={cn(
        "mt-6 overflow-x-auto rounded-xl border border-border bg-card px-4 py-4 text-sm",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => (
    <code
      className={cn(
        className
          ? "font-mono text-[0.925em]"
          : "rounded bg-muted px-1.5 py-0.5 font-mono text-[0.925em]",
        className
      )}
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
