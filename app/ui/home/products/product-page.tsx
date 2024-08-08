import Image from "next/image";
import React from "react";
import Breadcrumbs from "@/app/ui/home/products/breadcrubs";
import { Product } from "@/app/lib/definitions";

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <div className="container mx-auto p-6">
      <nav className="breadcrumb mb-4">
        <Breadcrumbs
          breadcrumbs={[
            { label: `Produtos`, href: "/home/products" },
            {
              label: `${product.title.text}`,
              href: `/home/products/${product.title.text}`,
              active: true,
            },
          ]}
        />
      </nav>
      <div className="flex flex-col md:flex-row items-start">
        <div className="md:w-1/2 p-4 flex justify-center">
          <Image
            alt={product.title.text}
            src={product.productImage.url}
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-2">{product.title.text}</h1>
          <p className="text-xl text-gray-700 mb-4">${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          {/* <label className="block mb-2 text-gray-700">Size</label>
          <select className="mb-4 border rounded p-2">
            {product.productVariantSize.map((variant) => (
              <option
                key={variant.productSize.id}
                value={variant.productSize.id}
              >
                {variant.productSize.id}
              </option>
            ))}
          </select> */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
