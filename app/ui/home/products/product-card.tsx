"use client";
import Image from "next/image";
import React from "react";
import { Product } from "@/app/lib/definitions";
import Link from "next/link";

interface ProductCardProps {
  products: Product[];
}

export default function ProductCard({ products }: ProductCardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
      {products.map((product) => (
        <Link
          key={product.productId}
          href={`/home/products/${product.productId}`}
          className="border p-4 rounded-lg flex flex-col h-full justify-between shadow-sm hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex justify-center">
            <Image
              alt={product.title.text}
              src={product.productImage.url}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="mt-4 text-center flex flex-col items-start justify-center w-40">
            <h2 className="text-lg font-semibold text-wrap text-start">
              {product.title.text}
            </h2>
            <p className="text-gray-700 mt-1">{product.description}</p>
            <p className="text-lg font-bold text-slate-600 mt-2">
              ${product.price}
            </p>
            <button className="bg-slate-500 text-white px-4 py-2 rounded mt-4 hover:bg-slate-600 transition-colors duration-200 w-40">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
