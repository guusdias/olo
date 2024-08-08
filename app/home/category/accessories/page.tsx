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
    <div className="container mx-auto flex flex-col gap-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">Accessories</h2>
        <Suspense fallback={<ProductCardsSkeleton />}>
          <ProductCard products={products} />
        </Suspense>
      </section>
    </div>
  );
}
