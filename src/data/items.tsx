// src/data/items.ts
export interface Item {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  redirectUrl: string;
}

export interface LinkItem {
  title: string;
  subtitle: string;
  imageUrl: string;
  redirectUrl: string;
}

export const items: Item[] = [
  {
    id: "1",
    title: "100++ Ide Produk Digital & Cara Jualnya",
    description: "Memberikan anda kemudahan dalam berjualan di zaman serba digital sekarang",
    imageUrl: "/cover1.webp",
    redirectUrl: "https://digital.kacamatacuan.web.id/"
  }
];

export const links: LinkItem[] = [
  {
    title: "100++ Ide Produk Digital & Cara Jualnya",
    subtitle: "Memberikan anda kemudahan dalam berjualan di zaman serba digital sekarang",
    imageUrl: "/cover1.webp",
    redirectUrl: "https://digital.kacamatacuan.web.id/"
  }
];