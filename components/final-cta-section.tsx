import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export function FinalCtaSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:gap-10 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="flex flex-col gap-6">
          <Badge className="w-fit">Start</Badge>

          <div>
            <h2 className="text-foreground text-3xl font-[var(--font-display)] font-semibold md:text-4xl">
              {siteConfig.finalCta.title}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg">{siteConfig.finalCta.description}</p>
          </div>

          <div className="border-primary/28 bg-primary/10 text-foreground rounded-2xl border p-4 text-sm">
            We run focused sprints built for outcomes, not open-ended redesign cycles.
          </div>

          <Button asChild size="lg" className="w-fit">
            <Link href={siteConfig.ctaPrimaryHref}>{siteConfig.ctaPrimaryLabel}</Link>
          </Button>

          <p className="text-muted-foreground text-xs">We reply within 2 business days.</p>
          <p className="text-muted-foreground text-xs">
            Prefer email? Reach us at{" "}
            <a
              className="text-primary hover:text-primary/80"
              href={`mailto:${siteConfig.contactEmail}`}
            >
              {siteConfig.contactEmail}
            </a>
          </p>
        </div>

        <div className="border-border/70 bg-card/80 rounded-[var(--radius-md)] border p-4 sm:p-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
