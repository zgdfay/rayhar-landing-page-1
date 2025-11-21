import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import axios from 'axios';

interface FormVisitorPayload {
  fullname: string;
  email: string;
  whatsapp: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: FormVisitorPayload = await request.json();

    // Validasi input
    if (!body.fullname || !body.email || !body.whatsapp) {
      return NextResponse.json(
        {
          error: 'Semua field wajib diisi',
          message: 'fullname, email, dan whatsapp harus diisi',
        },
        { status: 400 }
      );
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          error: 'Format email tidak valid',
        },
        { status: 400 }
      );
    }

    // Validasi format whatsapp harus berawalan kode negara, maksimal 15 digit
    // exp: +628214678901

    const whatsappRegex = /^(\+)[0-9]{1,15}$/;
    if (!whatsappRegex.test(body.whatsapp)) {
      return NextResponse.json(
        {
          error: 'Format whatsapp tidak valid',
        },
        { status: 400 }
      );
    }

    // Normalize data
    const normalizedEmail = body.email.trim().toLowerCase();
    const normalizedWhatsapp = body.whatsapp.trim();

    // Cek apakah email sudah ada di database
    const { data: existingEmail, error: emailError } = await supabase
      .from('form_visitors')
      .select('email')
      .eq('email', normalizedEmail)
      .single();

    if (existingEmail && !emailError) {
      return NextResponse.json(
        {
          error: 'Email sudah ada di database',
          message: 'Email ini telah digunakan sebelumnya',
        },
        { status: 400 }
      );
    }

    // Cek apakah whatsapp sudah ada di database
    const { data: existingWhatsapp, error: whatsappError } = await supabase
      .from('form_visitors')
      .select('whatsapp')
      .eq('whatsapp', normalizedWhatsapp)
      .single();

    if (existingWhatsapp && !whatsappError) {
      return NextResponse.json(
        {
          error: 'Whatsapp sudah ada di database',
          message: 'Nomor WhatsApp ini telah digunakan sebelumnya',
        },
        { status: 400 }
      );
    }

    // Insert ke Supabase
    const { data, error } = await supabase
      .from('form_visitors')
      .insert({
        fullname: body.fullname.trim(),
        email: normalizedEmail,
        whatsapp: `${normalizedWhatsapp}`,
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        {
          error: 'Gagal menyimpan data',
          message:
            error.message ||
            'Terjadi kesalahan saat menyimpan data ke database',
        },
        { status: 500 }
      );
    }

    console.log('data', data);
    // integration inquiries automation
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_INQUIRIES_API_URL}/api/booking/inquiry`,
      {
        id: data.id,
      }
    );

    if (response.status !== 200) {
      console.error('Inquiries automation error:', response.data);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Data berhasil disimpan',
        data: data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: 'Terjadi kesalahan pada server',
      },
      { status: 500 }
    );
  }
}
