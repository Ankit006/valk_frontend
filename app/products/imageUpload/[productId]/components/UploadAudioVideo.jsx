import React from 'react'
import { Label } from "@/components/ui/label";

export default function UploadAudioVideo() {

    return (
        <>
            <div className="formField">
                <Label htmlFor="image">Upload Audio</Label>
                <input
                    accept="audio/*"
                    name="audio"
                    type="file"
                    placeholder="Upload video"
                    className="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
                />
            </div>
            <div className="formField">
                <Label htmlFor="image">Upload Video</Label>
                <input
                    accept="video/*"
                    name="video"
                    type="file"
                    placeholder="Upload video"
                    className="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
                />
            </div>
        </>
    )
}
