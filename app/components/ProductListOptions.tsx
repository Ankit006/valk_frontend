import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function ProductListOptions({ productId }: { productId: number }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <Link href={`/products/${productId}`}>
                        <DropdownMenuItem className="cursor-pointer">
                            View Details
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
