'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  itemFade,
  scaleIn,
  sectionFade,
  staggerContainer,
  viewportMotion,
} from '@/lib/motion';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Haji Fadhil Choong',
    location: 'Kuala Lumpur',
    rating: 5,
    text: "Kami juga ingin rakamkan jutaan terima kasih kepada Haji Harun, Ustaz Rosli, Ustaz Zul, Ustaz Hadi, Ustaz Fizal, Hj Solah, Ammar dan semua team Rayhar yg lain yg telah bertungkus lumus membantu kami semua dlm menjalankan ibadah Haji kami. Segala pengalaman dan cabaran semasa 'Operasi Kelam Kabut' dihayati buat selamanya. Harap kita teruskan ukhwah diantara kita bersama dan berjumpa lagi disuatu masa nanti. Insya Allah",
  },
  {
    id: '2',
    name: 'Hajjah Ida Mansor',
    location: 'Petaling Jaya',
    rating: 5,
    text: 'Alhamdulilah terima kasih team Rayhar sejak berurusan dengan cawangn Jerteh lagi disantuni dengan amat baik oleh semua kakitangan Rayhar sehingga kami selamat sampai.. memang tepat pilihan kami memilih Travel ini untuk Umrah dan juga Haji.. moment Haji akan di ingat sepanjang hayat.',
  },
  {
    id: '3',
    name: 'Haji Thaib Mustafa & Hajjah Rosminah Md Kassim',
    location: '',
    rating: 5,
    text: "Alhamdullilah syukur pada Allah sudah selamat tunaikan fardu haji dan selamat sampai di tanahair. Terima kasih pada semua warga Rayhar dari Tuan Haji Harun, Ustaz Rosli, Ustaz Zul, Ustaz Fizal, semua Ustaz dan Ustazah, pegawai dan team Rayhar di Malaysia, Makkah dan Madinah juga rakan rakan KT96, SRO dan Oberoi yang menyantuni dan mendoakan kami. Kami meminta maaf zahir dan batin, makan, minum, ubat, ilmu dan bimbingan minta dihalalkan. Semoga Allah memberi ganjarannya pada semua dan memakbulkan segala doa doa kita. Saya juga doakan semuanya sihat, selamat dan sentiasa dalam rahmat dan diberkati Allah S.W.T. Don't be khuatir, Relax, Tenang dan Senyum selalu macam Hj. Harun kita. InsyaAllah, kita akan berjumpa lagi. Terima kasih daun keladi, Next time kita pergi dengan Rayhar lagi.",
  },
  {
    id: '4',
    name: 'Hajjah Noor Aribah',
    location: 'Johor',
    rating: 5,
    text: 'Ustaz Amin n Ustaz Kholid dan kesemua ustaz dan ustazah bimbingan haji serta semua petugas Rayhar Travels dan terutama MD Tuan Haji Haron yang telah menguruskan jemaah haji Rayhar dengan teratur dan cemerlang dan memberi layanan yang baik kepada kami. Terima kasih juga kepada petugas-petugas yang telah menghantar saya ke pusat rawatan Tabung Haji di Shisha sebanyak 2 kali. Alhamdulillah, saya Puan Noor Aribah binti Hamis dari KT22 telah selamat sampai di rumah di Batu Pahat, Johor.',
  },
  {
    id: '5',
    name: 'Hajjah Aizani Sulaiman',
    location: 'Kota Bharu',
    rating: 5,
    text: 'Akak dah 4 kali umrah dan sekali haji dengan Rayhar.. yess.. betul.. memang rayhar terbaik.. sangat puas hati.. pengurusan tiptop..nak pergi mana-mana ziarah ke, bas dah sedia menunggu.. keep up the good work..',
  },
  {
    id: '6',
    name: 'Rosmini Wan Abdullah',
    location: 'Top Fan',
    rating: 5,
    text: 'Alhamdulillah...Allah detikkan hati kami (3 beranak) utk memilih Rayhar sebagai PJH 1446H....terbaik dalam setiap perkara...pengurusan dan juga pengisian semasa di tanah suci...terima kasih Rayhar Travels...insya Allah ada rezeki boleh join lagi',
  },
];

