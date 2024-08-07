export interface Product {
  productId: string;
  title: { text: string };
  productImage: {
    url: string;
  };
  price: number;
  description: string;
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
