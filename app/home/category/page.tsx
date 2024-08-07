import { getShirtsData, getShoesData, getPantsData } from "@/app/lib/actions";
import ProductCard from "@/app/ui/home/products/product-card";

export default async function Page() {
  const tshirts = await getShirtsData();
  const accessories = await getPantsData();
  const shoes = await getShoesData();

  return (
    <div className="container mx-auto p-6 flex flex-col gap-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">Shoes</h2>
        <ProductCard products={shoes} />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">T-shirts</h2>
        <ProductCard products={tshirts} />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Accessories</h2>
        <ProductCard products={accessories} />
      </section>
    </div>
  );
}
