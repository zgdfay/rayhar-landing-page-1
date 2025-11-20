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
import { Check, MapPin, Star } from 'lucide-react';

// Data OLAYAN AJYAD Package
const olayanAjyadVariants = [
  {
    id: 'ola44',
    name: 'OLA 44',
    makkahOccupancy: '4 ORANG SEBILIK',
    madinahOccupancy: '4/5 ORANG SEBILIK',
    originalPrice: 'RM59,990',
    p1Price: 'RM56,990',
    discount: 'RM3,000',
    image: '/hotel-ajyad/5.png',
  },
  {
    id: 'ola33',
    name: 'OLA 33',
    makkahOccupancy: '3 ORANG SEBILIK',
    madinahOccupancy: '3 ORANG SEBILIK',
    originalPrice: 'RM66,990',
    p1Price: 'RM63,990',
    discount: 'RM3,000',
    image: '/hotel-ajyad/5.png',
  },
  {
    id: 'ola34',
    name: 'OLA 34',
    makkahOccupancy: '3 ORANG SEBILIK',
    madinahOccupancy: '3 ORANG SEBILIK',
    originalPrice: 'RM67,990',
    p1Price: 'RM64,990',
    discount: 'RM3,000',
    image: '/hotel-ajyad/5.png',
  },
  {
    id: 'ola22',
    name: 'OLA 22',
    makkahOccupancy: '2 ORANG SEBILIK',
    madinahOccupancy: '2 ORANG SEBILIK',
    originalPrice: 'RM80,590',
    p1Price: 'RM77,590',
    discount: 'RM3,000',
    image: '/hotel-ajyad/5.png',
  },
  {
    id: 'ola23',
    name: 'OLA 23',
    makkahOccupancy: '2 ORANG SEBILIK',
    madinahOccupancy: '2 ORANG SEBILIK',
    originalPrice: 'RM82,590',
    p1Price: 'RM79,590',
    discount: 'RM3,000',
    image: '/hotel-ajyad/5.png',
  },
  {
    id: 'ola24',
    name: 'OLA 24',
    makkahOccupancy: '2 ORANG SEBILIK',
    madinahOccupancy: '2 ORANG SEBILIK',
    originalPrice: 'RM84,990',
    p1Price: 'RM81,990',
    discount: 'RM3,000',
    image: '/hotel-ajyad/5.png',
  },
];

// Data OLAYAN AZIZIAH Package
const olayanAziziahVariants = [
  {
    id: 'olaz44p1',
    name: 'OLA AZ 44P1',
    makkahOccupancy: '4 ORANG SEBILIK',
    madinahOccupancy: '4/5 ORANG SEBILIK',
    originalPrice: undefined,
    p1Price: 'RM45,990',
    discount: undefined,
    isSpecial: true,
    image: '/hotel-ajyad/5.png',
  },
  {
    id: 'olaz44',
    name: 'OLA AZ 44',
    makkahOccupancy: '4 ORANG SEBILIK',
    madinahOccupancy: '4/5 ORANG SEBILIK',
    originalPrice: 'RM52,990',
    p1Price: 'RM49,990',
    discount: 'RM3,000',
    image: '/hotel-ajyad/5.png',
  },
  {
    id: 'olaz33',
    name: 'OLA AZ 33',
    makkahOccupancy: '3 ORANG SEBILIK',
    madinahOccupancy: '3 ORANG SEBILIK',
    originalPrice: 'RM54,990',
    p1Price: 'RM51,990',
    discount: 'RM3,000',
    image: '/hotel-ajyad/5.png',
  },
  {
    id: 'olaz34',
    name: 'OLA AZ 34',
    makkahOccupancy: '3 ORANG SEBILIK',
    madinahOccupancy: '3 ORANG SEBILIK',
    originalPrice: 'RM57,590',
    p1Price: 'RM54,590',
    discount: 'RM3,000',
    image: '/hotel-ajyad/5.png',
  },
  {
    id: 'olaz22',
    name: 'OLA AZ 22',
    makkahOccupancy: '2 ORANG SEBILIK',
    madinahOccupancy: '2 ORANG SEBILIK',
    originalPrice: 'RM59,590',
    p1Price: 'RM56,590',
    discount: 'RM3,000',
    image: '/hotel-ajyad/5.png',
  },
  {
    id: 'olaz23',
    name: 'OLA AZ 23',
    makkahOccupancy: '2 ORANG SEBILIK',
    madinahOccupancy: '2 ORANG SEBILIK',
    originalPrice: 'RM61,990',
    p1Price: 'RM58,990',
    discount: 'RM3,000',
    image: '/hotel-ajyad/5.png',
  },
  {
    id: 'olaz24',
    name: 'OLA AZ 24',
    makkahOccupancy: '2 ORANG SEBILIK',
    madinahOccupancy: '2 ORANG SEBILIK',
    originalPrice: 'RM64,590',
    p1Price: 'RM61,590',
    discount: 'RM3,000',
    image: '/hotel-ajyad/5.png',
  },
];

