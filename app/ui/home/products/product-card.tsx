import Image from "next/image";
import React from "react";
import { Product } from "@/app/lib/definitions";
import Link from "next/link";

interface ProductCardProps {
  products: Product[];
}

export default function ProductCard({ products }: ProductCardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <Link
          key={product.productId}
          className="border p-4 rounded-lg flex flex-col w-80 h-96 justify-between"
          href={`/home/products/${product.productId}`}
        >
          <Image
            alt={product.title.text}
            src={product.productImage.url}
            width={200}
            height={200}
            className="object-cover self-center items-center justify-center mb-7"
          />
          <div className="items-start">
            <h2 className="text-lg font-semibold">{product.title.text}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-lg font-bold text-slate-600">${product.price}</p>
            <button className="bg-slate-500 text-white px-4 py-2 rounded mt-4">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
