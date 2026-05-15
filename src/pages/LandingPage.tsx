import Navbar from "@/components/layout/Navbar"
import AvailableGamesSection from "@/components/landing/AvailableGamesSection"
import FAQSection from "@/components/landing/FAQSection"
import Footer from "@/components/landing/Footer"
import HeroSection from "@/components/landing/HeroSection"
import HowItWorksSection from "@/components/landing/HowItWorksSection"
import ScrollReveal from "@/components/landing/ScrollReveal"
import WhyCepheiSection from "@/components/landing/WhyCepheiSection"

type LandingPageProps = {
  onLogIn: () => void
  onSignUp: () => void
}

export default function LandingPage({ onLogIn, onSignUp }: LandingPageProps) {
  return (
    <div className="min-h-full w-full overflow-x-hidden bg-background text-foreground">
      <Navbar onLogIn={onLogIn} onSignUp={onSignUp} />

      <main className="flex flex-col gap-14 pb-12 sm:gap-[72px]">
        <HeroSection onStartPlaying={onSignUp} />
        <ScrollReveal>
          <HowItWorksSection />
        </ScrollReveal>
        <ScrollReveal>
          <AvailableGamesSection />
        </ScrollReveal>
        <ScrollReveal>
          <WhyCepheiSection />
        </ScrollReveal>
        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  )
}
