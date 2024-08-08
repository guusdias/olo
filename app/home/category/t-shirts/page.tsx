import ProductCard from "@/app/ui/home/products/product-card";
import { getShirtsData } from "@/app/lib/actions";
import ProductCardSkeleton from "@/app/ui/home/skeleton";
import { Suspense } from "react";

export default async function Page() {
  const product = await getShirtsData();

  return (
    <div>
      <Suspense fallback={<ProductCardSkeleton />}>
        <ProductCard products={product} />
      </Suspense>
    </div>
  );
}
