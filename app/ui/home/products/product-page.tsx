import Image from "next/image";
import React from "react";
import { Product } from "@/app/lib/definitions";

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <Image
            alt={product.title.text}
            src={product.productImage.url}
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4">{product.title.text}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-lg font-semibold mb-4">
            Brand: {product.brand.text}
          </p>
          <p className="text-lg font-semibold mb-4">
            Age Group: {product.ageGroup.text}
          </p>
          <p className="text-lg font-semibold mb-4">
            Gender: {product.gender.text}
          </p>
          <p className="text-2xl font-bold text-blue-600 mb-4">
            ${product.price}
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Available Sizes</h2>
        {/* <ul className="list-disc pl-5">
          {product.productVariantSize.map((variant) => (
            <li key={variant.productSize.id}>{variant.productSize.id}</li>
          ))}
        </ul> */}
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Variants</h2>
        {/* <ul className="list-disc pl-5">
          {product.variants.map((variant) => (
            <li key={variant.name}>
              {variant.name} - {variant.color}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default ProductPage;
