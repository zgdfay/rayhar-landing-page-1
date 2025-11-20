'use client';

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

  return (
    <button
      onClick={handleClick}
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105',
        'md:bottom-8 md:right-8',
        className
      )}
      aria-label="Claim Hadiah">
      <Gift className="w-5 h-5" />
      <span className="font-medium text-sm md:text-base">Claim Hadiah</span>
    </button>
  );
}

