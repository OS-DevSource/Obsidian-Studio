import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/4 px-3 py-1 text-xs font-semibold tracking-wide text-slate-200 uppercase",
        className
      )}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

export { Badge };
