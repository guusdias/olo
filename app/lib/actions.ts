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
        }
      }
    }
  `;

  const data = await fetchHygraphQuery(query);
  return data.category.pageProd || [];
};
