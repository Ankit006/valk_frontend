"use client";
import { baseUrl } from "@/lib/constants";
import { assetPathToName } from "@/lib/utils";
import { IAsset } from "@/model";
import React, { useEffect, useState } from "react";

interface Props {
    assets: IAsset[];
}
export default function ProductAudio({ assets }: Props) {
    const [medias, setMedias] = useState<IAsset[]>([]);
    useEffect(() => {
        if (assets && medias.length === 0) {
            for (let asset of assets) {
                if (asset.type === "audio") {
                    setMedias((prevState) => [...prevState, asset]);
                }
            }
        }
    }, [assets, medias]);

    return (
        <div>
            <h4 className="font-semibold text-lg">Audio</h4>
            {medias.length > 0 && (
                <audio controls className="mt-4">
                    <source
                        src={`${baseUrl}/audios/${assetPathToName(medias[0].path)}`}
                        type="audio/mpeg"
                    />
                </audio>
            )}
        </div>
    );
}
