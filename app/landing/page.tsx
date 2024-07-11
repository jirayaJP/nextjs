"use client";
import { useRouter } from "next/navigation";

export default function homePage() {
    const router = useRouter();
    return(
        <><div>test2</div><button onClick={() => {
            router.push(
              `/testPage`
            );
          }}>Next page</button></>
    )
}