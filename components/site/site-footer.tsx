export function SiteFooter() {
  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-6 text-sm text-muted-foreground md:px-8">
        <p>Built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and MDX.</p>
        <p>{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
