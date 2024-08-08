import ProductCard from "@/app/ui/home/products/product-card";
import { getPantsData } from "@/app/lib/actions";
import ProductCardSkeleton from "@/app/ui/home/skeleton";
import { Suspense } from "react";

export default async function Page() {
  const products = await getPantsData();

  return (
    <div>
      <Suspense fallback={<ProductCardSkeleton />}>
        <ProductCard products={products} />
      </Suspense>
    </div>
  );
}
