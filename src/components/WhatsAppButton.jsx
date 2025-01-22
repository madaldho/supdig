// src/components/WhatsAppButton.jsx
import React from 'react';
import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';

export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber='6282135415655'
      accountName='Kang Super Digital'
      avatar='/logosuperdigital.webp'
      statusMessage='Abangnya produk digital'
      initialMessageByServer='Halo! Ada yang bisa Akang bantu?'
      initialMessageByClient='Halo! Saya menemukan kontak Anda di website. Saya ingin konsultasi mengenai produk digital'
      startChatText='Mulai chat dengan kami'
      tooltipText='Butuh bantuan? Klik untuk chat!'
      allowEsc={true}
      notification={true}
      notificationSound={true}
    />
  );
}

