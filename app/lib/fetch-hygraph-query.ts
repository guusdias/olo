"use server";

export const fetchHygraphQuery = async (
  query: string,
  variables?: Record<string, any>
) => {
  try {
    const response = await fetch(process.env.HYGRAPH_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
      },
      body: JSON.stringify({ query, variables }),
      next: {
        revalidate: 60 * 60 * 24,
      },
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
};
