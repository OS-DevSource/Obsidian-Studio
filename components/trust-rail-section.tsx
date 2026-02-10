import { siteConfig } from "@/lib/site-config";

export function TrustRailSection() {
  return (
    <section id="trust" className="pb-8 sm:pb-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[26px] border border-white/12 bg-white/4 p-5 sm:p-7">
          <p className="text-foreground text-base font-semibold sm:text-lg">
            {siteConfig.trustRail.title}
          </p>
          <p className="text-muted-foreground mt-2 text-sm">{siteConfig.trustRail.description}</p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {siteConfig.trustRail.logos.map((logo) => (
              <div
                key={logo}
                className="rounded-xl border border-white/10 bg-slate-950/55 px-3 py-2 text-center text-xs font-semibold tracking-wide text-slate-300 uppercase"
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
