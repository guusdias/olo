import ProductCard from "@/app/ui/home/products/product-card";
import { getShoesData } from "@/app/lib/actions";
import ProductCardSkeleton from "@/app/ui/home/skeleton";
import { Suspense } from "react";

export default async function Page() {
  const products = await getShoesData();
  console.log(products);
  return (
    <div>
      <Suspense fallback={<ProductCardSkeleton />}>
        <ProductCard products={products} />
      </Suspense>
    </div>
  );
}
