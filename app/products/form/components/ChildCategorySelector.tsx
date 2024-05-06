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
    childCategoryId: string;
    setChildCategoryId: React.Dispatch<React.SetStateAction<string>>;
    subCategoryId: string
}

export default function ChildCategorySelector({ childCategoryId, setChildCategoryId, subCategoryId }: Props) {
    const [categoryList, setCategoryList] = useState<ICategory[]>([]);

    const categoryListHandler = useCallback(async (subCategoryId: string) => {
        const res = await getCategoryByType(subCategoryId, "child_category");
        setCategoryList(res);
    }, []);

    useEffect(() => {
        if (subCategoryId !== "") {
            categoryListHandler(subCategoryId);
        }
    }, [categoryListHandler, subCategoryId]);

    return (
        <Select value={childCategoryId} onValueChange={setChildCategoryId} required>
            <SelectTrigger>
                <SelectValue placeholder="Select child category" />
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
