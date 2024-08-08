import ProductCard from "@/app/ui/home/products/product-card";
import { getShoesData } from "@/app/lib/actions";
import ProductCardsSkeleton from "@/app/ui/skeleton";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoes",
};

export default async function Page() {
  const products = await getShoesData();
  console.log(products);
  return (
    <div>
      <Suspense fallback={<ProductCardsSkeleton />}>
        <ProductCard products={products} />
      </Suspense>
    </div>
  );
}
