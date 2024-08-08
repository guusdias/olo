import ProductCard from "@/app/ui/home/products/product-card";
import { getShirtsData } from "@/app/lib/actions";

export default async function Page() {
  const product = await getShirtsData();

  return (
    <div>
      <ProductCard products={product} />
    </div>
  );
}
