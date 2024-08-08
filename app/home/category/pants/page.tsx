import ProductCard from "@/app/ui/home/products/product-card";
import { getPantsData } from "@/app/lib/actions";
import ProductCardsSkeleton from "@/app/ui/skeleton";
import { Suspense } from "react";

export default async function Page() {
  const products = await getPantsData();

  return (
    <div>
      <Suspense fallback={<ProductCardsSkeleton />}>
        <ProductCard products={products} />
      </Suspense>
    </div>
  );
}
