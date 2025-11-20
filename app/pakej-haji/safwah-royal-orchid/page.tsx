import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/sections/navbar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, MapPin, Star, Users } from 'lucide-react';

// Data PLATINUM Package
const platinumVariants = [
  {
    id: 'p44',
    name: 'SAFWAH P-44',
    makkahOccupancy: '4 ORANG SEBILIK',
    madinahOccupancy: '4 ORANG SEBILIK',
    originalPrice: 'RM79,590',
    p1Price: 'RM76,590',
    discount: 'RM3,000',
    image: '/hotel-safwah/cover.png',
  },
  {
    id: 'p33',
    name: 'SAFWAH P-33',
    makkahOccupancy: '3 ORANG SEBILIK',
    madinahOccupancy: '3 ORANG SEBILIK',
    originalPrice: 'RM85,990',
    p1Price: 'RM82,990',
    discount: 'RM3,000',
    image: '/hotel-safwah/cover.png',
  },
  {
    id: 'p22',
    name: 'SAFWAH P-22',
    makkahOccupancy: '2 ORANG SEBILIK',
    madinahOccupancy: '2 ORANG SEBILIK',
    originalPrice: 'RM101,990',
    p1Price: 'RM98,990',
    discount: 'RM3,000',
    image: '/hotel-safwah/cover.png',
  },
];

// Data GOLD Package
const goldVariants = [
  {
    id: 'g44',
    name: 'SAFWAH G-44',
    makkahOccupancy: '4 ORANG SEBILIK',
    madinahOccupancy: '4/5 ORANG SEBILIK',
    originalPrice: 'RM62,990',
    p1Price: 'RM59,990',
    discount: 'RM3,000',
    image: '/hotel-safwah/cover.png',
  },
  {
    id: 'g33',
    name: 'SAFWAH G-33',
    makkahOccupancy: '3 ORANG SEBILIK',
    madinahOccupancy: '3 ORANG SEBILIK',
    originalPrice: 'RM67,990',
    p1Price: 'RM64,990',
    discount: 'RM3,000',
    image: '/hotel-safwah/cover.png',
  },
  {
    id: 'g22',
    name: 'SAFWAH G-22',
    makkahOccupancy: '2 ORANG SEBILIK',
    madinahOccupancy: '2 ORANG SEBILIK',
    originalPrice: 'RM76,990',
    p1Price: 'RM73,990',
    discount: 'RM3,000',
    image: '/hotel-safwah/cover.png',
  },
];

// Data SILVER Package
const silverVariants = [
  {
    id: 's55p1',
    name: 'SAFWAH S-55P1',
    makkahOccupancy: '5 ORANG SEBILIK',
    madinahOccupancy: '5 ORANG SEBILIK',
    originalPrice: undefined,
    p1Price: 'RM49,990',
    discount: undefined,
    isSpecial: true,
    image: '/hotel-safwah/1.png',
  },
  {
    id: 's44p1',
    name: 'SAFWAH S-44P1',
    makkahOccupancy: '4 ORANG SEBILIK',
    madinahOccupancy: '4/5 ORANG SEBILIK',
    originalPrice: undefined,
    p1Price: 'RM51,990',
    discount: undefined,
    isSpecial: true,
    image: '/hotel-safwah/cover.png',
  },
  {
    id: 's55',
    name: 'SAFWAH S-55',
    makkahOccupancy: '5 ORANG SEBILIK',
    madinahOccupancy: '5 ORANG SEBILIK',
    originalPrice: 'RM54,590',
    p1Price: 'RM51,590',
    discount: 'RM3,000',
    image: '/hotel-safwah/cover.png',
  },
  {
    id: 's44',
    name: 'SAFWAH S-44',
    makkahOccupancy: '4 ORANG SEBILIK',
    madinahOccupancy: '4/5 ORANG SEBILIK',
    originalPrice: 'RM55,990',
    p1Price: 'RM52,990',
    discount: 'RM3,000',
    image: '/hotel-safwah/cover.png',
  },
  {
    id: 's33',
    name: 'SAFWAH S-33',
    makkahOccupancy: '3 ORANG SEBILIK',
    madinahOccupancy: '3 ORANG SEBILIK',
    originalPrice: 'RM58,590',
    p1Price: 'RM55,590',
    discount: 'RM3,000',
    image: '/hotel-safwah/cover.png',
  },
  {
    id: 's22',
    name: 'SAFWAH S-22',
    makkahOccupancy: '2 ORANG SEBILIK',
    madinahOccupancy: '2 ORANG SEBILIK',
    originalPrice: 'RM62,990',
    p1Price: 'RM59,990',
    discount: 'RM3,000',
    image: '/hotel-safwah/cover.png',
  },
];

