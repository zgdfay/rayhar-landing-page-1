'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { itemFade, sectionFade, staggerContainer, viewportMotion } from '@/lib/motion';

const features = [
  {
    title: 'Dipercayai Sejak 1990/1410H',
    description:
      'Rayhar telah menguruskan jemaah selama lebih 30 tahun dengan pengalaman mendalam, warisan ilmu turun-temurun, dan komitmen menjaga amanah tetamu Allah.',
    image: '/images/features/1.jpg',
  },
  {
    title: 'Bimbingan Ilmu yang Menyeluruh',
    description:
      'Setiap jemaah dibimbing dari awal pendaftaran hingga selesai ibadah oleh pembimbing bertauliah PEKTA & PIHAHS agar rukun dan manasik dilakukan dengan sempurna.',
    image: '/images/features/2.jpg',
  },
  {
    title: 'Penginapan Strategik Dekat Masjid',
    description:
      'Hotel pilihan berada di lokasi premium seperti Ajyad Street di Makkah dan Dallah Taibah di Madinah, memudahkan jemaah menjimatkan masa dan tenaga untuk ibadah.',
    image: '/images/features/3.png',
  },
  {
    title: '8 Malam Penuh di Madinah',
    description:
      'Rayhar tidak memotong hari untuk menurunkan kos. Jemaah mendapat 8 malam penuh agar dapat memaksimalkan ibadah, ziarah, dan pembelajaran sirah Nabawi.',
    image: '/images/features/4.jpg',
  },
  {
    title: 'Tiket Haramain Percuma',
    description:
      'Perjalanan antara Makkah dan Madinah lebih cepat dan selesa menggunakan Haramain High Speed Train, disediakan percuma untuk semua jemaah Rayhar.',
    image: '/images/features/5.webp',
  },
  {
    title: 'Makanan Lengkap 3x Sehari',
    description:
      'Bufet tersedia pagi, tengah hari, dan malam dengan hidangan antarabangsa serta menu citarasa Melayu yang menjaga tenaga dan keselesaan jemaah.',
    image: '/images/features/6.jpg',
  },
];

export function FeaturesSection() {
  return (
    <motion.section
      id="features"
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

      <motion.div className="container mx-auto px-4 max-w-7xl relative z-10" variants={staggerContainer()}>
        {/* Header */}
        <motion.div className="mb-12 md:mb-16 lg:mb-20 text-center" variants={itemFade}>
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm md:text-base">
              Keunggulan Kami
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Mengapa Memilih{' '}
            <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Rayhar
            </span>
            <br className="hidden sm:block" />
            untuk Perjalanan Haji Anda?
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Kami menyediakan layanan lengkap untuk memastikan perjalanan ibadah
            haji & umrah Anda berjalan lancar, nyaman, dan penuh berkah dengan
            berbagai keunggulan berikut:
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10" variants={staggerContainer(0.05, 0.08)}>
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={itemFade} className="h-full">
              <Card className="bg-white border border-gray-200 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative group">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Number Badge */}
                <div className="absolute top-0 left-0 z-20">
                  <div
                    className="px-3 py-1.5 md:px-4 md:py-2 rounded-br-lg rounded-tl-lg bg-linear-to-br from-primary to-primary/90 text-white font-bold text-sm md:text-base shadow-md"
                    aria-label={`Fitur ${index + 1}`}>
                    {index + 1}
                  </div>
                </div>

                <CardHeader className="pb-4 md:pb-5 pt-14 md:pt-16 px-6 relative z-10">
                  <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col px-6 pb-6 pt-0 relative z-10">
                  {/* Description */}
                  <div className="mb-6 md:mb-8">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Image Container */}
                  <div className="relative w-full aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300 mt-auto">
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    <Image
                      src={feature.image}
                      alt={`${feature.title} - Layanan Rayhar Travel`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default FeaturesSection;
