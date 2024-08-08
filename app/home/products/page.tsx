import { getFemaleProducts, getMaleProducts } from "@/app/lib/actions";
import ProductCard from "@/app/ui/home/products/product-card";

export default async function Page() {
  const female = await getFemaleProducts();
  const male = await getMaleProducts();

  return (
    <div className="container mx-auto flex flex-col gap-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">Male</h2>
        <ProductCard products={male} />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Female</h2>
        <ProductCard products={female} />
      </section>
    </div>
  );
}
