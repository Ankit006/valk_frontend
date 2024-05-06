"use client"
import UploadImage from "./components/UploadImage";
import UploadAudioVideo from "./components/UploadAudioVideo";
import { uploadMediaAction } from "@/action/action";
import FormSubmitButton from "@/components/custom/FormSubmitButton";
import { useFormState } from "react-dom";
import { useSearchParams } from "next/navigation";

export default function UploadAssets({ params }: { params: { productId: string } }) {
    const [state, dispatch] = useFormState(uploadMediaAction, { message: "" })
    const searchParams = useSearchParams()
    const redirect = searchParams.get('redirect')
    return (
        <div className="container mx-auto mt-12">
            <form action={dispatch} className="flex flex-col space-y-6 w-full">
                <div className="flex justify-end">
                    <FormSubmitButton>Upload</FormSubmitButton>
                </div>
                <input type="hidden" name="productId" value={params.productId} />
                <input type="hidden" name="redirect" value={redirect ? redirect : "false"} />
                <UploadImage />
                <UploadAudioVideo />
            </form>
            {state.message && <p className="mt-4">{state.message}</p>}
        </div>
    );
}
