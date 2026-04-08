export const siteConfig = {
  name: "Personal Site",
  description:
    "A minimal personal website for projects, writing, and future iteration.",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ],
} as const;
