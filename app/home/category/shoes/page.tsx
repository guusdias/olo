import ProductCard from "@/app/ui/home/products/product-card";
import { getShoesData } from "@/app/lib/actions";

export default async function Page() {
  const products = await getShoesData();
  console.log(products);
  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
}
