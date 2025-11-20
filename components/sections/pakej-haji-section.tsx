"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { itemFade, sectionFade, staggerContainer, viewportMotion } from "@/lib/motion";

interface PakejHaji {
  id: string;
  hotelName: string;
  hotelSubName: string;
  rating: number;
  distance: string;
  destination: string;
  description: string;
  image: string;
  detailUrl: string;
  colorScheme?: "pink" | "blue" | "red" | "green" | "orange" | "purple" | "yellow" | "teal"; // Optional color scheme
}

const pakejHaji: PakejHaji[] = [
  {
    id: "1",
    hotelName: "Safwah",
    hotelSubName: "ROYAL ORCHID",
    rating: 5,
    distance: "50",
    destination: "DATARAN MASJIDIL HARAM",
    description:
      "Rayhar menawarkan Pakej Safwah dengan penginapan selesa hanya 50 meter dari dataran Masjidil Haram dan Hotel Medina Oberoi hanya 15 meter dari dataran Masjid Nabawi. Pakej ini termasuk tiket Haramain Speed Train sektor Makkah - Madinah.",
    image: "/hotel-safwah/cover.png",
    detailUrl: "/pakej-haji/safwah-royal-orchid",
    colorScheme: "pink",
  },
  {
    id: "2",
    hotelName: "Olayan",
    hotelSubName: "AJYAD HOTEL",
    rating: 4,
    distance: "140",
    destination: "DATARAN MASJIDIL HARAM",
    description:
      "Pakej Olayan Hotel di Makkah merupakan pilihan yang berharga dan kondusif dengan jarak 140 meter ke Masjidil Haram. Hotel bertaraf 4 bintang dengan rating 4.1/5 di Google Reviews. Penginapan di Madinah adalah Hotel Dallah Taibah bertaraf 4 ⭐ dengan jarak 100 meter ke dataran Masjid Nabawi. Pakej ini menyediakan sajian citarasa Melayu dan termasuk bimbingan komprehensif melalui kuliah-kuliah harian daripada Asatizah Rayhar sepanjang berada di Tanah Suci.",
    image: "/hotel-ajyad/5.png",
    detailUrl: "/pakej-haji/olayan-ajyad",
    colorScheme: "blue",
  },
  {
    id: "3",
    hotelName: "Orinsis",
    hotelSubName: "HOTEL",
    rating: 3,
    distance: "190",
    destination: "DATARAN MASJIDIL HARAM",
    description:
      "Pakej Hotel Oriensis di Mekah menawarkan tempoh penginapan ±40 hari dengan Flight Awal & Akhir, memberi ruang masa lebih lapang untuk ibadah. Sajian citarasa Melayu (fullboard) yang mesra selera, memudahkan keselesaan jemaah sepanjang penginapan. Akses mudah ke Masjidil Haram menjimatkan masa dan tenaga, membolehkan anda lebih fokus untuk beribadah. Bimbingan yang berterusan kerana kuliah-kuliah akan diadakan di dalam bangunan penginapan. Pilihan ideal bagi mereka yang mengutamakan tempoh lebih panjang, bimbingan berterusan, dan bajet berpatutan.",
    image: "/hotel-orinsis/1.png",
    detailUrl: "/pakej-haji/orinsis-hotel",
    colorScheme: "red",
  },
  {
    id: "4",
    hotelName: "Elaf Al Bait",
    hotelSubName: "HOTEL",
    rating: 3,
    distance: "190",
    destination: "DATARAN MASJIDIL HARAM",
    description:
      "Pakej Hotel Elaf Al Bait di Makkah menawarkan tempoh penginapan ±40 hari dengan pilihan penerbangan Awal & Akhir. Pilihan ini memberi ruang kepada jemaah untuk optimumkan masa beribadah. Akses mudah ke Masjidil Haram menjimatkan masa dan tenaga, membolehkan anda melaksanakan umrah dan tawaf sekerap mungkin. Bimbingan dan kuliah berterusan dapat diadakan di dalam bangunan penginapan tanpa sekatan. Pilihan ini adalah ideal bagi mereka yang ingin memperkayakan diri dengan ilmu. Harga yang ditawarkan adalah berpatutan bersesuaian dengan lokasi hotel.",
    image: "/hotel-elaf/1.png",
    detailUrl: "/pakej-haji/elaf-al-bait",
    colorScheme: "green",
  },
  {
    id: "5",
    hotelName: "Mira",
    hotelSubName: "AJYAD HOTEL",
    rating: 3,
    distance: "400",
    destination: "DATARAN MASJIDIL HARAM",
    description:
      "Pakej Hotel Mira Ajyad di Makkah menawarkan tempoh penginapan ±40 hari dengan Penerbangan Akhir sahaja. Pakej ini menawarkan keseimbangan antara harga dan jarak. Nikmati jarak yang ideal ke Baitullah, di mana setiap detik langkah ke masjid begitu berharga. Bimbingan dan kuliah berterusan dapat diadakan di dalam bangunan penginapan tanpa sekatan. Pilihan ini adalah ideal bagi mereka yang ingin memperkayakan diri dengan ilmu. Harga yang ditawarkan adalah berpatutan bersesuaian dengan lokasi hotel.",
    image: "/hotel-mira/1.png",
    detailUrl: "/pakej-haji/mira-ajyad",
    colorScheme: "orange",
  },
  {
    id: "6",
    hotelName: "Zahrat Al Yasser",
    hotelSubName: "HOTEL",
    rating: 3,
    distance: "480",
    destination: "KOMPLEKS JAMARAT",
    description:
      "Pakej Hotel Zahrat Al Yasser di Aziziah menawarkan tempoh penginapan ±40 hari dengan Penerbangan Awal & Akhir. Hotel ini terletak strategik di Aziziah dengan jarak hanya 480 meter ke Kompleks Jamarat, menjadikannya pilihan ideal untuk jemaah haji. Lokasi yang dekat dengan Kompleks Jamarat memudahkan akses untuk melaksanakan ritual melontar jumrah. Sajian citarasa Melayu (fullboard) yang mesra selera, memudahkan keselesaan jemaah sepanjang penginapan. Bimbingan dan kuliah berterusan dapat diadakan di dalam bangunan penginapan tanpa sekatan.",
    image: "/hotel-zahrat/1.png",
    detailUrl: "/pakej-haji/zahrat-al-yasser",
    colorScheme: "purple",
  },
  {
    id: "7",
    hotelName: "Biltmore",
    hotelSubName: "HOTEL",
    rating: 5,
    distance: "15",
    destination: "DATARAN MASJID NABAWI",
    description:
      "Pakej Hotel Biltmore Madinah (sebelumnya dikenal sebagai Medina Oberoi) menawarkan penginapan eksklusif bertaraf 5 bintang dengan lokasi sangat strategik hanya 15 meter dari dataran Masjid Nabawi. Hotel ini merupakan pilihan premium untuk jemaah yang mengutamakan kesejahteraan dan kemudahan akses ke Masjid Nabawi. Dengan tempoh penginapan ±40 hari dan Penerbangan Awal & Akhir, jemaah dapat menikmati masa yang lebih lapang untuk beribadah. Sajian International Fullboard yang berkualiti tinggi disediakan oleh hotel.",
    image: "/hotel-biltmore/1.png",
    detailUrl: "/pakej-haji/biltmore-madinah",
    colorScheme: "yellow",
  },
  {
    id: "8",
    hotelName: "Dallah Taibah",
    hotelSubName: "HOTEL",
    rating: 4,
    distance: "100",
    destination: "DATARAN MASJID NABAWI",
    description:
      "Pakej Hotel Dallah Taibah di Madinah menawarkan penginapan selesa bertaraf 4 bintang dengan lokasi strategik hanya 100 meter dari dataran Masjid Nabawi. Hotel ini merupakan pilihan yang berpatutan untuk jemaah yang mengutamakan kemudahan akses ke Masjid Nabawi dengan harga yang kompetitif. Dengan tempoh penginapan ±40 hari dan Penerbangan Awal & Akhir, jemaah dapat menikmati masa yang lebih lapang untuk beribadah. Sajian Asian Fullboard yang lazat dan mesra selera disediakan.",
    image: "/hotel-dallah/1.png",
    detailUrl: "/pakej-haji/dallah-taibah",
    colorScheme: "teal",
  },
];

