"use client";
import { useRouter } from "next/navigation";

export default function TestPage() {
    const router = useRouter();
    return(
        <><div>test2</div><button className="bg-white text-black" onClick={() => {
            router.push(
              `/landing`
            );
          }}>go back</button></>
    )
}