import { getAllProducts } from "@/app/lib/actions";
import ProductCard from "@/app/ui/home/products/product-card";
import { Suspense } from "react";
import ProductCardsSkeleton from "@/app/ui/skeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const allProducts = await getAllProducts();
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">All Products</h2>
        <Suspense fallback={<ProductCardsSkeleton />}>
          <ProductCard products={allProducts} />
        </Suspense>
      </section>
    </div>
  );
}
