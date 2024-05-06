"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RotateCcw } from "lucide-react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function ProductCodeInput() {
    const [productCode, setProductCode] = useState("");

    function onClick() {
        setProductCode(uuid())
    }

    return (
        <div className="FormFiled">
            <Label htmlFor="product_code">Product code</Label>
            <div className="flex items-start space-x-4">
                <Input
                    value={productCode}
                    onChange={(e) => setProductCode(e.target.value)}
                    name="productCode"
                    required
                />
                <Button onClick={onClick} type="button" variant="outline">
                    <RotateCcw className=" h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
