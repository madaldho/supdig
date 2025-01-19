// src/components/WhatsAppButton.jsx
import React from 'react';
import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';

export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber='6281387013123'
      accountName='Akang Super Digital'
      avatar='/favicon.png'
      statusMessage='Biasanya membalas dalam 1 jam'
      initialMessageByServer='Halo! Ada yang bisa kami bantu?'
      initialMessageByClient='Halo! Saya menemukan kontak Anda di website. Saya ingin konsultasi'
      startChatText='Mulai chat dengan kami'
      tooltipText='Butuh bantuan? Klik untuk chat!'
      allowEsc={true}
      notification={true}
      notificationSound={true}
    />
  );
}

