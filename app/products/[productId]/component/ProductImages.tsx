"use client";

import { baseUrl } from "@/lib/constants";
import { assetPathToName } from "@/lib/utils";
import { IAsset } from "@/model";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
    assets: IAsset[];
}

export default function ProductImages({ assets }: Props) {
    const [imageList, setImageList] = useState<IAsset[]>([]);

    useEffect(() => {
        if (assets && imageList.length === 0) {
            for (let asset of assets) {
                if (asset.type === "image") {
                    setImageList((prevState) => [...prevState, asset]);
                }
            }
        }
    }, [assets, imageList]);
    return (
        <div>
            <h4 className="font-semibold text-lg">Images</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {imageList.length > 0 &&
                    imageList.map((data, index) => (
                        <Image
                            src={`${baseUrl}/images/${assetPathToName(data.path)}`}
                            alt="product image"
                            key={index}
                            width={"300"}
                            height={"300"}
                            className="rounded-md"
                        />
                    ))}
            </div>
        </div>
    );
}