// PLATINUM Package Info
const platinumIncluded = [
  'Hotel Bertaraf 5 bintang ★★★★★',
  'Makan dan minum disediakan oleh Hotel (Fullboard International Buffet)',
  'Tempoh Di Tanah Suci: 24 hari',
  'Tarikh Masuk Makkah Selepas 01 Zulhijjah',
  'Tarikh Keluar Makkah Pada 20 Zulhijjah',
  'Tarikh Masuk Madinah Pada 20 Zulhijjah',
  'Tarikh Keluar Madinah Pada/Sebelum 24 Zulhijjah',
  'Tiket Haramain Speed Train (Makkah - Madinah)',
];

const platinumImportantInfo = [
  'Bilik dengan "View" (atas permintaan) dengan bayaran tambahan mengikut kadar yang ditetapkan oleh pihak hotel.',
  'Penerbangan komersial kelas perniagaan dengan bayaran tambahan mengikut harga sebenar yang dikenakan oleh pihak penerbangan.',
  'Tempat duduk kelas perniagaan tertakluk kepada kekosongan dalam penerbangan.',
  'Rayhar Travels tidak memberi jaminan dan tidak boleh dipertanggungjawabkan sekiranya jemaah tidak berjaya memperolehi tempat duduk kelas perniagaan. Permohonan tempat duduk kelas perniagaan adalah tertakluk kepada kelulusan Tabung Haji.',
];

// GOLD Package Info
const goldIncluded = [
  'Hotel Bertaraf 4 Atau 5 bintang ★★★★★',
  'Tempoh Di Tanah Suci: 28 hari - 30 hari (Tertakluk jadual penerbangan Charter Haji)',
  'Tarikh Masuk Makkah Selepas 27 Zulkaedah',
  'Tarikh Keluar Makkah Pada 04 Zulhijjah',
  'Tarikh Masuk Aziziah Pada 04 Zulhijjah',
  'Tarikh Keluar Aziziah Pada 15 Zulhijjah',
  'Tarikh Masuk Makkah Selepas 15 Zulhijjah',
  'Tarikh Keluar Makkah Pada 20 Zulhijjah',
  'Tarikh Masuk Madinah Pada 20 Zulhijjah',
  'Tarikh Keluar Madinah Pada 24 Zulhijjah',
];

const goldImportantInfo = [
  'Bilik dengan "View" (atas permintaan) dengan bayaran tambahan mengikut kadar yang ditetapkan oleh pihak hotel.',
  'Penginapan di Aziziah akan disusun sama dengan tempahan bilik di Makkah dan Madinah',
  'Penerbangan akhir Charter Haji',
  'Penerbangan komersial kelas perniagaan dengan bayaran tambahan mengikut harga sebenar yang dikenakan oleh pihak penerbangan.',
  'Tempat duduk kelas perniagaan tertakluk kepada kekosongan dalam penerbangan.',
  'Rayhar Travels tidak memberi jaminan dan tidak boleh dipertanggungjawabkan sekiranya jemaah tidak berjaya memperolehi tempat duduk kelas perniagaan. Permohonan tempat duduk kelas perniagaan adalah tertakluk kepada kelulusan Tabung Haji.',
];

