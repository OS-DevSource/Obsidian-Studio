"use client";

import { ThemeProvider } from "next-themes";

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  // Theme is intentionally locked to dark for a cinematic premium presentation.
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
