import ProductCard from "@/app/ui/home/products/product-card";
import { getPantsData } from "@/app/lib/actions";
import ProductCardsSkeleton from "@/app/ui/skeleton";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pants",
};

export default async function Page() {
  const products = await getPantsData();

  return (
    <div className="container mx-auto flex flex-col gap-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">Pants</h2>
        <Suspense fallback={<ProductCardsSkeleton />}>
          <ProductCard products={products} />
        </Suspense>
      </section>
    </div>
  );
}
