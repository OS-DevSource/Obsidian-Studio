"use client";

import { useId, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealItem } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { useTouchDevice } from "@/lib/use-touch-device";

function GalleryTile({
  title,
  description,
  detail,
}: {
  title: string;
  description: string;
  detail?: string;
}) {
  const isTouch = useTouchDevice();
  const [open, setOpen] = useState(false);
  const contentId = useId();
  const expanded = open;
  const hint = isTouch ? "Tap for details" : "Hover for details";

  return (
    <button
      type="button"
      aria-expanded={expanded}
      aria-controls={contentId}
      onClick={() => setOpen((value) => !value)}
      className={cn(
        "focus-ring group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[var(--radius-md)] border border-white/12 bg-slate-950/55 p-4 text-left transition sm:p-5",
        "hover:border-primary/45 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
      )}
      data-open={expanded}
    >
      <div className="bg-primary/18 absolute -top-16 -right-6 h-36 w-36 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 left-0 h-40 w-40 rounded-full bg-cyan-300/16 blur-3xl" />

      <div className="relative z-10">
        <p className="text-foreground text-sm font-semibold">{title}</p>
        <div id={contentId} className="text-muted-foreground mt-2 text-sm">
          {description}
        </div>
        {detail && (
          <div
            className={cn(
              "mt-3 text-xs text-slate-200 transition-opacity",
              expanded ? "opacity-100" : isTouch ? "opacity-0" : "opacity-0 group-hover:opacity-100"
            )}
          >
            {detail}
          </div>
        )}
      </div>

      <span className="text-muted-foreground relative z-10 mt-4 text-[11px] font-semibold tracking-wide uppercase">
        {hint}
      </span>
    </button>
  );
}

export function GallerySection() {
  return (
    <section className="section-padding" id="gallery">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4">
          <Badge className="w-fit">Gallery</Badge>
          <h2 className="text-3xl font-[var(--font-display)] font-semibold text-white md:text-4xl">
            {siteConfig.gallery.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl">{siteConfig.gallery.description}</p>
        </div>

        <Reveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.gallery.items.map((item) => (
            <RevealItem key={item.title} className="h-full">
              <GalleryTile title={item.title} description={item.description} detail={item.detail} />
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
