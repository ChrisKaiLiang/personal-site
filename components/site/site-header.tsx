import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6 px-6 py-4 md:px-8">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-5 text-sm">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