// OLAYAN AJYAD Package Info
const olayanAjyadIncluded = [
  'Hotel Bertaraf 4 bintang ★★★★',
  'Tempoh Di Tanah Suci: +-40 hari (Tertakluk jadual penerbangan Charter Haji)',
  'Penerbangan Awal & Akhir',
  'Sajian citarasa Melayu',
  'Bimbingan komprehensif melalui kuliah-kuliah harian daripada Asatizah Rayhar sepanjang berada di Tanah Suci',
];

const olayanAjyadAdditionalCharges = [
  'Bilik Haram "View" berdua RM1,500.00 seorang',
  'Bilik Haram "View" bertiga RM750.00 seorang',
  'Bilik Haram "View" berempat RM500.00 seorang',
  'Bilik City "View" berempat RM400.00 seorang',
];

// OLAYAN AZIZIAH Package Info
const olayanAziziahIncluded = [
  'Hotel Bertaraf 4 bintang ★★★★',
  'Tempoh Di Tanah Suci: +-40 hari (Tertakluk jadual penerbangan Charter Haji)',
  'Penerbangan Akhir Sahaja',
  'Penginapan di Aziziah akan disusun secara ber 4/5 mengikut jantina bagi semua kategori pakej',
  'Tarikh daftar masuk hotel Aziziah 01 - 15 Zulhijjah',
  'Tarikh daftar masuk hotel Olayan Ajyad 15 Zulhijjah',
  'Sajian citarasa Melayu',
  'Bimbingan komprehensif melalui kuliah-kuliah harian daripada Asatizah Rayhar sepanjang berada di Tanah Suci',
];

const olayanAziziahUpgrade = [
  'Naik Taraf bilik berdua di Aziziah RM6,000.00 seorang',
  'Naik Taraf bilik bertiga di Aziziah RM2,000.00 seorang',
];

const olayanAjyadNotes = [
  '*PERLU CUKUP REGU',
  '*OLA-24, OLA-23 & OLA-34 HANYA UNTUK PENGINAPAN DI MAKKAH SAHAJA',
];

const olayanAziziahNotes = ['*PERLU CUKUP REGU'];

