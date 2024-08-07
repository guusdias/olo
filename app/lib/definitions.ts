export interface Product {
  productId: string;
  title: { text: string };
  productImage: {
    url: string;
  };
  price: number;
  description: string;
  brand: { text: string };
  ageGroup: { text: string };
  gender: { text: string };
  productVariantSize: { productSize: { id: string } }[];
  variants: { color: string; name: string }[];
}

export interface Category {
  id: string;
  name: Name;
  slug: string;
  description: string;
  page: Product;
}

export interface Name {
  text: string;
}
