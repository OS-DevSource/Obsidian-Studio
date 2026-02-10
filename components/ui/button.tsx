import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-solid text-primary-solid-foreground shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:bg-primary-solid/90 hover:shadow-[var(--shadow-strong)]",
        secondary:
          "border border-white/24 bg-white/3 text-foreground hover:-translate-y-0.5 hover:border-primary/55 hover:bg-primary/12",
        ghost: "text-muted-foreground hover:bg-white/6 hover:text-foreground",
      },
      size: {
        sm: "h-10 px-4",
        md: "h-12 px-6",
        lg: "h-11 px-5 text-sm sm:h-12 sm:px-6 sm:text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
