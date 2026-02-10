"use client";

import { BeforeAfterSlider } from "@/components/before-after-slider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TiltCard } from "@/components/tilt-card";
import { Reveal, RevealItem } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

export function ProofSection() {
  return (
    <section id="proof" className="section-padding">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-7 sm:gap-9 lg:grid-cols-[0.88fr,1.12fr] lg:items-start">
          <div className="flex flex-col gap-5 sm:gap-6">
            <Badge className="w-fit">Proof</Badge>
            <div>
              <h2 className="text-foreground text-3xl font-[var(--font-display)] font-semibold md:text-4xl">
                {siteConfig.proof.title}
              </h2>
              <p className="text-muted-foreground mt-3 text-base">{siteConfig.proof.description}</p>
            </div>

            <div className="grid gap-3">
              {siteConfig.proof.metrics.map((metric) => (
                <div
                  key={metric.value}
                  className="border-border/70 bg-card/70 flex items-center justify-between rounded-xl border px-4 py-3"
                >
                  <span className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    {metric.label}
                  </span>
                  <span className="text-foreground text-sm font-semibold">{metric.value}</span>
                </div>
              ))}
            </div>

            <div className="border-primary/30 bg-primary/10 text-foreground rounded-2xl border p-4 text-sm">
              Real numbers can replace every placeholder block in this section without changing the
              layout.
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:gap-7">
            <BeforeAfterSlider beforeSrc="/before.png" afterSrc="/after.png" />

            <Reveal className="grid gap-4 md:grid-cols-3">
              {siteConfig.caseStudies.map((study) => (
                <RevealItem key={study.title} className="h-full">
                  <TiltCard className="h-full">
                    <Card className="border-border/70 bg-card/80 h-full rounded-[var(--radius-md)]">
                      <CardHeader>
                        <CardTitle>{study.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">Problem: {study.problem}</p>
                      </CardHeader>
                      <CardContent className="text-muted-foreground space-y-2 text-[13px] sm:space-y-3 sm:text-sm">
                        <p>Fix: {study.fix}</p>
                        <p className="text-foreground font-semibold">{study.result}</p>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
