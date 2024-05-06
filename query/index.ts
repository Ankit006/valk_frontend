import { backendAPI } from "@/lib/constants";
import { IBrand, ICategory, IProduct } from "@/model";

export async function getProducts(): Promise<IProduct[]> {
  const res = await fetch(backendAPI.products, { cache: "no-store" });
  const body = await res.json();
  if (!res.ok) {
    if (body.message) {
      throw new Error(body.message);
    }
    throw new Error("Something went wrong");
  }
  return body;
}

export async function getSingleProduct(productId: string): Promise<IProduct> {
  const res = await fetch(`${backendAPI.products}/${productId}`, {
    cache: "no-store",
  });
  const body = await res.json();
  if (!res.ok) {
    if (body.message) {
      throw new Error(body.message);
    }
    throw new Error("Something went wrong");
  }
  return body;
}

export async function getCategory(): Promise<ICategory[]> {
  const res = await fetch(backendAPI.category, { cache: "no-store" });
  const body = await res.json();
  if (!res.ok) {
    if (body.message) {
      throw new Error(body.message);
    }
    throw new Error("Something went wrong");
  }

  return body;
}

export async function getCategoryByType(
  categoryId: string,
  type: string
): Promise<ICategory[]> {
  const res = await fetch(
    `${backendAPI.category}?parentId=${categoryId}&type=${type}`,
    { cache: "no-store" }
  );
  const body = await res.json();
  if (!res.ok) {
    if (body.message) {
      throw new Error(body.message);
    }
    throw new Error("Something went wrong");
  }

  return body;
}

export async function getBrandByid(categoryId: string): Promise<IBrand[]> {
  const res = await fetch(`${backendAPI.brand}?categoryId=${categoryId}`, {
    cache: "no-store",
  });
  const body = await res.json();
  if (!res.ok) {
    if (body.message) {
      throw new Error(body.message);
    }
    throw new Error("Something went wrong");
  }

  return body;
}
