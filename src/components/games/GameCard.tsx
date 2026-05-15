import { ArrowRightIcon, ClockIcon, PlayIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { StatusChip } from "@/components/ui/status-chip"
import { cn } from "@/lib/utils"

type GameStatus = "available" | "active" | "settling" | "coming-soon"

const statusCopy: Record<GameStatus, { label: string; tone: "success" | "info" | "warning" | "neutral" }> = {
  available: { label: "Available", tone: "success" },
  active: { label: "Active round", tone: "info" },
  settling: { label: "Settling", tone: "warning" },
  "coming-soon": { label: "Coming soon", tone: "neutral" },
}

type GameCardProps = {
  title: string
  description: string
  imageSrc: string
  imageAlt?: string
  status?: GameStatus
  minStake?: string
  players?: string
  className?: string
  onPlay?: () => void
}

function GameCard({
  title,
  description,
  imageSrc,
  imageAlt,
  status = "available",
  minStake,
  players,
  className,
  onPlay,
}: GameCardProps) {
  const statusMeta = statusCopy[status]
  const disabled = status === "coming-soon" || status === "settling"

  return (
    <Card className={cn("group overflow-hidden transition-colors hover:border-accent/45", className)}>
      <div className="flex h-52 items-center justify-center bg-[linear-gradient(180deg,rgba(128,134,154,0.26),rgba(128,134,154,0))] p-6">
        <img
          src={imageSrc}
          alt={imageAlt ?? title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle>{title}</CardTitle>
          <StatusChip tone={statusMeta.tone}>{statusMeta.label}</StatusChip>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {(minStake || players) ? (
        <CardContent className="grid grid-cols-2 gap-3">
          {minStake ? (
            <div className="rounded-md bg-white/5 p-3">
              <span className="block font-mono text-xs text-muted-foreground">Min stake</span>
              <strong className="font-body text-sm text-foreground">{minStake}</strong>
            </div>
          ) : null}
          {players ? (
            <div className="rounded-md bg-white/5 p-3">
              <span className="block font-mono text-xs text-muted-foreground">Players</span>
              <strong className="font-body text-sm text-foreground">{players}</strong>
            </div>
          ) : null}
        </CardContent>
      ) : null}
      <CardFooter>
        <Button className="w-full" disabled={disabled} onClick={onPlay}>
          {status === "settling" ? <ClockIcon /> : <PlayIcon />}
          {disabled ? "Unavailable" : "Play"}
          {!disabled ? <ArrowRightIcon /> : null}
        </Button>
      </CardFooter>
    </Card>
  )
}

export { GameCard }
