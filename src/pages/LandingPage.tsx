import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import AvailableGamesSection from '@/components/landing/AvailableGamesSection';
import WhyCepheiSection from '@/components/landing/WhyCepheiSection';
import FAQSection from '@/components/landing/FAQSection';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div
      style={{
        backgroundColor: '#141721',
        minHeight: '100%',
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <Navbar />

      <main
        className="flex flex-col"
        style={{ gap: '72px', paddingBottom: '48px' }}
      >
        <HeroSection />
        <HowItWorksSection />
        <AvailableGamesSection />
        <WhyCepheiSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
