'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { itemFade, sectionFade, staggerContainer, viewportTight } from '@/lib/motion';

const specialOffers = [
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
    image: '/images/special-offer/diskaun.jpg',
  },
  {
    title: 'Percuma Penghantaran Kargo 10Kg',
    description:
      'Bawa pulang cenderamata, kurma dan lain-lain. Kami faham keinginan anda untuk berkongsi rezeki dari Tanah Suci. Oleh itu, kami hadiahkan 10kg penghantaran kargo FGV percuma.',
    image: '/images/special-offer/FGV.png',
  },
  {
    title: 'Percuma Pemeriksaan Kesihatan – Bernilai sehingga RM250',
    description: `Kesihatan anda adalah aset utama dalam melaksanakan ibadah haji. Kami menaja kos pemeriksaan bernilai sehingga RM250.00 berdasarkan resit daripada klinik/hospital. 
      <br/>
      Menepati kemampuan (Istito’ah) dari segi kesihatan.`,
    image: '/images/special-offer/medical.jpg',
  },
  {
    title: 'Percuma Tiket Keretapi Laju Haramain (Ekonomi)',
    description: `
    Perjalanan Selesa Makkah – Madinah (atau sebaliknya)<br/><br/>
    Alami teknologi pengangkutan moden di Arab Saudi. Kami menaja tiket perjalanan kereta api laju Haramain yang hanya mengambil masa sekitar <strong>2 jam</strong>, jauh lebih pantas berbanding perjalanan bas <strong>6–8 jam</strong>.<br/><br/>
    
    <strong>Dengan tiket Haramain:</strong><br/>
    • Jemaah lebih cepat tiba di destinasi<br/>
    • Kurang keletihan<br/>
    • Perjalanan lebih selesa<br/>
    • Masa ibadah dapat dioptimumkan<br/><br/>

    <em>Nota: Tawaran ini tertakluk kepada ketersediaan perkhidmatan dan kelulusan Pihak Berkuasa Arab Saudi.</em>
  `,
    image: '/images/special-offer/haramain.webp',
  },
  {
    title: 'Percuma Kursus Haji Perdana Eksklusif',
    description: `
    <strong>2 Hari 1 Malam (Termasuk Penginapan Hotel)</strong><br/><br/>
    Persiapan ilmu adalah bekalan haji terbaik. Kursus eksklusif oleh Rayhar Travels ini bukan sekadar kursus teori di dewan, tetapi program intensif selama 2 hari 1 malam yang merangkumi:<br/><br/>
    
    • Latihan praktikal ibadah haji<br/>
    • Simulasi perjalanan haji/umrah<br/>
    • Bimbingan ustaz, mutawif & tenaga pengajar berpengalaman<br/><br/>
    
    Tujuannya adalah untuk memastikan para jemaah benar-benar bersedia dari aspek ilmu dan praktikal.
  `,
    image: '/images/special-offer/7.png',
  },
  {
    title: 'Percuma Majlis Kesyukuran “Ihtifal Mahabbah”',
    description: `
    <strong>Meraikan Jemaah di Tanah Suci</strong><br/><br/>
    Perhimpunan eksklusif ini diadakan bagi mengabadikan nostalgia pengalaman haji musim 1447H. Dalam majlis ini, kami akan menganjurkan:<br/><br/>

    • Majlis kesyukuran<br/>
    • Jamuan makan istimewa<br/>
    • Perhimpunan silaturahim sesama jemaah<br/><br/>

    Majlis Ihtifal Mahabbah ini adalah tanda penghargaan kami kepada jemaah, serta platform untuk mengeratkan hubungan sesama tetamu Allah.
  `,
    image: '/images/special-offer/9.png',
  },
];

export function SpecialPriceSection() {
  return (
    <motion.section
      id="special-price"
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

      <motion.div className="container mx-auto px-4 max-w-7xl relative z-10" variants={staggerContainer()}>
        {/* Header */}
        <motion.div className="mb-12 md:mb-16 lg:mb-20 text-center" variants={itemFade}>
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm md:text-base">
              Tawaran Istimewa
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Tawaran Istimewa{' '}
            <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Jemaah P1
            </span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Daftarkan diri anda sebelum 4 Januari 2026 untuk menikmati kesemua
            nilai tambah percuma ini, sebagai tanda penghargaan kami di atas
            kepercayaan anda.
          </p>
        </motion.div>

        {/* Offers Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10" variants={staggerContainer(0.03, 0.05)}>
          {specialOffers.map((offer, index) => (
            <motion.div key={offer.title} variants={itemFade} className="h-full">
              <Card className="bg-white border border-gray-200 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative group">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Number Badge */}
                <div className="absolute top-0 left-0 z-20">
                  <div
                    className="px-3 py-1.5 md:px-4 md:py-2 rounded-br-lg rounded-tl-lg bg-linear-to-br from-primary to-primary/90 text-white font-bold text-sm md:text-base shadow-md"
                    aria-label={`Pakej ${index + 1}`}>
                    {index + 1}
                  </div>
                </div>

                <CardHeader className="pb-4 md:pb-5 pt-14 md:pt-16 px-6 relative z-10">
                  <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300">
                    {offer.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col px-6 pb-6 pt-0 relative z-10">
                  {/* Description */}
                  <div className="mb-6 md:mb-8">
                    <div
                      className="text-sm md:text-base text-gray-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: offer.description }}
                    />
                  </div>

                  {/* Image Container */}
                  <div className="relative w-full aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300 mt-auto">
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    <Image
                      src={offer.image}
                      alt={`${offer.title} - Layanan Rayhar Travel`}
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

export default SpecialPriceSection;
