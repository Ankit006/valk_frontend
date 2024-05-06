import { Button } from "@/components/ui/button";
import ProductsTable from "./components/ProductsTable";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="container mx-auto mt-12">
      <Link href="/products/form">
        <Button className="mb-12">Add product</Button>
      </Link>
      <ProductsTable />
    </div>
  );
}

export const dynamic = "force-dynamic";
