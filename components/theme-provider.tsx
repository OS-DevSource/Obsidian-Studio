"use client";

import { ThemeProvider } from "next-themes";

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  // Lock the experience to dark mode for visual consistency.
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      storageKey="showcase-theme"
    >
      {children}
    </ThemeProvider>
  );
}
