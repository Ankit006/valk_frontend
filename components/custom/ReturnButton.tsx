"use client";

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
export default function ReturnButton() {
    const router = useRouter();
    return (
        <Button onClick={() => router.back()}>Return</Button>
    )
}
