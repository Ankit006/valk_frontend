"use client";
import ReturnButton from "@/components/custom/ReturnButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import BrandCategorySelector from "./components/BrandCategorySelector";
import ProductCodeInput from "./components/productCodeInput";
import FormSubmitButton from "@/components/custom/FormSubmitButton";
import { IUploadProductState, createProductAction } from "@/action/action";
import { useFormState } from "react-dom";

export default function ProductForm() {
    const currentState: IUploadProductState = { message: "" };
    const [state, dispatch] = useFormState(createProductAction, currentState);
    return (
        <div className="container mx-auto mt-12">
            <ReturnButton />

            <form className="grid items-center gap-6 mt-12 pb-12" action={dispatch}>
                <div className="flex justify-end">
                    <FormSubmitButton>Submit</FormSubmitButton>
                </div>
                {state.message && <p className="text-sm text-red-600">{state.message}</p>}
                <div className="flex items-center space-x-6">
                    <div className="w-full formField">
                        <Label htmlFor="product_name">Product name</Label>
                        <Input
                            id="product_name"
                            autoComplete="name"
                            placeholder="product name"
                            name="name"
                            required
                        />
                    </div>
                    <div className="w-full formField">
                        <Label htmlFor="slug">Slug (Optional)</Label>
                        <Input id="slug" placeholder="product slug" name="slug" />
                    </div>
                </div>
                <div className="formField">
                    <Label htmlFor="price">Price</Label>
                    <Input
                        id="price"
                        placeholder="product price"
                        name="price"
                        type="number"
                        required
                    />
                </div>
                <div className="formField">
                    <Label htmlFor="short_desc">Short description</Label>
                    <Textarea
                        id="short_desc"
                        name="shortDesc"
                        placeholder="Short description"
                        required
                    />
                </div>
                <div className="formField">
                    <Label htmlFor="desc">Description</Label>
                    <Textarea
                        id="desc"
                        name="desc"
                        placeholder="Description"
                        rows={12}
                        required
                    />
                </div>
                <BrandCategorySelector />

                <div className="flex items-center space-x-6">
                    <div className="w-full formField">
                        <Label htmlFor="width">Width</Label>
                        <Input
                            name="width"
                            id="width"
                            type="number"
                            placeholder="product width"
                            required
                        />
                    </div>
                    <div className="w-full formField">
                        <Label htmlFor="height">Height</Label>
                        <Input
                            name="height"
                            id="height"
                            type="number"
                            placeholder="product height"
                            required
                        />
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="w-full formField">
                        <Label htmlFor="length">Length</Label>
                        <Input
                            name="length"
                            id="length"
                            type="number"
                            placeholder="product length"
                            required
                        />
                    </div>
                    <div className="w-full formField">
                        <Label htmlFor="height">Weight</Label>
                        <Input
                            name="weight"
                            id="weight"
                            type="number"
                            placeholder="product weight"
                            required
                        />
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="w-full formField">
                        <Label htmlFor="total_stock">Total stock</Label>
                        <Input
                            name="totalStock"
                            id="total_stock"
                            type="number"
                            placeholder="product total stock"
                            required
                        />
                    </div>
                    <div className="w-full formField">
                        <Label htmlFor="tax">Tax (%)</Label>
                        <Input
                            name="tax"
                            id="tax"
                            type="number"
                            placeholder="Tax on product"
                            required
                        />
                    </div>
                </div>
                <ProductCodeInput />
            </form>
        </div>
    );
}
