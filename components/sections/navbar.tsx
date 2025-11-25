'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const navItems = [
  { label: 'Home', href: '/', sectionId: 'hero' },
  { label: 'Kenapa Rayhar?', href: '#features', sectionId: 'features' },
  {
    label: 'Tawaran Istimewa',
    href: '#special-price',
    sectionId: 'special-price',
  },
  { label: 'Pakej Haji', href: '#pakej-haji', sectionId: 'pakej-haji' },
  { label: 'Testimonial', href: '#testimonial', sectionId: 'testimonial' },
  { label: 'Claim Hadiah', href: '#hubungi', sectionId: 'hubungi' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const pathname = usePathname();
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Helper function to get navbar height
  const getNavbarHeight = () => {
    if (typeof window === 'undefined') return 80;
    const isMobile = window.innerWidth < 1024;
    return isMobile ? 64 : 80; // h-16 = 64px, h-20 = 80px
  };

  // Helper function to update active section based on scroll position
  const updateActiveSectionFromScroll = () => {
    // Skip if programmatic scroll is happening
    if (isScrollingRef.current) {
      return;
    }

    const sections = [
      'hero',
      'features',
      'special-price',
      'pakej-haji',
      'testimonial',
      'hubungi',
    ];

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    const navbarHeight = getNavbarHeight();
    // Use getBoundingClientRect for more accurate detection on mobile
    const viewportOffset = isMobile ? navbarHeight + 30 : navbarHeight + 20;

    // Check from bottom to top to get the most recent section
    let currentSection = 'hero'; // Default to hero

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const scrollPosition = window.scrollY + viewportOffset;

        // For mobile, check if section is in viewport with better threshold
        if (isMobile) {
          // Check if section top is above the viewport offset
          if (sectionTop <= scrollPosition) {
            currentSection = sections[i];
            break;
          }
        } else {
          // Desktop: use original logic
          if (scrollPosition >= sectionTop) {
            currentSection = sections[i];
            break;
          }
        }
      }
    }

    // If scrolled to very top, set hero as active
    if (window.scrollY < 100) {
      currentSection = 'hero';
    }

    setActiveSection((prev) => {
      // Only update if changed to prevent unnecessary re-renders
      if (prev !== currentSection) {
        return currentSection;
      }
      return prev;
    });
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Scroll spy to detect active section
  useEffect(() => {
    if (pathname !== '/') {
      // Use setTimeout to avoid calling setState synchronously in effect
      setTimeout(() => {
        setActiveSection('');
      }, 0);
      return;
    }

    const handleScroll = () => {
      updateActiveSectionFromScroll();
    };

    // Throttled scroll handler
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check hash on mount and scroll to it
    const hash = window.location.hash.slice(1);
    if (hash && navItems.some((item) => item.sectionId === hash)) {
      isScrollingRef.current = true;
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          const navbarHeight = getNavbarHeight();
          const isMobile = window.innerWidth < 1024;

          // Use getBoundingClientRect for more accurate position
          const rect = section.getBoundingClientRect();
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          const sectionTop = rect.top + scrollTop;

          // Use smaller offset for better accuracy
          const extraOffset = isMobile ? 10 : 5;
          const offsetTop = sectionTop - navbarHeight - extraOffset;

          // Ensure we don't scroll past the section
          const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
          const finalOffset = Math.min(Math.max(0, offsetTop), maxScroll);

          window.scrollTo({
            top: finalOffset,
            behavior: 'smooth',
          });
          setActiveSection(hash);

          // Clear scroll flag after scroll completes
          setTimeout(() => {
            isScrollingRef.current = false;
            updateActiveSectionFromScroll();
          }, 800);
        }
      }, 100);
    } else {
      // Initial check - use setTimeout to avoid synchronous setState
      setTimeout(() => {
        updateActiveSectionFromScroll();
      }, 0);
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    window.addEventListener('resize', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', throttledHandleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [pathname]);

  // Handle smooth scroll for anchor links
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.slice(1);
      const section = document.getElementById(sectionId);
      if (section) {
        // Set flag to prevent scroll spy from interfering
        isScrollingRef.current = true;
        setActiveSection(sectionId);

        // Get dynamic navbar height
        const navbarHeight = getNavbarHeight();
        const isMobile = window.innerWidth < 1024;

        // Use getBoundingClientRect for more accurate position
        const rect = section.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const sectionTop = rect.top + scrollTop;

        // Use smaller offset for better accuracy, especially for last section
        const extraOffset = isMobile ? 10 : 5;
        const offsetTop = sectionTop - navbarHeight - extraOffset;

        // Ensure we don't scroll past the section
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const finalOffset = Math.min(Math.max(0, offsetTop), maxScroll);

        window.scrollTo({
          top: finalOffset,
          behavior: 'smooth',
        });

        // Clear scroll flag after scroll completes
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        // Calculate scroll duration (typically 500-1000ms for smooth scroll)
        const scrollDistance = Math.abs(window.scrollY - offsetTop);
        const scrollDuration = Math.min(
          1000,
          Math.max(300, scrollDistance / 2)
        );

        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false;
          // Final check after scroll completes
          updateActiveSectionFromScroll();
        }, scrollDuration + 200);

        // Close mobile menu after scroll starts
        setTimeout(() => {
          handleCloseMenu();
        }, 150);
      }
    } else if (href === '/') {
      e.preventDefault();
      // Set flag to prevent scroll spy from interfering
      isScrollingRef.current = true;
      setActiveSection('hero');

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      // Clear scroll flag after scroll completes
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        // Final check after scroll completes
        updateActiveSectionFromScroll();
      }, 600);

      setTimeout(() => {
        handleCloseMenu();
      }, 100);
    } else {
      handleCloseMenu();
    }
  };

  const handleCloseMenu = () => setIsMenuOpen(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center z-10"
            onClick={handleCloseMenu}>
            <Image
              src="/logo/logo-rayhar-2.png"
              alt="RAYHAR Logo"
              width={100}
              height={40}
              className="h-7 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-8"
            aria-label="Main navigation">
            {navItems.map((item) => {
              let isActive = false;
              if (pathname === '/') {
                isActive = item.sectionId === activeSection;
              } else if (item.sectionId === null) {
                // For pages without sectionId, check if pathname starts with href
                isActive = pathname.startsWith(item.href);
              } else {
                isActive = pathname === item.href;
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    'relative text-gray-700 hover:text-primary transition-all duration-200 font-medium text-sm xl:text-base py-2',
                    isActive && 'text-primary'
                  )}
                  aria-current={isActive ? 'page' : undefined}>
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 z-10 active:scale-95"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}>
            {isMenuOpen ? (
              <X className="h-5 w-5 md:h-6 md:w-6 text-gray-700 transition-transform duration-200" />
            ) : (
              <Menu className="h-5 w-5 md:h-6 md:w-6 text-gray-700 transition-transform duration-200" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl z-50 overflow-hidden transition-all duration-300 ease-in-out',
            isMenuOpen
              ? 'max-h-[80vh] opacity-100 translate-y-0 rounded-b-2xl md:rounded-b-3xl'
              : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
          )}>
          <div className="container mx-auto px-4 py-4 max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav
              className="flex flex-col gap-1.5"
              aria-label="Mobile navigation">
              {navItems.map((item) => {
                let isActive = false;
                if (pathname === '/') {
                  isActive = item.sectionId === activeSection;
                } else if (item.sectionId === null) {
                  // For pages without sectionId, check if pathname starts with href
                  isActive = pathname.startsWith(item.href);
                } else {
                  isActive = pathname === item.href;
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      'block text-gray-700 hover:text-primary hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 font-medium py-3 px-4 text-sm rounded-lg',
                      isActive && 'text-primary bg-primary/10 font-semibold'
                    )}
                    aria-current={isActive ? 'page' : undefined}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
