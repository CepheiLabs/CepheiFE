import {
  AlertCircleIcon,
  CheckCircle2Icon,
  CircleIcon,
  Clock3Icon,
  Loader2Icon,
  XCircleIcon,
} from "lucide-react"

import { StatusChip } from "@/components/ui/status-chip"
import { cn } from "@/lib/utils"

type TransactionStepStatus = "idle" | "active" | "complete" | "failed"

type TransactionStep = {
  id: string
  title: string
  description?: string
  status: TransactionStepStatus
}

type TransactionTimelineProps = {
  steps: TransactionStep[]
  className?: string
}

const statusTone: Record<TransactionStepStatus, "neutral" | "info" | "success" | "danger"> = {
  idle: "neutral",
  active: "info",
  complete: "success",
  failed: "danger",
}

function StepIcon({ status }: { status: TransactionStepStatus }) {
  if (status === "complete") return <CheckCircle2Icon className="size-5 text-[var(--success)]" />
  if (status === "failed") return <XCircleIcon className="size-5 text-[var(--danger)]" />
  if (status === "active") return <Loader2Icon className="size-5 animate-spin text-accent" />
  return <CircleIcon className="size-5 text-muted-foreground" />
}

function TransactionTimeline({ steps, className }: TransactionTimelineProps) {
  return (
    <ol data-slot="transaction-timeline" className={cn("space-y-4", className)}>
      {steps.map((step, index) => (
        <li key={step.id} className="grid grid-cols-[auto_1fr] gap-3">
          <div className="flex flex-col items-center">
            <StepIcon status={step.status} />
            {index < steps.length - 1 ? <span className="mt-2 h-full w-px bg-border" /> : null}
          </div>
          <div className="min-w-0 pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-body text-sm font-bold text-foreground">{step.title}</h3>
              <StatusChip tone={statusTone[step.status]}>{step.status}</StatusChip>
            </div>
            {step.description ? (
              <p className="mt-1 font-body text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  )
}

const defaultTransactionSteps: TransactionStep[] = [
  {
    id: "wallet-confirmation",
    title: "Wallet confirmation",
    description: "The player approves the game transaction in their wallet.",
    status: "idle",
  },
  {
    id: "pending-chain",
    title: "Pending on-chain",
    description: "The transaction has been submitted and is waiting for confirmation.",
    status: "idle",
  },
  {
    id: "settled",
    title: "Settled",
    description: "The game result is confirmed from the contract event.",
    status: "idle",
  },
]

function TransactionAlert({
  status,
  title,
  children,
  className,
}: {
  status: "pending" | "success" | "error"
  title: string
  children?: React.ReactNode
  className?: string
}) {
  const Icon = status === "pending" ? Clock3Icon : status === "success" ? CheckCircle2Icon : AlertCircleIcon
  const colorClass =
    status === "pending"
      ? "border-[var(--warning)]/40 bg-[var(--warning)]/10 text-[var(--warning)]"
      : status === "success"
        ? "border-[var(--success)]/40 bg-[var(--success)]/10 text-[var(--success)]"
        : "border-[var(--danger)]/40 bg-[var(--danger)]/10 text-[var(--danger)]"

  return (
    <div className={cn("flex gap-3 rounded-md border p-4", colorClass, className)}>
      <Icon className="mt-0.5 size-5 shrink-0" />
      <div className="min-w-0">
        <h3 className="font-body text-sm font-bold">{title}</h3>
        {children ? <div className="mt-1 font-body text-sm leading-relaxed text-foreground">{children}</div> : null}
      </div>
    </div>
  )
}

export { defaultTransactionSteps, TransactionAlert, TransactionTimeline }
export type { TransactionStep, TransactionStepStatus }
