import type { ReactNode } from "react"

import { Card } from "@/components/ui/card"

type AuthPanelProps = {
  title: string
  description: string
  children: ReactNode
  footer: ReactNode
}

export default function AuthPanel({ title, description, children, footer }: AuthPanelProps) {
  return (
    <Card className="border-accent/25 bg-card/95 p-6 shadow-[var(--shadow-raised)] sm:p-8">
      <div className="mb-8 flex flex-col gap-2 text-center sm:text-left">
        <p className="font-mono text-xs font-medium uppercase text-primary">Cephei account</p>
        <h2 className="font-heading text-3xl font-semibold leading-tight text-foreground">{title}</h2>
        <p className="font-body text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>

      {children}

      <div className="mt-6 border-t border-border pt-5 text-center font-body text-sm text-muted-foreground">
        {footer}
      </div>
    </Card>
  )
}
