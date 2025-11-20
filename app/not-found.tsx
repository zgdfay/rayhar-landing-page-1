'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/sections/navbar';
import { FooterSection } from '@/components/sections/footer-section';
import { SearchX, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-2xl text-center">
          {/* Icon/Illustration */}
          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <SearchX className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-primary" />
              </div>
            </div>
          </div>

          {/* Error Code */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-4 md:mb-6">
            404
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Halaman Tidak Ditemukan
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 leading-relaxed max-w-xl mx-auto">
            Maaf, halaman yang Anda cari tidak ditemukan atau mungkin sudah
            dipindahkan. Silakan kembali ke halaman utama atau gunakan menu
            navigasi untuk menjelajahi website kami.
          </p>

          {/* Alternative message for soon feature */}
          <div className="mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary-foreground rounded-full text-sm md:text-base">
              <span className="font-medium">
                💡 Fitur ini akan tersedia dalam waktu dekat
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-lg px-8 py-6 text-base md:text-lg font-medium shadow-md transition-all duration-200 hover:shadow-lg">
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Kembali ke Beranda
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleGoBack}
              className="border-2 border-gray-300 hover:border-primary hover:text-primary rounded-lg px-8 py-6 text-base md:text-lg font-medium transition-all duration-200">
              <ArrowLeft className="w-5 h-5" />
              Kembali Sebelumnya
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 md:mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              Atau kunjungi halaman populer:
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Link
                href="/#pakej-haji"
                className="text-sm md:text-base text-primary hover:text-primary/80 transition-colors font-medium">
                Pakej Haji
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/#features"
                className="text-sm md:text-base text-primary hover:text-primary/80 transition-colors font-medium">
                Kenapa Rayhar?
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/#special-price"
                className="text-sm md:text-base text-primary hover:text-primary/80 transition-colors font-medium">
                Tawaran Istimewa
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/#hubungi"
                className="text-sm md:text-base text-primary hover:text-primary/80 transition-colors font-medium">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}