// SILVER Package Info
const silverIncluded = [
  'Hotel Bertaraf 4 Atau 5 bintang ★★★★★',
  'Tempoh Di Tanah Suci: +-40 hari (Tertakluk jadual penerbangan Charter Haji)',
  'Tarikh Masuk Aziziah Selepas 01 Zulhijjah',
  'Tarikh Keluar Aziziah Pada 15 Zulhijjah',
  'Tarikh Masuk Makkah Pada 15 Zulhijjah',
  'Tarikh Keluar Makkah Pada 01 Muharram',
  'Tarikh Masuk Madinah Pada 01 Muharram',
  'Tarikh Keluar Madinah Pada 09 Muharram',
];

const silverImportantInfo = [
  'Bilik dengan "View" (atas permintaan) dengan bayaran tambahan mengikut kadar yang ditetapkan oleh pihak hotel.',
  'Penginapan di Aziziah akan disusun secara ber 4/5 mengikut jantina bagi semua kategori pakej.',
  'Naik Taraf bilik berdua di Aziziah RM6,000.00 seorang',
  'Naik Taraf bilik bertiga di Aziziah RM2,000.00 seorang',
  'Penerbangan akhir Charter Haji',
  'Penerbangan komersial kelas perniagaan dengan bayaran tambahan mengikut harga sebenar yang dikenakan oleh pihak penerbangan.',
  'Tempat duduk kelas perniagaan tertakluk kepada kekosongan dalam penerbangan.',
  'Rayhar Travels tidak memberi jaminan dan tidak boleh dipertanggungjawabkan sekiranya jemaah tidak berjaya memperolehi tempat duduk kelas perniagaan. Permohonan tempat duduk kelas perniagaan adalah tertakluk kepada kelulusan Tabung Haji.',
];

const packageNotes = [
  '*PERLU CUKUP REGU',
  '*BILIK "NON VIEW"',
  '*KATIL TAMBAHAN AKAN DISEDIAKAN DI BILIK BERTIGA DAN BILIK BEREMPAT',
];

// PLATINUM Hotels
const platinumHotels = {
  makkah: {
    name: 'AL SAFWAH ROYAL ORCHID',
    board: 'INTERNATIONAL FULLBOARD',
    distance: '50M± KE DATARAN MASJIDIL HARAM',
    image: '/hotel-safwah/cover.png',
    detailImages: [
      '/hotel-safwah/2.png',
      '/hotel-safwah/3.png',
      '/hotel-safwah/4.png',
      '/hotel-safwah/5.png',
    ],
  },
  madinah: {
    name: 'THE BILTMORE MADINAH',
    board: 'INTERNATIONAL FULLBOARD',
    distance: '15M± KE DATARAN MASJID NABAWI',
    image: '/hotel-biltmore/1.png',
    detailImages: [
      '/hotel-biltmore/2.png',
      '/hotel-biltmore/3.png',
      '/hotel-biltmore/4.png',
      '/hotel-biltmore/5.png',
      '/hotel-biltmore/6.png',
      '/hotel-biltmore/7.png',
      '/hotel-biltmore/8.png',
    ],
  },
};

// GOLD & SILVER Hotels
const goldSilverHotels = {
  makkah: {
    name: 'AL SAFWAH ROYAL ORCHID',
    board: 'ASIAN FULLBOARD',
    distance: '50M± KE DATARAN MASJIDIL HARAM',
    image: '/hotel-safwah/cover.png',
    detailImages: [
      '/hotel-safwah/2.png',
      '/hotel-safwah/3.png',
      '/hotel-safwah/4.png',
      '/hotel-safwah/5.png',
    ],
  },
  madinah: {
    name: 'DALLAH TAIBAH',
    nameArabic: undefined,
    board: 'ASIAN FULLBOARD',
    distance: '100M± KE DATARAN MASJID NABAWI',
    image: '/hotel-dallah/1.png',
    detailImages: [
      '/hotel-dallah/2.png',
      '/hotel-dallah/3.png',
      '/hotel-dallah/4.png',
      '/hotel-dallah/5.png',
      '/hotel-dallah/6.png',
      '/hotel-dallah/7.png',
      '/hotel-dallah/8.png',
    ],
  },
  aziziah: {
    name: 'ZAHRAT AL YASSER',
    nameArabic: undefined,
    board: 'SAJIAN CITARASA MELAYU',
    distance: '480M± KE KOMPLEKS JAMARAT',
    image: '/hotel-zahrat/1.png',
    detailImages: [
      '/hotel-zahrat/2.png',
      '/hotel-zahrat/3.png',
      '/hotel-zahrat/4.png',
      '/hotel-zahrat/5.png',
      '/hotel-zahrat/6.png',
      '/hotel-zahrat/7.png',
      '/hotel-zahrat/8.png',
    ],
  },
};

