import ProductCard from "@/app/ui/home/products/product-card";
import { getAccessoriesData } from "@/app/lib/actions";
import { Product } from "@/app/lib/definitions";
import ProductCardsSkeleton from "@/app/ui/skeleton";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessories",
};

export default async function Page() {
  const products: Product[] = await getAccessoriesData();

  return (
    <div>
      <Suspense fallback={<ProductCardsSkeleton />}>
        <ProductCard products={products} />
      </Suspense>
    </div>
  );
}
