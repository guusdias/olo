import { getShirtsData, getShoesData, getPantsData } from "@/app/lib/actions";
import ProductCard from "@/app/ui/home/products/product-card";
import ProductCardsSkeleton from "@/app/ui/skeleton";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Category",
};

export default async function Page() {
  const tshirts = await getShirtsData();
  const accessories = await getPantsData();
  const shoes = await getShoesData();

  return (
    <div className="container mx-auto flex flex-col gap-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">Shoes</h2>
        <Suspense fallback={<ProductCardsSkeleton />}>
          <ProductCard products={shoes} />
        </Suspense>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">T-shirts</h2>
        <Suspense fallback={<ProductCardsSkeleton />}>
          <ProductCard products={tshirts} />
        </Suspense>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Accessories</h2>
        <Suspense fallback={<ProductCardsSkeleton />}>
          <ProductCard products={accessories} />
        </Suspense>
      </section>
    </div>
  );
}
