import { ArrowRightIcon, WalletIcon } from "lucide-react"

import AuthLayout from "@/components/auth/AuthLayout"
import AuthPanel from "@/components/auth/AuthPanel"
import AuthTextButton from "@/components/auth/AuthTextButton"
import { Button } from "@/components/ui/button"
import { Field, Input } from "@/components/ui/input"

type SignUpPageProps = {
  onBackHome: () => void
  onLogIn: () => void
  onComplete: () => void
}

export default function SignUpPage({ onBackHome, onLogIn, onComplete }: SignUpPageProps) {
  return (
    <AuthLayout
      eyebrow="Create account"
      title="Join Cephei and start playing verified games."
      description="Set up your profile now. Wallet connection, game state, and transaction checks can plug into this flow later."
      onBackHome={onBackHome}
    >
      <AuthPanel
        title="Sign Up"
        description="Create a prototype account to continue into the Cephei experience."
        footer={
          <>
            Already have an account? <AuthTextButton onClick={onLogIn}>Log in</AuthTextButton>
          </>
        }
      >
        <form
          className="flex flex-col gap-5"
          onSubmit={(event) => {
            event.preventDefault()
            onComplete()
          }}
        >
          <Field label="Display name">
            <Input type="text" placeholder="Cephei player" autoComplete="name" />
          </Field>

          <Field label="Email address">
            <Input type="email" placeholder="you@example.com" autoComplete="email" />
          </Field>

          <Field label="Password">
            <Input type="password" placeholder="Create password" autoComplete="new-password" />
          </Field>

          <label className="flex items-start gap-2 font-body text-sm leading-relaxed text-muted-foreground">
            <input type="checkbox" className="mt-1 size-4 shrink-0 accent-[var(--action-gold)]" />
            I understand this is a prototype flow and game transactions will be verified on-chain later.
          </label>

          <Button type="submit" size="lg" className="mt-1 w-full">
            Create Account
            <ArrowRightIcon />
          </Button>

          <Button type="button" variant="outline" size="lg" className="w-full" onClick={onComplete}>
            <WalletIcon />
            Sign up with Wallet
          </Button>
        </form>
      </AuthPanel>
    </AuthLayout>
  )
}
