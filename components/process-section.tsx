"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal, RevealItem } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

export function ProcessSection() {
  return (
    <section className="section-padding" id="process">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4">
          <Badge className="w-fit">Process</Badge>
          <h2 className="text-foreground text-3xl font-[var(--font-display)] font-semibold md:text-4xl">
            {siteConfig.process.title}
          </h2>
        </div>

        <Reveal className="mt-10 grid gap-4 md:grid-cols-2">
          {siteConfig.process.steps.map((step, index) => (
            <RevealItem key={step.title}>
              <Card className="border-border/70 bg-card/80 h-full p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="border-primary/40 bg-primary/10 text-primary inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-foreground text-base font-semibold sm:text-lg">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm">{step.description}</p>
                  </div>
                </div>
              </Card>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
