'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  itemFade,
  sectionFade,
  staggerContainer,
  viewportTight,
} from '@/lib/motion';

interface SpecialOffer {
  title: string;
  smallTitle?: string;
  description: string;
  image: string;
}

const specialOffers: SpecialOffer[] = [
  {
    title: 'Diskaun Eksklusif Sehingga RM7,000',
    description: `
  Ganjaran istimewa untuk pendaftaran awal. Nikmati penjimatan tunai sehingga RM7,000 daripada harga asal pakej.
  <ul class="list-disc ml-5 mt-2">
    <li>Olayan Aziziah (RM45,990)</li>
    <li>Safwah Silver (dari RM49,990)</li>
  </ul>
  <br/>
  Terhad untuk 50 Jemaah (P1) Terawal Sahaja.
`,
    image: '/images/special-offer/spc-1.jpg',
  },
  {
    title: 'Percuma Penghantaran Kargo 10Kg',
    description:
      'Bawa pulang cenderamata, kurma dan lain-lain. Kami faham keinginan anda untuk berkongsi rezeki dari Tanah Suci. Oleh itu, kami hadiahkan 10kg penghantaran kargo FGV percuma.',
    image: '/images/special-offer/spc-2.jpg',
  },
  {
    title: 'Percuma Pemeriksaan Kesihatan',
    smallTitle: 'Bernilai sehingga Rm250',
    description: `Kesihatan anda adalah aset utama dalam melaksanakan ibadah haji. Kami menaja kos pemeriksaan bernilai sehingga RM250.00 berasaskan resit daripada klinik/hospital.
      <br/>
      <br/>
      Menepati kemampuan (Istitio'ah) dari segi kesihatan.
`,
    image: '/images/special-offer/spc-3.jpg',
  },
  {
    title: 'Percuma Tiket Keretapi Laju Haramain (Ekonomi)',
    smallTitle: 'Perjalanan Selesa Makkah - Madinah (atau sebaliknya)',
    description: `
    Alami teknologi pengangkutan termoden di Arab Saudi. Kami menaik taraf perjalanan antara dua kota suci anda daripada bas (yang mengambil masa 5-6 jam) kepada Keretapi Laju Haramain (sekitar 2 jam+). Ini bermakna anda jimat masa, tenaga dan dapat tiba di destinasi dengan keadaan segar, bagi membolehkan anda terus merebut peluang beribadah di Masjidil Haram atau Masjid Nabawi.
    <br/>
    <br/>
    <strong>*Tawaran ini adalah tertakluk kepada ketersediaan perkhidmatan dan kelulusan Pihak Berkuasa Arab Saudi.</strong>
  `,
    image: '/images/special-offer/spc-4.jpg',
  },
  {
    title: 'Percuma Kursus Haji Perdana Eksklusif',
    smallTitle: '2 Hari 1 Malam (Termasuk Penginapan Hotel)',
    description: `
    Persiapan Ilmu adalah bekalan haji terbaik. Kursus eksklusif oleh Rayhar Travels ini bukan sekadar kursus teori di dewan. Ia adalah program intensif selama 2 hari 1 malam, lengkap dengan penginapan hotel. Anda akan menjalani simulasi praktikal manasik haji dalam suasana yang selesa dan terkawal. Dapatkan bimbingan terus daripada para asatizah kami yang berpengalaman agar anda dapat melaksanakan ibadah haji sempurna mungkin.
  `,
    image: '/images/special-offer/spc-5.jpg',
  },
  {
    title: 'Percuma Majlis Kesyukuran “Ihtifal Mahabbah”',
    smallTitle: 'Meraikan Jemaah di Tanah Suci',
    description: `
    Perhimpunan ini adalah untuk menjadikan nostalgia pengalaman haji musim 1447H. Kami akan menganjurkan satu majlis kesyukuran dan makan malam istimewa di Tanah Suci. Majlis 'Ihtifal Mahabbah' ini adalah tanda penghargaan kami dan <strong>platform</strong> untuk mengeratkan silaturahim sesama jemaah.

  `,
    image: '/images/special-offer/spc-6.jpg',
  },
];

export function SpecialPriceSection() {
  return (
    <motion.section
      id="special-price"
      className="relative w-full bg-linear-to-b from-white via-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={viewportTight}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl relative z-10"
        variants={staggerContainer()}>
        {/* Header */}
        <motion.div
          className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center"
          variants={itemFade}>
          <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-xs sm:text-sm md:text-base">
              Tawaran Istimewa
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 px-2 sm:px-0">
            Tawaran Istimewa{' '}
            <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Jemaah P1
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
            Daftarkan diri anda sebelum 4 Januari 2026 untuk menikmati kesemua
            nilai tambah percuma ini, sebagai tanda penghargaan kami di atas
            kepercayaan anda.
          </p>
        </motion.div>

        {/* Offers Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
          variants={staggerContainer(0.03, 0.05)}>
          {specialOffers.map((offer, index) => (
            <motion.div
              key={offer.title}
              variants={itemFade}
              className="h-full">
              <Card className="bg-white border border-gray-200 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative group">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Number Badge */}
                <div className="absolute top-0 left-0 z-20">
                  <div
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 md:px-4 md:py-2 rounded-br-lg rounded-tl-lg bg-linear-to-br from-primary to-primary/90 text-white font-bold text-xs sm:text-sm md:text-base shadow-md"
                    aria-label={`Pakej ${index + 1}`}>
                    {index + 1}
                  </div>
                </div>

                <CardHeader className="pb-3 sm:pb-4 md:pb-5 pt-12 sm:pt-14 md:pt-16 px-4 sm:px-6 relative z-10">
                  <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300">
                    {offer.title}
                  </CardTitle>
                  {offer.smallTitle && (
                    <p className="text-[10px] sm:text-xs md:text-sm font-normal text-muted-foreground mt-1 sm:mt-1.5 md:mt-2">
                      {offer.smallTitle}
                    </p>
                  )}
                </CardHeader>

                <CardContent className="flex-1 flex flex-col px-4 sm:px-6 pb-4 sm:pb-6 pt-0 relative z-10">
                  {/* Description */}
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <div
                      className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: offer.description }}
                    />
                  </div>

                  {/* Image Container */}
                  <div className="relative w-full aspect-video bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300 mt-auto">
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    <Image
                      src={offer.image}
                      alt={`${offer.title} - Layanan Rayhar Travel`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default SpecialPriceSection;
