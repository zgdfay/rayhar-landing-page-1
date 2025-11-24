'use client';

import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { motion } from 'framer-motion';
import {
  itemFade,
  scaleIn,
  sectionFade,
  staggerContainer,
  viewportMotion,
} from '@/lib/motion';
import countries from 'world-countries';

interface ContactFormState {
  fullName: string;
  countryCode: string;
  whatsapp: string;
  email: string;
}

interface CountryCode {
  code: string;
  country: string;
  flag: string;
}

const initialFormState: ContactFormState = {
  fullName: '',
  countryCode: '+60',
  whatsapp: '',
  email: '',
};

// Generate country codes from world-countries library
const getCountryCodes = (): CountryCode[] => {
  const countryCodesMap = new Map<string, CountryCode>();

  countries.forEach((country) => {
    if (
      country.idd?.root &&
      country.idd?.suffixes &&
      country.idd.suffixes.length > 0
    ) {
      // Combine root and first suffix to get full calling code
      const code = country.idd.root + country.idd.suffixes[0];
      const countryName = country.name.common;
      const flag = country.flag || '🏳️';

      // Use the first occurrence or prefer countries with flags
      if (!countryCodesMap.has(code) || country.flag) {
        countryCodesMap.set(code, {
          code,
          country: countryName,
          flag,
        });
      }
    }
  });

  // Convert map to array and sort by country name
  const countryCodesArray = Array.from(countryCodesMap.values());

  // Sort: Malaysia first, then alphabetically
  countryCodesArray.sort((a, b) => {
    if (a.code === '+60') return -1;
    if (b.code === '+60') return 1;
    return a.country.localeCompare(b.country);
  });

  return countryCodesArray;
};

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormState>(() => ({
    ...initialFormState,
  }));
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [fieldErrors, setFieldErrors] = useState<{
    email?: string;
    whatsapp?: string;
  }>({});
  const [hasClaimed, setHasClaimed] = useState(false);

  // Check if user has already claimed
  useEffect(() => {
    const checkClaimedStatus = () => {
      try {
        const savedData = localStorage.getItem('rayhar_form_submission');
        if (savedData) {
          const userData = JSON.parse(savedData);
          setHasClaimed(true);
          // Pre-fill form with saved data (read-only)
          const savedCountryCode = userData.countryCode || '+60';
          const savedWhatsapp = userData.whatsapp || '';
          // Remove country code from whatsapp if it exists
          const whatsappNumber = savedWhatsapp.startsWith(savedCountryCode)
            ? savedWhatsapp.replace(savedCountryCode, '')
            : savedWhatsapp;

          setFormData({
            fullName: userData.fullName || '',
            countryCode: savedCountryCode,
            whatsapp: whatsappNumber,
            email: userData.email || '',
          });
        }
      } catch (error) {
        console.error('Error reading from localStorage:', error);
      }
    };

    checkClaimedStatus();
  }, []);

  // Memoize country codes to avoid recalculating on every render
  const countryCodes = useMemo(() => getCountryCodes(), []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const nextValue = name === 'whatsapp' ? value.replace(/\D/g, '') : value;
    setFormData((prev) => ({ ...prev, [name]: nextValue }));

    // Clear field error when user starts typing
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof typeof fieldErrors];
        return newErrors;
      });
    }
  };

  const handleCountryCodeChange = (code: string) => {
    setFormData((prev) => ({ ...prev, countryCode: code }));
  };

  const saveUserDataToLocalStorage = (
    fullName: string,
    email: string,
    whatsapp: string,
    countryCode: string
  ) => {
    try {
      const userData = {
        fullName,
        email,
        whatsapp,
        countryCode,
        submittedAt: new Date().toISOString(),
      };

      // Save to localStorage
      localStorage.setItem('rayhar_form_submission', JSON.stringify(userData));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  const selectedCountry = countryCodes.find(
    (item: CountryCode) => item.code === formData.countryCode
  ) ||
    countryCodes[0] || { code: '+60', country: 'Malaysia', flag: '🇲🇾' };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setFieldErrors({});

    try {
      const response = await fetch('/api/form-visitors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname: formData.fullName,
          email: formData.email,
          whatsapp: `${formData.countryCode}${formData.whatsapp}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Check for specific field errors
        if (data.error?.toLowerCase().includes('email')) {
          setFieldErrors({
            email: data.message || 'Email ini telah digunakan sebelumnya',
          });
          toast.error('Email Sudah Digunakan', {
            description: data.message || 'Email ini telah digunakan sebelumnya',
          });
        } else if (data.error?.toLowerCase().includes('whatsapp')) {
          setFieldErrors({
            whatsapp:
              data.message || 'Nomor WhatsApp ini telah digunakan sebelumnya',
          });
          toast.error('Nomor WhatsApp Sudah Digunakan', {
            description:
              data.message || 'Nomor WhatsApp ini telah digunakan sebelumnya',
          });
        } else {
          toast.error('Gagal Mengirim Formulir', {
            description:
              data.message || data.error || 'Gagal mengirim formulir',
          });
        }
        setStatus('error');
        return;
      }

      setStatus('success');

      // Save user data to localStorage
      saveUserDataToLocalStorage(
        formData.fullName,
        formData.email,
        `${formData.countryCode}${formData.whatsapp}`,
        formData.countryCode
      );

      // Mark as claimed
      setHasClaimed(true);

      // Dispatch custom event to notify other components
      window.dispatchEvent(new Event('storage'));
      window.dispatchEvent(new CustomEvent('rayhar:claimed'));

      setFieldErrors({});

      toast.success('Borang Berhasil Dikirim!', {
        description:
          'Terima kasih! Borang anda telah diterima. Pasukan kami akan menghubungi anda dalam masa terdekat.',
      });

      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      toast.error('Terjadi Kesalahan', {
        description:
          'Maaf, terjadi kesalahan saat mengirim formulir. Sila cuba lagi.',
      });

      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  };

  return (
    <motion.section
      id="hubungi"
      className="relative w-full bg-linear-to-b from-white via-gray-50 to-white py-16 md:py-20 lg:py-24 overflow-hidden"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={viewportMotion}>
      <motion.div
        className="container mx-auto px-4 max-w-5xl relative z-10"
        variants={staggerContainer()}>
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          variants={itemFade}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm md:text-base mb-4">
            Isi Borang & Dapat Hadiah
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Dapatkan Konsultasi{' '}
            <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Perjalanan Haji
            </span>{' '}
            + Hadiah Eksklusif
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Lengkapkan borang di bawah, terima panggilan konsultasi peribadi
            dari pasukan Rayhar, dan nikmati hadiah eksklusif sebagai tanda
            penghargaan kami.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10"
          variants={staggerContainer(0.15, 0.1)}>
          <motion.div
            className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border border-primary/10"
            variants={scaleIn}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Nama
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="bg-white/80"
                    placeholder="Nama seperti dalam IC"
                    disabled={status === 'submitting' || hasClaimed}
                  />
                </div>

                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Nombor WhatsApp
                  </label>
                  <div className="flex gap-2">
                    <Select
                      value={formData.countryCode}
                      onValueChange={handleCountryCodeChange}
                      disabled={status === 'submitting' || hasClaimed}>
                      <SelectTrigger className="h-11 w-28 sm:w-36 bg-white/80 border-input rounded-xl px-2 sm:px-3 text-xs sm:text-sm shadow-sm hover:bg-white/90">
                        <SelectValue placeholder="Pilih negara">
                          {selectedCountry.flag} {selectedCountry.code}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent
                        className="w-[calc(100vw-2rem)] sm:w-64 overflow-x-hidden"
                        position="popper">
                        <div className="max-h-[300px] overflow-y-auto overflow-x-hidden p-1">
                          {countryCodes.map((item: CountryCode) => (
                            <SelectItem
                              key={item.code}
                              value={item.code}
                              className="cursor-pointer py-2">
                              <div className="flex items-center gap-2 w-full pr-6">
                                <span className="text-base shrink-0">
                                  {item.flag}
                                </span>
                                <span className="font-medium shrink-0">
                                  {item.code}
                                </span>
                                <span className="ml-auto text-muted-foreground text-xs truncate min-w-0">
                                  {item.country}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </div>
                      </SelectContent>
                    </Select>
                    <div className="flex-1">
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        required
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className={`bg-white/80 flex-1 ${
                          fieldErrors.whatsapp
                            ? 'border-red-500 focus-visible:ring-red-500'
                            : ''
                        }`}
                        placeholder="139938833"
                        disabled={status === 'submitting' || hasClaimed}
                      />
                      {fieldErrors.whatsapp && (
                        <p className="mt-1 text-sm text-red-600">
                          {fieldErrors.whatsapp}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-white/80 ${
                      fieldErrors.email
                        ? 'border-red-500 focus-visible:ring-red-500'
                        : ''
                    }`}
                    placeholder="nama@email.com"
                    disabled={status === 'submitting' || hasClaimed}
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <motion.div
                whileHover={{ scale: status === 'submitting' ? 1 : 1.015 }}
                whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}>
                <Button
                  type="submit"
                  disabled={status === 'submitting' || hasClaimed}
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3 text-base font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  {hasClaimed ? (
                    <>Hadiah Sudah Diklaim</>
                  ) : status === 'submitting' ? (
                    <>Menghantar...</>
                  ) : (
                    <>Hantar Pertanyaan</>
                  )}
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
