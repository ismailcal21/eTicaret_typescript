export type FullProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductType = {
  products: FullProductType[];
  total: number;
  skip: number;
  limit: number;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string; // Buraya gerçek thumbnail tipini eklemeniz gerekiyor (string, URL vs.).
  images: string[]; // Buraya gerçek resim dizisi tipini eklemeniz gerekiyor (string[], URL[] vs.).
};

export type SingleProductType = {
  products: Product[];
};
