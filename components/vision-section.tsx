"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function VisionSection() {
  const [activePoint, setActivePoint] = useState(0);
  const profile = siteConfig.vision.profileCard;

  return (
    <section id="vision" className="section-padding">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
        <div className="flex flex-col gap-5">
          <Badge className="w-fit">Vision</Badge>
          <div>
            <h2 className="text-foreground text-3xl font-[var(--font-display)] font-semibold md:text-4xl">
              {siteConfig.vision.title}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">{siteConfig.vision.subtitle}</p>
          </div>

          <div className="space-y-3">
            {siteConfig.vision.points.map((point, index) => {
              const active = index === activePoint;
              return (
                <button
                  key={point.title}
                  type="button"
                  onMouseEnter={() => setActivePoint(index)}
                  onFocus={() => setActivePoint(index)}
                  onClick={() => setActivePoint(index)}
                  className={cn(
                    "focus-ring w-full rounded-2xl border p-4 text-left transition",
                    active
                      ? "border-primary/55 bg-primary/12"
                      : "border-border/70 bg-card/70 hover:border-primary/30 hover:bg-card"
                  )}
                >
                  <p
                    className={cn(
                      "text-lg font-semibold",
                      active ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {point.title}
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm">{point.body}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="bg-primary/20 absolute -top-14 left-2 h-56 w-56 rounded-full blur-3xl" />

          <div className="border-border/70 from-card via-card/90 to-muted/70 relative rounded-[28px] border bg-gradient-to-br p-5 shadow-[var(--shadow-strong)] sm:p-6">
            <div className="border-border/70 bg-card/85 rounded-2xl border p-5">
              <p className="text-primary text-xs font-semibold tracking-[0.16em] uppercase">
                Case signal
              </p>
              <h3 className="text-foreground mt-2 text-2xl font-semibold">{profile.name}</h3>
              <p className="text-muted-foreground mt-1 text-sm">{profile.role}</p>

              <div className="border-border/70 bg-card/70 mt-5 rounded-2xl border p-4">
                <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                  {profile.metricTitle}
                </p>
                <p className="text-foreground mt-2 text-2xl font-semibold">{profile.metricValue}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {profile.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-border/70 bg-card/70 text-muted-foreground rounded-full border px-3 py-1 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
