"use server";
import { fetchHygraphQuery } from "@/app/lib/fetch-hygraph-query";
import { Product } from "@/app/lib/definitions";

export const getShirtsData = async (): Promise<Product[]> => {
  const query = `
    query MyQuery {
      category(where: {slug: "t-shirts"}) {
        id
        name {
          text
        }
        slug
        description
        pageProd {
          productImage {
            url
          }
          price
          productId 
          title {
          text
        }
        }
      }
    }
  `;
  const data = await fetchHygraphQuery(query);
  return data.category.pageProd || [];
};

export const getPantsData = async (): Promise<Product[]> => {
  const query = `
    query MyQuery {
      category(where: {slug: "pants"}) {
        id
        name {
          text
        }
        slug
        description
        pageProd {
          productImage {
            url
          }
          price
          productId
          title {
            text
          }
        }
      }
    }
  `;
  const data = await fetchHygraphQuery(query);
  return data.category.pageProd || [];
};

export const getAccessoriesData = async (): Promise<Product[]> => {
  const query = `
    query MyQuery {
      category(where: {slug: "accessories"}) {
        id
        name {
          text
        }
        slug
        description
        pageProd {
          productImage {
            url
          }
          price
          productId
          title {
            text
          }
        }
      }
    }
  `;

  const data = await fetchHygraphQuery(query);
  return data.category.pageProd || [];
};

export const getShoesData = async (): Promise<Product[]> => {
  const query = `
    query MyQuery {
      category(where: {slug: "shoes"}) {
        id
        name {
          text
        }
        slug
        description
        pageProd {
          productImage {
            url
          }
          price
          productId
          title {
            text
          }
        }
      }
    }
  `;

  const data = await fetchHygraphQuery(query);
  return data.category.pageProd || [];
};

export const getProductById = async (productId: string): Promise<Product> => {
  const query = `
    query MyQuery($productId: String!) {
      page(where: {productId: $productId}) {
        brand {
          text
        }
        ageGroup {
          text
        }
        description
        gender {
          text
        }
        productImage {
          url
        }
        title {
          text
        }
        productVariantSize {
          productSize {
            ... on Page {
              id
            }
          }
        }
        variants {
          ... on ProductVariantColor {
            color
            name
          }
        }
          price
      }
    }
  `;
  const variables = { productId };
  console.log("Query variables:", variables);

  const data = await fetchHygraphQuery(query, variables);

  console.log("Query result:", data);

  if (!data.page) {
    throw new Error("Product not found");
  }

  return {
    productId,
    title: data.page.title,
    productImage: data.page.productImage,
    price: data.page.price,
    description: data.page.description,
    brand: data.page.brand,
    ageGroup: data.page.ageGroup,
    gender: data.page.gender,
    productVariantSize: data.page.productVariantSize,
    variants: data.page.variants,
  };
};

export const getFemaleProducts = async (): Promise<Product[]> => {
  const query = `
  query MyQuery {
  feminino(where: {feminino: "feminino"}) {
    id
    feminino
    page {
      productId
      title {
        text
      }
      productImage {
        url
      }
      price
    }
  }
}  `;
  const data = await fetchHygraphQuery(query);
  return data.feminino.page || [];
};

export const getMaleProducts = async (): Promise<Product[]> => {
  const query = `
  query MyQuery {
  masculino(where: {masculino: "masculino"}) {
    id
    page {
      productId
      title {
        text
      }
      productImage {
        url
      }
      price
    }
  }
} `;
  const data = await fetchHygraphQuery(query);
  return data.masculino.page || [];
};
