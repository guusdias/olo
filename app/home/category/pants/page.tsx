import ProductCard from "@/app/ui/home/products/product-card";
import { getPantsData } from "@/app/lib/actions";

export default async function Page() {
  const products = await getPantsData();

  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
}
