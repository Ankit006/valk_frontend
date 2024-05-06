"use client";
import { baseUrl } from "@/lib/constants";
import { assetPathToName } from "@/lib/utils";
import { IAsset } from "@/model";
import React, { useEffect, useState } from "react";

interface Props {
    assets: IAsset[];
}
export default function ProductVideo({ assets }: Props) {
    const [medias, setMedias] = useState<IAsset[]>([]);
    useEffect(() => {
        if (assets && medias.length === 0) {
            for (let asset of assets) {
                if (asset.type === "video") {
                    setMedias((prevState) => [...prevState, asset]);
                    console.log(asset)
                }
            }
        }
    }, [assets, medias]);

    return (
        <div>
            <h4 className="font-semibold text-lg">Video</h4>
            {medias.length > 0 && (
                <video width="320" height="240" controls>
                    <source src={`${baseUrl}/videos/${assetPathToName(medias[0].path)}`} type="video/mp4"></source>
                </video>
            )}
        </div>
    );
}
