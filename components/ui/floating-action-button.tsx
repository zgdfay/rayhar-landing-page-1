'use client';

import { useEffect, useState } from 'react';
import { Gift } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingActionButtonProps {
  onClick?: () => void;
  className?: string;
}

export function FloatingActionButton({
  onClick,
  className,
}: FloatingActionButtonProps) {
  const [hasClaimed, setHasClaimed] = useState(false);

  // Check if user has already claimed
  useEffect(() => {
    const checkClaimedStatus = () => {
      try {
        const savedData = localStorage.getItem('rayhar_form_submission');
        if (savedData) {
          setHasClaimed(true);
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

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    // Scroll ke section claim hadiah (hubungi)
    const section = document.getElementById('hubungi');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Don't render if user has already claimed
  if (hasClaimed) return null;

  return (
    <button
      onClick={handleClick}
      className={cn(
        'fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-1.5 sm:gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 touch-manipulation',
        'max-w-[calc(100vw-2rem)] sm:max-w-none',
        className
      )}
      aria-label="Claim Hadiah">
      <Gift className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
      <span className="font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">Claim Hadiah</span>
    </button>
  );
}

