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
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in-0 duration-200">
      {/* Banner Container */}
      <div className="relative w-full max-w-[90vw] md:max-w-sm lg:max-w-md">
        {/* Close Button */}
        <button
          onClick={handleBannerClick}
          className="absolute top-2 right-2 md:-top-2 md:-right-2 z-10 w-9 h-9 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 group"
          aria-label="Close banner">
          <X className="w-5 h-5 md:w-7 md:h-7 text-gray-800 group-hover:text-gray-900" />
        </button>
        {/* Banner Image - clickable area */}
        <div
          className="relative w-full aspect-3/4 max-h-[85vh] md:max-h-[80vh] bg-transparent rounded-xl overflow-visible animate-in zoom-in-95 duration-200 cursor-pointer transition-shadow"
          onClick={handleBannerClick}>
          <Image
            src="/images/PERCUMA.png"
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
