"use server";

import { backendAPI } from "@/lib/constants";
import { ISpecification } from "@/model";
import { redirect } from "next/navigation";

export interface IUploadProductState {
  message: string;
}

export async function createProductAction(
  currentState: IUploadProductState,
  formData: FormData
): Promise<IUploadProductState> {
  const userInputs = Object.fromEntries(formData.entries());

  const parsedInput = {
    ...userInputs,
    weight: parseInt(userInputs["weight"] as string),
    height: parseInt(userInputs["height"] as string),
    length: parseInt(userInputs["length"] as string),
    width: parseInt(userInputs["width"] as string),
    totalStock: parseInt(userInputs["totalStock"] as string),
    tax: parseInt(userInputs["tax"] as string),
    price: parseInt(userInputs["price"] as string),
    brandId: parseInt(userInputs["brandId"] as string),
  };

  const res = await fetch(backendAPI.products, {
    method: "POST",
    body: JSON.stringify(parsedInput),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const body = await res.json();
  if (!res.ok) {
    if (body.message) {
      return { message: body.message };
    } else {
      return { message: "something went wrong" };
    }
  }

  redirect(`/products/imageUpload/${body["id"]}?redirect=true`);
}

interface IActionState {
  message: string;
}

export async function uploadMediaAction(
  currentState: IActionState,
  formData: FormData
): Promise<IActionState> {
  const productId = formData.get("productId");
  const isRedirect = formData.get("redirect");

  const res = await fetch(`${backendAPI.uploadAssets}/${productId}`, {
    method: "POST",
    body: formData,
  });
  const body = await res.json();
  if (!res.ok) {
    if (body.message) {
      return { message: body.message };
    }
    return { message: "something went wrong" };
  }
  if (isRedirect === "true") {
    redirect(`/products/specification/${productId}`);
  } else {
    return { message: "file is uploaded" };
  }
}

export async function addSpecificationAction(
  list: Partial<ISpecification>[],
  productId: string
) {
  const res = await fetch(`${backendAPI.specification}/${productId}`, {
    method: "POST",
    body: JSON.stringify(list),
    cache: "no-store",
    headers: {
      "Content-Type": "application/json", // Set Content-Type header to application/json
    },
  });
  const body = await res.json();
  if (!res.ok) {
    if (body.message) {
      return { message: body.message };
    }
    return { message: "something went wrong" };
  }
  return { message: body.message };
}
