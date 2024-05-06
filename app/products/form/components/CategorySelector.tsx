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
import { getCategory } from "@/query";

interface Props {
    categoryId: string;
    setCategoryId: React.Dispatch<React.SetStateAction<string>>;
}

export default function CategorySelector({ categoryId, setCategoryId }: Props) {
    const [categoryList, setCategoryList] = useState<ICategory[]>([]);

    const categoryListHandler = useCallback(async () => {
        const res = await getCategory();
        setCategoryList(res);
    }, []);

    useEffect(() => {
        categoryListHandler();
    }, [categoryListHandler]);

    return (
        <Select value={categoryId} onValueChange={setCategoryId} required>
            <SelectTrigger>
                <SelectValue placeholder="Select category" />
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
