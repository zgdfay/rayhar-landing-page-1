import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/sections/navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, MapPin, Star } from "lucide-react";

// Data DALLAH TAIBAH Package Variants
const dallahTaibahVariants = [
  {
    id: "dal55",
    name: "DAL 55",
    makkahOccupancy: "5 ORANG SEBILIK",
    madinahOccupancy: "5 ORANG SEBILIK",
    originalPrice: "RM52,990",
    p1Price: "RM49,990",
    discount: "RM3,000",
    image: "/hotel-dallah/1.png",
  },
  {
    id: "dal44",
    name: "DAL 44",
    makkahOccupancy: "4 ORANG SEBILIK",
    madinahOccupancy: "4/5 ORANG SEBILIK",
    originalPrice: "RM55,990",
    p1Price: "RM52,990",
    discount: "RM3,000",
    image: "/hotel-dallah/1.png",
  },
  {
    id: "dal33",
    name: "DAL 33",
    makkahOccupancy: "3 ORANG SEBILIK",
    madinahOccupancy: "3 ORANG SEBILIK",
    originalPrice: "RM60,990",
    p1Price: "RM57,990",
    discount: "RM3,000",
    image: "/hotel-dallah/1.png",
  },
  {
    id: "dal22",
    name: "DAL 22",
    makkahOccupancy: "2 ORANG SEBILIK",
    madinahOccupancy: "2 ORANG SEBILIK",
    originalPrice: "RM71,590",
    p1Price: "RM68,590",
    discount: "RM3,000",
    image: "/hotel-dallah/1.png",
  },
];

// DALLAH TAIBAH Package Info
const dallahTaibahIncluded = [
  "Penerbangan Awal & Akhir",
  "Sajian citarasa Melayu",
  "Tempoh: +- 40 hari (Tertakluk jadual penerbangan Charter Haji)",
];

const dallahTaibahNotes = ["*PERLU CUKUP REGU"];

// DALLAH TAIBAH Hotels
const dallahTaibahHotels = {
  makkah: {
    name: "ORINSIS HOTEL @ SETARAF",
    board: "SAJIAN CITARASA MELAYU",
    distance: "190M± KE DATARAN MASJIDIL HARAM",
    image: "/hotel-orinsis/1.png",
    detailImages: ["/hotel-orinsis/2.png", "/hotel-orinsis/3.png"],
  },
  madinah: {
    name: "DALLAH TAIBAH @ SETARAF",
    nameArabic: undefined,
    board: "ASIAN FULLBOARD",
    distance: "100M± KE DATARAN MASJID NABAWI",
    image: "/hotel-dallah/1.png",
    detailImages: [
      "/hotel-dallah/2.png",
      "/hotel-dallah/3.png",
      "/hotel-dallah/4.png",
      "/hotel-dallah/5.png",
      "/hotel-dallah/6.png",
      "/hotel-dallah/7.png",
      "/hotel-dallah/8.png",
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
                  Harga Asal:{" "}
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

export default function DallahTaibahPage() {
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
              <BreadcrumbPage>Dallah Taibah Hotel</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Dallah Taibah Hotel
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl">
            Pakej Hotel Dallah Taibah di Madinah menawarkan penginapan selesa
            bertaraf 4 bintang dengan lokasi strategik hanya 100 meter dari dataran
            Masjid Nabawi. Hotel ini merupakan pilihan yang berpatutan untuk jemaah
            yang mengutamakan kemudahan akses ke Masjid Nabawi dengan harga yang
            kompetitif. Dengan tempoh penginapan ±40 hari dan Penerbangan Awal &
            Akhir, jemaah dapat menikmati masa yang lebih lapang untuk beribadah.
            Sajian Asian Fullboard yang lazat dan mesra selera disediakan, memastikan
            keselesaan jemaah sepanjang penginapan. Bimbingan dan kuliah berterusan
            dapat diadakan di dalam bangunan penginapan tanpa sekatan. Pilihan ideal
            bagi mereka yang mengutamakan lokasi yang baik, kemudahan akses, dan
            bajet berpatutan.
          </p>
        </div>

        {/* Package Variants Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-10">
            Pilihan Pakej
          </h2>

          {/* DALLAH TAIBAH Package Variants */}
          <div className="mb-12 md:mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-teal-100 rounded-full">
              <span className="text-teal-700 font-semibold text-sm md:text-base">
                DALLAH TAIBAH
              </span>
            </div>
            <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory mt-6 -mx-4 px-4 md:mx-0 md:px-0">
              {dallahTaibahVariants.map((variant) => (
                <div
                  key={variant.id}
                  className="shrink-0 w-[300px] md:w-[320px] lg:w-[340px] snap-center">
                  <VariantCard variant={variant} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DALLAH TAIBAH Package Notes */}
        <Card className="mb-12 md:mb-16 border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-900">Catatan Penting</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {dallahTaibahNotes.map((note, index) => (
                <li
                  key={index}
                  className="text-sm md:text-base text-orange-800">
                  {note}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* DALLAH TAIBAH Package Included & Important Info */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Maklumat Tambahan Pakej
          </h3>
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle>Maklumat Tambahan Pakej</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {dallahTaibahIncluded.map((item, index) => (
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
        </div>

        {/* DALLAH TAIBAH Hotel Details */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
            Detail Hotel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <HotelCard hotel={dallahTaibahHotels.makkah} city="MAKKAH" />
            <HotelCard hotel={dallahTaibahHotels.madinah} city="MADINAH" />
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
                  Tempah Sekarang
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

