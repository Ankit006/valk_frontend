"use client";

import { ISpecification } from "@/model";
import { FormEvent, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import Spefication from "./component/Spefication";
import { Button } from "@/components/ui/button";
import { addSpecificationAction } from "@/action/action";
import { Loader2 } from "lucide-react";

export default function SpecificationList({
    params,
}: {
    params: { productId: string };
}) {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const productId = params.productId;
    const speficationList = useRef<{ [key: string]: Partial<ISpecification> }>(
        {}
    );
    const [inputList, setInputList] = useState<React.JSX.Element[]>([]);

    function handleAdd() {
        setInputList((prevState) => [
            ...prevState,
            <Spefication
                specificationList={speficationList}
                key={uuid()}
                productId={productId}

            />,
        ]);
    }

    useEffect(() => {
        if (productId) {
            setInputList([
                <Spefication
                    key={uuid()}
                    specificationList={speficationList}
                    productId={productId}


                />,
            ]);
        }
    }, [productId]);

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = Object.values(speficationList.current);
        setLoading(true);
        const res = await addSpecificationAction(data, productId);
        setLoading(false);
        setMessage(res.message);
    }

    return (
        <div className="container mx-auto mt-12">
            <form onSubmit={onSubmit}>
                <div className="flex items-center justify-between">
                    <Button type="button" onClick={handleAdd}>
                        Add field
                    </Button>
                    <Button type="submit" disabled={loading}>
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Submit
                    </Button>
                </div>
                <div className="mt-8 flex flex-col space-y-8">{inputList}</div>
                <p className="text-sm">{message}</p>
            </form>
        </div>
    );
}
