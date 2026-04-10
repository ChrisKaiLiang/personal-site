import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-medium text-foreground">{siteConfig.role}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {siteConfig.contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
