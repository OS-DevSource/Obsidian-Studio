"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  MOTION_DELAY,
  MOTION_DURATION,
  MOTION_DURATION_LONG,
  MOTION_EASE,
  MOTION_STAGGER,
} from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";

export function HeroVisualStage() {
  const reduceMotion = useReducedMotion();
  const visual = siteConfig.hero.visual;

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-gradient-to-br from-white/8 via-white/3 to-transparent p-5 shadow-[var(--shadow-strong)] sm:p-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-primary/25 absolute -top-20 -right-8 h-56 w-56 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-4 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: MOTION_DURATION, ease: MOTION_EASE, delay: MOTION_DELAY }}
        className="relative z-10"
      >
        <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
          {visual.headline}
        </p>
        <h3 className="mt-3 max-w-md text-xl font-semibold text-white sm:text-2xl">
          {visual.title}
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {visual.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-100"
            >
              {chip}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : "show"}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: MOTION_STAGGER,
              delayChildren: MOTION_DELAY,
            },
          },
        }}
        className="relative z-10 mt-6 grid gap-3 sm:grid-cols-3"
      >
        {visual.cards.map((card) => (
          <motion.article
            key={card.title}
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: MOTION_DURATION_LONG, ease: MOTION_EASE },
              },
            }}
            className="rounded-2xl border border-white/12 bg-slate-950/55 p-4 backdrop-blur"
          >
            <p className="text-[11px] font-semibold tracking-wide text-slate-300 uppercase">
              {card.title}
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">{card.value}</p>
            <p className="mt-1 text-xs text-slate-300">{card.detail}</p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
