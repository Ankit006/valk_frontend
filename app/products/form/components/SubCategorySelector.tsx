"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
    Select,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectGroup,
    SelectItem,
} from "@/components/ui/select";
import { ICategory } from "@/model";
import { getCategoryByType } from "@/query";


interface Props {
    subCategoryId: string;
    setSubCategoryId: React.Dispatch<React.SetStateAction<string>>;
    categoryId: string
}

export default function SubCategorySelector({ subCategoryId, setSubCategoryId, categoryId }: Props) {
    const [categoryList, setCategoryList] = useState<ICategory[]>([]);

    const categoryListHandler = useCallback(async (categoryId: string) => {
        const res = await getCategoryByType(categoryId, "sub_category");
        setCategoryList(res);
    }, []);

    useEffect(() => {
        if (categoryId !== "") {
            categoryListHandler(categoryId);
        }
    }, [categoryListHandler, categoryId]);

    return (
        <Select value={subCategoryId} onValueChange={setSubCategoryId} required>
            <SelectTrigger>
                <SelectValue placeholder="Select sub category" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {categoryList.length > 0 &&
                        categoryList.map((category) => (
                            <SelectItem key={category.id} value={category.id.toString()}>
                                {category.name}
                            </SelectItem>
                        ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
