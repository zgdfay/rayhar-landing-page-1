'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  itemFade,
  sectionFade,
  staggerContainer,
  viewportMotion,
} from '@/lib/motion';
import { useRef, useState, useEffect } from 'react';

interface HotelInfo {
  name: string;
  abbreviation: string;
  distance: string;
  destination: string;
}

interface PakejHaji {
  id: string;
  hotelName: string;
  hotelSubName?: string;
  rating: number;
  distance: string;
  destination: string;
  makkah?: HotelInfo;
  madinah?: HotelInfo;
  aziziah?: HotelInfo;
  description: string;
  image: string;
  detailUrl: string;
  slug?: string; // Slug from API
  colorScheme?:
    | 'pink'
    | 'blue'
    | 'red'
    | 'green'
    | 'orange'
    | 'purple'
    | 'yellow'
    | 'teal'; // Optional color scheme
}

const pakejHaji: PakejHaji[] = [
  {
    id: '1',
    hotelName: 'Safwah',
    hotelSubName: 'ROYAL ORCHID PLATINUM',
    rating: 5,
    distance: '50',
    destination: 'DATARAN MASJIDIL HARAM',
    makkah: {
      name: 'Al Safwah Royale Orchid',
      abbreviation: 'SRO',
      distance: '50',
      destination: 'Dataran Masjidil Haram',
    },
    madinah: {
      name: 'Biltmore Madinah Hotel',
      abbreviation: 'BMH',
      distance: '15',
      destination: 'Dataran Masjidil Nabawi',
    },
    description:
      'Rayhar menawarkan Pakej Safwah dengan penginapan selesa hanya 50 meter dari dataran Masjidil Haram dan Hotel Medina Oberoi hanya 15 meter dari dataran Masjid Nabawi. Pakej ini termasuk tiket Haramain Speed Train sektor Makkah - Madinah.',
    image: '/pakej-pic/PAKEJ HAJI-03.png',
    detailUrl: '/pakej-haji/safwah-royal-orchid',
    colorScheme: 'pink',
  },
  {
    id: '2',
    hotelName: 'Safwah',
    hotelSubName: 'ROYAL ORCHID GOLD',
    rating: 5,
    distance: '50',
    destination: 'DATARAN MASJIDIL HARAM',
    makkah: {
      name: 'Al Safwah Royale Orchid',
      abbreviation: 'SRO',
      distance: '50',
      destination: 'Dataran Masjidil Haram',
    },
    madinah: {
      name: 'Dallah Taibah',
      abbreviation: 'DT',
      distance: '90',
      destination: 'Dataran Masjidil Nabawi',
    },
    aziziah: {
      name: 'Hotel Zahrat Al Yasser',
      abbreviation: '',
      distance: '480',
      destination: 'Kompleks Jamarat',
    },
    description:
      'Rayhar menawarkan Pakej Safwah dengan penginapan selesa hanya 50 meter dari dataran Masjidil Haram dan Hotel Medina Oberoi hanya 15 meter dari dataran Masjid Nabawi. Pakej ini termasuk tiket Haramain Speed Train sektor Makkah - Madinah.',
    image: '/pakej-pic/PAKEJ HAJI-02.png',
    detailUrl: '/pakej-haji/safwah-royal-orchid',
    colorScheme: 'pink',
  },
  {
    id: '3',
    hotelName: 'Safwah',
    hotelSubName: 'ROYAL ORCHID SILVER',
    rating: 5,
    distance: '50',
    destination: 'DATARAN MASJIDIL HARAM',
    makkah: {
      name: 'Al Safwah Royale Orchid',
      abbreviation: 'SRO',
      distance: '50',
      destination: 'Dataran Masjidil Haram',
    },
    madinah: {
      name: 'Dallah Taibah',
      abbreviation: 'DT',
      distance: '90',
      destination: 'Dataran Masjidil Nabawi',
    },
    aziziah: {
      name: 'Hotel Zahrat Al Yasser',
      abbreviation: '',
      distance: '480',
      destination: 'Kompleks Jamarat',
    },
    description:
      'Rayhar menawarkan Pakej Safwah dengan penginapan selesa hanya 50 meter dari dataran Masjidil Haram dan Hotel Medina Oberoi hanya 15 meter dari dataran Masjid Nabawi. Pakej ini termasuk tiket Haramain Speed Train sektor Makkah - Madinah.',
    image: '/pakej-pic/PAKEJ HAJI-01.png',
    detailUrl: '/pakej-haji/safwah-royal-orchid',
    colorScheme: 'pink',
  },
  {
    id: '4',
    hotelName: 'Olayan',
    hotelSubName: 'AJYAD',
    rating: 5,
    distance: '140',
    destination: 'DATARAN MASJIDIL HARAM',
    makkah: {
      name: 'Hotel Olayan Ajyad',
      abbreviation: '',
      distance: '140',
      destination: 'Dataran Masjidil Haram',
    },
    madinah: {
      name: 'Hotel Dallah Taibah',
      abbreviation: '',
      distance: '50',
      destination: 'Dataran Masjidil Nabawi',
    },
    description:
      'Rayhar menawarkan Pakej Safwah dengan penginapan selesa hanya 50 meter dari dataran Masjidil Haram dan Hotel Medina Oberoi hanya 15 meter dari dataran Masjid Nabawi. Pakej ini termasuk tiket Haramain Speed Train sektor Makkah - Madinah.',
    image: '/pakej-pic/PAKEJ HAJI-06.png',
    detailUrl: '/pakej-haji/safwah-royal-orchid',
    colorScheme: 'pink',
  },
  {
    id: '5',
    hotelName: 'Olayan',
    hotelSubName: 'AZIZIAH',
    rating: 5,
    distance: '140',
    destination: 'DATARAN MASJIDIL HARAM',
    makkah: {
      name: 'Hotel Olayan Ajyad',
      abbreviation: '',
      distance: '140',
      destination: 'Dataran Masjidil Haram',
    },
    madinah: {
      name: 'Hotel Dallah Taibah',
      abbreviation: '',
      distance: '50',
      destination: 'Dataran Masjidil Nabawi',
    },
    aziziah: {
      name: 'Hotel Zahrat Al Yasser',
      abbreviation: '',
      distance: '480',
      destination: 'Kompleks Jamarat',
    },
    description:
      'Rayhar menawarkan Pakej Safwah dengan penginapan selesa hanya 50 meter dari dataran Masjidil Haram dan Hotel Medina Oberoi hanya 15 meter dari dataran Masjid Nabawi. Pakej ini termasuk tiket Haramain Speed Train sektor Makkah - Madinah.',
    image: '/pakej-pic/PAKEJ HAJI-07.png',
    detailUrl: '/pakej-haji/safwah-royal-orchid',
    colorScheme: 'pink',
  },
  {
    id: '6',
    hotelName: 'Orinsis',
    rating: 5,
    distance: '190',
    destination: 'DATARAN MASJIDIL HARAM',
    makkah: {
      name: 'Hotel Orinsis',
      abbreviation: '',
      distance: '190',
      destination: 'Dataran Masjidil Haram',
    },
    madinah: {
      name: 'Hotel Dallah Taibah',
      abbreviation: '',
      distance: '50',
      destination: 'Dataran Masjidil Nabawi',
    },
    description:
      'Rayhar menawarkan Pakej Safwah dengan penginapan selesa hanya 50 meter dari dataran Masjidil Haram dan Hotel Medina Oberoi hanya 15 meter dari dataran Masjid Nabawi. Pakej ini termasuk tiket Haramain Speed Train sektor Makkah - Madinah.',
    image: '/pakej-pic/PAKEJ HAJI-04.png',
    detailUrl: '/pakej-haji/safwah-royal-orchid',
    colorScheme: 'pink',
  },
  {
    id: '7',
    hotelName: 'Elaf',
    hotelSubName: 'AL BAIT',
    rating: 5,
    distance: '190',
    destination: 'DATARAN MASJIDIL HARAM',
    makkah: {
      name: 'Hotel Elaf Al Bait',
      abbreviation: '',
      distance: '190',
      destination: 'Dataran Masjidil Haram',
    },
    madinah: {
      name: 'Hotel Dallah Taibah',
      abbreviation: '',
      distance: '50',
      destination: 'Dataran Masjidil Nabawi',
    },
    description:
      'Rayhar menawarkan Pakej Safwah dengan penginapan selesa hanya 50 meter dari dataran Masjidil Haram dan Hotel Medina Oberoi hanya 15 meter dari dataran Masjid Nabawi. Pakej ini termasuk tiket Haramain Speed Train sektor Makkah - Madinah.',
    image: '/pakej-pic/PAKEJ HAJI-05.png',
    detailUrl: '/pakej-haji/safwah-royal-orchid',
    colorScheme: 'pink',
  },
  {
    id: '8',
    hotelName: 'Mira',
    hotelSubName: 'AJYAD',
    rating: 5,
    distance: '400',
    destination: 'DATARAN MASJIDIL HARAM',
    makkah: {
      name: 'Hotel Mira Ajyad',
      abbreviation: '',
      distance: '400',
      destination: 'Dataran Masjidil Haram',
    },
    madinah: {
      name: 'Hotel Dallah Taibah',
      abbreviation: '',
      distance: '50',
      destination: 'Dataran Masjidil Nabawi',
    },
    description:
      'Rayhar menawarkan Pakej Safwah dengan penginapan selesa hanya 50 meter dari dataran Masjidil Haram dan Hotel Medina Oberoi hanya 15 meter dari dataran Masjid Nabawi. Pakej ini termasuk tiket Haramain Speed Train sektor Makkah - Madinah.',
    image: '/pakej-pic/PAKEJ HAJI-08.png',
    detailUrl: '/pakej-haji/safwah-royal-orchid',
    colorScheme: 'pink',
  },
];

