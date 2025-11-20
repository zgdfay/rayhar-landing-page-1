"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { itemFade, scaleIn, sectionFade, staggerContainer, viewportMotion } from "@/lib/motion";

interface ContactFormState {
  fullName: string;
  whatsapp: string;
  email: string;
}

const initialFormState: ContactFormState = {
  fullName: "",
  whatsapp: "",
  email: "",
};

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormState>(() => ({ ...initialFormState }));
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    const nextValue = name === "whatsapp" ? value.replace(/\D/g, "") : value;
    setFormData((prev) => ({ ...prev, [name]: nextValue }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({ ...initialFormState });

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <motion.section
      id="hubungi"
      className="relative w-full bg-linear-to-b from-white via-gray-50 to-white py-16 md:py-20 lg:py-24 overflow-hidden"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={viewportMotion}>
      <motion.div className="container mx-auto px-4 max-w-5xl relative z-10" variants={staggerContainer()}>
        <motion.div className="text-center max-w-2xl mx-auto mb-12" variants={itemFade}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm md:text-base mb-4">Isi Borang & Dapat Hadiah</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Dapatkan Konsultasi <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">Perjalanan Haji</span> + Hadiah Eksklusif
          </h2>
          <p className="text-base md:text-lg text-gray-600">Lengkapkan borang di bawah, terima panggilan konsultasi peribadi dari pasukan Rayhar, dan nikmati hadiah eksklusif sebagai tanda penghargaan kami.</p>
        </motion.div>

        <motion.div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10" variants={staggerContainer(0.15, 0.1)}>
          <motion.div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border border-primary/10" variants={scaleIn}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Nama
                  </label>
                  <Input id="fullName" name="fullName" type="text" required value={formData.fullName} onChange={handleChange} className="bg-white/80" placeholder="Nama seperti dalam IC" />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Nombor WhatsApp
                  </label>
                  <Input id="whatsapp" name="whatsapp" type="tel" inputMode="numeric" pattern="[0-9]*" required value={formData.whatsapp} onChange={handleChange} className="bg-white/80" placeholder="Nombor WhatsApp Aktif" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="bg-white/80" placeholder="nama@email.com" />
                </div>
              </div>

              {status === "success" && <div className="rounded-xl border border-green-200 bg-green-50 text-green-600 text-sm px-4 py-3">Terima kasih! Borang anda telah diterima. Pasukan kami akan menghubungi anda dalam masa terdekat.</div>}

              <motion.div whileHover={{ scale: status === "submitting" ? 1 : 1.015 }} whileTap={{ scale: status === "submitting" ? 1 : 0.98 }}>
                <Button type="submit" disabled={status === "submitting"} className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3 text-base font-semibold flex items-center justify-center gap-2">
                {status === "submitting" ? <>Menghantar...</> : <>Hantar Pertanyaan</>}
              </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default ContactSection;
