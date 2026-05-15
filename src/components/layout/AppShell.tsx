import * as React from "react"

import { cn } from "@/lib/utils"

type AppShellProps = React.ComponentProps<"div"> & {
  header?: React.ReactNode
  sidebar?: React.ReactNode
}

function AppShell({ header, sidebar, children, className, ...props }: AppShellProps) {
  return (
    <div
      data-slot="app-shell"
      className={cn("min-h-screen bg-background text-foreground", className)}
      {...props}
    >
      {header}
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:px-8">
        {sidebar ? (
          <aside className="hidden w-64 shrink-0 lg:block" data-slot="app-shell-sidebar">
            {sidebar}
          </aside>
        ) : null}
        <main className="min-w-0 flex-1" data-slot="app-shell-main">
          {children}
        </main>
      </div>
    </div>
  )
}

function PageHeader({
  className,
  title,
  eyebrow,
  description,
  actions,
}: React.ComponentProps<"header"> & {
  title: string
  eyebrow?: string
  description?: string
  actions?: React.ReactNode
}) {
  return (
    <header
      data-slot="page-header"
      className={cn("flex flex-col gap-4 pb-6 md:flex-row md:items-end md:justify-between", className)}
    >
      <div className="flex max-w-3xl flex-col gap-2">
        {eyebrow ? (
          <span className="font-mono text-xs font-medium uppercase tracking-normal text-primary">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="font-body text-base leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {actions ? <div className="flex shrink-0 items-center gap-3">{actions}</div> : null}
    </header>
  )
}

export { AppShell, PageHeader }