export function PakejHajiSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [slugMap, setSlugMap] = useState<Record<string, string>>({});

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const updateScrollButtons = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    };

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const cardWidth =
        scrollContainer.querySelector('.shrink-0')?.clientWidth || 340;
      const gap = 24; // gap-6 = 24px
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(index, pakejHaji.length - 1));
      updateScrollButtons();
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    updateScrollButtons();

    // Check on resize
    const resizeObserver = new ResizeObserver(updateScrollButtons);
    resizeObserver.observe(scrollContainer);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
    };
  }, []);

  // Fetch slug mapping from API
  useEffect(() => {
    const fetchSlugMapping = async () => {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_BOOKING_BASE_URL ||
          'https://rayhar-frontend-ui-web-booking.netlify.app';
        const response = await fetch(`${baseUrl}/api/hajj`);
        const data = await response.json();

        if (data.success && data.packages) {
          const mapping: Record<string, string> = {};

          // Create mapping based on hotel name and subname
          data.packages.forEach((pkg: any) => {
            const title = pkg.title?.toLowerCase() || '';
            const slug = pkg.slug || '';

            // Map based on title patterns - more specific matching
            if (title.includes('safwah') && title.includes('platinum')) {
              mapping['safwah-platinum'] = slug;
            } else if (
              title.includes('safwah') &&
              title.includes('gold') &&
              !title.includes('silver')
            ) {
              mapping['safwah-gold'] = slug;
            } else if (title.includes('safwah') && title.includes('silver')) {
              mapping['safwah-silver'] = slug;
            } else if (
              title.includes('olayan') &&
              title.includes('ajyad') &&
              !title.includes('aziziah')
            ) {
              mapping['olayan-ajyad'] = slug;
            } else if (title.includes('olayan') && title.includes('aziziah')) {
              mapping['olayan-aziziah'] = slug;
            } else if (title.includes('orinsis')) {
              mapping['orinsis'] = slug;
            } else if (title.includes('elaf') && title.includes('bait')) {
              mapping['elaf'] = slug;
            } else if (title.includes('mira') && title.includes('ajyad')) {
              mapping['mira'] = slug;
            }
          });

          setSlugMap(mapping);
        }
      } catch (error) {
        console.error('Error fetching slug mapping:', error);
      }
    };

    fetchSlugMapping();
  }, []);

  const scrollToIndex = (index: number) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cardWidth =
      scrollContainer.querySelector('.shrink-0')?.clientWidth || 340;
    const gap = 24;
    const scrollPosition = index * (cardWidth + gap);
    scrollContainer.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  };

  const scroll = (direction: 'left' | 'right') => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cardWidth =
      scrollContainer.querySelector('.shrink-0')?.clientWidth || 340;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    scrollContainer.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Get slug for a pakej
  const getSlugForPakej = (pakej: PakejHaji): string | null => {
    const hotelName = pakej.hotelName.toLowerCase();
    const hotelSubName = pakej.hotelSubName?.toLowerCase() || '';

    // Try to match with slug map
    if (hotelName === 'safwah') {
      if (hotelSubName.includes('platinum')) {
        return slugMap['safwah-platinum'] || null;
      } else if (hotelSubName.includes('gold')) {
        return slugMap['safwah-gold'] || null;
      } else if (hotelSubName.includes('silver')) {
        return slugMap['safwah-silver'] || null;
      }
      // Default to platinum if no subname specified
      return slugMap['safwah-platinum'] || null;
    } else if (hotelName === 'olayan') {
      if (hotelSubName.includes('aziziah')) {
        return slugMap['olayan-aziziah'] || null;
      } else if (hotelSubName.includes('ajyad')) {
        return slugMap['olayan-ajyad'] || null;
      }
      // Default to ajyad if no subname specified
      return slugMap['olayan-ajyad'] || null;
    } else if (hotelName === 'orinsis') {
      return slugMap['orinsis'] || null;
    } else if (hotelName === 'elaf') {
      return slugMap['elaf'] || null;
    } else if (hotelName === 'mira') {
      return slugMap['mira'] || null;
    }

    return null;
  };

  // Handle button click to redirect to detail page
  const handleDetailClick = (pakej: PakejHaji) => {
    const slug = getSlugForPakej(pakej);
    const baseUrl =
      process.env.NEXT_PUBLIC_BOOKING_BASE_URL ||
      'https://rayhar-frontend-ui-web-booking.netlify.app';
    if (slug) {
      // Redirect to detail page tanpa tab baru
      window.location.href = `${baseUrl}/detailhajj?slug=${slug}&agent_id=BRANCH-978764923&agent_name=HQ&agent_role=branch`;
    } else {
      // Fallback to original detailUrl
      window.location.href = pakej.detailUrl;
    }
  };

  return (
    <motion.section
      id="pakej-haji"
      className="relative w-full bg-linear-to-b from-white via-gray-50 to-white py-16 md:py-20 lg:py-24"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={viewportMotion}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="container mx-auto px-4 max-w-7xl relative z-10"
        variants={staggerContainer()}>
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16 lg:mb-20 text-center"
          variants={itemFade}>
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm md:text-base">
              Pakej Haji 2026
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Pakej Haji{' '}
            <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Musim 1447H
            </span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Pilih pakej haji yang sesuai dengan keperluan dan kemampuan anda.
            Setiap pakej dilengkapi dengan fasilitas lengkap untuk memastikan
            pengalaman ibadah haji yang sempurna.
          </p>
        </motion.div>

        {/* Pakej Cards Grid */}
        <motion.div
          ref={scrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory -mx-4 px-6 md:mx-0 md:px-0"
          variants={staggerContainer(0.08, 0.08)}>
          {pakejHaji.map((pakej) => {
            const isBlue = pakej.colorScheme === 'blue';
            const isRed = pakej.colorScheme === 'red';
            const isGreen = pakej.colorScheme === 'green';
            const isOrange = pakej.colorScheme === 'orange';
            const isPurple = pakej.colorScheme === 'purple';
            const isYellow = pakej.colorScheme === 'yellow';
            const isTeal = pakej.colorScheme === 'teal';
            const gradientClass = isBlue
              ? 'bg-gradient-to-br from-blue-500 to-blue-600'
              : isRed
              ? 'bg-gradient-to-br from-red-500 to-red-600'
              : isGreen
              ? 'bg-gradient-to-br from-green-500 to-green-600'
              : isOrange
              ? 'bg-gradient-to-br from-orange-500 to-orange-600'
              : isPurple
              ? 'bg-gradient-to-br from-purple-500 to-purple-600'
              : isYellow
              ? 'bg-gradient-to-br from-yellow-500 to-yellow-600'
              : isTeal
              ? 'bg-gradient-to-br from-teal-500 to-teal-600'
              : 'bg-gradient-to-br from-pink-500 to-pink-600';

            return (
              <motion.div
                key={pakej.id}
                className="shrink-0 w-[340px] md:w-[380px] lg:w-[400px] snap-center px-2 md:px-0"
                variants={itemFade}>
                <Card className="bg-white border border-gray-200 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl rounded-xl">
                  {/* Hotel Image */}
                  <div className="relative h-48 md:h-56 w-full bg-gray-100">
                    {pakej.image && (
                      <Image
                        src={pakej.image}
                        alt={pakej.hotelName}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 340px, (max-width: 1024px) 380px, 400px"
                      />
                    )}
                  </div>

                  <CardContent className="p-4 md:p-5 flex flex-col grow">
                    {/* Hotel Name */}
                    <div className="mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-0.5">
                        {pakej.hotelName}
                      </h3>
                      {pakej.hotelSubName && (
                        <h4 className="text-base md:text-lg font-semibold text-gray-700">
                          {pakej.hotelSubName}
                        </h4>
                      )}
                    </div>

                    {/* Hotel Info - Makkah & Madinah */}
                    <div className="space-y-2 mb-3">
                      {/* Makkah Hotel */}
                      {pakej.makkah && (
                        <div className="bg-gray-50 rounded-md p-2 border border-gray-200">
                          <p className="text-xs font-semibold text-gray-900 mb-0.5">
                            Makkah:
                          </p>
                          <p className="text-xs text-gray-700 leading-snug">
                            <span className="font-semibold">
                              {pakej.makkah.name}
                              {pakej.makkah.abbreviation &&
                                ` (${pakej.makkah.abbreviation})`}
                            </span>{' '}
                            atau setaraf, {pakej.makkah.distance}m ± ke{' '}
                            {pakej.makkah.destination}
                          </p>
                        </div>
                      )}

                      {/* Madinah Hotel */}
                      {pakej.madinah && (
                        <div className="bg-gray-50 rounded-md p-2 border border-gray-200">
                          <p className="text-xs font-semibold text-gray-900 mb-0.5">
                            Madinah:
                          </p>
                          <p className="text-xs text-gray-700 leading-snug">
                            <span className="font-semibold">
                              {pakej.madinah.name}
                              {pakej.madinah.abbreviation &&
                                ` (${pakej.madinah.abbreviation})`}
                            </span>{' '}
                            atau setaraf, {pakej.madinah.distance}m ± ke{' '}
                            {pakej.madinah.destination}
                          </p>
                        </div>
                      )}

                      {/* Aziziah Hotel */}
                      {pakej.aziziah && (
                        <div className="bg-gray-50 rounded-md p-2 border border-gray-200">
                          <p className="text-xs font-semibold text-gray-900 mb-0.5">
                            Aziziah:
                          </p>
                          <p className="text-xs text-gray-700 leading-snug">
                            <span className="font-semibold">
                              {pakej.aziziah.name}
                              {pakej.aziziah.abbreviation &&
                                ` (${pakej.aziziah.abbreviation})`}
                            </span>{' '}
                            atau setaraf, {pakej.aziziah.distance}M ± ke{' '}
                            {pakej.aziziah.destination}
                          </p>
                        </div>
                      )}

                      {/* Fallback to old format if makkah/madinah not available */}
                      {!pakej.makkah && !pakej.madinah && (
                        <div
                          className={`px-3 py-2 ${gradientClass} text-white rounded-md`}>
                          <div className="text-center">
                            <p className="text-xs text-white/90 mb-0.5">
                              CUMA ± {pakej.distance} METER
                            </p>
                            <p className="text-sm font-semibold">
                              KE {pakej.destination}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Button */}
                    <div className="block mt-auto">
                      <Button
                        onClick={() => handleDetailClick(pakej)}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 md:py-4 text-sm md:text-base">
                        Maklumat Lanjut
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation Controls */}
        <motion.div
          className="flex items-center justify-center gap-4 md:gap-6 mt-8"
          variants={itemFade}>
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-2 md:p-3 rounded-full transition-all duration-300 ${
              canScrollLeft
                ? 'bg-primary text-white hover:bg-primary/90 hover:scale-110 shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            aria-label="Scroll left">
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2.5">
            {Array.from({ length: pakejHaji.length }).map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => scrollToIndex(index)}
                className="transition-all duration-300 hover:scale-110"
                aria-label={`Go to pakej ${index + 1}`}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-all duration-300 ${
                    activeIndex === index ? 'scale-125' : 'scale-100'
                  }`}>
                  <path
                    d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"
                    fill={
                      activeIndex === index ? 'hsl(var(--primary))' : '#E5E7EB'
                    }
                    className="transition-all duration-300"
                  />
                </svg>
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-2 md:p-3 rounded-full transition-all duration-300 ${
              canScrollRight
                ? 'bg-primary text-white hover:bg-primary/90 hover:scale-110 shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            aria-label="Scroll right">
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default PakejHajiSection;
