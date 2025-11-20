'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Kenapa Rayhar?', href: '#features' },
    { label: 'Tawaran Istimewa', href: '#special-price' },
    { label: 'Pakej Haji', href: '#pakej-haji' },
    { label: 'Testimonial', href: '#testimonial' },
  ];

  const services = [
    { id: 'pakej-haji', label: 'Pakej Haji', href: '#pakej-haji' },
    { id: 'pakej-umrah', label: 'Pakej Umrah', href: '#' },
    { id: 'bimbingan-haji', label: 'Bimbingan Haji', href: '#' },
    { id: 'konsultasi', label: 'Konsultasi', href: '#' },
  ];

  const socialMedia = [
    { id: 'facebook', icon: Facebook, href: '#', label: 'Facebook' },
    {
      id: 'instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/rayhartravels/',
      label: 'Instagram',
    },
    {
      id: 'youtube',
      icon: Youtube,
      href: 'https://www.youtube.com/c/Rayhar',
      label: 'YouTube',
    },
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 pt-12 md:pt-16 lg:pt-20 pb-6 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo/logo-rayhar.png"
                alt="RAYHAR Logo"
                width={120}
                height={48}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-4 text-gray-400">
              Agensi perjalanan haji dan umrah yang dipercayai membantu anda
              mewujudkan impian ibadah suci dengan pakej lengkap dan
              perkhidmatan profesional.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-3">
              {socialMedia.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-800 hover:bg-primary transition-colors duration-200 flex items-center justify-center group"
                    aria-label={social.label}>
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Pautan Pantas
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={`quick-link-${index}-${link.href}`}>
                  <Link href={link.href} className="text-sm hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Perkhidmatan
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={service.href} className="text-sm hover:underline">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Hubungi Kami
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span className="text-sm">
                  Lot 21862 Wisma Rayhar 2
                  <br />
                  Tingkat 1 & 2, Susur Chukai Utama,
                  <br />
                  Taman Chukai Utama, 24000,
                  <br />
                  Chukai, Kemaman, Terengganu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white shrink-0" />
                <a href="tel:+60123456789" className="text-sm hover:underline">
                  09-8583942
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <a
                  href="mailto:info@rayhar.com"
                  className="text-sm hover:underline">
                  rayhar.kua@rayhar.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 pb-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Rayhar Travels. Hak cipta terpelihara.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:underline">
                Dasar Privasi
              </Link>
              <Link href="#" className="text-gray-400 hover:underline">
                Terma & Syarat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
