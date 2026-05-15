import { Button } from "@/components/ui/button"
import { Field, Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type StakeInputProps = {
  value: string
  currency?: string
  balance?: string
  min?: string
  max?: string
  error?: string
  disabled?: boolean
  className?: string
  onChange: (value: string) => void
  onQuickAmount?: (amount: string) => void
}

const quickAmounts = ["25%", "50%", "Max"]

function StakeInput({
  value,
  currency = "ETH",
  balance,
  min,
  max,
  error,
  disabled,
  className,
  onChange,
  onQuickAmount,
}: StakeInputProps) {
  const hintParts = [
    balance ? `Balance: ${balance}` : null,
    min ? `Min: ${min}` : null,
    max ? `Max: ${max}` : null,
  ].filter(Boolean)

  return (
    <div className={cn("rounded-md border border-border bg-card p-4", className)}>
      <Field label="Stake amount" hint={hintParts.join("  |  ")} error={error}>
        <div className="flex rounded-md border border-input bg-white/5 focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/35">
          <Input
            aria-invalid={Boolean(error)}
            className="border-0 bg-transparent focus-visible:ring-0"
            disabled={disabled}
            inputMode="decimal"
            placeholder="0.00"
            value={value}
            onChange={(event) => onChange(event.target.value)}
          />
          <span className="flex items-center px-3 font-mono text-sm text-muted-foreground">{currency}</span>
        </div>
      </Field>
      {onQuickAmount ? (
        <div className="mt-3 flex gap-2">
          {quickAmounts.map((amount) => (
            <Button
              key={amount}
              type="button"
              variant="secondary"
              size="sm"
              disabled={disabled}
              onClick={() => onQuickAmount(amount)}
            >
              {amount}
            </Button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export { StakeInput }
