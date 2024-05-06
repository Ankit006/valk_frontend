import { getSingleProduct } from "@/query";
import SectionInfo from "./component/SectionInfo";
import ReturnButton from "@/components/custom/ReturnButton";
import ProductImages from "./component/ProductImages";
import ProductAudio from "./component/ProductAudio";
import ProductVideo from "./component/ProductVideo";

export default async function ProductDetails({ params }: { params: { productId: string } }) {
    const productId = params.productId;
    const product = await getSingleProduct(productId);
    return (
        <div className="container mx-auto mt-12">
            <ReturnButton />
            <div className="grid grid-cols-3 lg:grid-cols-4 space-y-4 mt-8">
                <SectionInfo label="Product name" text={product.name} />
                <SectionInfo label="Price" text={product.price} />
                <SectionInfo label="Category" text={product.brand.category.parent.parent.name} />
                <SectionInfo label="Sub Category" text={product.brand.category.parent.name} />
                <SectionInfo label="Child Category" text={product.brand.category.name} />
                <SectionInfo label="Brand" text={product.brand.name} />
                <SectionInfo label="Stocks" text={product.inventory.totalStock} />
                <SectionInfo label="Tax" text={product.inventory.tax} />
                <div className="col-span-full">
                    <SectionInfo label="SKU" text={product.inventory.productCode} />
                </div>
                <div className="col-span-full">
                    <ProductImages assets={product.assets} />
                </div>
                <div className="col-span-full">
                    <ProductAudio assets={product.assets} />
                </div>
                <div className="col-span-full">
                    <ProductVideo assets={product.assets} />
                </div>
            </div>
        </div>
    )
}
