"use client";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/site-config";

export function FaqSection() {
  return (
    <section className="section-padding" id="faq">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-4">
          <Badge className="w-fit">FAQ</Badge>
          <h2 className="text-foreground text-3xl font-[var(--font-display)] font-semibold md:text-4xl">
            {siteConfig.faq.title}
          </h2>
        </div>

        <div className="border-border/70 bg-card/80 mt-8 rounded-[var(--radius-md)] border p-2 sm:p-4">
          <Accordion type="single" collapsible>
            {siteConfig.faq.items.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