// OLAYAN AJYAD Hotels
const olayanAjyadHotels = {
  makkah: {
    name: 'OLAYAN AJYAD HOTEL',
    board: 'ASIAN FULLBOARD',
    distance: '140M± KE DATARAN MASJIDIL HARAM',
    image: '/hotel-ajyad/5.png',
    detailImages: [
      '/hotel-ajyad/3.png',
      '/hotel-ajyad/4.png',
      '/hotel-ajyad/6.png',
      '/hotel-ajyad/7.png',
      '/hotel-ajyad/8.png',
      '/hotel-ajyad/1.png',
      '/hotel-ajyad/2.png',
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
};

// OLAYAN AZIZIAH Hotels
const olayanAziziahHotels = {
  makkah: {
    name: 'OLAYAN AJYAD HOTEL',
    board: 'ASIAN FULLBOARD',
    distance: '140M± KE DATARAN MASJIDIL HARAM',
    image: '/hotel-ajyad/5.png',
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
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <span>
              <strong>MAKKAH:</strong> {variant.makkahOccupancy}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
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
            {[...Array(4)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-400 fill-yellow-400"
              />
            ))}
            <span className="text-sm font-medium">{hotel.board}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
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

export default function OlayanAjyadPage() {
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
              <BreadcrumbPage>Olayan Ajyad</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Olayan Ajyad Hotel
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl">
            Pakej Olayan Hotel di Makkah merupakan pilihan yang berharga dan
            kondusif dengan jarak 140 meter ke Masjidil Haram. Hotel bertaraf 4
            bintang dengan rating 4.1/5 di Google Reviews. Penginapan di Madinah
            adalah Hotel Dallah Taibah bertaraf 4 ⭐ dengan jarak 100 meter ke
            dataran Masjid Nabawi. Pakej ini menyediakan sajian citarasa Melayu
            dan termasuk bimbingan komprehensif melalui kuliah-kuliah harian
            daripada Asatizah Rayhar sepanjang berada di Tanah Suci.
          </p>
        </div>

        {/* Package Variants Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-10">
            Pilihan Pakej
          </h2>

          {/* OLAYAN AJYAD Package Variants */}
          <div className="mb-12 md:mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-blue-700 font-semibold text-sm md:text-base">
                OLAYAN AJYAD
              </span>
            </div>
            <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory mt-6 -mx-4 px-4 md:mx-0 md:px-0">
              {olayanAjyadVariants.map((variant) => (
                <div
                  key={variant.id}
                  className="shrink-0 w-[300px] md:w-[320px] lg:w-[340px] snap-center">
                  <VariantCard variant={variant} />
                </div>
              ))}
            </div>
          </div>

          {/* OLAYAN AZIZIAH Package Variants */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
                <span className="text-blue-700 font-semibold text-sm md:text-base">
                  OLAYAN AZIZIAH
                </span>
              </div>
              <div className="px-4 py-2 bg-yellow-100 rounded-full">
                <span className="text-yellow-700 font-semibold text-xs md:text-sm">
                  HARGA ISTIMEWA KHAS 50 ORANG JEMAAH TERPILIH AWAL (P1)
                </span>
              </div>
            </div>
            <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
              {olayanAziziahVariants.map((variant) => (
                <div
                  key={variant.id}
                  className="shrink-0 w-[300px] md:w-[320px] lg:w-[340px] snap-center">
                  <VariantCard variant={variant} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OLAYAN AJYAD Package Notes */}
        <Card className="mb-12 md:mb-16 border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-900">
              Catatan Penting - OLAYAN AJYAD
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {olayanAjyadNotes.map((note, index) => (
                <li
                  key={index}
                  className="text-sm md:text-base text-orange-800">
                  {note}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* OLAYAN AZIZIAH Package Notes */}
        <Card className="mb-12 md:mb-16 border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-900">
              Catatan Penting - OLAYAN AZIZIAH
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {olayanAziziahNotes.map((note, index) => (
                <li
                  key={index}
                  className="text-sm md:text-base text-orange-800">
                  {note}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* OLAYAN AJYAD Package Included & Important Info */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Maklumat OLAYAN AJYAD Package
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Included */}
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle>Maklumat Tambahan Pakej</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {olayanAjyadIncluded.map((item, index) => (
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

            {/* Additional Charges */}
            <Card className="border border-amber-200 bg-amber-50/50">
              <CardHeader>
                <CardTitle className="text-amber-900">
                  Bayaran Tambahan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {olayanAjyadAdditionalCharges.map((charge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span className="text-sm md:text-base text-amber-900">
                        {charge}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* OLAYAN AZIZIAH Package Included & Important Info */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Maklumat OLAYAN AZIZIAH Package
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Included */}
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle>Maklumat Tambahan Pakej</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {olayanAziziahIncluded.map((item, index) => (
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

            {/* Upgrade Charges */}
            <Card className="border border-amber-200 bg-amber-50/50">
              <CardHeader>
                <CardTitle className="text-amber-900">
                  Naik Taraf Bilik Aziziah
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {olayanAziziahUpgrade.map((upgrade, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span className="text-sm md:text-base text-amber-900">
                        {upgrade}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* OLAYAN AJYAD Hotel Details */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
            Detail Hotel - OLAYAN AJYAD
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <HotelCard hotel={olayanAjyadHotels.makkah} city="MAKKAH" />
            <HotelCard hotel={olayanAjyadHotels.madinah} city="MADINAH" />
          </div>
        </div>

        {/* OLAYAN AZIZIAH Hotel Details */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
            Detail Hotel - OLAYAN AZIZIAH
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <HotelCard hotel={olayanAziziahHotels.makkah} city="MAKKAH" />
            <HotelCard hotel={olayanAziziahHotels.madinah} city="MADINAH" />
            <HotelCard hotel={olayanAziziahHotels.aziziah} city="AZIZIAH" />
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
