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

interface Feature {
  title: string;
  smallTitle?: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    title: 'Dipercayai Sejak 1990/1410 Hijriah',
    description: ` Kami bukan sekadar menguruskan perjalanan ibadah; kami junjung amanah yang suci menyantuni tetamu Allah dan Rasul dengan penuh tanggungjawab. Sebagai antara
    <strong>perintis pengurusan haji di Malaysia,</strong> kami telah berkhidmat sejak tahun <strong>1990 (1410 Hijrah)</strong>. Lebih tiga dekad pengalaman ini bukan sekadar angka, tetapi warisan yang membentuk keutuhan nilai kami dalam memahami denyut nadi dan keperluan setiap jemaah.
    <br/>
    <br/>
      Tunjang kepada warisan ini adalah <strong>Pengarah Urusan kami sendiri, YBhg Tuan Haji Harun</strong>. Sejak hari pertama penubuhan, beliau masih kekal aktif turun padang memimpin dan menguruskan jemaah di Tanah Suci. Pengalaman 'on-ground' beliau yang tidak ternilai ini telah mencipta satu <strong>'know-how' (selok-belok)pengurusan jemaah yang tiada tandingan.</strong> 
      <br/>
      <br/>
      DNA 'Rayhar' ini adalah cara kami menyantuni tetamu Allah yang mengalir dalam setiap ahli pasukan kami, dari pengurusan atasan hingga ke petugas di lapangan. Pasukan kami adalah <strong>jaminan untuk ketenangan dan kelancaran ibadah anda.</strong>
`,
    image: '/images/features/feat-1.jpg',
  },
  {
    title: 'Bimbingan Komprehensif di Tanah Air dan Tanah Suci ',
    description: `Ibadah Haji adalah sebuah perjalanan rohani sekali seumur hidup. Justeru, kami menyediakan bimbingan lengkap untuk ketenangan fikiran dan kesempurnaan ibadah anda. Komitmen kami bermula dari hari pertama anda mendaftar di Tanah Air, merangkumi setiap aspek persiapan ilmu dan praktikal. Apabila tiba di Tanah Suci, bimbingan komprehensif diteruskan dengan penuh dedikasi oleh jurusan Asatizah kami. Mereka bukan sahaja berpengalaman luas, tetapi merupakan guru agama yang dipercayai oleh Tabung Haji yang mengiktiraf sijil PEKTA (Pengkursus Haji Tanah Air) dan PIHTAS (Pembimbing Ibadah Haji Tanah Suci). 
      Ini menjamin bahawa setiap kemusykilan terjawab dan setiap rukun dapat dilaksanakan dengan sempurna dan yakin.
      <br/>
      <br/>
      <strong>Ilmu Mantap, Ibadah Sempurna, Haji yang Mabrur tercapai, Insya-Allah.</strong>
      `,
    image: '/images/features/feat-2.jpg',
  },
  {
    title: 'Lokasi Strategik',
    smallTitle: "Bukan Sekadar 'Dekat Dataran' atau 'Perkarangan Masjid'",
    description: `Keistimewaan utama Pakej Haji Rayhar adalah jaminan penginapan di lokasi strategik, yang amat dekat dan memudahkan.
<br/>
<br/>
<strong>Di Makkah:</strong>
<br/>
Kebanyakan hotel pilihan Rayhar berada di kawasan Ajyad Street. Kelebihannya? Ia adalah penempatan hotel yang terdekat dengan Pintu King Abdul Aziz, iaitu pintu utama yang memberi anda akses terus ke dataran Kaabah.
<br/>
<br/>
<strong>Di Madinah:</strong>
<br/>
Semua jemaah pakej Rayhar akan menginap di Hotel Dallah Taibah. Hotel ini terletak 100m dari dataran, serta mempunyai kelebihan khas yang sangat dekat dengan Pintu 25, iaitu pintu utama ke ruangan solat jemaah wanita.
<br/>
<br/>
Kedua-dua lokasi strategik ini membolehkan jemaah mengoptimumkan masa solat lima waktu tanpa gagal di Masjidil Haram dan Masjid Nabawi dengan tenang dan selesa.
`,
    image: '/images/features/feat-3.jpg',
  },
  {
    title: 'Nikmati 8 Malam Penuh di Madinah',
    smallTitle: 'Lengkapkan Ibadah & Ziarah Anda',
    description: `Kami faham, mengurangkan tempoh malam di Madinah boleh merendahkan harga pakej. Namun, fokus utama Rayhar adalah memaksimumkan waktu beribadah dan ziarah. 
    Kami mahu anda mengoptimumkan masa di Masjid Nabawi dan menelusuri sirah Nabi SAW melalui ziarah yang dibimbing oleh Guru Agama Rayhar yang berpengalaman. Oleh itu, kami menjamin <strong>8 malam penuh di Madinah </strong>di lokasi strategik Hotel Dallah Taibah. Ini adalah komitmen kami, 
    Rayhar tidak mengorbankan keselesaan masa atau kemudahan lokasi demi harga yang lebih rendah.
    <br/>
    <br/>
    <strong>(Pengecualian: Pakej Safwah Platinum dan Safwah Gold direka khas untuk perjalanan lebih singkat tidak termasuk tempoh 8 malam ini.)</strong>
</strong>
`,
    image: '/images/features/feat-4.jpg',
  },
  {
    title: 'Percuma Tiket Haramain',
    smallTitle: 'Perjalanan Pantas, Masa Ibadah Terjaga',
    description: `Kami di Rayhar memahami bahawa setiap minit di Tanah Suci adalah amat berharga. Perjalanan darat yang panjang menggunakan bas antara Madinah dan Makkah boleh mengambil masa antara 6 hingga 8 jam, satu tempoh yang meletihkan. Justeru, sebagai komitmen kami terhadap keselesaan maksimum para jemaah, semua pakej kami kini didatangkan dengan satu keistimewaan: <strong>Tiket Keretapi Berkelajuan Tinggi Haramain (Haramain High Speed Train) kelas ekonomi secara PERCUMA.</strong>
    <br/>
    <br/>
    <strong>*Tawaran ini adalah tertakluk kepada ketersediaan perkhidmatan dan kelulusan Pihak Berkuasa Arab Saudi.
</strong>
`,
    image: '/images/features/feat-5.jpg',
  },
  {
    title: 'Sajian Lengkap 3x Sehari:',
    smallTitle: 'Makanan Sedap, Ibadah Mantap',
    description: `Bagi memastikan anda sentiasa bertenaga untuk beribadah, kami menyediakan sajian lengkap (bufet 3 kali sehari) di hotel penginapan anda. Anda tidak perlu lagi risau tentang soal makanan. Bergantung pada pilihan pakej, anda akan disajikan dengan Bufet Antarabangsa atau Asia.
    <br/>
    <br/>
    Paling istimewa, kami turut bawakan Sajian Citarasa Melayu yang sesuai dengan selera jemaah haji Malaysia.
`,

    image: '/images/features/feat-6.jpg',
  },
];

