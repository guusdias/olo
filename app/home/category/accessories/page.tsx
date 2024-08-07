import ProductCard from "@/app/ui/home/products/product-card";
import { getAccessoriesData } from "@/app/lib/actions";

export default async function Page() {
  const products = await getAccessoriesData();

  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
}
