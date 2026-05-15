import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-card">
      <div className="flex h-[64px] items-center justify-between px-5 sm:h-[68px] sm:px-6 md:px-8">
        <a
          href="#home"
          className="font-logo text-[32px] font-semibold leading-none text-[var(--brand-teal)] sm:text-4xl"
        >
          CEPHEI
        </a>

        <div className="hidden items-center gap-4 sm:flex">
          <Button variant="outline" size="lg" className="h-11 px-6 font-mono text-base font-medium">
            Log In
          </Button>
          <Button size="lg" className="h-11 px-6 text-base">
            Start Playing
          </Button>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="h-9 px-3 font-mono text-sm sm:hidden"
        >
          Log In
        </Button>

      </div>
    </nav>
  )
}
