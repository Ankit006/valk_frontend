"use client";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { IBrand } from "@/model";
import { getBrandByid } from "@/query";
import React, { useCallback, useEffect, useState } from "react";


interface Props {
    childCategoryId: string
}

export default function BrandSelector({ childCategoryId, }: Props) {
    const [brandList, setBrandList] = useState<IBrand[]>([]);

    const categoryListHandler = useCallback(async (childCategoryId: string) => {
        const res = await getBrandByid(childCategoryId);
        setBrandList(res)
    }, []);

    useEffect(() => {
        if (childCategoryId !== "") {
            categoryListHandler(childCategoryId);
        }
    }, [categoryListHandler, childCategoryId]);

    return (
        <Select name="brandId" required>
            <SelectTrigger>
                <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {brandList.length > 0 &&
                        brandList.map((brand) => (
                            <SelectItem key={brand.id} value={brand.id.toString()}>
                                {brand.name}
                            </SelectItem>
                        ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
