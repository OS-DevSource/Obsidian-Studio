"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import { HeroVisualStage } from "@/components/hero-visual-stage";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOTION_DELAY, MOTION_DURATION, MOTION_DURATION_LONG, MOTION_EASE } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const accentWord = siteConfig.hero.accentWord;
  const lineTwo = siteConfig.hero.headlineLines[1];
  const accentParts = useMemo(() => {
    if (!accentWord || !lineTwo.includes(accentWord)) return null;
    const [before, after] = lineTwo.split(accentWord);
    return { before, after };
  }, [accentWord, lineTwo]);

  return (
    <section className="relative isolate overflow-hidden pb-14 sm:pb-20">
      <div className="glow-field pointer-events-none absolute inset-0 -z-10">
        <div className="noise-layer absolute inset-0" />
        <div className="vignette-layer absolute inset-0" />
      </div>

      <div className="blob blob-one" aria-hidden="true" />
      <div className="blob blob-two" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl gap-9 px-6 pt-20 sm:pt-28 lg:grid-cols-[1fr,1fr] lg:items-center">
        <div className="flex flex-col gap-6 sm:gap-7">
          <Badge className="w-fit border-white/14 bg-white/5 text-slate-200">
            {siteConfig.hero.highlight}
          </Badge>

          <div className="flex flex-col gap-4">
            <h1 className="text-foreground text-4xl leading-[1.24] font-[var(--font-display)] font-semibold sm:text-5xl sm:leading-[1.25] lg:text-[62px] lg:leading-[1.26]">
              <span className="block">
                <motion.span
                  initial={reduceMotion ? false : { y: 120 }}
                  animate={{ y: 0 }}
                  transition={{ duration: MOTION_DURATION_LONG, ease: MOTION_EASE }}
                  className="block"
                >
                  {siteConfig.hero.headlineLines[0]}
                </motion.span>
              </span>
              <span className="block">
                <motion.span
                  initial={reduceMotion ? false : { y: 120 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: MOTION_DURATION_LONG,
                    ease: MOTION_EASE,
                    delay: MOTION_DELAY,
                  }}
                  className="relative block"
                >
                  {accentParts ? (
                    <>
                      {accentParts.before}
                      <span className="text-primary">{accentWord}</span>
                      {accentParts.after}
                    </>
                  ) : (
                    siteConfig.hero.headlineLines[1]
                  )}
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: MOTION_DURATION, ease: MOTION_EASE, delay: 0.2 }}
              className="text-muted-foreground max-w-xl text-base sm:text-lg"
            >
              {siteConfig.hero.subhead}
            </motion.p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" asChild>
              <Link href={siteConfig.ctaPrimaryHref}>{siteConfig.ctaPrimaryLabel}</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href={siteConfig.ctaSecondaryHref}>{siteConfig.ctaSecondaryLabel}</Link>
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {siteConfig.hero.trust.map((item) => (
              <div
                key={item.value}
                className="rounded-[var(--radius-sm)] border border-white/12 bg-white/5 px-3 py-3"
              >
                <p className="text-foreground text-lg font-semibold sm:text-xl">{item.value}</p>
                <p className="text-muted-foreground text-[11px] font-semibold tracking-wide uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 26 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: MOTION_DURATION_LONG, ease: MOTION_EASE, delay: 0.12 }}
          className="relative"
        >
          <HeroVisualStage />
        </motion.div>
      </div>
    </section>
  );
}
