import { Navbar } from '@/components/sections/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { SpecialPriceSection } from '@/components/sections/special-price-section';
import PakejHajiSection from '@/components/sections/pakej-haji-section';
import { TestimonialSection } from '@/components/sections/testimonial-section';
import { ContactSection, FooterSection } from '@/components/sections';
import { BannerPopup } from '@/components/ui/banner-popup';
import { FloatingActionButton } from '@/components/ui/floating-action-button';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <BannerPopup />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SpecialPriceSection />
        <PakejHajiSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <FooterSection />
      <FloatingActionButton />
    </div>
  );
}
