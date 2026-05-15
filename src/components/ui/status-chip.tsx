import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const statusChipVariants = cva(
  "inline-flex h-7 items-center gap-1.5 rounded-md border px-2.5 font-mono text-xs font-medium",
  {
    variants: {
      tone: {
        neutral: "border-border bg-white/5 text-muted-foreground",
        info: "border-accent/40 bg-accent/10 text-accent",
        success: "border-[var(--success)]/40 bg-[var(--success)]/10 text-[var(--success)]",
        warning: "border-[var(--warning)]/45 bg-[var(--warning)]/10 text-[var(--warning)]",
        danger: "border-[var(--danger)]/45 bg-[var(--danger)]/10 text-[var(--danger)]",
        gold: "border-primary/45 bg-primary/10 text-primary",
      },
    },
    defaultVariants: {
      tone: "neutral",
    },
  }
)

function StatusChip({
  className,
  tone,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof statusChipVariants>) {
  return <span data-slot="status-chip" className={cn(statusChipVariants({ tone, className }))} {...props} />
}

export { StatusChip, statusChipVariants }
