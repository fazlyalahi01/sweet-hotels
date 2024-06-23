import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="h-screen grid place-items-center">
           <Image src="/loader.gif" alt="logo" height={70} width={100} className="animate-pulse" />
        </div>
    )
}