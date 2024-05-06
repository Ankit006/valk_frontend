"use client";

import { useState } from "react";
import CategorySelector from "./CategorySelector";
import SubCategorySelector from "./SubCategorySelector";
import ChildCategorySelector from "./ChildCategorySelector";
import BrandSelector from "./BrandSelector";

export default function BrandCategorySelector() {
    const [categoryId, setCategoryId] = useState("");
    const [subCategoryId, setSubCategoryId] = useState("");
    const [childCategoryId, setChildCategoryId] = useState("");
    return (
        <>
            <CategorySelector categoryId={categoryId} setCategoryId={setCategoryId} />
            <SubCategorySelector
                subCategoryId={subCategoryId}
                setSubCategoryId={setSubCategoryId}
                categoryId={categoryId}
            />
            <ChildCategorySelector
                childCategoryId={childCategoryId}
                setChildCategoryId={setChildCategoryId}
                subCategoryId={subCategoryId}
            />
            <BrandSelector childCategoryId={childCategoryId} />
        </>
    );
}
