'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function BannerPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Close when clicking outside the banner
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  const handleBannerClick = () => {
    router.push('/pakej-haji');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in-0 duration-200"
      onClick={handleBackdropClick}>
      {/* Banner Container */}
      <div className="relative w-full max-w-[90vw] md:max-w-sm lg:max-w-md">
        {/* Close Button - positioned outside the banner */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 z-110 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
          aria-label="Tutup banner">
          <X className="w-3.5 h-3.5 md:w-4 md:h-4" strokeWidth={2.5} />
        </button>

        {/* Banner Image - clickable area */}
        <div
          className="relative w-full aspect-3/4 max-h-[85vh] md:max-h-[80vh] bg-transparent rounded-xl overflow-visible animate-in zoom-in-95 duration-200 cursor-pointer transition-shadow"
          onClick={handleBannerClick}>
          <Image
            src="/images/banner-new.png"
            alt="Banner Promosi"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 384px, 448px"
          />
        </div>
      </div>
    </div>
  );
}
