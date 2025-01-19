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
  // Your existing items array
];

export const links: LinkItem[] = [
  {
    title: "Super Digital",
    subtitle: "Abangnya Produk Produkan",
    imageUrl: "/favicon.png",
    redirectUrl: "https://themeforest.net/"
  }
];