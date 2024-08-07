import ProductPage from "@/app/ui/home/products/product-page";
import { getProductById } from "@/app/lib/actions";
import { Product } from "@/app/lib/definitions";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const Page = async ({ params }: ProductPageProps) => {
  const { productId } = params;
  console.log("Product ID:", productId);

  try {
    const product: Product = await getProductById(productId);
    return <ProductPage product={product} />;
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Product not found</h1>
      </div>
    );
  }
};

export default Page;
