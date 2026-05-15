import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      data-slot="input"
      type={type}
      className={cn(
        "h-11 w-full rounded-md border border-input bg-white/5 px-3 font-body text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/35 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  )
}

function Field({
  className,
  label,
  hint,
  error,
  children,
}: React.ComponentProps<"label"> & {
  label: string
  hint?: string
  error?: string
}) {
  return (
    <label data-slot="field" className={cn("flex flex-col gap-2", className)}>
      <span className="font-control text-xs font-semibold uppercase tracking-normal text-muted-foreground">
        {label}
      </span>
      {children}
      {error ? (
        <span className="font-body text-sm text-[var(--danger)]">{error}</span>
      ) : hint ? (
        <span className="font-body text-sm text-muted-foreground">{hint}</span>
      ) : null}
    </label>
  )
}

export { Field, Input }
