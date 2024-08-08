import ProductCard from "@/app/ui/home/products/product-card";
import { getShirtsData } from "@/app/lib/actions";
import ProductCardsSkeleton from "@/app/ui/skeleton";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "T-shirts",
};

export default async function Page() {
  const product = await getShirtsData();

  return (
    <div>
      <Suspense fallback={<ProductCardsSkeleton />}>
        <ProductCard products={product} />
      </Suspense>
    </div>
  );
}
