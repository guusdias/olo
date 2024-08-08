import { getAllProducts } from "@/app/lib/actions";
import ProductCard from "@/app/ui/home/products/product-card";

export default async function Page() {
  const allProducts = await getAllProducts();
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">All Products</h2>
        <ProductCard products={allProducts} />
      </section>
    </div>
  );
}
