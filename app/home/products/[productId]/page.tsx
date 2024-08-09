import ProductPage from "@/app/ui/home/products/product-page";
import { getProductById } from "@/app/lib/actions";
import { notFound } from "next/navigation";
import { Product } from "@/app/lib/definitions";
import { Metadata } from "next";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export const metadata: Metadata = {
  title: "Product",
};

const Page = async ({ params }: ProductPageProps) => {
  const { productId } = params;
  const product: Product = await getProductById(productId);

  if (!productId) {
    notFound();
  }

  return <ProductPage product={product} />;
};

export default Page;
