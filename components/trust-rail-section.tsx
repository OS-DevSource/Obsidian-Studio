import { siteConfig } from "@/lib/site-config";

export function TrustRailSection() {
  return (
    <section id="trust" className="pb-8 sm:pb-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-border/70 bg-card/70 rounded-[26px] border p-5 sm:p-7">
          <p className="text-foreground text-base font-semibold sm:text-lg">
            {siteConfig.trustRail.title}
          </p>
          <p className="text-muted-foreground mt-2 text-sm">{siteConfig.trustRail.description}</p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {siteConfig.trustRail.logos.map((logo) => (
              <div
                key={logo}
                className="border-border/70 bg-card/80 text-muted-foreground rounded-xl border px-3 py-2 text-center text-xs font-semibold tracking-wide uppercase"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