export function FeaturesSection() {
  return (
    <motion.section
      id="features"
      className="relative w-full bg-linear-to-b from-white via-gray-50 to-white py-16 md:py-20 lg:py-24"
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
          className="mb-12 md:mb-16 lg:mb-20 text-center"
          variants={itemFade}>
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm md:text-base">
              Keunggulan Kami
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Mengapa Memilih{' '}
            <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Rayhar
            </span>
            <br className="hidden sm:block" />
            untuk Perjalanan Haji Anda?
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Kami menyediakan layanan lengkap untuk memastikan perjalanan ibadah
            haji & umrah Anda berjalan lancar, nyaman, dan penuh berkah dengan
            berbagai keunggulan berikut:
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
          variants={staggerContainer(0.03, 0.05)}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemFade}
              className="h-full">
              <Card className="bg-white border border-gray-200 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative group">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Number Badge */}
                <div className="absolute top-0 left-0 z-20">
                  <div
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 md:px-4 md:py-2 rounded-br-lg rounded-tl-lg bg-linear-to-br from-primary to-primary/90 text-white font-bold text-xs sm:text-sm md:text-base shadow-md"
                    aria-label={`Fitur ${index + 1}`}>
                    {index + 1}
                  </div>
                </div>

                <CardHeader className="pb-3 sm:pb-4 md:pb-5 pt-12 sm:pt-14 md:pt-16 px-4 sm:px-6 relative z-10">
                  <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  {feature.smallTitle && (
                    <p className="text-xs sm:text-sm font-normal text-muted-foreground mt-1.5 sm:mt-2">
                      {feature.smallTitle}
                    </p>
                  )}
                </CardHeader>

                <CardContent className="flex-1 flex flex-col px-4 sm:px-6 pb-4 sm:pb-6 pt-0 relative z-10">
                  {/* Description */}
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <div
                      className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: feature.description }}
                    />
                  </div>

                  {/* Image Container */}
                  <div className="relative w-full aspect-video bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300 mt-auto">
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    <Image
                      src={feature.image}
                      alt={`${feature.title} - Layanan Rayhar Travel`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

export default FeaturesSection;
