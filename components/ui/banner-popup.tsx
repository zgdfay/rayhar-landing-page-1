'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export function BannerPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasClaimed, setHasClaimed] = useState(false);

  // Check if user has already claimed
  useEffect(() => {
    const checkClaimedStatus = () => {
      try {
        const savedData = localStorage.getItem('rayhar_form_submission');
        if (savedData) {
          setHasClaimed(true);
          return;
        }
      } catch (error) {
        console.error('Error reading from localStorage:', error);
      }
    };

    checkClaimedStatus();

    // Listen for storage changes (in case form is submitted in another tab)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'rayhar_form_submission') {
        checkClaimedStatus();
      }
    };

    // Listen for custom event (in case form is submitted in same tab)
    const handleClaimed = () => {
      checkClaimedStatus();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('rayhar:claimed', handleClaimed);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('rayhar:claimed', handleClaimed);
    };
  }, []);

  useEffect(() => {
    // Don't show popup if user has already claimed
    if (hasClaimed) {
      setIsOpen(false);
      return;
    }

    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [hasClaimed]);

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

  const handleBannerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    // Scroll to contact section after a short delay to allow popup to close
    setTimeout(() => {
      const contactSection = document.getElementById('hubungi');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in-0 duration-200 safe-area-inset">
      {/* Banner Container */}
      <div className="relative w-full max-w-[calc(100vw-1rem)] sm:max-w-[85vw] md:max-w-[380px] lg:max-w-[400px] xl:max-w-[420px] 2xl:max-w-[450px]">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 md:top-3 md:right-3 lg:-top-2 lg:-right-2 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 group touch-manipulation"
          aria-label="Close banner">
          <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gray-800 group-hover:text-gray-900" />
        </button>
        {/* Banner Image - clickable area */}
        <div
          className="relative w-full aspect-3/4 max-h-[calc(100vh-2rem)] sm:max-h-[82vh] md:max-h-[70vh] lg:max-h-[75vh] xl:max-h-[80vh] bg-transparent rounded-lg sm:rounded-xl overflow-visible animate-in zoom-in-95 duration-200 cursor-pointer transition-shadow"
          onClick={handleBannerClick}>
          <Image
            src="/images/PERCUMA.png"
            alt="Banner Promosi"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 640px) calc(100vw - 1rem), (max-width: 768px) 85vw, (max-width: 1024px) 380px, (max-width: 1280px) 400px, (max-width: 1536px) 420px, 450px"
          />
        </div>
      </div>
    </div>
  );
}
