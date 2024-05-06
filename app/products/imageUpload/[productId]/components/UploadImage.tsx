"use client";

import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function UploadImage() {
    const [_images, setImages] = useState<FileList | null>(null);
    const [error, setError] = useState("");



    async function handleFileUpload(imageFiles: FileList | null) {

        if (imageFiles) {
            const fileList = Array.from(imageFiles);
            if (fileList.length > 5) {
                setError("You cannot upload more than 5 images");
                return;
            }
            for (let file of fileList) {
                if (file.size > 150000) {
                    setError("File size must be under 150 kb");
                    return;
                }
            }
        }
        setImages(imageFiles);
    }

    return (
        <div className="formField">
            <Label htmlFor="image">Upload images</Label>
            <input
                onChange={(e) => handleFileUpload(e.target.files)}
                accept="image/*"
                multiple
                name="image"
                type="file"
                placeholder="Upload images"
                className="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
            />
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
    );
}
