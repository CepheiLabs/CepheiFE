import { ArrowRightIcon, WalletIcon } from "lucide-react"

import AuthLayout from "@/components/auth/AuthLayout"
import AuthPanel from "@/components/auth/AuthPanel"
import AuthTextButton from "@/components/auth/AuthTextButton"
import { Button } from "@/components/ui/button"
import { Field, Input } from "@/components/ui/input"

type LoginPageProps = {
  onBackHome: () => void
  onSignUp: () => void
  onComplete: () => void
}

export default function LoginPage({ onBackHome, onSignUp, onComplete }: LoginPageProps) {
  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Sign in and get back to the table."
      description="Use your Cephei profile to continue tracking games, stakes, wallets, and verified match outcomes."
      onBackHome={onBackHome}
    >
      <AuthPanel
        title="Log In"
        description="Enter your account details. This prototype does not validate credentials yet."
        footer={
          <>
            New to Cephei? <AuthTextButton onClick={onSignUp}>Create an account</AuthTextButton>
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
          <Field label="Email address">
            <Input type="email" placeholder="you@example.com" autoComplete="email" />
          </Field>

          <Field label="Password">
            <Input type="password" placeholder="Enter password" autoComplete="current-password" />
          </Field>

          <div className="flex items-center justify-between gap-3">
            <label className="flex items-center gap-2 font-body text-sm text-muted-foreground">
              <input type="checkbox" className="size-4 accent-[var(--action-gold)]" />
              Remember me
            </label>
            <button type="button" className="font-body text-sm text-accent hover:text-accent/80">
              Forgot password?
            </button>
          </div>

          <Button type="submit" size="lg" className="mt-1 w-full">
            Log In
            <ArrowRightIcon />
          </Button>

          <Button type="button" variant="outline" size="lg" className="w-full" onClick={onComplete}>
            <WalletIcon />
            Continue with Wallet
          </Button>
        </form>
      </AuthPanel>
    </AuthLayout>
  )
}
