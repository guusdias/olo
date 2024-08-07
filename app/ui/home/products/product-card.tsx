import Image from "next/image";
import React from "react";
import { Product } from "@/app/lib/definitions";
import Link from "next/link";

interface ProductCardProps {
  products: Product[];
}

export default function ProductCard({ products }: ProductCardProps) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          key={product.productId}
          className="border p-4 rounded-lg flex flex-col items-center w-80 h-96"
          href={`/home/products/${product.productId}`}
        >
          <div className="mb-4">
            <Image
              alt="product-image"
              src={product.productImage.url}
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">{product.title.text}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-lg font-bold text-blue-600">${product.price}</p>
        </Link>
      ))}
    </div>
  );
}
