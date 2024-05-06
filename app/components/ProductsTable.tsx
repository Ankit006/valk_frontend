import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { timestampToDate } from "@/lib/utils"

import { getProducts } from '@/query'
import ProductListOptions from "./ProductListOptions"

export default async function ProductsTable() {
    const res = await getProducts()
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Brand</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Stocks</TableHead>
                    <TableHead>Upload date</TableHead>
                    <TableHead>Options</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {res.map((product) => <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.inventory.productCode}</TableCell>
                    <TableCell>{product.brand.name}</TableCell>
                    <TableCell>{product.brand.category.name}</TableCell>
                    <TableCell>{product.inventory.totalStock}</TableCell>
                    <TableCell>{timestampToDate(product.createdAt)}</TableCell>
                    <TableCell>
                        <ProductListOptions productId={product.id} />
                    </TableCell>
                </TableRow>)}
            </TableBody>
        </Table>
    )
}
