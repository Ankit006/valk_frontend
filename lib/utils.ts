import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timestampToDate(timestamp: string) {
  const list = timestamp.split("T");
  return list[0];
}

export function assetPathToName(path: string) {
  const list = path.split(/[\\/]/);
  return list[2];
}