export function PakejHajiSection() {
  return (
    <motion.section
      id="pakej-haji"
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
            <span className="text-primary font-semibold text-sm md:text-base">Pakej Haji 2026</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Pakej Haji <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">Musim 1447H</span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Pilih pakej haji yang sesuai dengan keperluan dan kemampuan anda. Setiap pakej dilengkapi dengan fasilitas lengkap untuk memastikan pengalaman ibadah haji yang sempurna.
          </p>
        </motion.div>

        {/* Pakej Cards Grid */}
        <motion.div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0" variants={staggerContainer(0.08, 0.08)}>
          {pakejHaji.map((pakej) => {
            const isBlue = pakej.colorScheme === "blue";
            const isRed = pakej.colorScheme === "red";
            const isGreen = pakej.colorScheme === "green";
            const isOrange = pakej.colorScheme === "orange";
            const isPurple = pakej.colorScheme === "purple";
            const isYellow = pakej.colorScheme === "yellow";
            const isTeal = pakej.colorScheme === "teal";
            const gradientClass = isBlue
              ? "bg-gradient-to-br from-blue-500 to-blue-600"
              : isRed
              ? "bg-gradient-to-br from-red-500 to-red-600"
              : isGreen
              ? "bg-gradient-to-br from-green-500 to-green-600"
              : isOrange
              ? "bg-gradient-to-br from-orange-500 to-orange-600"
              : isPurple
              ? "bg-gradient-to-br from-purple-500 to-purple-600"
              : isYellow
              ? "bg-gradient-to-br from-yellow-500 to-yellow-600"
              : isTeal
              ? "bg-gradient-to-br from-teal-500 to-teal-600"
              : "bg-gradient-to-br from-pink-500 to-pink-600";

            return (
              <motion.div key={pakej.id} className="shrink-0 w-[320px] md:w-[360px] lg:w-[380px] snap-center" variants={itemFade}>
                <Card className="bg-white border-0 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg rounded-2xl">
                  {/* Hotel Image */}
                  <div className="relative h-56">
                    {pakej.image && <Image src={pakej.image} alt={pakej.hotelName} fill className="object-cover opacity-80" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />}
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

                    {/* Hotel Name Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-3xl md:text-4xl font-bold mb-1">{pakej.hotelName}</h3>
                      <h4 className="text-xl md:text-2xl font-bold mb-3">{pakej.hotelSubName}</h4>

                      {/* Star Rating */}
                      <div className="flex items-center gap-2 bg-yellow-400/90 px-3 py-1.5 rounded-full w-fit">
                        <span className="text-xs font-semibold text-white">Hotel {pakej.rating} Bintang</span>
                        <div className="flex gap-1">
                          {[...Array(pakej.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-white text-white" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Distance Info */}
                  <div className={`px-6 py-4 ${gradientClass} text-white`}>
                    <div className="text-center">
                      <p className="text-sm md:text-base text-white/90 mb-1">CUMA ± {pakej.distance} METER</p>
                      <p className="text-base md:text-lg font-semibold">KE {pakej.destination}</p>
                    </div>
                  </div>

                  <CardContent className={`flex-1 flex flex-col p-6 ${gradientClass}`}>
                    {/* Description */}
                    <p className="text-white text-sm md:text-base leading-relaxed mb-6 flex-1">{pakej.description}</p>

                    {/* Button */}
                    <Link href={pakej.detailUrl} className="block">
                      <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">Lihat Detail</Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

      </motion.div>
    </motion.section>
  );
}

export default PakejHajiSection;
