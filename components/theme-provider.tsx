"use client";

import { ThemeProvider } from "next-themes";

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  // Allow users to choose light, dark, or system preference.
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="showcase-theme"
    >
      {children}
    </ThemeProvider>
  );
}
