import ProductCard from "@/app/ui/home/products/product-card";
import { getAccessoriesData } from "@/app/lib/actions";
import { Product } from "@/app/lib/definitions";

export default async function Page() {
  const products: Product[] = await getAccessoriesData();

  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
}
