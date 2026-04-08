# Personal Site

A minimal personal website built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, and local MDX content.

Live site: [https://kai-liang.com/](https://kai-liang.com/)

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui primitives
- Local MDX for blog posts
- Vercel-friendly static output for the current routes

## Structure

```txt
app/
  about/
  blog/
  projects/
components/
  site/
  ui/
content/
  blog/
  projects/
context/
lib/
public/
```

- `app/` contains routes and the shared layout.
- `components/site/` contains reusable site-level UI.
- `components/ui/` contains the small set of retained shadcn/ui primitives.
- `content/blog/` stores blog posts as `.mdx` files plus a manual registry.
- `content/projects/` stores the typed MVP project array.
- `context/` contains local planning and product constraints, not runtime content.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
```

## Add A Blog Post

1. Create `content/blog/<slug>.mdx`.
2. Export a `metadata` object from the MDX file:

```mdx
export const metadata = {
  title: "Post title",
  summary: "Short summary",
  publishedAt: "2026-04-08",
  tags: ["Next.js", "MDX"],
}
```

3. Register the post in `content/blog/index.ts`.

## Add A Project

Append a new item to the `projects` array in `content/projects/index.ts`.

```ts
{
  slug: "project-slug",
  title: "Project title",
  summary: "Short summary",
  stack: ["Next.js", "TypeScript"],
  href: "https://example.com",
  repo: "https://github.com/example/repo",
}
```
