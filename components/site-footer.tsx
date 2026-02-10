import { siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/70 border-t py-8">
      <div className="text-muted-foreground mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 text-sm md:flex-row md:items-center">
        <p>
          {siteConfig.brandName} {year}. All rights reserved.
        </p>
        <ThemeToggle />
        <p>Premium conversion-led website redesigns for local service teams.</p>
      </div>
    </footer>
  );
}
