export type ContactLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Kai Liang",
  role: "Product-focused AI Builder and Data Analyst",
  siteUrl: "https://kai-liang.com",
  description:
    "Kai Liang's personal website featuring AI, data, and product-focused projects, along with technical writing on automation, analytics, and maintainable web systems.",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ],
  contactLinks: [
    {
      label: "GitHub",
      href: "https://github.com/ChrisKaiLiang",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/liang-kai",
    },
    {
      label: "Contact",
      href: "mailto:kai.liang97@hotmail.com",
    },
  ] satisfies ContactLink[],
} as const;

export function formatDate(
  value: string,
  month: "short" | "long" = "short"
) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month,
    day: "numeric",
  }).format(new Date(value));
}
