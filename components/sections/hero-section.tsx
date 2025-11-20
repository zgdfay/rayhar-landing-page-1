'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  fadeInUpSlow,
  itemFade,
  sectionFade,
  staggerContainer,
  viewportMotion,
} from '@/lib/motion';
import { useEffect, useRef } from 'react';

// Normalized partner logos - all with same dimensions for consistency
const partners = [
  {
    src: '/partner/TOURISM-MALAYSIA-LOGO.png',
    alt: 'Tourism Malaysia',
  },
  {
    src: '/partner/MATTA-LOGO.png',
    alt: 'MATTA',
  },
  {
    src: '/partner/BUMITRA-LOGO.png',
    alt: 'Bumitra Malaysia',
  },
  {
    src: '/partner/IATA-LOGO.png',
    alt: 'IATA Accredited Agent',
  },
  {
    src: '/partner/MALAYSIA-AIRLINE-LOGO.png',
    alt: 'Malaysia Airlines',
  },
  {
    src: '/partner/PALNCONGAN-LOGO.png',
    alt: 'Palncongan',
  },
];

// Normalized logo dimensions - responsive sizes
const LOGO_WIDTH_DESKTOP = 180;
const LOGO_HEIGHT_DESKTOP = 90;

export function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) return;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    let rafId: number | null = null;

    const runScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (heroRef.current) {
          const nav = document.querySelector('nav') as HTMLElement | null;
          const heroTop =
            heroRef.current.getBoundingClientRect().top + window.scrollY;
          const offsetTop = heroTop - (nav?.offsetHeight ?? 0);
          window.scrollTo({ top: Math.max(offsetTop, 0), behavior: 'auto' });
        } else {
          window.scrollTo({ top: 0, behavior: 'auto' });
        }
      });
    };

    if (document.readyState === 'complete') {
      runScroll();
    } else {
      window.addEventListener('load', runScroll, { once: true });
    }

    const handlePageShow = () => runScroll();
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return (
    <motion.section
      ref={heroRef}
      id="hero"
      className="relative w-full bg-linear-to-b from-white via-gray-50 to-white py-12 md:py-16 lg:py-20"
      variants={fadeInUpSlow}
      initial="hidden"
      whileInView="visible"
      viewport={viewportMotion}>
      <motion.div
        className="container mx-auto px-4"
        variants={staggerContainer(0.06, 0.08)}>
        {/* Main Content - 2 Columns */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16 lg:mb-20">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-6 md:space-y-8 text-center lg:text-left"
            variants={itemFade}>
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Menuju Perjalanan Suci
              <br />
              <span className="text-primary">Haji & Umrah</span>
              <br />
              yang Berkesan
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Agensi perjalanan haji dan umrah yang dipercayai membantu anda
              mewujudkan impian ibadah suci dengan pakej lengkap, perkhidmatan
              profesional, penginapan selesa, dan bimbingan rohani yang
              mencukupi.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start pt-2">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-lg px-8 py-6 text-base md:text-lg font-medium shadow-md transition-all duration-200 hover:shadow-lg">
                <Link href="#booking">Lihat Pakej</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div
            className="relative flex items-center justify-center"
            variants={itemFade}>
            <div className="relative w-full max-w-lg aspect-square">
              {/* Main Illustration Container */}
              <div className="relative w-full h-full">
                {/* Kaaba/Mosque Icon - Large Center Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    {/* Main Kaaba Shape */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-120 lg:h-120">
                      <Image
                        src="/images/ka'bah3.png"
                        alt="Ka'bah"
                        fill
                        className="object-contain drop-shadow-lg"
                        priority
                        sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                        unoptimized
                      />
                    </div>

                    {/* Decorative Lines - Sound Waves Effect */}
                    <div className="absolute -top-8 -left-8 -right-8 -bottom-8 -z-10">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border-2 border-primary/20 rounded-full animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-2 border-primary/15 rounded-full [animation-delay:150ms]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 lg:w-md lg:h-112 border-2 border-primary/10 rounded-full [animation-delay:300ms]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements - Circles and Shapes */}
                <div className="absolute top-8 left-8 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute top-16 right-12 w-3 h-3 bg-primary/60 rounded-full animate-pulse [animation-delay:100ms]"></div>
                <div className="absolute bottom-20 left-12 w-3 h-3 bg-primary/60 rounded-full animate-pulse [animation-delay:200ms]"></div>
                <div className="absolute bottom-12 right-8 w-5 h-5 bg-primary transform rotate-45"></div>

                {/* Icon Stack - Right Side */}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partner Section */}
        <motion.div
          className="py-6 md:py-8 lg:py-10 border-t border-gray-200"
          variants={sectionFade}>
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-xs md:text-sm font-medium text-gray-500 mb-3 sm:mb-4 md:mb-6 lg:mb-8 tracking-wider px-4">
              Dipercayai & Bekerjasama Dengan
            </p>

            {/* Partner Logos - Grid 2 rows on mobile, inline on desktop */}
            <motion.div
              className="grid grid-cols-3 gap-4 sm:gap-6 md:flex md:items-center md:justify-center md:gap-6 lg:gap-8 xl:gap-10 px-4"
              variants={staggerContainer(0.05, 0.07)}>
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.alt}
                  className="flex items-center justify-center w-full h-[50px] sm:h-[60px] md:w-[120px] md:h-[60px] lg:w-[180px] lg:h-[90px]"
                  variants={itemFade}>
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={LOGO_WIDTH_DESKTOP}
                    height={LOGO_HEIGHT_DESKTOP}
                    className="object-contain w-full h-full"
                    priority={index < 3}
                    sizes="(max-width: 768px) 33vw, (max-width: 1024px) 120px, 180px"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;
