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
    title: "Kursus Fotografi Digital",
    description: "Pelajari teknik fotografi digital dari para ahli",
    imageUrl: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    redirectUrl: "https://www.youtube.com/results?search_query=digital+photography+course"
  },
  {
    id: "2",
    title: "E-book Desain Grafis",
    description: "Panduan lengkap untuk menjadi desainer grafis profesional",
    imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    redirectUrl: "https://www.google.com/search?q=graphic+design+ebook"
  },
  {
    id: "3",
    title: "Template Website Responsif",
    description: "Koleksi template website modern dan responsif",
    imageUrl: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    redirectUrl: "https://themeforest.net/category/site-templates"
  },
  {
    id: "4",
    title: "Aplikasi Produktivitas",
    description: "Tingkatkan efisiensi kerja Anda dengan aplikasi ini",
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    redirectUrl: "https://play.google.com/store/apps/category/PRODUCTIVITY"
  },
  {
    id: "5",
    title: "Kursus Pengembangan Web",
    description: "Belajar membuat website dari dasar hingga mahir",
    imageUrl: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    redirectUrl: "https://www.udemy.com/topic/web-development/"
  },
  {
    id: "6",
    title: "Perangkat Lunak Editing Video",
    description: "Software profesional untuk editing video",
    imageUrl: "https://images.pexels.com/photos/2544554/pexels-photo-2544554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    redirectUrl: "https://www.adobe.com/products/premiere.html"
  }
];

export const links: LinkItem[] = [
  {
    title: "Kursus Online Terbaik",
    subtitle: "Pelajari keterampilan baru dari para ahli",
    imageUrl: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    redirectUrl: "https://www.coursera.org/"
  },
  {
    title: "Marketplace Digital",
    subtitle: "Jual beli produk digital dengan mudah",
    imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    redirectUrl: "https://www.etsy.com/market/digital_products"
  },
  {
    title: "Komunitas Desainer",
    subtitle: "Bergabung dengan komunitas desainer global",
    imageUrl: "https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    redirectUrl: "https://dribbble.com/"
  }
];