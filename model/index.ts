export interface IProduct {
  id: number;
  name: string;
  slug: string;
  shortDesc: string;
  desc: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  price: number;
  brandId: number;
  createdAt: string;
  brand: IBrand & {
    category: ICategory & { parent: ICategory & { parent: ICategory } };
  };
  inventory: Iinventory;
  assets: IAsset[];
}

export interface IBrand {
  id: number;
  name: string;
  categoryId: number;
  createdAt: string;
}

export interface Iinventory {
  id: number;
  productId: number;
  totalStock: number;
  tax: number;
  productCode: string;
  createdAt: string;
}

export interface ICategory {
  id: number;
  name: string;
  type: string;
  parentId: number | null;
  createdAt: string;
}

export interface ISpecification {
  id: number;
  productId: number;
  name: string;
  desc: string;
}

export interface IAsset {
  id: number;
  productId: number;
  type: "audio" | "video" | "image";
  path: string;
  createdAt: string;
}
