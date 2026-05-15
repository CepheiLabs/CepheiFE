import { cn } from "@/lib/utils"

type AuthTextButtonProps = {
  children: string
  onClick: () => void
  className?: string
}

export default function AuthTextButton({ children, onClick, className }: AuthTextButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn("font-control font-semibold text-primary transition-colors hover:text-[var(--action-gold-hover)]", className)}
    >
      {children}
    </button>
  )
}