// Helper Component for Variant Card
function VariantCard({
  variant,
}: {
  variant: {
    id: string;
    name: string;
    makkahOccupancy: string;
    madinahOccupancy: string;
    originalPrice?: string;
    p1Price: string;
    discount?: string;
    isSpecial?: boolean;
    image: string;
  };
}) {
  return (
    <Card className="border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 bg-gray-100">
        <Image
          src={variant.image}
          alt={variant.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl md:text-2xl">{variant.name}</CardTitle>
          {variant.isSpecial && (
            <span className="text-xs font-bold text-yellow-700 bg-yellow-200 px-2 py-1 rounded">
              P1 KHAS
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-primary" />
            <span>
              <strong>MAKKAH:</strong> {variant.makkahOccupancy}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-primary" />
            <span>
              <strong>MADINAH:</strong> {variant.madinahOccupancy}
            </span>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          {variant.isSpecial ? (
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {variant.p1Price}
              </div>
              <div className="text-xs text-yellow-700 bg-yellow-100 px-2 py-1 rounded w-fit">
                Harga Istimewa P1
              </div>
            </div>
          ) : (
            <>
              {variant.originalPrice && (
                <div className="text-sm text-gray-500 mb-1">
                  Harga Asal:{' '}
                  <span className="line-through">{variant.originalPrice}</span>
                </div>
              )}
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {variant.p1Price}
              </div>
              <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded w-fit mb-2">
                Untuk Jemaah Kategori Terpilih Awal (P1)
              </div>
              {variant.discount && (
                <div className="text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded w-fit">
                  Jimat {variant.discount}
                </div>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Helper Component for Hotel Card
function HotelCard({
  hotel,
  city,
}: {
  hotel: {
    name: string;
    nameArabic?: string;
    board: string;
    distance: string;
    image: string;
    detailImages: string[];
  };
  city: string;
}) {
  return (
    <Card className="border border-gray-200 overflow-hidden">
      <div className="relative h-64 bg-gray-100">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{city}</CardTitle>
        <p className="font-semibold text-base">{hotel.name}</p>
        {hotel.nameArabic && (
          <p className="text-sm text-gray-500">{hotel.nameArabic}</p>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-400 fill-yellow-400"
              />
            ))}
            <span className="text-sm font-medium">{hotel.board}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-primary" />
            <span>
              <strong>JARAK:</strong> {hotel.distance}
            </span>
          </div>
        </div>

        {/* Detail Kamar Images */}
        {hotel.detailImages && hotel.detailImages.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Detail Kamar
            </h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory">
              {hotel.detailImages.map((img, index) => (
                <div
                  key={index}
                  className="relative h-32 w-48 bg-gray-100 rounded-lg overflow-hidden shrink-0 snap-center">
                  <Image
                    src={img}
                    alt={`Detail kamar ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function SafwahRoyalOrchidPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-gray-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 max-w-7xl py-8 md:py-12">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6 md:mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Laman Utama</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/#pakej-haji">Pakej Haji</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Safwah Royal Orchid</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Safwah Royal Orchid
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl">
            Pakej eksklusif dengan penginapan 5 bintang terbaik, lokasi
            strategik hanya 50 meter dari Masjidil Haram dan 15 meter dari
            Masjid Nabawi. Pakej ini termasuk tiket Haramain Speed Train sektor
            Makkah - Madinah.
          </p>
        </div>

        {/* Package Variants Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-10">
            Pilihan Pakej
          </h2>

          {/* PLATINUM Package Variants */}
          <div className="mb-12 md:mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 font-semibold text-sm md:text-base">
                PLATINUM
              </span>
            </div>
            <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory mt-6 -mx-4 px-4 md:mx-0 md:px-0">
              {platinumVariants.map((variant) => (
                <div
                  key={variant.id}
                  className="shrink-0 w-[300px] md:w-[320px] lg:w-[340px] snap-center">
                  <VariantCard variant={variant} />
                </div>
              ))}
            </div>
          </div>

          {/* GOLD Package Variants */}
          <div className="mb-12 md:mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-yellow-100 rounded-full">
              <span className="text-yellow-700 font-semibold text-sm md:text-base">
                GOLD
              </span>
            </div>
            <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory mt-6 -mx-4 px-4 md:mx-0 md:px-0">
              {goldVariants.map((variant) => (
                <div
                  key={variant.id}
                  className="shrink-0 w-[300px] md:w-[320px] lg:w-[340px] snap-center">
                  <VariantCard variant={variant} />
                </div>
              ))}
            </div>
          </div>

          {/* SILVER Package Variants */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
                <span className="text-gray-700 font-semibold text-sm md:text-base">
                  SILVER
                </span>
              </div>
              <div className="px-4 py-2 bg-yellow-100 rounded-full">
                <span className="text-yellow-700 font-semibold text-xs md:text-sm">
                  HARGA ISTIMEWA KHAS 50 ORANG JEMAAH TERPILIH AWAL (P1)
                </span>
              </div>
            </div>
            <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
              {silverVariants.map((variant) => (
                <div
                  key={variant.id}
                  className="shrink-0 w-[300px] md:w-[320px] lg:w-[340px] snap-center">
                  <VariantCard variant={variant} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PLATINUM Package Notes */}
        <Card className="mb-12 md:mb-16 border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-900">
              Catatan Penting - PLATINUM
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {packageNotes.map((note, index) => (
                <li
                  key={index}
                  className="text-sm md:text-base text-orange-800">
                  {note}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* PLATINUM Package Included & Important Info */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Maklumat PLATINUM Package
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Included */}
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle>Maklumat Tambahan Pakej</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {platinumIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Important Info */}
            <Card className="border border-amber-200 bg-amber-50/50">
              <CardHeader>
                <CardTitle className="text-amber-900">
                  Maklumat Penting Pakej
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {platinumImportantInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span className="text-sm md:text-base text-amber-900">
                        {info}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* GOLD Package Included & Important Info */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Maklumat GOLD Package
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Included */}
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle>Maklumat Tambahan Pakej</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {goldIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Important Info */}
            <Card className="border border-amber-200 bg-amber-50/50">
              <CardHeader>
                <CardTitle className="text-amber-900">
                  Maklumat Penting Pakej
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {goldImportantInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span className="text-sm md:text-base text-amber-900">
                        {info}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* SILVER Package Included & Important Info */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Maklumat SILVER Package
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Included */}
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle>Maklumat Tambahan Pakej</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {silverIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Important Info */}
            <Card className="border border-amber-200 bg-amber-50/50">
              <CardHeader>
                <CardTitle className="text-amber-900">
                  Maklumat Penting Pakej
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {silverImportantInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span className="text-sm md:text-base text-amber-900">
                        {info}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* PLATINUM Hotel Details */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
            Detail Hotel - PLATINUM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <HotelCard hotel={platinumHotels.makkah} city="MAKKAH" />
            <HotelCard hotel={platinumHotels.madinah} city="MADINAH" />
          </div>
        </div>

        {/* GOLD & SILVER Hotel Details */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
            Detail Hotel - GOLD & SILVER
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <HotelCard hotel={goldSilverHotels.makkah} city="MAKKAH" />
            <HotelCard hotel={goldSilverHotels.madinah} city="MADINAH" />
            <HotelCard hotel={goldSilverHotels.aziziah} city="AZIZIAH" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-linear-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6 md:p-8">
              <p className="text-base md:text-lg text-gray-700 mb-4">
                Berminat dengan pakej ini? Hubungi kami untuk pendaftaran atau
                konsultasi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white">
                  Daftar Sekarang
                </Button>
                <Button size="lg" variant="outline">
                  Hubungi Kami
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
