import { CheckCircle2Icon, PlugZapIcon, WalletIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { StatusChip } from "@/components/ui/status-chip"
import { cn } from "@/lib/utils"

type WalletSummaryProps = {
  address?: string
  balance?: string
  network?: string
  connected?: boolean
  className?: string
  onConnect?: () => void
  onDisconnect?: () => void
}

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

function WalletSummary({
  address,
  balance,
  network,
  connected = Boolean(address),
  className,
  onConnect,
  onDisconnect,
}: WalletSummaryProps) {
  if (!connected) {
    return (
      <Button className={className} onClick={onConnect}>
        <PlugZapIcon />
        Connect wallet
      </Button>
    )
  }

  return (
    <div
      data-slot="wallet-summary"
      className={cn(
        "flex flex-wrap items-center gap-2 rounded-md border border-border bg-card px-3 py-2",
        className
      )}
    >
      <StatusChip tone="success">
        <CheckCircle2Icon className="size-3.5" />
        {network ?? "Connected"}
      </StatusChip>
      <span className="inline-flex items-center gap-2 font-mono text-sm text-foreground">
        <WalletIcon className="size-4 text-primary" />
        {address ? shortenAddress(address) : "Wallet"}
      </span>
      {balance ? <span className="font-mono text-sm text-muted-foreground">{balance}</span> : null}
      {onDisconnect ? (
        <Button variant="ghost" size="sm" onClick={onDisconnect}>
          Disconnect
        </Button>
      ) : null}
    </div>
  )
}

export { WalletSummary, shortenAddress }
