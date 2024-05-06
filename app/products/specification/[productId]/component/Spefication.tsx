"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ISpecification } from "@/model";
import { Dispatch, MutableRefObject, SetStateAction, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
interface Props {
    specificationList: MutableRefObject<{
        [key: string]: Partial<ISpecification>;
    }>;
    productId: string;
}

export default function Spefication({ specificationList, productId }: Props) {
    const uniqueId = useRef(uuid());
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");

    function handleName(data: string) {
        if (specificationList.current[uniqueId.current]) {
            specificationList.current[uniqueId.current] = {
                ...specificationList.current[uniqueId.current],
                name: data,
            }
        } else {
            specificationList.current[uniqueId.current] = {
                productId: parseInt(productId),
                name: data,
                desc
            }
        }
        setName(data)
    }

    function handleDesc(data: string) {
        if (specificationList.current[uniqueId.current]) {
            specificationList.current[uniqueId.current] = {
                ...specificationList.current[uniqueId.current],
                desc: data,
            }
        } else {
            specificationList.current[uniqueId.current] = {
                productId: parseInt(productId),
                name,
                desc: data
            }
        }
        setDesc(data)
    }



    return (
        <div className="flex items-center  space-x-6">
            <div className="w-full formField">
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    placeholder="name"
                    value={name}
                    onChange={(e) => handleName(e.target.value)}
                    required
                />
            </div>
            <div className="w-full formField">
                <Label htmlFor="name">Description</Label>
                <Input
                    id="desc"
                    placeholder="Description"
                    value={desc}
                    onChange={(e) => handleDesc(e.target.value)}
                    required
                />
            </div>

        </div>
    );
}
