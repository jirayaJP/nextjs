"use client";
import Link from 'next/link'
import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter();
    return(
        <><div>test2</div><Link href={"/testPage"}>Next</Link>
        <Link href={"/page3"}>page3</Link>
        </>
    )
}