export function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getCardWidth = () => {
    if (typeof window === 'undefined') return 320;
    if (window.innerWidth >= 1024) return 360;
    if (window.innerWidth >= 768) return 320;
    return 280;
  };

  const getGap = () => {
    if (typeof window === 'undefined') return 16;
    // Match with Tailwind gap classes: gap-4 = 16px, gap-6 = 24px
    if (window.innerWidth >= 768) return 24; // md:gap-6
    return 16; // gap-4
  };

  const checkScrollButtons = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      // Calculate active index based on actual card width from DOM
      const firstCard = scrollRef.current.querySelector(
        '[data-testimonial-card]'
      ) as HTMLElement;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const gapValue = getGap();
        const scrollPosition = scrollLeft;
        // Add small offset to account for rounding
        const index = Math.round(scrollPosition / (cardWidth + gapValue));
        setActiveIndex(Math.min(Math.max(0, index), testimonials.length - 1));
      } else {
        // Fallback to calculated values
        const cardWidth = getCardWidth();
        const gap = getGap();
        const scrollPosition = scrollLeft;
        const index = Math.round(scrollPosition / (cardWidth + gap));
        setActiveIndex(Math.min(Math.max(0, index), testimonials.length - 1));
      }
    }
  }, []);

  useEffect(() => {
    checkScrollButtons();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        scrollElement.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, [checkScrollButtons]);

  // Handle ESC key and body scroll lock
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsModalOpen(false);
        }
      };
      window.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector(
        '[data-testimonial-card]'
      ) as HTMLElement;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const gap = getGap();
        const scrollAmount = cardWidth + gap;
        scrollRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      } else {
        // Fallback
        const cardWidth = getCardWidth();
        const gap = getGap();
        const scrollAmount = cardWidth + gap;
        scrollRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector(
        '[data-testimonial-card]'
      ) as HTMLElement;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const gap = getGap();
        const scrollPosition = index * (cardWidth + gap);
        scrollRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      } else {
        // Fallback
        const cardWidth = getCardWidth();
        const gap = getGap();
        const scrollPosition = index * (cardWidth + gap);
        scrollRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <motion.section
      id="testimonial"
      className="w-full bg-linear-to-b from-white via-gray-50 to-white py-16 md:py-20 lg:py-24"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={viewportMotion}>
      <motion.div
        className="container mx-auto px-4 max-w-7xl"
        variants={staggerContainer()}>
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16 lg:mb-20 text-center"
          variants={itemFade}>
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm md:text-base">
              Testimoni Jemaah
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Kata{' '}
            <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Jemaah Kami
            </span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Dengarkan pengalaman sebenar jemaah yang telah menunaikan ibadah
            haji dan umrah bersama Rayhar Travels
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div className="relative" variants={itemFade}>
          {/* Slider Container */}
          <div
            ref={scrollRef}
            onScroll={checkScrollButtons}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                data-testimonial-card
                className="shrink-0 w-[280px] md:w-[320px] lg:w-[360px] snap-center"
                variants={scaleIn}>
                <Card
                  onClick={() => {
                    setSelectedTestimonial(testimonial);
                    setIsModalOpen(true);
                  }}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full cursor-pointer relative group">
                  {/* Maximize Icon - Pojok Kanan Atas */}
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-md border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-200">
                      <Maximize2 className="w-3.5 h-3.5 text-gray-600" />
                    </div>
                  </div>

                  <CardContent className="p-4 md:p-5 flex flex-col flex-1">
                    {/* Star Rating */}
                    <div className="flex items-center gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < testimonial.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-gray-200 text-gray-200'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text - dengan truncate */}
                    <p className="text-gray-900 text-sm leading-relaxed mb-4 flex-1 line-clamp-4">
                      {testimonial.text}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                      {/* Avatar Placeholder */}
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary/20 to-primary/40 flex items-center justify-center shrink-0">
                        <span className="text-primary font-semibold text-sm">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>

                      {/* Name and Location */}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-sm truncate">
                          {testimonial.name}
                        </p>
                        {testimonial.location && (
                          <p className="text-gray-500 text-xs truncate">
                            {testimonial.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls - Below Slider */}
          <motion.div
            className="flex items-center justify-center gap-4 md:gap-6 mt-6"
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
              {Array.from({ length: testimonials.length }).map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => scrollToIndex(index)}
                  className="transition-all duration-300 hover:scale-110"
                  aria-label={`Go to slide ${index + 1}`}>
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
                        activeIndex === index
                          ? 'hsl(var(--primary))'
                          : '#E5E7EB'
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
      </motion.div>

      {/* Modal Detail Testimoni */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
            }
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 rounded-full border-2 border-primary p-2 opacity-70 ring-offset-background transition-all duration-200 hover:opacity-100 hover:bg-primary/10 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:border-transparent active:ring-0 z-10"
              aria-label="Close">
              <Minimize2 className="h-4 w-4 text-primary" />
            </button>

            {/* Modal Body */}
            <div className="p-6">
              {selectedTestimonial && (
                <>
                  {/* Header */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Testimoni Jemaah
                  </h2>

                  <div className="space-y-6">
                    {/* Author Info */}
                    <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
                      <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary/20 to-primary/40 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold text-xl">
                          {selectedTestimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          {selectedTestimonial.name}
                        </h3>
                        {selectedTestimonial.location && (
                          <p className="text-gray-600 text-sm">
                            {selectedTestimonial.location}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < selectedTestimonial.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-gray-200 text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {selectedTestimonial.rating}.0 / 5.0
                      </span>
                    </div>

                    {/* Full Testimonial Text */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex items-start gap-3">
                        <div className="text-primary text-4xl font-serif leading-none mt-1">
                          &ldquo;
                        </div>
                        <p className="text-gray-700 text-base leading-relaxed flex-1">
                          {selectedTestimonial.text}
                        </p>
                        <div className="text-primary text-4xl font-serif leading-none mt-auto">
                          &rdquo;
                        </div>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="flex justify-center pt-4">
                      <div className="w-16 h-1 bg-linear-to-r from-primary/20 via-primary to-primary/20 rounded-full" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}

export default TestimonialSection;
